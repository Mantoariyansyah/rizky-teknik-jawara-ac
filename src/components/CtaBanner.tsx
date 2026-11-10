import { Button } from "./Button";
import { Icon } from "./Icon";
import { WHATSAPP_URL } from "@/lib/constants";

export function CtaBanner() {
  return (
    <section
      data-no-reveal
      className="border-t border-slate-200 bg-white py-16 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div
          className="rounded-lg bg-sky-600 px-6 py-10 text-center text-white md:px-12 md:py-12"
          style={{ animation: "none", opacity: 1, transform: "none" }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            AC bermasalah? Hubungi kami sekarang
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-sky-50">
            Jangan tunggu sampai makin parah. Konsultasikan masalah AC Anda
            gratis dengan admin kami.
          </p>

          <Button href={WHATSAPP_URL} variant="white" className="mt-6">
            Chat via WhatsApp <Icon name="arrow" />
          </Button>
        </div>
      </div>
    </section>
  );
}