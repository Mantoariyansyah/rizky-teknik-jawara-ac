"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { WHATSAPP_URL } from "@/lib/constants";
import { services } from "@/lib/data";

const REQUIRED_FIELDS = ["nama", "whatsapp", "alamat", "layanan", "jumlah", "tanggal"] as const;
type Errors = Partial<Record<string, string>>;

export function BookingSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};

    for (const key of REQUIRED_FIELDS) {
      if (!String(data.get(key) ?? "").trim()) next[key] = "Wajib diisi";
    }
    const wa = String(data.get("whatsapp") ?? "");
    if (wa && wa.replace(/\D/g, "").length < 10) next.whatsapp = "Nomor WhatsApp tidak valid";

    setErrors(next);

    if (Object.keys(next).length === 0) {
      // TODO: kirim `Object.fromEntries(data)` ke API route / layanan backend Anda di sini.
      setSuccess(true);
      formRef.current?.reset();
    } else {
      setSuccess(false);
    }
  }

  const fieldClass = (name: string) =>
    `mt-1.5 h-10 w-full rounded-md border bg-white px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 ${
      errors[name] ? "border-red-400 bg-red-50/40" : "border-slate-200"
    }`;

  const fieldError = (name: string) =>
    errors[name] ? (
      <span className="mt-1 block text-[11px] text-red-500">{errors[name]}</span>
    ) : null;

  return (
    <section
      id="booking"
      className="scroll-mt-20 border-t border-slate-200 bg-sky-50 py-16 md:py-16"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeading
            center={false}
            eyebrow="Booking Service"
            title="Atur jadwal tanpa ribet"
            desc="Isi data singkat berikut. Tim kami akan menghubungi Anda untuk konfirmasi maksimal 10 menit."
          />

          <div className="mt-8 rounded-lg bg-sky-950 p-5 text-white">
            <p className="text-[12px] text-sky-200/80">
              Butuh bantuan lebih cepat?
            </p>
            <h3 className="mt-1 text-base font-semibold">
              Chat langsung dengan admin
            </h3>
            <Button href={WHATSAPP_URL} className="mt-4 w-full sm:w-auto">
              WhatsApp Sekarang
            </Button>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-[13px] font-medium text-slate-700">
              Nama Lengkap
              <input
                name="nama"
                placeholder="Contoh: Budi Santoso"
                className={fieldClass("nama")}
              />
              {fieldError("nama")}
            </label>

            <label className="text-[13px] font-medium text-slate-700">
              Nomor WhatsApp
              <input
                name="whatsapp"
                inputMode="tel"
                placeholder="08xxxxxxxxxx"
                className={fieldClass("whatsapp")}
              />
              {fieldError("whatsapp")}
            </label>

            <label className="text-[13px] font-medium text-slate-700 sm:col-span-2">
              Alamat / Area
              <input
                name="alamat"
                placeholder="Nama jalan, kecamatan, kota"
                className={fieldClass("alamat")}
              />
              {fieldError("alamat")}
            </label>

            <label className="text-[13px] font-medium text-slate-700">
              Jenis Layanan
              <select
                name="layanan"
                defaultValue=""
                className={fieldClass("layanan")}
              >
                <option value="" disabled>
                  Pilih layanan
                </option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
              {fieldError("layanan")}
            </label>

            <label className="text-[13px] font-medium text-slate-700">
              Jumlah Unit AC
              <input
                name="jumlah"
                type="number"
                min="1"
                placeholder="Contoh: 2"
                className={fieldClass("jumlah")}
              />
              {fieldError("jumlah")}
            </label>

            <label className="text-[13px] font-medium text-slate-700 sm:col-span-2">
              Tanggal & Jam
              <input
                name="tanggal"
                type="datetime-local"
                className={fieldClass("tanggal")}
              />
              {fieldError("tanggal")}
            </label>

            <label className="text-[13px] font-medium text-slate-700 sm:col-span-2">
              Catatan{" "}
              <span className="font-normal text-slate-400">(opsional)</span>
              <textarea
                name="catatan"
                rows={3}
                placeholder="Ceritakan kondisi AC Anda..."
                className={`${fieldClass("catatan")} h-auto py-2.5`}
              />
            </label>
          </div>

          <Button type="submit" className="mt-5 w-full">
            Kirim Booking <Icon name="arrow" />
          </Button>

          {success && (
            <div
              role="status"
              className="mt-4 flex items-start gap-2.5 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-[13px] text-emerald-800"
            >
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-600 text-white">
                <Icon name="check" className="h-2.5 w-2.5" />
              </span>
              <span>
                <b className="font-semibold">Booking berhasil dikirim.</b>{" "}
                Tim kami akan segera menghubungi Anda melalui WhatsApp.
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}