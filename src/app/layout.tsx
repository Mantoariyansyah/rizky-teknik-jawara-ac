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

const BASE_URL = "https://www.rizkyteknik-jawaraac.com";

const title = "Rizki Teknik Jawara AC – Jasa Service AC Bogor, Bekasi, Depok, Jakarta Timur";
const description =
  "Jasa service AC profesional di Bogor, Bekasi, Depok, Jakarta Timur, Cileungsi, Kota Wisata, dan Cibubur. Cuci AC, isi freon, perbaikan, bongkar pasang AC baru. Teknisi berpengalaman, harga transparan, bergaransi 30 hari. Booking via WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "service AC Bogor",
    "cuci AC Bekasi",
    "jasa AC Depok",
    "service AC Jakarta Timur",
    "perbaikan AC Cileungsi",
    "pasang AC Cibubur",
    "service AC Kota Wisata",
    "service AC Gunung Putri",
    "jasa cuci AC",
    "isi freon AC",
    "bongkar pasang AC",
    "Rizki Teknik Jawara AC",
    "teknisi AC Bogor",
    "servis AC murah Bogor",
    "jasa AC profesional",
  ],
  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 940,
        height: 210,
        alt: "Rizki Teknik Jawara AC – Service & Perawatan & Instalasi AC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  description,
  telephone: "+628558579340",
  email: "rizkyfajillah@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kp. Cohak, Desa Nagrak, RT001/RW005",
    addressLocality: "Gunung Putri",
    addressRegion: "Jawa Barat",
    postalCode: "16967",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.4297,
    longitude: 106.9767,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "21:00",
  },
  priceRange: "Rp 80.000 – Rp 500.000",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, Transfer Bank, QRIS",
  areaServed: [
    { "@type": "City", name: "Kabupaten Bogor" },
    { "@type": "City", name: "Kota Bekasi" },
    { "@type": "City", name: "Depok" },
    { "@type": "City", name: "Jakarta Timur" },
    { "@type": "City", name: "Cileungsi" },
    { "@type": "City", name: "Cibubur" },
    { "@type": "City", name: "Kota Wisata" },
    { "@type": "City", name: "Gunung Putri" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Service AC",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cuci AC",
          description: "Pembersihan unit indoor dan outdoor, menghilangkan debu, jamur, dan kotoran.",
        },
        price: "80000",
        priceCurrency: "IDR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Isi / Tambah Freon",
          description: "Pengecekan tekanan dan pengisian freon R32, R410, atau R22.",
        },
        price: "250000",
        priceCurrency: "IDR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Perbaikan AC",
          description: "Mengatasi AC tidak dingin, bocor, mati total, atau bunyi berisik.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pasang AC Baru",
          description: "Instalasi AC baru yang rapi dan aman untuk semua merek.",
        },
        price: "350000",
        priceCurrency: "IDR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bongkar & Pindah AC",
          description: "Relokasi unit AC tanpa risiko kerusakan dan kehilangan freon.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Perawatan AC Berkala",
          description: "Kontrak perawatan rutin untuk rumah, kantor, dan usaha.",
        },
      },
    ],
  },
  sameAs: [],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
