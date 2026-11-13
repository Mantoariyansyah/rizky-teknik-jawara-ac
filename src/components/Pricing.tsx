import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { prices } from "@/lib/data";

export function Pricing() {
  return (
    <section
      id="harga"
      className="scroll-mt-20 border-t border-slate-200 bg-slate-50 py-16 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Daftar Harga"
          title="Harga jelas, tanpa biaya tersembunyi"
          desc="Dapatkan layanan profesional dengan harga yang masuk akal dan disepakati di awal."
        />
        {/* 6 layanan → grid 2 kolom di md, 3 kolom di lg = rapi 3×2 */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {prices.map((item) => (
            <article
              key={item.title}
              className={`relative flex flex-col rounded-lg border bg-white p-5 transition-colors ${
                item.popular
                  ? "border-orange-300"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {item.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-orange-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  Populer
                </span>
              )}

              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>

              <div className="mt-4">
                {item.prefix && (
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    {item.prefix}
                  </p>
                )}
                <strong className="mt-0.5 block text-xl font-bold tracking-tight text-slate-900">
                  {item.price}
                </strong>
              </div>

              <p className="mt-3 text-[12px] leading-relaxed text-slate-500">
                {item.note}
              </p>

              <a
                href="#booking"
                className="mt-auto flex items-center gap-1.5 pt-5 text-[13px] font-semibold text-sky-700 transition-colors hover:text-sky-900"
              >
                Pilih layanan <Icon name="arrow" className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] text-slate-500">
          * Harga dapat berbeda sesuai lokasi dan kondisi AC. Konfirmasi final dilakukan sebelum pengerjaan.
        </p>
      </div>
    </section>
  );
}