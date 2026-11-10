"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { nav } from "@/lib/data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {nav.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-md px-3 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="#booking" className="min-h-9 px-4 py-2 text-sm">
            Pesan Sekarang
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden"
          aria-label="Navigasi seluler"
        >
          <div className="space-y-0.5">
            {nav.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {label}
              </a>
            ))}
          </div>
          <Button href="#booking" className="mt-3 w-full">
            Pesan Sekarang
          </Button>
        </nav>
      )}
    </header>
  );
}