import type { Metadata } from "next";
export const revalidate = 3600;
import ContactClient from "@/components/ContactClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_URL}/api/seo/contact`, {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      const seo = await res.json();
      return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
          canonical: "https://www.onnextweb.in/contact",
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
      canonical: "https://www.onnextweb.in/contact",
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
