import type { ReactNode } from "react";

type Variant = "orange" | "blue" | "outline" | "white";

const styles: Record<Variant, string> = {
  blue: "bg-sky-600 text-white hover:bg-sky-700",
  orange: "bg-orange-500 text-white hover:bg-orange-600",
  outline:
    "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50",
  white: "bg-white text-slate-900 hover:bg-slate-100",
};

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  href,
  children,
  variant = "blue",
  className = "",
  type = "button",
}: ButtonProps) {
  const cls = `inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-[13px] font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-1 ${styles[variant]} ${className}`;

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        className={cls}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} type={type}>
      {children}
    </button>
  );
}