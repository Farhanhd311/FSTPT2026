# Website Structure - Conventional Multi-Page Site

## 📁 Complete Folder Structure

```
app/
├── page.tsx                          # Home - Landing page lengkap
├── main-program/
│   ├── sub-page-1/
│   │   └── page.tsx                 # Main Program Sub Page 1
│   └── venue-hotel/
│       └── page.tsx                 # Venue & Hotel Page
├── call-for-paper/
│   ├── sub-page-1/
│   │   └── page.tsx                 # Call For Paper Sub Page 1
│   └── sub-page-2/
│       └── page.tsx                 # Call For Paper Sub Page 2
├── panitia/
│   └── page.tsx                     # Panitia page
├── flyer/
│   └── page.tsx                     # Flyer page
├── layout.tsx                       # Root layout
└── globals.css                      # Global styles

components/
├── Navigation.tsx                   # Navigation dengan dropdown menu
├── Footer.tsx                       # Footer
├── HomePage.tsx                     # Landing page content
├── Hero.tsx                         # Hero section
├── Features.tsx                     # Features section
├── Statistics.tsx                   # Statistics section
├── About.tsx                        # About section
└── Courses.tsx                      # Courses section
```

## 🎯 Navigation Structure

### Desktop Menu
- **Home** → `/`
- **Main Program** (Dropdown) ▼
  - Sub Page 1 → `/main-program/sub-page-1`
  - Venue & Hotel → `/main-program/venue-hotel`
- **Call For Paper** (Dropdown) ▼
  - Sub Page 1 → `/call-for-paper/sub-page-1`
  - Sub Page 2 → `/call-for-paper/sub-page-2`
- **Panitia** → `/panitia`
- **Flyer** → `/flyer`

### Mobile Menu
- Sama dengan desktop, tetapi dropdown menggunakan toggle click
- Responsive hamburger menu

## 📄 Halaman yang Tersedia

### 1. Home (`/`)
- Landing page lengkap dengan semua section:
  - Hero
  - Features
  - Statistics
  - About
  - Courses
- Menggunakan komponen `HomePage.tsx`

### 2. Main Program
**Sub Page 1** (`/main-program/sub-page-1`)
- Template halaman dengan placeholder content
- Siap untuk diisi konten

**Venue & Hotel** (`/main-program/venue-hotel`)
- Informasi lengkap terkait venue acara (Universitas Andalas)
- Daftar hotel rekomendasi di sekitar lokasi acara

### 3. Call For Paper
**Sub Page 1** (`/call-for-paper/sub-page-1`)
- Template halaman dengan placeholder content
- Siap untuk diisi konten

**Sub Page 2** (`/call-for-paper/sub-page-2`)
- Template halaman dengan placeholder content
- Siap untuk diisi konten

### 4. Panitia (`/panitia`)
- Grid layout untuk daftar panitia
- Template dengan 6 placeholder cards
- Siap untuk diisi data panitia

### 5. Flyer (`/flyer`)
- Preview flyer dengan aspect ratio 3:4
- Tombol Download dan Share
- Siap untuk ditambahkan gambar flyer

## 🎨 Dropdown Menu Features

### Desktop
- **Hover to open** - Dropdown muncul saat hover
- **Smooth transition** - Animasi halus
- **Auto close** - Menutup otomatis saat mouse leave

### Mobile
- **Click to toggle** - Tap untuk buka/tutup
- **Accordion style** - Sub-menu muncul di bawah
- **Icon indicator** - Chevron down icon

## ✅ Semua Halaman Sudah Include:
- ✅ Navigation dengan dropdown
- ✅ Footer
- ✅ Responsive design
- ✅ Green color theme
- ✅ Consistent layout
- ✅ Placeholder content

## 🚀 Next Steps

1. **Isi Konten** - Ganti placeholder dengan konten sebenarnya
2. **Tambah Gambar** - Upload gambar untuk flyer, panitia, dll
3. **Customize** - Sesuaikan warna, font, spacing sesuai kebutuhan
4. **SEO** - Tambahkan metadata di setiap halaman

## 📝 Cara Edit Konten

Setiap halaman sudah memiliki struktur yang sama:
```tsx
<Navigation />
<main className="min-h-screen py-16 lg:py-24">
  {/* Konten halaman di sini */}
</main>
<Footer />
```

Tinggal edit bagian `{/* Konten halaman di sini */}` sesuai kebutuhan!
