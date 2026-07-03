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
  title: "Website Development Company in Noida | OnNextWeb",
  description: "Looking for the best website development company in Noida? OnNextWeb builds custom, affordable Next.js business websites & ecommerce stores for sales growth.",
  alternates: {
    canonical: "https://www.onnextweb.in/website-development-company-in-noida",
  },
  openGraph: {
    title: "Website Development Company in Noida | OnNextWeb",
    description: "Get affordable website design and custom software development services in Noida NCR. Drive leads and scale your brand digital presence with speed-optimized setups.",
    url: "https://www.onnextweb.in/website-development-company-in-noida",
    type: "website",
  }
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
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Noida Regional Setup: Sector 62 & Sector 63 IT Hub!</span>
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
                ⚙️ Best Web Development Agency in Noida / Sector 62 & 63
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Website Development <br className="hidden sm:inline" />
                Company in <span className="text-gradient">Noida</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                Slow design templates aur complex maintenance plans se ho pareshan? OnNextWeb Noida me high converting, SEO-ready, aur dynamic business layouts constructs karta hai starting at just <span className="text-foreground font-semibold">₹19,999</span>! Noida and Greater Noida IT zone ka complete web engineering partner.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50 max-w-md">
                <div>
                  <h4 className="text-2xl font-bold text-foreground">150+</h4>
                  <p className="text-xs text-muted-foreground">Projects Live</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">4.9/5</h4>
                  <p className="text-xs text-muted-foreground">Google Review</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">100%</h4>
                  <p className="text-xs text-muted-foreground">Clean Coding</p>
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
                  href="https://wa.me/918765077474?text=Hi%20OnNextWeb,%20I%20am%20looking%20for%20website%20development%20services%20in%20Noida." 
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
                  title="Build Your Noida Web Project"
                  subtitle="Get a complete design mockup and transparent pricing details within 2 hours."
                  buttonText="Submit Proposal Request"
                  placeholderMessage="Manufacturing business catalog, WordPress blog, or e-commerce shop?"
                  sourcePage="Noida Hero Form"
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
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Noida Digital Space</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Kyun Aapke Noida Business Ko Chahiye Ek Top-Ranked Web Page?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Noida aur Greater Noida (including Noida Expressway) India ke leading industrial aur IT zones me se ek hain. Yahan Sector 62, Sector 63, Sector 18, aur Film City me base hazaron corporate houses, export manufacturing units, real estate companies, aur educational groups operate hote hain. Lekin standard design optimization guidelines na hone se inme se bahut saare business direct local search traffic loose kar dete hain.
            </p>
            <p>
              Log aksar search engines par dynamic query inputs use karte hain jaise &quot;<em>website development company in Noida near me</em>&quot; aur &quot;<em>best web development company in Noida</em>&quot;. Agar aapka brand local directories aur map indexes par visibility setup nahi kar pata, toh organic conversions seedhe competitors ko redirect ho jati hain. OnNextWeb ek expert <strong>website development company in Noida</strong> ke roop me customized layouts code karti hai jo high visual rendering speed targets pass karte hain.
            </p>
            <p>
              Noida Sector 62-63 base businesses ke liye dynamic payment processors mapping support aur multi-level CRM forms integrate kiye jate hain. Hum clunky templates completely ignore karte hain aur customized engineering standards layout setups build karte hain complete search values index optimization ke sath.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ONNEXTWEB (USPs) */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Performance Factors</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              OnNextWeb Hi Kyun? (Our Quality Benchmarks)
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Noida me local agencies cheap price par basic WordPress page setup banati hain. Hum business conversion layout framework par code likhte hain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="text-primary" size={24} />,
                title: "Next.js Static Generation",
                desc: "Server-side rendering framework dynamic modules loading lag eliminate karte hain. 1.2s load speeds bounce rates reduce karti hain."
              },
              {
                icon: <Globe className="text-primary" size={24} />,
                title: "Local SEO & Tags Integration",
                desc: "Primary aur LSI keyword patterns jaise 'web design company in Noida' ko layout hierarchy tags config modules check."
              },
              {
                icon: <Laptop className="text-primary" size={24} />,
                title: "Fluid Responsive Visuals",
                desc: "Clean grids, customized gradient colors, visual typography aur elements. Mobiles, laptops aur tablet layouts adjustments."
              },
              {
                icon: <ShieldCheck className="text-primary" size={24} />,
                title: "100% Repository Access",
                desc: "Git source codes and login setup configurations handover details. Hum client platforms logic details locked block structures lock systems build nahi."
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
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Expertise Fields</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Website Development Services in Noida
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Customized design architectures suited to corporate sites, export companies, and retail setups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Export & Corporates</span>
              <h3 className="font-display text-2xl font-bold">Business Portfolios & Catalogs</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Noida manufacturing units aur trading companies ke liye interactive product catalog portfolios. Hum detailed gallery layouts, dynamic product search models, query submission logs, call mappings system aur sleek animations configure karte hain complete branding aesthetics layout standard rules.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Dynamic product sorting arrays</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Automated leads router system</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Integrated Google Maps schema</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Online Selling</span>
              <h3 className="font-display text-2xl font-bold">Ecommerce Website Development Noida</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Apna self hosted store platform scale karein. OnNextWeb scale ready <strong className="text-foreground font-semibold">ecommerce website development Noida</strong> systems setups develop karti hai jo automated invoices configuration, multiple payment gateway support details options check tools integrate.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Fast loading cart checkouts pipelines</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Payment API integrations (Razorpay, Paytm)</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Complete inventory statistics dashboard endpoints</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Tailored Coding</span>
              <h3 className="font-display text-2xl font-bold">Custom Web Application Setups</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unique algorithms systems jisme specific workflows models required hain. Real estate properties systems list filters, institutional student data routers. Hum MERN or Next.js configurations write karte hain standard clean variables support frameworks rules patterns logic details.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Secure authentication modules JWT</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Analytical chart setups</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Databases mapping systems (MongoDB, PostgreSQL)</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-surface-elevated/40 border border-border/80 hover:border-primary/20 p-8 rounded-2xl space-y-4 group transition-all duration-300">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">CMS Updates</span>
              <h3 className="font-display text-2xl font-bold">WordPress & Headless CMS Setups</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Dynamic portal setups, dynamic property listings ya normal updates panels. Hum custom coding components config setup inject karte hain taaki template load values speed slow na ho dynamic page index options configurations support.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Elementor / Custom builders configuration</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> On page plugins setup (Yoast / RankMath)</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-primary" /> Complete security audit setups</li>
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
          <h3 className="font-display text-2xl sm:text-3xl font-bold">Apne Noida Business Ke Liye Website Rank Aur Leads badhana Chahte Hain?</h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Directly connect with our Noida developer team. Get a customized website blueprint and SEO recommendation sheet without any upfront charges.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-semibold">
            <a href="tel:+918765077474" className="flex items-center gap-2 bg-background hover:bg-surface-elevated border border-border px-6 py-3.5 rounded-xl transition-all duration-300">
              <Phone size={16} className="text-primary" />
              Call Noida Office: +91 8765077474
            </a>
            <a href="https://wa.me/918765077474" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 px-6 py-3.5 rounded-xl transition-all duration-300">
              <MessageSquare size={16} />
              WhatsApp: Connect Now
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
              Hamara Website Development Process Noida
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Hum requirements analysis ko real live systems interfaces me break karte hain complete timeline track benchmarks ke sath.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                num: "01",
                phase: "Consultation & Goals Mapping",
                desc: "Noida Sector 62/63 space me target buyers intent explore kiya jata hai. Scope documentation finalise details check parameters."
              },
              {
                num: "02",
                phase: "UI Figma Framework",
                desc: "Fluid prototypes design visual assets select color palette options configuration details elements layouts tools sync setup."
              },
              {
                num: "03",
                phase: "Custom Coding Pipeline",
                desc: "Hum project design metrics systems copy elements code custom parameters transform framework check variables setup rules."
              },
              {
                num: "04",
                phase: "SEO Target Injection Noida",
                desc: "Keywords configurations clusters tags maps setup keyword 'website development company in Noida' structural patterns rules inject."
              },
              {
                num: "05",
                phase: "Production Launch Support",
                desc: "Domain sync configurations server setup validation checks optimization analytics monitoring and post launch support structures."
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
              Website Development Pricing in Noida
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Highly competitive pricing models configured for startups, export houses, and custom code integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Package 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 p-8 rounded-2xl relative space-y-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-lg font-bold text-muted-foreground">SME Basic</h4>
                <p className="text-xs text-muted-foreground">Best fit for manufacturing units & regional service portals.</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-foreground">₹19,999</span>
                  <span className="text-xs text-muted-foreground block mt-1">One-time payment</span>
                </div>
                <ul className="space-y-3 text-xs text-muted-foreground border-t border-border/50 pt-6">
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Up to 5 Fully Responsive Pages</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Contact Query Forms & WhatsApp button</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Local Map Integration schema mapping</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> On-page SEO Metadata Setup</li>
                </ul>
              </div>
              <a href="#contact-form-section" className="block text-center bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary font-medium py-3 rounded-lg text-xs mt-6 transition-all duration-300">
                Choose Basic Plan
              </a>
            </div>

            {/* Package 2 - Featured */}
            <div className="bg-surface-elevated border-2 border-primary p-8 rounded-2xl relative space-y-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between shadow-[0_8px_32px_rgba(255,255,255,0.02)]">
              <span className="absolute -top-3.5 right-6 bg-primary text-primary-foreground text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                Recommended
              </span>
              <div>
                <h4 className="font-display text-lg font-bold text-foreground">Premium Dynamic</h4>
                <p className="text-xs text-muted-foreground">Perfect for scaling online stores & corporate networks.</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-foreground">₹39,999</span>
                  <span className="text-xs text-muted-foreground block mt-1">One-time payment</span>
                </div>
                <ul className="space-y-3 text-xs text-muted-foreground border-t border-border/50 pt-6">
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> React/Next.js dynamic code layout</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Dynamic Blog & automated queries backend</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Noida Local SEO schema tag optimization</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Dynamic Payments Integrations</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> 6 Months Dedicated Support</li>
                </ul>
              </div>
              <a href="#contact-form-section" className="block text-center bg-primary text-primary-foreground hover:glow-accent font-medium py-3 rounded-lg text-xs mt-6 transition-all duration-300">
                Choose Recommended Plan
              </a>
            </div>

            {/* Package 3 */}
            <div className="bg-surface-elevated/40 border border-border/80 p-8 rounded-2xl relative space-y-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-lg font-bold text-muted-foreground">Custom Solutions</h4>
                <p className="text-xs text-muted-foreground">For complex SaaS portals & high-end Ecommerce setups.</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-foreground">₹79,999+</span>
                  <span className="text-xs text-muted-foreground block mt-1">Depends on complexity</span>
                </div>
                <ul className="space-y-3 text-xs text-muted-foreground border-t border-border/50 pt-6">
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Relational / Non-relational Database syncs</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Integrated analytics dashboards endpoints</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Customized API system architectures</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Cloud hosting config sync setups</li>
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
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Proven Output</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Noida Real-World Case Studies
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
                <h3 className="font-display text-xl font-bold">Noida Manufacturing Export Unit (Sector 63)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Export manufacturer client jo outdated clunky template website use kar rahe the jisme global query forms properly redirect nahi ho rahe the. OnNextWeb custom code layout setups design kiya Next.js variables framework patterns control dashboards options key parameters checks. Result show 250% increment in organic qualified conversions from overseas clients.
                </p>
                <div className="flex gap-6 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  <div>
                    <span className="block text-foreground font-bold">Old Conversion</span>
                    <span>1.1% rate</span>
                  </div>
                  <div>
                    <span className="block text-emerald-400 font-bold">New Conversion</span>
                    <span className="text-emerald-400 font-semibold">4.5% rate</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-bold">Visual Design</span>
                    <span>Premium dark grid layouts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-surface-elevated/40 border border-border/80 rounded-2xl overflow-hidden group">
              <div className="p-8 space-y-4">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">Top 5 Rankings</span>
                <h3 className="font-display text-xl font-bold">Regional E-Commerce Store (Sector 18, Noida)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Noida apparel retail store client ko custom catalog framework sync setups required thin. Humne React modules deployment configure kiya static schema integration logic endpoints target keywords setup details indicators checks. Page ranks high target queries &quot;best web development company in Noida&quot; systems me Top 5 indexes range values index targets.
                </p>
                <div className="flex gap-6 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  <div>
                    <span className="block text-foreground font-bold">Old sales load</span>
                    <span>4.1 seconds</span>
                  </div>
                  <div>
                    <span className="block text-emerald-400 font-bold">Optimized load</span>
                    <span className="text-emerald-400 font-semibold">0.9 seconds</span>
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

      {/* WHY BETTER THAN OTHER DELHI AGENCIES */}
      <section className="py-20 bg-surface/50 border-t border-b border-border/40 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">Competitor Comparison</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Hum Baki Noida Web Agencies Se Alag Kyun Hain?
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Compare key quality metrics directly before deciding your digital agency partner.
            </p>
          </div>

          <div className="overflow-x-auto border border-border rounded-xl">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-surface-elevated border-b border-border text-foreground font-bold font-display">
                  <th className="p-4 sm:p-5">Feature Metrics</th>
                  <th className="p-4 sm:p-5 text-primary">OnNextWeb</th>
                  <th className="p-4 sm:p-5 text-muted-foreground font-normal">Typical Noida Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">Technology Stacks</td>
                  <td className="p-4 text-emerald-400 font-medium">React, Next.js, Headless CMS setups</td>
                  <td className="p-4">Outdated PHP templates / generic plugins</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">Design Standards</td>
                  <td className="p-4 text-emerald-400 font-medium">Curated Figma prototypes, vibrant gradients</td>
                  <td className="p-4">Clunky layouts built using outdated builders</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">SEO Logic configuration</td>
                  <td className="p-4 text-emerald-400 font-medium">Semantic structures, JSON-LD configurations schemas</td>
                  <td className="p-4">Raw auto settings plugins with zero optimization</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-foreground">Code Access & Ownership</td>
                  <td className="p-4 text-emerald-400 font-medium">100% Repository & login credentials ownership</td>
                  <td className="p-4">Locking systems to monthly management retainers</td>
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
              Industries We Serve in Noida NCR
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              We understand custom user flows for different business sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto text-center">
            {[
              { label: "Manufacturing & B2B", icon: "🏭" },
              { label: "Ecommerce Shops", icon: "🛒" },
              { label: "Media & Film City", icon: "🎥" },
              { label: "Institutes & Colleges", icon: "🏫" },
              { label: "Real Estate Express", icon: "🛣️" },
              { label: "Consulting & Services", icon: "💼" }
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
              Answers to common queries regarding web development options in Noida.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "1. Noida me website development cost kitna rehta hai?",
                a: "Hamari dynamic local packages ₹19,999 se start hoti hain. Custom React/Next.js frameworks, complex API configurations, enterprise portals aur custom CMS setups ₹39,999 starting brackets me design hote hain depend on technical scopes."
              },
              {
                q: "2. Noida web design company ke roop me aap standard SEO optimization modules kaise set karte hain?",
                a: "Hum standard coding structures follow karte hain. Next/Image optimization hooks render speed reduce karte hain. Metatags mapping system, SEO configurations templates and local terms like 'best web development company in Noida' structural layout me integrate kiye jate hain."
              },
              {
                q: "3. Delivery time estimates kya rehte hain?",
                a: "Custom corporate web pages hum 7-10 working days me completely scale-ready delivered kar dete hain. SaaS dashboards development aur dynamic platforms require 15-20 days validation checks ke sath."
              },
              {
                q: "4. Kya hum design updates backend panel se control kar sakte hain?",
                a: "Yes. Hum dynamic admin layouts (like WordPress custom setup, sanity CMS or custom Next.js admin dashboards) design karte hain jahan content templates modify, blog articles add or portfolio list manage easily parameters adjust system framework control panels."
              },
              {
                q: "5. Setup support packages me updates parameters options kya rehte hain?",
                a: "Hum initial stage validation launch details me 60-days support credentials absolute values dynamic edits options maps checks framework system integrations rules verify."
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
                Chaliye Aapke <br />
                <span className="text-gradient">Next Project</span> Par Kaam Shuru Karein!
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Connect with our local Noida developer team. Direct coordination is active across Noida & Greater Noida. Get a high-converting layout roadmap.
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
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/50">Visit Noida Regional Desk</p>
                    <p className="font-semibold text-foreground leading-relaxed">
                      Sector 62 IT Block, Noida, <br />
                      Uttar Pradesh – 201301
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
                  Limited Slot Offers Noida:
                </p>
                <p>Register query and get a **Free Technical On-Page SEO Consultation worth ₹9,999** for absolute high conversions performance. Weeks limits: 2 spots left!</p>
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
                "name": "Noida me website development cost kitna rehta hai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hamari dynamic local packages ₹19,999 se start hoti hain. Custom React/Next.js frameworks, complex API configurations, enterprise portals aur custom CMS setups ₹39,999 starting brackets me design hote hain depend on technical scopes."
                }
              },
              {
                "@type": "Question",
                "name": "Noida web design company ke roop me aap standard SEO optimization modules kaise set karte hain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hum standard coding structures follow karte hain. Next/Image optimization hooks render speed reduce karte hain. Metatags mapping system, SEO configurations templates and local terms like 'best web development company in Noida' structural layout me integrate kiye jate hain."
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
                "name": "Setup support packages me updates parameters options kya rehte hain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hum initial stage validation launch details me 60-days support credentials absolute values dynamic edits options maps checks framework system integrations rules verify."
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
