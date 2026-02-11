'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import NextImage from 'next/image';

const committeeData = {
    organizer: "Departemen Teknik Sipil, Fakultas Teknik, Universitas Andalas",
    event: "ISTSDC ke-5, Simposium Nasional Transportasi, Rapat Anggota Tahunan (RAT), dan Workshop FSTPT ke-29 Tahun 2026",
    steering: [
        { name: "Dr. Efa Yonnedi, S.E., M.PPM., Akt., CA., CRGP", image: "/panitia/efa yonedi.png" },
        { name: "Prof. Dr. Techn. Marzuki, M.Sc. Eng", image: "/panitia/technmarzukii.png" },
        { name: "Dr. Ir. Is Prima Nanda, S.T., M.T", image: "/panitia/prima nanda.png" },
        { name: "Ir. Sabril Haris HG., S.T., M.T., Ph. D", image: "/panitia/sabrilll.png" }
    ],
    organizing: [
        { role: "Chairman", name: "Ir. Bayu Martanto Adji, S.T., M.T., Ph.D.", image: "/panitia/bayuu.png" },
        { role: "Vice Chairman", name: "Yossyafra, S.T., M.Eng.Sc., Ph.D.", image: "/panitia/yosyafra.png" },
        { role: "Secretary", name: "Febi Putri Yastari, S.T., M.T.", image: "/panitia/febby.png" },
        { role: "Treasurer", name: "Dwi Jenita Maharani, S.T., M.Eng.", image: "/panitia/jenita.png" }
    ],
    scientific: [
        { name: "Prof. Dr. Eng. Ir. Jafril Tanjung, M.T.", institution: "Universitas Andalas, Indonesia" },
        { name: "Prof. Dr.Eng. Ir. Rendy Thamrin, S.T., M.T.", institution: "Universitas Andalas, Indonesia" },
        { name: "Prof. Ir. Taufika Ophiyandri, S.T., M. Sc, Ph. D", institution: "Universitas Andalas, Indonesia" },
        { name: "Ir. Purnawan, M.T., Ph.D.", institution: "Universitas Andalas, Indonesia" }
    ],
    subCommittees: [
        {
            title: "Secretariat",
            coordinator: "Jeply Murdiaman Guci, S.T., M.T.",
            members: [
                "Dr. Nidiasari, S.T., M.T.",
                "Ir. Akhmad Suraji, M.T., Ph.D., I.P.M.",
                "Refni Herman, A.Md",
                "Asraf Kahirun Nisa, S. Tp",
                "Muhammad Nugraha putra (2210923004)",
                "Haza salma (2210923030)"
            ]
        },
        {
            title: "Events",
            coordinator: "Ir. Ridho Aidil Fitrah, S.T., M.T.",
            members: [
                "Dr. Ir. Andriani, S.T., M.T.",
                "Riza Aryanti, S.T., M.T.",
                "Raoudhati nabila (2210921007)",
                "Alya muzhaffarah (2210923014)",
                "Aisya muqsithah zerlin (2210922014)",
                "M. Zaki Satria (2310921009)",
                "Rizqi Alhadi (2310921021)",
                "Nikita Eldira Putri (2310922003)",
                "Habib Dwi Syahputra (2310922019)"
            ]
        },
        {
            title: "Equipments & Transportation",
            coordinator: "Riko Zulhendra, M.T",
            members: [
                "Ir. Muhammad Aminsyah, M.T.",
                "Muhammad Shubhi Nurul Hadie, S.T., M.T.",
                "Maulana Arif, S.T., M.Eng.",
                "Uci Mardiani, S.T., M.T",
                "M. Al Hasbi Asrief A.Md",
                "Bintang maharizka vielki aquito (2210923028)",
                "Akbar nugraha delasvi (2210922037)",
                "M. Harist nur hakim (2210922017)",
                "Muhammad fiqra avandra (2210923069)",
                "lutfi algifari (2210923011)"
            ]
        },
        {
            title: "Website & Documentation",
            coordinator: "Ir. Benny Hidayat, M.T., Ph.D.",
            members: [
                "Ir. Hendra Gunawan, M.T.",
                "Prof. Ir. Elsa Eka Putri, S.T., M. Sc (Eng.), Ph.D.",
                "Muhazir Rahendra, S.T., M.T.",
                "Ayu Marta Mulya, S. IP",
                "Talitha Hulwa (2310922023)",
                "Aulia Rahman (ali) (2310922038)"
            ]
        },
        {
            title: "Publication (Editor)",
            coordinator: "Ir. Masrilayanti, S.T., M.Sc., Ph.D.",
            members: [
                "Ir. Jati Sunaryati, S.T., M.T., Ph.D.",
                "Nabila Siti Burnama, S.T., M.T.",
                "Aulia Rahman (aul) (2310923020)",
                "Febriyanto Saputra (2310923043)",
                "Puti Qurratu Aini (2310923057)",
                "Dzakira Tsabitul Azmi (2310923062)"
            ]
        },
        {
            title: "Workshop",
            coordinator: "Yosritzal, S.T, M.T, Ph. D.",
            members: [
                "Dr. Ir. Titi Kurniati, M.T.",
                "Febiana Maulani, S.T., M.T.",
                "Naila Izza Adha (2310923006)",
                "Yashila Nashwa Ananda (2310923011)"
            ]
        }
    ]
};

