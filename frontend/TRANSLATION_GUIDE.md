# 🌐 Panduan Terjemahan Otomatis (FSTPT2026)

Halaman ini menjelaskan cara menggunakan tool auto-translate untuk menambahkan konten baru ke situs web dalam 8 bahasa secara otomatis.

## 🚀 Cara Cepat (Workflow Baru)

1.  Buka file `frontend/messages/en.json`.
2.  Tambahkan teks baru Anda di sana (dalam Bahasa Inggris).
3.  Simpan file.
4.  Jalankan perintah ini di terminal:
    ```bash
    npm run translate -- --new
    ```
5.  **Selesai!** Konten Anda sekarang sudah tersedia di ID, DE, ZH, RU, FR, JA, dan ES.

---

## 🛠 Perintah (Commands)

| Perintah | Fungsi |
| :--- | :--- |
| `npm run translate` | Menerjemahkan **SELURUH** file (mengimpa terjemahan yang lama). |
| `npm run translate -- --new` | **(Direkomendasikan)** Hanya menerjemahkan kunci teks yang BARU ditambahkan. |
| `npm run translate -- --lang id` | Hanya menerjemahkan untuk bahasa tertentu (contoh: Bahasa Indonesia). |

---

## 📝 Contoh Praktis

### 1. Menambahkan Halaman Baru
Misal Anda ingin menambah halaman "About Padang":

**Langkah 1: Update `en.json`**
```json
// Tambahkan di en.json
"aboutPadang": {
  "title": "Welcome to Padang",
  "desc": "Padang is the capital city of West Sumatra."
}
```

**Langkah 2: Jalankan Script**
```bash
npm run translate -- --new
```

### 3. Contoh Implementasi di `page.tsx`

Untuk halaman baru, pastikan file berada di dalam folder `[locale]`.

**Langkah 1: Struktur Folder**
`frontend/app/[locale]/about/page.tsx`

**Langkah 2: Isi File `page.tsx`**
```tsx
'use client'; // Jika menggunakan state atau event

import { useTranslations } from 'next-intl';

export default function AboutPage() {
    // 1. Inisialisasi hook dengan nama section di JSON
    const t = useTranslations('aboutPadang');

    return (
        <main className="p-10">
            {/* 2. Gunakan t('kunci') untuk memanggil teks */}
            <h1 className="text-4xl font-bold">{t('title')}</h1>
            <p className="mt-4">{t('desc')}</p>
        </main>
    );
}
```

---

## ⚠️ Hal yang Perlu Diperhatikan

1.  **Client vs Server Component**: 
    - Jika menggunakan `'use client'`, gunakan `useTranslations` (seperti contoh di atas).
    - Jika server component (tanpa 'use client'), gunakan `const t = await getTranslations('aboutPadang')`.
2.  **Kualitas Terjemahan**: Tool ini menggunakan Google Translate. Untuk teks akademik yang sangat teknis, disarankan tetap melakukan pengecekan manual.
3.  **Kunci "language"**: Script ini otomatis mengabaikan bagian `"language"` di JSON agar nama label bahasa (seperti "English", "Indonesia") tidak ikut diterjemahkan menjadi aneh.
4.  **Bantuan Gemini**: Jika Anda ragu, Anda bisa cukup update `en.json` lalu minta saya: *"Gemini, tolong terjemahkan kunci baru di en.json ke semua bahasa."*
