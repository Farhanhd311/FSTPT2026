import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function Registration() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white pb-20">
                {/* Banner Section */}
                <div className="relative h-[40vh] bg-pine flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-pine/90 to-fog/80" />
                    <div className="relative z-10 text-center px-6">
                        <FadeIn direction="up">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Registration</h1>
                            <p className="text-moss text-lg max-w-2xl mx-auto">
                                Daftarkan diri Anda sebagai peserta atau pemakalah di FSTPT 2026.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-auto px-6 mt-16">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Informasi Biaya */}
                        <FadeIn direction="left" delay={100}>
                            <h2 className="text-3xl font-extrabold text-pine mb-8">Biaya Pendaftaran</h2>
                            <div className="space-y-6">
                                {[
                                    { category: 'Pemakalah (Umum)', price: 'Rp 1.500.000', label: 'Per Paper' },
                                    { category: 'Pemakalah (Mahasiswa)', price: 'Rp 750.000', label: 'Per Paper' },
                                    { category: 'Peserta Non-Pemakalah', price: 'Rp 500.000', label: 'Tanpa Presentasi' },
                                    { category: 'Peserta Internasional', price: '$150', label: 'International Participant' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-6 bg-white border border-clay/30 rounded-2xl hover:shadow-lg transition-all group">
                                        <div className="space-y-1">
                                            <p className="font-bold text-pine">{item.category}</p>
                                            <p className="text-xs text-sage/70">{item.label}</p>
                                        </div>
                                        <p className="text-xl font-black text-fog group-hover:scale-105 transition-transform">{item.price}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-fog/5 border border-fog/10 rounded-2xl">
                                <p className="text-sm text-sage leading-relaxed">
                                    <strong>*Catatan:</strong> Biaya pendaftaran sudah termasuk seminar kit, sertifikat, dan akses ke semua sesi pleno serta paralel. Pembayaran dapat dilakukan via transfer bank.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Form Pendaftaran Simulasir */}
                        <FadeIn direction="right" delay={200}>
                            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-clay/20">
                                <h3 className="text-2xl font-bold text-pine mb-6">Formulir Pendaftaran</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-pine mb-1">Nama Lengkap</label>
                                        <input type="text" placeholder="Masukkan nama lengkap" className="w-full px-4 py-3 rounded-xl border border-clay focus:border-fog focus:ring-1 focus:ring-fog outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-pine mb-1">Email</label>
                                        <input type="email" placeholder="example@email.com" className="w-full px-4 py-3 rounded-xl border border-clay focus:border-fog focus:ring-1 focus:ring-fog outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-pine mb-1">Institusi / Universitas</label>
                                        <input type="text" placeholder="Nama institusi Anda" className="w-full px-4 py-3 rounded-xl border border-clay focus:border-fog focus:ring-1 focus:ring-fog outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-pine mb-1">Kategori</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-clay focus:border-fog focus:ring-1 focus:ring-fog outline-none transition-all bg-transparent">
                                            <option>Pemakalah (Umum)</option>
                                            <option>Pemakalah (Mahasiswa)</option>
                                            <option>Peserta Non-Pemakalah</option>
                                            <option>International Participant</option>
                                        </select>
                                    </div>
                                    <button className="w-full py-4 bg-gradient-to-r from-pine to-fog text-white font-bold rounded-xl mt-4 hover:shadow-xl hover:-translate-y-1 transition-all">
                                        Lanjutkan Pembayaran
                                    </button>
                                </form>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
