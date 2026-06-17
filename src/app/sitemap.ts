import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "http://localhost:3000"; // Frontend url

  // Static URLs
  const staticUrls = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  // Fetch blogs dynamically from the backend to construct dynamic sitemap routes
  let blogUrls: any[] = [];
  try {
    const res = await fetch("https://api.onnextweb.in/api/blogs", {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (res.ok) {
      const blogs = await res.json();
      blogUrls = blogs.map((blog: any) => ({
        url: `${baseUrl}/blog/${blog._id}`,
        lastModified: new Date(blog.updatedAt || blog.createdAt),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error("Sitemap dynamic blog fetching failed:", error);
  }

  return [...staticUrls, ...blogUrls];
}
