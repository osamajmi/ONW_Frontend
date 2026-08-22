import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LandingPageForm from "@/components/LandingPageForm";
import { 
  Code2, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Layers, 
  Phone, 
  MessageSquare,
  Sparkles
} from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Web Development Services in India | ON Next Web",
  description: "Transform your business with high-speed, SEO-friendly custom web development services in India. Built with Next.js, React, and modern tech stacks. Get a free proposal!",
  alternates: {
    canonical: "https://www.onnextweb.in/services/web-development",
  },
  openGraph: {
    title: "Web Development Services in India | ON Next Web",
    description: "Transform your business with high-speed, SEO-friendly custom web development services in India.",
    url: "https://www.onnextweb.in/services/web-development",
    type: "website",
    images: [{ url: "https://www.onnextweb.in/dark-logo.png" }],
  },
};

export default function WebDevelopmentServicePage() {
  const faqs = [
    {
      q: "What technologies do you use for web development?",
      a: "We primary build using modern React and Next.js App Router frameworks with TypeScript and TailwindCSS. For backend integrations, we deploy Node.js, Express, MongoDB, and headless CMS configurations."
    },
    {
      q: "How long does a custom web development project take?",
      a: "Standard business websites are delivered within 7 to 14 business days. Custom enterprise portals, complex e-commerce stores, and web applications typically take 3 to 6 weeks."
    },
    {
      q: "Will my website be search engine optimized (SEO-ready)?",
      a: "Yes. All web development projects include semantic HTML5 structure, structured JSON-LD schemas, Core Web Vitals optimization, and fast static generation out of the box."
    },
    {
      q: "Do you provide full source code ownership?",
      a: "Absolutely. Upon final project launch, full Git repository access and deployment credentials are handed directly to your team with zero vendor lock-in."
    }
  ];

  return (
    <div className="bg-background text-foreground transition-colors duration-500 relative min-h-screen">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />

      <main className="pt-28 pb-20 relative z-10">
        {/* HERO SECTION */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Web Development" }]} />

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                  <Code2 size={14} /> Full-Stack Web Development Engineering
                </span>
                
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  High-Performance <br className="hidden sm:inline" />
                  <span className="text-gradient">Web Development Services</span>
                </h1>
                
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                  Businesses need fast, reliable websites designed around their customers&apos; needs. We engineer custom Next.js websites and web applications that load under 1 second, rank on Google, and convert visitors into long-term clients.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#quote-form" className="bg-primary text-primary-foreground font-medium px-8 py-4 rounded-xl hover:glow-accent hover:bg-primary/95 transition-all duration-300 flex items-center gap-2 group text-base">
                    <span>Request Web Proposal</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="tel:+918765077474" className="border border-border hover:border-primary/50 bg-surface-elevated/40 hover:bg-primary/5 text-foreground px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium">
                    <Phone size={16} className="text-primary" />
                    <span>+91 8765077474</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5" id="quote-form">
                <div className="bg-surface-elevated/40 border border-border/80 backdrop-blur-md rounded-2xl p-8 relative overflow-hidden">
                  <LandingPageForm
                    title="Scope Your Web Project"
                    subtitle="Receive a technical roadmap and transparent cost estimate within 2 hours."
                    buttonText="Get Instant Estimate"
                    placeholderMessage="Describe your web requirements (e.g. Next.js corporate site, e-commerce app)..."
                    sourcePage="Web Development Service Silo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="py-20 border-t border-border/40 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center space-y-4 mb-16">
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">Service Capabilities</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Custom Web Solutions We Deliver</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Custom Next.js Websites", desc: "Ultra-fast corporate websites engineered with App Router, SSR/ISR caching, and clean dark mode aesthetics." },
                { title: "E-Commerce Applications", desc: "Scalable online stores with instant cart updates, secure payment gateways, and custom inventory dashboards." },
                { title: "Bespoke Web Portals", desc: "Custom B2B client portals, SaaS frontends, and dynamic dashboards tailored to complex business workflows." }
              ].map((item, idx) => (
                <div key={idx} className="bg-surface-elevated/20 border border-border/60 p-8 rounded-2xl space-y-4 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGIONAL HUB CROSS LINKS */}
        <section className="py-16 bg-surface/50 border-t border-b border-border/40">
          <div className="container mx-auto px-6 max-w-5xl text-center space-y-6">
            <h3 className="font-display text-2xl font-bold">Regional Development Hubs</h3>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              Looking for localized development support in NCR? Explore our specialized regional agency hubs:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <Link href="/website-development-company-in-delhi" className="bg-background border border-border px-5 py-3 rounded-xl hover:border-primary transition-all">
                Website Development Company in Delhi →
              </Link>
              <Link href="/website-development-company-in-gurgaon" className="bg-background border border-border px-5 py-3 rounded-xl hover:border-primary transition-all">
                Web Development Company in Gurgaon →
              </Link>
              <Link href="/website-development-company-in-noida" className="bg-background border border-border px-5 py-3 rounded-xl hover:border-primary transition-all">
                Web Development Company in Noida →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 container mx-auto px-6 max-w-3xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl font-bold">Web Development FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-border bg-surface-elevated/20 rounded-xl overflow-hidden cursor-pointer">
                <summary className="flex items-center justify-between p-5 text-sm font-bold select-none group-open:bg-primary/5 transition-colors">
                  <span>{faq.q}</span>
                  <ChevronRight size={18} className="text-primary group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-5 border-t border-border/60 text-xs text-muted-foreground leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Development Services",
            "provider": {
              "@type": "Organization",
              "name": "ON Next Web",
              "url": "https://www.onnextweb.in"
            },
            "areaServed": "India",
            "description": "Custom Next.js and React website development services in India."
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.onnextweb.in" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.onnextweb.in/services" },
              { "@type": "ListItem", "position": 3, "name": "Web Development", "item": "https://www.onnextweb.in/services/web-development" }
            ]
          })
        }}
      />
    </div>
  );
}
