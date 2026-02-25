'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function AuthorGuideline() {
    const t = useTranslations('authorGuideline');
    const c = useTranslations('authorGuidelineContent');
    const [activeSection, setActiveSection] = useState('abstract');
    const isScrollingRef = { current: false };

    const sections = [
        { id: 'general', title: c('tocGeneral') },
        { id: 'format', title: c('tocFormat') },
        { id: 'structure', title: c('tocStructure') },
        { id: 'bibliography', title: c('tocBibliography') },
        { id: 'thanks', title: c('tocThanks') },
        { id: 'appendix', title: c('tocAppendix') },
    ];

    const structureItems: string[] = [
        c('structureItems.0'), c('structureItems.1'), c('structureItems.2'),
        c('structureItems.3'), c('structureItems.4'), c('structureItems.5'),
        c('structureItems.6'), c('structureItems.7'), c('structureItems.8'),
        c('structureItems.9'),
    ];

    // Handle scroll to highlight active section
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (isScrollingRef.current) return;
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: '-15% 0px -75% 0px',
            threshold: 0
        });

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        const handleScroll = () => {
            if (isScrollingRef.current) return;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scrollToSection = (id: string) => {
        isScrollingRef.current = true;
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 140;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });

            setTimeout(() => {
                isScrollingRef.current = false;
            }, 1000);
        }
    };

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-[#fafafa] pb-32 font-inter">
                {/* ═══════════════ HERO SECTION ═══════════════ */}
                <section className="relative h-[45vh] min-h-[400px] bg-pine flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-pine via-pine/90 to-fog/40 z-10" />
                        <div className="absolute inset-0 bg-[url('/smartcity.jpg')] bg-cover bg-center opacity-20" />
                    </div>

                    <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full text-center">
                        <FadeIn direction="up">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-moss text-xs font-bold uppercase tracking-widest mb-6">
                                {t('badge')}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                                {t('title')} <span className="text-gradient-fog bg-gradient-to-r from-moss to-clay bg-clip-text text-transparent">{t('titleHighlight')}</span>
                            </h1>
                            <p className="text-moss/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium">
                                {t('subtitle')}
                            </p>
                        </FadeIn>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-10" />
                </section>

                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 -mt-16 relative z-30">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* ═══════════════ LEFT SIDEBAR ═══════════════ */}
                        <aside className="lg:col-span-3 space-y-8">
                            {/* Template Card */}
                            <FadeIn direction="up" delay={100}>
                                <div className="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-7 border border-pine/10 shadow-xl shadow-pine/5 overflow-hidden group">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="w-12 h-12 rounded-2xl bg-pine/5 flex items-center justify-center text-pine group-hover:bg-pine group-hover:text-white transition-all duration-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-pine uppercase tracking-tight leading-none">{t('templateTitle')}</h3>
                                            <p className="text-[10px] font-bold text-pine/30 uppercase tracking-widest mt-1">{t('templateFormat')}</p>
                                        </div>
                                    </div>
                                    <p className="text-sage text-[11px] font-medium mb-8 leading-relaxed">
                                        {t('templateDesc')}
                                    </p>
                                    <a
                                        href="/template_Symposium FSTPT Unand 2026.docx"
                                        download="template_Symposium FSTPT Unand 2026.docx"
                                        className="flex items-center justify-center gap-2 w-full py-4 bg-pine text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-fog shadow-lg hover:shadow-fog/30 transition-all duration-300"
                                    >
                                        {t('downloadTemplate')}
                                        <svg className="w-4 h-4 translate-y-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </div>
                            </FadeIn>

                            {/* Sticky Navigation Sidebar */}
                            <div className="hidden lg:block sticky top-28">
                                <p className="text-[10px] font-black text-pine/30 uppercase tracking-[0.3em] mb-6 ml-4">{t('toc')}</p>
                                <div className="space-y-2 p-3 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-pine/5 shadow-sm">
                                    {sections.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => scrollToSection(s.id)}
                                            className={`w-full text-left px-6 py-4 rounded-[1.5rem] font-bold text-[11px] uppercase tracking-wider transition-all duration-500 flex items-center gap-4 group
                                                ${activeSection === s.id
                                                    ? 'bg-pine text-white shadow-xl shadow-pine/20 translate-x-1'
                                                    : 'text-pine/40 hover:bg-white hover:text-pine hover:translate-x-1'}`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${activeSection === s.id ? 'bg-moss scale-150 shadow-[0_0_8px_rgba(175,187,152,0.8)]' : 'bg-clay group-hover:bg-fog'}`} />
                                            {s.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* ═══════════════ CONTENT AREA ═══════════════ */}
                        <div className="lg:col-span-9 space-y-10 text-pine/90">
                            
                            {/* Section: TITLE, AUTHORS & ABSTRACTS */}
                            <div id="general" className="scroll-mt-32 space-y-12">
                                <FadeIn direction="up">
                                    <div className="space-y-8">
                                        <div className="bg-white rounded-[2rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-12">
                                            <div className="text-center border-b border-clay/30 pb-10">
                                                <h3 className="text-xl md:text-2xl font-black text-pine uppercase mb-8 leading-tight">
                                                    {c('paperTitle')} <br />
                                                    {c('paperDate')}
                                                </h3>

                                                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                                                    <div className="text-center">
                                                        <p className="font-bold text-pine text-lg">Dodi Gusnadi¹</p>
                                                        <p className="text-xs text-sage mt-1">{c('author1Role')}</p>
                                                        <p className="text-xs text-sage">{c('university')}</p>
                                                        <p className="text-xs font-semibold text-fog mt-1 underline">asraf@gmail.com</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="font-bold text-pine text-lg">Citra Arsi Utami²</p>
                                                        <p className="text-xs text-sage mt-1">{c('author2Role')}</p>
                                                        <p className="text-xs text-sage">{c('university')}</p>
                                                        <p className="text-xs font-semibold text-fog mt-1 underline">tyas@gmail.com</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="font-bold text-pine text-lg">Ardi Fitra³</p>
                                                        <p className="text-xs text-sage mt-1">{c('author3Role')}</p>
                                                        <p className="text-xs text-sage">{c('university')}</p>
                                                        <p className="text-xs font-semibold text-fog mt-1 underline">ardi@gmail.com</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-12 pt-4">
                                                <div className="space-y-4">
                                                    <h4 className="font-black text-fog uppercase text-sm tracking-widest">{c('abstractTitle')}</h4>
                                                    <div className="text-sm leading-relaxed space-y-4 text-justify text-sage">
                                                        <p>{c('abstractContent')}</p>
                                                    </div>
                                                    <p className="text-xs font-bold pt-4 text-pine/60 italic">{c('keywords')}</p>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="font-black text-fog uppercase text-sm tracking-widest">{c('abstrakTitle')}</h4>
                                                    <div className="text-sm leading-relaxed space-y-4 text-justify text-sage">
                                                        <p>{c('abstrakContent')}</p>
                                                    </div>
                                                    <p className="text-xs font-bold pt-4 text-pine/60 italic">{c('abstrakKeywords')}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-8">
                                            <h3 className="text-2xl font-black text-pine uppercase">{c('section1Title')}</h3>
                                            <div className="text-sage leading-relaxed space-y-6">
                                                <p>{c('section1P1')}</p>
                                                <p>{c('section1P2')} <strong className="text-pine underline decoration-fog underline-offset-4">{c('section1P2Bold')}</strong>.</p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: FORMAT PENULISAN */}
                            <div id="format" className="scroll-mt-32 space-y-10">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-10">
                                        <h3 className="text-2xl font-black text-pine uppercase">{c('section2Title')}</h3>

                                        <div className="space-y-6">
                                            <h4 className="text-lg font-black text-pine">{c('section2_1Title')}</h4>
                                            <p className="text-sage font-medium">{c('section2_1Intro')}</p>
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <ul className="space-y-4 text-sm font-semibold text-pine/80 list-none">
                                                    <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> {c('format1')}</li>
                                                    <li className="flex gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" />
                                                        {c('format2')}
                                                    </li>
                                                    <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> {c('format3')}</li>
                                                </ul>
                                                <ul className="space-y-4 text-sm font-semibold text-pine/80 list-none">
                                                    <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> {c('format4')}</li>
                                                    <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> {c('format5')}</li>
                                                    <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> {c('format6')}</li>
                                                </ul>
                                            </div>
                                            <p className="text-xs font-bold text-pine/60 italic bg-clay/5 p-4 rounded-xl border border-clay/10">
                                                {c('formatNote')}
                                            </p>
                                        </div>

                                        <div className="space-y-6 pt-10 border-t border-clay/30">
                                            <h4 className="text-lg font-black text-pine">{c('section2_2Title')}</h4>
                                            <div className="text-sm leading-relaxed text-sage space-y-6">
                                                <p>{c('section2_2Intro')}</p>

                                                <div className="grid gap-4">
                                                    <div className="p-5 bg-clay/5 rounded-2xl border border-clay/20 flex gap-4 items-start">
                                                        <div className="shrink-0 w-max px-3 py-1 bg-pine text-white text-[10px] font-black rounded-lg">Title</div>
                                                        <p className="font-medium text-pine/80">{c('styleTitleDesc')}</p>
                                                    </div>
                                                    <div className="p-5 bg-clay/5 rounded-2xl border border-clay/20 flex gap-4 items-start">
                                                        <div className="shrink-0 w-max px-3 py-1 bg-pine text-white text-[10px] font-black rounded-lg">Author</div>
                                                        <p className="font-medium text-pine/80">{c('styleAuthorDesc')}</p>
                                                    </div>
                                                    <div className="p-5 bg-clay/5 rounded-2xl border border-clay/20 flex gap-4 items-start">
                                                        <div className="shrink-0 w-max px-3 py-1 bg-pine text-white text-[10px] font-black rounded-lg">Affiliation</div>
                                                        <p className="font-medium text-pine/80">{c('styleAffiliationDesc')}</p>
                                                    </div>
                                                    <div className="p-5 bg-clay/5 rounded-2xl border border-clay/20 flex gap-4 items-start">
                                                        <div className="shrink-0 w-max px-3 py-1 bg-pine text-white text-[10px] font-black rounded-lg">Abstract</div>
                                                        <p className="font-medium text-pine/80">{c('styleAbstractDesc')}</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-4 pt-4">
                                                    <p>● {c('styleKeyword')} <strong className="text-pine">{c('styleKeywordBold')}</strong>{c('styleKeywordAfter')}</p>
                                                    <p>● {c('styleNormal')} <strong className="text-pine">{c('styleNormalBold')}</strong>{c('styleNormalAfter')}</p>
                                                    <p>● {c('styleHeading')} <strong className="text-pine">{c('styleH1')}</strong>{c('styleH1After')} <strong className="text-pine">{c('styleH2')}</strong>{c('styleH2After')} <strong className="text-pine">{c('styleH3')}</strong>{c('styleH3After')}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-8 pt-10 border-t border-clay/30">
                                            <h4 className="text-lg font-black text-pine">{c('section2_3Title')}</h4>
                                            <div className="text-sm leading-relaxed text-sage space-y-8">
                                                <p>{c('section2_3P1')}</p>

                                                <div className="overflow-x-auto rounded-2xl border border-clay/20">
                                                    <table className="w-full text-xs">
                                                        <thead>
                                                            <tr className="bg-pine text-white">
                                                                <th className="p-4 text-left border-r border-white/10" rowSpan={2}>{c('tableCol1')}</th>
                                                                <th className="p-4 text-left border-r border-white/10" rowSpan={2}>{c('tableCol2')}</th>
                                                                <th className="p-4 text-center" colSpan={2}>{c('tableCol3')}</th>
                                                            </tr>
                                                            <tr className="bg-pine/90 text-white">
                                                                <th className="p-2 text-center border-r border-white/10">(+)</th>
                                                                <th className="p-2 text-center">(-)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white/50">
                                                            <tr className="border-b border-clay/10">
                                                                <td className="p-4 font-bold border-r border-clay/10 text-center">1.</td>
                                                                <td className="p-4 border-r border-clay/10">{c('tableRow1')}</td>
                                                                <td className="p-4 border-r border-clay/10 text-center text-pine font-bold italic">Rp 6,000/km</td>
                                                                <td className="p-4 text-center text-pine font-bold italic">Rp 4,500/km</td>
                                                            </tr>
                                                            <tr className="border-b border-clay/10">
                                                                <td className="p-4 font-bold border-r border-clay/10 text-center">2.</td>
                                                                <td className="p-4 border-r border-clay/10">{c('tableRow2')}</td>
                                                                <td className="p-4 border-r border-clay/10 text-center text-pine font-bold italic">Rp 3,000/jam</td>
                                                                <td className="p-2 text-center text-pine font-bold italic">Rp 5,000/jam</td>
                                                            </tr>
                                                            <tr className="border-b border-clay/10">
                                                                <td className="p-4 font-bold border-r border-clay/10 text-center">3.</td>
                                                                <td className="p-4 border-r border-clay/10">{c('tableRow3')}</td>
                                                                <td className="p-4 border-r border-clay/10 text-center text-pine font-bold italic">Rp 3,000</td>
                                                                <td className="p-4 text-center text-pine font-bold italic">Rp 6,000</td>
                                                            </tr>
                                                            <tr className="border-b border-clay/10">
                                                                <td className="p-4 font-bold border-r border-clay/10 text-center">4.</td>
                                                                <td className="p-4 border-r border-clay/10">{c('tableRow4')}</td>
                                                                <td className="p-4 border-r border-clay/10 text-center text-pine font-bold italic">-10 minutes</td>
                                                                <td className="p-4 text-center text-pine font-bold italic">-5 minutes</td>
                                                            </tr>
                                                            <tr className="bg-clay/5">
                                                                <td className="p-4 font-bold border-r border-clay/10 text-center">5.</td>
                                                                <td className="p-4 border-r border-clay/10">{c('tableRow5')}</td>
                                                                <td className="p-4 border-r border-clay/10 text-center text-pine font-bold italic">-5 minutes</td>
                                                                <td className="p-4 text-center text-pine font-bold italic">-3 minutes</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <p className="text-[10px] font-bold text-pine/40 text-center uppercase tracking-widest italic">{c('tableCaption')}</p>

                                                <div className="space-y-6 pt-4">
                                                    <p>{c('section2_3P2')}</p>

                                                    <div className="bg-white p-8 rounded-2xl border border-clay/10 flex flex-col items-center gap-6 shadow-sm">
                                                        <div className="w-full max-w-md aspect-video bg-clay/5 rounded-xl border-2 border-dashed border-clay/20 flex items-center justify-center group overflow-hidden relative">
                                                            <img
                                                                src="/gambar.png"
                                                                alt="Diagram"
                                                                className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-pine/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <span className="bg-white/90 px-4 py-2 rounded-full text-[10px] font-black text-pine shadow-lg">{c('previewImage')}</span>
                                                            </div>
                                                        </div>
                                                        <p className="text-xs font-bold text-pine/60 italic text-center">{c('figureCaption')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: STRUKTUR MAKALAH */}
                            <div id="structure" className="scroll-mt-32">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-12">
                                        <div className="text-left space-y-4">
                                            <h3 className="text-2xl md:text-3xl font-black text-pine uppercase tracking-tight">{c('section3Title')}</h3>
                                            <p className="text-sage font-medium max-w-2xl">
                                                {c('section3Intro')}
                                            </p>
                                        </div>

                                        <div className="max-w-2xl flex flex-col gap-4">
                                            {structureItems.map((item, i) => (
                                                <div key={i} className="group relative flex items-center p-4 bg-gradient-to-r from-sage/5 to-moss/10 rounded-2xl border border-moss/10 transition-all duration-300 hover:shadow-lg hover:border-moss/30">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-pine flex items-center justify-center">
                                                            <span className="text-white font-black text-xs">{(i + 1).toString()}</span>
                                                        </div>
                                                        <span className="text-sm font-bold text-pine tracking-tight">{item}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: DAFTAR PUSTAKA */}
                            <div id="bibliography" className="scroll-mt-32 space-y-12">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-12">
                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-black text-pine uppercase">{c('section4Title')}</h3>
                                            <div className="text-sm leading-relaxed text-sage space-y-6">
                                                <p>{c('section4P1')} <strong className="text-pine underline decoration-fog underline-offset-4">{c('section4P1Bold')}</strong>{c('section4P1After')}</p>
                                                <p className="bg-pine/5 p-6 rounded-xl border border-pine/10 font-bold text-pine italic">
                                                    {c('section4Format')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <h4 className="text-lg font-black text-pine tracking-tight">{c('section4Examples')}</h4>
                                            <div className="grid gap-4">
                                                {[
                                                    'Departemen Perhubungan. 2016. Data Parkir di Badan Jalan Tahun 2016. Unit Pengelola Teknis, Dinas Perhubungan Provinsi Daerah Istimewa Aceh.',
                                                    'Fwa, T.F. 2006. The Handbook of Highway Engineering. New York: CRC Press.',
                                                    'Fathur, S. 2012. Kajian Penerapan Tarip Parkir Progresif di Jalan Sudirman Yogyakarta. Thesis for Magister Degree. Rekayasa Transportasi, Institut Teknologi Yogyakarta (unpublished).',
                                                    'May, A.D. 2006. Transportation and Traffic Engineering. New Jersey: John Wiley and Sons, Inc'
                                                ].map((ref, i) => (
                                                    <div key={i} className="group p-5 bg-clay/5 rounded-2xl border border-clay/10 transition-all hover:bg-white hover:shadow-md hover:border-pine/20">
                                                        <p className="text-sm font-medium italic text-pine/80 leading-relaxed pl-4 border-l-2 border-pine/20 group-hover:border-pine">{ref}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: UCAPAN TERIMAKASIH */}
                            <div id="thanks" className="scroll-mt-32">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-6">
                                        <h3 className="text-2xl font-black text-pine uppercase">{c('section5Title')}</h3>
                                        <p className="text-sm leading-relaxed text-sage italic">
                                            {c('section5P1')}
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: LAMPIRAN & PENTING */}
                            <div id="appendix" className="scroll-mt-32 space-y-12 pb-20">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-6">
                                        <h3 className="text-2xl font-black text-pine uppercase">{c('section6Title')}</h3>
                                        <p className="text-sm leading-relaxed text-sage">
                                            {c('section6P1')}
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-pine to-[#1a2e31] rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden mt-12">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-fog/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                                        <div className="relative z-10 space-y-4">
                                            <h4 className="text-fog font-black uppercase tracking-[0.2em] text-xs">{c('important')}</h4>
                                            <p className="text-xl md:text-2xl font-black max-w-2xl mx-auto leading-tight">
                                                {c('pageLength')} <span className="text-moss">{c('pageLengthValue')}</span>.
                                                <span className="block text-moss/70 text-lg md:text-xl mt-2 font-bold italic">{c('pageLengthNote')}</span>
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
