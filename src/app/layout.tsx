import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onnextweb.in"),
  alternates: {
    canonical: "https://www.onnextweb.in",
  },
  title: {
    default: "ON Next Web | Premium Web Development & Software Studio",
    template: "%s",
  },
  description: "We build custom software, premium Next.js websites, and high-converting SEO strategies for ambitious global brands. Think Best, Think Next. Connect now!",
  keywords: [
    "web development company in India",
    "custom software development India",
    "website development company in Delhi",
    "website development company in Gurgaon",
    "website development company in Noida",
    "digital marketing company in Delhi",
    "Next.js development company",
    "UI/UX design India",
    "offshore software development India",
    "SaaS development company India",
    "ecommerce website development India",
    "React development agency",
    "branding agency Gurgaon",
    "premium digital studio India",
    "OnNextWeb",
  ],
  authors: [{ name: "ON Next Web", url: "https://www.onnextweb.in" }],
  creator: "ON Next Web",
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
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.onnextweb.in",
    siteName: "ON Next Web",
    title: "ON Next Web | Premium Digital Studio",
    description: "We craft modern websites, custom software, and premium brand designs. Think Best, Think Next.",
    images: [
      {
        url: "/dark-logo.png",
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
    images: ["/dark-logo.png"],
    creator: "@onnextweb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="h-full antialiased dark">
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
              "@id": "https://www.onnextweb.in/#organization",
              "name": "ON Next Web",
              "alternateName": "OnNextWeb",
              "url": "https://www.onnextweb.in",
              "logo": "https://www.onnextweb.in/dark-logo.png",
              "email": "info.onnextweb@gmail.com",
              "telephone": "+91-8765077474",
              "sameAs": [
                "https://www.linkedin.com/company/onnext-web/",
                "https://x.com/onnextweb",
                "https://www.instagram.com/onnextweb/",
                "https://dribbble.com/onnext-web"
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
              "@id": "https://www.onnextweb.in/#service",
              "name": "ON Next Web",
              "image": "https://www.onnextweb.in/dark-logo.png",
              "url": "https://www.onnextweb.in",
              "telephone": "+91-8765077474",
              "email": "info.onnextweb@gmail.com",
              "priceRange": "₹19999 - ₹150000",
              "parentOrganization": {
                "@id": "https://www.onnextweb.in/#organization"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C-25 Abul Fazal, Jamia Nagar, Okhla",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110025",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.5615,
                "longitude": 77.2842
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ON Next Web",
              "url": "https://www.onnextweb.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.onnextweb.in/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
