import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/dashboard", // Disallow search engine crawlers from scanning private dashboard pages
        "/login",
        "/api/",
      ],
    },
    sitemap: "http://localhost:3000/sitemap.xml",
  };
}
