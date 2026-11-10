"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function BeforeAfter() {
  const [slider, setSlider] = useState(50);

  return (
    <section className="border-t border-slate-200 bg-white py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Hasil Pekerjaan"
          title="Lihat bedanya, rasakan sejuknya"
          desc="Geser untuk melihat hasil pembersihan unit AC oleh teknisi Rizki Teknik."
        />

        <div className="relative mx-auto aspect-[16/9] max-h-[520px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
          {/* Sesudah (lapisan bawah) */}
          <Image
            src="https://images.unsplash.com/photo-1761330440311-16e160cad236?auto=format&fit=crop&w=1400&q=85"
            alt="Ruangan sejuk setelah AC dibersihkan"
            fill
            sizes="(min-width: 1152px) 1088px, 100vw"
            className="object-cover"
          />

          {/* Sebelum (lapisan atas, dipotong dengan clip-path) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1724958337802-2ac3cd31baa6?auto=format&fit=crop&w=1400&q=80"
              alt="Unit AC sebelum dibersihkan"
              fill
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover grayscale"
            />
          </div>

          {/* Label */}
          <span className="absolute left-3 top-3 rounded-md bg-slate-900/80 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            Sebelum
          </span>
          <span className="absolute right-3 top-3 rounded-md bg-white/90 px-2 py-1 text-[11px] font-medium text-slate-900 backdrop-blur-sm">
            Sesudah
          </span>

          {/* Garis pemisah */}
          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-white/90"
            style={{ left: `${slider}%` }}
          >
            <span className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 7l-5 5 5 5" />
                <path d="M16 7l5 5-5 5" />
              </svg>
            </span>
          </div>

          <input
            aria-label="Geser perbandingan sebelum dan sesudah"
            type="range"
            min={10}
            max={90}
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}