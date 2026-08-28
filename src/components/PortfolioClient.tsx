"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface ProjectItem {
  _id?: string;
  title: string;
  description: string;
  category: string;
  tags?: string[];
  coverImage?: string;
  projectUrl?: string;
}

const fallbackColors = [
  "from-purple-900/40 to-primary/30",
  "from-blue-900/40 to-primary/30",
  "from-pink-900/40 to-primary/30",
  "from-emerald-900/40 to-primary/30",
  "from-orange-900/40 to-primary/30",
  "from-cyan-900/40 to-primary/30"
];

const capabilityProjects: ProjectItem[] = [
  {
    title: "High-Performance Corporate Websites",
    description: "Bespoke corporate websites engineered with Next.js static generation, clean semantic HTML5, Core Web Vitals optimization, and structured metadata schema indexation.",
    category: "Web Development",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    projectUrl: "/services/web-development"
  },
  {
    title: "Conversion-Optimized Ecommerce Storefronts",
    description: "Custom e-commerce platforms featuring zero-latency page transitions, fluid shopping cart management, secure payment gateway integrations, and mobile-first UX.",
    category: "Ecommerce",
    tags: ["Next.js", "React", "Node.js", "Stripe API", "Tailwind CSS"],
    projectUrl: "/services/web-development"
  },
  {
    title: "Enterprise Custom Software & Portals",
    description: "Tailored web applications, internal management tools, and workflow automation portals designed with secure RESTful APIs, JWT session security, and relational databases.",
    category: "Custom Software",
    tags: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    projectUrl: "/services/custom-software-development"
  },
  {
    title: "Cross-Platform Mobile Applications",
    description: "Native-feel mobile apps built with React Native for iOS and Android, featuring offline sync, background push notifications, and intuitive mobile UI design.",
    category: "Mobile Apps",
    tags: ["React Native", "TypeScript", "REST APIs", "Mobile UX"],
    projectUrl: "/services/custom-software-development"
  },
  {
    title: "SaaS Application Infrastructure",
    description: "Cloud-native Software-as-a-Service platforms built on multi-tenant architecture, automated subscription billing pipelines, and scalable database clusters.",
    category: "SaaS Platforms",
    tags: ["Next.js", "AWS", "PostgreSQL", "Tailwind CSS"],
    projectUrl: "/services/custom-software-development"
  },
  {
    title: "Technical SEO & Organic Growth Campaigns",
    description: "Data-driven organic search strategy incorporating technical SEO audits, Core Web Vitals optimization, semantic schema mapping, and local search footprint expansion.",
    category: "Digital Marketing",
    tags: ["Technical SEO", "GA4 Analytics", "Core Web Vitals", "Local Search"],
    projectUrl: "/services/seo-services"
  }
];

export default function PortfolioClient({ projects }: { projects: ProjectItem[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const displayProjects = projects && projects.length > 0 ? projects : capabilityProjects;

  const categories = ["All", ...Array.from(new Set(displayProjects.map((p) => p.category)))];

  const filteredProjects = activeCategory === "All"
    ? displayProjects
    : displayProjects.filter((p) => p.category === activeCategory);

  const handleProjectClick = (url?: string) => {
    if (url && typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute top-[15%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[110px] pointer-events-none animate-float-reverse" />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium mb-6 uppercase tracking-wider"
          >
            <Sparkles size={12} />
            Showcase of Innovation
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Our Case <span className="text-gradient">Studies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Explore our curated selection of digital apps, web systems, and brand assets built for fast growth.
          </motion.p>
        </div>

        {/* Category Filters */}
        {projects.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-3xl mx-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-semibold px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(var(--primary),0.25)]"
                      : "bg-secondary/20 hover:bg-secondary/40 text-muted-foreground border-border/80 hover:border-border hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 glass rounded-2xl max-w-2xl mx-auto border border-border/30">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => {
                const fallbackGrad = fallbackColors[i % fallbackColors.length];
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={project._id || project.title}
                    onClick={() => handleProjectClick(project.projectUrl)}
                    className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer group bg-card border border-white/5 shadow-2xl"
                  >
                    {/* Cover image or fallback gradient */}
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGrad} opacity-85`} />
                    )}

                    {/* Noise texture overlay */}
                    <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

                    {/* Hover dark bottom overlay */}
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-[10px] font-bold tracking-widest uppercase mb-2.5 backdrop-blur-sm inline-block px-2.5 py-1 rounded bg-white/10 border border-white/10 text-white">
                          {project.category}
                        </span>
                        
                        <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-1.5 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h2>

                        <p className="text-xs text-white/80 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 leading-relaxed">
                          {project.description}
                        </p>

                        {project.tags && project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {project.tags.map((tag, tagIdx) => (
                              <span key={tagIdx} className="text-[8px] font-bold uppercase tracking-wider bg-primary/20 text-primary-foreground/90 border border-primary/20 px-2 py-0.5 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="h-1 w-12 bg-primary rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-full" />
                      </div>
                    </div>

                    {/* External Link Arrow */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <div className="bg-background/80 backdrop-blur-md p-2.5 rounded-full text-foreground border border-border/60 hover:text-primary transition-colors">
                        <ExternalLink size={14} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Call To Action */}
        <AnimatedSection className="max-w-4xl mx-auto text-center mt-12 bg-secondary/10 border border-border/60 rounded-3xl p-10 md:p-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">Want to build something similar?</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8">
            Tell us about your technical project specs. Our engineers can mock up a custom architecture proposal.
          </p>
          <div className="flex justify-center">
            <MagneticButton
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg glow-accent hover:glow-accent-strong transition-all duration-300 group cursor-pointer"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
