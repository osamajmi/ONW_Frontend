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
  ArrowRight, 
  Globe, 
  Laptop, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  MessageSquare,
  Code,
  Layers,
  Search,
  FileText,
  CheckCircle2,
  HelpCircle,
  Clock,
  Layers3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Company in Noida | ON Next Web",
  description: "ON Next Web provides website development services across Noida & Greater Noida, including business websites, ecommerce platforms, and custom web applications.",
  alternates: {
    canonical: "https://www.onnextweb.in/website-development-company-in-noida",
  },
  openGraph: {
    title: "Website Development Company in Noida | ON Next Web",
    description: "ON Next Web provides website development services across Noida & Greater Noida, including business websites, ecommerce platforms, and custom web applications.",
    url: "https://www.onnextweb.in/website-development-company-in-noida",
    type: "website",
    images: [
      {
        url: "https://www.onnextweb.in/dark-logo.png",
        width: 1200,
        height: 630,
        alt: "Website Development Company in Noida | ON Next Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Noida | ON Next Web",
    description: "ON Next Web provides website development services across Noida & Greater Noida.",
    images: ["https://www.onnextweb.in/dark-logo.png"],
  },
};

export default function NoidaLandingPage() {
  return (
    <div className="bg-background text-foreground transition-colors duration-500 relative min-h-screen">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />

      {/* Top Quick Contact Bar */}
      <div className="bg-primary/10 border-b border-primary/20 text-foreground py-2 text-xs sm:text-sm relative z-50 mt-[72px] md:mt-[80px]">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span>Serving Businesses Across Noida &amp; Greater Noida</span>
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
      <section className="relative pt-12 pb-24 md:py-28 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumbs items={[{ label: "Locations", href: "/#locations" }, { label: "Noida" }]} />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                Web Development Services for Noida &amp; Greater Noida
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Website Development <br className="hidden sm:inline" />
                Company in <span className="text-gradient">Noida</span>
              </h1>
              
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl font-light">
                ON Next Web provides website development services for startups, small businesses, and growing companies across Noida and Greater Noida. We build fast, responsive business websites, ecommerce platforms, and custom web applications using technologies such as Next.js, React, and Node.js.
              </p>
              
              <p className="text-sm text-muted-foreground/90 leading-relaxed max-w-2xl bg-surface-elevated/30 border border-border/60 p-4 rounded-xl">
                Our team operates from New Delhi and provides web development services to businesses across Noida, Greater Noida, and the wider Delhi NCR region.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-border/50 max-w-md">
                <div>
                  <h4 className="text-xl font-bold text-foreground">Custom</h4>
                  <p className="text-xs text-muted-foreground">Tailored Engineering</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">Direct Support</h4>
                  <p className="text-xs text-muted-foreground">Developer Communication</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">100%</h4>
                  <p className="text-xs text-muted-foreground">Code Ownership</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#contact-form-section" 
                  className="bg-primary text-primary-foreground font-medium px-7 py-3.5 rounded-xl hover:glow-accent hover:bg-primary/95 transition-all duration-300 flex items-center gap-2 group cursor-pointer text-base"
                >
                  Get a Free Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+918765077474" 
                  className="border border-border hover:border-primary/50 bg-surface-elevated/40 hover:bg-primary/5 text-foreground px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium cursor-pointer text-base"
                >
                  <Phone size={17} className="text-primary" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/918765077474?text=Hi%20ON%20Next%20Web,%20I%20am%20looking%20for%20website%20development%20services%20in%20Noida." 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-medium px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer text-base"
                >
                  <MessageSquare size={17} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-surface-elevated/40 border border-border/80 backdrop-blur-md rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <LandingPageForm
                  title="Request a Free Website Quote"
                  subtitle="Share your project requirements to receive a customized technical blueprint and estimated timeline."
                  buttonText="Get Free Proposal"
                  placeholderMessage="Tell us about your project (e.g., corporate website, ecommerce store, or custom web portal)"
                  sourcePage="Noida Hero Form"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 border-t border-border/40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Comprehensive Offerings</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Website Development Services in Noida
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              We design and build custom digital products tailored to your operational goals, customer acquisition channels, and technical requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/30 p-8 rounded-2xl space-y-4 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Globe size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Business Website Development</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We build corporate websites, company profiles, service portals, lead-generation pages, and interactive product catalogs. Designed for clarity, brand credibility, and mobile responsiveness.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground pt-4 border-t border-border/40">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Custom, responsive UI/UX layouts</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Lead capture &amp; CRM integration</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Structured metadata &amp; performance optimization</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/30 p-8 rounded-2xl space-y-4 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Laptop size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Ecommerce Website Development</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tailored online storefronts equipped with organized product catalogs, secure checkout flows, payment gateway integrations (Razorpay, Paytm, Stripe), and user-friendly admin panels.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground pt-4 border-t border-border/40">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Structured product filters &amp; categories</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Payment API &amp; invoice handling</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Order &amp; inventory management tools</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/30 p-8 rounded-2xl space-y-4 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Code size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Custom Web Application Development</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bespoke web applications, internal tools, customer portals, booking systems, and analytical dashboards engineered with React, Node.js, and modern database architectures.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground pt-4 border-t border-border/40">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Role-based user authentication</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Interactive analytics &amp; reporting UI</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Database integration (PostgreSQL, MongoDB)</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/30 p-8 rounded-2xl space-y-4 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Zap size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Next.js &amp; React Development</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Modern JavaScript framework architecture for applications that require fast page rendering, server-side dynamic capabilities, static generation, and modular component structures.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground pt-4 border-t border-border/40">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Server-side rendering &amp; static site generation</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Clean component-based architecture</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Seamless API integrations</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/30 p-8 rounded-2xl space-y-4 transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Layers size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">CMS Development (WordPress &amp; Headless)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We configure flexible content management systems including customized WordPress builds and headless CMS solutions like Sanity or Strapi. This enables your team to update content, post articles, and publish media independently.
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground pt-4 border-t border-border/40">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Intuitive admin dashboards for content teams</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Clean visual layout control</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Structured metadata &amp; blogging tools</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary shrink-0" /> Security &amp; asset optimization standards</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12 bg-surface-elevated/20 border border-border/60 p-6 rounded-xl max-w-4xl mx-auto">
            <p className="text-muted-foreground text-sm">
              Looking to explore our complete capabilities? Learn more about <Link href="/services/web-development" className="text-primary underline font-medium">our web development services</Link>, view live examples in <Link href="/portfolio" className="text-primary underline font-medium">our work portfolio</Link>, or check regional services in <Link href="/website-development-company-in-delhi" className="text-primary underline font-medium">Delhi</Link> and <Link href="/website-development-company-in-gurgaon" className="text-primary underline font-medium">Gurgaon</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ON NEXT WEB */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Core Value Principles</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Why Choose ON Next Web for Website Development?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              We focus on building websites that combine clean technical architecture, responsive user interfaces, and search-engine-friendly foundations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="text-primary" size={24} />,
                title: "1. Modern Technology Stack",
                desc: "We build with Next.js, React, Node.js, and TypeScript, selecting frameworks based on project requirements rather than forcing every client into a rigid template."
              },
              {
                icon: <Layers3 className="text-primary" size={24} />,
                title: "2. Custom Development",
                desc: "Every website is tailored to your business model, customer journey, and branding goals instead of relying on generic pre-built designs."
              },
              {
                icon: <Zap className="text-primary" size={24} />,
                title: "3. Performance-Focused Development",
                desc: "We prioritize clean code structure, optimized media assets, semantic HTML, and fast loading layouts across all mobile and desktop viewports."
              },
              {
                icon: <Search className="text-primary" size={24} />,
                title: "4. SEO-Friendly Foundations",
                desc: "Built-in technical SEO essentials: crawlable page hierarchy, semantic tags, canonical URLs, sitemaps, structured JSON-LD schema, and internal linking."
              },
              {
                icon: <ShieldCheck className="text-primary" size={24} />,
                title: "5. Complete Code Ownership",
                desc: "You retain 100% ownership of your project repository, assets, and platform login credentials upon project completion."
              },
              {
                icon: <Clock className="text-primary" size={24} />,
                title: "6. Dedicated Post-Launch Support",
                desc: "Every project includes 60 days of post-launch technical assistance for server configuration, performance checkups, and minor adjustments."
              }
            ].map((usp, idx) => (
              <div key={idx} className="bg-surface-elevated/40 border border-border/80 p-6 rounded-2xl space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{usp.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL RELEVANCE SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Regional Business Context</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Website Development for Businesses Across Noida
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
              Noida is home to a diverse commercial landscape. We tailor web platforms to match the unique operational and marketing goals of companies across key commercial sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-elevated/40 border border-border/80 p-6 rounded-2xl space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Commercial Hub</span>
              <h3 className="font-display text-xl font-bold">Sector 62 &amp; Sector 63</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Technology companies, B2B service firms, SaaS businesses, and corporate consultancies operating in Sector 62 and Sector 63 often require lead-generation architecture, CRM integrations, and custom web applications to present their services clearly.
              </p>
            </div>

            <div className="bg-surface-elevated/40 border border-border/80 p-6 rounded-2xl space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Media &amp; Entertainment</span>
              <h3 className="font-display text-xl font-bold">Film City &amp; Sector 16</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Media houses, production studios, and publication brands in Film City require high-impact visual portfolios, media-rich layouts, fast asset loading, and flexible content publishing platforms.
              </p>
            </div>

            <div className="bg-surface-elevated/40 border border-border/80 p-6 rounded-2xl space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Industrial &amp; Corporate</span>
              <h3 className="font-display text-xl font-bold">Noida Expressway &amp; Greater Noida</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Real estate developers, manufacturing units, educational institutions, and logistics firms along the Expressway and Greater Noida need comprehensive corporate portals, product catalogs, and inquiry workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Structured Delivery</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Our Website Development Process
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              We convert your business requirements into fully functional custom websites with a structured 6-step workflow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                num: "01",
                phase: "Discovery & Requirements",
                desc: "We analyze your business goals, target audience, competitive landscape, and required features to establish project scope."
              },
              {
                num: "02",
                phase: "UI/UX Planning",
                desc: "We craft visual mockups in Figma, setting up color palettes, typography, responsive grids, and intuitive navigation flows."
              },
              {
                num: "03",
                phase: "Development",
                desc: "We write clean, modular frontend and backend code utilizing technologies like Next.js, React, and Node.js."
              },
              {
                num: "04",
                phase: "Technical SEO Setup",
                desc: "We implement semantic HTML elements, meta tags, canonical setups, XML sitemaps, open graph data, and structured JSON-LD schema."
              },
              {
                num: "05",
                phase: "Launch",
                desc: "We conduct quality assurance testing across devices, configure production hosting servers, SSL security, and complete domain deployment."
              },
              {
                num: "06",
                phase: "Support & Improvements",
                desc: "We provide 60 days of post-launch technical assistance to ensure smooth operation, handle minor updates, and monitor site stability."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-surface-elevated/20 border border-border/60 p-6 rounded-xl relative space-y-3">
                <span className="font-display text-3xl font-extrabold text-primary/30 block">{step.num}</span>
                <h3 className="font-display text-base font-bold text-foreground">{step.phase}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER GUIDE (REPLACING COMPETITOR BASHING) */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Decision Framework</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              What to Look for When Choosing a Web Development Company in Noida
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Evaluating web development partners requires examining objective criteria to ensure your digital project succeeds long-term.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Relevant Development Experience & Technology Selection",
                desc: "Ensure the agency works with modern, proven technologies (such as React, Next.js, or Node.js) suited to your long-term goals, rather than forcing your project into a rigid, legacy template."
              },
              {
                title: "Mobile Responsiveness & Performance Standards",
                desc: "A reliable development partner tests layouts thoroughly across mobile, tablet, and desktop viewports, optimizing asset sizes and script loading to maintain responsive user experiences."
              },
              {
                title: "Technical SEO Foundations",
                desc: "Look for developers who build with semantic HTML5 hierarchy, proper meta tags, clean URL structures, XML sitemaps, and structured JSON-LD schema directly into the codebase during initial development."
              },
              {
                title: "Complete Code & Credential Ownership",
                desc: "Confirm that your company will retain full repository access, code ownership, and administrative credentials once the website is completed, avoiding unnecessary retainer lock-ins."
              },
              {
                title: "Transparent Scope, Pricing & Support",
                desc: "Choose a development partner that provides detailed project specifications, clear timeline milestones, and defined post-launch support commitments."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface-elevated/40 border border-border/80 p-6 rounded-xl space-y-2">
                <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST SECTION */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Investment &amp; Pricing</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              How Much Does Website Development Cost in Noida?
            </h2>
          </div>

          <div className="bg-surface-elevated/40 border border-border/80 p-8 rounded-2xl space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>
              Website development costs in Noida vary depending on the technical scope, design complexity, page count, and integration requirements. A simple business website and a custom ecommerce platform require very different development architectures.
            </p>
            <p>
              Foundational business websites start at <strong className="text-foreground font-semibold">₹19,999</strong>, which covers core company pages, responsive mobile design, lead capture forms, and foundational technical SEO. Custom ecommerce portals, complex SaaS dashboards, and multi-featured web applications are quoted based on specific feature requirements.
            </p>

            <div className="pt-4 border-t border-border/60">
              <h3 className="text-lg font-bold text-foreground mb-3 font-display">Key Factors Influencing Website Pricing:</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Number of unique page templates</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Custom UI/UX vs pre-styled frameworks</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Ecommerce checkout &amp; payment gateways</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Database &amp; custom API integrations</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> User authentication &amp; role dashboards</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Content management &amp; admin controls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Project Timelines</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              How Long Does Website Development Take?
            </h2>
          </div>

          <div className="bg-surface-elevated/40 border border-border/80 p-8 rounded-2xl space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>
              Website development timelines depend on project complexity, number of pages, custom features, content readiness, and review cycles.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="bg-background/60 border border-border/60 p-5 rounded-xl space-y-2">
                <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  Standard Business Websites
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Typically completed within <strong className="text-foreground">7 to 10 business days</strong> following initial requirement confirmation and asset collection.
                </p>
              </div>

              <div className="bg-background/60 border border-border/60 p-5 rounded-xl space-y-2">
                <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  Custom Web Apps &amp; Ecommerce
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Typically completed within <strong className="text-foreground">15 to 25 business days</strong>, inclusive of QA testing, API integration, and database setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION EXAMPLES (CAPABILITY SHOWCASE) */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Capability Showcase</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              What We Can Build for Noida Businesses
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Explore capability solution examples demonstrating the types of digital platforms we design and engineer for growing businesses across Noida &amp; Greater Noida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Example 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 rounded-2xl p-8 space-y-4">
              <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase">B2B Solution Example</span>
              <h3 className="font-display text-xl font-bold text-foreground">Manufacturing Product Catalog Platform</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Designed for industrial suppliers and export companies requiring categorized product showcases, technical specification sheets, and automated lead inquiry forms.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                <span className="bg-background px-2.5 py-1 rounded border border-border">Next.js Rendering</span>
                <span className="bg-background px-2.5 py-1 rounded border border-border">Product Filters</span>
                <span className="bg-background px-2.5 py-1 rounded border border-border">Lead Routing</span>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-surface-elevated/40 border border-border/80 rounded-2xl p-8 space-y-4">
              <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase">Retail Solution Example</span>
              <h3 className="font-display text-xl font-bold text-foreground">Ecommerce Retail Storefront</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tailored for independent brands needing digital storefronts with fast page loading, shopping cart management, Razorpay/Paytm integration, and mobile checkout.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                <span className="bg-background px-2.5 py-1 rounded border border-border">Secure Checkout</span>
                <span className="bg-background px-2.5 py-1 rounded border border-border">Payment API Sync</span>
                <span className="bg-background px-2.5 py-1 rounded border border-border">Inventory Admin</span>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-surface-elevated/40 border border-border/80 rounded-2xl p-8 space-y-4">
              <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase">Corporate Solution Example</span>
              <h3 className="font-display text-xl font-bold text-foreground">Corporate Lead Generation Portal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Engineered for professional service providers and IT firms needing clean service pages, case study sections, semantic technical SEO foundations, and conversion-focused CTAs.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                <span className="bg-background px-2.5 py-1 rounded border border-border">Structured Data</span>
                <span className="bg-background px-2.5 py-1 rounded border border-border">Service Pages</span>
                <span className="bg-background px-2.5 py-1 rounded border border-border">Fast Navigation</span>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-surface-elevated/40 border border-border/80 rounded-2xl p-8 space-y-4">
              <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase">Web App Solution Example</span>
              <h3 className="font-display text-xl font-bold text-foreground">Custom Business Application &amp; Portal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Built for real estate agencies, educational institutes, or logistics operations requiring custom client portals, user dashboards, and role-based data views.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                <span className="bg-background px-2.5 py-1 rounded border border-border">React + Node.js</span>
                <span className="bg-background px-2.5 py-1 rounded border border-border">JWT Auth</span>
                <span className="bg-background px-2.5 py-1 rounded border border-border">Custom DB Schema</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Information Hub</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm">
              Answers to common questions regarding website development services for Noida &amp; Greater Noida businesses.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "1. How much does website development cost in Noida?",
                a: "Website development costs depend on project scope, design complexity, and required features. Foundational business websites start at ₹19,999, while custom ecommerce platforms and web applications are quoted based on specific technical requirements."
              },
              {
                q: "2. How long does it take to develop a business website?",
                a: "Standard business websites typically take between 7 to 10 business days to complete. Complex custom applications and ecommerce stores generally require 15 to 25 business days depending on design approvals and integration complexity."
              },
              {
                q: "3. Does ON Next Web have an office in Noida?",
                a: "ON Next Web is based in New Delhi (Jamia Nagar, Okhla) and provides website development services to businesses across Noida, Greater Noida, and the wider Delhi NCR region. We conduct project discussions via phone, email, video conferencing, or arranged in-person meetings as required."
              },
              {
                q: "4. Do you develop ecommerce websites for Noida businesses?",
                a: "Yes. We build custom ecommerce websites with product catalogs, shopping carts, secure payment gateway integrations (such as Razorpay and Paytm), order notifications, and inventory control dashboards."
              },
              {
                q: "5. Can you build a custom web application?",
                a: "Yes. We develop custom web applications, client portals, internal dashboards, and management tools using React, Next.js, Node.js, and modern database platforms like MongoDB or PostgreSQL."
              },
              {
                q: "6. Do you work with Next.js and React?",
                a: "Yes. Next.js and React are core technologies in our development stack. We use them to build fast, scalable, and responsive web applications with modern architecture."
              },
              {
                q: "7. Will my website be SEO-friendly?",
                a: "Yes. We build every website with technical SEO foundations including semantic HTML5 structure, optimized page speed, clean URL architecture, meta tags, sitemaps, and structured JSON-LD schema."
              },
              {
                q: "8. Will I be able to update my website content myself?",
                a: "Yes. If requested, we can integrate user-friendly content management systems (such as WordPress or a headless CMS like Sanity) that allow your team to update text, images, and blog posts without coding knowledge."
              },
              {
                q: "9. Do you provide website maintenance and support?",
                a: "Yes. We include 60 days of complimentary technical support following project launch to resolve any initial technical issues. We also offer ongoing maintenance plans for server updates, backups, and feature enhancements."
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
              <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Start Your Project</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Start Your Website <br />
                <span className="text-gradient">Project</span> Today
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Connect with our technical team to discuss your website requirements. We provide website development services across Noida, Greater Noida, and the Delhi NCR region.
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
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/50">Phone / WhatsApp</p>
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
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/50">Email Address</p>
                    <p className="font-semibold text-foreground">info.onnextweb@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full border border-border/80 flex items-center justify-center text-primary bg-primary/5 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/50">Headquarters Address</p>
                    <p className="font-semibold text-foreground leading-relaxed">
                      C-25 Abul Fazal, Jamia Nagar, Okhla, New Delhi – 110025
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Serving businesses across Noida, Greater Noida, and Delhi NCR
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex gap-4 pt-4">
                <a href="tel:+918765077474" className="bg-primary text-primary-foreground text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg hover:glow-accent transition-all duration-300">
                  Call Now
                </a>
                <a href="https://wa.me/918765077474?text=Hi%20ON%20Next%20Web,%20I%20am%20looking%20for%20website%20development%20services%20in%20Noida." target="_blank" rel="nofollow noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-surface-elevated/40 border border-border/80 p-8 rounded-2xl space-y-6">
              <LandingPageForm
                title="Request a Free Proposal"
                subtitle="Share your website requirements to receive a customized quote and timeline."
                buttonText="Send Free Proposal Request"
                placeholderMessage="Describe your project (e.g., business website, ecommerce store, custom web app, or redesign)"
                sourcePage="Noida Bottom Form"
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
                "name": "How much does website development cost in Noida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Website development costs depend on project scope, design complexity, and required features. Foundational business websites start at ₹19,999, while custom ecommerce platforms and web applications are quoted based on specific technical requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to develop a business website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard business websites typically take between 7 to 10 business days to complete. Complex custom applications and ecommerce stores generally require 15 to 25 business days depending on design approvals and integration complexity."
                }
              },
              {
                "@type": "Question",
                "name": "Does ON Next Web have an office in Noida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ON Next Web is based in New Delhi (Jamia Nagar, Okhla) and provides website development services to businesses across Noida, Greater Noida, and the wider Delhi NCR region. We conduct project discussions via phone, email, video conferencing, or arranged in-person meetings as required."
                }
              },
              {
                "@type": "Question",
                "name": "Do you develop ecommerce websites for Noida businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We build custom ecommerce websites with product catalogs, shopping carts, secure payment gateway integrations (such as Razorpay and Paytm), order notifications, and inventory control dashboards."
                }
              },
              {
                "@type": "Question",
                "name": "Can you build a custom web application?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We develop custom web applications, client portals, internal dashboards, and management tools using React, Next.js, Node.js, and modern database platforms like MongoDB or PostgreSQL."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with Next.js and React?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Next.js and React are core technologies in our development stack. We use them to build fast, scalable, and responsive web applications with modern architecture."
                }
              },
              {
                "@type": "Question",
                "name": "Will my website be SEO-friendly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We build every website with technical SEO foundations including semantic HTML5 structure, optimized page speed, clean URL architecture, meta tags, sitemaps, and structured JSON-LD schema."
                }
              },
              {
                "@type": "Question",
                "name": "Will I be able to update my website content myself?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. If requested, we can integrate user-friendly content management systems (such as WordPress or a headless CMS like Sanity) that allow your team to update text, images, and blog posts without coding knowledge."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide website maintenance and support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We include 60 days of complimentary technical support following project launch to resolve any initial technical issues. We also offer ongoing maintenance plans for server updates, backups, and feature enhancements."
                }
              }
            ]
          })
        }}
      />

      {/* Service Schema for Noida */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Website Development Services in Noida",
            "provider": {
              "@type": "Organization",
              "@id": "https://www.onnextweb.in/#organization",
              "name": "ON Next Web",
              "url": "https://www.onnextweb.in"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Noida"
              },
              {
                "@type": "City",
                "name": "Greater Noida"
              }
            ],
            "serviceType": "Website Development & Custom Web Applications",
            "url": "https://www.onnextweb.in/website-development-company-in-noida"
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
                "name": "Website Development Company in Noida",
                "item": "https://www.onnextweb.in/website-development-company-in-noida"
              }
            ]
          })
        }}
      />

      <Footer />
    </div>
  );
}
