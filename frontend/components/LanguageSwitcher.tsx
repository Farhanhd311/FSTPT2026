'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useState, useRef, useEffect } from 'react';

const locales = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'id', flag: '🇮🇩', name: 'Indonesia' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'zh', flag: '🇨🇳', name: '中文' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'ja', flag: '🇯🇵', name: '日本語' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
] as const;

export default function LanguageSwitcher() {
  const t = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find(l => l.code === locale) || locales[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(nextLocale: string) {
    setOpen(false);
    router.replace(pathname, { locale: nextLocale as typeof locale });
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium
          text-pine hover:text-fog hover:bg-fog/5 transition-all duration-200"
        aria-label={t('switchLanguage')}
      >
        <span className="text-base leading-none">{currentLocale.flag}</span>
        <span className="hidden sm:inline">{currentLocale.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute right-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-2xl rounded-xl
          shadow-[0_12px_40px_rgba(34,57,60,0.15)] border border-pine/5 py-1.5 z-50
          transition-all duration-200 origin-top-right
          ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
        `}
      >
        {locales.map((l) => (
          <button
            key={l.code}
            onClick={() => switchLocale(l.code)}
            className={`
              w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-150
              ${locale === l.code
                ? 'bg-fog/10 text-fog'
                : 'text-pine hover:bg-fog/5 hover:text-fog'
              }
            `}
          >
            <span className="text-base leading-none">{l.flag}</span>
            <span>{l.name}</span>
            {locale === l.code && (
              <svg className="w-3.5 h-3.5 ml-auto text-fog" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
