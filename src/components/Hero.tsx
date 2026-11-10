import { Button } from "./Button";
import { Icon } from "./Icon";
import { WHATSAPP_URL } from "@/lib/constants";

const badges = ["Garansi 30 Hari", "Teknisi Bersertifikat", "Datang Hari Ini"];

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-slate-50 pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-10">
        <div className="relative z-10">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-sky-700">
            Siap datang hari ini · Jabodetabek
          </p>

          <h1 className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Service AC cepat, rapi, dan{" "}
            <span className="text-sky-600">bergaransi</span>
          </h1>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
            Teknisi berpengalaman datang ke lokasi Anda. Cuci AC, isi freon,
            perbaikan, hingga pemasangan baru.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button href={WHATSAPP_URL}>
              <Icon name="message" /> Pesan via WhatsApp
            </Button>
            <Button href="#harga" variant="outline">
              Lihat harga <Icon name="arrow" />
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {badges.map((text) => (
              <span
                key={text}
                className="flex items-center gap-1.5 text-[11px] text-slate-600"
              >
                <Icon name="check" className="h-3 w-3 text-emerald-600" />
                {text}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-5 border-t border-slate-200 pt-4">
            <div>
              <strong className="text-base font-bold text-slate-900">
                5.000+
              </strong>
              <p className="text-[10px] text-slate-500">AC ditangani</p>
            </div>
            <div className="h-7 w-px bg-slate-200" />
            <div>
              <strong className="flex items-center gap-1 text-base font-bold text-slate-900">
                4.9{" "}
                <Icon
                  name="star"
                  className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                />
              </strong>
              <p className="text-[10px] text-slate-500">dari 850+ pelanggan</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-sky-100 via-sky-50 to-white shadow-sm lg:h-[400px]">
            <svg
              viewBox="0 0 500 400"
              preserveAspectRatio="xMidYMid meet"
              className="h-full w-full"
              role="img"
              aria-label="Ilustrasi teknisi AC profesional dengan kunci inggris"
            >
              <defs>
                <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e0f2fe" />
                  <stop offset="100%" stopColor="#f0f9ff" />
                </linearGradient>
              </defs>

              <rect width="500" height="400" fill="url(#heroBg)" />
              <circle cx="250" cy="230" r="180" fill="#bae6fd" opacity="0.35" />

              {/* Unit AC */}
              <g transform="translate(320, 50)">
                <rect
                  width="140"
                  height="55"
                  rx="8"
                  fill="#f8fafc"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                />
                <rect x="14" y="20" width="112" height="3" rx="1.5" fill="#cbd5e1" />
                <rect x="14" y="29" width="112" height="3" rx="1.5" fill="#cbd5e1" />
                <rect x="14" y="38" width="112" height="3" rx="1.5" fill="#cbd5e1" />
                <circle cx="122" cy="12" r="3" fill="#22c55e">
                  <animate
                    attributeName="opacity"
                    values="1;0.4;1"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* Aliran udara dingin */}
              <g
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M 340 115 Q 325 145 300 152 Q 285 155 283 175">
                  <animate
                    attributeName="opacity"
                    values="0.75;0.35;0.75"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
                <path d="M 365 125 Q 355 155 330 165 Q 315 170 313 190">
                  <animate
                    attributeName="opacity"
                    values="0.35;0.75;0.35"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
                <path d="M 305 120 Q 298 140 283 148">
                  <animate
                    attributeName="opacity"
                    values="0.6;0.3;0.6"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>

              {/* Salju */}
              <g stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" fill="none">
                <g transform="translate(400, 195)">
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0"
                      to="360"
                      dur="12s"
                      repeatCount="indefinite"
                    />
                    <line x1="-8" y1="0" x2="8" y2="0" />
                    <line x1="0" y1="-8" x2="0" y2="8" />
                    <line x1="-5.5" y1="-5.5" x2="5.5" y2="5.5" />
                    <line x1="-5.5" y1="5.5" x2="5.5" y2="-5.5" />
                  </g>
                </g>
                <g transform="translate(420, 240)" opacity="0.65">
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0"
                      to="-360"
                      dur="16s"
                      repeatCount="indefinite"
                    />
                    <line x1="-6" y1="0" x2="6" y2="0" />
                    <line x1="0" y1="-6" x2="0" y2="6" />
                    <line x1="-4" y1="-4" x2="4" y2="4" />
                    <line x1="-4" y1="4" x2="4" y2="-4" />
                  </g>
                </g>
              </g>

              {/* Bayangan lantai */}
              <ellipse cx="200" cy="365" rx="105" ry="12" fill="#cbd5e1" opacity="0.4" />

              {/* Teknisi */}
              <g>
                {/* Kaki */}
                <rect x="163" y="265" width="32" height="85" rx="4" fill="#1e40af" />
                <rect x="205" y="265" width="32" height="85" rx="4" fill="#1e40af" />

                {/* Sepatu */}
                <rect x="158" y="342" width="42" height="16" rx="4" fill="#0f172a" />
                <rect x="200" y="342" width="42" height="16" rx="4" fill="#0f172a" />

                {/* Badan / seragam */}
                <path
                  d="M 152 185 Q 152 168 168 168 L 232 168 Q 248 168 248 185 L 248 270 L 152 270 Z"
                  fill="#0ea5e9"
                />

                {/* Strip reflektif */}
                <rect x="152" y="222" width="96" height="6" fill="#fef08a" />
                <rect x="152" y="240" width="96" height="6" fill="#fef08a" />

                {/* Kerah */}
                <path
                  d="M 178 168 L 200 186 L 222 168"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.5"
                />

                {/* Resleting */}
                <line
                  x1="200"
                  y1="186"
                  x2="200"
                  y2="265"
                  stroke="#0284c7"
                  strokeWidth="1.5"
                  opacity="0.5"
                />

                {/* Ikat pinggang */}
                <rect x="150" y="270" width="100" height="12" rx="3" fill="#78350f" />
                <rect x="162" y="280" width="12" height="22" rx="2" fill="#78350f" />
                <rect x="226" y="280" width="12" height="22" rx="2" fill="#78350f" />
                <rect x="167" y="286" width="3" height="14" rx="1" fill="#facc15" />

                {/* Lengan kiri + tangan */}
                <path
                  d="M 158 188 Q 135 200 128 222 Q 124 238 130 250"
                  stroke="#0ea5e9"
                  strokeWidth="20"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="130" cy="252" r="9" fill="#fde68a" />

                {/* Kunci inggris */}
                <g transform="translate(130, 256) rotate(-22)">
                  <rect x="-3" y="0" width="6" height="38" rx="2" fill="#94a3b8" />
                  <circle cx="0" cy="40" r="8" fill="none" stroke="#94a3b8" strokeWidth="5" />
                  <rect x="-2" y="-6" width="4" height="10" rx="1" fill="#94a3b8" />
                </g>

                {/* Lengan kanan + tangan */}
                <path
                  d="M 242 188 Q 268 200 274 224"
                  stroke="#0ea5e9"
                  strokeWidth="20"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="276" cy="228" r="9" fill="#fde68a" />

                {/* Leher */}
                <rect x="186" y="158" width="28" height="14" rx="4" fill="#fde68a" />

                {/* Kepala */}
                <circle cx="200" cy="130" r="32" fill="#fde68a" />
                <circle cx="168" cy="132" r="4" fill="#fbbf24" />
                <circle cx="232" cy="132" r="4" fill="#fbbf24" />

                {/* Topi kerja */}
                <path d="M 168 123 Q 168 92 200 92 Q 232 92 232 123 Z" fill="#0f172a" />
                <rect x="165" y="120" width="70" height="8" rx="3" fill="#0f172a" />

                {/* Mata & senyum */}
                <circle cx="190" cy="132" r="2.5" fill="#0f172a" />
                <circle cx="210" cy="132" r="2.5" fill="#0f172a" />
                <path
                  d="M 191 143 Q 200 150 209 143"
                  stroke="#0f172a"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              {/* Kotak peralatan */}
              <g transform="translate(390, 315)">
                <ellipse cx="40" cy="55" rx="45" ry="7" fill="#cbd5e1" opacity="0.4" />
                <rect width="80" height="48" rx="5" fill="#dc2626" />
                <rect x="5" y="5" width="70" height="10" rx="2" fill="#b91c1c" />
                <rect x="34" y="-7" width="12" height="9" rx="2" fill="#0f172a" />
                <rect x="9" y="25" width="62" height="3" rx="1.5" fill="#b91c1c" />
              </g>
            </svg>
          </div>

          <div className="absolute -bottom-3 left-4 flex items-center gap-2.5 rounded-lg border border-slate-100 bg-white p-2.5 shadow-sm">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-emerald-50 text-emerald-600">
              <Icon name="shield" className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[10px] text-slate-500">Layanan terpercaya</p>
              <strong className="text-[11px] font-semibold text-slate-900">
                100% Bergaransi
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}