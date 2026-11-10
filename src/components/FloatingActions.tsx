"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { WHATSAPP_URL } from "@/lib/constants";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi melalui WhatsApp"
        className="fixed bottom-4 right-4 z-40 grid h-11 w-11 place-items-center rounded-full bg-sky-600 text-white transition-colors hover:bg-sky-700 sm:bottom-5 sm:right-5 sm:h-12 sm:w-12"
      >
        <Icon name="message" className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Kembali ke atas"
        className={`fixed bottom-[72px] right-4 z-40 grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 sm:bottom-[84px] sm:right-5 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <Icon name="chevron" className="h-3.5 w-3.5 rotate-180" />
      </button>
    </>
  );
}