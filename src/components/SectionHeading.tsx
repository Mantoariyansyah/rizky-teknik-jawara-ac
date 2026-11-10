type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  desc?: string;
  center?: boolean;
  invert?: boolean;
};

export function SectionHeading({ eyebrow, title, desc, center = true, invert = false }: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="mb-3 inline-block text-xs font-extrabold uppercase tracking-[.18em] text-sky-500">
        {eyebrow}
      </span>
      <h2
        className={`text-3xl font-extrabold leading-tight tracking-tight md:text-4xl ${invert ? "text-white" : "text-sky-950"}`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 leading-relaxed ${invert ? "text-sky-100/70" : "text-slate-600"}`}>{desc}</p>
      )}
    </div>
  );
}
