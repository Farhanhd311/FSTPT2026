'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Timeline from '@/components/Timeline';
import Link from 'next/link';
import Image from 'next/image';

export default function AgendaKegiatan() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-[#fafafa] pb-32 font-inter">

                {/* ═══════════════ HERO SECTION ═══════════════ */}
                <section className="relative h-[45vh] min-h-[400px] bg-pine flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-pine via-pine/90 to-fog/40 z-10" />
                        <div className="absolute inset-0 bg-[url('/lembahanai.jpeg')] bg-cover bg-center opacity-20" />
                    </div>

                    <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full text-center">
                        <FadeIn direction="up">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-moss text-xs font-bold uppercase tracking-widest mb-6">
                                Schedule & Flyer
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                                Agenda <span className="text-gradient-fog bg-gradient-to-r from-moss to-clay bg-clip-text text-transparent">Kegiatan</span>
                            </h1>
                            <p className="text-moss/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium">
                                Jadwal Lengkap Konferensi dan Informasi Penting FSTPT 2026.
                            </p>
                        </FadeIn>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-10" />
                </section>

                {/* ═══════════════ TIMELINE SECTION ═══════════════ */}
                <section className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 -mt-16 relative z-30">
                    <FadeIn direction="up">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl shadow-pine/5 border border-pine/5">
                            <div className="text-center mb-16">
                                <span className="text-clay font-black text-xs uppercase tracking-[0.2em] mb-3 block">Timeline</span>
                                <h2 className="text-3xl md:text-4xl font-black text-pine uppercase">Tanggal Penting</h2>
                                <p className="text-sage mt-4 max-w-2xl mx-auto">
                                    Catat tanggal-tanggal penting berikut untuk memastikan partisipasi Anda dalam FSTPT XXIX.
                                </p>
                            </div>
                            <Timeline />
                        </div>
                    </FadeIn>
                </section>

                {/* ═══════════════ FLYER SECTION ═══════════════ */}
                <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="right">
                            <div className="space-y-8">
                                <div>
                                    <span className="text-clay font-black text-xs uppercase tracking-[0.3em] mb-4 block">Official Announcement</span>
                                    <h2 className="text-4xl md:text-5xl font-black text-pine uppercase">Flyer <span className="text-fog">Kegiatan</span></h2>
                                </div>
                                <p className="text-sage leading-relaxed text-justify text-lg font-medium">
                                    Dapatkan ringkasan informasi lengkap mengenai simposium, topik penelitian, dan detail pendaftaran melalui flyer resmi FSTPT 2026. Anda dapat mengunduh atau membagikan flyer ini kepada rekan sejawat.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <a
                                        href="/flyer.jpeg"
                                        download
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-pine text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-fog shadow-lg transition-all duration-300"
                                    >
                                        Unduh Flyer
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={200}>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-fog/20 to-clay/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60" />
                                <div className="relative aspect-[1/1.4] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                    <Image
                                        src="/flyer.jpeg"
                                        alt="FSTPT 2026 Flyer"
                                        fill
                                        className="object-contain bg-white transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* ═══════════════ CTA BANNER ═══════════════ */}
                <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-32">
                    <FadeIn direction="up">
                        <div className="bg-gradient-to-br from-pine to-[#1a2e31] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-fog/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                            <div className="relative z-10 space-y-8">
                                <span className="text-moss font-black uppercase tracking-[0.4em] text-xs">Stay Updated</span>
                                <h2 className="text-4xl md:text-5xl font-black max-w-4xl mx-auto leading-tight">
                                    Jangan Lewatkan <span className="text-moss italic">Batas Akhir</span> Pendaftaran
                                </h2>
                                <p className="text-moss/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                                    Pastikan Anda telah mendaftarkan diri dan mengirimkan karya ilmiah sebelum tenggat waktu yang ditentukan.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                                    <Link
                                        href="/call-for-paper/registration"
                                        className="px-10 py-5 bg-moss text-pine font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-moss/20"
                                    >
                                        Daftar Sekarang
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

            </main>
            <Footer />
        </>
    );
}
