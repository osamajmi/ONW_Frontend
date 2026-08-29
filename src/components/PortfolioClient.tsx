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
    title: "Luxe Fashion",
    description: "A premium, high-speed e-commerce storefront built with Next.js, headless CMS APIs, and Tailwind CSS. We engineered zero-latency cart actions, integrated secure Stripe checkout pipelines, and implemented custom fluid layouts that boosted purchase conversion by 24%.",
    category: "E-Commerce",
    tags: ["Next.js", "Tailwind CSS", "Redux", "Stripe API", "Headless CMS"],
    coverImage: "",
    projectUrl: "https://luxe-fashion.com"
  },
  {
    title: "FinCore Dashboard",
    description: "An enterprise-grade financial metrics dashboard designed for secure real-time bookkeeping. Features interactive Chart.js analytics, JWT session state protection, a secure Node.js API gateway, and MongoDB database clusters handling high concurrent queries.",
    category: "Web App",
    tags: ["React", "Chart.js", "Node.js", "MongoDB", "Express API"],
    coverImage: "",
    projectUrl: "https://fincore.com"
  },
  {
    title: "Vibe Social Mobile",
    description: "A high-performance cross-platform social networking app for iOS and Android built on React Native. Implements real-time messaging structures using Socket.io, background notifications, and optimized AWS S3 media upload pipelines.",
    category: "Mobile App",
    tags: ["React Native", "Socket.io", "Express", "MongoDB", "AWS S3"],
    coverImage: "",
    projectUrl: "https://vibe-social.com"
  },
  {
    title: "GreenTech Energy",
    description: "A high-fidelity corporate portal built for a global renewable energy conglomerate. Developed with Next.js static generation, complex Framer Motion layouts, secure contact routing nodes, and optimized search footprints for corporate compliance.",
    category: "Branding",
    tags: ["Next.js", "Vercel", "Framer Motion", "Tailwind CSS", "SEO"],
    coverImage: "",
    projectUrl: "https://greentech.com"
  },
  {
    title: "Portal360 AI",
    description: "An advanced, OpenAI-integrated behavioral analytics dashboard built for portal360.ai. We engineered custom real-time funnel visualizations, user journey tracking matrices, and secure multi-tenant admin views using Next.js and FastAPI.",
    category: "Web App",
    tags: ["Next.js", "FastAPI", "OpenAI API", "Tailwind CSS", "MongoDB"],
    coverImage: "",
    projectUrl: "https://portal360.ai"
  },
  {
    title: "Revoft Platform",
    description: "A secure, enterprise-level digital accounting and invoice management workspace engineered for revoft.com. Implements automated client invoice cycles, custom ledger tracking dashboards, and robust database backups.",
    category: "Custom Software",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    coverImage: "",
    projectUrl: "https://revoft.com"
  },
  {
    title: "ImportExportTV Portal",
    description: "A specialized global logistics video streaming platform built for importexporttv.com. Engineered with adaptive HLS video streaming, automated geo-routing via AWS Cloudfront CDNs, and custom layout transition modules.",
    category: "Web App",
    tags: ["Next.js", "AWS Cloudfront", "HLS Streaming", "PostgreSQL", "Tailwind CSS"],
    coverImage: "",
    projectUrl: "https://importexporttv.com"
  },
  {
    title: "MPC Markets Mosaic",
    description: "A premium stock trading and investment advisory interface designed for mpcmarkets.com.au/mosaic. Integrates rapid live price updates via secure web sockets, responsive chart rendering, and automated alerts.",
    category: "Custom Software",
    tags: ["React", "TypeScript", "D3.js Charts", "WebSockets", "Financial APIs"],
    coverImage: "",
    projectUrl: "https://www.mpcmarkets.com.au/mosaic/"
  },
  {
    title: "FitFlow Mobile App",
    description: "A high-performance cross-platform home workouts and fitness tracking app compiled using React Native. Features apple HealthKit API synchronization, personalized daily routines generator, and secure authentication schemas.",
    category: "Mobile App",
    tags: ["React Native", "HealthKit API", "Firebase", "Redux", "Tailwind Native"],
    coverImage: "",
    projectUrl: "https://apps.apple.com/us/app/fitflow"
  },
  {
    title: "SaaS Growth Marketing",
    description: "A comprehensive organic visibility and conversion rate scaling campaign for a leading enterprise CRM. Developed customized high-intent landing pages, configured advanced GA4 event mapping, and executed local search citation campaigns.",
    category: "SEO & Marketing",
    tags: ["Technical SEO", "Google Ads PPC", "Conversion Audits", "GA4 Analytics"],
    coverImage: "",
    projectUrl: "https://www.onnextweb.in/services"
  }
];

export default function PortfolioClient({ projects }: { projects: ProjectItem[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const cleanProjects = projects && projects.length > 0 
    ? projects.filter((p) => !p.projectUrl || !p.projectUrl.includes("example.com"))
    : [];

  const displayProjects = cleanProjects.length > 0 ? cleanProjects : capabilityProjects;

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
