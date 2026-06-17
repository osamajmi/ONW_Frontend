"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, Calendar, User, ArrowUpRight, BookOpen } from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  summary: string;
  content: string;
  coverImage?: string;
  author: string;
  createdAt: string;
}

export default function BlogClient({ initialBlogs }: { initialBlogs: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = initialBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategory = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("design") || t.includes("ui") || t.includes("ux")) return "Design";
    if (t.includes("web") || t.includes("code") || t.includes("react") || t.includes("next") || t.includes("backend")) return "Web Dev";
    if (t.includes("seo") || t.includes("marketing") || t.includes("sitemap")) return "Marketing";
    return "Insights";
  };

  const getReadingTime = (content: string) => {
    const words = content ? content.split(/\s+/).length : 0;
    return Math.max(1, Math.ceil(words / 200));
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute top-[15%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[25%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none animate-float-reverse" />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium mb-6 uppercase tracking-wider"
          >
            <BookOpen size={12} />
            Our Blog & Insights
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Stories & <span className="text-gradient">Opinions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Explore articles about design systems, web development, product strategy, and modern digital trends.
          </motion.p>
        </div>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-[6px] opacity-15 group-focus-within:opacity-30 transition-opacity duration-300" />
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 group-focus-within:text-primary transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary/30 backdrop-blur-md border border-border/80 focus:border-primary rounded-full py-3.5 pl-12 pr-6 text-sm placeholder:text-muted-foreground outline-none transition-all duration-300 focus:shadow-[0_0_24px_rgba(var(--primary),0.08)]"
              />
            </div>
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-24 glass rounded-2xl max-w-2xl mx-auto border border-border/30">
            <p className="text-muted-foreground">No articles found matching your query.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredBlogs.map((blog, idx) => (
              <AnimatedSection
                key={blog._id}
                delay={idx * 0.1}
                className="glow-card rounded-2xl overflow-hidden flex flex-col group h-full"
              >
                <Link href={`/blog/${blog._id}`} className="flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary/50">
                    {blog.coverImage ? (
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center p-6 text-center">
                        <span className="font-display text-lg font-bold text-primary/40 truncate max-w-full">
                          {blog.title}
                        </span>
                      </div>
                    )}
                    
                    {/* Category tag */}
                    <span className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-md border border-border/60 text-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                      {getCategory(blog.title)}
                    </span>

                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-border/50">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-primary/70" />
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User size={12} className="text-primary/70" />
                        {blog.author}
                      </span>
                      <span className="flex items-center gap-1.5 ml-auto">
                        <BookOpen size={12} className="text-primary/70" />
                        {getReadingTime(blog.content)} min read
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {blog.summary}
                    </p>

                    <div className="mt-auto text-primary text-xs font-semibold uppercase tracking-wider flex items-center gap-1 group-hover:text-primary/80 transition-colors">
                      Read Article
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
