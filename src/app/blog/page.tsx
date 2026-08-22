import type { Metadata } from "next";
export const revalidate = 3600;
import BlogClient from "@/components/BlogClient";


const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_URL}/api/seo/blog`, {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      const seo = await res.json();
      return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
          canonical: "https://www.onnextweb.in/blog",
        },
        openGraph: {
          title: seo.ogTitle || seo.title,
          description: seo.ogDescription || seo.description,
          images: seo.ogImage ? [{ url: seo.ogImage }] : [],
        },
      };
    }
  } catch (error) {
    console.error("Error loading blog page SEO:", error);
  }
  return {
    title: "Blog & Tech Insights | OnNextWeb",
    description: "Read industry-leading articles, design trends, development best practices, and agency news from OnNextWeb.",
    alternates: {
      canonical: "https://www.onnextweb.in/blog",
    },
  };
}

export default async function Blog() {
  let blogs = [];

  try {
    const res = await fetch(`${API_URL}/api/blogs`, {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      blogs = await res.json();
    }
  } catch (error) {
    console.error("Error loading blog posts:", error);
  }

  return <BlogClient initialBlogs={blogs} />;
}
