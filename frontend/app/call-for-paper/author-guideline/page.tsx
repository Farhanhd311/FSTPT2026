'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { useState, useEffect } from 'react';

const sections = [
    { id: 'abstract', title: 'Abstract & Abstrak' },
    { id: 'general', title: 'Penjelasan Umum' },
    { id: 'format', title: 'Format & Layout' },
    { id: 'structure', title: 'Sistematika' },
    { id: 'media', title: 'Tabel, Gambar & Persamaan' },
    { id: 'thanks', title: 'Ucapan Terima Kasih' },
    { id: 'bibliography', title: 'Daftar Pustaka' },
    { id: 'appendix', title: 'Lampiran' },
];

export default function AuthorGuideline() {
    const [activeSection, setActiveSection] = useState('abstract');

    // Handle scroll to highlight active section
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        });

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: 'smooth',
            });
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
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2000')] bg-cover bg-center opacity-20" />
                    </div>

                    <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full text-center">
                        <FadeIn direction="up">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-moss text-xs font-bold uppercase tracking-widest mb-6">
                                FSTPT 29 — Universitas Andalas
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                                Author <span className="text-gradient-fog bg-gradient-to-r from-moss to-clay bg-clip-text text-transparent">Guideline</span>
                            </h1>
                            <p className="text-moss/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium">
                                Panduan Lengkap Penulisan Makalah Simposium Nasional FSTPT Ke-28.
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
                                        href="https://bit.ly/templatefstpt28"
                                        target="_blank"
                                        rel="noopener noreferrer"
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

                            {/* Section: GAMBARAN UMUM & ABSTRACTS */}
                            <div id="abstract" className="scroll-mt-32 space-y-12">
                                <FadeIn direction="up">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4">
                                            <span className="w-1.5 h-10 bg-fog rounded-full" />
                                            <h2 className="text-3xl font-black uppercase tracking-tight">AUTHOR GUIDELINES</h2>
                                        </div>
                                        <p className="text-lg font-bold text-sage italic bg-sage/5 p-6 rounded-2xl border-l-4 border-sage">
                                            Gambaran proses untuk peserta Simposium Madiun:
                                        </p>
                                        <div className="bg-white rounded-[2rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-12">
                                            <h3 className="text-xl font-extrabold text-pine text-center border-b border-clay/30 pb-6 uppercase">
                                                INSTRUKSI PENULISAN MAKALAH UNTUK <br />
                                                SIMPOSIUM FORUM STUDI TRANSPORTASI ANTAR PERGURUAN TINGGI KE-28
                                            </h3>

                                            <div className="grid md:grid-cols-2 gap-12">
                                                <div className="space-y-4">
                                                    <h4 className="font-black text-fog uppercase text-sm tracking-widest">Abstract</h4>
                                                    <div className="text-sm leading-relaxed space-y-4 text-justify">
                                                        <p>
                                                            This document contains the detailed guidelines for preparation of full papers of the 28th FSTPT Symposium. To submit a paper for presentation at the symposium, follow the instructions in this document. Author(s) should review all information in this document before submitting papers for consideration. Papers that do not follow the guidelines may not be considered for presentation or publication.
                                                        </p>
                                                        <p>
                                                            The deadline for submitting draft full paper is <strong className="text-pine">May 16, 2025</strong>. The paper will be subsequently reviewed by the Scientific Committee and the result will be informed to the corresponding author. The authors have to revise their paper according to the Scientific Committee’s comments and to resubmit the paper by <strong className="text-pine">July 11, 2025</strong> at the latest. All presented papers will be published in the Proceedings of the Symposium. Abstract should be within 150 words.
                                                        </p>
                                                    </div>
                                                    <p className="text-xs font-bold pt-4 text-pine/60">Keywords: keyword A, keyword B, keyword C, keyword D, keyword E</p>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="font-black text-fog uppercase text-sm tracking-widest">Abstrak</h4>
                                                    <div className="text-sm leading-relaxed space-y-4 text-justify">
                                                        <p>
                                                            Dokumen ini berisi rincian panduan penulisan makalah dari the Simposium FSTPT ke-28. Untuk memasukkan makalah untuk dipresentasikan dalam simposium, ikutilah instruksi dalam dokumen ini. Penulis (para penulis) wajib mengikuti semua informasi yang ada di dalam dokumen ini sebelum memasukkan makalah untuk direview. Makalah yang tidak mengikuti panduan ini tidak akan dipertimbangkan untuk dipresentasikan dan dipublikasikan.
                                                        </p>
                                                        <p>
                                                            Batas terakhir pemasukan draft makalah adalah <strong className="text-pine">16 Mei 2025</strong>. Makalah akan direview oleh Komite Ilmiah FSTPT dan hasilnya akan diinformasikan kepada penulis kontak. Penulis (para penulis) wajib merevisi makalah sesuai dengan semua komentar dari Komite Ilmiah dan memasukkan ulang makalah paling lambat pada tanggal <strong className="text-pine">11 Juli 2025</strong>. Semua makalah yang telah dipresentasikan akan dipublikasi di dalam prosiding simposium. Abstrak ditulis dalam maksimal 150 kata.
                                                        </p>
                                                    </div>
                                                    <p className="text-xs font-bold pt-4 text-pine/60">Kata Kunci: kata kunci A, kata kunci B, kata kunci C, kata kunci D, kata kunci E</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: PENJELASAN UMUM */}
                            <div id="general" className="scroll-mt-32">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-8">
                                        <h3 className="text-2xl font-black text-pine uppercase">PENJELASAN UMUM</h3>
                                        <div className="text-sage leading-relaxed space-y-6">
                                            <p>
                                                Instruksi ini disusun sebagai panduan untuk penulis (para penulis) mempersiapkan makalah. Sebagai legitimasi untuk dipresentasikan dalam simposium ini, maka <strong className="text-pine underline decoration-fog underline-offset-4">paling sedikit 1 (satu) dari para penulis adalah dosen</strong>.
                                            </p>
                                            <p>
                                                Selanjutnya, penulis (para penulis) wajib memenuhi semua instruksi sebagai syarat untuk diterimanya makalah. Makalah harus dimasukkan dalam bentuk soft-copy dengan format sesuai dengan Microsoft Word.
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: FORMAT */}
                            <div id="format" className="scroll-mt-32 space-y-10">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-10">
                                        <h3 className="text-2xl font-black text-pine uppercase">FORMAT</h3>
                                        <p className="text-sage font-medium">Format kertas adalah sebagai berikut:</p>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <ul className="space-y-4 text-sm font-semibold text-pine/80 list-none">
                                                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Kertas A4 posisi portrait</li>
                                                <li className="flex gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" />
                                                    Margin: Atas 3,5 cm, Bawah 3,0 cm, Kiri 3,0 cm, Kanan 2,5 cm
                                                </li>
                                                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Tipe font adalah Times New Roman</li>
                                                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Makalah ditulis dalam satu baris dan satu kolom</li>
                                            </ul>
                                            <ul className="space-y-4 text-sm font-semibold text-pine/80 list-none">
                                                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Jumlah maksimum makalah 10 (sepuluh) halaman, termasuk Gambar, Tabel, Lampiran, dan Daftar Pustaka</li>
                                                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Jarak antar paragraf diberi satu baris tanpa indent</li>
                                                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Finalisasi nomor halaman akan dilakukan oleh Editor</li>
                                                <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-fog mt-2 shrink-0" /> Makalah tidak diberi footer</li>
                                            </ul>
                                        </div>

                                        <div className="space-y-6 pt-10 border-t border-clay/30">
                                            <h4 className="text-lg font-black text-pine">Judul dan Informasi untuk Penulis</h4>
                                            <div className="bg-clay/5 p-8 rounded-2xl border border-clay/20 space-y-4 text-sm leading-relaxed">
                                                <p>Judul makalah harus ditulis di tengah setelah 2 baris kosong dari sisi margin atas. Judul menggunakan <strong className="text-pine">HURUF KAPITAL</strong> dicetak tebal, 16pt dan satu spasi. Sisipkan 1 baris kosong setelah judul.</p>
                                                <p>Jika hanya terdapat 1 (satu) penulis, informasi mengenai penulis ditulis di tengah dengan menggunakan tipe font 10pt dengan 1 (satu) spasi. Informasi mengenai penulis berisi nama penulis tanpa gelar (dicetak tebal), jabatan, organisasi/institusi, alamat, nomor telepon/hp, dan alamat email. Sisipkan 2 baris kosong setelah informasi penulis.</p>
                                                <div className="p-4 bg-white rounded-xl border border-clay/30 inline-block">
                                                    <p className="font-bold text-fog mb-2 uppercase text-[10px] tracking-widest">Aturan Multiple Penulis:</p>
                                                    <ul className="space-y-1 font-bold text-pine/70 italic text-xs">
                                                        <li>2 penulis : berdampingan</li>
                                                        <li>3 penulis : 3 berjajar ke samping</li>
                                                        <li>4 penulis : 2 di atas, 2 di bawah</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6 pt-6">
                                            <h4 className="text-lg font-black text-pine">Abstrak</h4>
                                            <div className="bg-clay/5 p-8 rounded-2xl border border-clay/20 space-y-4 text-sm leading-relaxed">
                                                <p>Abstrak ditulis sebelum Bab Pendahuluan. Abstrak mengandung uraian latar belakang, tujuan penelitian, metode penelitian, dan hasil penelitian. Abstrak dibatasi maksimum 150 (seratus lima puluh) kata.</p>
                                                <p>Abstrak ditulis dalam bahasa Inggris dan Bahasa Indonesia dengan huruf ukuran 10 pt, satu kolom penuh. Tulisan abstrak sebagai judul dituliskan di atas teks abstrak. Di bawah abstrak sejarak satu spasi harus dituliskan lima kata-kata kunci. Sisipkan 2 baris kosong setelah kata kunci.</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6 pt-6">
                                            <h4 className="text-lg font-black text-pine">Corak (Style), Bab, Sub-bab, Sub-sub-bab, dan Paragraf</h4>
                                            <div className="bg-clay/5 p-8 rounded-2xl border border-clay/20 space-y-4 text-sm leading-relaxed">
                                                <p>Dipandang perlu untuk mempertahankan corak (style) dari judul, jenis font dan baris spasi dalam file ini untuk tujuan keseragaman corak yang digunakan pada prosiding.</p>
                                                <p>Bagian utama makalah dimulai setelah 2 (dua) baris spasi dari kata kunci. Bagian utama makalah dibagi menjadi bab-bab, sub-bab (jika perlu), dan sub-sub-bab (jika perlu). <strong className="text-pine">Judul tiap bab ditulis dengan huruf besar dicetak tebal menggunakan ukuran 16pt.</strong> Judul Sub Bab harus ditulis dengan format rata kiri, ditulis dengan seluruhnya cetak tebal, sedangkan huruf besar hanya pada huruf pertama, menggunakan tipe font Times New Roman 12pt. Penulisan Bab dan Sub-bab tidak diberi nomor. Sub-sub bab (jika perlu) dapat diberi nomor.</p>
                                                <p>Tiap paragraf dimulai dengan format rata kiri tanpa indentation untuk kalimat pertama. Paragraf harus ditulis dalam tipe font Times New Roman 12pt dengan 1 (satu) spasi. 1 (satu) baris spasi sebagai jarak antar paragraf.</p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: SISTEMATIKA */}
                            <div id="structure" className="scroll-mt-32">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-12">
                                        <div className="text-center space-y-4">
                                            <h3 className="text-2xl md:text-3xl font-black text-pine uppercase tracking-tight">SISTEMATIKA PENULISAN MAKALAH</h3>
                                            <p className="text-sage font-medium max-w-2xl mx-auto">
                                                Makalah mengandung komponen-komponen utama dengan urutan penulisan secara sistematis sebagai berikut:
                                            </p>
                                        </div>

                                        <div className="max-w-2xl mx-auto space-y-4">
                                            {[
                                                'Judul', 'Penulis', 'Abstract', 'Abstrak', 'Pendahuluan/Latar Belakang',
                                                'Bab-bab Pembahasan (data, analisis, dan lain-lain)', 'Kesimpulan',
                                                'Ucapan Terima kasih (boleh tidak ada)', 'Daftar Pustaka'
                                            ].map((item, i) => (
                                                <div key={i} className="group relative flex items-center p-5 bg-gradient-to-r from-sage/5 to-moss/10 hover:from-sage/20 hover:to-moss/30 rounded-2xl border border-moss/20 hover:border-moss/40 hover:shadow-xl hover:shadow-moss/10 transition-all duration-500">
                                                    <div className="flex items-center gap-6">
                                                        <div className="w-12 h-12 rounded-xl bg-white border border-moss/20 flex items-center justify-center shadow-sm group-hover:bg-pine group-hover:border-pine transition-all duration-500">
                                                            <span className="text-pine font-black text-sm group-hover:text-white transition-colors duration-500">{(i + 1).toString().padStart(2, '0')}</span>
                                                        </div>
                                                        <span className="text-base font-extrabold text-pine/80 group-hover:text-pine transition-colors duration-500 tracking-tight">{item}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: EQUATIONS & MEDIA */}
                            <div id="media" className="scroll-mt-32">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-12">
                                        <h3 className="text-2xl font-black text-pine uppercase text-center md:text-left">PENULISAN PERSAMAAN, TABEL, DAN GAMBAR</h3>

                                        <div className="space-y-6 text-sm leading-relaxed text-sage">
                                            <div className="space-y-4">
                                                <p>Posisikan tabel dekat dengan kalimat rujukannya di dalam teks dan diberi nomor secara secara berurutan. Cantumkan nama tabel yang cukup jelas di atas tabel. Hindari penggunaan singkatan dalam kepala kolom. Tuliskan unit pengukuran yang digunakan di bawah kepala kolom. Gunakan hanya garis horizontal pada tabel, yakni di atas dan satu di bawah kepala kolom dan pada sisi bawah tabel.</p>

                                                {/* Example Table Image */}
                                                <div className="bg-white p-4 rounded-2xl border border-clay/10 inline-block shadow-sm">
                                                    <img
                                                        src="/tabel.png"
                                                        alt="Contoh Format Tabel"
                                                        className="max-h-[300px] w-auto h-auto rounded-lg"
                                                    />
                                                    <p className="text-[10px] font-bold text-pine/40 mt-3 text-center uppercase tracking-widest italic">Contoh Format Tabel 1</p>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <p>Buatlah gambar dengan menggunakan perangkat lunak grafis dan diberi nomor secara berurutan. Sisipkan 2 baris kosong antara teks dan gambar. Jika memungkinkan, tempatkan gambar pada setelan wrap in line with text. Cantumkan nama gambar yang cukup informatif di bawah gambar. Sisipkan 1 baris jarak antara gambar dan nama gambar. Gambar bisa berupa hitam putih atau warna.</p>

                                                {/* Example Figure Image */}
                                                <div className="bg-white p-6 rounded-2xl border border-clay/10 inline-block shadow-sm">
                                                    <img
                                                        src="/gambar.png"
                                                        alt="Interpolasi Spatial Interpolation: Metode Kriging"
                                                        className="max-h-[350px] w-auto h-auto rounded-lg mx-auto"
                                                    />
                                                    <p className="text-xs font-bold text-pine/60 mt-4 text-center italic">Gambar 1. Interpolasi Spatial Interpolation: Metode Kriging</p>
                                                </div>
                                            </div>

                                            <div className="space-y-4 pt-6">
                                                <p>Persamaan dan simbol harus diketik menggunakan equation editor. Persamaan ditempatkan 1 cm dari margin kiri. Persamaan harus diberi nomor secara berurutan yang ditempatkan dalam tanda kurung pada posisi tab stop 15,5 cm rata kanan. Gunakan corak “Persamaan” untuk mendapatkan format yang seragam. Simbol dan notasi dapat didefinisikan pada kalimat sebelum persamaan atau di bawah persamaan. Sisipkan 1 baris kosong sebelum dan sesudah persamaan.</p>

                                                <div className="p-8 bg-clay/10 rounded-2xl border border-clay/20 flex flex-col items-center gap-4">
                                                    <div className="w-full flex justify-center items-center">
                                                        <img
                                                            src="/rumus.png"
                                                            alt="Formula Persamaan"
                                                            className="max-h-[100px] w-auto h-auto rounded-lg"
                                                        />
                                                    </div>
                                                    <div className="w-full text-xs font-medium space-y-1 pt-4 border-t border-clay/30 text-center md:text-left">
                                                        <p>dimana,</p>
                                                        <p>V = kecepatan (km/jam),</p>
                                                        <p>ΔD = jarak (km),</p>
                                                        <p>Δt = waktu (jam).</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="bg-pine/5 p-6 rounded-xl border border-pine/10 font-bold text-pine italic">
                                                Keseluruhan persamaan, tabel, dan gambar yang dibuat dengan menggunakan perangkat lunak non-MS. Word harus diimpor ke dalam file naskah dalam MS. Word.
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: UCAPAN TERIMA KASIH */}
                            <div id="thanks" className="scroll-mt-32">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-6">
                                        <h3 className="text-2xl font-black text-pine uppercase">UCAPAN TERIMA KASIH</h3>
                                        <p className="text-sm leading-relaxed text-sage">
                                            Ucapan terima kasih, bila ada, dituliskan di makalah. Ucapan terima kasih ini ditulis pada bagian akhir teks sebelum Daftar Pustaka. Ucapan terima kasih ditujukan kepada pemberi dana, pemberi beasiswa, pemberi data, pihak-pihak yang membantu, dan sebagainya. <strong className="text-pine">Ucapan terima kasih ditulis dengan huruf ukuran 10 pt.</strong>
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: DAFTAR PUSTAKA */}
                            <div id="bibliography" className="scroll-mt-32 space-y-12">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-12">
                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-black text-pine uppercase">DAFTAR PUSTAKA</h3>
                                            <div className="text-sm leading-relaxed text-sage space-y-4">
                                                <p>Daftar Pustaka hanya berisi pustaka-pustaka yang memang disebut dalam naskah. Daftar Pustaka ditulis berurutan menurut abjad (ascending) nama akhir penulis. Apabila jumlah penulis lebih dari satu orang, maka semua nama penulis harus dicantumkan. Format penulisan daftar pustaka adalah hanging 1 cm dari sisi margin kiri.</p>
                                                <p>Ketentuan umum mengenai urutan penulisan data sebuah pustaka adalah sebagai berikut, misalkan diambil dari buku, ataupun artikel:</p>
                                            </div>
                                        </div>

                                        <div className="grid gap-4">
                                            {[
                                                { t: 'Buku', v: 'Smith, A dan Jones, B, tahun publikasi, judul, lokasi, penerbit, halaman.' },
                                                { t: 'Buku dengan Editor', v: 'Smith, A, ed., tahun publikasi, judul, lokasi, penerbit, halaman.' },
                                                { t: 'Artikel Majalah/Jurnal', v: 'Smith, A dan Jones, B, tahun publikasi, judul artikel, nama jurnal, volume dan nomor terbit, halaman, link doi.' },
                                                { t: 'Artikel Jurnal Online', v: 'Smith, A dan Jones, B, tahun publikasi, judul, volume dan nomor terbit, halaman, URL.' },
                                                { t: 'Paper Konferensi', v: 'Smith, A dan Jones, B, tahun publikasi, judul dalam prosiding konferensi (lokasi, tanggal)' }
                                            ].map((item, i) => (
                                                <div key={i} className="p-6 bg-clay/5 rounded-2xl border border-clay/20">
                                                    <h4 className="text-xs font-black text-fog uppercase tracking-widest mb-2">{item.t}</h4>
                                                    <p className="text-sm font-medium italic text-pine">{item.v}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="space-y-8 pt-10 border-t border-clay/30">
                                            <h4 className="text-lg font-black text-pine">Contoh:</h4>
                                            <div className="bg-clay/5 p-8 rounded-2xl border border-clay/20 space-y-4 text-xs leading-relaxed italic text-pine/80">
                                                <p className="pl-4 -indent-4">Cornforth, D.H. 2005. Landslides in Practice Investigation, Analysis, and Remedial/Preventative Options in Soils. New Jersey: John Wiley and Sons, Inc., hal. 10-15.</p>
                                                <p className="pl-4 -indent-4">Department of Transportation. 2006. Data Armada Angkutan Umum Provinsi DIY Tahun 2006. Bidang Angkutan Dinas Perhubungan Provinsi Daerah Istimewa Yogyakarta.</p>
                                                <p className="pl-4 -indent-4">Fwa, T.F. 2006. The Handbook of Highway Engineering. New York: CRC Press, hal. 40-43.</p>
                                                <p className="pl-4 -indent-4">Majid, A. dan McCaffer, R. 1998. Factors of Non-Excusable Delays that Influence Contractors’ Performance. Journal of Management Engineering ASCE, hal. 42-49.</p>
                                                <p className="pl-4 -indent-4">Munawar, A., Kusumawardani, S.S., Utomo, R.B., dan Yuzal, S., 2012, “Integrated Public Transport Ticketing System in Yogyakarta” dalam Proceedings of the 12th Asia-Pacific ITS Forum & Exhibition (Kuala Lumpur, 16-18 April 2012).</p>
                                                <p className="pl-4 -indent-4">Sugiyanto, G. 2007. Kajian Penerapan Congestion Charging untuk Meningkatkan Penggunaan Angkutan Umum (Studi Kasus di Koridor Malioboro, Yogyakarta). Tesis untuk derajat Magister Rekayasa Transportasi, Institut Teknologi Bandung (tidak dipublikasikan).</p>
                                            </div>
                                        </div>

                                        <div className="space-y-8 pt-10 border-t border-clay/30">
                                            <h4 className="text-lg font-black text-pine">Cara Mensitasi Pustaka (Harvard Style)</h4>
                                            <div className="space-y-12">
                                                {/* Summary Rules - Restored content exactly as user requested */}
                                                <div className="space-y-4">
                                                    <p className="text-sm font-bold text-fog underline underline-offset-4">Pustaka oleh satu orang penulis, misalnya:</p>
                                                    <p className="text-xs italic text-pine p-3 bg-white border border-clay/30 rounded-lg">Smith, A. 2020. Contoh Penulisan Sitasi dengan Satu Penulis dalam Artikel Ilmiah. Jakarta, Penerbit ABC. 100 halaman.</p>
                                                    <div className="text-sm leading-relaxed text-sage space-y-4">
                                                        <p>Untuk mensitasi pustaka yang ditulis oleh satu orang penulis, maka penulisannya adalah dengan menulis nama penulis diikuti oleh tahun dalam tanda kurung <strong className="text-pine">(Smith, 2020)</strong>.</p>
                                                        <p>Atau apabila penulis sebagai subyek kalimat: <strong className="text-pine">Smith (2020)</strong> menyatakan bahwa...</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <p className="text-sm font-bold text-fog underline underline-offset-4">Pustaka oleh dua orang penulis, misalnya:</p>
                                                    <p className="text-xs italic text-pine p-3 bg-white border border-clay/30 rounded-lg">Smith, A dan Jones, B. 2021. Contoh Penulisan Sitasi dengan Dua Penulis dalam Artikel Ilmiah. Surabaya, Penerbit DEF. 125 halaman.</p>
                                                    <div className="text-sm leading-relaxed text-sage space-y-4">
                                                        <p>Untuk mensitasi pustaka yang ditulis oleh dua orang penulis, maka penulisannya adalah dengan menulis kedua nama penulis <strong className="text-pine">(Smith dan Jones, 2021)</strong>.</p>
                                                        <p>Atau apabila penulis sebagai subyek kalimat: <strong className="text-pine">Smith dan Jones (2021)</strong> menyatakan bahwa...</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <p className="text-sm font-bold text-fog underline underline-offset-4">Pustaka oleh lebih dari dua orang penulis:</p>
                                                    <div className="text-sm leading-relaxed text-sage space-y-4">
                                                        <p>Untuk mensitasi pustaka yang ditulis oleh lebih dari dua orang penulis, maka penulisannya adalah dengan menulis nama penulis pertama diikuti dengan et al. <strong className="text-pine">(Smith et al., 2022)</strong>.</p>
                                                        <p>Atau apabila penulis sebagai subyek kalimat: <strong className="text-pine">Smith et al. (2022)</strong> menyatakan bahwa...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Section: LAMPIRAN & PENTING */}
                            <div id="appendix" className="scroll-mt-32 space-y-12 pb-20">
                                <FadeIn direction="up">
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-pine/5 space-y-6">
                                        <h3 className="text-2xl font-black text-pine uppercase">LAMPIRAN</h3>
                                        <p className="text-sm leading-relaxed text-sage">
                                            Pemuatan lampiran dimungkinkan (tabel, gambar, dll). Pembuatan lampiran harus mengikuti ketentuan-ketentuan mengenai perangkat lunak, bahasa, pengaturan halaman, header, dan penulisan media.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-pine to-[#1a2e31] rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden mt-12">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-fog/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                                        <div className="relative z-10 space-y-4">
                                            <h4 className="text-fog font-black uppercase tracking-[0.2em] text-xs">Penting:</h4>
                                            <p className="text-xl md:text-2xl font-black max-w-2xl mx-auto leading-tight">
                                                Panjang halaman maksimal <span className="text-moss">10 (sepuluh) halaman</span>.
                                                <span className="block text-moss/70 text-lg md:text-xl mt-2 font-bold italic">(termasuk lampiran, kalau ada)</span>
                                            </p>
                                            <p className="text-moss/60 text-sm font-medium">
                                                Makalah melebihi batas tidak akan diterima untuk publikasi prosiding.
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
