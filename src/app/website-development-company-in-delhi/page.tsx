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
  title: "Website Development Company in Delhi | OnNextWeb",
  description: "Best website development company in Delhi. Custom, speed-optimized & affordable business & ecommerce websites engineered to rank and grow sales.",
  alternates: {
    canonical: "https://www.onnextweb.in/website-development-company-in-delhi",
  },
  openGraph: {
    title: "Website Development Company in Delhi | OnNextWeb",
    description: "Get custom, speed-optimized and premium websites in Delhi NCR. Affordable web development services tailored to rank and generate high-intent leads.",
    url: "https://www.onnextweb.in/website-development-company-in-delhi",
    type: "website",
    images: [
      {
        url: "https://www.onnextweb.in/dark-logo.png",
        width: 1200,
        height: 630,
        alt: "Website Development Company in Delhi | OnNextWeb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Delhi | OnNextWeb",
    description: "Get custom, speed-optimized and premium websites in Delhi NCR.",
    images: ["https://www.onnextweb.in/dark-logo.png"],
  },
};

export default function DelhiLandingPage() {
  return (
    <div className="bg-background text-foreground transition-colors duration-500 relative min-h-screen">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />

      {/* Top Banner for Quick Contact */}
      <div className="bg-primary/10 border-b border-primary/20 text-foreground py-2 text-xs sm:text-sm relative z-50 mt-[72px] md:mt-[80px]">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Delhi NCR Office is Active: Get Your Free SEO Audit Report!</span>
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
        {/* Ambient Blur Glows */}
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                🏆 Best Web Design Company in Delhi NCR
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Website Development <br className="hidden sm:inline" />
                Company in <span className="text-gradient">Delhi</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                Tired of slow templates and low lead conversion? OnNextWeb is your professional technology partner. We design super-fast, responsive, and Google-rankings-ready websites starting at just <span className="text-foreground font-semibold">₹19,999</span>! We maintain a 98% success rate in digitalizing brands across Delhi NCR.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50 max-w-md">
                <div>
                  <h4 className="text-2xl font-bold text-foreground">150+</h4>
                  <p className="text-xs text-muted-foreground">Sites Live</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">4.9/5</h4>
                  <p className="text-xs text-muted-foreground">Google Reviews</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">100%</h4>
                  <p className="text-xs text-muted-foreground">Custom Coding</p>
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
                  href="https://wa.me/918765077474?text=Hi%20OnNextWeb,%20I%20am%20looking%20for%20website%20development%20services%20in%20Delhi." 
                  target="_blank" 
                  rel="noopener noreferrer" 
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

            {/* Right Interactive Card / Lead Magnet */}
            <div className="lg:col-span-5">
              <div className="bg-surface-elevated/40 border border-border/80 backdrop-blur-md rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <LandingPageForm
                  title="Discuss Your Web Project"
                  subtitle="Fill details and get a customized proposal with detailed pricing breakdown within 2 hours."
                  buttonText="Submit Quote Request"
                  placeholderMessage="Kya business website banana hai ya ecommerce store?"
                  sourcePage="Delhi Hero Form"
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
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">About Delhi Web Ecosystem</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Why Does Your Business Need a Top-Class Website?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Delhi NCR (including Gurgaon, Noida, and Faridabad) stands as India&apos;s fastest-growing business hub, with thousands of startups registering daily. Yet, research shows that 85% of businesses without a robust digital presence shut down within their first two years. If you search Google, you will find hundreds of competitors capturing local customers. In such a competitive market, a slow, generic template website is simply not enough.
            </p>
            <p>
              Customers frequently search Google with high-intent queries like &quot;<em>website development company in Delhi near me</em>&quot; and &quot;<em>best web development company in Delhi</em>&quot;. If your brand does not show up on the first page, you are handing customers directly to your competitors. OnNextWeb, as an expert <strong>website development company in Delhi</strong>, delivers premium custom layouts that load in under a second and convert casual visitors into paying clients.
            </p>
            <p>
              We build custom visual interfaces that project a premium brand image. Bypassing slow page templates, we code layouts utilizing React, Next.js, and clean CSS code to establish a highly reliable web framework. Whether your business is based in Okhla, Connaught Place, Saket, or Dwarka, our services are optimized to drive regional conversions.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ONNEXTWEB (USPs) */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Our Unique Selling Proposition</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Why Choose OnNextWeb? (Our Trust Factors)
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              While many agencies in Delhi sell generic templates, we measure client success through precise technical parameters and search performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="text-primary" size={24} />,
                title: "100/100 PageSpeed Rating",
                desc: "Our designs are built on modern frontend frameworks. Sites load in under a second, dropping bounce rates and maximizing retention."
              },
              {
                icon: <Globe className="text-primary" size={24} />,
                title: "In-Built SEO Architecture",
                desc: "We integrate high-intent keywords like 'best web development company in Delhi' naturally into semantic HTML tags to ensure search engines rank you quickly."
              },
              {
                icon: <Laptop className="text-primary" size={24} />,
                title: "Vibrant UI/UX Layouts",
                desc: "Modern glassmorphic interfaces, rich micro-interactions, and beautiful transitions designed to capture user trust instantly."
              },
              {
                icon: <ShieldCheck className="text-primary" size={24} />,
                title: "Zero Hidden Maintenance Fee",
                desc: "100% code ownership and direct hosting access handed over upon launch. We do not lock you into hidden monthly maintenance retainers."
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
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Our Expertise</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Website Development Services in Delhi
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Small business se lekar enterprise ecommerce portals tak—hum har model ke liye custom solutions create karte hain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Lead Generation</span>
              <h3 className="font-display text-2xl font-bold">Corporate & Business Websites</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ideal lead generation landing pages and portals for consultancies, clinics, real estate builders, and service firms in Delhi NCR. We integrate optimized contact forms, call-to-actions, and WhatsApp quick-chats to drive high conversion rates.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Integrated CRM Lead Router</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Call & WhatsApp Quick Buttons</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Speed optimized for Google PPC Ads</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">E-Commerce Boost</span>
              <h3 className="font-display text-2xl font-bold">Ecommerce Website Development Delhi</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Establish your custom online storefront. We offer scale-ready <strong className="text-foreground font-semibold">ecommerce website development Delhi</strong> services featuring zero-lag checkout funnels, secure payment gateways (Razorpay, Paytm), and automated inventory management.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> High-speed catalog search engine</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Indian payment gateway integration (Razorpay, Paytm)</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Mobile-first UI for seamless buying</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Pure Customized Code</span>
              <h3 className="font-display text-2xl font-bold">Custom Web App Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bespoke database solutions and web applications that require complex business logic, such as property directory systems, customized customer dashboards, and custom REST/GraphQL APIs built using Next.js and MERN.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> REST & GraphQL API structure</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Highly secure JWT authentication systems</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Cloud database integration (MongoDB, PostgreSQL)</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">CMS Simplicity</span>
              <h3 className="font-display text-2xl font-bold">WordPress & Headless CMS Services</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                WordPress and headless CMS setups tailored to editorial blogs, service directories, and portfolios. We optimize theme files to prevent bloated script load, allowing you to manage content easily without sacrificing page speed.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Elementor / Divi customized layouts</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> SEO plugin integration (RankMath, Yoast)</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Dynamic blog updates and tags</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm mb-4">Internal Link: Want to see our previous deliverables? Explore our full <Link href="/portfolio" className="text-primary underline font-semibold">Portfolio page</Link>.</p>
          </div>
        </div>
      </section>

      {/* MIDDLE PAGE CONTACT & TRUST SECTION */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-purple-600/5 to-primary/5 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Want to Boost Your Website Rankings and Leads in Delhi?</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Reach out via call or WhatsApp. Our developer team will analyze your business domain and prepare a free technical SEO and design blueprint for your brand.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-semibold">
            <a href="tel:+918765077474" className="flex items-center gap-2 bg-background hover:bg-surface-elevated border border-border px-6 py-3.5 rounded-xl transition-all duration-300">
              <Phone size={16} className="text-primary" />
              Direct Call: +91 8765077474
            </a>
            <a href="https://wa.me/918765077474" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 px-6 py-3.5 rounded-xl transition-all duration-300">
              <MessageSquare size={16} />
              WhatsApp: Chat Now
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground pt-2">
            Average response time on WhatsApp: <strong>5 minutes</strong>. Let&apos;s start!
          </p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Workflow Roadmap</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Our Website Development Process
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              We convert your initial project vision into a highly optimized, high-converting digital platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                num: "01",
                phase: "Planning & Strategy",
                desc: "We analyze competitor dynamics and user search intent to map out features, keywords, and semantic structures."
              },
              {
                num: "02",
                phase: "Premium Figma UI/UX",
                desc: "We craft bespoke UI/UX mockups in Figma, ensuring a modern look with smooth layouts and clean brand patterns."
              },
              {
                num: "03",
                phase: "High-Speed Coding",
                desc: "We write clean, semantic code utilizing React, Next.js, and lightweight CSS components tailored for performance."
              },
              {
                num: "04",
                phase: "SEO Tag & FAQ Injection",
                desc: "We incorporate local schema maps and search queries like 'affordable website development Delhi' directly into page layouts."
              },
              {
                num: "05",
                phase: "Launch & Support",
                desc: "We configure server mappings, launch analytics trackers, and offer 60 days of complimentary technical support post-deployment."
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

      {/* CASE STUDIES / RESULTS */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Proven Performance</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Hamare Results Aur Case Studies
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Humne Delhi-NCR ke local businesses ko low traffic aur zero conversions se transform karke rank banwaya hai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Case Study 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 rounded-2xl overflow-hidden group">
              <div className="p-8 space-y-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">3.5x Conversions</span>
                <h3 className="font-display text-xl font-bold">Delhi Tour & Travel Startup (Dynamic Platform)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A Delhi-based tour operator was driving traffic to a slow template site, achieving a conversion rate under 1%. We rebuilt the site using Next.js static rendering and local keyword optimization. Bounce rates dropped from 70% to 25%, and qualified leads jumped by 250%.
                </p>
                <div className="flex gap-6 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  <div>
                    <span className="block text-foreground font-bold">Old Speed</span>
                    <span>4.8 Seconds</span>
                  </div>
                  <div>
                    <span className="block text-emerald-400 font-bold">New Speed</span>
                    <span className="text-emerald-400 font-semibold">0.9 Seconds</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-bold">Primary Target</span>
                    <span>Leads Generation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-surface-elevated/40 border border-border/80 rounded-2xl overflow-hidden group">
              <div className="p-8 space-y-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">Top 5 Rankings</span>
                <h3 className="font-display text-xl font-bold">Premium Fashion E-Commerce Brand (Okhla, Delhi)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  An Okhla-based premium fashion brand required a high-performance custom store with rich micro-animations. We implemented a Next.js e-commerce architecture with visual image optimization. Within 3 months of launch, the brand ranked in Google&apos;s top 5 search queries for local apparel e-commerce.
                </p>
                <div className="flex gap-6 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  <div>
                    <span className="block text-foreground font-bold">Old Sales</span>
                    <span>₹40k / month</span>
                  </div>
                  <div>
                    <span className="block text-emerald-400 font-bold">New Sales</span>
                    <span className="text-emerald-400 font-semibold">₹2.8L / month</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-bold">Core Stack</span>
                    <span>React + Node + Stripe</span>
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
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">Head To Head Comparison</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              How Do We Compare to Other Delhi Web Agencies?
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Saste packages ke naam par copy-paste designs provide karne wali agencies se savdhan rahein.
            </p>
          </div>

          <div className="overflow-x-auto border border-border rounded-xl" data-lenis-prevent>
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-surface-elevated border-b border-border text-foreground font-bold font-display">
                  <th className="p-4 sm:p-5">Features Comparison</th>
                  <th className="p-4 sm:p-5 text-primary">OnNextWeb</th>
                  <th className="p-4 sm:p-5 text-muted-foreground font-normal">Typical Delhi Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">Technology Stack</td>
                  <td className="p-4 text-emerald-400 font-medium">React, Next.js, Tailored custom JS</td>
                  <td className="p-4">Outdated WordPress / Elementor bloating templates</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">Loading Speed Guarantee</td>
                  <td className="p-4 text-emerald-400 font-medium">Under 1.5 seconds (Core Web Vitals Pass)</td>
                  <td className="p-4">3 to 6 seconds (high visitor drop rate)</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">SEO Tag Placement</td>
                  <td className="p-4 text-emerald-400 font-medium">Handcrafted tags & content silos layout</td>
                  <td className="p-4">Auto plugins with zero optimization logic</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">Code Ownership</td>
                  <td className="p-4 text-emerald-400 font-medium">100% Client Access directly via Git Repo</td>
                  <td className="p-4">Hidden backend logic to lock you in monthly retainer</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">UI Visual System</td>
                  <td className="p-4 text-emerald-400 font-medium">Vibrant palettes, curated typography, gradients</td>
                  <td className="p-4">Clunky layouts that look built in 2012</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Niche Expertise</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Industries We Serve in Delhi NCR
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Hum har business segment ke custom user behaviour pattern ko samajhte hain.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto text-center">
            {[
              { label: "Real Estate", icon: "🏢" },
              { label: "Ecommerce & Retail", icon: "🛒" },
              { label: "Healthcare & Clinics", icon: "🩺" },
              { label: "Education & Coaching", icon: "📚" },
              { label: "Tours & Travels", icon: "✈️" },
              { label: "Local Home Services", icon: "🛠️" }
            ].map((ind, idx) => (
              <div key={idx} className="bg-surface-elevated/40 border border-border/80 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group">
                <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{ind.icon}</span>
                <span className="font-medium text-sm text-foreground block">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION (With Accordion/details) */}
      <section className="py-20 bg-surface/50 border-t border-border/40 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">FAQ Schema Ready</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm">
              Website development company in Delhi se related common sawalon ke answers jo client humse aksar puchte hain.
            </p>
          </div>

          {/* FAQ Accordions using semantic <details> for maximum crawlability */}
          <div className="space-y-4">
            {[
              {
                q: "1. How much does a website cost in Delhi?",
                a: "Our local dynamic packages start at ₹19,999. Custom React/Next.js applications, complex e-commerce portals, and enterprise CMS setups are quoted based on the project scope."
              },
              {
                q: "2. How do you implement SEO for Delhi businesses?",
                a: "We deploy search-engine friendly semantic HTML layouts, compress all visual assets, and index schema tags dynamically. We integrate local search terms like 'best web development company in Delhi' naturally to maximize search engine discovery."
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
                q: "5. Do you provide post-launch technical support?",
                a: "We offer 60 days of complimentary technical support post-launch to monitor performance, configure servers, and handle any minor adjustments."
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

      {/* FINAL CONTACT & LEAD CONVERSION SECTION */}
      <section id="contact-form-section" className="py-24 relative overflow-hidden border-t border-border/40">
        <div className="absolute top-[30%] left-[50%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Info details */}
            <div className="space-y-6">
              <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">Let&apos;s Connect</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Let&apos;s Build Your <br />
                <span className="text-gradient">Next Project</span> Together!
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Our office coordinates projects across Delhi, Gurgaon, and Noida. Drop us a line, and our tech team will reach out with customized layout blueprints.
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
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/50">Call or WhatsApp Us</p>
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
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/50">Visit Our Delhi Office</p>
                    <p className="font-semibold text-foreground leading-relaxed">
                      C-25 Abul Fazal, Jamia Nagar, <br />
                      Okhla, New Delhi – 110025
                    </p>
                  </div>
                </div>
              </div>

              {/* Urgency Trigger */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-xs text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Limited Slot Offer:
                </p>
                <p>Submit your inquiry today and receive a **Free Site Speed Optimization Consultation (worth ₹9,999)** to maximize page conversions. Only 2 slots left this week!</p>
              </div>

              {/* CTAs */}
              <div className="flex gap-4 pt-4">
                <a href="tel:+918765077474" className="bg-primary text-primary-foreground text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg hover:glow-accent transition-all duration-300">
                  Call Now
                </a>
                <a href="https://wa.me/918765077474" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Direct Form */}
            <div className="bg-surface-elevated/40 border border-border/80 p-8 rounded-2xl space-y-6">
              <LandingPageForm
                title="Request a Free Proposal"
                buttonText="Send Proposal Request"
                placeholderMessage="Describe your project details (e.g. static pages, custom database scaling, or dynamic CMS systems)"
                sourcePage="Delhi Bottom Form"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Structured Data FAQ Schema Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a website cost in Delhi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our local dynamic packages start at ₹19,999. Custom React/Next.js applications, complex e-commerce portals, and enterprise CMS setups are quoted based on the project scope."
                }
              },
              {
                "@type": "Question",
                "name": "How do you implement SEO for Delhi businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We deploy search-engine friendly semantic HTML layouts, compress all visual assets, and index schema tags dynamically. We integrate local search terms like 'best web development company in Delhi' naturally to maximize search engine discovery."
                }
              },
              {
                "@type": "Question",
                "name": "What is the typical project delivery timeline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Corporate web layouts are completed within 7 to 10 working days. Complex SaaS dashboard builds and custom e-commerce structures usually take 15 to 25 days, inclusive of QA testing."
                }
              },
              {
                "@type": "Question",
                "name": "Can I manage website updates from a dashboard?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We integrate easy-to-use content dashboards (such as Headless CMS or admin control panels) allowing you to add blogs, update services, and manage forms without touching code."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide post-launch technical support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer 60 days of complimentary technical support post-launch to monitor performance, configure servers, and handle any minor adjustments."
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
                "name": "Website Development Company in Delhi",
                "item": "https://www.onnextweb.in/website-development-company-in-delhi"
              }
            ]
          })
        }}
      />

      <Footer />
    </div>
  );
}
