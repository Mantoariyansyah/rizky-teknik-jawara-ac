import Image from "next/image";

export function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <a
      href="#beranda"
      className={`inline-flex items-center ${className}`}
      aria-label="Rizki Teknik Jawara AC"
    >
      <Image
        src={light ? "/logo-light.png" : "/logo.png"}
        alt="Rizki Teknik Jawara AC"
        width={210}
        height={48}
        priority
        className="h-9 md:h-10 w-auto object-contain"
      />
    </a>
  );
}

