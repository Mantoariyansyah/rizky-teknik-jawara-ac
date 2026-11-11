export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "628558579340";

export const SITE_NAME = "Rizki Teknik Jawara AC";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rizkiteknik.id";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Bapak Aden, selamat pagi/siang/sore. Saya menemukan website jasa service AC Anda dan tertarik untuk booking. Mohon info ketersediaan jadwal, estimasi harga, serta area layanan yang bisa dijangkau. Terima kasih.",
)}`;
