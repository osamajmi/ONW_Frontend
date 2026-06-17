import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import PortfolioClient from "@/components/PortfolioClient";

interface ProjectItem {
  _id?: string;
  title: string;
  description: string;
  category: string;
  tags?: string[];
  coverImage?: string;
  projectUrl?: string;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch("https://api.onnextweb.in/api/seo/portfolio", {
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
    console.error("Error loading portfolio page SEO:", error);
  }
  return {
    title: "Our Portfolio | Silver Point",
    description: "Check out our premium creative case studies, custom web development, and digital applications.",
  };
}

export default async function PortfolioPage() {
  let projects: ProjectItem[] = [];

  try {
    const res = await fetch("https://api.onnextweb.in/api/projects", {
      cache: "no-store"
    });
    if (res.ok) {
      projects = await res.json();
    }
  } catch (error) {
    console.error("Error loading projects page content:", error);
  }

  return <PortfolioClient projects={projects} />;
}