export default function Committee() {
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
                                Organizational Structure
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                                Committee <span className="text-gradient-fog bg-gradient-to-r from-moss to-clay bg-clip-text text-transparent">FSTPT 2026</span>
                            </h1>
                            <p className="text-moss/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                                Penyelenggara Kegiatan ISTSDC ke-5, Simposium Nasional Transportasi, RAT, dan Workshop FSTPT ke-29 Tahun 2026.
                            </p>
                        </FadeIn>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-10" />
                </section>

                <div className="space-y-24 -mt-20 relative z-30">
                    {/* ═══════════════ WIDE SECTION (Steering & Organizing) ═══════════════ */}
                    <div className="max-w-[1550px] mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
                        {/* ═══════════════ ORGANIZING BODY ═══════════════ */}
                        <FadeIn direction="up" delay={100}>
                            <div className="bg-white/80 backdrop-blur-xl border border-pine/10 rounded-[2.5rem] p-10 shadow-2xl shadow-pine/5 text-center max-w-7xl mx-auto">
                                <h2 className="text-xs font-black text-moss uppercase tracking-[0.2em] mb-4">Penyelenggara</h2>
                                <p className="text-2xl md:text-3xl font-black text-pine leading-tight">
                                    {committeeData.organizer}
                                </p>
                            </div>
                        </FadeIn>

                        {/* ═══════════════ STEERING COMMITTEE ═══════════════ */}
                        <section>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-black text-pine uppercase tracking-tight mb-4">Steering Committee</h2>
                                <div className="h-1.5 w-24 bg-gradient-to-r from-fog to-sage mx-auto rounded-full" />
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {committeeData.steering.map((item, i) => (
                                    <FadeIn key={i} direction="up" delay={i * 50}>
                                        <div className="h-full bg-white border border-clay/20 rounded-[2.5rem] overflow-hidden hover:border-pine/30 hover:shadow-2xl hover:shadow-pine/5 transition-all duration-500 group flex flex-col">
                                            <div className="relative h-72 overflow-hidden bg-pine/5">
                                                <div className="absolute inset-0 bg-gradient-to-t from-pine/20 to-transparent z-10" />
                                                {/* Profile Photo */}
                                                <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                                                    <NextImage
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-w-7xl) 25vw"
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-6 flex-grow flex flex-col justify-center text-center">
                                                <p className="font-black text-pine leading-tight text-base sm:text-xs xl:text-base tracking-tight">{item.name}</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </section>

                        {/* ═══════════════ ORGANIZING COMMITTEE ═══════════════ */}
                        <section>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-black text-pine uppercase tracking-tight mb-4">Organizing Committee</h2>
                                <div className="h-1.5 w-24 bg-gradient-to-r from-fog to-sage mx-auto rounded-full" />
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {committeeData.organizing.map((item, i) => (
                                    <FadeIn key={i} direction="up" delay={i * 100}>
                                        <div className="h-full bg-pine border border-white/10 rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col group hover:-translate-y-2 transition-all duration-500">
                                            <div className="relative h-72 overflow-hidden bg-white/5">
                                                <div className="absolute inset-0 bg-gradient-to-t from-pine/60 to-transparent z-10" />
                                                {/* Profile Photo */}
                                                <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                                                    <NextImage
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-w-7xl) 25vw"
                                                    />
                                                </div>
                                                <div className="absolute bottom-4 left-0 right-0 z-20 px-6">
                                                    <h3 className="text-[10px] font-black text-moss uppercase tracking-[0.2em] group-hover:tracking-[0.4em] transition-all duration-500">{item.role}</h3>
                                                </div>
                                            </div>
                                            <div className="p-6 text-center flex-grow flex items-center justify-center">
                                                <p className="text-lg sm:text-sm xl:text-lg font-bold text-white leading-tight tracking-tight">{item.name}</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* ═══════════════ STANDARD SECTION (Sub Committees & Scientific) ═══════════════ */}
                    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-24">
                        {/* ═══════════════ SUB COMMITTEES ═══════════════ */}
                        <section className="space-y-12">
                            <div className="text-center">
                                <h2 className="text-4xl font-black text-pine uppercase tracking-tight mb-4">Sub Committees</h2>
                                <div className="h-1.5 w-24 bg-gradient-to-r from-fog to-sage mx-auto rounded-full" />
                            </div>
                            <div className="grid lg:grid-cols-2 gap-10">
                                {committeeData.subCommittees.map((sub, i) => (
                                    <FadeIn key={i} direction="up" delay={i * 50}>
                                        <div className="bg-white border border-clay/20 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pine/5 transition-all duration-500 flex flex-col h-full">
                                            <div className="p-8 bg-gradient-to-br from-pine to-fog">
                                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{sub.title}</h3>
                                            </div>
                                            <div className="p-8 space-y-6 flex-grow">
                                                <div>
                                                    <span className="text-[10px] font-black text-moss uppercase tracking-widest block mb-2">Coordinator</span>
                                                    <p className="text-lg font-bold text-pine">{sub.coordinator}</p>
                                                </div>
                                                <div className="h-px bg-clay/30 w-full" />
                                                <div>
                                                    <span className="text-[10px] font-black text-moss uppercase tracking-widest block mb-3">Members</span>
                                                    <ul className="space-y-3">
                                                        {sub.members.map((member, j) => (
                                                            <li key={j} className="flex items-start gap-3">
                                                                <div className="mt-1.5 w-1.5 h-1.5 bg-sage rounded-full flex-shrink-0" />
                                                                <span className="text-sm font-medium text-sage leading-snug">{member}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </section>

                        {/* ═══════════════ SCIENTIFIC COMMITTEE ═══════════════ */}
                        <section>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-black text-pine uppercase tracking-tight mb-4">Scientific Committee</h2>
                                <div className="h-1.5 w-24 bg-gradient-to-r from-fog to-sage mx-auto rounded-full" />
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                                {committeeData.scientific.map((item, i) => (
                                    <FadeIn key={i} direction="up" delay={i * 100}>
                                        <div className="p-8 bg-white border border-pine/10 rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-300 group flex items-center gap-6">
                                            <div className="w-14 h-14 bg-moss/10 rounded-2xl flex items-center justify-center text-moss flex-shrink-0 group-hover:bg-pine group-hover:text-white transition-all duration-500">
                                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-bold text-pine text-lg leading-tight mb-1">{item.name}</p>
                                                <p className="text-sm font-medium text-sage">{item.institution}</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
