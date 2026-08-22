import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import AnimatedSection from "@/components/AnimatedSection";
import LandingPageForm from "@/components/LandingPageForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  TrendingUp, 
  Award, 
  Search, 
  Target, 
  BarChart3, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Cpu, 
  Users, 
  Phone, 
  MessageSquare,
  ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Company in Delhi | ON Next Web",
  description: "Grow your traffic & revenue with the top digital marketing company in Delhi. Premium SEO, ROI-driven PPC, and content strategies. Request a free audit!",
  alternates: {
    canonical: "https://www.onnextweb.in/digital-marketing-company-in-delhi",
  },
  openGraph: {
    title: "Digital Marketing Company in Delhi | ON Next Web",
    description: "Grow your traffic & revenue with the top digital marketing company in Delhi. Premium SEO, ROI-driven PPC, and content strategies. Request a free audit!",
    url: "https://www.onnextweb.in/digital-marketing-company-in-delhi",
    type: "website",
    images: [
      {
        url: "https://www.onnextweb.in/dark-logo.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Company in Delhi | ON Next Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Delhi | ON Next Web",
    description: "Grow your traffic & revenue with the top digital marketing company in Delhi.",
    images: ["https://www.onnextweb.in/dark-logo.png"],
  },
};

export default function DelhiDigitalMarketing() {
  const marketingServices = [
    {
      title: "Search Engine Optimization (SEO)",
      desc: "Dominate search pages with dynamic on-page and off-page SEO optimization. We perform deep keyword research, inject semantic FAQ page structured data, and clean crawl errors to secure Page 1 rankings.",
      icon: <Search className="text-primary w-6 h-6" />,
      features: ["Technical SEO & Audits", "Factual Density Keywords", "Schema & JSON-LD Setup", "High-Quality Backlink Campaigns"]
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      desc: "Maximize ad budgets with ROI-focused campaign designs. We configure Google Ads, Meta Ads, and LinkedIn campaigns, linking them to custom Next.js landing pages designed to minimize bounce rates and maximize conversions.",
      icon: <Target className="text-primary w-6 h-6" />,
      features: ["Google Ads & Meta Campaigns", "Custom Next.js Landing Pages", "Audience A/B Testing", "Conversion Rate Audits"]
    },
    {
      title: "Social Media & Content Strategy",
      desc: "Build authentic brand loyalty and authority. We compile custom post schedules, compose engaging copy, and design high-fidelity templates that align with your corporate styleguide.",
      icon: <Share2 className="text-primary w-6 h-6" />,
      features: ["LinkedIn & Meta Content", "Interactive Infographics", "Corporate Styleguides", "Engagement Analytics Tracking"]
    },
    {
      title: "Analytics & Growth Marketing",
      desc: "Make data-backed decisions. We set up comprehensive Google Analytics 4 (GA4) event trackers, deploy custom Google Tag Manager scripts, and prepare visual dashboard reviews.",
      icon: <BarChart3 className="text-primary w-6 h-6" />,
      features: ["GA4 & GTM Configurations", "Custom E-Commerce Tracking", "Weekly Performance Reports", "Conversion Funnel Audits"]
    }
  ];

  const workflowSteps = [
    { num: "01", phase: "Market Audits & Scoping", desc: "We study your niche competitors in Delhi, audit current crawl metrics, and scope out high-intent keywords." },
    { num: "02", phase: "Performance Setup", desc: "We optimize your page speed, configure secure analytics tracking nodes, and fix technical site errors." },
    { num: "03", phase: "Campaign Activation", desc: "Launch targeted SEO keyword campaigns and PPC ads connected to custom-designed speed templates." },
    { num: "04", phase: "Optimizations & Scale", desc: "Audit weekly conversions data, run A/B copy tests, and scale budgets on high-performing lead funnels." }
  ];

  const faqs = [
    {
      question: "Why should we hire a digital marketing agency in Delhi?",
      answer: "Hiring a local agency in Delhi like OnNextWeb gives you access to SEO and PPC specialists who understand search trends, regional customer intent, and competitive landscapes. We design data-backed campaigns that prioritize lead acquisition and organic scaling over vanity metrics."
    },
    {
      question: "How does technical SEO impact digital marketing ROI?",
      answer: "Technical SEO ensures your website loads under 2 seconds, is fully crawlable by search bots, and passes Core Web Vitals. Google ranks fast, responsive pages higher, directly reducing your reliance on expensive PPC ads and increasing organic ROI."
    },
    {
      question: "What is your approach to PPC and Lead Generation?",
      answer: "We design high-converting custom Next.js landing pages for every ad campaign. By focusing on page speed, copy fidelity, and accurate tracking setup (GA4 & GTM), we lower your Cost Per Lead (CPL) and double conversion rates."
    }
  ];

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
        <GrainOverlay />
        <Navbar />

        {/* Backdrop Glows */}
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
        <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none animate-pulse" />

        <main className="pt-32 pb-20 relative z-10">
          {/* HERO SECTION */}
          <section className="container mx-auto px-6 max-w-6xl mb-24">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Digital Marketing Company in Delhi" }]} />
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <AnimatedSection className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] text-primary font-bold uppercase tracking-widest">
                  <TrendingUp size={12} className="animate-bounce" />
                  Premium Delhi Growth Agency
                </AnimatedSection>
                <AnimatedSection delay={0.1} className="space-y-4">
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-gradient">
                    Digital Marketing Company in Delhi
                  </h1>
                  <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                    Scale your brand with data-centric Search Engine Optimization (SEO), high-converting Pay-Per-Click (PPC) ads, and creative social media content. We focus on leads and revenue, not just clicks.
                  </p>
                </AnimatedSection>

                {/* Local Stats */}
                <AnimatedSection delay={0.2} className="grid grid-cols-3 gap-6 pt-4 border-t border-border/40">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">150%+</h4>
                    <p className="text-[10px] text-muted-foreground uppercase font-semibold">Average CTR Boost</p>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">2.8x</h4>
                    <p className="text-[10px] text-muted-foreground uppercase font-semibold">ROI Increase</p>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">98%</h4>
                    <p className="text-[10px] text-muted-foreground uppercase font-semibold">Client Retention</p>
                  </div>
                </AnimatedSection>
              </div>

              {/* Interactive Scoping Form */}
              <div className="lg:col-span-5">
                <AnimatedSection delay={0.3} className="bg-card/75 border border-border/80 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-2xl relative">
                  <div className="absolute top-4 right-4 text-[10px] uppercase font-bold text-primary/80 bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    Free SEO Audit
                  </div>
                  <LandingPageForm
                    title="Get Free Marketing Audit"
                    subtitle="Submit details and our marketing experts will prepare a custom organic SEO and PPC recommendation sheet."
                    buttonText="Request Free Scoping Audit"
                    placeholderMessage="Describe your marketing or SEO requirements..."
                    sourcePage="Delhi Marketing Hero Form"
                  />
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* SERVICES GRID */}
          <section className="container mx-auto px-6 max-w-6xl mb-28">
            <AnimatedSection className="text-center mb-16 space-y-4">
              <span className="text-primary text-xs uppercase font-bold tracking-widest">Our Marketing Services</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Data-Driven Growth Strategies</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                We combine technical search audits with creative copywriting to scale your customer base.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {marketingServices.map((service, idx) => (
                <AnimatedSection
                  key={idx}
                  delay={idx * 0.1}
                  className="bg-secondary/10 border border-border/60 hover:border-primary/20 rounded-3xl p-8 transition-all duration-300 relative group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">{service.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-3 border-t border-border/40 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-primary shrink-0" />
                        <span className="text-[11px] font-medium text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* COMPARISON TABLE */}
          <section className="container mx-auto px-6 max-w-5xl mb-28">
            <AnimatedSection className="text-center mb-12 space-y-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold">Why OnNextWeb Outperforms Typical Agencies</h2>
              <p className="text-muted-foreground text-xs sm:text-sm max-w-lg mx-auto">
                Compare our technical organic capabilities against standard marketing agencies.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="overflow-x-auto rounded-2xl border border-border/60 bg-secondary/15 backdrop-blur-md">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-secondary/30 font-bold">
                    <th className="p-4 sm:p-5">Growth Strategy</th>
                    <th className="p-4 sm:p-5 text-primary">OnNextWeb Approach</th>
                    <th className="p-4 sm:p-5 text-muted-foreground">Standard Agencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-muted-foreground">
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-foreground">Landing Page Tech</td>
                    <td className="p-4 sm:p-5 text-foreground font-medium">Custom, ultra-fast Next.js templates (Loads under 1s)</td>
                    <td className="p-4 sm:p-5">Generic templates (Slow loads, drops ad quality score)</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-foreground">Content Strategy</td>
                    <td className="p-4 sm:p-5 text-foreground font-medium">1500+ words factual density, QA optimization, dynamic tables</td>
                    <td className="p-4 sm:p-5">Thin 400-word SEO blogs (Keyword stuffed, low E-E-A-T)</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-foreground">Data Configurations</td>
                    <td className="p-4 sm:p-5 text-foreground font-medium">Full server-side GA4 events tracking, GTM layers</td>
                    <td className="p-4 sm:p-5">Basic pixel configurations (Vulnerable to ad blocker drops)</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-foreground">SEO Optimization</td>
                    <td className="p-4 sm:p-5 text-foreground font-medium">Dynamic JSON-LD schema, H1-H3 structural audits</td>
                    <td className="p-4 sm:p-5">Basic meta description edits (Static sitemap setup only)</td>
                  </tr>
                </tbody>
              </table>
            </AnimatedSection>
          </section>

          {/* WORKFLOW ROADMAP */}
          <section className="container mx-auto px-6 max-w-6xl mb-28">
            <AnimatedSection className="text-center mb-16 space-y-4">
              <span className="text-primary text-xs uppercase font-bold tracking-widest">Our Optimization Path</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">How We Scale Your Rankings</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                A systematic roadmap constructed to identify SEO leaks and drive high-intent leads.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, idx) => (
                <AnimatedSection
                  key={idx}
                  delay={idx * 0.1}
                  className="bg-surface-elevated/20 border border-border/60 p-6 rounded-xl relative space-y-4 hover:border-primary/20 transition-all duration-300"
                >
                  <span className="font-display text-3xl font-extrabold text-primary/30 block">{step.num}</span>
                  <h3 className="font-display text-base font-bold text-foreground">{step.phase}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* TRUSTED BY LEADERS (E-E-A-T) */}
          <section className="container mx-auto px-6 max-w-6xl mb-28 border-t border-border/40 pt-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <AnimatedSection className="space-y-6">
                <span className="text-primary text-xs uppercase font-bold tracking-widest">E-E-A-T Leadership</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient">Search Optimizers You Can Trust</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our digital marketing campaigns are audited directly by **MD Osama Khan** and our team of senior conversion analysts. We have spent years fine-tuning search crawler rules, structuring data layers, and lowering advertising costs for businesses in Delhi NCR.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We don't buy low-quality links or write artificial, thin content. Every article seeded on your domain is structured to pass Core Web Vitals checks and provide factual density that search engine AI agents (Gemini, ChatGPT) parse as authority sources.
                </p>
                <div className="flex items-center gap-4 bg-secondary/15 p-5 rounded-2xl border border-border/60">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary shrink-0">
                    OK
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">MD Osama Khan</h4>
                    <p className="text-xs text-muted-foreground">Chief Technologist & Marketing Scoping Architect</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Local Contact Badges */}
              <AnimatedSection delay={0.2} className="space-y-6 bg-secondary/10 border border-border/60 rounded-3xl p-8 relative overflow-hidden">
                <h3 className="font-display text-2xl font-bold">Delhi NCR Office</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Connect with our Delhi marketing experts via call or WhatsApp. We will run a complete crawlers audit of your site and mail you a 15-point report entirely free.
                </p>
                <div className="space-y-4 pt-2">
                  <a href="tel:+918765077474" className="flex items-center gap-4 bg-background border border-border px-5 py-3 rounded-xl text-xs hover:border-primary/20 transition-all group">
                    <Phone size={14} className="text-primary group-hover:scale-105 transition-transform" />
                    <span className="font-medium text-foreground">Call Delhi Office: +91 8765077474</span>
                  </a>
                  <a href="https://wa.me/918765077474" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-4 bg-emerald-600/10 border border-emerald-500/30 text-emerald-400 px-5 py-3 rounded-xl text-xs hover:bg-emerald-600/20 transition-all">
                    <MessageSquare size={14} />
                    <span>WhatsApp: Connect Instantly</span>
                  </a>
                </div>
                <div className="mt-6 border-t border-border/40 pt-4 flex gap-4 text-[10px] text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <ShieldCheck size={12} className="text-primary" />
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck size={12} className="text-primary" />
                    <span>NDAs Signed</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* FAQ ACCORDION SECTION (AEO) */}
          <section className="container mx-auto px-6 max-w-4xl border-t border-border/40 pt-20">
            <AnimatedSection className="text-center mb-12 space-y-4">
              <span className="text-primary text-xs uppercase font-bold tracking-widest">Frequently Asked Questions</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold">Marketing & Growth FAQs</h2>
            </AnimatedSection>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <AnimatedSection
                  key={idx}
                  delay={idx * 0.1}
                  className="group border border-border bg-secondary/10 rounded-xl overflow-hidden cursor-pointer"
                >
                  <details className="outline-none [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between p-5 text-xs sm:text-sm font-bold text-foreground select-none outline-none group-open:bg-primary/5 transition-colors">
                      <span>{faq.question}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 text-primary">
                        <ArrowRight size={14} className="rotate-90 group-open:-rotate-90" />
                      </span>
                    </summary>
                    <div className="p-5 border-t border-border/60 text-[11px] sm:text-xs text-muted-foreground leading-relaxed bg-surface-elevated/5">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How fast can an SEO company in Delhi improve Google search positions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Organic search ranking timelines vary depending on keyword competition and site history. Typically, low-hanging technical fixes deliver momentum within 3 to 6 weeks, while competitive local key terms achieve Top 10 rankings in 3 to 6 months."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between PPC advertising and organic SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PPC (Google Ads/Meta) provides instant visibility by paying per click. Organic SEO builds long-term domain authority and free organic traffic that accumulates over time."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide custom reporting dashboards for marketing campaigns?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, ON Next Web provides transparent bi-weekly reports tracking real keyword ranking positions, impression metrics, conversion rates, and ROAS directly from Google Search Console and GA4."
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
                "name": "Digital Marketing Company in Delhi",
                "item": "https://www.onnextweb.in/digital-marketing-company-in-delhi"
              }
            ]
          })
        }}
      />
    </>
  );
}
