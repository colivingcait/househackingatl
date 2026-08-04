import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-clay-600 text-white hover:bg-clay-700",
  secondary: "bg-pine-800 text-white hover:bg-pine-900",
  ghost: "bg-transparent text-pine-800 border border-pine-800 hover:bg-pine-50",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  external?: boolean;
};

export default function CtaButton({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
  ...rest
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
