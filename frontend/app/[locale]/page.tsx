'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import SubThemesGrid from '@/components/SubThemesGrid';
import Timeline from '@/components/Timeline';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

/* ────────────────────────────────────────
   Data (kept as-is — academic content)
   ──────────────────────────────────────── */

const subthemes = [
  { number: '01', title: 'Sustainable Transport Policy & Governance', desc: 'Kebijakan dan tata kelola transportasi yang mendorong keberlanjutan, efisiensi, serta keadilan akses bagi semua lapisan masyarakat merupakan fondasi penting dalam mewujudkan mobilitas berkelanjutan. Dengan kebijakan transportasi yang berorientasi pada keberlanjutan, setiap kelompok masyarakat—baik di perkotaan maupun pedesaan—dapat menikmati akses transportasi yang adil, aman, dan terjangkau. Hal ini secara langsung mendukung SDG 9 (Industry, Innovation and Infrastructure) melalui penguatan pembangunan infrastruktur transportasi yang tangguh dan inovatif, sekaligus mendorong pertumbuhan industri dan teknologi. Pada saat yang sama, kebijakan transportasi yang inklusif berkontribusi terhadap SDG 11 (Sustainable Cities and Communities) dengan menciptakan kota yang layak huni, efisien, dan ramah lingkungan, di mana transportasi publik yang terintegrasi menjadi tulang punggung mobilitas masyarakat. Lebih jauh, tata kelola transportasi yang baik tidak dapat berjalan tanpa kolaborasi lintas sektor dan lintas negara, sehingga memperkuat SDG 17 (Partnerships for the Goals) melalui kemitraan strategis antara pemerintah, akademisi, swasta, dan masyarakat.' },
  { number: '02', title: 'Digitalization, AI & Smart Mobility Systems', desc: 'Perencanaan mobilitas berbasis data dan partisipasi masyarakat memastikan solusi transportasi lebih inklusif dan tepat sasaran. Pendekatan ini mendukung SDG 4 dengan membuka akses pendidikan, SDG 11 dengan membangun kota berkelanjutan, serta SDG 17 melalui kolaborasi lintas sektor. Sementara itu, pemanfaatan teknologi digital, IoT, dan AI meningkatkan efisiensi serta keselamatan transportasi. Hal ini memperkuat SDG 9 lewat inovasi industri, mendukung SDG 11 dengan kota pintar yang efisien, dan memperkuat SDG 17 melalui integrasi sistem transportasi global.' },
  { number: '03', title: 'Emergency Mobility & Evacuation Strategies', desc: 'Strategi mobilitas darurat merupakan bagian penting dari sistem transportasi berkelanjutan karena berfungsi menjaga keselamatan masyarakat saat bencana atau krisis.' },
  { number: '04', title: 'Inclusive & Accessible Public Transport', desc: 'Transportasi publik yang ramah bagi kelompok rentan merupakan elemen penting dalam mewujudkan sistem mobilitas berkelanjutan.' },
  { number: '05', title: 'Green & Low-Carbon Vehicle Innovations', desc: 'Inovasi kendaraan ramah lingkungan menjadi salah satu pilar penting dalam mewujudkan mobilitas berkelanjutan.' },
  { number: '06', title: 'Sustainable Transport as a Driver of Smart Cities', desc: 'Transportasi berkelanjutan merupakan motor penggerak utama dalam mewujudkan kota pintar yang efisien, inklusif, dan ramah lingkungan.' },
  { number: '07', title: 'Freight & Logistics Innovations for Sustainable Supply Chains', desc: 'Inovasi logistik menjadi faktor kunci dalam memperkuat sistem transportasi dan distribusi yang berkelanjutan.' },
  { number: '08', title: 'Rail Electrification & Smart Railway Systems', desc: 'Elektrifikasi kereta merupakan langkah penting dalam transformasi transportasi berkelanjutan.' },
  { number: '09', title: 'Sustainable & Climate-Resilient Maritime Infrastructure', desc: 'Pelabuhan berkelanjutan memiliki peran vital dalam mendukung pembangunan berkelanjutan di berbagai sektor.' },
  { number: '10', title: 'Digitalization & Smart Maritime Logistics', desc: 'Transformasi digital dalam logistik maritim menjadi katalis penting bagi sistem distribusi global yang lebih efisien dan berkelanjutan.' },
  { number: '11', title: 'Resilient & Sustainable Road Pavement Systems', desc: 'Perkerasan jalan yang tangguh menjadi fondasi penting bagi mobilitas berkelanjutan.' },
  { number: '12', title: 'Sustainable & Climate-Resilient Air Transport', desc: 'Transportasi udara berkelanjutan memiliki peran strategis dalam mendukung pembangunan lintas sektor.' },
  { number: '13', title: 'Freight & Logistics Innovations for Sustainable Supply Chains', desc: 'Inovasi logistik berperan penting dalam memperkuat sistem distribusi yang tangguh dan berkelanjutan.' },
  { number: '14', title: 'Rail Electrification & Smart Railway Systems', desc: 'Elektrifikasi kereta merupakan langkah strategis dalam mewujudkan sistem transportasi berkelanjutan yang modern dan efisien.' },
  { number: '15', title: 'Sustainable & Climate-Resilient Maritime Infrastructure', desc: 'Pelabuhan berkelanjutan memiliki peran strategis dalam mendukung pembangunan berkelanjutan lintas sektor.' },
  { number: '16', title: 'Digitalization & Smart Maritime Logistics', desc: 'Transformasi digital dalam logistik maritim memainkan peran penting dalam meningkatkan efisiensi, transparansi, dan daya saing global.' },
  { number: '17', title: 'Resilient & Sustainable Road Pavement Systems', desc: 'Perkerasan jalan yang tangguh merupakan elemen penting dalam mendukung sistem transportasi berkelanjutan.' },
  { number: '18', title: 'Sustainable & Climate-Resilient Air Transport', desc: 'Transportasi udara berkelanjutan memiliki peran strategis dalam mendukung pembangunan berkelanjutan lintas sektor.' },
];

