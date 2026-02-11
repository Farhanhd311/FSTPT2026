'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;       // ms
  direction?: 'up' | 'left' | 'right' | 'none';
  blur?: boolean;       // add blur effect on enter
  scale?: boolean;      // add subtle scale effect
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  blur = false,
  scale = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const scrollDir = useRef<'down' | 'up'>('down');

  // Track scroll direction
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      scrollDir.current = currentY >= lastY ? 'down' : 'up';
      lastY = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && scrollDir.current === 'down') {
          // Fade in: as soon as element appears at screen bottom
          setVisible(true);
        } else if (scrollDir.current === 'up' && entry.boundingClientRect.top > 0 && entry.intersectionRatio < 0.15) {
          // Fade out: when 85% of component is hidden (only 15% visible)
          setVisible(false);
        }
      },
      { threshold: [0, 0.05, 0.1, 0.15, 0.2] }
    );

    // Also check on scroll for smooth fade out at 85% hidden
    const onScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const visibleHeight = Math.max(0, window.innerHeight - Math.max(0, rect.top));
      const ratio = rect.height > 0 ? visibleHeight / rect.height : 0;

      if (scrollDir.current === 'up' && rect.top > 0 && ratio < 0.15) {
        setVisible(false);
      }
    };

    observer.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const translate =
    direction === 'up'
      ? 'translate-y-10'
      : direction === 'left'
        ? '-translate-x-10'
        : direction === 'right'
          ? 'translate-x-10'
          : '';

  const blurClass = blur ? (visible ? 'blur-0' : 'blur-[3px]') : '';
  const scaleClass = scale ? (visible ? 'scale-100' : 'scale-95') : '';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${visible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${translate}`}
                  ${blurClass} ${scaleClass}
                  ${className}`}
    >
      {children}
    </div>
  );
}
