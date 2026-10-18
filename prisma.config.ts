import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

// Konfigurasi Prisma 7 — sejak versi ini, URL koneksi basis data tidak lagi
// ditulis di dalam schema.prisma, melainkan di sini. Nilai DATABASE_URL
// dibaca dari .env (lihat .env.example untuk formatnya).
export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
});
