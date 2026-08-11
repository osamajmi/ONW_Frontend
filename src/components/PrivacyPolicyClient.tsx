"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Lock, Eye, FileText, Database, Bell, Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "collection",
    title: "1. Information We Collect",
    icon: Database,
    content: `When you interact with ON Next Web (through our website, inquiry forms, client dashboard, or services), we may collect personal and technical information to deliver high-quality digital solutions.

Personal Information: Name, email address, phone number, company name, billing address, and project specifications provided when filling out contact forms or requesting project proposals.
Usage & Technical Data: IP addresses, browser types, operating systems, referring URLs, device identifiers, and site navigation patterns collected automatically through log files and analytics.`,
  },
  {
    id: "usage",
    title: "2. How We Use Your Information",
    icon: Eye,
    content: `We utilize collected data strictly for professional business purposes, including:
• Delivering customized web design, software development, branding, and digital marketing services.
• Processing inquiries, managing project milestones, issuing invoices, and providing ongoing support.
• Enhancing website performance, user experience, and optimizing content delivery.
• Sending critical project updates, service announcements, and periodic newsletters (you may opt-out anytime).`,
  },
  {
    id: "cookies",
    title: "3. Cookies & Tracking Technologies",
    icon: Lock,
    content: `ON Next Web uses cookies, local storage, and similar analytical identifiers (such as Google Analytics and Google Tag Manager) to analyze website traffic and remember your preferences.

Cookies help us understand how users navigate our studio platform so we can continuously optimize speed, layout, and UX. You can manage or disable cookies directly within your web browser settings.`,
  },
  {
    id: "protection",
    title: "4. Data Security & Confidentiality",
    icon: Shield,
    content: `We implement robust physical, administrative, and technical safeguards (including SSL encryption, secure API endpoints, and restricted database access) to protect client data against unauthorized access, loss, alteration, or disclosure.

We maintain strict confidentiality protocols. Your project codebases, proprietary ideas, business logic, and credentials are never sold, rented, or traded to third parties under any circumstances.`,
  },
  {
    id: "sharing",
    title: "5. Third-Party Services",
    icon: FileText,
    content: `We may utilize verified third-party cloud infrastructure (e.g., Vercel, AWS, Google Cloud) and analytics providers to host and maintain our web platforms. These service providers only have access to information required to perform their designated functions and are contractually obligated to uphold data privacy standards.`,
  },
  {
    id: "rights",
    title: "6. Your Rights & Data Choices",
    icon: CheckCircle2,
    content: `You have full control over your personal information. You may request access to, correction of, or permanent deletion of your personal records stored by ON Next Web.

To submit a data access request or opt out of promotional communications, please reach out to our privacy compliance team at info.onnextweb@gmail.com.`,
  },
  {
    id: "updates",
    title: "7. Policy Updates & Contact",
    icon: Bell,
    content: `ON Next Web reserves the right to update this Privacy Policy as tech standards or regulatory requirements evolve. Any modifications will be reflected on this page with an updated revision date.

If you have questions regarding this Privacy Policy, please contact us:
Email: info.onnextweb@gmail.com
Phone: +91 8765077474
Address: C-25 Abul Fazal, Jamia Nagar, Okhla, New Delhi – 110025`,
  },
];

export default function PrivacyPolicyClient() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute top-[15%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none animate-float-reverse" />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6 relative z-10">
        {/* Header Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6 uppercase tracking-wider backdrop-blur-sm"
          >
            <Shield size={14} />
            Legal & Compliance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Privacy <span className="text-gradient">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            At ON Next Web, transparency and data protection are central to how we design and build. Learn how we handle your information with absolute integrity.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs text-muted-foreground/60 mt-4 font-medium"
          >
            Last Updated: August 2026
          </motion.p>
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <AnimatedSection key={sec.id} delay={idx * 0.05}>
                <div
                  id={sec.id}
                  className="p-8 rounded-2xl bg-surface-elevated/40 border border-border/80 backdrop-blur-md hover:border-primary/30 transition-all duration-300 group shadow-lg shadow-black/5"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300 shrink-0">
                      <Icon size={20} />
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                      {sec.title}
                    </h2>
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line pl-14">
                    {sec.content}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}

          {/* Contact Box */}
          <AnimatedSection delay={0.4}>
            <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-surface-elevated/60 to-purple-500/10 border border-primary/20 text-center relative overflow-hidden">
              <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                Have questions about your data?
              </h3>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
                Our team is ready to answer any questions regarding privacy, security, and data protection practices.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-sm shadow-md"
                >
                  Contact Privacy Team
                  <ArrowUpRight size={16} />
                </Link>
                <a
                  href="mailto:info.onnextweb@gmail.com"
                  className="border border-border hover:border-primary/50 bg-surface-elevated/40 text-foreground font-medium px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-sm"
                >
                  <Mail size={16} className="text-primary" />
                  info.onnextweb@gmail.com
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
}
