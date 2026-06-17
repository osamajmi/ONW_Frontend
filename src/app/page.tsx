import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import Navbar from "@/components/Navbar";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

async function getHomeData() {
  let services = [];
  let projects = [];
  let testimonials = [];

  try {
    const sRes = await fetch("http://localhost:5000/api/services", { cache: "no-store" });
    if (sRes.ok) services = await sRes.json();
  } catch (error) {
    console.error("Error loading services for home:", error);
  }

  try {
    const pRes = await fetch("http://localhost:5000/api/projects", { cache: "no-store" });
    if (pRes.ok) projects = await pRes.json();
  } catch (error) {
    console.error("Error loading projects for home:", error);
  }

  try {
    const tRes = await fetch("http://localhost:5000/api/testimonials", { cache: "no-store" });
    if (tRes.ok) testimonials = await tRes.json();
  } catch (error) {
    console.error("Error loading testimonials for home:", error);
  }

  return { services, projects, testimonials };
}

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

export default async function Home() {
  const { services, projects, testimonials } = await getHomeData();

  return (
    <div className="bg-background text-foreground transition-colors duration-500 relative min-h-screen">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection initialServices={services} />
      <ProcessSection />
      <PortfolioSection initialProjects={projects} />
      <TestimonialsSection initialTestimonials={testimonials} />
      <ContactSection />
      <Footer />
    </div>
  );
}
