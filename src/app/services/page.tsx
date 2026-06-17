import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import ServicesClient from "@/components/ServicesClient";

interface ServiceItem {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch("http://localhost:5000/api/seo/services", {
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
    console.error("Error loading services page SEO:", error);
  }
  return {
    title: "Our Services | Silver Point",
    description: "Explore our smart web development, mobile apps, UI/UX design, custom software engineering, and SEO solutions.",
  };
}

export default async function ServicesPage() {
  let services: ServiceItem[] = [];

  try {
    const res = await fetch("http://localhost:5000/api/services", {
      cache: "no-store"
    });
    if (res.ok) {
      services = await res.json();
    }
  } catch (error) {
    console.error("Error loading services page content:", error);
  }

  return <ServicesClient services={services} />;
}
