import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Smartphone, Check, ArrowRight } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Mobile App Development Services in India | ON Next Web",
  description: "Custom mobile app development services in India for business apps, customer portals and scalable digital products. Plan your Android and iOS app with ON Next Web.",
  alternates: { canonical: "https://www.onnextweb.in/services/mobile-app-development" },
  openGraph: {
    title: "Mobile App Development Services in India | ON Next Web",
    description: "Custom mobile app development for business apps, customer portals and scalable digital products.",
    url: "https://www.onnextweb.in/services/mobile-app-development",
    type: "website",
  },
};

const faqs = [
  ["Do you build custom mobile apps for businesses?", "Yes. We plan and build mobile experiences around your business workflows, customer journeys, integrations and operational requirements."],
  ["Can an app connect to existing software?", "Yes. We can integrate mobile applications with existing APIs, authentication systems, dashboards, databases and third-party services."],
  ["How do you approach mobile app performance?", "We prioritize efficient API usage, sensible data loading, responsive interfaces, error handling and production monitoring."],
];

export default function MobileAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="container mx-auto px-6 max-w-6xl">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Mobile App Development" }]} />
          <div className="grid lg:grid-cols-12 gap-12 items-center py-12 md:py-20">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                <Smartphone size={14} /> Mobile Product Engineering
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight">
                Mobile App <span className="text-gradient">Development Services</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
                Build mobile products that make business workflows simpler and customer experiences easier to use. We plan app architecture, interfaces, APIs and production delivery around measurable product requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-semibold">
                  Discuss Your App <ArrowRight size={17} />
                </Link>
                <Link href="/services/web-development" className="inline-flex items-center border border-border px-6 py-4 rounded-xl font-semibold hover:border-primary">
                  Web Development Services
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl border border-border bg-surface-elevated/40 p-8">
              <h2 className="font-display text-2xl font-bold mb-5">What we can build</h2>
              <ul className="space-y-3 text-muted-foreground">
                {["Business and customer apps", "API-connected mobile products", "Account, booking and workflow experiences", "Dashboards and operational tools", "MVPs and scalable product foundations"].map((item) => (
                  <li key={item} className="flex gap-2"><Check size={17} className="text-primary mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="border-y border-border/40 py-16">
          <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-3 gap-8">
            {[
              ["Product planning", "Turn business workflows into clear app requirements, user journeys and release priorities."],
              ["App engineering", "Build maintainable interfaces, integrations, authentication and backend connections for production use."],
              ["Launch and iteration", "Test real user flows, resolve release issues and improve the product as usage grows."],
            ].map(([title, text]) => (
              <div key={title} className="space-y-3"><h2 className="font-display text-xl font-bold">{title}</h2><p className="text-muted-foreground leading-relaxed">{text}</p></div>
            ))}
          </div>
        </section>
        <section className="container mx-auto px-6 max-w-4xl py-16 space-y-10">
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Mobile app strategy</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Start with the business outcome, not just the app screens</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A useful mobile product needs more than a polished interface. We map the user journey, data requirements, integrations, permissions and operational workflow before implementation. If your mobile product depends on a web platform or custom backend, we can plan the connected architecture with our <Link href="/services/custom-software-development" className="text-primary font-semibold hover:underline">custom software development services</Link>.
          </p>
          <div className="border-t border-border pt-10 space-y-4">
            <h2 className="font-display text-2xl font-bold">Frequently asked questions</h2>
            {faqs.map(([q, a]) => <div key={q} className="space-y-2"><h3 className="font-bold">{q}</h3><p className="text-muted-foreground leading-relaxed">{a}</p></div>)}
          </div>
        </section>
        <section className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-2xl border border-border p-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Have a mobile product idea?</h2>
            <p className="text-muted-foreground mt-3 mb-6">Share the users, workflows and integrations you need. We can turn that scope into a practical development plan.</p>
            <Link href="/contact" className="inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold">Start a Project</Link>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", name: "Mobile App Development Services", serviceType: "Mobile App Development",
        provider: { "@type": "Organization", name: "ON Next Web", url: "https://www.onnextweb.in" }, areaServed: "India",
        url: "https://www.onnextweb.in/services/mobile-app-development"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
      }) }} />
      <Footer />
    </div>
  );
}
