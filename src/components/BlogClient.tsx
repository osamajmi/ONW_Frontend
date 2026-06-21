"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import { Search, Calendar, User, ArrowUpRight, BookOpen, Clock, Mail, Sparkles } from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  slug?: string;
  summary: string;
  content: string;
  coverImage?: string;
  author: string;
  createdAt: string;
}

export default function BlogClient({ initialBlogs }: { initialBlogs: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const getCategory = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("design") || t.includes("ui") || t.includes("ux")) return "Design";
    if (t.includes("web") || t.includes("code") || t.includes("react") || t.includes("next")) return "Web Dev";
    if (t.includes("seo") || t.includes("marketing") || t.includes("sitemap")) return "Marketing";
    if (t.includes("ecommerce") || t.includes("shopify") || t.includes("woocommerce")) return "E-Commerce";
    return "Insights";
  };

  const categories = ["All", "Web Dev", "E-Commerce", "Marketing", "Design", "Insights"];

  const getReadingTime = (content: string) => {
    const words = content ? content.split(/\s+/).length : 0;
    return Math.max(1, Math.ceil(words / 200));
  };

  // Filter Blogs based on search & category
  const filteredBlogs = initialBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const blogCategory = getCategory(blog.title);
    const matchesCategory = activeCategory === "All" || blogCategory === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Featured post: The very first blog in the filtered list (or initial list)
  const featuredBlog = filteredBlogs[0];
  const gridBlogs = filteredBlogs.slice(1);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      {/* Modern Radial Background Glows */}
      <div className="absolute top-[10%] left-[-15%] w-[55vw] h-[55vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-[35%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute bottom-[20%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[110px] pointer-events-none animate-float-slow" />

      <main className="flex-grow pt-36 pb-24 container mx-auto px-6 relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] text-primary font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={12} className="animate-spin-slow" />
            ONNEXTWEB KNOWLEDGE HUB
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-none"
          >
            The OnNextWeb <span className="text-gradient">Blog</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
          >
            Expert perspectives on next-generation web engineering, e-commerce scaling, search optimizations, and product designs.
          </motion.p>
        </div>

        {/* ================= SEARCH & CATEGORY BAR ================= */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border/40 pb-8">
            
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 order-2 md:order-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs font-semibold px-4.5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]"
                        : "bg-secondary/20 hover:bg-secondary/40 text-muted-foreground border-border/80 hover:border-border hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="w-full md:max-w-xs relative group order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-[6px] opacity-10 group-focus-within:opacity-25 transition-opacity duration-300" />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 group-focus-within:text-primary transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-secondary/35 backdrop-blur-md border border-border/80 focus:border-primary rounded-full py-2.5 pl-11 pr-5 text-xs placeholder:text-muted-foreground outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(var(--primary),0.06)]"
                />
              </div>
            </div>

          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-24 glass rounded-3xl max-w-2xl mx-auto border border-border/30">
            <p className="text-muted-foreground">No articles found matching your criteria. Try another search or filter.</p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            
            {featuredBlog && activeCategory === "All" && searchQuery === "" && (
              <AnimatedSection className="mb-16">
                <Link href={`/blog/${featuredBlog.slug || featuredBlog._id}`} className="group">
                  <div className="grid lg:grid-cols-12 gap-8 items-center bg-card/25 hover:bg-card/45 border border-white/5 rounded-3xl p-6 md:p-8 transition-all duration-500 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Featured Image Container */}
                    <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-[21/11] rounded-2xl overflow-hidden bg-secondary/50 shadow-inner">
                      {featuredBlog.coverImage ? (
                        <Image
                          src={featuredBlog.coverImage}
                          alt={featuredBlog.title}
                          fill
                          className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                          sizes="(max-width: 1024px) 100vw, 700px"
                          priority
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent flex items-center justify-center p-8">
                          <span className="font-display text-2xl font-bold text-primary/30 text-center">
                            {featuredBlog.title}
                          </span>
                        </div>
                      )}
                      
                      {/* Featured Label */}
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg z-10 shadow-lg">
                        FEATURED POST
                      </span>
                    </div>

                    {/* Featured Content details */}
                    <div className="lg:col-span-5 flex flex-col justify-center py-4">
                      {/* Meta Tags */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-primary/70" />
                          {new Date(featuredBlog.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-primary/70" />
                          {getReadingTime(featuredBlog.content)} min read
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                        {featuredBlog.title}
                      </h2>

                      {/* Summary */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {featuredBlog.summary}
                      </p>

                      {/* User metadata & Action */}
                      <div className="flex items-center justify-between border-t border-border/40 pt-5 mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold font-display">
                            A
                          </div>
                          <span className="text-xs text-foreground font-medium">{featuredBlog.author}</span>
                        </div>
                        <div className="text-primary text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 group-hover:text-primary/80 transition-colors duration-300">
                          Read Full Article
                          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                    </div>

                  </div>
                </Link>
              </AnimatedSection>
            )}

            {/* ================= BLOGS GRID ================= */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              <AnimatePresence mode="popLayout">
                {(activeCategory === "All" && searchQuery === "" ? gridBlogs : filteredBlogs).map((blog, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={blog._id}
                  >
                    <Link href={`/blog/${blog.slug || blog._id}`} className="group flex flex-col h-full">
                      <div className="flex flex-col h-full bg-card/20 hover:bg-card/35 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-400 shadow-xl backdrop-blur-sm relative">
                        
                        {/* Image Frame */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-secondary/50">
                          {blog.coverImage ? (
                            <Image
                              src={blog.coverImage}
                              alt={blog.title}
                              fill
                              className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center p-6 text-center">
                              <span className="font-display text-sm font-bold text-primary/30 truncate max-w-full">
                                {blog.title}
                              </span>
                            </div>
                          )}

                          {/* Category Tag pill */}
                          <span className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-md border border-border/50 text-foreground text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1.5 rounded-lg z-10 shadow-sm">
                            {getCategory(blog.title)}
                          </span>

                          <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-border/50 z-10 shadow-sm">
                            <ArrowUpRight size={14} />
                          </div>
                        </div>

                        {/* Article body content */}
                        <div className="p-6 flex flex-col flex-grow">
                          {/* Metadata row */}
                          <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-4">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={12} className="text-primary/70" />
                              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={12} className="text-primary/70" />
                              {getReadingTime(blog.content)} min
                            </span>
                          </div>

                          {/* Header */}
                          <h3 className="font-display text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                            {blog.title}
                          </h3>

                          {/* Summary summary */}
                          <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-3">
                            {blog.summary}
                          </p>

                          {/* Card Footer actions */}
                          <div className="mt-auto pt-4 border-t border-border/30 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[9px] font-bold text-primary">
                                A
                              </div>
                              <span className="text-[10px] text-muted-foreground font-medium">{blog.author}</span>
                            </div>
                            <div className="text-primary text-[10px] font-bold uppercase tracking-wider flex items-center gap-0.5 group-hover:text-primary/80 transition-colors">
                              Read Post
                              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                          </div>

                        </div>

                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* ================= NEWSLETTER OPT-IN BLOCK ================= */}
            <AnimatedSection className="max-w-4xl mx-auto text-center bg-secondary/10 border border-border/60 rounded-3xl p-10 md:p-16 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 max-w-lg mx-auto">
                <div className="inline-flex p-3 bg-primary/10 border border-primary/20 text-primary rounded-2xl mb-6">
                  <Mail size={24} />
                </div>
                
                <h2 className="font-display text-2xl md:text-4xl font-extrabold mb-4 leading-tight">Stay ahead of the curve</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                  Subscribe to our monthly newsletter. Get web dev guides, Local SEO reports, and tech stacks delivered straight to your inbox.
                </p>

                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold rounded-xl"
                  >
                    🎉 Awesome! You have been successfully subscribed.
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 relative">
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Enter your business email"
                      className="w-full sm:flex-grow bg-background border border-border/80 focus:border-primary rounded-xl px-5 py-3.5 text-xs outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-primary text-primary-foreground px-6 py-3.5 rounded-xl text-xs font-bold hover:bg-primary/95 transition-all shadow-md cursor-pointer whitespace-nowrap active:scale-98"
                    >
                      Subscribe Now
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
