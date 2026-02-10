import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MainProgramSubPage1() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-16 lg:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-15 space-y-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-pine mb-6">
            Main Program - <span className="text-transparent bg-clip-text bg-gradient-to-r from-fog to-sage">Sub Page 1</span>
          </h1>
          <p className="text-lg text-sage mb-8">
            Konten untuk Main Program Sub Page 1 akan ditambahkan di sini.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-clay/20 rounded-xl">
              <h2 className="text-2xl font-bold text-pine mb-4">Section 1</h2>
              <p className="text-sage">Tambahkan konten Anda di sini.</p>
            </div>
            <div className="p-6 bg-clay/20 rounded-xl">
              <h2 className="text-2xl font-bold text-pine mb-4">Section 2</h2>
              <p className="text-sage">Tambahkan konten Anda di sini.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
