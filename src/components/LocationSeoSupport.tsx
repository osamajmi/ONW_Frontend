import Link from "next/link";

const links = [
  { href: "/website-development-company-in-delhi", label: "Website Development Company in Delhi" },
  { href: "/website-development-company-in-gurgaon", label: "Website Development Company in Gurgaon" },
  { href: "/website-development-company-in-noida", label: "Website Development Company in Noida" },
  { href: "/custom-software-development-company-in-india", label: "Custom Software Development Company in India" },
  { href: "/services/web-development", label: "Web Development Services" },
  { href: "/services/seo-services", label: "SEO Services" },
];

export default function LocationSeoSupport({ city }: { city: string }) {
  return (
    <section className="border-t border-border/40 bg-surface/30 py-14">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Delhi NCR Web Development</p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Web Development Support for {city} and Nearby Business Hubs
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              ON Next Web helps businesses across {city} and Delhi NCR with custom websites, ecommerce development,
              web applications, technical SEO, and performance-focused Next.js development. Explore related service and
              location pages to compare the right solution for your project.
            </p>
          </div>

          <nav aria-label={`${city} related services`} className="grid gap-3 text-sm">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-border/70 bg-background px-4 py-3 font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
