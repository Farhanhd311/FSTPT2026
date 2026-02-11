'use client';

import { useState, useEffect, useCallback } from 'react';
import FadeIn from './FadeIn';

interface SubTheme {
  number: string;
  title: string;
  desc: string;
}

export default function SubThemesGrid({ subthemes }: { subthemes: SubTheme[] }) {
  const [selected, setSelected] = useState<SubTheme | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = (st: SubTheme) => {
    setSelected(st);
    // Small delay so the element mounts before we trigger the CSS transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
  };

  const closeModal = useCallback(() => {
    setIsVisible(false);
    // Wait for the exit animation to finish before unmounting
    setTimeout(() => setSelected(null), 300);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (selected) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selected, closeModal]);

  return (
    <>
      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {subthemes.map((st, i) => (
          <FadeIn key={i} delay={i * 60}>
            <div
              onClick={() => openModal(st)}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10
                        rounded-xl p-5 hover:bg-white/10 hover:border-fog/40
                        hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Number badge */}
              <span className="text-4xl font-black text-fog/20 absolute top-3 right-4
                             group-hover:text-fog/40 transition-colors duration-300">
                {st.number}
              </span>

              <div className="relative">
                <div className="w-8 h-1 bg-gradient-to-r from-fog to-sage rounded-full mb-3" />
                <h3 className="text-sm font-bold text-white pr-10 pt-3 leading-snug">{st.title}</h3>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Modal Overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            style={{ opacity: isVisible ? 1 : 0 }}
          />

          {/* Popup Card */}
          <div
            className="relative w-full max-w-3xl transition-all duration-300 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-pine rounded-2xl p-8 lg:p-10 border border-fog/20 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-fog/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-sage/5 rounded-full translate-y-1/3 -translate-x-1/4" />
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-fog to-transparent rounded-full" />

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                         text-moss/60 hover:text-white rounded-full hover:bg-white/10
                         transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative">
                {/* Number */}
                <span className="text-6xl font-black text-fog/15">{selected.number}</span>

                {/* Accent line */}
                <div className="w-12 h-1 bg-gradient-to-r from-fog to-sage rounded-full mt-4 mb-5" />

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-extrabold text-white leading-snug mb-5">
                  {selected.title}
                </h3>

                {/* Description */}
                <p className="text-moss text-sm lg:text-base leading-relaxed">
                  {selected.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
