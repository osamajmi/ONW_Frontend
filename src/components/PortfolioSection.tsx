"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import { ArrowRight, Globe, ShoppingBag, Cpu, Layers } from "lucide-react";

interface ProjectItem {
  _id?: string;
  title: string;
  description: string;
  category: string;
  tags?: string[];
  coverImage?: string;
  projectUrl?: string;
}

const buildCapabilities = [
  {
    title: "Business & Corporate Websites",
    category: "Web Development",
    description: "High-speed corporate portals and brand websites engineered with Next.js, semantic HTML5, and automated search engine optimization.",
    services: "Custom UI/UX Design, Core Web Vitals Optimization, Headless CMS Integration",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "/services/web-development",
    icon: Globe,
  },
  {
    title: "Ecommerce Platforms",
    category: "Online Storefronts",
    description: "Custom online store architectures engineered for fast page loads, fluid cart interactions, secure checkout integration, and conversion optimization.",
    services: "Storefront Engineering, Payment Gateway Integration, Product Catalogs",
    tech: ["Next.js", "React", "Node.js", "Stripe API"],
    href: "/services/web-development",
    icon: ShoppingBag,
  },
  {
    title: "Custom Web Applications",
    category: "Full-Stack Software",
    description: "Enterprise web applications, client management portals, and workflow automation systems built for complex business operations.",
    services: "Full-Stack Architecture, Database Modeling, RESTful & GraphQL APIs",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    href: "/services/custom-software-development",
    icon: Cpu,
  },
  {
    title: "SaaS Products & Platforms",
    category: "Cloud Systems",
    description: "Modern Software-as-a-Service platforms built with multi-tenant database models, subscription management, and scalable cloud infrastructure.",
    services: "SaaS MVP Development, Multi-Tenant Architecture, Billing Pipelines",
    tech: ["Next.js", "React Native", "AWS", "PostgreSQL"],
    href: "/services/custom-software-development",
    icon: Layers,
  }
];

const PortfolioSection = ({ initialProjects }: { initialProjects?: ProjectItem[] }) => {
  const verifiedProjects = initialProjects && initialProjects.length > 0 
    ? initialProjects.filter((p) => !p.projectUrl || !p.projectUrl.includes("example.com"))
    : [];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gradient-section">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            {verifiedProjects.length > 0 ? "Selected Work" : "What We Build"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {verifiedProjects.length > 0 ? (
              <>Featured <span className="text-gradient">Projects</span></>
            ) : (
              <>Solutions &amp; <span className="text-gradient">Capabilities</span></>
            )}
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            {verifiedProjects.length > 0
              ? "Verified client projects engineered for high performance and business impact."
              : "We design and engineer bespoke web platforms, custom software architectures, and scalable digital solutions."}
          </p>
        </AnimatedSection>

        {verifiedProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verifiedProjects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-6 h-full flex flex-col justify-between hover-lift border border-border/40"
                >
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline mt-4"
                    >
                      View Project <ArrowRight size={14} />
                    </a>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {buildCapabilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="glow-card rounded-2xl p-8 h-full flex flex-col justify-between group cursor-default border border-border/60 hover:border-primary/40"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <Icon size={24} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-secondary/30 text-muted-foreground border border-border/40">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className="space-y-2 mb-6 border-t border-border/30 pt-4">
                        <p className="text-[11px] uppercase font-bold text-muted-foreground/80 tracking-wider">
                          Key Deliverables
                        </p>
                        <p className="text-xs text-foreground/90 font-medium leading-relaxed">
                          {item.services}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                      >
                        Explore Capability
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
