"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { faqs } from "@/lib/data";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-slate-200 bg-slate-50 py-16"
    >
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering diajukan"
          desc="Temukan jawaban singkat sebelum memesan layanan Rizki Teknik."
        />

        <div className="space-y-2">
          {faqs.map(({ q, a }, i) => {
            const open = openIndex === i;
            return (
              <article
                key={q}
                className={`overflow-hidden rounded-lg border bg-white transition-colors ${
                  open ? "border-slate-300" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left text-[13px] font-medium text-slate-900 transition-colors hover:bg-slate-50"
                  aria-expanded={open}
                >
                  <span>{q}</span>
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-md border transition-all duration-200 ${
                      open
                        ? "rotate-180 border-slate-300 bg-slate-100 text-slate-700"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    <Icon name="chevron" className="h-3.5 w-3.5" />
                  </span>
                </button>

                {open && (
                  <p className="border-t border-slate-100 px-4 pb-4 pt-3 text-[13px] leading-relaxed text-slate-600">
                    {a}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}