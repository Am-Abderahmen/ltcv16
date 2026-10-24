import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./lib/LangContext";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lestroiscoins.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Les Trois Coins SARL — Nettoyage, Débarras & Services à domicile — Lausanne",
    template: "%s | Les Trois Coins SARL",
  },
  description:
    "Les Trois Coins SARL : débarras, nettoyage, aménagement, menuiserie et bricolage à Lausanne et dans le canton de Vaud. Intervention rapide, devis gratuit. ☎ +41 76 823 89 10",
  keywords: [
    "nettoyage Lausanne",
    "débarras Lausanne",
    "nettoyage Vaud",
    "débarras Vaud",
    "aménagement Lausanne",
    "menuiserie Lausanne",
    "bricolage Lausanne",
    "services à domicile Suisse",
    "Les Trois Coins SARL",
    "entreprise nettoyage Lausanne",
  ],
  authors: [{ name: "Les Trois Coins SARL" }],
  creator: "Les Trois Coins SARL",
  publisher: "Les Trois Coins SARL",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: SITE_URL,
    siteName: "Les Trois Coins SARL",
    title: "Les Trois Coins SARL — Services à domicile à Lausanne",
    description:
      "Débarras, nettoyage, aménagement, menuiserie et bricolage. Lausanne et canton de Vaud. Un seul contact, zéro stress.",
    images: [
      {
        url: "/assets/slider/nettoyage.webp",
        width: 1200,
        height: 630,
        alt: "Les Trois Coins SARL — Services à domicile Lausanne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Les Trois Coins SARL — Services à domicile Lausanne",
    description:
      "Débarras, nettoyage, aménagement, menuiserie et bricolage à Lausanne. Devis gratuit.",
    images: ["/assets/slider/nettoyage.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "Les Trois Coins SARL",
  description:
    "Débarras, nettoyage, aménagement, menuiserie et bricolage à Lausanne et dans le canton de Vaud.",
  url: SITE_URL,
  telephone: "+41768238910",
  email: "Lestroiscoins@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenue de la Chablière 21",
    addressLocality: "Lausanne",
    postalCode: "1004",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.5197,
    longitude: 6.6323,
  },
  areaServed: {
    "@type": "State",
    name: "Canton de Vaud",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
  priceRange: "$$",
  image: `${SITE_URL}/assets/logo/logo-les-trois-coins.png`,
  sameAs: [`https://wa.me/41768238910`],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased grain">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
