import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import PrivacyPolicyClient from "@/components/PrivacyPolicyClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_URL}/api/seo/privacy-policy`, {
      cache: "no-store",
    });
    if (res.ok) {
      const seo = await res.json();
      return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
          canonical: "https://www.onnextweb.in/privacy-policy",
        },
        openGraph: {
          title: seo.ogTitle || seo.title,
          description: seo.ogDescription || seo.description,
          images: seo.ogImage ? [{ url: seo.ogImage }] : [],
        },
      };
    }
  } catch (error) {
    console.error("Error loading privacy policy page SEO:", error);
  }
  return {
    title: "Privacy Policy | ON Next Web Digital Studio",
    description: "Read the ON Next Web privacy policy. Learn how we handle client data, cookies, security safeguards, and project confidentiality.",
    alternates: {
      canonical: "https://www.onnextweb.in/privacy-policy",
    },
  };
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
