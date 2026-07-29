import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  fullWidth?: boolean;
  shape?: "pill" | "soft";
  size?: "default" | "compact";
  variant?: "primary" | "secondary";
};

const variantClasses = {
  primary: "button-primary",
  secondary: "button-secondary",
} as const;

export default function ButtonLink({
  className,
  fullWidth = false,
  shape = "pill",
  size = "default",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const classes = [
    "button-base",
    variantClasses[variant],
    shape === "soft" ? "button-soft" : "",
    size === "compact" ? "button-compact" : "",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <a className={classes} {...props} />;
}
