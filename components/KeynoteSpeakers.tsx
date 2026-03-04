'use client';

import Image from 'next/image';
import FadeIn from './FadeIn';

interface Speaker {
    name: string;
    affiliation: string;
    location: string;
    image: string;
}

const speakers: Speaker[] = [
    {
        name: "Prof. Karl Kim, Ph.D.",
        affiliation: "University of Hawaii",
        location: "United State of America",
        image: "/panitia/kkarlkim.jpg"
    },
    {
        name: "Prof. Dr.Eng. Ir. M. Zudhy Irawan, S.T., M.T., IPM.",
        affiliation: "DTS Universitas Gadjah Mada",
        location: "Indonesia",
        image: "/panitia/zudhy.png"
    },
    {
        name: "Associate Professor Ramadhansyah Putra Jaya, Ph.D.",
        affiliation: "Universiti Malaysia Pahang Al-Sultan Abdullah",
        location: "Malaysia",
        image: "/panitia/ramadhansyahh.jpg"
    },
    {
        name: "Associate Professor Ir. Yosritzal, S.T., M.T., Ph.D.",
        affiliation: "DTS Universitas Andalas",
        location: "Padang, Indonesia",
        image: "/panitia/yostrizal.png"
    }
];

export default function KeynoteSpeakers() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-clay/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-fog/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <p className="text-fog font-semibold tracking-widest uppercase text-sm mb-3">Speakers</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-pine leading-tight mb-4">
                            Keynote Speakers
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-fog to-sage mx-auto rounded-full" />
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                    {speakers.map((speaker, i) => (
                        <FadeIn key={i} delay={i * 150} className="h-full">
                            <div className="group relative bg-pine rounded-2xl overflow-hidden shadow-md border border-white/5 h-full flex flex-col">
                                {/* Image Container */}
                                <div className="aspect-[4/5] relative overflow-hidden shrink-0">
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay gradient - permanent */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/20 to-transparent opacity-80" />
                                </div>

                                {/* Content */}
                                <div className="p-6 relative bg-pine flex-1 flex flex-col justify-center">
                                    {/* Accent bar - permanent */}
                                    <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-fog to-sage opacity-100" />

                                    <h3 className="text-lg font-bold text-white leading-snug mb-2">
                                        {speaker.name}
                                    </h3>
                                    <div className="space-y-1">
                                        <p className="text-sm text-moss/90 font-medium">
                                            {speaker.affiliation}
                                        </p>
                                        <p className="text-[11px] text-fog uppercase tracking-widest font-bold">
                                            {speaker.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