/* ────────────────────────────────────────
   Page Component
   ──────────────────────────────────────── */

export default function Home() {
  const t = useTranslations();

  const objectives = [
    { title: t('objectives.items.0.title'), desc: t('objectives.items.0.desc') },
    { title: t('objectives.items.1.title'), desc: t('objectives.items.1.desc') },
    { title: t('objectives.items.2.title'), desc: t('objectives.items.2.desc') },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">

        {/* ═══════════════ HERO (NEW DESIGN) ═══════════════ */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <Image
              src="/lembahanai.jpeg"
              alt="Smart City Transportation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pine/95 via-pine/80 to-pine/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-pine/60 via-transparent to-transparent" />
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full border border-white/5 animate-float-slow" />
          <div className="absolute bottom-32 right-[25%] w-48 h-48 rounded-full border border-fog/10 animate-float-delay" />
          <div className="absolute top-1/3 right-[10%] w-3 h-3 bg-fog/30 rounded-full animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-[20%] w-2 h-2 bg-moss/40 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />

          {/* Content */}
          <div className="relative w-full px-6 sm:px-10 lg:px-16 py-20">
            <div className="max-w-3xl space-y-6">
              <FadeIn delay={100}>
                <span className="inline-flex items-center gap-2.5 px-5 py-2 text-sm font-medium
                               text-white/90 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full">
                  <span className="w-2 h-2 bg-fog rounded-full animate-pulse" />
                  {t('hero.badge')}
                </span>
              </FadeIn>

              <FadeIn delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
                  {t('hero.title1')}{' '}
                  <span className="text-gradient-fog bg-gradient-to-r from-moss to-clay bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>
                  <br />
                  {t('hero.title2')}
                </h1>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-xl sm:text-2xl text-white/70 font-semibold tracking-tight">
                  {t('hero.subtitle')}
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="max-w-3xl border-l-4 border-fog pl-6 py-2">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-black leading-[1.2] tracking-tight">
                    <span className="bg-gradient-to-r from-white via-moss to-sage bg-clip-text text-transparent italic pr-4">
                      {t('hero.theme')}
                    </span>
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/login"
                    className="group relative px-7 py-3.5 bg-gradient-to-r from-fog to-sage text-white
                             text-sm font-bold rounded-xl overflow-hidden
                             hover:shadow-[0_8px_30px_rgba(70,112,126,0.4)] hover:-translate-y-0.5
                             transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2">
                      {t('hero.ctaPrimary')}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/call-for-paper/author-guideline"
                    className="px-7 py-3.5 text-white/80 text-sm font-semibold rounded-xl
                             border border-white/20 backdrop-blur-sm
                             hover:bg-white/10 hover:text-white hover:border-white/30
                             transition-all duration-300">
                    {t('hero.ctaSecondary')}
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* ═══════════════ ABOUT / PENJELASAN ═══════════════ */}
        <section className="flex flex-col justify-center items-center py-24 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left — Decorative block */}
              <FadeIn direction="left">
                <div className="relative">
                  <div className="aspect-[6/3] rounded-2xl bg-gradient-to-br from-pine to-fog overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('/mobility.jpg')] bg-cover bg-center opacity-30" />
                    <div className="relative z-10 flex left-3 bottom-2 flex-col justify-end h-full p-8">
                      <p className="text-clay text-sm font-semibold tracking-widest uppercase mb-2">{t('about.year')}</p>
                      <p className="text-white text-2xl font-extrabold leading-tight whitespace-pre-line">
                        {t('about.symposiumTitle')}
                      </p>
                    </div>
                  </div>
                  {/* Floating accent */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-moss/40 rounded-xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-fog/30 rounded-xl -z-10" />
                </div>
              </FadeIn>

              {/* Right — Text */}
              <FadeIn direction="right" delay={150}>
                <div>
                  <p className="text-fog font-semibold tracking-widest uppercase text-sm mb-3">{t('about.label')}</p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-pine leading-tight mb-6">
                    {t('about.title')}{' '}
                    <span className="text-fog">{t('about.titleHighlight')}</span>?
                  </h2>
                  <p className="text-sage leading-relaxed mb-8 text-justify">
                    {t('about.description')}
                  </p>
                  <p className="text-sage leading-relaxed text-center">
                    {t('about.eventInfo')} <strong className="text-pine">{t('about.istsdc')}</strong> {t('about.and')}{' '}
                    <strong className="text-pine">{t('about.symposiumNasional')}</strong> {t('about.withTheme')}
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { value: 'XXIXth', label: t('about.statSymposium') },
                      { value: '500+', label: t('about.statPeserta') },
                      { value: '100+', label: t('about.statPaper') },
                    ].map((s, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl sm:text-3xl font-extrabold text-fog">{s.value}</p>
                        <p className="text-sage text-sm mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ═══════════════ OBJECTIVES ═══════════════ */}
        <section className="flex flex-col justify-center items-center py-24 lg:py-16 bg-clay/15">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <FadeIn>
              <div className="max-w-8xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-pine text-center leading-tight mb-4">
                  {t('objectives.title')}
                </h2>
                <p className="text-sage text-center leading-relaxed">
                  {t('objectives.subtitle')}
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12 py-10">
              {objectives.map((obj, i) => (
                <FadeIn key={i} delay={i * 120}>
                  <div className="group relative bg-white rounded-2xl shadow-sm h-70
                                  hover:shadow-xl hover:-translate-y-1
                                  transition-all duration-300 overflow-hidden">

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fog to-sage
                                    scale-x-0 group-hover:scale-x-100 origin-left
                                    transition-transform duration-500" />

                    {/* Row 1 — Title */}
                    <div className="flex justify-center items-center px-4 pt-6 pb-4 border-b border-clay/30">
                      <h3 className="text-lg font-bold text-pine text-center">
                        {obj.title}
                      </h3>
                    </div>

                    {/* Row 2 — Description */}
                    <div className="px-8 pt-4 pb-8">
                      <p className="text-sage text-sm text-center leading-relaxed">
                        {obj.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ═══════════════ MAIN ACTIVITIES ═══════════════ */}
        <section className="flex flex-col justify-center items-center py-24 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            {/* Section Header */}
            <FadeIn>
              <div className="flex flex-col justify-center items-center text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-pine leading-tight mb-4">
                  {t('activities.title')}
                </h2>
                <p className="text-sage leading-relaxed max-w-2xl mx-auto pb-10">
                  {t('activities.subtitle')}
                </p>
              </div>
            </FadeIn>

            {/* Paragraph blocks with left accent + number */}
            <div className="h-100 space-y-12 mb-20">

              {/* Block 1 */}
              <FadeIn direction="left">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-fog text-white flex items-center justify-center text-sm font-bold">01</div>
                    <div className="w-px flex-1 bg-clay/40 mt-2" />
                  </div>
                  <div className="border-l-3 border-fog/20 pl-6 pb-2">
                    <h3 className="text-lg font-bold text-pine mb-3">{t('activities.block1Title')}</h3>
                    <p className="text-sage text-sm lg:text-base leading-relaxed pl-5">{t('activities.block1Desc')}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Block 2 */}
              <FadeIn direction="left" delay={150}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-fog text-white flex items-center justify-center text-sm font-bold">02</div>
                    <div className="w-px flex-1 bg-clay/40 mt-2" />
                  </div>
                  <div className="border-l-3 border-fog/20 pl-6 pb-2">
                    <h3 className="text-lg font-bold text-pine mb-3">{t('activities.block2Title')}</h3>
                    <p className="text-sage text-sm lg:text-base leading-relaxed pl-5">{t('activities.block2Desc')}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Block 3 */}
              <FadeIn direction="left" delay={300}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-fog text-white flex items-center justify-center text-sm font-bold">03</div>
                  </div>
                  <div className="border-l-3 border-fog/20 pl-6 pb-2">
                    <h3 className="text-lg font-bold text-pine mb-3">{t('activities.block3Title')}</h3>
                    <p className="text-sage text-sm lg:text-base leading-relaxed pl-5">{t('activities.block3Desc')}</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ISTSDC & FSTPT Detail Block */}
            <FadeIn>
              <div className="bg-pine rounded-3xl p-10 lg:p-16 relative overflow-hidden mt-50">
                <div className="absolute top-0 right-0 w-72 h-72 bg-fog/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-sage/5 rounded-full translate-y-1/3 -translate-x-1/4" />
                <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-fog to-transparent rounded-full" />

                <div className="relative">
                  <div className="text-center mb-10">
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-snug">{t('activities.detailTitle')}</h3>
                    <p className="text-moss/80 text-sm lg:text-lg text-center italic max-w-7xl mx-auto">{t('activities.detailSubtitle')}</p>
                  </div>
                  <div className="flex justify-center"><div className="w-16 h-px bg-fog/30" /></div>
                  <div className="space-y-6 text-moss text-sm lg:text-base leading-relaxed max-w-7xl mx-auto text-center">
                    <p>{t('activities.detailP1')}</p>
                    <p>{t('activities.detailP2')}</p>
                    <p>{t('activities.detailP3')}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>


        {/* ═══════════════ SUBTHEMES ═══════════════ */}
        <section className="flex flex-col justify-center items-center py-24 lg:py-20 bg-pine relative overflow-hidden mt-16">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fog/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/10 rounded-full translate-y-1/2 -translate-x-1/3" />

          <div className="relative max-w-5xl mx-auto px-6 lg:px-12">

            <FadeIn>
              <div className="text-center max-w-7xl mx-auto mb-16">
                <p className="text-moss font-semibold tracking-widest uppercase text-sm mb-3">{t('subthemes.label')}</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">{t('subthemes.title')}</h2>
                <p className="text-moss leading-relaxed pb-12">{t('subthemes.subtitle')}</p>
              </div>
            </FadeIn>

            <SubThemesGrid subthemes={subthemes} />
          </div>
        </section>

        {/* ═══════════════ IMPORTANT DATES ═══════════════ */}
        <section className="relative py-28 lg:py-20 bg-gradient-to-b from-white via-clay/5 to-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="absolute top-16 left-[8%] w-64 h-64 bg-fog/5 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-[10%] w-48 h-48 bg-sage/5 rounded-full blur-3xl animate-float-delay" />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center mb-20">
                <p className="text-fog font-semibold tracking-widest uppercase text-sm mb-3">{t('timeline.label')}</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-pine leading-tight mb-4">{t('timeline.title')}</h2>
                <p className="text-sage leading-relaxed max-w-xl mx-auto">{t('timeline.subtitle')}</p>
              </div>
            </FadeIn>

            <Timeline />
          </div>
        </section>

        {/* ═══════════════ CTA BANNER ═══════════════ */}
        <section className="flex flex-col justify-center items-center py-24 lg:py-32 bg-gradient-to-br from-clay/20 to-white mt-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <FadeIn>
              <p className="text-fog font-semibold tracking-widest uppercase text-sm mb-3">{t('cta.label')}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-pine leading-tight mb-6">{t('cta.title')}</h2>
              <p className="text-sage leading-relaxed mb-10 max-w-2xl mx-auto">{t('cta.description')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-pine text-white font-bold rounded-xl
                                 hover:bg-fog hover:-translate-y-1 hover:shadow-xl
                                 transition-all duration-300">
                  {t('cta.submitPaper')}
                </button>
                <Link href="/call-for-paper/author-guideline">
                  <button className="px-8 py-4 border-2 border-fog text-fog font-bold rounded-xl
                                   hover:bg-fog hover:text-white hover:-translate-y-1
                                   transition-all duration-300 w-full sm:w-auto">
                    {t('cta.authorGuide')}
                  </button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
