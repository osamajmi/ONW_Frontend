"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import { FileText, Download, ExternalLink, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

import { useState } from "react";

interface PdfFile {
  _id: string;
  filename: string;
  contentType: string;
  size: number;
  createdAt: string;
}

export default function ResourcesClient({ pdfs }: { pdfs: PdfFile[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const getDocCategory = (filename: string) => {
    const fn = filename.toLowerCase();
    if (fn.includes("guide") || fn.includes("manual") || fn.includes("tutorial")) return "Guides";
    if (fn.includes("report") || fn.includes("analysis") || fn.includes("stat")) return "Reports";
    if (fn.includes("invoice") || fn.includes("billing") || fn.includes("contract") || fn.includes("agreement") || fn.includes("terms")) return "Legal";
    return "Others";
  };

  const filteredPdfs = pdfs.filter(pdf => {
    if (activeFilter === "All") return true;
    return getDocCategory(pdf.filename) === activeFilter;
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none animate-float-slow" />
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
            <FileText size={12} />
            Resource Library
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Downloads & <span className="text-gradient">PDF Documents</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Access our reports, design guidelines, presentation slides, and standard contracts stored securely in MongoDB.
          </motion.p>
        </div>

        {/* Category Filters */}
        {pdfs.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-2xl mx-auto">
            {["All", "Reports", "Guides", "Legal", "Others"].map((filter) => {
              const count = filter === "All" 
                ? pdfs.length 
                : pdfs.filter(p => getDocCategory(p.filename) === filter).length;
              if (count === 0) return null; // hide empty categories
              
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-xs font-semibold px-4.5 py-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(var(--primary),0.25)]"
                      : "bg-secondary/20 hover:bg-secondary/40 text-muted-foreground border-border/80 hover:border-border hover:text-foreground"
                  }`}
                >
                  {filter}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-background/25 text-primary-foreground" : "bg-secondary/80 text-muted-foreground"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {pdfs.length === 0 ? (
          <div className="text-center py-16 glass rounded-2xl max-w-2xl mx-auto border border-border/30 flex flex-col items-center justify-center p-8">
            <ShieldAlert className="w-12 h-12 text-muted-foreground mb-4 opacity-60" />
            <h3 className="font-display text-xl font-bold mb-2">No documents available</h3>
            <p className="text-muted-foreground text-sm">
              Please log in as an administrator to upload PDF resources using the dashboard.
            </p>
          </div>
        ) : filteredPdfs.length === 0 ? (
          <div className="text-center py-16 glass rounded-2xl max-w-2xl mx-auto border border-border/30 flex flex-col items-center justify-center p-8">
            <ShieldAlert className="w-12 h-12 text-muted-foreground mb-4 opacity-60" />
            <h3 className="font-display text-xl font-bold mb-2">No matches found</h3>
            <p className="text-muted-foreground text-sm">
              No files in the repository match the category "{activeFilter}".
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredPdfs.map((pdf, idx) => (
              <AnimatedSection
                key={pdf._id}
                delay={idx * 0.05}
                className="glow-card rounded-2xl p-6 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    {/* Document Icon & Tag */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 relative">
                      <FileText size={24} />
                      <span className="absolute -bottom-1 -right-1 text-[8px] font-bold text-white bg-red-600 rounded px-1 py-0.5 border border-background shadow-sm">
                        PDF
                      </span>
                    </div>

                    {/* Category badge */}
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors border border-border/40">
                      {getDocCategory(pdf.filename)}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold mb-3 line-clamp-2 text-foreground group-hover:text-primary transition-colors duration-300" title={pdf.filename}>
                    {pdf.filename}
                  </h3>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-primary/60" />
                      Size: {formatBytes(pdf.size)}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-primary/60" />
                      Uploaded:{" "}
                      {new Date(pdf.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a
                    href={`https://api.onnextweb.in/api/pdfs/${pdf._id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-4 rounded-xl bg-secondary/60 hover:bg-secondary text-foreground border border-border/80 transition-all"
                  >
                    <ExternalLink size={14} />
                    View PDF
                  </a>
                  <a
                    href={`https://api.onnextweb.in/api/pdfs/${pdf._id}`}
                    download={pdf.filename}
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-4 rounded-xl bg-primary hover:opacity-90 text-primary-foreground transition-all shadow-md hover:shadow-[0_4px_12px_rgba(var(--primary),0.25)]"
                  >
                    <Download size={14} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                    Download
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
