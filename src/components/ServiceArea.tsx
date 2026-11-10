import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { areas } from "@/lib/data";

const markers: [number, number][] = [
  [18, 18],
  [70, 22],
  [24, 65],
  [76, 70],
  [52, 78],
];

export function ServiceArea() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 md:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div>
          <SectionHeading
            center={false}
            eyebrow="Area Layanan"
            title="Teknisi kami siap datang ke lokasi Anda"
            desc="Melayani rumah, kos, kantor, ruko, dan restoran di berbagai area Jabodetabek."
          />

          <div className="mt-6 flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[12px] font-medium text-slate-700"
              >
                <Icon name="pin" className="h-3 w-3 text-sky-600" />
                {area}
              </span>
            ))}
          </div>

          <p className="mt-4 text-[12px] text-slate-500">
            Area Anda belum tercantum? Hubungi admin untuk cek ketersediaan
            teknisi.
          </p>
        </div>

        <div className="relative h-80 overflow-hidden rounded-lg border border-slate-200 bg-sky-50">
          <div className="absolute inset-0 opacity-40 map-pattern" />

          {/* Marker utama (pusat) */}
          <div className="absolute left-[40%] top-[45%] grid h-11 w-11 place-items-center rounded-full bg-sky-600 text-white">
            <Icon name="pin" className="h-5 w-5" />
          </div>

          {/* Marker area */}
          {markers.map(([x, y]) => (
            <span
              key={`${x}-${y}`}
              className="absolute grid h-6 w-6 place-items-center rounded-full border border-slate-200 bg-white text-sky-600"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <Icon name="snow" className="h-3 w-3" />
            </span>
          ))}

          {/* Kartu info */}
          <div className="absolute bottom-3 left-3 rounded-md border border-slate-200 bg-white/95 px-3 py-2 backdrop-blur-sm">
            <strong className="text-[12px] font-semibold text-slate-900">
              7+ area terjangkau
            </strong>
            <p className="mt-0.5 text-[11px] text-slate-500">
              Teknisi terdekat siap meluncur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}