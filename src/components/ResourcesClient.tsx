"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import { FileText, Download, ExternalLink, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

interface PdfFile {
  _id: string;
  filename: string;
  contentType: string;
  size: number;
  createdAt: string;
}

export default function ResourcesClient({ pdfs }: { pdfs: PdfFile[] }) {
  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
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

        {pdfs.length === 0 ? (
          <div className="text-center py-16 glass rounded-2xl max-w-2xl mx-auto border border-border/30 flex flex-col items-center justify-center p-8">
            <ShieldAlert className="w-12 h-12 text-muted-foreground mb-4 opacity-60" />
            <h3 className="font-display text-xl font-bold mb-2">No documents available</h3>
            <p className="text-muted-foreground text-sm">
              Please log in as an administrator to upload PDF resources using the dashboard.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pdfs.map((pdf, idx) => (
              <AnimatedSection
                key={pdf._id}
                delay={idx * 0.05}
                className="glass rounded-2xl border border-border/40 p-6 flex flex-col justify-between hover-lift group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <FileText size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 line-clamp-2" title={pdf.filename}>
                    {pdf.filename}
                  </h3>
                  <div className="flex flex-col gap-1 text-xs text-muted-foreground mb-6">
                    <span>Size: {formatBytes(pdf.size)}</span>
                    <span>
                      Uploaded:{" "}
                      {new Date(pdf.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={`http://localhost:5000/api/pdfs/${pdf._id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-4 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground border border-border/60 transition-colors"
                  >
                    <ExternalLink size={14} />
                    View PDF
                  </a>
                  <a
                    href={`http://localhost:5000/api/pdfs/${pdf._id}`}
                    download={pdf.filename}
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-4 rounded-xl bg-primary hover:opacity-90 text-primary-foreground transition-all"
                  >
                    <Download size={14} />
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
