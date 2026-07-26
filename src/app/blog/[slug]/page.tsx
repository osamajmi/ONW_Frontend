import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import BlogDetailClient from "@/components/BlogDetailClient";
import { permanentRedirect } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const res = await fetch(`${API_URL}/api/blogs/${slug}`, {
      cache: "no-store"
    });
    if (res.ok) {
      const blog = await res.json();
      return {
        title: `${blog.title} | OnNextWeb Blog`,
        description: blog.summary,
        alternates: {
          canonical: `https://www.onnextweb.in/blog/${blog.slug || blog._id}`,
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
      canonical: `https://www.onnextweb.in/blog/${slug}`,
    },
  };
}

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;
  let blog = null;

  try {
    const res = await fetch(`${API_URL}/api/blogs/${slug}`, {
      cache: "no-store"
    });
    if (res.ok) {
      blog = await res.json();
    }
  } catch (error) {
    console.error("Error loading blog details:", error);
  }

  // ─── 301 Permanent Redirect Strategy ──────────────────────────────────────────
  // If the request parameter matches MongoDB 24-character hex ID, redirect to clean slug URL
  if (blog && /^[0-9a-fA-F]{24}$/.test(slug) && blog.slug) {
    permanentRedirect(`/blog/${blog.slug}`);
  }

  // ─── JSON-LD Structured Data Schema Generation ───────────────────────────────
  let blogPostingSchema = null;
  let faqSchema = null;

  if (blog) {
    blogPostingSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.summary,
      "image": blog.coverImage || "https://www.onnextweb.in/dark-logo.png",
      "datePublished": blog.createdAt,
      "dateModified": blog.updatedAt || blog.createdAt,
      "author": {
        "@type": "Person",
        "name": blog.author || "MD Osama Khan",
        "url": "https://www.onnextweb.in/about-us"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ON Next Web",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.onnextweb.in/dark-logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.onnextweb.in/blog/${blog.slug || blog._id}`
      }
    };

    if (blog.faqs && blog.faqs.length > 0) {
      faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": blog.faqs.map((faq: { question: string; answer: string }) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
    }
  }

  return (
    <>
      {blogPostingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogDetailClient blog={blog} />
    </>
  );
}
