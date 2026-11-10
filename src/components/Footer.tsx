import { Icon, type IconName } from "./Icon";
import { Logo } from "./Logo";
import { nav } from "@/lib/data";

const socials: { icon: IconName; label: string; href: string }[] = [
  { icon: "instagram", label: "Instagram", href: "#" },
  { icon: "facebook", label: "Facebook", href: "#" },
  { icon: "tiktok", label: "TikTok", href: "#" },
];

export function Footer() {
  return (
    <footer
      id="kontak"
      className="scroll-mt-20 border-t border-slate-800 bg-slate-900 pt-12 text-slate-300 md:pt-16"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-slate-400">
            Jasa service AC profesional untuk rumah dan bisnis. Cepat, rapi,
            transparan, dan bergaransi.
          </p>
          <div className="mt-4 flex gap-1.5">
            {socials.map(({ icon, label, href }) => (
              <a
                key={icon}
                href={href}
                aria-label={label}
                className="grid h-8 w-8 place-items-center rounded-md border border-slate-700 bg-slate-800/50 text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                <Icon name={icon} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold text-white">
            Tautan Cepat
          </h3>
          <ul className="mt-4 space-y-2 text-[13px] text-slate-400">
            {nav.slice(0, 6).map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold text-white">
            Jam Operasional
          </h3>
          <div className="mt-4 flex gap-2.5 text-[13px] text-slate-400">
            <Icon
              name="clock"
              className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
            />
            <p className="leading-relaxed">
              Senin – Minggu
              <br />
              <strong className="font-medium text-white">07.00 – 21.00 WIB</strong>
              <br />
              <span className="text-emerald-400">Layanan darurat tersedia</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold text-white">
            Hubungi Kami
          </h3>
          <ul className="mt-4 space-y-3 text-[13px] text-slate-400">
            <li className="flex gap-2.5">
              <Icon
                name="pin"
                className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
              />
              Kp. Cohak, Desa Nagrak, RT001/RW005, Kec. Gunung Putri, Kab.
              Bogor, Jawa Barat 16967
            </li>
            <li className="flex gap-2.5">
              <Icon
                name="phone"
                className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
              />
              0855-8579-340
            </li>
            <li className="flex gap-2.5">
              <Icon
                name="mail"
                className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
              />
              halo@coolfixac.id
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Rizki Teknik Jawara AC. Hak cipta dilindungi.
      </div>
    </footer>
  );
}