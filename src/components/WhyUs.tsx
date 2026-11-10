import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { whyUs } from "@/lib/data";

export function WhyUs() {
  return (
    <section className="bg-sky-950 py-16 text-white md:py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          invert
          eyebrow="Kenapa Rizki Teknik?"
          title="Tenang, AC Anda ditangani ahlinya"
          desc="Kami membangun kepercayaan melalui kualitas kerja, komunikasi jujur, dan layanan purnajual yang jelas."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map(({ icon, title, desc }) => (
            <div key={title} className="text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-sky-500 text-white">
                <Icon name={icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-white">
                {title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-sky-100/70">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}