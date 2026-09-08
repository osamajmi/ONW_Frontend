import type { Metadata } from "next";
export const revalidate = 300;
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
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.onnextweb.in";

async function getHomeData() {
  let services = [];
  let projects = [];
  let testimonials = [];

  try {
    const sRes = await fetch(`${API_URL}/api/services`, { next: { revalidate: 300 } });
    if (sRes.ok) services = await sRes.json();
  } catch (error) {
    console.error("Error loading services for home:", error);
  }

  try {
    const pRes = await fetch(`${API_URL}/api/projects`, { next: { revalidate: 300 } });
    if (pRes.ok) projects = await pRes.json();
  } catch (error) {
    console.error("Error loading projects for home:", error);
  }

  try {
    const tRes = await fetch(`${API_URL}/api/testimonials`, { next: { revalidate: 300 } });
    if (tRes.ok) testimonials = await tRes.json();
  } catch (error) {
    console.error("Error loading testimonials for home:", error);
  }

  return { services, projects, testimonials };
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_URL}/api/seo/home`, {
      next: { revalidate: 3600 }
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
          url: "https://www.onnextweb.in",
          type: "website",
          images: seo.ogImage ? [{ url: seo.ogImage }] : [],
        },
      };
    }
  } catch (error) {
    console.error("Error loading home page SEO:", error);
  }
  return {
    title: "Web Development Company in India | ON Next Web",
    description: "ON Next Web builds high-performance websites and custom software for businesses in Delhi, Gurgaon, Noida and across India using Next.js, React and modern web technologies.",
    alternates: {
      canonical: "https://www.onnextweb.in",
    },
    openGraph: {
      title: "Web Development Company in India | ON Next Web",
      description: "High-performance website development and custom software for businesses across India.",
      url: "https://www.onnextweb.in",
      type: "website",
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
      
      {/* Location Links Bar for SEO & Internal Linking */}
      <section className="py-12 bg-surface-elevated/30 border-t border-b border-border/40">
        <div className="container mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">Serving Delhi NCR & Worldwide</p>
          <h2 className="text-xl md:text-2xl font-bold font-display">Web Development Services Across Delhi NCR & India</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium pt-2">
            <Link href="/website-development-company-in-delhi" className="px-4 py-2 rounded-xl bg-background border border-border/80 hover:border-primary text-muted-foreground hover:text-primary transition-all">
              Website Development Company in Delhi
            </Link>
            <Link href="/website-development-company-in-gurgaon" className="px-4 py-2 rounded-xl bg-background border border-border/80 hover:border-primary text-muted-foreground hover:text-primary transition-all">
              Web Development Company in Gurgaon
            </Link>
            <Link href="/website-development-company-in-noida" className="px-4 py-2 rounded-xl bg-background border border-border/80 hover:border-primary text-muted-foreground hover:text-primary transition-all">
              Web Development Company in Noida
            </Link>
            <Link href="/custom-software-development-company-in-india" className="px-4 py-2 rounded-xl bg-background border border-border/80 hover:border-primary text-muted-foreground hover:text-primary transition-all">
              Custom Software Development Company in India
            </Link>
            <Link href="/digital-marketing-company-in-delhi" className="px-4 py-2 rounded-xl bg-background border border-border/80 hover:border-primary text-muted-foreground hover:text-primary transition-all">
              Digital Marketing Company in Delhi
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection initialTestimonials={testimonials} />
      <ContactSection />
      <Footer />
    </div>
  );
}
