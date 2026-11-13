import type { ReactNode } from "react";

export type IconName =
  | "snow" | "drop" | "tool" | "plus" | "move" | "calendar" | "box" | "building"
  | "user" | "tag" | "shield" | "bolt" | "phone" | "pin" | "clock" | "check"
  | "arrow" | "menu" | "close" | "chevron" | "star" | "message" | "mail"
  | "instagram" | "facebook" | "tiktok" | "refresh";

const paths: Record<IconName, ReactNode> = {
  snow: (
    <>
      <path d="M12 2v20M4.2 6.5l15.6 9M4.2 17.5l15.6-9" />
      <path d="m9 4 3 3 3-3M9 20l3-3 3 3M4.8 9.8l4.1-.9-1.3-4M19.2 14.2l-4.1.9 1.3 4M7.6 19.3l1.3-4-4.1-.9M16.4 4.7l-1.3 4 4.1.9" />
    </>
  ),
  drop: <path d="M12 2S5.5 9.1 5.5 14.2a6.5 6.5 0 0 0 13 0C18.5 9.1 12 2 12 2Z" />,
  tool: (
    <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4 4 0 0 0 5 5L4 17a2.1 2.1 0 0 0 3 3l7.7-7.7a4 4 0 0 0 5-5L17.4 9.6 15 7.2l2.3-2.3" />
  ),
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
      <rect x="3" y="3" width="18" height="18" rx="5" />
    </>
  ),
  move: <path d="M12 2v20M2 12h20M8 6l4-4 4 4M8 18l4 4 4-4M6 8l-4 4 4 4M18 8l4 4-4 4" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </>
  ),
  box: (
    <>
      <path d="m21 8-9-5-9 5 9 5 9-5Z" />
      <path d="m3 8 9 5 9-5v8l-9 5-9-5V8Z" />
      <path d="M12 13v8" />
    </>
  ),
  building: <path d="M4 22V4h11v18M15 9h5v13M2 22h20M8 8h3M8 12h3M8 16h3" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 22a8 8 0 0 1 16 0" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 13.6 11 4H4v7l9.6 9.6a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8Z" />
      <circle cx="7.5" cy="7.5" r=".8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  bolt: <path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  star: <path d="m12 2 3.1 6.3 6.9 1-5 4.8 1.2 6.9-6.2-3.2L5.8 21 7 14.1l-5-4.8 6.9-1L12 2Z" />,
  message: (
    <>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  facebook: (
    <path d="M14 22v-9h3l.5-4H14V6.5c0-1.2.4-2 2-2H18V1.1c-.4-.1-1.6-.1-3-.1-3 0-5 1.8-5 5.2V9H7v4h3v9h4Z" />
  ),
  tiktok: <path d="M15 3v11.5a4.5 4.5 0 1 1-4.5-4.5M15 3c.6 2.7 2.1 4.3 5 5" />,
  refresh: (
    <>
      <path d="M21 12a9 9 0 0 1-15.5 6.3L3 16" />
      <path d="M3 21v-5h5" />
      <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8" />
      <path d="M21 3v5h-5" />
    </>
  ),
};

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}