import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import ContactClient from "@/components/ContactClient";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch("https://api.onnextweb.in/api/seo/contact", {
      cache: "no-store"
    });
    if (res.ok) {
      const seo = await res.json();
      return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
          canonical: "https://onnextweb.in/contact",
        },
        openGraph: {
          title: seo.ogTitle || seo.title,
          description: seo.ogDescription || seo.description,
          images: seo.ogImage ? [{ url: seo.ogImage }] : [],
        },
      };
    }
  } catch (error) {
    console.error("Error loading contact page SEO:", error);
  }
  return {
    title: "Contact OnNextWeb | Project Consultation & Quote",
    description: "Get in touch with OnNextWeb. Let's discuss your next project, custom website, or custom software requirements.",
    alternates: {
      canonical: "https://onnextweb.in/contact",
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
