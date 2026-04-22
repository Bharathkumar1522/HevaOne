import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NavScrollEffect } from "@/components/ui/NavScrollEffect";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const editorial = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Heva One | The Global Operating System",
  description:
    "One Platform. Every Shift. Every Sale. Everywhere. Heva One unifies your Workforce, POS, and Operations into one beautiful dashboard.",
  metadataBase: new URL("https://hevaone.com"),
  alternates: { canonical: "https://hevaone.com" },
  keywords: ["POS", "Workforce Management", "Operating System", "B2B SaaS", "Global Commerce", "Scheduling Software", "Payroll Integration"],
  authors: [{ name: "Heva One" }],
  creator: "Heva One",
  publisher: "Heva One",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Heva One | The Global Operating System",
    description: "The unified global operating system for modern business. Unify Workforce, POS, and Operations into one dashboard.",
    url: "https://hevaone.com",
    siteName: "Heva One",
    images: [
      {
        url: "https://hevaone.com/hero-mockup.png",
        width: 1200,
        height: 630,
        alt: "Heva One Dashboard",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heva One | The Global Operating System",
    description: "The unified global operating system for modern business.",
    images: ["https://hevaone.com/hero-mockup.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Heva One",
  operatingSystem: "Web, iOS, Android",
  applicationCategory: "BusinessApplication",
  description: "One Platform. Every Shift. Every Sale. Everywhere. Heva One unifies your Workforce, POS, and Operations into one dashboard.",
  image: "https://hevaone.com/hero-mockup.png",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${editorial.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body suppressHydrationWarning className="overflow-x-hidden min-h-screen text-[var(--ink-strong)] antialiased selection:bg-[color:color-mix(in_srgb,var(--brand)_24%,transparent)] selection:text-white">
        <NavScrollEffect />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
