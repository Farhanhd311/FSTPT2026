'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import { useState, useMemo } from 'react';

const hotelData = [
    { name: 'Daima Hotel Padang', image: '/hotel/hoteldaima.png', stars: 3, price: 437600, distance: 12.9, link: 'https://url-shortener.me/DZJW' },
    { name: 'Rocky Plaza Hotel Padang', image: '/hotel/rockyplaza.png', stars: 4, price: 432834, distance: 13.2, link: 'https://url-shortener.me/DZSR' },
    { name: 'Whiz Prime Hotel Padang', image: '/hotel/hotelWhizPrime.png', stars: 3, price: 371957, distance: 15.8, link: 'https://url-shortener.me/DZYC' },
    { name: 'The Axana Hotel', image: '/hotel/hotelaxana.png', stars: 4, price: 365715, distance: 13.6, link: 'https://url-shortener.me/DZMH' },
    { name: 'HW Hotel Padang', image: '/hotel/hotelHW.png', stars: 3, price: 347480, distance: 13.6, link: 'https://url-shortener.me/DZNP' },
    { name: 'Pangeran City Hotel', image: '/hotel/hotelpangeran.png', stars: 3, price: 367975, distance: 13.7, link: 'https://url-shortener.me/DZP4' },
    { name: 'favehotel Olo - Padang', image: '/hotel/hotelfave.png', stars: 3, price: 338974, distance: 13.4, link: 'https://url-shortener.me/DZRM' },
    { name: 'Fahira Hotel Syariah Padang', image: '/hotel/hotelfahira.png', stars: 2, price: 320179, distance: 14.3, link: 'https://url-shortener.me/DZV0' },
    { name: 'My All Hotel', image: '/hotel/hotelMyAll.png', stars: 2, price: 265783, distance: 14.4, link: 'https://url-shortener.me/DZX8' },
    { name: 'Truntum Padang Hotel', image: '/hotel/hoteltruntum.png', stars: 4, price: 576810, distance: 14.1, link: 'https://url-shortener.me/DZLK' },
    { name: 'Hotel Kawana Padang', image: '/hotel/hotelkawana.png', stars: 3, price: 493468, distance: 13.3, link: 'https://url-shortener.me/DZZM' },
    { name: 'Hotel ibis Padang', image: '/hotel/hotelibis.png', stars: 3, price: 561183, distance: 14.1, link: 'https://url-shortener.me/DZDC' },
    { name: 'Amaris Hotel Padang', image: '/hotel/hotelamaris.png', stars: 2, price: 450000, distance: 13.3, link: 'https://url-shortener.me/DZGK' },
    { name: 'Hotel Santika Premiere', image: '/hotel/hotelsantika.png', stars: 4, price: 871951, distance: 13.8, link: 'https://url-shortener.me/DZ8L' },
    { name: 'Hotel Mercure', image: '/hotel/hotelmercure.png', stars: 4, price: 861444, distance: 15.4, link: 'https://url-shortener.me/DZ8L' },
    { name: 'The ZHM Premiere Hotel Padang', image: '/hotel/TheZhmPremier.png', stars: 4, price: 770871, distance: 13.5, link: 'https://url-shortener.me/DZB2' },
];

const sortOptions = [
    {
        id: 'price-low', label: 'Harga Terendah', icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
        )
    },
    {
        id: 'price-high', label: 'Harga Tertinggi', icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    },
    {
        id: 'distance-near', label: 'Jarak Terdekat', icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
];

