import type { ComponentPropsWithoutRef } from "react";

type TagProps = ComponentPropsWithoutRef<"span">;

export default function Tag({ className, ...props }: TagProps) {
  const classes = [
    "inline-flex rounded-full bg-brand-muted px-4 py-2 font-medium text-brand-dark",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes} {...props} />;
}
