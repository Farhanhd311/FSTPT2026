'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="relative h-20 px-12">

        {/* LEFT — LOGO */}
        <div className="absolute left-13 inset-y-0 flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-pine hover:text-fog transition"
          >
              <Image src="/logo.htm" alt="Logo" width={160} height={150} />
          </Link>
        </div>

        {/* CENTER — MENU */}
        <div
          className="absolute inset-0 flex items-center justify-center
                    hidden md:flex gap-8"
        >
          <Link href="/" className="text-pine font-medium hover:text-fog transition-colors">Symposium Nasional FSTPT Ke-29</Link>

          {/* Main Program */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopDropdown('main')}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            <button className="text-pine font-medium hover:text-fog transition-colors flex items-center gap-1">
              Main Program <Chevron />
            </button>

            {desktopDropdown === 'main' && (
              <Dropdown>
                <DropdownItem href="/main-program/sub-page-1" label="Sub Page 1" />
                <DropdownItem href="/main-program/sub-page-2" label="Sub Page 2" />
              </Dropdown>
            )}
          </div>

          {/* Call For Paper */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopDropdown('cfp')}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            <button className="text-pine font-medium hover:text-fog transition-colors flex items-center gap-1">
              Call For Paper <Chevron />
            </button>

            {desktopDropdown === 'cfp' && (
              <Dropdown>
                <DropdownItem href="/call-for-paper/sub-page-1" label="Sub Page 1" />
                <DropdownItem href="/call-for-paper/sub-page-2" label="Sub Page 2" />
              </Dropdown>
            )}
          </div>

          <Link href="/panitia" className="text-pine font-medium hover:text-fog transition-colors">Panitia</Link>
          <Link href="/flyer" className="text-pine font-medium hover:text-fog transition-colors">Flyer</Link>
        </div>

        {/* RIGHT — LOGIN */}
        <div className="absolute right-13 inset-y-0 hidden md:flex items-center">
          <Link
            href="/login"
             className="h-9 w-24 inline-flex items-center justify-center
             rounded-lg border border-fog
             bg-white
             font-semibold text-sm text-fog
             hover:bg-pine hover:text-white hover:border-pine
             transition-all duration-200"
          >
            SMC-FSTPT
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-5 inset-y-0 md:hidden px-2"
        >
          ☰
        </button>

      </div>
    </nav>

  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Chevron() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Dropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-3 border border-clay">
      {children}
    </div>
  );
}

function DropdownItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-5 py-2.5 text-pine hover:bg-clay/30 hover:text-fog
                 transition-all duration-200 rounded-lg mx-2"
    >
      {label}
    </Link>
  );
}
