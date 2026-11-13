"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
    location: "Cileungsi",
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
    location: "Cibubur",
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
    location: "Jati Asih",
    service: "Perawatan Berkala",
    note: "Pembersihan rutin outdoor condenser untuk menjaga efisiensi listrik dan keawetan mesin.",
  },
];

export function WorkGallery() {
  const [active, setActive] = useState<number | null>(null);

  // Tutup lightbox dengan tombol Esc
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section
      id="hasil-kerja"
      className="border-t border-slate-200 bg-white py-16"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Dokumentasi Pekerjaan"
          title="Contoh pekerjaan teknisi kami"
          desc="Dokumentasi langsung dari lokasi pelanggan di Bogor, Depok, Bekasi, dan sekitarnya."
        />

        <div className="mt-8 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <button
              key={`${w.src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className="group text-left focus:outline-none"
            >
              {/* Bingkai foto: border di luar + padding tipis seperti frame */}
              <div className="overflow-hidden rounded-lg border border-slate-300 bg-white p-1.5 transition-colors group-hover:border-slate-400">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src={w.src}
                    alt={w.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="mt-3 px-0.5">
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                  {w.service}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-900 group-hover:text-sky-700">
                  {w.title}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-[12px] text-slate-500">
                  <Icon name="pin" className="h-3.5 w-3.5" />
                  {w.location}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Detail dokumentasi pekerjaan"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-slate-900/70 p-4"
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gambar dengan bingkai border */}
            <div className="shrink-0 border-b border-slate-200 bg-slate-50 p-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-slate-300 bg-slate-100">
                <Image
                  src={works[active].src}
                  alt={works[active].alt}
                  fill
                  sizes="(min-width: 768px) 672px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-5">
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                {works[active].service} · {works[active].location}
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                {works[active].title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                {works[active].note}
              </p>
            </div>

            {/* Tombol tutup mengambang di atas gambar */}
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-sm transition hover:bg-white"
              aria-label="Tutup"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export const BeforeAfter = WorkGallery;