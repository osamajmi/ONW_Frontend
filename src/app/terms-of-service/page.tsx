import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import TermsOfServiceClient from "@/components/TermsOfServiceClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_URL}/api/seo/terms-of-service`, {
      cache: "no-store",
    });
    if (res.ok) {
      const seo = await res.json();
      return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
          canonical: "https://www.onnextweb.in/terms-of-service",
        },
        openGraph: {
          title: seo.ogTitle || seo.title,
          description: seo.ogDescription || seo.description,
          images: seo.ogImage ? [{ url: seo.ogImage }] : [],
        },
      };
    }
  } catch (error) {
    console.error("Error loading terms of service page SEO:", error);
  }
  return {
    title: "Terms of Service | ON Next Web Digital Studio",
    description: "Read the ON Next Web terms of service. Understand our project agreements, code ownership transfer, billing terms, and governing laws.",
    alternates: {
      canonical: "https://www.onnextweb.in/terms-of-service",
    },
  };
}

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />;
}
