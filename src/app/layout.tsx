import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel";
import { siteConfig } from "@/lib/site-config";
import { getSearchIndex } from "@/lib/search";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.shortBlurb,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.shortBlurb,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.shortBlurb,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchIndex = getSearchIndex();
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        <FacebookPixel />
        <Header searchIndex={searchIndex} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
