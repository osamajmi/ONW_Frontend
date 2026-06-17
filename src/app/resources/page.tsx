import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import ResourcesClient from "@/components/ResourcesClient";


export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch("https://api.onnextweb.in/api/seo/resources", {
      cache: "no-store"
    });
    if (res.ok) {
      const seo = await res.json();
      return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: {
          title: seo.ogTitle || seo.title,
          description: seo.ogDescription || seo.description,
          images: seo.ogImage ? [{ url: seo.ogImage }] : [],
        },
      };
    }
  } catch (error) {
    console.error("Error loading resources page SEO:", error);
  }
  return {
    title: "Resource Library | Silver Point",
    description: "Download templates, presentation decks, contracts, and guideline PDF documents.",
  };
}

export default async function Resources() {
  let pdfs = [];

  try {
    const res = await fetch("https://api.onnextweb.in/api/pdfs", {
      cache: "no-store"
    });
    if (res.ok) {
      pdfs = await res.json();
    }
  } catch (error) {
    console.error("Error loading PDFs:", error);
  }

  return <ResourcesClient pdfs={pdfs} />;
}
