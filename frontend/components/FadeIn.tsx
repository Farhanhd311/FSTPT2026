'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;       // ms
  direction?: 'up' | 'left' | 'right' | 'none';
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate =
    direction === 'up'
      ? 'translate-y-8'
      : direction === 'left'
      ? '-translate-x-8'
      : direction === 'right'
      ? 'translate-x-8'
      : '';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out
                  ${visible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${translate}`}
                  ${className}`}
    >
      {children}
    </div>
  );
}
