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

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";

async function getHomeData() {
  let services = [];
  let projects = [];
  let testimonials = [];

  try {
    const sRes = await fetch(`${API_URL}/api/services`, { cache: "no-store" });
    if (sRes.ok) services = await sRes.json();
  } catch (error) {
    console.error("Error loading services for home:", error);
  }

  try {
    const pRes = await fetch(`${API_URL}/api/projects`, { cache: "no-store" });
    if (pRes.ok) projects = await pRes.json();
  } catch (error) {
    console.error("Error loading projects for home:", error);
  }

  try {
    const tRes = await fetch(`${API_URL}/api/testimonials`, { cache: "no-store" });
    if (tRes.ok) testimonials = await tRes.json();
  } catch (error) {
    console.error("Error loading testimonials for home:", error);
  }

  return { services, projects, testimonials };
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_URL}/api/seo/home`, {
      cache: "no-store"
    });
    if (res.ok) {
      const seo = await res.json();
      return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
          canonical: "https://www.onnextweb.in",
        },
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
    title: "ON Next Web | Premium Web Development & Mobile App Agency",
    description: "Bespoke website design, custom software engineering, and mobile app development (iOS & Android) in Gurgaon & Delhi NCR. Build speed-optimized digital solutions today.",
    alternates: {
      canonical: "https://www.onnextweb.in",
    },
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
