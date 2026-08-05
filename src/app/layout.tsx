import type { Metadata } from "next";
import { Source_Sans_3, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { siteConfig } from "@/lib/site-config";
import { getSearchIndex } from "@/lib/search";
import { pageMetadata } from "@/lib/metadata";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  ...pageMetadata({
    path: "/",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.shortBlurb,
  }),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
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
      <body className={`${sourceSans.variable} ${libreBaskerville.variable} font-sans antialiased`}>
        <FacebookPixel />
        <GoogleAnalytics />
        <Header searchIndex={searchIndex} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
