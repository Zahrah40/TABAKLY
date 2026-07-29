import type { ReactNode } from "react";

type SectionHeadingProps = {
  className?: string;
  description: ReactNode;
  eyebrow: ReactNode;
  eyebrowTone?: "accent" | "primary";
  title: ReactNode;
};

const eyebrowClasses = {
  accent: "text-brand-accent-strong",
  primary: "text-brand-primary-strong",
} as const;

export default function SectionHeading({
  className,
  description,
  eyebrow,
  eyebrowTone = "accent",
  title,
}: SectionHeadingProps) {
  const classes = ["text-center", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.2em] ${eyebrowClasses[eyebrowTone]}`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-bold text-brand-text md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted">
        {description}
      </p>
    </div>
  );
}
