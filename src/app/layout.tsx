import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const description =
  "Jasa service AC profesional: cuci AC, isi freon, perbaikan, dan pasang AC baru dengan harga transparan, teknisi bersertifikat, dan garansi. Booking via WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Jasa Service AC Cepat, Rapi & Bergaransi`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  openGraph: {
    title: `${SITE_NAME} – Jasa Service AC Cepat, Rapi & Bergaransi`,
    description,
    type: "website",
    locale: "id_ID",
    siteName: SITE_NAME,
  },
  // Nilai asli dari Figma Make adalah `index: false` (untuk preview). Ubah ke false jika ingin disembunyikan dari mesin pencari.
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={jakarta.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              if (window.location.hash) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
      </head>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
