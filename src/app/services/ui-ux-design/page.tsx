import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Palette, Check, ArrowRight } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "UI/UX Design Services in India | ON Next Web",
  description: "UI/UX design services in India for websites, SaaS products and mobile apps. User journeys, wireframes and polished interfaces designed around business goals.",
  alternates: { canonical: "https://www.onnextweb.in/services/ui-ux-design" },
  openGraph: { title: "UI/UX Design Services in India | ON Next Web", description: "User-focused UI/UX design for websites, SaaS products and mobile apps.", url: "https://www.onnextweb.in/services/ui-ux-design", type: "website" },
};

const faqs = [
  ["What does your UI/UX design process include?", "We can cover discovery, user flows, wireframes, visual direction, responsive interface design and developer handoff based on the project scope."],
  ["Can you redesign an existing product?", "Yes. We can audit important journeys, identify usability friction and redesign priority screens while keeping technical constraints in view."],
  ["Do you design websites and mobile apps?", "Yes. The process can be tailored to responsive websites, SaaS dashboards, customer portals and mobile product experiences."],
];

export default function UiUxDesignPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor /><GrainOverlay /><Navbar />
      <main className="pt-28 pb-20">
        <section className="container mx-auto px-6 max-w-6xl">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "UI/UX Design" }]} />
          <div className="grid lg:grid-cols-12 gap-12 items-center py-12 md:py-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold"><Palette size={14} /> Product Experience Design</span>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight">UI/UX <span className="text-gradient">Design Services</span></h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">Design clear, conversion-focused digital experiences for websites, SaaS products and mobile apps. We connect user journeys, information architecture and visual systems before development.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-semibold">Discuss a Design Project <ArrowRight size={17} /></Link>
                <Link href="/services/web-development" className="inline-flex items-center border border-border px-6 py-4 rounded-xl font-semibold hover:border-primary">Web Development Services</Link>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl border border-border bg-surface-elevated/40 p-8">
              <h2 className="font-display text-2xl font-bold mb-5">Design deliverables</h2>
              <ul className="space-y-3 text-muted-foreground">
                {["User flows and information architecture", "Wireframes and interaction patterns", "Responsive interface systems", "SaaS and dashboard UX", "Developer-ready design handoff"].map((item) => <li key={item} className="flex gap-2"><Check size={17} className="text-primary mt-0.5" />{item}</li>)}
              </ul>
            </div>
          </div>
        </section>
        <section className="border-y border-border/40 py-16">
          <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-3 gap-8">
            {[["Discover", "Clarify users, goals, business constraints and the journeys that matter most."],["Design", "Translate requirements into flows, wireframes and a consistent responsive interface system."],["Validate", "Review important journeys, refine friction points and prepare a practical handoff for development."]].map(([title, text]) => <div key={title} className="space-y-3"><h2 className="font-display text-xl font-bold">{title}</h2><p className="text-muted-foreground leading-relaxed">{text}</p></div>)}
          </div>
        </section>
        <section className="container mx-auto px-6 max-w-4xl py-16 space-y-10">
          <div><p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Experience design</p><h2 className="font-display text-3xl md:text-4xl font-bold">Good UI supports the task the user came to complete</h2></div>
          <p className="text-muted-foreground text-lg leading-relaxed">Strong design balances clarity, accessibility, brand consistency and business outcomes. For development projects, we can carry the approved experience into a fast implementation through our <Link href="/services/web-development" className="text-primary font-semibold hover:underline">web development services</Link>.</p>
          <div className="border-t border-border pt-10 space-y-4"><h2 className="font-display text-2xl font-bold">Frequently asked questions</h2>{faqs.map(([q, a]) => <div key={q} className="space-y-2"><h3 className="font-bold">{q}</h3><p className="text-muted-foreground leading-relaxed">{a}</p></div>)}</div>
        </section>
        <section className="container mx-auto px-6 max-w-4xl"><div className="rounded-2xl border border-border p-8 text-center"><h2 className="font-display text-2xl md:text-3xl font-bold">Need a cleaner product experience?</h2><p className="text-muted-foreground mt-3 mb-6">Tell us which screens or user journeys need improvement and we can scope the design work.</p><Link href="/contact" className="inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold">Start a Design Project</Link></div></section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service",name:"UI/UX Design Services",serviceType:"UI/UX Design",provider:{"@type":"Organization",name:"ON Next Web",url:"https://www.onnextweb.in"},areaServed:"India",url:"https://www.onnextweb.in/services/ui-ux-design"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}) }} />
      <Footer />
    </div>
  );
}
