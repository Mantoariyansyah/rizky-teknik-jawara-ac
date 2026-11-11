import type { IconName } from "@/components/Icon";

export type NavItem = { label: string; id: string };

export const nav: NavItem[] = [
  { label: "Beranda", id: "beranda" },
  { label: "Layanan", id: "layanan" },
  { label: "Harga", id: "harga" },
  { label: "Cara Kerja", id: "cara-kerja" },
  { label: "Testimoni", id: "testimoni" },
  { label: "FAQ", id: "faq" },
  { label: "Kontak", id: "kontak" },
];

export type Service = { icon: IconName; title: string; desc: string };

export const services: Service[] = [
  { icon: "snow", title: "Cuci AC", desc: "Bersihkan debu, jamur, dan kotoran agar udara kembali segar." },
  { icon: "drop", title: "Isi / Tambah Freon", desc: "Pengecekan tekanan dan pengisian freon R32, R410, atau R22." },
  { icon: "tool", title: "Perbaikan AC", desc: "Atasi AC tidak dingin, bocor, mati, atau bunyi berisik." },
  { icon: "plus", title: "Pasang AC Baru", desc: "Instalasi rapi, aman, dan sesuai standar untuk semua merek." },
  { icon: "move", title: "Bongkar & Pindah AC", desc: "Relokasi unit tanpa risiko kerusakan dan kehilangan freon." },
  { icon: "calendar", title: "Perawatan Berkala", desc: "Kontrak perawatan rutin untuk rumah, kantor, dan usaha." },
  { icon: "box", title: "Sparepart & Unit AC", desc: "Sparepart original serta AC baru dan bekas berkualitas." },
  { icon: "building", title: "AC Komersial", desc: "Servis skala kantor, ruko, restoran, dan properti komersial." },
];

export type Feature = { icon: IconName; title: string; desc: string };

export const whyUs: Feature[] = [
  { icon: "user", title: "Teknisi Profesional", desc: "Berpengalaman, bersertifikat, dan berpenampilan rapi." },
  { icon: "tag", title: "Harga Transparan", desc: "Estimasi biaya jelas sebelum pekerjaan dimulai." },
  { icon: "shield", title: "Garansi Servis", desc: "Jaminan hingga 30 hari untuk kenyamanan Anda." },
  { icon: "bolt", title: "Respon Cepat", desc: "Booking mudah dan teknisi siap datang hari ini." },
];

export type Price = {
  title: string;
  price: string;
  note: string;
  prefix?: string;
  popular?: boolean;
};

export const prices: Price[] = [
  { title: "Cuci AC 0,5–1 PK", price: "Rp 85.000", note: "Pembersihan unit indoor & outdoor" },
  { title: "Cuci AC 1,5–2 PK", price: "Rp 100.000", note: "Untuk unit berkapasitas besar", popular: true },
  { title: "Isi Freon R32/R410", price: "Rp 250.000", prefix: "Mulai", note: "Termasuk cek tekanan & kebocoran" },
  { title: "Pasang AC Baru", price: "Rp 400.000", prefix: "Mulai", note: "Instalasi standar hingga 3 meter" },
  { title: "Perbaikan AC", price: "Gratis cek", note: "Biaya transparan sesuai kerusakan" },
];

export const steps: Feature[] = [
  { icon: "phone", title: "Hubungi / Booking", desc: "Isi form atau chat WhatsApp untuk tentukan jadwal." },
  { icon: "user", title: "Teknisi Datang", desc: "Tim datang tepat waktu dan memeriksa kondisi AC." },
  { icon: "tool", title: "Pengerjaan", desc: "Pekerjaan dilakukan rapi sesuai standar operasional." },
  { icon: "shield", title: "Bayar & Garansi", desc: "Cek hasil, lakukan pembayaran, dan terima garansi." },
];

export type Testimonial = { name: string; role: string; quote: string; img: string };

export const testimonials: Testimonial[] = [
  {
    name: "Rina Puspita",
    role: "Pemilik Kos, Depok",
    quote: "Teknisinya datang tepat waktu, kerjanya rapi dan AC langsung dingin lagi. Harganya juga sesuai yang dijelaskan admin.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Andi Wijaya",
    role: "Pemilik Ruko, Bogor",
    quote: "Sudah dua kali panggil Rizki Teknik untuk service beberapa unit. Selalu responsif dan hasilnya memuaskan. Sangat recommended.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Maya Kusuma",
    role: "Office Manager, Jakarta",
    quote: "Proses booking mudah, teknisi sopan, dan laporan pekerjaannya jelas. Sekarang kami ambil paket perawatan rutin kantor.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  },
];

export const areas = [
  "Kab. Bogor",
  "Depok",
  "Jakarta Timur",
  "Bekasi",
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Berapa lama proses pengerjaan service AC?",
    a: "Cuci AC standar biasanya memerlukan 30–45 menit per unit. Untuk perbaikan, durasi menyesuaikan hasil pengecekan teknisi.",
  },
  {
    q: "Apakah ada garansi setelah servis?",
    a: "Ya, setiap layanan perbaikan kami dilindungi garansi hingga 30 hari sesuai jenis pekerjaan dan sparepart.",
  },
  {
    q: "Merek AC apa saja yang bisa ditangani?",
    a: "Kami menangani hampir semua merek populer seperti Daikin, Panasonic, LG, Samsung, Sharp, Gree, Mitsubishi, dan lainnya.",
  },
  {
    q: "Metode pembayaran apa yang tersedia?",
    a: "Pembayaran dapat dilakukan tunai, transfer bank, atau QRIS setelah pekerjaan selesai dan Anda mengecek hasilnya.",
  },
  {
    q: "Kapan AC perlu dicuci?",
    a: "Idealnya setiap 3–4 bulan untuk rumah, atau 1–2 bulan untuk kantor dan tempat usaha dengan pemakaian intensif.",
  },
  {
    q: "Apakah bisa servis di hari libur?",
    a: "Bisa. Tim kami tersedia setiap hari pukul 07.00–21.00, termasuk akhir pekan dan hari libur dengan reservasi.",
  },
];
