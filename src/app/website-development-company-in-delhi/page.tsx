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
  description: "Looking for the best website development company in Delhi? OnNextWeb builds custom, speed-optimized & affordable business & ecommerce websites to grow sales.",
  alternates: {
    canonical: "https://www.onnextweb.in/website-development-company-in-delhi",
  },
  openGraph: {
    title: "Website Development Company in Delhi | OnNextWeb",
    description: "Get custom, speed-optimized and premium websites in Delhi NCR. Affordable web development services tailored to rank and generate high-intent leads.",
    url: "https://www.onnextweb.in/website-development-company-in-delhi",
    type: "website",
  }
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
                Slow templates aur low leads se ho pareshan? OnNextWeb hai aapka professional tech partner. Hum design karte hain super-fast, responsive, aur Google rankings-ready websites starting at just <span className="text-foreground font-semibold">₹19,999</span>! Delhi NCR ke businesses ko digitalize karne ka hamara success rate 98% raha hai.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50 max-w-md">
                <div>
                  <h4 className="text-2xl font-bold text-foreground">150+</h4>
                  <p className="text-xs text-muted-foreground">Sites Live</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">4.9/5</h4>
                  <p className="text-xs text-muted-foreground">Google Review</p>
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
              Kyun Aapke Business Ko Chahiye Ek Top-Class Website?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Delhi NCR (including Gurgaon, Noida, and Faridabad) India ka sabse tezi se grow karne wala business hub ban chuka hai. Yahan daily hazaron naye startups aur local services register hoti hain. Lekin kya aap jante hain ki <strong>85% businesses digital presence na hone ki wajah se start hone ke 2 saal ke andar close ho jate hain?</strong> Agar aap Google par search karein to aapko hazaron competitors milenge jo local customers ko drag kar rahe hain. Aise competitive market me sirf ek random, slow WordPress website rakhna kaafi nahi hai.
            </p>
            <p>
              Log aksar Google par search karte hain "<em>website development company in Delhi near me</em>" ya "<em>best web development company in Delhi</em>". Agar aapka business us list me top rankings par nahi dikh raha hai, toh aap directly apne potential customers competitors ko gift kar rahe hain. OnNextWeb ek expert <strong>website development company in Delhi</strong> ke roop me aapke business ko aisi premium layout deta hai jo na sirf fast load hoti hai balki visitors ko direct client me convert karti hai.
            </p>
            <p>
              Hum visual design system par focus karte hain jo premium feel de. Hum outdated layout templates use nahi karte, balki React, Next.js, tailwind aur custom clean coding use karke solid web application framework taiyar karte hain. Aapka business Delhi ke Okhla, Connaught Place, Saket ya Dwarka me ho—hamari services pure NCR me customized growth lane ke liye optimized hain.
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
              OnNextWeb Hi Kyun? (Our Trust Factors)
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Delhi me bahut saari agencies hain jo normal web templates sell karti hain. Par hum client success ko technical parameters se evaluate karte hain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="text-primary" size={24} />,
                title: "100/100 PageSpeed Rating",
                desc: "Hamari designs modern frameworks par build hoti hain. Site open hone me 1 second se kam ka time lagta hai, jisse bounce rate decrease hota hai."
              },
              {
                icon: <Globe className="text-primary" size={24} />,
                title: "In-Built SEO Architecture",
                desc: "Primary aur LSI keywords jaise 'best web development company in Delhi' ko custom tag hierarchy me inject karte hain, jisse Google crawler aapko priority deta hai."
              },
              {
                icon: <Laptop className="text-primary" size={24} />,
                title: "Vibrant UI/UX Layouts",
                desc: "Glassmorphism, dynamic elements, aur interactive visual modules se build design. Client ko wowed aur trust feel hota hai."
              },
              {
                icon: <ShieldCheck className="text-primary" size={24} />,
                title: "Zero Hidden Maintenance Fee",
                desc: "Hum absolute transparency me build karte hain. Hosting credentials aur code source file aapko return karte hain. Koi monthly code lock setup nahi."
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
              Hamari Website Development Services
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
                Delhi NCR me consultancies, clinics, builder firms, aur service providers ke liye ideal landing pages aur websites. Hum local search filters aur optimized lead forms embed karte hain jo customers direct call aur WhatsApp enquiry generate karte hain. Core Web Vitals pass rating ke saath rankings guarantee hoti hai.
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
                Apna khud ka online brand store open karein. Hum scale-ready <strong className="text-foreground font-semibold">ecommerce website development Delhi</strong> services offer karte hain. Zero loading lag checkout pipeline, customized payment gateway (UPI, Cards, Netbanking), automated inventory systems, and beautiful product collections to drive sales.
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
                Standard WordPress templates se alag custom logic require karne wale platforms—jaise real estate portal matching algorithms, specialized student databases, ya proprietary SaaS dashboards. Hum clean MERN (MongoDB, Express, React, Node) ya Next.js setups code karte hain complete client ownership ke sath.
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
                Agar aapko aisi site chahiye jiska content aap daily khud dynamic tarike se update kar sakein—jaise news portal, tech blog, ya dynamic product lists. WordPress development code ko hum visually optimization ke sath customize karte hain taaki speed me koi delay na ho. Custom element designs aur drag-drop builders support configuration setup.
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
          <h3 className="font-display text-2xl sm:text-3xl font-bold">Apne Business Ke Liye Website Rank Aur Leads badhana Chahte Hain?</h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Abhi call karein ya WhatsApp par message drop karein. Hamari expert tech team aapke business domain ka absolute audit karke free recommendations blueprint ready karegi.
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
            Average response time on WhatsApp: <strong>5 minutes</strong>. Let's start!
          </p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Workflow Roadmap</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Hamara Website Development Process
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Hum raw requirements ko high converting, premium systems me step-by-step convert karte hain.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                num: "01",
                phase: "Planning & Strategy",
                desc: "Hum aapke industry competitors aur buyer intent ko deep evaluate karte hain. Target search metrics aur layout framework finalize hota hai."
              },
              {
                num: "02",
                phase: "Premium Figma UI/UX",
                desc: "Hum user interface (UI) mockups create karte hain jo modern web templates se different ho. Visual design, elements aur smooth grid animations finalize hote hain."
              },
              {
                num: "03",
                phase: "High-Speed Coding",
                desc: "Hum project design code ko custom dynamic parameters me translate karte hain. HTML5, React structure, Tailwind CSS classes, clean configurations."
              },
              {
                num: "04",
                phase: "SEO Tag & FAQ Injection",
                desc: "Aapke keyword clusters jaise 'affordable website development Delhi' ko header layers me naturally write karte hain taaki SEO output complete organic rank de."
              },
              {
                num: "05",
                phase: "Launch & Support",
                desc: "Site domain setup, high speed hosting server mapping aur launch. Hamari support process launch ke baad 60-days free updates control offer karti hai."
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
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Transparent Packages</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Website Development Pricing in Delhi
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Hum quality me compromise kiye bina highly affordable structures design karte hain. Choose what suits your business budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Package 1 */}
            <div className="bg-surface-elevated/40 border border-border/80 p-8 rounded-2xl relative space-y-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-lg font-bold text-muted-foreground">Startup Basic</h4>
                <p className="text-xs text-muted-foreground">Ideal for small local services and startups.</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-foreground">₹19,999</span>
                  <span className="text-xs text-muted-foreground block mt-1">One-time payment</span>
                </div>
                <ul className="space-y-3 text-xs text-muted-foreground border-t border-border/50 pt-6">
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Up to 5 Responsive Pages</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Contact Forms & WhatsApp Button</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Free SSL & 1 Year Domain Mapping</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Basic SEO Meta Tag Configuration</li>
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
                <p className="text-xs text-muted-foreground">Perfect for retail brands and growing service networks.</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-foreground">₹39,999</span>
                  <span className="text-xs text-muted-foreground block mt-1">One-time payment</span>
                </div>
                <ul className="space-y-3 text-xs text-muted-foreground border-t border-border/50 pt-6">
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Custom Next.js Architecture (Fast Loader)</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Dynamic Blog Setup & Admin Panel</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Advanced SEO Keywords Routing (Delhi NCR Local)</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Payment Gateway Integration</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> 6 Months Dedicated Support</li>
                </ul>
              </div>
              <a href="#contact-form-section" className="block text-center bg-primary text-primary-foreground hover:glow-accent font-medium py-3 rounded-lg text-xs mt-6 transition-all duration-300">
                Choose Premium Plan
              </a>
            </div>

            {/* Package 3 */}
            <div className="bg-surface-elevated/40 border border-border/80 p-8 rounded-2xl relative space-y-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-lg font-bold text-muted-foreground">Custom Enterprise</h4>
                <p className="text-xs text-muted-foreground">For complex SaaS portals & high-end Ecommerce stores.</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-foreground">₹79,999+</span>
                  <span className="text-xs text-muted-foreground block mt-1">Depends on features</span>
                </div>
                <ul className="space-y-3 text-xs text-muted-foreground border-t border-border/50 pt-6">
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Custom Database Architecture</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Mobile App Integration Support</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Advanced Multi-vendor Setup</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-primary" /> Dedicated Server Support & Maintenance</li>
                </ul>
              </div>
              <a href="#contact-form-section" className="block text-center bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary font-medium py-3 rounded-lg text-xs mt-6 transition-all duration-300">
                Request Quote
              </a>
            </div>
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
                  Ek travel operator client jo traditional slow WordPress theme use kar rahe the unke paas traffic tha par lead submit rate 1% se kam tha. Humne unki site ko Next.js dynamic routing par code kiya, fast queries lagayi aur 'affordable website development Delhi' tags setup kiye. Google speed index improve hone se bounce rate 70% se drop hokar 25% reh gaya, aur digital inquiries 250% increase hui.
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
                  Okhla-based high-end clothing brand ko custom retail web page setup chahiye tha jahan speed aur micro-animations premium experience offer karein. Humne glassmorphic custom Tailwind CSS layout deploy kiya. High density images ko Next/Image dynamic optimization ke sath store kiya. Launch hone ke 3 months ke andar keyword tracking 'ecommerce website development Delhi' local filters me client brand rank ho raha hai.
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
              Hum Baki Delhi Web Agencies Se Alag Kyun Hain?
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Saste packages ke naam par copy-paste designs provide karne wali agencies se savdhan rahein.
            </p>
          </div>

          <div className="overflow-x-auto border border-border rounded-xl">
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
                q: "1. Website development in Delhi cost kitna hota hai?",
                a: "OnNextWeb par website development ka cost hum features aur scale ke basis par decide karte hain. Hamari dynamic startup plans ₹19,999 se start hoti hain jo local businesses ke liye best hain. Custom web app setups aur enterprise stores ka standard structure ₹39,999 se starting hota hai. Hamari transparent quotes me koi hidden charges nahi hote."
              },
              {
                q: "2. Kya aap website design company in Delhi ke roop me SEO optimization karke dete hain?",
                a: "Yes, absolutely! Hamare code systems modular framework me deploy kiye jate hain. Hum development stage me hi search engine optimization algorithms integrate karte hain. Isme auto-meta tags config, dynamic header hierarchy, target keyword 'best web development company in Delhi' and local schema implementation already included hota hai, jisse launch hote hi fast Google index range milti hai."
              },
              {
                q: "3. Website ready hone me kitna time lagta hai?",
                a: "Standard landing pages aur business portfolios hum 7-10 business days ke andar delivered kar dete hain. Medium-sized custom apps aur multi-page configurations me 15-20 business days lagte hain. Custom requirements ke basis par complete code scheduling map share kiya jata hai."
              },
              {
                q: "4. Kya aap ecommerce website development Delhi ke liye payment gateways integration provide karte hain?",
                a: "Yes! Ecommerce store development systems me hum standard secure payment layers integrates karte hain. Isme Google Pay, PhonePe, Paytm, Credit/Debit cards, UPI configurations Razorpay aur Paytm APIs ke through secure format me build kiye jate hain."
              },
              {
                q: "5. Website launch ke baad updates aur error fix kon karega?",
                a: "Launch ke baad hum custom packages me 60-days se lekar 6 months tak ki free support guarantee offer karte hain. Code management system, basic maintenance tasks, aur server configurations setup me hum directly guides aur updates provide karte hain."
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
              <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase font-mono">Let's Connect</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Chaliye Aapke <br />
                <span className="text-gradient">Next Project</span> Par Kaam Shuru Karein!
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Delhi, Gurgaon, aur Noida me custom growth drives build karne ke liye hamara office hours active hai. Drop a line, hum call back karenge with complete design framework options.
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
                <p>Abhi contract sign karne par <strong>Free SEO Audit + Core Performance tuning worth ₹9,999</strong> bilkul free included milti hai. Weekly limits left: 2 Slots!</p>
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
                placeholderMessage="Apne project details likhein (e.g. ecommerce site, medical portfolio, budget, deadlines, custom designs)"
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
                "name": "Website development in Delhi cost kitna hota hai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OnNextWeb par website development ka cost hum features aur scale ke basis par decide karte hain. Hamari dynamic startup plans ₹19,999 se start hoti hain jo local businesses ke liye best hain. Custom web app setups aur enterprise stores ka standard structure ₹39,999 se starting hota hai. Hamari transparent quotes me koi hidden charges nahi hote."
                }
              },
              {
                "@type": "Question",
                "name": "Kya aap website design company in Delhi ke roop me SEO optimization karke dete hain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, absolutely! Hamare code systems modular framework me deploy kiye jate hain. Hum development stage me hi search engine optimization algorithms integrate karte hain. Isme auto-meta tags config, dynamic header hierarchy, target keyword 'best web development company in Delhi' and local schema implementation already included hota, jisse launch hote hi fast Google index range milti hai."
                }
              },
              {
                "@type": "Question",
                "name": "Website ready hone me kitna time lagta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard landing pages aur business portfolios hum 7-10 business days ke andar delivered kar dete hain. Medium-sized custom apps aur multi-page configurations me 15-20 business days lagte hain."
                }
              },
              {
                "@type": "Question",
                "name": "Kya aap ecommerce website development Delhi ke liye payment gateways integration provide karte hain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Ecommerce store development systems me hum standard secure payment layers integrates karte hain. Isme Google Pay, PhonePe, Paytm, Credit/Debit cards, UPI configurations Razorpay aur Paytm APIs ke through secure format me build kiye jate hain."
                }
              },
              {
                "@type": "Question",
                "name": "Website launch ke baad updates aur error fix kon karega?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Launch ke baad hum custom packages me 60-days se lekar 6 months tak ki free support guarantee offer karte hain. Code management system, basic maintenance tasks, aur server configurations setup me hum directly guides aur updates provide karte hain."
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
