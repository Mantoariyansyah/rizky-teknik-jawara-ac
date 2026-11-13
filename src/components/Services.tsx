import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section
      id="layanan"
      className="scroll-mt-20 border-t border-slate-200 bg-white py-16 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Solusi lengkap untuk semua kebutuhan AC"
          desc="Dari perawatan rutin hingga perbaikan kompleks, teknisi kami siap membantu dengan standar kerja terbaik."
        />
        {/* 9 item → pakai 3 kolom agar rapi (3x3) */}
        <div className="grid gap-3 sm:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="group rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-100">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}