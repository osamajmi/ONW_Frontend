import { MetadataRoute } from "next";

const BASE_URL = "https://www.onnextweb.in";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages do not currently have a reliable content-updated timestamp.
  // Omitting lastModified is more accurate than reporting "now" on every request.
  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about-us`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/web-development`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/services/custom-software-development`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/services/seo-services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/portfolio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/website-development-company-in-delhi`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/website-development-company-in-gurgaon`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/website-development-company-in-noida`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/custom-software-development-company-in-india`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/digital-marketing-company-in-delhi`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/terms-of-service`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/sitemap`, changeFrequency: "monthly", priority: 0.5 },
  ];

  let blogUrls: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${API_URL}/api/blogs`, {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const blogs = await res.json();
      blogUrls = blogs.map((blog: { _id: string; slug?: string; updatedAt?: string; createdAt?: string }) => {
        const modifiedAt = blog.updatedAt || blog.createdAt;

        return {
          url: `${BASE_URL}/blog/${blog.slug || blog._id}`,
          ...(modifiedAt ? { lastModified: new Date(modifiedAt) } : {}),
          changeFrequency: "weekly" as const,
          priority: 0.6,
        };
      });
    }
  } catch (error) {
    console.error("Sitemap blog fetch failed:", error);
  }

  return [...staticUrls, ...blogUrls];
}
