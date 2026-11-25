import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Plus_Jakarta_Sans } from "next/font/google";
import { businessConfig } from "@/config/business";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

const title = "Krishna Surgicals, Kakadeo Kanpur | Medical & Home-Care Supplies";
const description =
  "Krishna Surgicals in Kakadeo, Kanpur (est. 2020) — wholesaler and retail showroom for orthopaedic supports, wheelchairs, hospital beds, BP monitors, pulse oximeters, glucometers, nebulizers, and wound-care consumables.";

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.siteUrl),
  title,
  description,
  keywords: [
    "Krishna Surgicals Kanpur",
    "surgical store Kakadeo Kanpur",
    "medical supplies Avon Market Kanpur",
    "orthopaedic supports Tynor Kanpur",
    "wheelchair hospital bed Kanpur",
    "BP monitor glucometer nebulizer Kanpur",
    "home care medical equipment Kakadeo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: businessConfig.name.en,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-showroom.jpg",
        width: 1200,
        height: 900,
        alt: "Krishna Surgicals home-care and medical supplies showroom showcase in Kakadeo, Kanpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-showroom.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${notoDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F7F5F0] text-[#0F233D] flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-[#0F233D] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
