import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BadgeCheck, Check, ArrowRight } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Branding Services in India | ON Next Web",
  description: "Branding services in India for startups and growing businesses. Build a clear visual identity, messaging system and digital brand foundation with ON Next Web.",
  alternates: { canonical: "https://www.onnextweb.in/services/branding" },
  openGraph: { title: "Branding Services in India | ON Next Web", description: "Brand identity and digital branding for startups and growing businesses.", url: "https://www.onnextweb.in/services/branding", type: "website" },
};

const faqs = [
  ["What does a branding project include?", "Depending on scope, branding can include positioning direction, visual identity, logo system, typography, color guidance, messaging foundations and digital usage guidance."],
  ["Can you refresh an existing brand?", "Yes. We can work from an existing identity and focus on consistency, modernisation, digital application or a targeted visual refresh."],
  ["Can branding and website development be planned together?", "Yes. Coordinating brand direction with UX and website development can create a more consistent experience from the first interaction through conversion."],
];

export default function BrandingServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor /><GrainOverlay /><Navbar />
      <main className="pt-28 pb-20">
        <section className="container mx-auto px-6 max-w-6xl">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Branding" }]} />
          <div className="grid lg:grid-cols-12 gap-12 items-center py-12 md:py-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold"><BadgeCheck size={14} /> Brand Identity</span>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight">Strategic <span className="text-gradient">Branding Services</span></h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">Create a consistent brand foundation that makes your business easier to recognize and easier to trust across websites, products and customer touchpoints.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-semibold">Discuss Your Brand <ArrowRight size={17} /></Link>
                <Link href="/services/ui-ux-design" className="inline-flex items-center border border-border px-6 py-4 rounded-xl font-semibold hover:border-primary">UI/UX Design Services</Link>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl border border-border bg-surface-elevated/40 p-8">
              <h2 className="font-display text-2xl font-bold mb-5">Branding deliverables</h2>
              <ul className="space-y-3 text-muted-foreground">
                {["Brand positioning direction", "Logo and visual identity systems", "Typography and color guidance", "Digital brand usage patterns", "Messaging and consistency foundations"].map((item) => <li key={item} className="flex gap-2"><Check size={17} className="text-primary mt-0.5" />{item}</li>)}
              </ul>
            </div>
          </div>
        </section>
        <section className="border-y border-border/40 py-16">
          <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-3 gap-8">
            {[["Position", "Clarify who the brand is for, what it should communicate and how it should stand apart."],["Build", "Create a practical visual identity and messaging foundation that can be used consistently."],["Apply", "Translate the brand into digital touchpoints so the identity works across website and product experiences."]].map(([title, text]) => <div key={title} className="space-y-3"><h2 className="font-display text-xl font-bold">{title}</h2><p className="text-muted-foreground leading-relaxed">{text}</p></div>)}
          </div>
        </section>
        <section className="container mx-auto px-6 max-w-4xl py-16 space-y-10">
          <div><p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Brand foundation</p><h2 className="font-display text-3xl md:text-4xl font-bold">A brand should stay consistent when it moves from strategy to screen</h2></div>
          <p className="text-muted-foreground text-lg leading-relaxed">Branding becomes more useful when the identity is practical to apply. We can connect brand direction with <Link href="/services/ui-ux-design" className="text-primary font-semibold hover:underline">UI/UX design</Link> and <Link href="/services/web-development" className="text-primary font-semibold hover:underline">web development</Link> so the final digital experience feels coherent rather than assembled from separate pieces.</p>
          <div className="border-t border-border pt-10 space-y-4"><h2 className="font-display text-2xl font-bold">Frequently asked questions</h2>{faqs.map(([q, a]) => <div key={q} className="space-y-2"><h3 className="font-bold">{q}</h3><p className="text-muted-foreground leading-relaxed">{a}</p></div>)}</div>
        </section>
        <section className="container mx-auto px-6 max-w-4xl"><div className="rounded-2xl border border-border p-8 text-center"><h2 className="font-display text-2xl md:text-3xl font-bold">Ready to strengthen your brand?</h2><p className="text-muted-foreground mt-3 mb-6">Share your business, audience and current brand challenges to plan the right scope.</p><Link href="/contact" className="inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold">Start a Branding Project</Link></div></section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service",name:"Branding Services",serviceType:"Branding",provider:{"@type":"Organization",name:"ON Next Web",url:"https://www.onnextweb.in"},areaServed:"India",url:"https://www.onnextweb.in/services/branding"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}) }} />
      <Footer />
    </div>
  );
}
