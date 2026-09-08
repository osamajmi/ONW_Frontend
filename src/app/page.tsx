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
    title: "Website Development Company in India | ON Next Web",
    description: "Website development company building fast business websites, ecommerce platforms and custom web applications for Delhi, Noida, Gurgaon and businesses across India.",
    alternates: {
      canonical: "https://www.onnextweb.in",
    },
    openGraph: {
      title: "Website Development Company in India | ON Next Web",
      description: "Custom website development and software solutions for businesses across Delhi NCR and India.",
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

      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-5">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">Website Development Company</p>
          <h2 className="text-2xl md:text-3xl font-bold font-display">Custom Website Development for Businesses in India</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            ON Next Web develops business websites, ecommerce experiences and custom web applications using modern technologies such as Next.js and React. We serve businesses across Delhi, Noida, Gurgaon and other parts of India, with a focus on performance, maintainable code and search-friendly website foundations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/services/web-development" className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all">
              Explore Web Development Services
            </Link>
            <Link href="/portfolio" className="px-5 py-3 rounded-xl border border-border font-medium hover:border-primary transition-all">
              View Website Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* Location Links Bar for SEO & Internal Linking */}
      <section className="py-12 bg-surface-elevated/30 border-t border-b border-border/40">
        <div className="container mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">Serving Delhi NCR & India</p>
          <h2 className="text-xl md:text-2xl font-bold font-display">Website Development Services Across Delhi NCR & India</h2>
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
