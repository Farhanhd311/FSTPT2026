'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function FlyerPage() {
  const t = useTranslations('flyer');

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-16 lg:py-24 bg-clay/10">
        <div className="max-w-8xl mx-auto px-15 space-y-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-pine mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fog to-sage">{t('title')}</span>
          </h1>
          <p className="text-lg text-sage mb-12 text-center">
            {t('subtitle')}
          </p>
          
          {/* Placeholder Content - Flyer Display */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="aspect-[3/4] bg-gradient-to-br from-clay/30 to-moss/30 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 text-fog mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sage text-lg">{t('preview')}</p>
                  <p className="text-moss text-sm mt-2">{t('previewDesc')}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-fog to-sage text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200">
                {t('download')}
              </button>
              <button className="px-8 py-4 border-2 border-fog text-fog rounded-xl font-semibold hover:bg-clay/20 transition-all duration-200">
                {t('share')}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
