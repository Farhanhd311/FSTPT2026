'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface DropdownItem {
  href: string;
  label: string;
  desc?: string;
  icon?: React.ReactNode;
  color?: string; // Tailwind color class like 'text-fog' or 'text-sage'
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: 'Symposium', href: '/' },
  {
    label: 'Main Program',
    dropdown: [
      {
        href: '/main-program/sub-page-1',
        label: 'Agenda Kegiatan',
        desc: 'Jadwal lengkap konferensi',
        color: 'text-fog',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        href: '/main-program/sub-page-2',
        label: 'Venue & Hotel',
        desc: 'Informasi lokasi dan penginapan',
        color: 'text-sage',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
    ],
  },
  {
    label: 'Call For Paper',
    dropdown: [
      {
        href: '/call-for-paper/author-guideline',
        label: 'Author Guideline',
        desc: 'Complete submission manual',
        color: 'text-clay',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      },
      {
        href: '/call-for-paper/registration',
        label: 'Registration',
        desc: 'Register as participant',
        color: 'text-moss',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        )
      },
    ],
  },
  { label: 'Panitia', href: '/panitia' },
  { label: 'Flyer', href: '/flyer' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <nav
        className={`
          sticky top-0 z-50 transition-all duration-500 ease-out
          ${scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(34,57,60,0.08)] border-b border-pine/5'
            : 'bg-white/95 backdrop-blur-sm'
          }
        `}
      >
        <div className="w-full px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative overflow-hidden">
                <Image
                  src="/logo.htm"
                  alt="Logo FSTPT"
                  width={130}
                  height={40}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`
                        relative flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium
                        transition-all duration-200
                        ${activeDropdown === item.label
                          ? 'text-fog bg-fog/5'
                          : 'text-pine hover:text-fog hover:bg-fog/5'
                        }
                      `}
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {/* Active indicator dot */}
                      {activeDropdown === item.label && (
                        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-fog rounded-full" />
                      )}
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`
                        absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300
                        ${activeDropdown === item.label
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-4 pointer-events-none'
                        }
                      `}
                    >
                      <div className="w-[320px] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(34,57,60,0.15)] border border-pine/5 p-2.5 overflow-hidden">
                        {/* Elegant accent border at top */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fog via-sage to-clay opacity-80" />

                        <div className="space-y-1">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-white hover:to-pine/5 transition-all duration-300 relative overflow-hidden"
                            >
                              {/* Hover glow effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000" />

                              <div className={`
                                w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300
                                bg-white shadow-sm border border-pine/5
                                group-hover/item:scale-110 group-hover/item:shadow-md
                                ${sub.color || 'text-pine'} group-hover/item:bg-pine group-hover/item:text-white
                              `}>
                                {sub.icon}
                              </div>

                              <div className="flex flex-col gap-0.5 pointer-events-none">
                                <span className="text-[15px] font-bold text-pine flex items-center gap-1.5 transition-colors group-hover/item:text-fog">
                                  {sub.label}
                                  <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </span>
                                {sub.desc && (
                                  <span className="text-xs text-sage leading-snug group-hover/item:text-pine/60 transition-colors">
                                    {sub.desc}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="relative px-3.5 py-2 rounded-lg text-sm font-medium text-pine hover:text-fog hover:bg-fog/5 transition-all duration-200 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-fog to-sage group-hover:w-4/5 transition-all duration-300 rounded-full" />
                  </Link>
                )
              )}
            </div>

            {/* Right side: CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              {/* CTA Button */}
              <Link
                href="/login"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold
                  bg-gradient-to-r from-pine to-fog text-white
                  hover:shadow-lg hover:shadow-fog/25 hover:-translate-y-[1px]
                  active:translate-y-0 active:shadow-md
                  transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                SMC-FSTPT
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-fog/5 transition-colors"
                aria-label="Toggle menu"
              >
                <span className={`w-5 h-[2px] bg-pine rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
                <span className={`w-5 h-[2px] bg-pine rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`w-5 h-[2px] bg-pine rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`
          fixed inset-0 bg-pine/30 backdrop-blur-sm z-40 md:hidden
          transition-opacity duration-300
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile slide-in panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[280px] bg-white z-50 md:hidden
          shadow-[-8px_0_30px_rgba(34,57,60,0.1)]
          transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-clay/30">
          <span className="text-pine font-bold text-lg">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-fog/5 transition-colors"
          >
            <svg className="w-5 h-5 text-pine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile menu items */}
        <div className="px-3 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-140px)]">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                  }
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-pine hover:bg-fog/5 transition-colors"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 text-pine/40 transition-transform duration-300 ${mobileDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${mobileDropdown === item.label ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="ml-3 pl-3 border-l-2 border-fog/10 space-y-0.5 py-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-fog/5 transition-all duration-200"
                      >
                        <div className={`w-8 h-8 rounded-md flex items-center justify-center bg-white shadow-sm border border-pine/5 ${sub.color || 'text-pine'} group-hover:bg-pine group-hover:text-white transition-all`}>
                          {/* Scale down icon for mobile */}
                          <div className="scale-75">
                            {sub.icon}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-pine group-hover:text-fog transition-colors">
                            {sub.label}
                          </span>
                          <span className="text-[10px] text-sage/70 group-hover:text-pine/40 transition-colors line-clamp-1">
                            {sub.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-pine hover:text-fog hover:bg-fog/5 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-clay/20 bg-white">
          <Link
            href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold
              bg-gradient-to-r from-pine to-fog text-white
              hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            SMC-FSTPT
          </Link>
        </div>
      </div>
    </>
  );
}
