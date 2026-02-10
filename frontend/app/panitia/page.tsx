import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PanitiaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-16 lg:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-15 space-y-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-pine mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fog to-sage">Panitia</span>
          </h1>
          <p className="text-lg text-sage mb-12">
            Daftar panitia penyelenggara acara.
          </p>
          
          {/* Placeholder Content - Committee Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="p-6 bg-clay/20 rounded-xl text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-fog to-sage rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-pine mb-2">Nama Panitia {item}</h3>
                <p className="text-fog font-medium mb-2">Jabatan</p>
                <p className="text-sage text-sm">Deskripsi singkat tentang panitia</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
