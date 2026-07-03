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
  title: "Website Development Company in Gurgaon | OnNextWeb",
  description: "Looking for the best website development company in Gurgaon? OnNextWeb designs high-performing, custom Next.js websites & ecommerce stores for startups & corporates.",
  alternates: {
    canonical: "https://www.onnextweb.in/website-development-company-in-gurgaon",
  },
  openGraph: {
    title: "Website Development Company in Gurgaon | OnNextWeb",
    description: "Get premium, speed-optimized website design and custom software development services in Gurgaon NCR. Drive leads and scale your brand digital presence.",
    url: "https://www.onnextweb.in/website-development-company-in-gurgaon",
    type: "website",
  }
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
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Gurgaon Corporate Office: Sector 54, Golf Course Road!</span>
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
                💼 Top Tech & Web Agency in Cyber City / Sector 54
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Website Development <br className="hidden sm:inline" />
                Company in <span className="text-gradient">Gurgaon</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                Gurgaon ke fast-paced startup aur corporate environment me speed hi sab kuch hai. Slow templates aur low conversions se bahar niklein. Hum design karte hain super-fast, scale-ready websites starting at just <span className="text-foreground font-semibold">₹19,999</span>! Cyber City aur Golf Course Road ke businesses ka trusted choice.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50 max-w-md">
                <div>
                  <h4 className="text-2xl font-bold text-foreground">150+</h4>
                  <p className="text-xs text-muted-foreground">Sites Built</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">4.9/5</h4>
                  <p className="text-xs text-muted-foreground">Client Reviews</p>
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
              Kyun Aapke Brand Ko Chahiye Ek Dynamic High-Performance Website?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Gurgaon (Gurugram) India ka digital center point ban chuka hai. Cyber City, DLF Phase 1-5, aur Golf Course Road par base multi-national businesses, real estate giants, aur venture-funded tech startups digital space me top visual footprint chahte hain. Is global landscape me sustain karne ke liye normal drag-and-drop templates se code kiye website architectures work nahi karte. Slow design flow visitors ko direct exit routes dete hain, jisse bounce rates up hote hain.
            </p>
            <p>
              Log aksar search engines par target queries search karte hain jaise &quot;<em>website development company in Gurgaon near me</em>&quot; aur &quot;<em>best web development company in Gurgaon</em>&quot;. Agar aapka business top visibility bracket me rank nahi kar raha hai, toh leads loss automatic high hota hai. OnNextWeb ek pioneer <strong>website development company in Gurgaon</strong> ke roop me custom development architectures setup karti hai jo React, Next.js, Django, aur clean tailwind module setups par based hain, jo aapko extreme speeds aur organic user acquisition leverage provide karte hain.
            </p>
            <p>
              Hamara core office Gurgaon Sector 54 me base hone ki wajah se local client coordination absolute fast aur secure rehta hai. Custom business portfolios se lekar scaling e-commerce platforms tak—hum pure Gurgaon NCR, Sohna Road, aur DLF hubs me fast-loading designs delivered karte hain jo sales convert karti hain.
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
              OnNextWeb Hi Kyun? (Premium Trust Benchmarks)
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Hum software engineering standards use karte hain taaki aapka brand digital assets me leading visual parameters set kare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="text-primary" size={24} />,
                title: "Next.js Static Generation",
                desc: "Server-side rendering aur static generation setups. Pages milliseconds me open hote hain, search crawler index optimization score boost karte hain."
              },
              {
                icon: <Globe className="text-primary" size={24} />,
                title: "Local Schema & SEO Layout",
                desc: "Primary aur LSI phrases jaise 'web design company in Gurgaon' ko meta structure me configure karte hain taaki rankings immediate start ho sakein."
              },
              {
                icon: <Laptop className="text-primary" size={24} />,
                title: "Responsive Glassmorphic UI",
                desc: "Fluid layouts, smooth interactive states, custom sliders aur sleek dark/light theme systems visual conversions double karte hain."
              },
              {
                icon: <ShieldCheck className="text-primary" size={24} />,
                title: "Full Code Repository Transfer",
                desc: "GitHub source access aur absolute ownership transfer credentials. Hum dynamic control limits ya mandatory monthly retention layers design nahi karte."
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
                Gurgaon start-up community aur corporate giants ke liye scale-ready websites. Interactive dynamic portfolios, smooth navigation layouts, customized query routing aur call-to-actions setup. Hum fully custom tailwind CSS elements aur animations render karte hain jo global design systems follow karte hain.
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
                Apna self-hosted ecommerce brand store construct karein. OnNextWeb custom <strong className="text-foreground font-semibold">ecommerce website development Gurgaon</strong> systems offer karti hai jo high conversion features maps, direct dashboard management, dynamic analytics track, discount coupons system, aur high-speed database layers run karte hain.
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
                Agar aap koi SaaS model application startup design kar rahe hain jisme client portals, detailed analytical widgets, dashboard setups, database queries, aur REST APIs mapping needed hain—hamari expert developers team Next.js, Node.js, Express framework, GraphQL aur secure cloud storage systems use karke build karti hai.
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
                Sleek editorial blogs, properties listing interfaces ya simple client manageable dynamic pages. Hum regular bloated themes avoid karte hain. Custom code structure mapping dynamic blocks create karta hai jo easily editable hote hain. Dynamic pages performance score speed pass setup systems logic parameters.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> High-speed GraphQL content delivery pipelines</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> ACF (Advanced Custom Fields) architecture layouts</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Complete security audit configurations</li>
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
          <h3 className="font-display text-2xl sm:text-3xl font-bold">Launch Your Premium High-Converting Site in Gurgaon!</h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Directly connect with our Gurgaon developer team. Hum provide karenge ek comprehensive technical and design blueprint without any fees.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-semibold">
            <a href="tel:+918765077474" className="flex items-center gap-2 bg-background hover:bg-surface-elevated border border-border px-6 py-3.5 rounded-xl transition-all duration-300">
              <Phone size={16} className="text-primary" />
              Call Gurgaon Office: +91 8765077474
            </a>
            <a href="https://wa.me/918765077474" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 px-6 py-3.5 rounded-xl transition-all duration-300">
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
              Website Development Process (Step-by-Step)
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Hum pure design pipeline ko detail planning parameters me break karte hain complete quality deliverables focus ke sath.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                num: "01",
                phase: "Consultation & Discovery",
                desc: "Hum Gurgaon office me meeting or online call par parameters discuss karte hain. Competitive strategy scale define ki jati hai."
              },
              {
                num: "02",
                phase: "UI/UX Prototyping",
                desc: "Visual designs and layout maps design custom style framework tools me set kiya jata hai jisse interface structure clarity milti hai."
              },
              {
                num: "03",
                phase: "Modern Code Integration",
                desc: "Hum Next.js, React modules ya complex dynamic code stacks par clean configurations deploy karte hain without delay."
              },
              {
                num: "04",
                phase: "Core SEO & Schema Audit",
                desc: "Page optimization rules tags mapping aur primary keyword clusters 'website development company in Gurgaon' inject kiya jata hai."
              },
              {
                num: "05",
                phase: "Production Deploy & Support",
                desc: "Live system hosting environment configurations setup, domain sync operations, launch checks and post launch update plans."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-surface-elevated/20 border border-border/60 p-6 rounded-xl relative space-y-4 hover:border-primary/20 transition-all duration-300">
                <span className="font-display text-3xl font-extrabold text-primary/30 block">{step.num}</span>
                <h4 className="font-display text-base font-bold text-foreground">{step.phase}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Pricing Models</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Website Development Packages in Gurgaon
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Sleek engineering setups suited to startups, retail brands, and customized requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Package 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 p-8 rounded-2xl relative space-y-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-lg font-bold text-muted-foreground">Startup Custom</h4>
                <p className="text-xs text-muted-foreground">Best fit for corporate portfolios and small services.</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-foreground">₹19,999</span>
                  <span className="text-xs text-muted-foreground block mt-1">One-time payment</span>
                </div>
                <ul className="space-y-3 text-xs text-muted-foreground border-t border-border/50 pt-6">
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Up to 5 Fully Responsive Pages</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Core Web Vitals Pass Guarantee</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Basic Google Maps & Local Map pin setup</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Primary Tag Configuration</li>
                </ul>
              </div>
              <a href="#contact-form-section" className="block text-center bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary font-medium py-3 rounded-lg text-xs mt-6 transition-all duration-300">
                Get Started
              </a>
            </div>

            {/* Package 2 */}
            <div className="bg-surface-elevated border-2 border-primary p-8 rounded-2xl relative space-y-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between shadow-[0_8px_32px_rgba(255,255,255,0.02)]">
              <span className="absolute -top-3.5 right-6 bg-primary text-primary-foreground text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                Most Popular
              </span>
              <div>
                <h4 className="font-display text-lg font-bold text-foreground">Enterprise Next.js</h4>
                <p className="text-xs text-muted-foreground">Designed for high-growth tech firms & ecommerce brands.</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-foreground">₹39,999</span>
                  <span className="text-xs text-muted-foreground block mt-1">One-time payment</span>
                </div>
                <ul className="space-y-3 text-xs text-muted-foreground border-t border-border/50 pt-6">
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Full React/Next.js Architecture</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Dynamic CRM integrations & forms</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Gurgaon Local SEO Schema Optimization</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Payment API integrations</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> 6 Months maintenance updates</li>
                </ul>
              </div>
              <a href="#contact-form-section" className="block text-center bg-primary text-primary-foreground hover:glow-accent font-medium py-3 rounded-lg text-xs mt-6 transition-all duration-300">
                Choose Recommended Plan
              </a>
            </div>

            {/* Package 3 */}
            <div className="bg-surface-elevated/40 border border-border/80 p-8 rounded-2xl relative space-y-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-lg font-bold text-muted-foreground">Custom Application</h4>
                <p className="text-xs text-muted-foreground">For scalable SaaS apps, custom ERPs, & marketplace portals.</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-foreground">₹79,999+</span>
                  <span className="text-xs text-muted-foreground block mt-1">Depends on complexity</span>
                </div>
                <ul className="space-y-3 text-xs text-muted-foreground border-t border-border/50 pt-6">
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Relational & Non-relational DB integrations</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Dedicated client dashboard endpoints</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Native API modules architecture</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> AWS / Cloud server configurations setup</li>
                </ul>
              </div>
              <a href="#contact-form-section" className="block text-center bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary font-medium py-3 rounded-lg text-xs mt-6 transition-all duration-300">
                Request Custom Quote
              </a>
            </div>
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
                  Real Estate firm in Gurgaon jo expensive PPC ads drive kar rahe the par generic slow loading pages ki wajah se bounce rate 65% tha. Humne static generation design deploy kiya, interactive home calculator system inject kiya, and localized local keyword optimization keys setup kiye. Results show 4.5x page speed boost, dropping load lag down to 0.7s, leading to a 3x increment in organic qualified conversions.
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
                  SaaS customer relations firm ko visual revamp + speed optimization support required thi. OnNextWeb React custom architecture build kiya complete backend API framework configuration integrations ke sath. Local SEO content structure mappings inject ki gayi, jisse client target local search rankings &quot;best web development company in Gurgaon&quot; systems me Top 3 brackets me rank ho raha hai.
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
              Hum Baki Gurgaon Web Agencies Se Alag Kyun Hain?
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
                q: "1. Gurgaon me website development cost kitna rehta hai?",
                a: "Hamari dynamic local packages ₹19,999 se start hoti hain. Custom React/Next.js frameworks, complex API configurations, enterprise portals aur custom CMS setups ₹39,999 starting brackets me design hote hain depend on technical scopes."
              },
              {
                q: "2. Gurgaon web design company ke roop me aap standard SEO optimization modules kaise set karte hain?",
                a: "Hum standard coding structures follow karte hain. Next/Image optimization hooks render speed reduce karte hain. Metatags mapping system, SEO configurations templates and local terms like 'best web development company in Gurgaon' structural layout me integrate kiye jate hain."
              },
              {
                q: "3. Delivery time estimates kya rehte hain?",
                a: "Custom corporate web pages hum 7-10 working days me completely scale-ready delivered kar dete hain. SaaS dashboards development aur dynamic platforms require 15-20 days validation checks ke sath."
              },
              {
                q: "4. Kya hum design updates backend panel se control kar sakte hain?",
                a: "Yes. Hum dynamic admin layouts (like customized WordPress dashboards, sanity CMS or custom Next.js admin dashboards) design karte hain jahan content templates modify, blog articles add or portfolio list manage easily parameters adjust system framework control panels."
              },
              {
                q: "5. Gurgaon office visit schedule kaise kiya jata hai?",
                a: "OnNextWeb core tech workspace Sector 54 Golf Course Road Gurgaon me base hai. Call (+91 8765077474) or email helpdesk setup par contact details forward karke custom physical meeting block schedules build."
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
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/50">Gurgaon Office Address</p>
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
                  Limited Slot Offers Gurgaon:
                </p>
                <p>Register query and get a **Free Site Speed Optimization Consultation worth ₹9,999** for absolute high conversions performance. Weeks limits: 2 spots left!</p>
              </div>

              {/* Action Links */}
              <div className="flex gap-4 pt-4">
                <a href="tel:+918765077474" className="bg-primary text-primary-foreground text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg hover:glow-accent transition-all duration-300">
                  Call Now
                </a>
                <a href="https://wa.me/918765077474" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300">
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
                "name": "Gurgaon me website development cost kitna rehta hai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hamari dynamic local packages ₹19,999 se start hoti hain. Custom React/Next.js frameworks, complex API configurations, enterprise portals aur custom CMS setups ₹39,999 starting brackets me design hote hain depend on technical scopes."
                }
              },
              {
                "@type": "Question",
                "name": "Gurgaon web design company ke roop me aap standard SEO optimization modules kaise set karte hain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hum standard coding structures follow karte hain. Next/Image optimization hooks render speed reduce karte hain. Metatags mapping system, SEO configurations templates and local terms like 'best web development company in Gurgaon' structural layout me integrate kiye jate hain."
                }
              },
              {
                "@type": "Question",
                "name": "Delivery time estimates kya rehte hain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Custom corporate web pages hum 7-10 working days me completely scale-ready delivered kar dete hain. SaaS dashboards development aur dynamic platforms require 15-20 days validation checks ke sath."
                }
              },
              {
                "@type": "Question",
                "name": "Kya hum design updates backend panel se control kar sakte hain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Hum dynamic admin layouts design karte hain jahan content templates modify, blog articles add or portfolio list manage easily."
                }
              },
              {
                "@type": "Question",
                "name": "Gurgaon office visit schedule kaise kiya jata hai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OnNextWeb core tech workspace Sector 54 Golf Course Road Gurgaon me base hai. Call (+91 8765077474) or email helpdesk setup par contact details forward karke custom physical meeting block schedules build."
                }
              }
            ]
          })
        }}
      />

      <Footer />
    </div>
  );
}
