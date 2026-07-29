import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  padding?: "default" | "spacious" | "none";
  tone?: "default" | "inverse";
};

const paddingClasses = {
  default: "p-8",
  spacious: "p-10",
  none: "",
} as const;

const toneClasses = {
  default: "border border-border-subtle bg-brand-white text-ink shadow-sm",
  inverse: "bg-brand-dark text-brand-white shadow-lg",
} as const;

export default function Card({
  className,
  padding = "default",
  tone = "default",
  ...props
}: CardProps) {
  const classes = [
    "rounded-3xl",
    toneClasses[tone],
    paddingClasses[padding],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} {...props} />;
}
