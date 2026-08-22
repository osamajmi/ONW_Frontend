import type { Metadata } from "next";
export const revalidate = 3600;
import ServicesClient from "@/components/ServicesClient";

interface ServiceItem {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_URL}/api/seo/services`, {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      const seo = await res.json();
      return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
          canonical: "https://www.onnextweb.in/services",
        },
        openGraph: {
          title: seo.ogTitle || seo.title,
          description: seo.ogDescription || seo.description,
          images: seo.ogImage ? [{ url: seo.ogImage }] : [],
        },
      };
    }
  } catch (error) {
    console.error("Error loading services page SEO:", error);
  }
  return {
    title: "Web Development & Custom Software Services | ON Next Web",
    description: "Full-service web development, custom software engineering, mobile apps, and digital marketing services in Delhi NCR & India. Speed-optimized digital builds.",
    alternates: {
      canonical: "https://www.onnextweb.in/services",
    },
  };
}

export default async function ServicesPage() {
  let services: ServiceItem[] = [];

  try {
    const res = await fetch(`${API_URL}/api/services`, {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      services = await res.json();
    }
  } catch (error) {
    console.error("Error loading services page content:", error);
  }

  return (
    <>
      <ServicesClient services={services} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.onnextweb.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.onnextweb.in/services"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web & Mobile App Development Services",
            "serviceType": "Software Development & Digital Marketing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "ON Next Web",
              "url": "https://www.onnextweb.in"
            },
            "areaServed": {
              "@type": "Country",
              "name": "IN"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "OnNextWeb Agency Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Design & Development",
                    "description": "Bespoke Next.js, React, and WordPress website development tailored for business scaling."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Cross-platform Flutter & React Native mobile app development for Android & iOS."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Search Engine Optimization (SEO)",
                    "description": "Organic SEO, keyword research, local citation building, and conversion optimization."
                  }
                }
              ]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the cost of website development in Delhi NCR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Website development costs depend on project scope, custom design requirements, and technology stack. Typically, a custom Next.js website design at OnNextWeb starts from ₹19,999."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to develop a custom mobile application?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard cross-platform apps (React Native/Flutter) take 8 to 16 weeks depending on complex features like API integrations, user accounts, and real-time functions."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide customized SEO services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, OnNextWeb offers customized SEO packages focusing on local SEO, technical audits, on-page optimization, and generating high-intent leads for startups and SMEs."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
