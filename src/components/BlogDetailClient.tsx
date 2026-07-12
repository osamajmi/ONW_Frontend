"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  faqs?: Array<{ question: string; answer: string }>;
}

interface Block {
  type: "p" | "h1" | "h2" | "h3" | "blockquote" | "hr" | "ul" | "ol";
  items?: string[];
  text?: string;
}

const parseMarkdownBlocks = (content: string): Block[] => {
  const lines = content.split("\n");
  const blocks: Block[] = [];
  let currentList: Block | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
      continue;
    }

    if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
      blocks.push({ type: "hr" });
      continue;
    }

    if (trimmed.startsWith("###")) {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
      blocks.push({ type: "h3", text: trimmed.replace(/^###\s*/, "") });
      continue;
    }
    if (trimmed.startsWith("##")) {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
      blocks.push({ type: "h2", text: trimmed.replace(/^##\s*/, "") });
      continue;
    }
    if (trimmed.startsWith("#")) {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
      blocks.push({ type: "h1", text: trimmed.replace(/^#\s*/, "") });
      continue;
    }

    if (trimmed.startsWith(">")) {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
      blocks.push({ type: "blockquote", text: trimmed.replace(/^>\s*/, "") });
      continue;
    }

    const listMatch = line.match(/^(\s*)[-*]\s+(.*)/);
    if (listMatch) {
      const itemContent = listMatch[2];
      if (currentList && currentList.type === "ul") {
        currentList.items?.push(itemContent);
      } else {
        if (currentList) {
          blocks.push(currentList);
        }
        currentList = { type: "ul", items: [itemContent] };
      }
      continue;
    }

    const orderedListMatch = line.match(/^(\s*)\d+\.\s+(.*)/);
    if (orderedListMatch) {
      const itemContent = orderedListMatch[2];
      if (currentList && currentList.type === "ol") {
        currentList.items?.push(itemContent);
      } else {
        if (currentList) {
          blocks.push(currentList);
        }
        currentList = { type: "ol", items: [itemContent] };
      }
      continue;
    }

    if (currentList) {
      blocks.push(currentList);
      currentList = null;
    }

    blocks.push({ type: "p", text: trimmed });
  }

  if (currentList) {
    blocks.push(currentList);
  }

  return blocks;
};

const parseInlineMarkdown = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.*?)\*\*|\[(.*?)\]\((.*?)\))/g;
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    if (match[1].startsWith("**")) {
      parts.push(
        <strong key={match.index} className="font-semibold text-foreground">
          {match[2]}
        </strong>
      );
    } else if (match[1].startsWith("[")) {
      const url = match[4];
      const linkText = match[3];
      const isExternal = url.startsWith("http") || url.startsWith("//");
      if (isExternal) {
        parts.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            {linkText}
          </a>
        );
      } else {
        parts.push(
          <Link
            key={match.index}
            href={url}
            className="text-primary hover:underline font-medium"
          >
            {linkText}
          </Link>
        );
      }
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
};

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

      <div className="absolute top-[15%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[110px] pointer-events-none animate-float-reverse" />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6 max-w-3xl relative z-10">
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
                    <Calendar size={16} className="text-primary/70" />
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={16} className="text-primary/70" />
                    {blog.author}
                  </span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 hover:text-primary transition-colors text-xs uppercase tracking-wider font-bold group"
                >
                  <Share2 size={14} className="group-hover:rotate-12 transition-transform" />
                  Copy Link
                </button>
              </div>
            </motion.div>

            {blog.coverImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12 rounded-2xl overflow-hidden aspect-[21/10] bg-secondary/30 border border-border/40 shadow-xl relative"
              >
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </motion.div>
            )}

            <AnimatedSection delay={0.2} className="max-w-none">
              {blog.content && parseMarkdownBlocks(blog.content).map((block, idx) => {
                switch (block.type) {
                  case "hr":
                    return <hr key={idx} className="my-8 border-t border-border/60" />;
                  case "h1":
                    return (
                      <h2 key={idx} className="font-display text-3xl md:text-4xl font-bold mt-12 mb-6 text-gradient">
                        {parseInlineMarkdown(block.text || "")}
                      </h2>
                    );
                  case "h2":
                    return (
                      <h2 key={idx} className="font-display text-2xl md:text-3xl font-bold mt-10 mb-4 text-gradient">
                        {parseInlineMarkdown(block.text || "")}
                      </h2>
                    );
                  case "h3":
                    return (
                      <h3 key={idx} className="font-display text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">
                        {parseInlineMarkdown(block.text || "")}
                      </h3>
                    );
                  case "blockquote":
                    return (
                      <blockquote key={idx} className="border-l-4 border-primary bg-primary/5 px-6 py-4 rounded-r-xl my-6 text-foreground italic leading-relaxed text-lg">
                        {parseInlineMarkdown(block.text || "")}
                      </blockquote>
                    );
                  case "ul":
                    return (
                      <ul key={idx} className="list-disc pl-6 my-6 space-y-2 text-muted-foreground text-lg leading-relaxed">
                        {block.items?.map((item, i) => (
                          <li key={i}>{parseInlineMarkdown(item)}</li>
                        ))}
                      </ul>
                    );
                  case "ol":
                    return (
                      <ol key={idx} className="list-decimal pl-6 my-6 space-y-2 text-muted-foreground text-lg leading-relaxed">
                        {block.items?.map((item, i) => (
                          <li key={i}>{parseInlineMarkdown(item)}</li>
                        ))}
                      </ol>
                    );
                  case "p":
                  default:
                    const isLead = idx === 0;
                    return (
                      <p
                        key={idx}
                        className={`text-muted-foreground text-lg leading-relaxed mb-6 ${
                          isLead ? "text-foreground font-medium md:text-xl border-b border-border/20 pb-6 mb-8" : ""
                        }`}
                      >
                        {parseInlineMarkdown(block.text || "")}
                      </p>
                    );
                }
              })}

              {blog.faqs && blog.faqs.length > 0 && (
                <div className="mt-16 border-t border-border/60 pt-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-gradient">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {blog.faqs.map((faq, idx) => (
                      <details
                        key={idx}
                        className="group border border-border bg-secondary/10 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden cursor-pointer"
                      >
                        <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold text-foreground select-none outline-none group-open:bg-primary/5 transition-colors">
                          <span>{faq.question}</span>
                          <span className="transition-transform duration-300 group-open:rotate-180 text-primary">
                            <ArrowLeft size={16} className="-rotate-90 group-open:rotate-90" />
                          </span>
                        </summary>
                        <div className="p-5 border-t border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed bg-surface-elevated/10">
                          <p>{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </AnimatedSection>
          </article>
        )}
      </main>

      <Footer />
    </div>
  );
}
