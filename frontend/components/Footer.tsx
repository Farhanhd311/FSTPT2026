import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-pine via-[#1e3235] to-pine text-clay mt-16 lg:mt-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fog rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-fog to-sage rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">FSTPT 2026</span>
            </Link>
            <p className="text-moss leading-relaxed">
              Forum Studi Transportasi antar Perguruan Tinggi - Membangun masa depan transportasi Indonesia yang lebih baik.
            </p>
            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3">Subscribe Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className="flex-1 px-4 py-2 bg-[#1e3235] border border-fog/30 rounded-lg text-white placeholder-sage focus:outline-none focus:border-fog transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-fog to-sage text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-fog to-sage rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center gap-2 text-moss hover:text-clay transition-colors group">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/main-program/sub-page-1" className="flex items-center gap-2 text-moss hover:text-clay transition-colors group">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Main Program
                </Link>
              </li>
              <li>
                <Link href="/call-for-paper/sub-page-1" className="flex items-center gap-2 text-moss hover:text-clay transition-colors group">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Call For Paper
                </Link>
              </li>
              <li>
                <Link href="/panitia" className="flex items-center gap-2 text-moss hover:text-clay transition-colors group">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Panitia
                </Link>
              </li>
              <li>
                <Link href="/flyer" className="flex items-center gap-2 text-moss hover:text-clay transition-colors group">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Flyer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-fog to-sage rounded-full"></div>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-moss">
                <div className="w-10 h-10 bg-[#1e3235] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-fog" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-sage">Email</p>
                  <a href="mailto:info@fstpt2026.com" className="hover:text-clay transition-colors">
                    info@fstpt2026.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-moss">
                <div className="w-10 h-10 bg-[#1e3235] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-fog" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-sage">Phone</p>
                  <a href="tel:+62123456789" className="hover:text-clay transition-colors">
                    +62 123 456 789
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-moss">
                <div className="w-10 h-10 bg-[#1e3235] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-fog" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-sage">Location</p>
                  <p className="hover:text-clay transition-colors">
                    Jakarta, Indonesia
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-fog to-sage rounded-full"></div>
              Follow Us
            </h3>
            <p className="text-moss mb-4">
              Ikuti media sosial kami untuk update terbaru
            </p>
            <div className="flex flex-wrap gap-3">
              {/* Facebook */}
              <a href="#" className="group relative w-12 h-12 bg-[#1e3235] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-fog hover:to-sage transition-all duration-300 overflow-hidden">
                <svg className="w-6 h-6 relative z-10 text-moss group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-fog to-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              {/* Twitter */}
              <a href="#" className="group relative w-12 h-12 bg-[#1e3235] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-fog hover:to-sage transition-all duration-300 overflow-hidden">
                <svg className="w-6 h-6 relative z-10 text-moss group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-fog to-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              {/* LinkedIn */}
              <a href="#" className="group relative w-12 h-12 bg-[#1e3235] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-fog hover:to-sage transition-all duration-300 overflow-hidden">
                <svg className="w-6 h-6 relative z-10 text-moss group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-fog to-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              {/* Instagram */}
              <a href="#" className="group relative w-12 h-12 bg-[#1e3235] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-fog hover:to-sage transition-all duration-300 overflow-hidden">
                <svg className="w-6 h-6 relative z-10 text-moss group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-fog to-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              {/* YouTube */}
              <a href="#" className="group relative w-12 h-12 bg-[#1e3235] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-fog hover:to-sage transition-all duration-300 overflow-hidden">
                <svg className="w-6 h-6 relative z-10 text-moss group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-fog to-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-fog/20 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-moss text-sm text-center md:text-left">
            &copy; 2026 FSTPT (Forum Studi Transportasi antar Perguruan Tinggi). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-moss hover:text-clay transition-colors">Privacy Policy</a>
            <a href="#" className="text-moss hover:text-clay transition-colors">Terms of Service</a>
            <a href="#" className="text-moss hover:text-clay transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
