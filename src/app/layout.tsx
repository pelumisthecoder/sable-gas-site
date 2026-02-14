import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brandName} — LPG delivery & refills`,
    template: `%s — ${SITE.brandName}`,
  },
  description: SITE.description,
  applicationName: SITE.brandName,
  openGraph: {
    type: "website",
    url: "/",
    title: `${SITE.brandName} — LPG delivery & refills`,
    description: SITE.description,
    siteName: SITE.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.brandName} — LPG delivery & refills`,
    description: SITE.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.brandName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneDisplay,
    areaServed: SITE.hubs.map((h) => h.label),
    openingHours: "Mo-Sa 09:00-19:00",
    sameAs: [SITE.whatsappWaMe],
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lift"
        >
          Skip to content
        </a>

        <Header />

        <main id="content" className="pb-20 md:pb-0">
          {children}
        </main>

        <Footer />
        <StickyMobileCTA />

        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
