# CoolFix AC – Landing Page (Next.js + TypeScript)

Landing page jasa service AC, dikonversi dari desain Figma Make (Vite + React) ke **Next.js 15 (App Router)**, **TypeScript**, dan **Tailwind CSS v4**.

## Menjalankan

```bash
pnpm install   # atau: npm install / yarn
pnpm dev       # http://localhost:3000
pnpm build && pnpm start
```

Salin `.env.example` menjadi `.env.local` lalu isi nomor WhatsApp dan URL situs.

## Struktur

```
src/
  app/            layout.tsx (font, metadata), page.tsx, globals.css, icon.png
  components/     Header, Hero, Services, WhyUs, Pricing, HowItWorks,
                  BookingSection, BeforeAfter, Testimonials, ServiceArea,
                  Faq, CtaBanner, Footer, FloatingActions, + UI dasar
  lib/            data.ts (semua konten), constants.ts (WhatsApp, site URL)
```

Mengubah teks, harga, FAQ, testimoni, atau area layanan cukup di `src/lib/data.ts`.

## Catatan

- Form booking saat ini hanya validasi di sisi klien (sama seperti desain). Sambungkan ke API di `BookingSection.tsx` (cari `TODO`).
- Gambar masih dari Unsplash (`next.config.ts` → `remotePatterns`). Ganti dengan aset sendiri di `/public` untuk produksi.
