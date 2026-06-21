import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://onnextweb.in"),
  alternates: {
    canonical: "https://onnextweb.in",
  },
  title: {
    default: "ON Next Web | Premium Digital Studio",
    template: "%s | ON Next Web",
  },
  description: "We craft modern websites, custom software, and premium brand designs engineered for ambitious brands. Think Best, Think Next.",
  keywords: ["web development", "UI/UX design", "custom software", "Next.js", "branding", "digital studio", "India"],
  authors: [{ name: "ON Next Web", url: "https://onnextweb.in" }],
  creator: "ON Next Web",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://onnextweb.in",
    siteName: "ON Next Web",
    title: "ON Next Web | Premium Digital Studio",
    description: "We craft modern websites, custom software, and premium brand designs. Think Best, Think Next.",
    images: [
      {
        url: "/dark logo.png",
        width: 1200,
        height: 630,
        alt: "ON Next Web — Premium Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ON Next Web | Premium Digital Studio",
    description: "We craft modern websites, custom software, and premium brand designs.",
    images: ["/dark logo.png"],
    creator: "@onnextweb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>{children}</Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6R61262N0W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6R61262N0W');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5Z5FXQZG');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ON Next Web",
              "alternateName": "OnNextWeb",
              "url": "https://onnextweb.in",
              "logo": "https://onnextweb.in/dark%20logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/onnextweb",
                "https://twitter.com/onnextweb"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ON Next Web",
              "image": "https://onnextweb.in/dark%20logo.png",
              "@id": "https://onnextweb.in/#localbusiness",
              "url": "https://onnextweb.in",
              "telephone": "+91-XXXXXXXXXX",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Golf Course Road, Sector 54",
                "addressLocality": "Gurgaon",
                "addressRegion": "Haryana",
                "postalCode": "122002",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.4389,
                "longitude": 77.1054
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
