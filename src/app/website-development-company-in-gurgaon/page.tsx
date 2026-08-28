import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
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
  title: "Web Development Company in Gurgaon | ON Next Web",
  description: "Website development company serving businesses in Gurgaon & Delhi NCR. We build custom, high-speed Next.js web applications to scale your digital presence.",
  alternates: {
    canonical: "https://www.onnextweb.in/website-development-company-in-gurgaon",
  },
  openGraph: {
    title: "Web Development Company in Gurgaon | ON Next Web",
    description: "Website development company serving businesses in Gurgaon & Delhi NCR. We build custom, high-speed Next.js web applications to scale your digital presence.",
    url: "https://www.onnextweb.in/website-development-company-in-gurgaon",
    type: "website",
    images: [
      {
        url: "https://www.onnextweb.in/dark-logo.png",
        width: 1200,
        height: 630,
        alt: "Web Development Company in Gurgaon | ON Next Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Gurgaon | ON Next Web",
    description: "Website development company serving businesses in Gurgaon.",
    images: ["https://www.onnextweb.in/dark-logo.png"],
  },
};

export default function GurgaonLandingPage() {
  return (
    <div className="bg-background text-foreground transition-colors duration-500 relative min-h-screen">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />

      {/* Top Quick Contact Bar */}
      <div className="bg-primary/10 border-b border-primary/20 text-foreground py-2 text-xs sm:text-sm relative z-50 mt-[72px] md:mt-[80px]">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span>Serving Businesses Across Gurgaon &amp; Golf Course Road IT Corridor!</span>
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
          <Breadcrumbs items={[{ label: "Locations", href: "/#locations" }, { label: "Gurgaon" }]} />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                💼 Web Development Services for Gurgaon &amp; Cyber City
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Website Development <br className="hidden sm:inline" />
                Company in <span className="text-gradient">Gurgaon</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                ON Next Web provides custom website development services for businesses in Gurgaon, Cyber City, Golf Course Road, and the wider Delhi NCR region. We build corporate websites, e-commerce platforms, and custom web applications using modern technologies such as Next.js, React, Node.js, and TypeScript.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50 max-w-md">
                <div>
                  <h4 className="text-2xl font-bold text-foreground">Custom</h4>
                  <p className="text-xs text-muted-foreground">Web Engineering</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">Client Focused</h4>
                  <p className="text-xs text-muted-foreground">Dedicated Support</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">Next.js</h4>
                  <p className="text-xs text-muted-foreground">Modern Stack</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a 
                  href="tel:+918765077474" 
                  className="bg-primary text-primary-foreground font-medium px-8 py-4 rounded-xl hover:glow-accent hover:bg-primary/95 transition-all duration-300 flex items-center gap-2 group cursor-pointer text-base"
                >
                  <Phone size={18} />
                  Call Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/918765077474?text=Hi%20OnNextWeb,%20I%20am%20looking%20for%20website%20development%20services%20in%20Gurgaon." 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer text-base"
                >
                  <MessageSquare size={18} />
                  Chat on WhatsApp
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
                  title="Build Your Next Web Project"
                  subtitle="Get a complete design roadmap and transparent pricing tailored to your custom specifications."
                  buttonText="Submit Proposal Request"
                  placeholderMessage="SaaS dashboard development, ecommerce, or enterprise landing page?"
                  sourcePage="Gurgaon Hero Form"
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
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Gurgaon Web Ecosystem</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Why Does Your Brand Need a Dynamic, High-Performance Website?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Gurgaon (Gurugram) has evolved into India&apos;s preeminent digital center point. Multinational enterprises, real estate giants, and venture-funded tech startups across Cyber City, DLF Phases 1-5, and Golf Course Road demand a top-tier visual footprint. In this global landscape, generic drag-and-drop templates fail to perform. Slow load speeds and poorly optimized structures lead directly to high bounce rates and lost opportunities.
            </p>
            <p>
              Customers frequently search using localized queries like &quot;<em>website development company in Gurgaon near me</em>&quot; and &quot;<em>best web development company in Gurgaon</em>&quot;. If your brand does not rank in these top search results, you lose valuable leads. OnNextWeb, as a pioneer <strong>website development company in Gurgaon</strong>, engineers custom development architectures built on Next.js, React, Node, and tailwind configurations, providing you with rapid load speeds and a distinct competitive edge.
            </p>
            <p>
              With our presence in Gurgaon Sector 54, local client communication and coordination remain fast and secure. From bespoke corporate portfolios to scaling e-commerce platforms, we deliver high-performance layouts that drive sales across Gurgaon NCR, Sohna Road, and DLF hubs.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ONNEXTWEB (USPs) */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">The Corporate Edge</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Why Choose OnNextWeb? (Premium Trust Benchmarks)
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              We implement strict software engineering standards to ensure your brand establishes a dominant digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="text-primary" size={24} />,
                title: "Next.js Static Generation",
                desc: "Server-side rendering and static-site generation. Pages load in milliseconds, boosting search engine crawl optimization scores."
              },
              {
                icon: <Globe className="text-primary" size={24} />,
                title: "Local Schema & SEO Layout",
                desc: "We weave high-intent keywords like 'web design company in Gurgaon' directly into your page's metadata structure for quick search engine indexing."
              },
              {
                icon: <Laptop className="text-primary" size={24} />,
                title: "Responsive Glassmorphic UI",
                desc: "Fluid layouts, glassmorphic interfaces, smooth interaction states, and dark/light themes designed to double your visual conversions."
              },
              {
                icon: <ShieldCheck className="text-primary" size={24} />,
                title: "Full Code Repository Transfer",
                desc: "100% GitHub source code access and absolute ownership transfer. We never tie you down to monthly retainers or locked-in platforms."
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
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">What We Build</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Website Development Services in Gurgaon
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Modern tech stacks optimized for scaling tech companies, corporate houses, and retail stores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Startups & Corporates</span>
              <h3 className="font-display text-2xl font-bold">Premium Business Portfolios</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                High-performing, scale-ready portfolios built for Gurgaon&apos;s startups and corporate leaders. We integrate smooth navigations, customized lead query routing, and clear call-to-actions. All designs utilize modern CSS styles and custom micro-interactions.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Multi-language dynamic translations</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Integrated newsletter & subscriber funnels</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Google maps & local citation endpoints</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Ecommerce Scale</span>
              <h3 className="font-display text-2xl font-bold">Ecommerce Website Development Gurgaon</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Build your independent, self-hosted e-commerce store. OnNextWeb provides custom <strong className="text-foreground font-semibold">ecommerce website development Gurgaon</strong> setups featuring rapid checkouts, Stripe/Razorpay gateway integrations, inventory dashboards, and promo engines.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Checkout load optimization under 0.8s</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Integrated payment integrations (Razorpay, Stripe)</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Real-time order tracking notifications endpoints</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">SaaS & MVPs</span>
              <h3 className="font-display text-2xl font-bold">SaaS Products & Dynamic Dashboards</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Designing a SaaS platform or tech startup MVP? We engineer secure client portals, data dashboards, database queries, and custom REST/GraphQL APIs utilizing Next.js, Node.js, Express, and cloud storage systems.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Secure authentication architectures (JWT, OAuth)</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Real-time charting integrations (Recharts, ChartJS)</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Elastic cloud servers scaling configuration</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">WordPress Customization</span>
              <h3 className="font-display text-2xl font-bold">Headless WordPress & CMS Setups</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Flexible content management systems tailored to your needs. We optimize WordPress and headless CMS architectures (like Sanity or Strapi) to maintain fast page speed metrics while allowing easy content updates.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> High-speed GraphQL content delivery pipelines</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> ACF (Advanced Custom Fields) architecture layouts</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Complete security audit configurations</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm mb-4">Want to see our live product designs? View our comprehensive <Link href="/portfolio" className="text-primary underline font-semibold">Web Development Portfolio & Case Studies</Link> or explore our agency hubs in <Link href="/website-development-company-in-delhi" className="text-primary underline font-semibold">Delhi</Link> and <Link href="/website-development-company-in-noida" className="text-primary underline font-semibold">Noida</Link>.</p>
          </div>
        </div>
      </section>

      {/* MIDDLE PAGE CALLOUT */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-purple-600/5 to-primary/5 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Want to Boost Your Website Rankings and Leads in Gurgaon?</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Connect directly with our Gurgaon developer team. We will provide a comprehensive technical design blueprint for your project completely free.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-semibold">
            <a href="tel:+918765077474" className="flex items-center gap-2 bg-background hover:bg-surface-elevated border border-border px-6 py-3.5 rounded-xl transition-all duration-300">
              <Phone size={16} className="text-primary" />
              Call Gurgaon Office: +91 8765077474
            </a>
            <a href="https://wa.me/918765077474" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-2 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 px-6 py-3.5 rounded-xl transition-all duration-300">
              <MessageSquare size={16} />
              WhatsApp: Connect Instantly
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground pt-2">
            Quick responses on WhatsApp. Let&apos;s build next-gen software systems.
          </p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Agile Workflow</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Our Website Development Process (Step-by-Step)
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              We structure the design and development pipeline into clear Agile sprints focused on quality deliverables.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                num: "01",
                phase: "Consultation & Discovery",
                desc: "We discuss requirements during meetings at our Gurgaon office or over video calls to define your competitive digital strategy."
              },
              {
                num: "02",
                phase: "UI/UX Prototyping",
                desc: "We draft visual prototypes and user journeys in Figma to establish design clarity before writing code."
              },
              {
                num: "03",
                phase: "Modern Code Integration",
                desc: "We develop your platform utilizing clean, production-grade Next.js, React, or Node.js configurations."
              },
              {
                num: "04",
                phase: "Core SEO & Schema Audit",
                desc: "We perform tags mapping and inject keyword clusters like 'website development company in Gurgaon' into semantic page elements."
              },
              {
                num: "05",
                phase: "Production Deploy & Support",
                desc: "We configure domain mappings, launch analytics tracking, and establish continuous maintenance systems."
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
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Proven Delivery</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Gurgaon Real-World Case Studies
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              How we redesigned outdated systems and delivered 3x conversion improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Case Study 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 rounded-2xl overflow-hidden group">
              <div className="p-8 space-y-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">300% Lead Growth</span>
                <h3 className="font-display text-xl font-bold">Premium Real Estate Portal (Golf Course Road)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A prominent real estate agency on Golf Course Road was running expensive PPC ads but suffered from a 65% bounce rate due to a slow template site. We developed a custom static Next.js site, integrated an interactive calculator tool, and optimized local search schema. Page speeds boosted by 4.5x (loading under 0.8 seconds), resulting in a 3x increase in qualified leads.
                </p>
                <div className="flex gap-6 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  <div>
                    <span className="block text-foreground font-bold">Old Conversion</span>
                    <span>1.2% rate</span>
                  </div>
                  <div>
                    <span className="block text-emerald-400 font-bold">New Conversion</span>
                    <span className="text-emerald-400 font-semibold">4.8% rate</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-bold">Visual Design</span>
                    <span>Modern Glassmorphism</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-surface-elevated/40 border border-border/80 rounded-2xl overflow-hidden group">
              <div className="p-8 space-y-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">Top 3 Rankings</span>
                <h3 className="font-display text-xl font-bold">High-End SaaS Platform (Sohna Road, Gurgaon)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A tech SaaS startup on Sohna Road required a modern visual revamp and codebase speed optimization. We developed a custom React application linked to backend API systems and optimized the local search architecture. The site now ranks in Google&apos;s top 3 search results for Gurgaon web development keywords.
                </p>
                <div className="flex gap-6 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  <div>
                    <span className="block text-foreground font-bold">Initial load</span>
                    <span>3.9 seconds</span>
                  </div>
                  <div>
                    <span className="block text-emerald-400 font-bold">Optimized load</span>
                    <span className="text-emerald-400 font-semibold">1.1 seconds</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-bold">Tech Stack</span>
                    <span>Next.js + Tailwind + Node</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BETTER THAN OTHER AGENCIES */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">Competitor Comparison</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              How Do We Compare to Other Gurgaon Web Agencies?
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Quality engineering vs simple template layouts. Compare key trust parameters head to head.
            </p>
          </div>

          <div className="overflow-x-auto border border-border rounded-xl">
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
                  <td className="p-4 text-emerald-400 font-medium">React, Next.js, Headless CMS setups</td>
                  <td className="p-4">Outdated clunky PHP / WordPress templates</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">Design Methodology</td>
                  <td className="p-4 text-emerald-400 font-medium">Bespoke Figma UI system, rich micro-interactions</td>
                  <td className="p-4">Copy-paste layouts that look dated</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">SEO Optimization Logic</td>
                  <td className="p-4 text-emerald-400 font-medium">Inbuilt semantic tag mapping & JSON-LD schemas</td>
                  <td className="p-4">Basic third-party plugins with raw optimization settings</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">Ownership Standards</td>
                  <td className="p-4 text-emerald-400 font-medium">100% Repository & hosting configurations transfer</td>
                  <td className="p-4">Proprietary setups to lock you into hosting retainers</td>
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
              Industries We Serve in Gurgaon NCR
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              We understand custom user flows for different business sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto text-center">
            {[
              { label: "SaaS Startups", icon: "🚀" },
              { label: "Real Estate Giants", icon: "🏢" },
              { label: "Fintech & Finance", icon: "💳" },
              { label: "Luxury Retail", icon: "👜" },
              { label: "Healthcare Systems", icon: "🩺" },
              { label: "Consulting Firms", icon: "📊" }
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
              Answers to common queries regarding web development options in Gurgaon.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "1. How much does a website cost in Gurgaon?",
                a: "Our local dynamic packages start at ₹19,999. Custom React/Next.js applications, complex API integrations, and corporate portals are quoted dynamically based on the project scope."
              },
              {
                q: "2. How do you implement SEO for Gurgaon businesses?",
                a: "We deploy search-engine friendly semantic HTML layouts, compress all visual assets, and index schema tags dynamically. We integrate local search terms like 'best web development company in Gurgaon' naturally to maximize search engine discovery."
              },
              {
                q: "3. What is the typical project delivery timeline?",
                a: "Corporate web layouts are completed within 7 to 10 working days. Complex SaaS dashboard builds and custom e-commerce structures usually take 15 to 25 days, inclusive of QA testing."
              },
              {
                q: "4. Can I manage website updates from a dashboard?",
                a: "Yes. We integrate easy-to-use content dashboards (such as Headless CMS or admin control panels) allowing you to add blogs, update services, and manage forms without touching code."
              },
              {
                q: "5. How do I schedule a meeting at your Gurgaon office?",
                a: "Our core workspace is located on Golf Course Road, Sector 54, Gurgaon. You can reach out via call (+91 8765077474) or email, and we will schedule an in-person session to discuss your project requirements."
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
              <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">Locations Contact</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Let&apos;s Build Your <br />
                <span className="text-gradient">Custom Platform</span> Today!
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Connect with our local Gurgaon developers. Direct meetings are active at our Golf Course Road workspace sector 54. Get a high-converting roadmap.
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
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/50">Service Coverage</p>
                    <p className="font-semibold text-foreground leading-relaxed">
                      Serving Businesses Across Gurgaon, <br />
                      Cyber City, Golf Course Road &amp; Delhi NCR
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Evaluation Callout */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-xs text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground flex items-center gap-2">
                  Technical Performance Consultation:
                </p>
                <p>Submit your project inquiry today for a technical code audit and website speed evaluation tailored to your business requirements.</p>
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
                placeholderMessage="Describe your project details (e.g. static pages, custom database scaling, or dynamic CMS systems)"
                sourcePage="Gurgaon Bottom Form"
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
                "name": "How much does a website cost in Gurgaon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our web development solutions start at ₹19,999 for foundational business websites. Custom Next.js applications, complex API integrations, and enterprise web portals are quoted dynamically based on technical scope."
                }
              },
              {
                "@type": "Question",
                "name": "How do you implement SEO for Gurgaon businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We deploy search-engine friendly semantic HTML layouts, optimize Core Web Vitals, and structure JSON-LD metadata. We ensure search engines can easily index your services for Gurgaon and regional markets."
                }
              },
              {
                "@type": "Question",
                "name": "What is the typical project delivery timeline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard corporate web layouts are completed within 7 to 10 working days. Custom SaaS platforms and complex e-commerce builds usually require 15 to 25 days, inclusive of rigorous QA testing."
                }
              },
              {
                "@type": "Question",
                "name": "Can I manage website updates from a dashboard?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We integrate easy-to-use content dashboards allowing you to post blogs, update services, and manage form submissions independently."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get started with website development in Gurgaon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can get started by calling us (+91 8765077474), emailing info.onnextweb@gmail.com, or submitting a project inquiry. Our technical team will review your requirements and provide a detailed architecture proposal."
                }
              }
            ]
          })
        }}
      />

      {/* Service Schema for Gurgaon */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Website Development Services in Gurgaon",
            "provider": {
              "@type": "Organization",
              "@id": "https://www.onnextweb.in/#organization",
              "name": "ON Next Web",
              "url": "https://www.onnextweb.in"
            },
            "areaServed": {
              "@type": "City",
              "name": "Gurgaon"
            },
            "serviceType": "Web Development & Custom Software Engineering",
            "url": "https://www.onnextweb.in/website-development-company-in-gurgaon"
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
                "name": "Website Development Company in Gurgaon",
                "item": "https://www.onnextweb.in/website-development-company-in-gurgaon"
              }
            ]
          })
        }}
      />

      <Footer />
    </div>
  );
}
