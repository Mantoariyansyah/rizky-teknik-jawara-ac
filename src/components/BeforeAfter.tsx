"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

type Work = {
  src: string;
  alt: string;
  title: string;
  location: string;
  service: string;
  note: string;
};

const works: Work[] = [
  {
    src: "/pekerjaan/cuci-ac-01.jpg",
    alt: "Teknisi Rizki Teknik cuci AC split dengan steam bertekanan di Bogor Barat",
    title: "Cuci AC 2 Unit Rumah",
    location: "Bogor Barat",
    service: "Cuci AC",
    note: "Pembersihan evaporator, blower, dan filter hingga bebas jamur & bau.",
  },
  {
    src: "/pekerjaan/isi-freon-01.jpg",
    alt: "Teknisi Rizki Teknik cek tekanan manifold dan isi freon R32 outdoor AC di Depok",
    title: "Isi Freon R32",
    location: "Depok",
    service: "Isi Freon",
    note: "Pengecekan kebocoran pipa tembaga dan pengisian freon murni sesuai psi pabrikan.",
  },
  {
    src: "/pekerjaan/bongkar-pasang-01.jpg",
    alt: "Teknisi Rizki Teknik instalasi unit AC split baru di Bekasi Timur",
    title: "Pasang AC Baru 1 PK",
    location: "Bekasi Timur",
    service: "Bongkar Pasang",
    note: "Pemasangan bracket dinding kokoh, vakum pipa tembaga, dan uji dingin.",
  },
  {
    src: "/pekerjaan/cuci-ac-02.jpg",
    alt: "Teknisi Rizki Teknik servis cuci AC cassette plafon di ruko komersial Bogor Utara",
    title: "Cuci AC Cassette Ruko",
    location: "Bogor Utara",
    service: "AC Komersial",
    note: "Servis unit cassette plafon dengan plastik corong pelindung rapi tanpa bocor air.",
  },
  {
    src: "/pekerjaan/perbaikan-01.jpg",
    alt: "Teknisi Rizki Teknik perbaikan PCB modul dan kelistrikan AC di Depok",
    title: "Perbaikan AC Tidak Dingin",
    location: "Depok",
    service: "Perbaikan AC",
    note: "Diagnosa sensor thermistor, kapasitor kompresor, dan penggantian sparepart bergaransi.",
  },
  {
    src: "/pekerjaan/cuci-ac-03.jpg",
    alt: "Teknisi Rizki Teknik cuci outdoor condenser AC unit kos di Bekasi Selatan",
    title: "Cuci AC 4 Unit Kos-Kosan",
    location: "Bekasi Selatan",
    service: "Perawatan Berkala",
    note: "Pembersihan rutin outdoor condenser untuk menjaga efisiensi listrik dan keawetan mesin.",
  },
];

export function WorkGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="hasil-kerja" className="border-t border-slate-200 bg-white py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Dokumentasi Pekerjaan"
          title="Teknisi Rizki Teknik Langsung di Lapangan"
          desc="Lihat bagaimana teknisi profesional kami menangani berbagai masalah AC langsung di rumah, kos, kantor, dan ruko pelanggan."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <button
              key={`${w.src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              <Image
                src={w.src}
                alt={w.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent transition-opacity duration-300 group-hover:from-slate-950/90" />

              {/* Badge layanan (kiri atas) */}
              <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-sky-800 shadow-sm backdrop-blur-sm">
                {w.service}
              </span>

              {/* Info bawah */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="text-base font-bold leading-snug drop-shadow-sm">
                  {w.title}
                </h3>
                <div className="mt-1 flex items-center justify-between text-[12px] text-slate-200">
                  <p className="flex items-center gap-1">
                    <Icon name="pin" className="h-3.5 w-3.5 text-sky-400" />
                    {w.location}
                  </p>
                  <span className="text-[11px] font-medium text-sky-300 group-hover:underline">
                    Lihat foto →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Detail dokumentasi pekerjaan"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950/85 p-4 backdrop-blur-md"
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Area gambar */}
            <div className="relative h-[42vh] w-full shrink-0 overflow-hidden bg-slate-950 sm:h-[55vh]">
              <Image
                src={works[active].src}
                alt={works[active].alt}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-contain"
                priority
              />
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-slate-900/80 text-white backdrop-blur-sm transition hover:bg-slate-800"
                aria-label="Tutup pratinjau"
              >
                <Icon name="close" className="h-4 w-4" />
              </button>
            </div>

            {/* Konten */}
            <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                    {works[active].service} · {works[active].location}
                  </span>
                  <h3 className="mt-0.5 text-lg font-bold text-white sm:text-xl">
                    {works[active].title}
                  </h3>
                </div>
                <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold text-sky-300">
                  Dokumentasi Asli Teknisi
                </span>
              </div>

              <p className="mt-3 text-[13px] leading-relaxed text-slate-300">
                {works[active].note}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export const BeforeAfter = WorkGallery;