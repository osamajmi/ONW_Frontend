import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import AboutUsClient from "@/components/AboutUsClient";


const defaultAbout = {
  title: "Crafting Digital",
  subtitle: "Excellence",
  description1: "We are a team of designers, developers, and strategists who build premium digital products. Every pixel matters. Every interaction counts.",
  description2: "From concept to launch, we partner with ambitious brands to create experiences that inspire and convert.",
  stats: [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 12, suffix: "", label: "Team Members" },
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch("http://localhost:5000/api/seo/about", {
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
    console.error("Error loading about page SEO:", error);
  }
  return {
    title: "About Us | Silver Point",
    description: "Learn about our creative process, our expert team, and how we deliver digital excellence.",
  };
}

export default async function AboutUs() {
  let data = defaultAbout;

  try {
    const res = await fetch("http://localhost:5000/api/about", {
      cache: "no-store"
    });
    if (res.ok) {
      data = await res.json();
    }
  } catch (error) {
    console.error("Error loading about us page content:", error);
  }

  return <AboutUsClient data={data} />;
}
