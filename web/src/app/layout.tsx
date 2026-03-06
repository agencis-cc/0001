import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Epilogue } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#05050A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Agencis - Comunicação & Digital | Do insight ao resultado",
  description: "Transformando desafios de mercado em resultados tangíveis através de inteligência estratégica, agilidade e criatividade assertiva. Branding, Performance e Digital 360º.",
  keywords: ["Agência Digital", "Branding", "Ribeirão Preto", "Marketing Digital", "Estratégia de Marca", "Design", "Performance"],
  authors: [{ name: "Agencis" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://agencis.com.br",
    title: "Agencis - Comunicação & Digital",
    description: "Digital that moves deeper - From idea to launch. Inteligência estratégica para marcas líderes.",
    siteName: "Agencis",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agencis - Comunicação & Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencis - Comunicação & Digital",
    description: "Digital that moves deeper - From idea to launch.",
    images: ["/images/og-image.jpg"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Agencis",
    "url": "https://agencis.com.br",
    "logo": "https://agencis.com.br/images/logo.png",
    "description": "Transformando desafios de mercado em resultados tangíveis através de inteligência estratégica.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Maria Jesus de Condeixa, 600 - Sala 735",
      "addressLocality": "Ribeirão Preto",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-16-3289-1573",
      "contactType": "sales",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    }
  };

  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${epilogue.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
