import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="scroll-mt-20 border-t border-slate-200 bg-slate-50 py-16 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Dipercaya ribuan pelanggan"
          desc="Kepuasan pelanggan adalah standar utama dalam setiap pekerjaan kami."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map(({ name, role, quote }) => (
            <article
              key={name}
              className="flex flex-col rounded-lg border border-slate-200 bg-white p-5"
            >
              <div className="flex gap-0.5 text-amber-400">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Icon name="star" key={n} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>

              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-slate-600">
                “{quote}”
              </p>

              <div className="mt-5 flex items-center gap-2.5 border-t border-slate-100 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <Icon name="user" className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-slate-900">
                    {name}
                  </h3>
                  <p className="text-[11px] text-slate-500">{role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}