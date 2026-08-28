import type { Metadata } from "next";
export const revalidate = 3600;
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
      next: { revalidate: 3600 }
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
      next: { revalidate: 3600 }
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
  let breadcrumbSchema = null;

  if (blog) {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.onnextweb.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.onnextweb.in/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blog.title,
          "item": `https://www.onnextweb.in/blog/${blog.slug || blog._id}`
        }
      ]
    };

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
        "jobTitle": "Chief Technologist & Architect",
        "url": "https://www.onnextweb.in/about-us",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://www.onnextweb.in/#organization",
          "name": "ON Next Web"
        }
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
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
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
