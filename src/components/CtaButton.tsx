"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { trackEvent } from "@/lib/analytics";
import { withUtm } from "@/lib/utm";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-clay-600 text-white hover:bg-clay-700",
  secondary: "bg-pine-800 text-white hover:bg-pine-900",
  ghost: "bg-transparent text-pine-800 border border-pine-800 hover:bg-sage-50",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  external?: boolean;
};

/** Outbound destinations worth tagging with UTM params and a click event. */
function outboundMeta(href: string): { source: string; event: string } | null {
  if (href.includes("facebook.com")) return { source: "facebook", event: "ClickFacebookGroup" };
  if (href.includes("eventbrite.com")) return { source: "eventbrite", event: "ClickEventbrite" };
  return null;
}

export default function CtaButton({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
  onClick,
  ...rest
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none ${variantClasses[variant]} ${className}`;

  if (external) {
    const meta = outboundMeta(href);
    const taggedHref = meta ? withUtm(href, { source: meta.source }) : href;

    return (
      <a
        href={taggedHref}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={(e) => {
          if (meta) trackEvent(meta.event, { href });
          onClick?.(e);
        }}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
