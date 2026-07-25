import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Link from "next/link";
import LandingPageForm from "@/components/LandingPageForm";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  Star, 
  ArrowRight, 
  Clock, 
  Zap, 
  Globe, 
  Laptop, 
  ChevronRight, 
  ShieldCheck, 
  Rocket, 
  Award,
  Users,
  Search,
  MessageSquare
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development Company in India | ON Next Web",
  description: "Build premium digital products with India's top custom software development company. Custom ERP, SaaS solutions, and mobile apps built to scale. Hire us!",
  alternates: {
    canonical: "https://www.onnextweb.in/custom-software-development-company-in-india",
  },
  openGraph: {
    title: "Custom Software Development Company in India | ON Next Web",
    description: "Build premium digital products with India's top custom software development company. Custom ERP, SaaS solutions, and mobile apps built to scale. Hire us!",
    url: "https://www.onnextweb.in/custom-software-development-company-in-india",
    type: "website",
    images: [
      {
        url: "https://www.onnextweb.in/dark-logo.png",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Company in India | ON Next Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company in India | ON Next Web",
    description: "Build premium digital products with India's top custom software development company.",
    images: ["https://www.onnextweb.in/dark-logo.png"],
  },
};

export default function IndiaCustomSoftwarePage() {
  return (
    <div className="bg-background text-foreground transition-colors duration-500 relative min-h-screen">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />

      {/* Top Quick Contact Bar */}
      <div className="bg-primary/10 border-b border-primary/20 text-foreground py-2 text-xs sm:text-sm relative z-50 mt-[72px] md:mt-[80px]">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Global Delivery Centre (India): Available for New Outsourcing Contracts!</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="tel:+918765077474" className="hover:text-primary transition-colors flex items-center gap-1.5 font-semibold">
              <Phone size={13} className="text-primary" />
              +91 8765077474
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:info.onnextweb@gmail.com" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <Mail size={13} />
              info.onnextweb@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 md:py-32 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                🌐 Global Software Outsourcing & Custom Code Solutions
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Custom Software <br className="hidden sm:inline" />
                Development in <span className="text-gradient">India</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                Tired of outdated systems and rigid template packages? OnNextWeb builds custom-engineered SaaS, CRM, ERP, and bespoke applications deployed on highly secure, fast-loading, and agile frameworks. Scale your software from India&apos;s leading offshore engineering hub.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50 max-w-md">
                <div>
                  <h4 className="text-2xl font-bold text-foreground">150+</h4>
                  <p className="text-xs text-muted-foreground">Deliveries Completed</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">4.9/5</h4>
                  <p className="text-xs text-muted-foreground">Global Reviews</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">Agile</h4>
                  <p className="text-xs text-muted-foreground">Sprint Cycles</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a 
                  href="tel:+918765077474" 
                  className="bg-primary text-primary-foreground font-medium px-8 py-4 rounded-xl hover:glow-accent hover:bg-primary/95 transition-all duration-300 flex items-center gap-2 group cursor-pointer text-base"
                >
                  <Phone size={18} />
                  Call Support
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/918765077474?text=Hi%20OnNextWeb,%20I%20am%20looking%20for%20custom%20software%20development%20services%20in%20India." 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer text-base"
                >
                  <MessageSquare size={18} />
                  WhatsApp Consultation
                </a>
                <a 
                  href="#contact-form-section" 
                  className="border border-border hover:border-primary/50 bg-surface-elevated/40 hover:bg-primary/5 text-foreground px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center font-medium cursor-pointer"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-surface-elevated/40 border border-border/80 backdrop-blur-md rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <LandingPageForm
                  title="Request Software Proposal"
                  subtitle="Submit details of your required workflows, target tech stacks, and delivery timelines."
                  buttonText="Submit Scope Details"
                  placeholderMessage="Describe custom features, system integrations, or database metrics..."
                  sourcePage="India Hero Form"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-20 border-t border-border/40 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Offshore Tech Delivery</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Bespoke Software Engineering: The Key to Business Automation
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              In a modern digital ecosystem, basic pre-built software setups fail to support complex business automation workflows. Scaling startups, e-commerce networks, logistics systems, and financial units require custom layouts, API microservices, cloud deployments, and robust database synchronizations. Generic template packages rarely align with unique operational requirements, resulting in manual double-entry and system silos.
            </p>
            <p>
              Outsourcing clients search with high-intent terms like &quot;<em>custom software development company in India</em>&quot; and &quot;<em>best software development company in India</em>&quot; to locate reliable technology partners. As a premier <strong>custom software development company in India</strong>, OnNextWeb designs and codes bespoke products using Next.js, Node.js, Express, Python, and secure cloud environments, dropping processing latency and maximizing operational efficiency.
            </p>
            <p>
              From our offshore delivery center in India, we ensure seamless communication and rapid delivery cycles utilizing Agile methodologies. We provide clear sprint transparency, payment integrations, custom dashboard setups, and continuous support.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ONNEXTWEB (USPs) */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">Outsourcing Benefits</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Why Outsource to OnNextWeb India? (Quality Standards)
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              We implement world-class software engineering standards to align with international offshore development guidelines and timelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="text-primary" size={24} />,
                title: "Agile Development Sprint",
                desc: "Weekly sprint cycles and client review calls. You receive bi-weekly progress updates, visual dashboards, and code integration logs."
              },
              {
                icon: <Globe className="text-primary" size={24} />,
                title: "Outsourcing India Cost Edge",
                desc: "Maximize your ROI with offshore software engineering rates in India. We offer 100% transparent pricing with zero hidden fees or license markups."
              },
              {
                icon: <Laptop className="text-primary" size={24} />,
                title: "Modern Tech Frameworks",
                desc: "React, Next.js, Python, Django, REST/GraphQL, and JWT. We leverage cutting-edge technology stacks optimized for speed and security."
              },
              {
                icon: <ShieldCheck className="text-primary" size={24} />,
                title: "IP Protection & NDAs",
                desc: "100% IP protection with robust NDA agreements. We hand over full Git repository ownership and credentials upon release."
              }
            ].map((usp, idx) => (
              <div key={idx} className="bg-surface-elevated/40 border border-border/80 hover:border-primary/30 p-6 rounded-2xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {usp.icon}
                </div>
                <h3 className="font-display text-lg font-bold mb-3 text-foreground">{usp.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Outsourcing Core Services</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Bespoke Software Services in India
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Customized digital logic systems designed to automate processes and drive client growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Business Management</span>
              <h3 className="font-display text-2xl font-bold">Custom Enterprise CRM & ERP</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bespoke customer relationship and resource planning systems configured for your specific operational metrics. We build automated lead routers, notifications, invoice loggers, and secure reporting layers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Dynamic data tables with Excel exporters</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Integrated payment links generation</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Multi-level permission roles JWT</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Outsourcing Solutions</span>
              <h3 className="font-display text-2xl font-bold">Offshore Software Outsourcing India</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Outsource your custom development needs with ease. OnNextWeb handles end-to-end delivery pipelines, dedicated remote engineer configurations, daily syncs, and clear milestone tracking.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Clear sprint scope definitions (Jira/Trello)</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Native English-speaking account managers</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> 24/7 Monitoring servers setup options</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Startups Launch</span>
              <h3 className="font-display text-2xl font-bold">SaaS MVPs & Database Platforms</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                End-to-end MVP and SaaS product engineering. We build secure authentication, custom API layers, relational/non-relational database synchronizations, and interactive dashboard widgets utilizing clean, maintainable code.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Robust API pipelines setup REST/GraphQL</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> High-speed client analytics charts</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Datablock scaling (MongoDB, PostgreSQL)</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Cloud Architecture</span>
              <h3 className="font-display text-2xl font-bold">Cloud Deployment & Server Sync</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AWS, Microsoft Azure, and Google Cloud setups. We configure Docker containers, CI/CD deployment pipelines, automated database backups, and Kubernetes clustering to manage traffic spikes.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Continuous integration pipelines (CI/CD)</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Automated daily database backup endpoints</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> High-level SSL & server firewalls configuration</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm mb-4">Internal Link: Want to see our live product designs? View our comprehensive <Link href="/portfolio" className="text-primary underline font-semibold">Case Studies Portfolio</Link>.</p>
          </div>
        </div>
      </section>

      {/* MIDDLE PAGE CALLOUT */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-purple-600/5 to-primary/5 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Launch Your Bespoke Software Platform with India Offshore Advantage</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Directly connect with our software architect team in India. Get a technical scoping blueprint and NDA setup options without any initial charges.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-semibold">
            <a href="tel:+918765077474" className="flex items-center gap-2 bg-background hover:bg-surface-elevated border border-border px-6 py-3.5 rounded-xl transition-all duration-300">
              <Phone size={16} className="text-primary" />
              Call India Office: +91 8765077474
            </a>
            <a href="https://wa.me/918765077474" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-2 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 px-6 py-3.5 rounded-xl transition-all duration-300">
              <MessageSquare size={16} />
              WhatsApp: Connect Instantly
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground pt-2">
            Average response time on WhatsApp: <strong>5 minutes</strong>. Let&apos;s build next-gen software systems.
          </p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Outsourcing Roadmap</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Our Custom Software Development Process
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              We translate business goals into secure processing scripts step-by-step.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                num: "01",
                phase: "Discovery & Scoping",
                desc: "We discuss target user workflows, logic conditions, API layers, and map timelines inside an interactive scope document."
              },
              {
                num: "02",
                phase: "UX System Figma",
                desc: "Detailed interactive mockups are created to clarify layouts, screen elements, navigation grids, and theme modes."
              },
              {
                num: "03",
                phase: "Sprint Code Implementation",
                desc: "We write secure clean modules on target stacks (Next.js, Node, Django) with continuous integration pushes."
              },
              {
                num: "04",
                phase: "Refactoring & Security Checks",
                desc: "Quality code tests, API stress metrics, database indexing audits, and search crawler logic indexing setups."
              },
              {
                num: "05",
                phase: "Launch & CI/CD Setup",
                desc: "Cloud servers configurations deploy, automated backup endpoints setups, domain configuration mapping, and monthly SLA support."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-surface-elevated/20 border border-border/60 p-6 rounded-xl relative space-y-4 hover:border-primary/20 transition-all duration-300">
                <span className="font-display text-3xl font-extrabold text-primary/30 block">{step.num}</span>
                <h3 className="font-display text-base font-bold text-foreground">{step.phase}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Outsourcing Deliveries</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Bespoke Software Case Studies
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              How we redesigned legacy platforms and delivered 3x conversion and processing speed improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Case Study 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 rounded-2xl overflow-hidden group">
              <div className="p-8 space-y-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">300% Processing Boost</span>
                <h3 className="font-display text-xl font-bold">Custom Logistics ERP (Global Cargo Client)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A global logistics provider was using manual spreadsheets that caused inventory sync delays and data inconsistencies. Our custom software engineering team in India built a custom React dashboard backed by Node.js and PostgreSQL. The ERP system boosted supply-chain processing efficiency by 4.5x.
                </p>
                <div className="flex gap-6 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  <div>
                    <span className="block text-foreground font-bold">Old Sync Time</span>
                    <span>12.5 seconds</span>
                  </div>
                  <div>
                    <span className="block text-emerald-400 font-bold">Optimized Sync</span>
                    <span className="text-emerald-400 font-semibold">1.8 seconds</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-bold">Visual Design</span>
                    <span>Clean Dark Analytics Grid</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-surface-elevated/40 border border-border/80 rounded-2xl overflow-hidden group">
              <div className="p-8 space-y-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">SaaS Launch Success</span>
                <h3 className="font-display text-xl font-bold">Financial Analytical Dashboard SaaS (US Client)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A US-based financial technology startup needed a secure dashboard MVP to present to investors. We delivered a robust MERN application featuring secure authentication, real-time charts, and clean cloud integrations. The product compiled on time and helped secure seed funding.
                </p>
                <div className="flex gap-6 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  <div>
                    <span className="block text-foreground font-bold">Development Time</span>
                    <span>14 Weeks MVP</span>
                  </div>
                  <div>
                    <span className="block text-emerald-400 font-bold">Security Score</span>
                    <span className="text-emerald-400 font-semibold">A+ Audited</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-bold">Tech Stack</span>
                    <span>Next.js + GraphQL + MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BETTER THAN OTHER DELHI AGENCIES */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">Competitor Comparison</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              How OnNextWeb Compares to Typical India Agencies
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Compare key software delivery metrics directly before deciding your offshore agency partner.
            </p>
          </div>

          <div className="overflow-x-auto border border-border rounded-xl" data-lenis-prevent>
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-surface-elevated border-b border-border text-foreground font-bold font-display">
                  <th className="p-4 sm:p-5">Feature Metrics</th>
                  <th className="p-4 sm:p-5 text-primary">OnNextWeb</th>
                  <th className="p-4 sm:p-5 text-muted-foreground font-normal">Typical Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">Technology Stacks</td>
                  <td className="p-4 text-emerald-400 font-medium">React, Next.js, Headless CMS setups, Node, Django</td>
                  <td className="p-4">Outdated PHP templates / generic CMS systems</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">Code Standards</td>
                  <td className="p-4 text-emerald-400 font-medium">Bespoke modular architectures, clean logic variables, and comments</td>
                  <td className="p-4">Bloated template blocks with zero performance validation</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">Communications channels</td>
                  <td className="p-4 text-emerald-400 font-medium">Direct Slack channels, daily sync calls, and native English-speaking managers</td>
                  <td className="p-4">Slow ticketing systems or email alerts</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">IP Protection</td>
                  <td className="p-4 text-emerald-400 font-medium">Strict NDA enforcement, standard Git repo transfers</td>
                  <td className="p-4">Basic generic policies with high security liabilities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Target Markets</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Industries We Serve globally from India
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              We understand custom user flows for different business sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto text-center">
            {[
              { label: "Fintech Platforms", icon: "💳" },
              { label: "SaaS MVPs", icon: "🚀" },
              { label: "Logistics ERPs", icon: "🚚" },
              { label: "Healthcare CRM", icon: "🩺" },
              { label: "E-Commerce Market", icon: "🛒" },
              { label: "Real Estate Portals", icon: "🏢" }
            ].map((ind, idx) => (
              <div key={idx} className="bg-surface-elevated/40 border border-border/80 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group">
                <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{ind.icon}</span>
                <span className="font-medium text-sm text-foreground block">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-surface/50 border-t border-border/40 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">FAQ Area</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm">
              Answers to common queries regarding custom software development options in India.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "1. How much does custom software development cost in India?",
                a: "Our offshore startup MVP builds start at $1,500. Complex enterprise systems, custom CRM/ERP builds, and SaaS platforms are quoted dynamically based on features and scope."
              },
              {
                q: "2. How do you handle IP protection and source code ownership?",
                a: "We sign standard NDAs to protect your intellectual property. Upon project launch, full Git repository ownership and configuration credentials are handed over directly to your team."
              },
              {
                q: "3. What is the typical project delivery timeline?",
                a: "Bespoke applications are typically delivered within 8 to 12 weeks. Dedicated remote developer setups can start sprints immediately to support ongoing product iterations."
              },
              {
                q: "4. Do you configure cloud servers and database backups?",
                a: "Yes. We configure hosting setups on AWS, Azure, or Google Cloud, establish automated daily database backups, and secure server environments with SSL firewalls."
              },
              {
                q: "5. Where is your team located and how do we coordinate?",
                a: "Our delivery center is based in Sector 54, Golf Course Road, Gurgaon (Delhi NCR). You can contact us via call (+91 8765077474) or email, and we will set up dedicated Slack channels for daily syncs."
              }
            ].map((faq, idx) => (
              <details 
                key={idx} 
                className="group border border-border bg-surface-elevated/20 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden cursor-pointer"
              >
                <summary className="flex items-center justify-between p-5 text-sm sm:text-base font-bold text-foreground select-none outline-none group-open:bg-primary/5 transition-colors">
                  <span>{faq.q}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-primary">
                    <ChevronRight size={18} />
                  </span>
                </summary>
                <div className="p-5 border-t border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed bg-surface-elevated/10">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CONTACT SECTION */}
      <section id="contact-form-section" className="py-24 relative overflow-hidden border-t border-border/40">
        <div className="absolute top-[30%] left-[50%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">Offshore Tech Delivery</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Let&apos;s Build Your <br />
                <span className="text-gradient">Custom Platform</span> Today!
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Connect with our custom software developers in India. We will map out project scopes, set up dedicated sprint boards, and draft support agreements.
              </p>

              {/* Direct Details */}
              <div className="space-y-4 pt-4 text-sm text-muted-foreground">
                <a 
                  href="tel:+918765077474" 
                  className="flex items-center gap-3 hover:text-primary transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full border border-border/80 flex items-center justify-center text-primary bg-primary/5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/50">Call or WhatsApp</p>
                    <p className="font-semibold text-foreground">+91 8765077474</p>
                  </div>
                </a>

                <a 
                  href="mailto:info.onnextweb@gmail.com" 
                  className="flex items-center gap-3 hover:text-primary transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full border border-border/80 flex items-center justify-center text-primary bg-primary/5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/50">Email Support</p>
                    <p className="font-semibold text-foreground">info.onnextweb@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full border border-border/80 flex items-center justify-center text-primary bg-primary/5 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/50">India Workspace Address</p>
                    <p className="font-semibold text-foreground leading-relaxed">
                      Golf Course Road, Sector 54, <br />
                      Gurugram, Haryana – 122002
                    </p>
                  </div>
                </div>
              </div>

              {/* Urgency Callout */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-xs text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Limited Slot Offshore:
                </p>
                <p>Submit your inquiry today and receive a **Free Technical Code Scoping Audit (worth $499)** for your software architecture. Only 2 slots left this week!</p>
              </div>

              {/* Action Links */}
              <div className="flex gap-4 pt-4">
                <a href="tel:+918765077474" className="bg-primary text-primary-foreground text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg hover:glow-accent transition-all duration-300">
                  Call Now
                </a>
                <a href="https://wa.me/918765077474" target="_blank" rel="nofollow noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-surface-elevated/40 border border-border/80 p-8 rounded-2xl space-y-6">
              <LandingPageForm
                title="Request a Free Proposal"
                buttonText="Send Free Proposal Request"
                placeholderMessage="Describe your project details (e.g. database scaling, custom integrations, or mobile apps support)"
                sourcePage="India Bottom Form"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Schema Inject */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does custom software development cost in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our offshore startup MVP builds start at $1,500. Complex enterprise systems, custom CRM/ERP builds, and SaaS platforms are quoted dynamically based on features and scope."
                }
              },
              {
                "@type": "Question",
                "name": "How do you handle IP protection and source code ownership?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We sign standard NDAs to protect your intellectual property. Upon project launch, full Git repository ownership and configuration credentials are handed over directly to your team."
                }
              },
              {
                "@type": "Question",
                "name": "What is the typical project delivery timeline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bespoke applications are typically delivered within 8 to 12 weeks. Dedicated remote developer setups can start sprints immediately to support ongoing product iterations."
                }
              },
              {
                "@type": "Question",
                "name": "Do you configure cloud servers and database backups?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We configure hosting setups on AWS, Azure, or Google Cloud, establish automated daily database backups, and secure server environments with SSL firewalls."
                }
              },
              {
                "@type": "Question",
                "name": "Where is your team located and how do we coordinate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our delivery center is based in Sector 54, Golf Course Road, Gurgaon (Delhi NCR). You can contact us via call (+91 8765077474) or email, and we will set up dedicated Slack channels for daily syncs."
                }
              }
            ]
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.onnextweb.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Custom Software Development Company in India",
                "item": "https://www.onnextweb.in/custom-software-development-company-in-india"
              }
            ]
          })
        }}
      />

      <Footer />
    </div>
  );
}
