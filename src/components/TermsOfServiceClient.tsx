"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import { FileCode2, CheckCircle2, ShieldAlert, CreditCard, Clock, Scale, Mail, ArrowUpRight, HelpCircle } from "lucide-react";
import Link from "next/link";

const terms = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: CheckCircle2,
    content: `By accessing or using the website, services, or software solutions provided by ON Next Web ("Studio", "We", "Us", or "Our"), you agree to be bound by these Terms of Service.

If you are entering into an agreement on behalf of a business entity or organization, you confirm that you possess the authority to bind such entity to these terms.`,
  },
  {
    id: "services",
    title: "2. Scope of Services",
    icon: FileCode2,
    content: `ON Next Web provides custom website design, Next.js web application development, mobile application engineering (iOS & Android), custom enterprise software, SEO, and digital branding services.

All client projects operate under an agreed Statement of Work (SOW), proposal, or milestone contract detailing explicit deliverables, timelines, and commercial terms.`,
  },
  {
    id: "ip",
    title: "3. Intellectual Property & Code Ownership",
    icon: Scale,
    content: `Upon full settlement of all invoice payments and project fees, ON Next Web transfers full ownership of customized source code, graphical assets, and digital deliverables created specifically for the client.

ON Next Web retains ownership of pre-existing proprietary frameworks, boilerplate libraries, open-source tools, and developer utilities integrated into the project. The studio reserves the right to feature completed projects in its creative portfolio unless a written Non-Disclosure Agreement (NDA) states otherwise.`,
  },
  {
    id: "payment",
    title: "4. Payments, Invoices & Billing",
    icon: CreditCard,
    content: `Project fees, payment schedules, and milestone breakdowns are specified in individual client agreements. Standard projects require an initial deposit prior to kickoff.

Invoices are payable within the timeframe indicated on the invoice. Delayed payments may result in temporary suspension of active development or delayed deployment dates.`,
  },
  {
    id: "timelines",
    title: "5. Project Schedules & Revisions",
    icon: Clock,
    content: `Project completion dates rely on prompt client approvals, feedback iterations, and provision of required content/assets.

Standard contracts include designated revision cycles as specified in the proposal. Additional major scope changes outside the approved SOW will be billed according to standard hourly or sprint rates upon mutual agreement.`,
  },
  {
    id: "liability",
    title: "6. Limitation of Liability & Warranties",
    icon: ShieldAlert,
    content: `ON Next Web builds solutions using industry-standard engineering practices and performance optimizations. However, we do not warrant that third-party services, APIs, or hosting providers will operate uninterrupted or error-free.

Under no circumstances shall ON Next Web be held liable for indirect, incidental, consequential, or lost profit damages resulting from system downtime, third-party API changes, or unauthorized third-party interference.`,
  },
  {
    id: "law",
    title: "7. Governing Law & Dispute Resolution",
    icon: HelpCircle,
    content: `These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes or claims arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.`,
  },
];

export default function TermsOfServiceClient() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      <GrainOverlay />
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute top-[15%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none animate-float-reverse" />

      <main className="flex-grow pt-32 pb-24 container mx-auto px-6 relative z-10">
        {/* Header Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6 uppercase tracking-wider backdrop-blur-sm"
          >
            <Scale size={14} />
            Agreement & Policies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Terms of <span className="text-gradient">Service</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Please read these Terms of Service carefully. They govern the relationship between ON Next Web and our clients for all design, software development, and consulting services.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs text-muted-foreground/60 mt-4 font-medium"
          >
            Effective Date: August 2026
          </motion.p>
        </div>

        {/* Content Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {terms.map((term, idx) => {
            const Icon = term.icon;
            return (
              <AnimatedSection key={term.id} delay={idx * 0.05}>
                <div
                  id={term.id}
                  className="p-8 rounded-2xl bg-surface-elevated/40 border border-border/80 backdrop-blur-md hover:border-primary/30 transition-all duration-300 group shadow-lg shadow-black/5"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300 shrink-0">
                      <Icon size={20} />
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                      {term.title}
                    </h2>
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line pl-14">
                    {term.content}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}

          {/* Contact Box */}
          <AnimatedSection delay={0.4}>
            <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-surface-elevated/60 to-purple-500/10 border border-primary/20 text-center relative overflow-hidden">
              <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                Need clarification on project agreements?
              </h3>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
                Our team is happy to discuss custom Statement of Work (SOW) details, NDAs, or enterprise service terms.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-sm shadow-md"
                >
                  Start Project Discussion
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
