'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function FlyerPage() {
  const t = useTranslations('flyer');

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#fafafa] pb-32 font-inter">

        {/* ═══════════════ HERO SECTION ═══════════════ */}
        <section className="relative h-[40vh] min-h-[350px] bg-pine flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-pine via-pine/90 to-fog/40 z-10" />
            <div className="absolute inset-0 bg-[url('/lembahanai.jpeg')] bg-cover bg-center opacity-20" />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full text-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-moss text-xs font-bold uppercase tracking-widest mb-6">
                {t('title')}
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                {t('title')} <span className="text-gradient-fog bg-gradient-to-r from-moss to-clay bg-clip-text text-transparent">Official</span>
              </h1>
              <p className="text-moss/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                {t('subtitle')}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-10" />
        </section>

        <div className="max-w-4xl w-full mx-auto px-6 text-center space-y-12 -mt-16 relative z-30">
          {/* Flyer Display */}

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-tr from-fog/10 to-clay/10 rounded-[3rem] blur-2xl opacity-60 transition-opacity duration-500" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[1/1.414]">
              <Image
                src="/flyerrr.png"
                alt="FSTPT 2026 Official Flyer"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>


          {/* Action Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="/flyerrr.png"
              download="Flyer 5th ISTSDC & FSTPT XXIX 2026.png"
              className="inline-flex items-center gap-3 px-12 py-5 bg-pine text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-fog hover:scale-105 shadow-xl shadow-pine/10 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t('download')}
            </a>


          </div>

        </div>

      </main>
      <Footer />
    </>
  );
}
