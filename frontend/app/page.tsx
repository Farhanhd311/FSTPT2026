import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import SubThemesGrid from '@/components/SubThemesGrid';
import Image from 'next/image';

/* ────────────────────────────────────────
   Data
   ──────────────────────────────────────── */

const objectives = [
  {
    title: 'Sustainable & Resilient Solutions',
    desc: 'Formulate sustainable, resilient, and inclusive transportation solutions that address the geographical challenges of West Sumatra—mountainous terrain and disaster-prone areas—ensuring safety, accessibility, and long-term sustainability.',
  },
  {
    title: 'Innovation in Infrastructure',
    desc: 'Promote innovation in road planning and multimodal infrastructure that adapts to difficult terrain while supporting energy efficiency, digitalization, and the adoption of environmentally friendly technologies.',
  },
  {
    title: 'Strengthening Collaboration',
    desc: 'Strengthen collaboration among academics, practitioners, and policymakers to design resilient transportation systems and produce technical recommendations and policy insights relevant to sustainable mobility development in Indonesia and the Southeast Asian region.',
  },
];

const activities = [
  {
    title: 'Keynote Speeches',
    desc: 'Presentasi dari pakar transportasi nasional dan internasional.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'Paper Presentation',
    desc: 'Sesi presentasi makalah ilmiah dengan review panel.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Panel Discussion',
    desc: 'Diskusi panel interaktif dengan stakeholder transportasi.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Workshop & Tutorial',
    desc: 'Workshop praktis tentang metode riset dan teknologi terbaru.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Networking Session',
    desc: 'Sesi networking eksklusif antar peserta dan pembicara.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Technical Tour',
    desc: 'Kunjungan teknis ke infrastruktur transportasi terkini.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
];

const subthemes = [
  { number: '01', title: 'Sustainable Transport Policy & Governance', desc: 'Kebijakan dan tata kelola transportasi yang mendorong keberlanjutan, efisiensi, serta keadilan akses bagi semua lapisan masyarakat merupakan fondasi penting dalam mewujudkan mobilitas berkelanjutan. Dengan kebijakan transportasi yang berorientasi pada keberlanjutan, setiap kelompok masyarakat—baik di perkotaan maupun pedesaan—dapat menikmati akses transportasi yang adil, aman, dan terjangkau. Hal ini secara langsung mendukung SDG 9 (Industry, Innovation and Infrastructure) melalui penguatan pembangunan infrastruktur transportasi yang tangguh dan inovatif, sekaligus mendorong pertumbuhan industri dan teknologi. Pada saat yang sama, kebijakan transportasi yang inklusif berkontribusi terhadap SDG 11 (Sustainable Cities and Communities) dengan menciptakan kota yang layak huni, efisien, dan ramah lingkungan, di mana transportasi publik yang terintegrasi menjadi tulang punggung mobilitas masyarakat. Lebih jauh, tata kelola transportasi yang baik tidak dapat berjalan tanpa kolaborasi lintas sektor dan lintas negara, sehingga memperkuat SDG 17 (Partnerships for the Goals) melalui kemitraan strategis antara pemerintah, akademisi, swasta, dan masyarakat.' },
  { number: '02', title: 'Digitalization, AI & Smart Mobility Systems', desc: 'Perencanaan mobilitas berbasis data dan partisipasi masyarakat memastikan solusi transportasi lebih inklusif dan tepat sasaran. Pendekatan ini mendukung SDG 4 dengan membuka akses pendidikan, SDG 11 dengan membangun kota berkelanjutan, serta SDG 17 melalui kolaborasi lintas sektor. Sementara itu, pemanfaatan teknologi digital, IoT, dan AI meningkatkan efisiensi serta keselamatan transportasi. Hal ini memperkuat SDG 9 lewat inovasi industri, mendukung SDG 11 dengan kota pintar yang efisien, dan memperkuat SDG 17 melalui integrasi sistem transportasi global.' },
  { number: '03', title: 'Emergency Mobility & Evacuation Strategies', desc: 'Strategi mobilitas darurat merupakan bagian penting dari sistem transportasi berkelanjutan karena berfungsi menjaga keselamatan masyarakat saat bencana atau krisis. Mobilitas darurat tidak hanya berfokus pada evakuasi, tetapi juga memastikan akses terhadap kebutuhan dasar tetap terjaga. Dalam konteks SDG 2 (Zero Hunger), strategi ini menjamin distribusi pangan darurat ke wilayah terdampak sehingga masyarakat tidak terputus dari pasokan makanan meskipun jalur utama terganggu. Selain itu, strategi ini mendukung SDG 11 (Sustainable Cities and Communities) dengan memperkuat perlindungan komunitas melalui jalur evakuasi yang terencana, kesiapan transportasi publik, serta integrasi dengan tata ruang kota agar masyarakat lebih tangguh menghadapi kondisi ekstrem.' },
  { number: '04', title: 'Inclusive & Accessible Public Transport', desc: 'Transportasi publik yang ramah bagi kelompok rentan merupakan elemen penting dalam mewujudkan sistem mobilitas berkelanjutan. Dengan desain universal yang memperhatikan kebutuhan penyandang disabilitas, lansia, anak-anak, dan masyarakat berpenghasilan rendah, transportasi publik membuka akses yang lebih luas terhadap layanan pendidikan. Hal ini sejalan dengan SDG 4 (Quality Education), karena akses transportasi yang aman dan terjangkau memungkinkan siswa dan mahasiswa dari berbagai latar belakang untuk menjangkau sekolah dan universitas tanpa hambatan. Selain itu, transportasi publik yang inklusif mendukung SDG 11 (Sustainable Cities and Communities) dengan menciptakan kota yang layak huni, di mana semua warga dapat berpartisipasi aktif dalam kehidupan sosial, ekonomi, dan budaya.' },
  { number: '05', title: 'Green & Low-Carbon Vehicle Innovations', desc: 'Inovasi kendaraan ramah lingkungan menjadi salah satu pilar penting dalam mewujudkan mobilitas berkelanjutan. Pengembangan kendaraan listrik, hidrogen, dan hybrid tidak hanya menghadirkan teknologi transportasi yang lebih efisien, tetapi juga mendorong pertumbuhan industri otomotif berbasis energi bersih, sehingga mendukung SDG 9 (Industry, Innovation and Infrastructure) melalui penguatan inovasi dan infrastruktur hijau. Pada saat yang sama, penerapan kendaraan rendah emisi berkontribusi langsung terhadap SDG 11 (Sustainable Cities and Communities) dengan menciptakan kota yang lebih sehat, berkelanjutan, dan layak huni, karena kualitas udara meningkat dan polusi berkurang.' },
  { number: '06', title: 'Sustainable Transport as a Driver of Smart Cities', desc: 'Transportasi berkelanjutan merupakan motor penggerak utama dalam mewujudkan kota pintar yang efisien, inklusif, dan ramah lingkungan. Dengan mengintegrasikan teknologi cerdas, energi bersih, serta sistem mobilitas yang terhubung, transportasi berkelanjutan memperkuat SDG 9 (Industry, Innovation and Infrastructure) melalui pembangunan infrastruktur inovatif yang mendukung pertumbuhan industri dan mempercepat adopsi teknologi baru. Pada saat yang sama, penerapan transportasi berkelanjutan berkontribusi terhadap SDG 11 (Sustainable Cities and Communities) dengan menciptakan kota yang lebih efisien, sehat, dan layak huni.' },
  { number: '07', title: 'Freight & Logistics Innovations for Sustainable Supply Chains', desc: 'Inovasi logistik menjadi faktor kunci dalam memperkuat sistem transportasi dan distribusi yang berkelanjutan. Dengan penerapan teknologi digital, otomatisasi, dan analisis data, rantai pasok pangan dapat dikelola lebih efisien dan berkelanjutan, sehingga mendukung SDG 2 (Zero Hunger) dengan memastikan ketersediaan pangan yang merata hingga ke wilayah terpencil. Dari sisi SDG 9 (Industry, Innovation and Infrastructure), inovasi logistik mendorong efisiensi industri melalui pengurangan biaya operasional, peningkatan produktivitas, serta pengembangan infrastruktur transportasi yang lebih tangguh dan adaptif terhadap perubahan.' },
  { number: '08', title: 'Rail Electrification & Smart Railway Systems', desc: 'Elektrifikasi kereta merupakan langkah penting dalam transformasi transportasi berkelanjutan. Dengan beralih dari bahan bakar fosil ke energi listrik, sistem ini mendorong SDG 9 (Industry, Innovation and Infrastructure) melalui pengembangan teknologi transportasi modern yang ramah lingkungan dan memperkuat infrastruktur mobilitas massal. Selain itu, elektrifikasi kereta mendukung SDG 11 (Sustainable Cities and Communities) dengan menghadirkan mobilitas perkotaan yang lebih efisien, rendah emisi, dan terintegrasi, sehingga kualitas udara meningkat dan kota menjadi lebih layak huni.' },
  { number: '09', title: 'Sustainable & Climate-Resilient Maritime Infrastructure', desc: 'Pelabuhan berkelanjutan memiliki peran vital dalam mendukung pembangunan berkelanjutan di berbagai sektor. Dalam konteks SDG 2 (Zero Hunger), pelabuhan yang efisien dan ramah lingkungan memastikan distribusi pangan lintas wilayah berjalan lancar, sehingga pasokan makanan dapat menjangkau daerah terpencil maupun negara lain dengan lebih cepat dan aman. Dari sisi SDG 9 (Industry, Innovation and Infrastructure), pengembangan infrastruktur maritim yang modern, adaptif terhadap perubahan iklim, dan berbasis teknologi digital memperkuat industri logistik sekaligus meningkatkan daya saing global.' },
  { number: '10', title: 'Digitalization & Smart Maritime Logistics', desc: 'Transformasi digital dalam logistik maritim menjadi katalis penting bagi sistem distribusi global yang lebih efisien dan berkelanjutan. Dengan penerapan teknologi seperti Internet of Things (IoT), big data, dan sistem pelacakan real-time, distribusi pangan lintas negara dapat dilakukan lebih cepat, akurat, dan transparan, sehingga mendukung SDG 2 (Zero Hunger) dengan menjaga ketahanan pangan dunia. Dari sisi SDG 9 (Industry, Innovation and Infrastructure), digitalisasi mendorong inovasi industri maritim melalui otomatisasi proses bongkar muat, optimalisasi rute pelayaran, serta pengembangan infrastruktur pelabuhan cerdas yang meningkatkan daya saing global.' },
  { number: '11', title: 'Resilient & Sustainable Road Pavement Systems', desc: 'Perkerasan jalan yang tangguh menjadi fondasi penting bagi mobilitas berkelanjutan. Dengan konstruksi yang mampu menahan beban lalu lintas dan kondisi iklim ekstrem, jalan yang kuat memastikan kelancaran distribusi pangan, sehingga mendukung SDG 2 (Zero Hunger) dengan menjaga rantai pasok tetap stabil. Dari sisi SDG 9 (Industry, Innovation and Infrastructure), penerapan material inovatif dan teknologi ramah lingkungan dalam pembangunan serta pemeliharaan jalan mendorong efisiensi industri sekaligus memperkuat infrastruktur transportasi.' },
  { number: '12', title: 'Sustainable & Climate-Resilient Air Transport', desc: 'Transportasi udara berkelanjutan memiliki peran strategis dalam mendukung pembangunan lintas sektor. Dalam konteks SDG 2 (Zero Hunger), penerbangan berkelanjutan memungkinkan distribusi pangan darurat secara cepat ke wilayah terpencil atau terdampak bencana, sehingga akses masyarakat terhadap kebutuhan dasar tetap terjaga. Dari sisi SDG 9 (Industry, Innovation and Infrastructure), inovasi penerbangan melalui penggunaan bahan bakar hijau, pesawat hemat energi, dan bandara ramah lingkungan memperkuat industri transportasi sekaligus mendorong teknologi ramah iklim.' },
  { number: '13', title: 'Freight & Logistics Innovations for Sustainable Supply Chains', desc: 'Inovasi logistik berperan penting dalam memperkuat sistem distribusi yang tangguh dan berkelanjutan. Dengan penerapan teknologi digital, otomatisasi, dan analisis data, rantai pasok pangan dapat dikelola lebih efisien sehingga mendukung SDG 2 (Zero Hunger) dengan memastikan ketersediaan pangan merata hingga ke wilayah terpencil. Dari sisi SDG 9 (Industry, Innovation and Infrastructure), inovasi logistik meningkatkan efisiensi industri melalui pengurangan biaya, peningkatan produktivitas, serta pengembangan infrastruktur transportasi yang lebih adaptif terhadap perubahan.' },
  { number: '14', title: 'Rail Electrification & Smart Railway Systems', desc: 'Elektrifikasi kereta merupakan langkah strategis dalam mewujudkan sistem transportasi berkelanjutan yang modern dan efisien. Dengan mengganti penggunaan bahan bakar fosil menjadi energi listrik, kereta listrik mendorong SDG 9 (Industry, Innovation and Infrastructure) melalui pengembangan teknologi transportasi yang lebih ramah lingkungan sekaligus memperkuat infrastruktur mobilitas massal. Selain itu, elektrifikasi kereta mendukung SDG 11 (Sustainable Cities and Communities) dengan menghadirkan mobilitas perkotaan yang lebih efisien, rendah emisi, dan terintegrasi.' },
  { number: '15', title: 'Sustainable & Climate-Resilient Maritime Infrastructure', desc: 'Pelabuhan berkelanjutan memiliki peran strategis dalam mendukung pembangunan berkelanjutan lintas sektor. Dalam konteks SDG 2 (Zero Hunger), pelabuhan yang tangguh dan ramah lingkungan memastikan distribusi pangan lintas wilayah berjalan lancar, sehingga pasokan makanan dapat menjangkau daerah terpencil maupun negara lain secara efisien. Dari sisi SDG 9 (Industry, Innovation and Infrastructure), pengembangan infrastruktur maritim yang modern, adaptif terhadap perubahan iklim, dan berbasis teknologi mendukung pertumbuhan industri logistik serta memperkuat rantai pasok global.' },
  { number: '16', title: 'Digitalization & Smart Maritime Logistics', desc: 'Transformasi digital dalam logistik maritim memainkan peran penting dalam meningkatkan efisiensi, transparansi, dan daya saing global. Melalui penerapan teknologi digital, sistem pelacakan real-time, serta integrasi data antar-pelabuhan dan rantai pasok, distribusi pangan dapat dilakukan lebih cepat dan lebih tepat. Hal ini mendukung SDG 2 (Zero Hunger) dengan memastikan pasokan pangan global tetap terjaga, bahkan di wilayah terpencil atau saat kondisi darurat.' },
  { number: '17', title: 'Resilient & Sustainable Road Pavement Systems', desc: 'Perkerasan jalan yang tangguh merupakan elemen penting dalam mendukung sistem transportasi berkelanjutan. Dengan desain yang adaptif terhadap beban lalu lintas dan kondisi iklim ekstrem, jalan yang kuat memastikan kelancaran distribusi pangan ke berbagai wilayah, sehingga mendukung SDG 2 (Zero Hunger) dengan menjaga rantai pasok tetap berjalan tanpa hambatan. Dari sisi SDG 9 (Industry, Innovation and Infrastructure), pengembangan material inovatif yang ramah lingkungan serta penerapan teknik preservasi preventif memperkuat infrastruktur transportasi sekaligus mendorong efisiensi industri konstruksi.' },
  { number: '18', title: 'Sustainable & Climate-Resilient Air Transport', desc: 'Transportasi udara berkelanjutan memiliki peran strategis dalam mendukung pembangunan berkelanjutan lintas sektor. Dalam konteks SDG 2 (Zero Hunger), penerbangan berkelanjutan memungkinkan distribusi pangan darurat ke wilayah terpencil atau terdampak bencana dengan cepat, sehingga masyarakat tetap memiliki akses terhadap kebutuhan dasar meskipun jalur darat atau laut terganggu. Dari sisi SDG 9 (Industry, Innovation and Infrastructure), inovasi penerbangan melalui penggunaan bahan bakar hijau, pesawat efisien energi, serta bandara tangguh iklim memperkuat industri transportasi udara sekaligus mendorong pengembangan teknologi ramah lingkungan.' },
];

/* ────────────────────────────────────────
   Page Component
   ──────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">

        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[85vh]">

            {/* Left — Text Panel */}
            <div className="flex flex-col justify-center items-center px-8 md:px-14 lg:px-16 py-20 lg:py-0">
              <div className="space-y-8 max-w-xl">
                <span className="w-35 h-10 inline-flex justify-center items-center gap-2 px-5 py-2 text-sm font-semibold
                               text-fog border border-fog/50 rounded-full">
                  <span className="w-2 h-2 bg-fog rounded-full" />
                  FSTPT 2026
                </span>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-pine
                             leading-[1.1] tracking-tight">
                  Forum Studi{' '}
                  <span className="text-fog">Transportasi</span>
                  <br />
                  Antar Perguruan Tinggi
                </h1>

                <p className="text-xl sm:text-2xl text-pine font-bold tracking-tight italic h-10">
                  ISTSDC 5th &amp; Symposium Nasional Ke-29
                </p>

                <p className="text-lg text-sage font-bold leading-relaxed h-17">
                  Advancing Sustainable Mobility Solutions for Resilient and Inclusive Future
                </p>

                <div className="flex gap-4 pt-2">
                  <button className="w-40 h-11 px-6 border border-fog text-fog
                                   text-sm font-semibold rounded-lg hover:bg-fog
                                   hover:text-white hover:-translate-y-0.5
                                   transition-all duration-300">
                    SMC-FSTPT 2026
                  </button>
                </div>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative min-h-[350px] lg:min-h-0">
              <Image
                src="/smartcity.jpg"
                alt="Smart City Transportation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent hidden lg:block" />
            </div>
          </div>
        </section>

        {/* ═══════════════ ABOUT / PENJELASAN ═══════════════ */}
        <section className="flex flex-col justify-center items-center py-24 lg:py-32 bg-white h-190">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left — Decorative block */}
              <FadeIn direction="left">
                <div className="relative">
                  <div className="aspect-[6/3] rounded-2xl bg-gradient-to-br from-pine to-fog overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('/mobility.jpg')] bg-cover bg-center opacity-30" />
                    <div className="relative z-10 flex left-3 bottom-2 flex-col justify-end h-full p-8">
                      <p className="text-clay text-sm font-semibold tracking-widest uppercase mb-2">Tahun 2026</p>
                      <p className="text-white text-2xl font-extrabold leading-tight">
                        Symposium Nasional<br />FSTPT Ke-29
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
                  <p className="text-fog font-semibold tracking-widest uppercase text-sm mb-3">About</p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-pine leading-tight mb-6">
                    What is{' '}
                    <span className="text-fog">FSTPT</span>?
                  </h2>
                  <p className="text-sage leading-relaxed mb-6">
                    Forum Studi Transportasi antar Perguruan Tinggi (FSTPT) is a scientific forum established to foster interaction and communication among students, lecturers, and researchers from universities and institutions across Indonesia engaged in education, research, and community service in the transportation sector. FSTPT is realized through: (1) a mid-year national transportation seminar, (2) an end-of-year national transportation symposium, and (3) the International Symposium on Transportation and Sustainable Development Conference (ISTSDC), held biennially. These platforms serve as avenues for exchanging research findings, scientific studies, and professional experiences to strengthen the Tridharma of Higher Education and support national transportation research and innovation programs. Since its inception in 1998, the end-of-year symposium alone has featured nearly 6,000 presentations by students and lecturers in transportation sciences, while ISTSDC further expands international collaboration and knowledge exchange in sustainable transport development.
                  </p>
                  <p className="text-sage leading-relaxed mb-8">
                    In 2026, FSTPT will host <strong className="text-pine">ISTSDC ke-5</strong> and{' '}
                    <strong className="text-pine">Symposium Nasional ke-29</strong> with the theme
                    "Advancing Sustainable Mobility Solutions for Resilient and Inclusive Future"
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { value: '29th', label: 'Symposium' },
                      { value: '500+', label: 'Peserta' },
                      { value: '100+', label: 'Paper' },
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
        <section className="flex flex-col justify-center items-center py-24 lg:py-32 bg-clay/15 h-120">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <FadeIn>
              <div className="max-w-8xl mx-auto mb-16 h-20">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-pine text-center leading-tight mb-4">
                  OBJECTIVES
                </h2>
                <p className="text-sage text-center leading-relaxed">
                  This symposium is designed with three main, mutually supportive objectives to advance transportation research in Indonesia.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12 py-10">
              {objectives.map((obj, i) => (
                <FadeIn key={i} delay={i * 120}>
                  <div className="group relative bg-white rounded-2xl shadow-sm h-52
                                  hover:shadow-xl hover:-translate-y-1
                                  transition-all duration-300 overflow-hidden">

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fog to-sage
                                    scale-x-0 group-hover:scale-x-100 origin-left
                                    transition-transform duration-500" />

                    {/* Row 1 — Title */}
                    <div className="flex justify-center items-center px-4 pt-8 pb-6 border-b border-clay/30 h-13">
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
              <div className="flex flex-col justify-center items-center text-center mb-20">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-pine leading-tight mb-4">
                  MAIN ACTIVITIES
                </h2>
                <p className="text-sage leading-relaxed max-w-2xl mx-auto pb-10">
                  A series of activities designed to provide the best academic
                  and professional experience for all participants.
                </p>
              </div>
            </FadeIn>

            {/* Paragraph blocks with left accent + number */}
            <div className="h-100 space-y-12 mb-20">

              {/* Block 1 — Symposium Sessions */}
              <FadeIn direction="left">
                <div className="flex gap-6">
                  {/* Number indicator */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-fog text-white
                                  flex items-center justify-center text-sm font-bold">
                      01
                    </div>
                    <div className="w-px flex-1 bg-clay/40 mt-2" />
                  </div>
                  {/* Content */}
                  <div className="border-l-3 border-fog/20 pl-6 pb-2">
                    <h3 className="text-lg font-bold text-pine mb-3">
                      International &amp; National Symposium Sessions
                    </h3>
                    <p className="text-sage text-sm lg:text-base leading-relaxed pl-5">
                      The 5th International Symposium on Transportation, Sustainable Development, and Civil Engineering (ISTSDC) combined with the 29th National Symposium of FSTPT will feature a series of international and national symposium sessions, including plenary and parallel discussions. These sessions will present keynote speeches and research papers under the theme &ldquo;Advancing Sustainable Mobility Solutions for Resilient and Inclusive Future&rdquo;, covering 18 sub-themes such as sustainable transport policy, digitalization, road safety, inclusive public transport, green vehicle innovation, and resilient multimodal infrastructure.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Block 2 — Annual Members' Meeting */}
              <FadeIn direction="left" delay={150}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-fog text-white
                                  flex items-center justify-center text-sm font-bold">
                      02
                    </div>
                    <div className="w-px flex-1 bg-clay/40 mt-2" />
                  </div>
                  <div className="border-l-3 border-fog/20 pl-6 pb-2">
                    <h3 className="text-lg font-bold text-pine mb-3">
                      Annual Members&apos; Meeting
                    </h3>
                    <p className="text-sage text-sm lg:text-base leading-relaxed pl-5">
                      In addition to the symposium, the Annual Members&apos; Meeting (Rapat Anggota Akhir Tahun) of FSTPT will be held as a formal gathering to evaluate yearly activities, strengthen organizational networks, and plan future collaborative initiatives. This meeting will serve as a strategic forum to align academic and professional contributions toward advancing sustainable transportation in Indonesia.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Block 3 — Workshops & Training */}
              <FadeIn direction="left" delay={300}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-fog text-white
                                  flex items-center justify-center text-sm font-bold">
                      03
                    </div>
                  </div>
                  <div className="border-l-3 border-fog/20 pl-6 pb-2">
                    <h3 className="text-lg font-bold text-pine mb-3">
                      Workshops &amp; Training Sessions
                    </h3>
                    <p className="text-sage text-sm lg:text-base leading-relaxed pl-5">
                      The program will also include workshops and training sessions designed to provide hands-on knowledge and practical skills. These workshops will focus on disaster-resilient road planning, sustainable mobility innovations, and the application of digital tools for transport analysis. Through interactive learning, participants will enhance their capacity to address the challenges of disaster-prone regions and difficult terrains, particularly in West Sumatra.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ISTSDC & FSTPT Detail Block */}
            <FadeIn>
              <div className="bg-pine rounded-3xl p-10 lg:p-16 relative overflow-hidden mt-16 top-10 ">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-fog/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-sage/5 rounded-full translate-y-1/3 -translate-x-1/4" />
                {/* Top accent bar */}
                <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-fog to-transparent rounded-full" />

                <div className="relative">
                  {/* Heading */}
                  <div className="text-center mb-10">
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-snug mb-3">
                      5th ISTSDC and 29th FSTPT
                    </h3>
                    <p className="h-10 text-moss/80 text-sm lg:text-lg text-center italic max-w-7xl mx-auto">
                      Advancing Sustainable Mobility Solutions for Resilient and Inclusive Future
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="flex justify-center mb-10">
                    <div className="w-16 h-px bg-fog/30" />
                  </div>

                  {/* Paragraphs */}
                  <div className="h-65 space-y-6 text-moss text-sm lg:text-base leading-relaxed max-w-7xl mx-auto text-center">
                    <p>
                      The 5th International Symposium on Transportation, Sustainable Development, and Civil Engineering (ISTSDC) together with the 29th National Symposium of FSTPT carries the theme &ldquo;Advancing Sustainable Mobility Solutions for Resilient and Inclusive Future&rdquo; as a commitment of academics, practitioners, and policymakers to drive the transformation of transportation systems that are efficient, low-carbon, safe, and sustainable.
                    </p>
                    <p>
                      With 18 sub-themes covering policy, digitalization, road safety, inclusive public transport, green vehicle innovation, and the strengthening of land, sea, air, and railway infrastructure, this forum serves as a collaborative platform across disciplines and across nations to formulate sustainable mobility solutions.
                    </p>
                    <p>
                      Universitas Andalas, particularly the Department of Civil Engineering, has consistently highlighted disaster risk reduction and sustainability issues through various national and international conferences. The organization of the 5th ISTSDC combined with the 29th FSTPT Symposium is expected to further strengthen networks among academics, practitioners, and stakeholders at both national and international levels, while producing technical recommendations and policy insights relevant to the development of sustainable transportation in Indonesia and the Southeast Asian region.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════════ SUBTHEMES ═══════════════ */}
        <section className="flex flex-col justify-center items-center py-24 lg:py-20 bg-pine relative overflow-hidden mt-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fog/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/10 rounded-full translate-y-1/2 -translate-x-1/3" />

          <div className="relative max-w-8xl mx-auto px-6 lg:px-12">

            <FadeIn>
              <div className="text-center max-w-8xl mx-auto mb-16">
                <p className="text-moss font-semibold tracking-widest uppercase text-sm mb-3">Tema</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                  Sub-Themes
                </h2>
                <p className="text-moss leading-relaxed pb-12">
                  18 sub-tema yang mencakup berbagai aspek penting dalam
                  pengembangan transportasi berkelanjutan di Indonesia.
                </p>
              </div>
            </FadeIn>

            <SubThemesGrid subthemes={subthemes} />
          </div>
        </section>

        {/* ═══════════════ CTA BANNER ═══════════════ */}
        <section className="flex flex-col justify-center items-center py-24 lg:py-32 bg-gradient-to-br from-clay/20 to-white mt-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <FadeIn>
              <p className="text-fog font-semibold tracking-widest uppercase text-sm mb-3">Bergabung Bersama Kami</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-pine leading-tight mb-6">
                Jadilah Bagian dari FSTPT 2026
              </h2>
              <p className="text-sage leading-relaxed mb-10 max-w-2xl mx-auto">
                Daftarkan diri Anda sekarang dan berkontribusi dalam memajukan
                riset transportasi Indonesia. Mari bersama membangun
                masa depan mobilitas yang berkelanjutan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-pine text-white font-bold rounded-xl
                                 hover:bg-fog hover:-translate-y-1 hover:shadow-xl
                                 transition-all duration-300">
                  Submit Paper
                </button>
                <button className="px-8 py-4 border-2 border-fog text-fog font-bold rounded-xl
                                 hover:bg-fog hover:text-white hover:-translate-y-1
                                 transition-all duration-300">
                  Lihat Panduan Penulisan
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
