import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      className="scroll-mt-20 border-t border-slate-200 bg-white py-16 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Cara Kerja"
          title="AC kembali sejuk dalam 4 langkah"
          desc="Proses sederhana dan transparan, tanpa membuat Anda menunggu lama."
        />
        <div className="relative grid gap-8 md:grid-cols-4 md:gap-6">
          {/* Garis penghubung */}
          <div className="absolute left-[12%] right-[12%] top-6 hidden border-t border-dashed border-slate-300 md:block" />

          {steps.map(({ icon, title, desc }, i) => (
            <div key={title} className="relative text-center">
              <span className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full border-[3px] border-white bg-sky-600 text-white">
                <Icon name={icon} className="h-5 w-5" />
                <b className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-orange-500 text-[10px] font-semibold text-white">
                  {i + 1}
                </b>
              </span>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mx-auto mt-1.5 max-w-52 text-[13px] leading-relaxed text-slate-600">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}