export default function VenueHotel() {
    const [sortBy, setSortBy] = useState('price-low');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const sortedHotels = useMemo(() => {
        return [...hotelData].sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            if (sortBy === 'distance-near') return a.distance - b.distance;
            return 0;
        });
    }, [sortBy]);

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
                                Event Logistics
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                                Venue & <span className="text-gradient-fog bg-gradient-to-r from-moss to-clay bg-clip-text text-transparent">Hotels</span>
                            </h1>
                            <p className="text-moss/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium">
                                Informasi Lengkap Lokasi Acara dan Rekomendasi Penginapan Sekitar Venue.
                            </p>
                        </FadeIn>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-10" />
                </section>

                {/* ═══════════════ VENUE SECTION ═══════════════ */}
                <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 -mt-16 relative z-30">
                    <FadeIn direction="up">
                        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-pine/5 border border-pine/5">
                            <div className="grid lg:grid-cols-2">
                                <div className="relative h-64 lg:h-full min-h-[400px]">
                                    <Image
                                        src="/chunand.jpg"
                                        alt="Universitas Andalas"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-pine/40 to-transparent" />
                                </div>
                                <div className="p-8 md:p-14 flex flex-col justify-center">
                                    <div className="space-y-6">
                                        <div>
                                            <span className="text-clay font-black text-xs uppercase tracking-[0.2em] mb-3 block">Main Venue</span>
                                            <h2 className="text-3xl md:text-4xl font-black text-pine mb-4 uppercase">Convention Hall <br />Universitas Andalas</h2>
                                            <div className="flex items-center gap-3 text-sage font-medium">
                                                <svg className="w-5 h-5 text-fog " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>Limau Manis, Pauh, Padang, West Sumatera</span>
                                            </div>
                                        </div>

                                        <p className="text-sage leading-relaxed text-justify">
                                            Convention Hall Universitas Andalas merupakan fasilitas utama yang terletak di kampus Limau Manis, dikenal dengan arsitektur modernnya dan pemandangan kota Padang yang memukau dari ketinggian. Gedung ini dilengkapi dengan fasilitas konferensi bertaraf nasional yang mendukung kenyamanan peserta selama simposium berlangsung.
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 pt-4">
                                            <div className="p-4 bg-clay/5 rounded-2xl border border-clay/10">
                                                <h4 className="font-bold text-pine text-xs uppercase mb-1">Kapasitas</h4>
                                                <p className="text-sage text-sm">Hingga 2000 Orang</p>
                                            </div>
                                            <div className="p-4 bg-fog/5 rounded-2xl border border-fog/10">
                                                <h4 className="font-bold text-pine text-xs uppercase mb-1">Fasilitas</h4>
                                                <p className="text-sage text-sm">Full AC & Wi-Fi</p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://www.google.com/maps/place/Convention+Hall+Universitas+Andalas/@-0.9168827,100.4556564,1283m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2fd4b7971813fc5d:0x1c262331dec7b3c0!8m2!3d-0.9168827!4d100.4582313!16s%2Fg%2F11bywwb60z?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-pine text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-fog shadow-lg transition-all duration-300"
                                        >
                                            Buka Google Maps
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* ═══════════════ HOTELS SECTION ═══════════════ */}
                <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-32">
                    <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 relative ${isDropdownOpen ? 'z-50' : 'z-10'}`}>
                        <FadeIn direction="right">
                            <div className="text-left">
                                <span className="text-clay font-black text-xs uppercase tracking-[0.3em] mb-4 block">Accommodation</span>
                                <h2 className="text-4xl md:text-5xl font-black text-pine uppercase">Rekomendasi <span className="text-fog">Hotel</span></h2>
                                <p className="text-sage font-medium mt-4 max-w-xl">
                                    Pilihan hotel terbaik di Kota Padang untuk menunjang kenyamanan istirahat Anda selama kegiatan berlangsung.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={200}>
                            <div className={`flex flex-col gap-3 min-w-[280px] relative ${isDropdownOpen ? 'z-50' : 'z-20'}`}>
                                <label className="text-[10px] font-black text-pine/40 uppercase tracking-widest ml-1">Urutkan Berdasarkan:</label>

                                <div className="relative">
                                    {/* Dropdown Trigger */}
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className={`w-full bg-white border ${isDropdownOpen ? 'border-fog ring-4 ring-fog/5' : 'border-pine/10'} 
                                                   rounded-2xl px-6 py-4 text-sm font-bold text-pine flex items-center justify-between
                                                   shadow-sm hover:shadow-md transition-all duration-300 group z-50`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-fog/5 flex items-center justify-center text-fog">
                                                {sortOptions.find(opt => opt.id === sortBy)?.icon}
                                            </div>
                                            <span>{sortOptions.find(opt => opt.id === sortBy)?.label}</span>
                                        </div>
                                        <svg
                                            className={`w-5 h-5 text-pine/30 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180 text-fog' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isDropdownOpen && (
                                        <>
                                            {/* Click Outside Overlay */}
                                            <div
                                                className="fixed inset-0 z-40 cursor-default"
                                                onClick={() => setIsDropdownOpen(false)}
                                            />

                                            <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-pine/5 rounded-[2rem] shadow-2xl p-3 z-50 animate-in fade-in zoom-in duration-300 origin-top">
                                                {sortOptions.map((option) => (
                                                    <button
                                                        key={option.id}
                                                        onClick={() => {
                                                            setSortBy(option.id);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300
                                                                   ${sortBy === option.id
                                                                ? 'bg-fog/10 text-fog'
                                                                : 'text-sage hover:bg-pine/5 hover:text-pine'}`}
                                                    >
                                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors
                                                                       ${sortBy === option.id ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
                                                            {option.icon}
                                                        </div>
                                                        <span className="font-bold text-sm tracking-tight">{option.label}</span>
                                                        {sortBy === option.id && (
                                                            <div className="ml-auto w-2 h-2 rounded-full bg-fog" />
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {sortedHotels.map((hotel, index) => (
                            <FadeIn key={`${hotel.name}-${sortBy}`} direction="up" delay={index * 50}>
                                <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-pine/5 shadow-sm hover:shadow-2xl hover:shadow-pine/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col md:flex-row shadow-xl">
                                    {/* Image Container */}
                                    <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                                        <Image
                                            src={hotel.image}
                                            alt={hotel.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-pine/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-pine/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:hidden" />

                                        {/* Stars Badge */}
                                        <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/20 flex items-center gap-1">
                                            {[...Array(hotel.stars)].map((_, i) => (
                                                <svg key={i} className="w-3 h-3 text-clay fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Distance Badge */}
                                        <div className="absolute bottom-6 left-6 px-4 py-1.5 bg-pine/80 backdrop-blur-md rounded-full text-xs font-bold text-white shadow-lg border border-white/10">
                                            {hotel.distance} km away
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl font-black text-pine mb-3 leading-tight group-hover:text-fog transition-colors">{hotel.name}</h3>
                                            <div className="flex items-center gap-2 text-sage font-semibold mb-8">
                                                <div className="w-8 h-8 rounded-full bg-moss/10 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm">Padang, West Sumatera</span>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="p-5 bg-clay/5 rounded-2xl border border-clay/10">
                                                <p className="text-[10px] font-black text-pine/40 uppercase tracking-[0.2em] mb-1">Rates Start From</p>
                                                <p className="text-2xl font-black text-fog">Rp {hotel.price.toLocaleString('id-ID')}</p>
                                            </div>

                                            <a
                                                href={hotel.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 w-full py-4 bg-pine text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-fog shadow-lg transition-all duration-300 group/btn"
                                            >
                                                Detail Penginapan
                                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </section>

                {/* ═══════════════ CTA BANNER ═══════════════ */}
                <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-32">
                    <FadeIn direction="up">
                        <div className="bg-gradient-to-br from-pine to-[#1a2e31] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-fog/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-float-slow" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-moss/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl animate-float-delay" />

                            <div className="relative z-10 space-y-8">
                                <span className="text-moss font-black uppercase tracking-[0.4em] text-xs">Akomodasi Terjamin</span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black max-w-4xl mx-auto leading-tight">
                                    Persiapkan <span className="text-moss italic">Kehadiran</span> Anda di Kota Padang
                                </h2>
                                <p className="text-moss/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                                    Kami merekomendasikan untuk melakukan pemesanan hotel lebih awal untuk mendapatkan harga terbaik.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                                    <a
                                        href="mailto:fstpt2026@unand.ac.id"
                                        className="px-10 py-5 bg-moss text-pine font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-moss/20"
                                    >
                                        Hubungi Panitia
                                    </a>
                                    <button
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white/20 transition-all duration-300"
                                    >
                                        Kembali Ke Atas
                                    </button>
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
