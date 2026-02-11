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
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
  };

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setSelected(null), 350);
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subthemes.map((st, i) => (
          <FadeIn key={i} delay={i * 50}>
            <div
              onClick={() => openModal(st)}
              className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08]
                        rounded-xl p-5 hover:bg-white/[0.1] hover:border-fog/30
                        hover:-translate-y-1 hover:shadow-lg hover:shadow-fog/5
                        transition-all duration-400 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-fog/0 via-transparent to-sage/0
                              group-hover:from-fog/5 group-hover:to-sage/5 transition-all duration-500 rounded-xl" />

              {/* Number badge */}
              <span className="text-4xl font-black text-white/[0.06] absolute top-3 right-4
                             group-hover:text-fog/15 transition-colors duration-400">
                {st.number}
              </span>

              <div className="relative">
                <div className="w-8 h-1 bg-gradient-to-r from-fog to-sage rounded-full mb-3
                                group-hover:w-12 transition-all duration-400" />
                <h3 className="text-sm font-bold text-white/90 pr-10 leading-snug
                               group-hover:text-white transition-colors duration-300">{st.title}</h3>
              </div>

              {/* Arrow indicator on hover */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100
                              translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-4 h-4 text-fog/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
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
            className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-350"
            style={{ opacity: isVisible ? 1 : 0 }}
          />

          {/* Popup Card */}
          <div
            className="relative w-full max-w-3xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(24px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-pine via-[#1e3a3f] to-pine rounded-2xl p-8 lg:p-10 border border-fog/15 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-fog/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-sage/5 rounded-full translate-y-1/3 -translate-x-1/4" />
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-fog/30 to-transparent rounded-full" />

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center
                         text-moss/50 hover:text-white rounded-xl hover:bg-white/10
                         transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative">
                {/* Number */}
                <span className="text-6xl font-black text-fog/10">{selected.number}</span>

                {/* Accent line */}
                <div className="w-14 h-1 bg-gradient-to-r from-fog to-sage rounded-full mt-4 mb-5" />

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-extrabold text-white leading-snug mb-5">
                  {selected.title}
                </h3>

                {/* Description */}
                <p className="text-moss/80 text-sm lg:text-[15px] leading-relaxed">
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
