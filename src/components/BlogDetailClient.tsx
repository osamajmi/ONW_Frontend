"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { toast } from "sonner";

interface BlogPost {
  _id: string;
  title: string;
  summary: string;
  content: string;
  coverImage?: string;
  author: string;
  createdAt: string;
}

export default function BlogDetailClient({ blog }: { blog: BlogPost | null }) {
  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>

        {!blog ? (
          <div className="text-center py-20 glass rounded-2xl border border-border/40">
            <h2 className="font-display text-2xl font-bold mb-4">Article Not Found</h2>
            <p className="text-muted-foreground mb-6">The article you are looking for does not exist or has been removed.</p>
            <Link
              href="/blog"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Back to Blog
            </Link>
          </div>
        ) : (
          <article>
            {/* Header metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border/60 text-sm text-muted-foreground">
                <div className="flex items-center gap-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={16} />
                    {blog.author}
                  </span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors text-xs uppercase tracking-wider font-semibold"
                >
                  <Share2 size={14} />
                  Share
                </button>
              </div>
            </motion.div>

            {/* Cover image */}
            {blog.coverImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12 rounded-2xl overflow-hidden aspect-[21/10] bg-secondary/30 border border-border/40"
              >
                <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
              </motion.div>
            )}

            {/* Post content */}
            <AnimatedSection delay={0.2} className="prose dark:prose-invert max-w-none">
              {blog.content.split("\n").map((para, idx) => {
                if (!para.trim()) return null;
                return (
                  <p key={idx} className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {para}
                  </p>
                );
              })}
            </AnimatedSection>
          </article>
        )}
      </main>

      <Footer />
    </div>
  );
}
