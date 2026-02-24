'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { useState, useEffect } from 'react';

const sections = [
    { id: 'general', title: 'Petunjuk Umum' },
    { id: 'format', title: 'Format Penulisan' },
    { id: 'structure', title: 'Struktur Makalah' },
    { id: 'bibliography', title: 'Daftar Pustaka' },
    { id: 'thanks', title: 'Ucapan Terimakasih' },
    { id: 'appendix', title: 'Lampiran' },
];

export default function AuthorGuideline() {
    const [activeSection, setActiveSection] = useState('abstract');
    const isScrollingRef = { current: false };

    // Handle scroll to highlight active section
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // Prevent observer from overriding the state while we are programmatically scrolling
            if (isScrollingRef.current) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            // Adjusted margins to trigger precisely when section passes the top nav bar (approx 120px)
            rootMargin: '-15% 0px -75% 0px',
            threshold: 0
        });

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        // Fallback for manual scroll tracking
        const handleScroll = () => {
            if (isScrollingRef.current) return;
            // Additional logic can be added here if needed for very small sections
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        isScrollingRef.current = true;
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 140; // Slightly more than the navigation height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });

            // Re-enable observer after smooth scroll completes (approx 800ms)
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
                                FSTPT XXIX — Padang, West Sumatera
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                                Author <span className="text-gradient-fog bg-gradient-to-r from-moss to-clay bg-clip-text text-transparent">Guideline</span>
                            </h1>
                            <p className="text-moss/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium">
                                Panduan Lengkap Penulisan Makalah Simposium Nasional FSTPT XXIX.
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
                                            <h3 className="text-xl font-black text-pine uppercase tracking-tight leading-none">Template Paper</h3>
                                            <p className="text-[10px] font-bold text-pine/30 uppercase tracking-widest mt-1">Microsoft Word</p>
                                        </div>
                                    </div>
                                    <p className="text-sage text-[11px] font-medium mb-8 leading-relaxed">
                                        Unduh file `.docx` untuk mempercepat dan menyeragamkan proses penulisan makalah Anda.
                                    </p>
                                    <a
                                        href="/template_Symposium FSTPT Unand 2026.docx"
                                        download="template_Symposium FSTPT Unand 2026.docx"
                                        className="flex items-center justify-center gap-2 w-full py-4 bg-pine text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-fog shadow-lg hover:shadow-fog/30 transition-all duration-300"
                                    >
                                        Download Template
                                        <svg className="w-4 h-4 translate-y-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </div>
                            </FadeIn>

                            {/* Sticky Navigation Sidebar */}
                            <div className="hidden lg:block sticky top-28">
                                <p className="text-[10px] font-black text-pine/30 uppercase tracking-[0.3em] mb-6 ml-4">Table of Contents</p>
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
                                                    PETUNJUK PENULISAN MAKALAH UNTUK SYMPOSIUM NASIONAL FSTPT XXIX, <br />
                                                    07 – 08 NOVEMBER 2026
                                                </h3>

                                                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                                                    <div className="text-center">
                                                        <p className="font-bold text-pine text-lg">Dodi Gusnadi¹</p>
                                                        <p className="text-xs text-sage mt-1">Mahasiswa magister Teknik Sipil, Fakultas Teknik</p>
                                                        <p className="text-xs text-sage">Universitas Andalas, Padang</p>
                                                        <p className="text-xs font-semibold text-fog mt-1 underline">asraf@gmail.com</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="font-bold text-pine text-lg">Citra Arsi Utami²</p>
                                                        <p className="text-xs text-sage mt-1">Teknik Sipil, Fakultas Teknik</p>
                                                        <p className="text-xs text-sage">Universitas Andalas, Padang</p>
                                                        <p className="text-xs font-semibold text-fog mt-1 underline">tyas@gmail.com</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="font-bold text-pine text-lg">Ardi Fitra³</p>
                                                        <p className="text-xs text-sage mt-1">Teknik Sipil, Fakultas Teknik</p>
                                                        <p className="text-xs text-sage">Universitas Andalas, Padang</p>
                                                        <p className="text-xs font-semibold text-fog mt-1 underline">ardi@gmail.com</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-12 pt-4">
                                                <div className="space-y-4">
                                                    <h4 className="font-black text-fog uppercase text-sm tracking-widest">ABSTRACT</h4>
                                                    <div className="text-sm leading-relaxed space-y-4 text-justify text-sage">
                                                        <p>
                                                            This document consists of detailed paper writing instructions for Seminar Nasional FSTPT XXIX at Andalas University Padang. To submit a paper in this seminar, please follow the following guidelines for writing the paper. The author should read through these instructions before writing a paper. Papers that do not follow these instructions are not included in the seminar. The deadline for submission a draft of full paper is September 25, 2023. The paper will be reviewed by a reviewer team and the results will be informed through the author’s email address. All accepted papers will be published in a seminar proceeding that has an ISBN and uploaded online. The best papers and presentations in the seminar will be awarded by the committee. The abstract is written in a concise and straightforward sentence and must not more than 250 words.
                                                        </p>
                                                    </div>
                                                    <p className="text-xs font-bold pt-4 text-pine/60 italic">Keywords: keyword 1, keyword 2, keyword 3, keyword 4, keyword 5</p>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="font-black text-fog uppercase text-sm tracking-widest">ABSTRAK</h4>
                                                    <div className="text-sm leading-relaxed space-y-4 text-justify text-sage">
                                                        <p>
                                                            Dokumen ini terdiri dari detail petunjuk penulisan makalah untuk ACE Conference 2023 di Universitas Andalas Padang. Untuk mengirim makalah pada seminar ini, harap diikuti petunjuk penulisan makalah berikut ini. Penulis harus membaca seluruh petunjuk ini sebelum menulis makalah. Makalah yang tidak mengikuti petunjuk ini, tidak diikutkan dalam seminar yang akan dilaksanakan. Batas akhir pengumpulan draft makalah lengkap adalah 25 September 2023. Makalah akan direview oleh tim reviewer dan hasilnya akan diinformasikan kembali melalui alamat email penulis. Semua makalah yang diterima akan di publikasikan dalam proseding seminar yang mempunyai ISBN dan diunggah secara online. Makalah dan presentasi terbaik dalam seminar akan mendapatkan penghargaan dari panitia. Abstrak ditulis dengan kalimat yang ringkas dan lugas tidak melebih dari 250 kata.
                                                        </p>
                                                    </div>
                                                    <p className="text-xs font-bold pt-4 text-pine/60 italic">Kata Kunci : kata kunci 1, kata kunci 2, kata kunci 3, kata kunci 4, kata kunci 5</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-8">
                                            <h3 className="text-2xl font-black text-pine uppercase">1. PETUNJUK UMUM</h3>
                                            <div className="text-sage leading-relaxed space-y-6">
                                                <p>
                                                    Petunjuk ini dibuat untuk panduan menyiapkan makalah yang layak untuk dipresentasikan dalam seminar. Penulis pertama adalah peneliti, mahasiswa S2 atau S3, sedang penulis berikutnya dapat pembimbing atau co-pembimbing atau teman dalam grup penelitian.
                                                </p>
                                                <p>
                                                    Penulis harus menulis makalahnya sesuai dengan petunjuk ini agar makalah tersebut dapat diterima. Makalah yang dikirim harus ditulis dengan menggunakan <strong className="text-pine underline decoration-fog underline-offset-4">Microsoft Word 2003/2007/2010/2013/2019</strong>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: FORMAT PENULISAN */}
                            <div id="format" className="scroll-mt-32 space-y-10">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-10">
                                        <h3 className="text-2xl font-black text-pine uppercase">2. FORMAT PENULISAN</h3>

                                        <div className="space-y-6">
                                            <h4 className="text-lg font-black text-pine">2.1 Ketentuan Umum</h4>
                                            <p className="text-sage font-medium">Makalah harus mengikuti format sebagai berikut:</p>
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <ul className="space-y-4 text-sm font-semibold text-pine/80 list-none">
                                                    <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Kertas A4, dengan orientasi portrait</li>
                                                    <li className="flex gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" />
                                                        Margin: Atas 3 cm, Bawah 4 cm, Kiri 3 cm, dan Kanan 3 cm
                                                    </li>
                                                    <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Tipe font adalah Times New Roman</li>
                                                </ul>
                                                <ul className="space-y-4 text-sm font-semibold text-pine/80 list-none">
                                                    <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Jumlah halaman: 6 sampai 10 halaman</li>
                                                    <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Penulisan teks: single spaced and single column text</li>
                                                    <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Dilarang menulis pada headers and footers</li>
                                                </ul>
                                            </div>
                                            <p className="text-xs font-bold text-pine/60 italic bg-clay/5 p-4 rounded-xl border border-clay/10">
                                                * Mohon diperiksa kembali jika ada kesalahan ketik dan ejaan. Ikuti petunjuk pengaturan format menggunakan styles Ms-Word yang telah disediakan dalam template.
                                            </p>
                                        </div>

                                        <div className="space-y-6 pt-10 border-t border-clay/30">
                                            <h4 className="text-lg font-black text-pine">2.2 Penggunaan Style Untuk Pengaturan</h4>
                                            <div className="text-sm leading-relaxed text-sage space-y-6">
                                                <p>Dalam file makalah ini telah disediakan style Ms-Word yang akan dipergunakan untuk pengaturan format makalah. Penulis tinggal mengklik style yang berkesesuaian untuk mendapatkan pengaturan makalah yang baik.</p>

                                                <div className="grid gap-4">
                                                    <div className="p-5 bg-clay/5 rounded-2xl border border-clay/20 flex gap-4 items-start">
                                                        <div className="shrink-0 w-max px-3 py-1 bg-pine text-white text-[10px] font-black rounded-lg">Title</div>
                                                        <p className="font-medium text-pine/80">Ukuran font Times New Roman 16pt, bold, spasi tunggal.</p>
                                                    </div>
                                                    <div className="p-5 bg-clay/5 rounded-2xl border border-clay/20 flex gap-4 items-start">
                                                        <div className="shrink-0 w-max px-3 py-1 bg-pine text-white text-[10px] font-black rounded-lg">Author</div>
                                                        <p className="font-medium text-pine/80">Nama penulis ditulis dalam satu baris, beri superscript angka untuk identifikasi afiliasi.</p>
                                                    </div>
                                                    <div className="p-5 bg-clay/5 rounded-2xl border border-clay/20 flex gap-4 items-start">
                                                        <div className="shrink-0 w-max px-3 py-1 bg-pine text-white text-[10px] font-black rounded-lg">Affiliation</div>
                                                        <p className="font-medium text-pine/80">Informasi Jurusan/Program Studi, Fakultas, Universitas, dan Email.</p>
                                                    </div>
                                                    <div className="p-5 bg-clay/5 rounded-2xl border border-clay/20 flex gap-4 items-start">
                                                        <div className="shrink-0 w-max px-3 py-1 bg-pine text-white text-[10px] font-black rounded-lg">Abstract</div>
                                                        <p className="font-medium text-pine/80">Abstract –header untuk judul dan Abstract untuk isi (satu kolom, satu paragraf).</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-4 pt-4">
                                                    <p>● Berilah maksimum lima buah kata kunci menggunakan style <strong className="text-pine">'Keywords'</strong>. Hitamkan (bold) kata ‘Abstrak:’ sebelum kata kunci.</p>
                                                    <p>● Teks paragraf menggunakan style <strong className="text-pine">'Normal'</strong> yang memberikan jarak antar paragraf.</p>
                                                    <p>● Pergunakan <strong className="text-pine">'Heading 1'</strong> (HURUF KAPITAL), <strong className="text-pine">'Heading 2'</strong>, dan <strong className="text-pine">'Heading 3'</strong>. Nomor bab akan diberikan otomatis oleh Ms-Word.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-8 pt-10 border-t border-clay/30">
                                            <h4 className="text-lg font-black text-pine">2.3 Tabel dan Gambar</h4>
                                            <div className="text-sm leading-relaxed text-sage space-y-8">
                                                <p>Persamaan, tabel, dan gambar harus ditempatkan diantara teks pada tempat yang sesuai dengan diskusi tabel dan gambar. Tabel harus diberi nomor urut. Judul tabel diletakkan di atas tabel.</p>

                                                <div className="overflow-x-auto rounded-2xl border border-clay/20">
                                                    <table className="w-full text-xs">
                                                        <thead>
                                                            <tr className="bg-pine text-white">
                                                                <th className="p-4 text-left border-r border-white/10" rowSpan={2}>No.</th>
                                                                <th className="p-4 text-left border-r border-white/10" rowSpan={2}>Atribut perjalanan</th>
                                                                <th className="p-4 text-center" colSpan={2}>Kondisi pelayanan</th>
                                                            </tr>
                                                            <tr className="bg-pine/90 text-white">
                                                                <th className="p-2 text-center border-r border-white/10">(+)</th>
                                                                <th className="p-2 text-center">(-)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white/50">
                                                            <tr className="border-b border-clay/10">
                                                                <td className="p-4 font-bold border-r border-clay/10 text-center">1.</td>
                                                                <td className="p-4 border-r border-clay/10">Biaya perjalanan</td>
                                                                <td className="p-4 border-r border-clay/10 text-center text-pine font-bold italic">Rp 6,000/km</td>
                                                                <td className="p-4 text-center text-pine font-bold italic">Rp 4,500/km</td>
                                                            </tr>
                                                            <tr className="border-b border-clay/10">
                                                                <td className="p-4 font-bold border-r border-clay/10 text-center">2.</td>
                                                                <td className="p-4 border-r border-clay/10">Biaya kemacetan</td>
                                                                <td className="p-4 border-r border-clay/10 text-center text-pine font-bold italic">Rp 3,000/jam</td>
                                                                <td className="p-2 text-center text-pine font-bold italic">Rp 5,000/jam</td>
                                                            </tr>
                                                            <tr className="border-b border-clay/10">
                                                                <td className="p-4 font-bold border-r border-clay/10 text-center">3.</td>
                                                                <td className="p-4 border-r border-clay/10">Tarip parkir</td>
                                                                <td className="p-4 border-r border-clay/10 text-center text-pine font-bold italic">Rp 3,000</td>
                                                                <td className="p-4 text-center text-pine font-bold italic">Rp 6,000</td>
                                                            </tr>
                                                            <tr className="border-b border-clay/10">
                                                                <td className="p-4 font-bold border-r border-clay/10 text-center">4.</td>
                                                                <td className="p-4 border-r border-clay/10">Waktu perjalanan</td>
                                                                <td className="p-4 border-r border-clay/10 text-center text-pine font-bold italic">-10 minutes</td>
                                                                <td className="p-4 text-center text-pine font-bold italic">-5 minutes</td>
                                                            </tr>
                                                            <tr className="bg-clay/5">
                                                                <td className="p-4 font-bold border-r border-clay/10 text-center">5.</td>
                                                                <td className="p-4 border-r border-clay/10">Waktu berjalan kaki</td>
                                                                <td className="p-4 border-r border-clay/10 text-center text-pine font-bold italic">-5 minutes</td>
                                                                <td className="p-4 text-center text-pine font-bold italic">-3 minutes</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <p className="text-[10px] font-bold text-pine/40 text-center uppercase tracking-widest italic">Tabel 1. Kondisi pelayanan atribut perjalanan</p>

                                                <div className="space-y-6 pt-4">
                                                    <p>Gambar harus diberi nomor urut. Judul gambar diletakkan di bawah gambar. Gambar harus jelas dan mudah dibaca. Lihat Gambar 1, persamaan harus juga diberi nomor urut. Nomor diletakkan di sisi kanan dari persamaan.</p>

                                                    <div className="bg-white p-8 rounded-2xl border border-clay/10 flex flex-col items-center gap-6 shadow-sm">
                                                        <div className="w-full max-w-md aspect-video bg-clay/5 rounded-xl border-2 border-dashed border-clay/20 flex items-center justify-center group overflow-hidden relative">
                                                            <img
                                                                src="/gambar.png"
                                                                alt="Diagram seleksi makalah"
                                                                className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-pine/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <span className="bg-white/90 px-4 py-2 rounded-full text-[10px] font-black text-pine shadow-lg">PREVIEW IMAGE</span>
                                                            </div>
                                                        </div>
                                                        <p className="text-xs font-bold text-pine/60 italic text-center">Gambar 1. Diagram seleksi makalah pada ACE 8</p>
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
                                            <h3 className="text-2xl md:text-3xl font-black text-pine uppercase tracking-tight">3. STRUKTUR MAKALAH</h3>
                                            <p className="text-sage font-medium max-w-2xl">
                                                Struktur makalah sebaiknya terdiri dari komponen-komponen utama sebagai berikut:
                                            </p>
                                        </div>

                                        <div className="max-w-2xl flex flex-col gap-4">
                                            {[
                                                'Judul', 'Informasi penulis', 'Abstrak', 'Pendahuluan', 'Studi pustaka',
                                                'Hasil & Pembahasan', 'Kesimpulan', 'Daftar pustaka',
                                                'Ucapan terimakasih', 'Lampiran'
                                            ].map((item, i) => (
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
                                            <h3 className="text-2xl font-black text-pine uppercase">4. DAFTAR PUSTAKA</h3>
                                            <div className="text-sm leading-relaxed text-sage space-y-6">
                                                <p>Daftar pustaka hanya berisi referensi yang dikutip dalam teks makalah. Daftar pustaka ini ditulis dalam naik urutan berdasarkan nama terakhir penulis. Pergunakan style <strong className="text-pine underline decoration-fog underline-offset-4">'References'</strong> for pengaturan format daftar pustaka ini.</p>
                                                <p className="bg-pine/5 p-6 rounded-xl border border-pine/10 font-bold text-pine italic">
                                                    Format penulisan referensi mengikuti metode APA 6th, contoh penulisannya adalah sebagai berikut : Nama dari penulis. Tahun publikasi. Judul publikasi. Tempat penerbitan: penerbit.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <h4 className="text-lg font-black text-pine tracking-tight">Contoh Penulisan:</h4>
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
                                        <h3 className="text-2xl font-black text-pine uppercase">5. UCAPAN TERIMAKASIH</h3>
                                        <p className="text-sm leading-relaxed text-sage italic">
                                            Jika dibutuhkan tambahkan ucapan terimakasih pada pihak-pihak yang membantu dalam penelitian, penulisan makalah, atau pun pelaksanaan seminar.
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: LAMPIRAN & PENTING */}
                            <div id="appendix" className="scroll-mt-32 space-y-12 pb-20">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-6">
                                        <h3 className="text-2xl font-black text-pine uppercase">6. LAMPIRAN</h3>
                                        <p className="text-sm leading-relaxed text-sage">
                                            Makalah dapat dilengkapi dengan lampiran yang berisi tabel, gambar, peta dan yang lain-lain jika perlu untuk dilampirkan. Lampiran harus mematuhi ketentuan bahasa, penomoran halaman, header, format halaman, format tabel dan gambar.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-pine to-[#1a2e31] rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden mt-12">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-fog/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                                        <div className="relative z-10 space-y-4">
                                            <h4 className="text-fog font-black uppercase tracking-[0.2em] text-xs">Penting:</h4>
                                            <p className="text-xl md:text-2xl font-black max-w-2xl mx-auto leading-tight">
                                                Panjang halaman <span className="text-moss">6 sampai 10 halaman</span>.
                                                <span className="block text-moss/70 text-lg md:text-xl mt-2 font-bold italic">(termasuk lampiran, tabel, gambar, dan daftar pustaka)</span>
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
