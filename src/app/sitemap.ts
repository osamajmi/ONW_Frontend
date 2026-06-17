import { MetadataRoute } from "next";

const BASE_URL = "https://onnextweb.in";
const API_URL  = "https://api.onnextweb.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // ── Static pages ──────────────────────────────────────────────────────────
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // ── Dynamic blog pages ────────────────────────────────────────────────────
  let blogUrls: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${API_URL}/api/blogs`, {
      next: { revalidate: 3600 }, // revalidate every hour
    });
    if (res.ok) {
      const blogs = await res.json();
      blogUrls = blogs.map((blog: { _id: string; updatedAt?: string; createdAt?: string }) => ({
        url: `${BASE_URL}/blog/${blog._id}`,
        lastModified: new Date(blog.updatedAt || blog.createdAt || Date.now()),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error("Sitemap blog fetch failed:", error);
  }

  return [...staticUrls, ...blogUrls];
}

