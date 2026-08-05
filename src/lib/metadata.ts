import type { Metadata } from "next";
import { siteConfig } from "./site-config";

const DEFAULT_OG_IMAGE = "/images/og-default.jpg";

/**
 * Builds a full per-page Metadata object — title, description, canonical
 * link, and OpenGraph/Twitter tags all pointed at the current page's own
 * URL rather than inheriting the root layout's homepage defaults. Twitter
 * always mirrors the OG title/description/image so the two never drift.
 */
export function pageMetadata({
  path,
  title,
  description,
  image,
  type = "website",
  noIndex = false,
}: {
  /** Route path starting with "/", e.g. "/what-is-house-hacking" or "/" for home. */
  path: string;
  title: string;
  description: string;
  /** Absolute or root-relative image URL. Defaults to the site-wide OG image. */
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const url = `https://${siteConfig.domain}${path === "/" ? "" : path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
