import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import Navbar from "@/components/Navbar";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch("http://localhost:5000/api/seo/home", {
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
    console.error("Error loading home page SEO:", error);
  }
  return {
    title: "Silver Point | Premium Creative Studio",
    description: "Crafting modern digital products, interactive websites, and premium brand designs.",
  };
}

export default function Home() {
  return (
    <div className="bg-background text-foreground transition-colors duration-500 relative min-h-screen">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
