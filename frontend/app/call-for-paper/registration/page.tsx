import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function Registration() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-[#fafafa] pb-20 font-inter">
                {/* ═══════════════ HERO SECTION ═══════════════ */}
                <section className="relative h-[45vh] min-h-[400px] bg-pine flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-pine via-pine/90 to-fog/40 z-10" />
                        <div className="absolute inset-0 bg-[url('/smartcity.jpg')] bg-cover bg-center opacity-20" />
                    </div>

                    <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full text-center">
                        <FadeIn direction="up">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-moss text-xs font-bold uppercase tracking-widest mb-6">
                                FSTPT 29 — Padang, West Sumatera
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                                Symposium <span className="text-gradient-fog bg-gradient-to-r from-moss to-clay bg-clip-text text-transparent">Registration</span>
                            </h1>
                            <p className="text-moss/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium">
                                Daftarkan diri Anda sebagai peserta atau pemakalah di FSTPT 2026.
                            </p>
                        </FadeIn>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-10" />
                </section>

                {/* Content Section */}
                <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-30">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Informasi Biaya */}
                        <FadeIn direction="left" delay={100} className="lg:col-span-2">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-black text-pine uppercase tracking-tight mb-4">Registration Fee</h2>
                                <div className="h-1.5 w-24 bg-gradient-to-r from-fog to-sage mx-auto rounded-full" />
                            </div>

                            <div className="flex flex-col gap-12">
                                {/* ISTSDC Card (Landscape) */}
                                <div className="bg-white rounded-[2.5rem] border border-clay/30 overflow-hidden shadow-2xl shadow-pine/5 flex flex-col md:flex-row">
                                    <div className="bg-pine p-8 md:p-12 text-white relative md:w-1/3 flex flex-col justify-center">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                                        <h3 className="text-3xl font-black leading-tight relative z-10">THE 5th ISTSDC 2026</h3>
                                        <p className="text-moss/60 text-sm font-bold uppercase tracking-[0.2em] mt-4 relative z-10">International Symposium</p>
                                        <div className="mt-8 hidden md:block w-12 h-1 bg-moss/20 rounded-full" />
                                    </div>

                                    <div className="p-8 md:p-12 md:flex-1 grid md:grid-cols-2 gap-10 bg-gradient-to-br from-white to-clay/5">
                                        {/* WNI Category */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2.5 bg-pine/5 rounded-xl text-pine">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <h4 className="font-black text-pine uppercase text-xs tracking-widest">Warga Negara Indonesia</h4>
                                            </div>
                                            <div className="grid gap-3">
                                                {[
                                                    { cat: 'Mahasiswa', price: 'Rp 3.500.000' },
                                                    { cat: 'Non-Mahasiswa (Early Bird)', price: 'Rp 3.750.000', note: 'hingga 16 Juli 2026' },
                                                    { cat: 'Non-Mahasiswa (Reguler)', price: 'Rp 4.000.000', note: 'setelah 16 Juli 2026' },
                                                    { cat: 'Penambahan Makalah', price: 'Rp 3.000.000' },
                                                    { cat: 'Peserta Sertifikat Saja', price: 'Rp 650.000' },
                                                ].map((f, i) => (
                                                    <div key={i} className="flex justify-between items-center gap-8 p-4 bg-gradient-to-br from-white via-moss/5 to-sage/10 border border-sage/20 rounded-2xl hover:border-pine/40 transition-all duration-300 shadow-sm shadow-sage/5">
                                                        <div className="space-y-0.5">
                                                            <p className="text-sm font-bold text-sage leading-tight">
                                                                {f.cat.split(' (')[0]}
                                                                {f.cat.includes(' (') && (
                                                                    <span className="block text-[10px] opacity-70 font-medium">({f.cat.split(' (')[1]}</span>
                                                                )}
                                                            </p>
                                                            {f.note && <span className="inline-block px-2 py-0.5 bg-clay/20 text-[9px] font-black text-pine/60 uppercase rounded-md tracking-tighter">{f.note}</span>}
                                                        </div>
                                                        <p className="font-black text-pine tracking-tight whitespace-nowrap">{f.price}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* International Category */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2.5 bg-pine/5 rounded-xl text-pine">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                                    </svg>
                                                </div>
                                                <h4 className="font-black text-pine uppercase text-xs tracking-widest">International Participants</h4>
                                            </div>
                                            <div className="grid gap-3">
                                                {[
                                                    { cat: 'Student', price: 'USD 270' },
                                                    { cat: 'Non-Student (Early Bird)', price: 'USD 330', note: 'hingga 16 Juli 2026' },
                                                    { cat: 'Non-Student (Reguler)', price: 'USD 360', note: 'setelah 16 Juli 2026' },
                                                    { cat: 'Add. Paper', price: 'USD 200' },
                                                    { cat: 'Certificate Only', price: 'USD 65' },
                                                ].map((f, i) => (
                                                    <div key={i} className="flex justify-between items-center gap-8 p-4 bg-gradient-to-br from-white via-moss/5 to-sage/10 border border-sage/20 rounded-2xl hover:border-pine/40 transition-all duration-300 shadow-sm shadow-sage/5">
                                                        <div className="space-y-0.5">
                                                            <p className="text-sm font-bold text-sage leading-tight">
                                                                {f.cat.split(' (')[0]}
                                                                {f.cat.includes(' (') && (
                                                                    <span className="block text-[10px] opacity-70 font-medium">({f.cat.split(' (')[1]}</span>
                                                                )}
                                                            </p>
                                                            {f.note && <span className="inline-block px-2 py-0.5 bg-clay/20 text-[9px] font-black text-pine/60 uppercase rounded-md tracking-tighter">{f.note}</span>}
                                                        </div>
                                                        <p className="font-black text-pine tracking-tight whitespace-nowrap">{f.price}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FSTPT Card (Landscape) */}
                                <div className="bg-white rounded-[2.5rem] border border-clay/30 overflow-hidden shadow-2xl shadow-sage/5 flex flex-col md:flex-row">
                                    <div className="bg-gradient-to-br from-fog to-sage p-8 md:p-12 text-white relative md:w-1/3 flex flex-col justify-center">
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
                                        <h3 className="text-3xl font-black leading-tight relative z-10">SIMPOSIUM NASIONAL FSTPT</h3>
                                        <p className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mt-4 relative z-10">National Symposium</p>
                                        <div className="mt-8 hidden md:block w-12 h-1 bg-white/20 rounded-full" />
                                    </div>

                                    <div className="p-8 md:p-12 md:flex-1 grid md:grid-cols-2 gap-10 bg-gradient-to-br from-white to-clay/5">
                                        {/* Early Bird */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2.5 bg-fog/5 rounded-xl text-fog">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <h4 className="font-black text-fog uppercase text-xs tracking-widest">Early Bird</h4>
                                            </div>
                                            <div className="grid gap-3">
                                                {[
                                                    { cat: 'Mahasiswa Anggota FSTPT', price: 'Rp 300.000' },
                                                    { cat: 'Mahasiswa Non-Anggota FSTPT', price: 'Rp 500.000' },
                                                    { cat: 'Dosen / Umum Anggota FSTPT', price: 'Rp 400.000' },
                                                    { cat: 'Non-Anggota FSTPT', price: 'Rp 600.000' },
                                                ].map((f, i) => (
                                                    <div key={i} className="flex justify-between items-center gap-8 p-4 bg-gradient-to-br from-white via-moss/5 to-sage/10 border border-sage/20 rounded-2xl hover:border-fog/40 transition-all duration-300 shadow-sm shadow-sage/5">
                                                        <p className="text-sm font-bold text-sage">{f.cat}</p>
                                                        <p className="font-black text-fog tracking-tight whitespace-nowrap">{f.price}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Reguler */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2.5 bg-fog/5 rounded-xl text-fog">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <h4 className="font-black text-fog uppercase text-xs tracking-widest">Reguler</h4>
                                            </div>
                                            <div className="grid gap-3">
                                                {[
                                                    { cat: 'Mahasiswa Anggota FSTPT', price: 'Rp 400.000' },
                                                    { cat: 'Mahasiswa Non-Anggota FSTPT', price: 'Rp 600.000' },
                                                    { cat: 'Dosen / Umum Anggota FSTPT', price: 'Rp 500.000' },
                                                    { cat: 'Non-Anggota FSTPT', price: 'Rp 700.000' },
                                                ].map((f, i) => (
                                                    <div key={i} className="flex justify-between items-center gap-8 p-4 bg-gradient-to-br from-white via-moss/5 to-sage/10 border border-sage/20 rounded-2xl hover:border-fog/40 transition-all duration-300 shadow-sm shadow-sage/5">
                                                        <p className="text-sm font-bold text-sage">{f.cat}</p>
                                                        <p className="font-black text-fog tracking-tight whitespace-nowrap">{f.price}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 p-8 bg-clay/5 border border-clay/20 rounded-[2rem] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-2 h-full bg-pine translate-x-1 group-hover:translate-x-0 transition-transform duration-500" />
                                <p className="text-sm text-pine font-medium leading-relaxed italic relative z-10 pr-4">
                                    <strong className="text-pine font-black not-italic block mb-2 uppercase tracking-widest text-[10px]">Catatan:</strong>
                                    Biaya pendaftaran sudah termasuk seminar kit, sertifikat, dan akses ke semua sesi pleno serta paralel. Pembayaran dapat dilakukan via transfer bank.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Login CTA Card */}
                        <FadeIn direction="right" delay={200} className="lg:col-span-2">
                            <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl border border-clay/20 text-center relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pine via-fog to-sage" />

                                <div className="relative z-10 max-w-2xl mx-auto">
                                    <div className="w-20 h-20 bg-pine/5 rounded-3xl flex items-center justify-center mx-auto mb-8 text-pine group-hover:scale-110 transition-transform duration-500">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                    </div>

                                    <h3 className="text-3xl font-black text-pine mb-6 uppercase tracking-tight">Siap Bergabung dengan FSTPT 2026?</h3>
                                    <p className="text-sage text-lg leading-relaxed mb-10">
                                        Untuk melakukan pendaftaran makalah, melakukan pembayaran, dan mengunggah berkas, Anda wajib masuk ke akun sistem informasi konferensi. Silakan login terlebih dahulu untuk melanjutkan proses pendaftaran Anda.
                                    </p>

                                    <div className="flex justify-center">
                                        <a href="/login" className="px-12 py-4 bg-pine text-white font-bold rounded-2xl hover:bg-fog hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-pine/10">
                                            Masuk ke Akun
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
