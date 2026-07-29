import React from "react";
import type { Metadata } from "next";
import { LanguageProvider } from "../context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jahangirnagar Air International (JAI) - Gateway to Global Opportunities",
  description: "Jahangirnagar Air International (JAI) is an elite corporate travel agency and visa consulting firm. Expert guidance on Hajj & Umrah services, Student Visas, Work Permits, and Immigration.",
  metadataBase: new URL("https://www.jai-travel.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    alternateLocale: "en_US",
    url: "https://www.jai-travel.com",
    title: "Jahangirnagar Air International (JAI) - Gateway to Global Opportunities",
    description: "Your premier corporate partner for Hajj & Umrah services, Student Visa, Work Permit guidelines, and worldwide ticketing with absolute transparency.",
    siteName: "Jahangirnagar Air International",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "JAI Logo Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahangirnagar Air International (JAI)",
    description: "Premium corporate travel consulting, Hajj & Umrah services, higher education visa, and immigration guideline.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Jahangirnagar Air International",
  "alternateName": "JAI",
  "url": "https://www.jai-travel.com",
  "logo": "https://www.jai-travel.com/images/logo.png",
  "image": "https://www.jai-travel.com/images/umrah.jpg",
  "description": "Premium corporate travel agency and consulting firm specializing in Hajj & Umrah services, student visa application, work permit guidelines, and immigration services in Bangladesh.",
  "telephone": ["+8801971941428", "+8801711941428", "+8801835922789"],
  "email": "info.jai.bd@gmail.com",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "গাজীর খামার বাজার, কৃষি ব্যাংকের নিচ তলা, তোফাজ্জল ইলেকট্রনিক-এর নিচে",
      "addressLocality": "Sherpur",
      "addressCountry": "BD",
      "contactType": "Head Office"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "ন্যাশনাল স্ট্যান্ডার্ড স্কুল অ্যান্ড কলেজ, বাড়ি # ১৪, রোড # ৪, ডি ব্লক, বনশ্রী, রামপুরা",
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka Division",
      "addressCountry": "BD",
      "contactType": "Dhaka Office"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61560946221447"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/logo.png" type="image/png" />
        
        {/* Browser CDN Fonts (Inter and Hind Siliguri) loaded dynamically */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Script injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="bg-navy-dark text-gray-100 antialiased selection:bg-gold/30 selection:text-white"
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
