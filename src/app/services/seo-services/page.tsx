import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LandingPageForm from "@/components/LandingPageForm";
import { 
  Search, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  BarChart3, 
  Phone, 
  Globe
} from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Technical & On-Page SEO Services in India | ON Next Web",
  description: "Secure Page 1 Google search visibility with technical SEO services in India. Crawl error auditing, Next.js speed optimization, schema injection, and search intent keyword strategy.",
  alternates: {
    canonical: "https://www.onnextweb.in/services/seo-services",
  },
  openGraph: {
    title: "Technical & On-Page SEO Services in India | ON Next Web",
    description: "Secure Page 1 Google search visibility with technical SEO services in India.",
    url: "https://www.onnextweb.in/services/seo-services",
    type: "website",
    images: [{ url: "https://www.onnextweb.in/dark-logo.png" }],
  },
};

export default function SeoServicesPage() {
  const faqs = [
    {
      q: "How fast can technical SEO improvements deliver Google search results?",
      a: "Technical crawlers fixes, Core Web Vitals optimizations, and canonical domain alignment typically show initial impressions movement within 3 to 6 weeks. Target keyword rankings compound continuously over 3 to 6 months."
    },
    {
      q: "What is included in your technical SEO audits?",
      a: "We inspect server response times (TTFB), mobile indexing errors, structured JSON-LD schemas, sitemap validation, canonical tags, internal linking architecture, and duplicate content risks."
    },
    {
      q: "Do you focus on local SEO for Delhi NCR businesses?",
      a: "Yes. We configure localized service-area landing pages, Google Business Profile alignment, and geo-targeted JSON-LD schemas to capture high-intent regional search traffic."
    }
  ];

  return (
    <div className="bg-background text-foreground transition-colors duration-500 relative min-h-screen">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />

      <main className="pt-28 pb-20 relative z-10">
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "SEO Services" }]} />

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                  <Search size={14} /> Organic Search Engine Optimization
                </span>
                
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  Technical & Commercial <br className="hidden sm:inline" />
                  <span className="text-gradient">SEO Services in India</span>
                </h1>
                
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                  A beautiful website is ineffective if target clients cannot discover it on Google. We deliver data-backed technical SEO, structured JSON-LD schema integration, and high-intent topical content hubs that earn top search rankings.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#quote-form" className="bg-primary text-primary-foreground font-medium px-8 py-4 rounded-xl hover:glow-accent hover:bg-primary/95 transition-all duration-300 flex items-center gap-2 group text-base">
                    <span>Get Free Technical SEO Audit</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link href="/digital-marketing-company-in-delhi" className="border border-border hover:border-primary/50 bg-surface-elevated/40 hover:bg-primary/5 text-foreground px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium">
                    <span>Delhi Digital Marketing Hub →</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5" id="quote-form">
                <div className="bg-surface-elevated/40 border border-border/80 backdrop-blur-md rounded-2xl p-8 relative overflow-hidden">
                  <LandingPageForm
                    title="Request Technical SEO Audit"
                    subtitle="Our search engineers will analyze your site and send a 15-point diagnostic report."
                    buttonText="Claim Free Audit Report"
                    placeholderMessage="Enter your website URL and target search keywords..."
                    sourcePage="SEO Services Silo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE OFFERINGS */}
        <section className="py-20 border-t border-border/40 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center space-y-4 mb-16">
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">SEO Engineering Pillars</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Our SEO Services Breakdown</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Technical SEO Audits", desc: "Clean crawl errors, fix canonical domain conflicts, optimize sitemaps, and accelerate Core Web Vitals performance." },
                { title: "Structured JSON-LD Schema", desc: "Inject precise Organization, LocalBusiness, BreadcrumbList, and FAQPage schemas to qualify for rich search snippets." },
                { title: "Topical Authority & Clusters", desc: "Build comprehensive content hubs with logical internal link silos connecting supporting articles to revenue money pages." }
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

        {/* FAQ SECTION */}
        <section className="py-20 container mx-auto px-6 max-w-3xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl font-bold">SEO Services FAQs</h2>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.onnextweb.in/services/seo-services#service",
            "name": "SEO & Technical Search Services",
            "provider": {
              "@type": "Organization",
              "@id": "https://www.onnextweb.in/#organization",
              "name": "ON Next Web",
              "url": "https://www.onnextweb.in"
            },
            "serviceType": "Search Engine Optimization",
            "areaServed": "India",
            "description": "Technical and commercial Search Engine Optimization services in India."
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
              { "@type": "ListItem", "position": 3, "name": "SEO Services", "item": "https://www.onnextweb.in/services/seo-services" }
            ]
          })
        }}
      />
    </div>
  );
}
