import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import BlogDetailClient from "@/components/BlogDetailClient";

interface PageProps {


  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const res = await fetch(`https://api.onnextweb.in/api/blogs/${id}`, {
      cache: "no-store"
    });
    if (res.ok) {
      const blog = await res.json();
      return {
        title: `${blog.title} | OnNextWeb Blog`,
        description: blog.summary,
        alternates: {
          canonical: `https://www.onnextweb.in/blog/${id}`,
        },
        openGraph: {
          title: blog.title,
          description: blog.summary,
          images: blog.coverImage ? [{ url: blog.coverImage }] : [],
        },
      };
    }
  } catch (error) {
    console.error("Error loading dynamic blog post SEO:", error);
  }
  return {
    title: "Blog Post | OnNextWeb",
    description: "Read the article details.",
    alternates: {
      canonical: `https://www.onnextweb.in/blog/${id}`,
    },
  };
}

export default async function BlogDetail({ params }: PageProps) {
  const { id } = await params;
  let blog = null;

  try {
    const res = await fetch(`https://api.onnextweb.in/api/blogs/${id}`, {
      cache: "no-store"
    });
    if (res.ok) {
      blog = await res.json();
    }
  } catch (error) {
    console.error("Error loading blog details:", error);
  }

  return <BlogDetailClient blog={blog} />;
}
