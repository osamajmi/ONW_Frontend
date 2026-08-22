import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LandingPageForm from "@/components/LandingPageForm";
import { 
  Cpu, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Phone, 
  Layers
} from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Custom Software Development Services | ON Next Web",
  description: "Accelerate operational efficiency with custom software development services. We build scalable SaaS platforms, ERP systems, and web apps. Contact us!",
  alternates: {
    canonical: "https://www.onnextweb.in/services/custom-software-development",
  },
  openGraph: {
    title: "Custom Software Development Services | ON Next Web",
    description: "Accelerate operational efficiency with custom software development services.",
    url: "https://www.onnextweb.in/services/custom-software-development",
    type: "website",
    images: [{ url: "https://www.onnextweb.in/dark-logo.png" }],
  },
};

export default function CustomSoftwareServicePage() {
  const faqs = [
    {
      q: "What types of custom software do you build?",
      a: "We design SaaS product MVPs, custom enterprise ERPs, CRM management platforms, automated business workflow software, and RESTful API microservices."
    },
    {
      q: "How do you ensure data security and IP protection?",
      a: "We sign strict mutual NDAs before reviewing sensitive business data. All code repositories are hosted on private Git environments with role-based access control and encrypted cloud server deployments."
    },
    {
      q: "Can you modernize an legacy software system?",
      a: "Yes. We specialize in refactoring legacy backend codebases into modular React/Next.js micro-frontends linked to high-speed Node API gateways."
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
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Custom Software Development" }]} />

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                  <Cpu size={14} /> Custom Software Engineering
                </span>
                
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  Scalable <br className="hidden sm:inline" />
                  <span className="text-gradient">Custom Software Development</span>
                </h1>
                
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                  Off-the-shelf software packages often force your team into rigid workflows. We build bespoke SaaS platforms, corporate ERPs, and automated web applications tailored precisely to your operational requirements.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#quote-form" className="bg-primary text-primary-foreground font-medium px-8 py-4 rounded-xl hover:glow-accent hover:bg-primary/95 transition-all duration-300 flex items-center gap-2 group text-base">
                    <span>Discuss Software Architecture</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link href="/custom-software-development-company-in-india" className="border border-border hover:border-primary/50 bg-surface-elevated/40 hover:bg-primary/5 text-foreground px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium">
                    <span>India Outsourcing Hub →</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5" id="quote-form">
                <div className="bg-surface-elevated/40 border border-border/80 backdrop-blur-md rounded-2xl p-8 relative overflow-hidden">
                  <LandingPageForm
                    title="Request Software Proposal"
                    subtitle="Get an architectural scoping document and transparent timeline within 2 hours."
                    buttonText="Submit Software Inquiry"
                    placeholderMessage="Enterprise CRM, SaaS MVP, or Cloud API Integration?"
                    sourcePage="Custom Software Service Silo"
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
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">Software Stack & Solutions</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Custom Software Capabilities</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "SaaS Product MVPs", desc: "Fast multi-tenant web application builds with automated user onboarding, subscription billing, and telemetry tracking." },
                { title: "Enterprise ERP & CRM", desc: "Bespoke internal management portals connecting inventory, lead management, and employee permissions." },
                { title: "Cloud Microservices API", desc: "High-concurrency Node.js REST and GraphQL API gateways deployed on secure AWS and Azure environments." }
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
            <h2 className="font-display text-3xl font-bold">Software Development FAQs</h2>
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
            "name": "Custom Software Development Services",
            "provider": {
              "@type": "Organization",
              "name": "ON Next Web",
              "url": "https://www.onnextweb.in"
            },
            "areaServed": "India",
            "description": "Bespoke SaaS, ERP, and enterprise software development services."
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
              { "@type": "ListItem", "position": 3, "name": "Custom Software Development", "item": "https://www.onnextweb.in/services/custom-software-development" }
            ]
          })
        }}
      />
    </div>
  );
}
