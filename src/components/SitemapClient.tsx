"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import { Map, Search, ArrowUpRight, Compass, Globe, FileText, ShieldCheck, Layers, Building2 } from "lucide-react";
import Link from "next/link";

interface SitemapCategory {
  category: string;
  icon: any;
  description: string;
  links: {
    name: string;
    href: string;
    description: string;
    badge?: string;
  }[];
}

const sitemapData: SitemapCategory[] = [
  {
    category: "Main Navigation",
    icon: Compass,
    description: "Core pages and primary sections of ON Next Web digital agency platform.",
    links: [
      { name: "Home", href: "/", description: "Digital studio homepage featuring services, process, and client work." },
      { name: "About Us", href: "/about-us", description: "Learn about our engineering philosophy, mission, and expert team." },
      { name: "Our Services", href: "/services", description: "Custom Next.js web development, mobile apps, software engineering, and SEO." },
      { name: "Web Development Services", href: "/services/web-development", description: "High-performance React & Next.js custom website development services.", badge: "New" },
      { name: "Custom Software Development Services", href: "/services/custom-software-development", description: "Scalable SaaS platforms, enterprise ERPs, and cloud microservices.", badge: "New" },
      { name: "SEO Services", href: "/services/seo-services", description: "Technical SEO audits, schema markup, and organic search optimization.", badge: "New" },
      { name: "Case Studies / Portfolio", href: "/portfolio", description: "Explore our portfolio of bespoke websites and enterprise applications." },
      { name: "Latest Blog", href: "/blog", description: "Tech insights, design trends, and modern web development tutorials." },
      { name: "Contact Us", href: "/contact", description: "Get in touch with our team for project inquiries and consultation." },
    ],
  },
  {
    category: "Location & Specialized Services",
    icon: Building2,
    description: "Targeted landing pages for regional tech services and custom solutions.",
    links: [
      { name: "Web Development Company in Delhi", href: "/website-development-company-in-delhi", description: "Tailored web engineering services in Delhi NCR." },
      { name: "Web Development Company in Gurgaon", href: "/website-development-company-in-gurgaon", description: "Enterprise web design and Next.js applications in Gurgaon." },
      { name: "Web Development Company in Noida", href: "/website-development-company-in-noida", description: "High-performance software and web solutions in Noida." },
      { name: "Custom Software Development India", href: "/custom-software-development-company-in-india", description: "Bespoke SaaS platforms and custom software engineering in India." },
      { name: "Digital Marketing Company in Delhi", href: "/digital-marketing-company-in-delhi", description: "SEO optimization, lead generation, and performance marketing." },
    ],
  },
  {
    category: "Legal & Corporate Policies",
    icon: ShieldCheck,
    description: "Our legal agreements, data privacy policies, and administrative links.",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy", description: "Data security practices, cookie policy, and user privacy rights.", badge: "New" },
      { name: "Terms of Service", href: "/terms-of-service", description: "Client agreements, project SOW terms, code ownership, and billing.", badge: "New" },
      { name: "HTML Sitemap", href: "/sitemap", description: "Complete visual map of all pages across ON Next Web website.", badge: "New" },
    ],
  },

];

export default function SitemapClient() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = sitemapData
    .map((cat) => {
      const matchingLinks = cat.links.filter(
        (link) =>
          link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          link.href.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...cat, links: matchingLinks };
    })
    .filter((cat) => cat.links.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute top-[15%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[25%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-purple-600/5 blur-[110px] pointer-events-none animate-float-reverse" />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6 relative z-10">
        {/* Header Hero */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6 uppercase tracking-wider backdrop-blur-sm"
          >
            <Map size={14} />
            Website Directory
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            HTML <span className="text-gradient">Sitemap</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Navigate all public pages, regional services, legal documents, and resource links across the ON Next Web platform.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-xl mx-auto"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search pages, services, or policies..."
              className="w-full bg-surface-elevated/40 border border-border/80 rounded-2xl px-5 py-4 pl-12 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-all duration-300 backdrop-blur-md shadow-lg"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 w-5 h-5 pointer-events-none" />
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {filteredData.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-2xl bg-surface-elevated/20 border border-border/50">
              <p className="text-muted-foreground text-lg mb-2">No matching pages found for "{searchTerm}"</p>
              <button
                onClick={() => setSearchTerm("")}
                className="text-primary font-medium text-sm hover:underline"
              >
                Clear search filter
              </button>
            </div>
          ) : (
            filteredData.map((cat, catIdx) => {
              const CategoryIcon = cat.icon;
              return (
                <AnimatedSection key={cat.category} delay={catIdx * 0.1}>
                  <div className="p-8 rounded-3xl bg-surface-elevated/30 border border-border/70 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <CategoryIcon size={20} />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-foreground">
                        {cat.category}
                      </h2>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 pl-13">
                      {cat.description}
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cat.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group p-5 rounded-2xl bg-surface/50 border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-base flex items-center gap-1.5">
                                {link.name}
                                {link.badge && (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/20 text-primary border border-primary/30">
                                    {link.badge}
                                  </span>
                                )}
                              </span>
                              <ArrowUpRight size={16} className="text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                              {link.description}
                            </p>
                          </div>
                          <span className="text-[11px] text-muted-foreground/50 font-mono mt-4 pt-2 border-t border-border/30 group-hover:text-primary/70 transition-colors">
                            {link.href}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
