import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import SitemapClient from "@/components/SitemapClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_URL}/api/seo/sitemap`, {
      cache: "no-store",
    });
    if (res.ok) {
      const seo = await res.json();
      return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
          canonical: "https://www.onnextweb.in/sitemap",
        },
        openGraph: {
          title: seo.ogTitle || seo.title,
          description: seo.ogDescription || seo.description,
          images: seo.ogImage ? [{ url: seo.ogImage }] : [],
        },
      };
    }
  } catch (error) {
    console.error("Error loading sitemap page SEO:", error);
  }
  return {
    title: "Sitemap | ON Next Web Digital Studio Directory",
    description: "Browse the HTML sitemap directory of ON Next Web. Access all primary pages, location landing pages, services, blogs, and legal policies.",
    alternates: {
      canonical: "https://www.onnextweb.in/sitemap",
    },
  };
}

export default function SitemapPage() {
  return <SitemapClient />;
}
