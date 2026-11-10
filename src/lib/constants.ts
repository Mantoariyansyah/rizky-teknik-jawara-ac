const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6289688087637";

export const SITE_NAME = "Rizki Teknik Jawara AC";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rizkiteknik.id";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Rizki Teknik Jawara AC, saya ingin booking service AC.",
)}`;

