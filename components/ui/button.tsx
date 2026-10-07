import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2";

  const variants = {
    primary: "bg-emerald-700 text-white shadow-lg shadow-emerald-700/20 hover:bg-emerald-800",
    secondary: "border border-stone-300 bg-white text-stone-900 hover:bg-stone-50",
    ghost: "bg-stone-100 text-stone-900 hover:bg-stone-200",
  };

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
