import Link from "next/link";

const pageUrl = "https://www.onnextweb.in/custom-software-development-company-in-india";

export default function CustomSoftwareIndiaLayout({ children }: { children: React.ReactNode }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Custom Software Development Services in India",
    serviceType: "Custom Software Development",
    url: pageUrl,
    provider: {
      "@type": "Organization",
      "@id": "https://www.onnextweb.in/#organization",
      name: "ON Next Web",
      url: "https://www.onnextweb.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: pageUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <section className="border-t border-border/40 bg-surface/30 py-14">
        <div className="container mx-auto max-w-5xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Related Development Services</p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Explore Web, Software and SEO Services from ON Next Web
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Compare our custom software, web development, SEO and Delhi NCR location services to find the right delivery model for your project.
          </p>
          <nav aria-label="Related software and web development services" className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["/services/custom-software-development", "Custom Software Development Services"],
              ["/services/web-development", "Web Development Services"],
              ["/services/seo-services", "SEO Services"],
              ["/website-development-company-in-delhi", "Website Development Company in Delhi"],
              ["/website-development-company-in-gurgaon", "Website Development Company in Gurgaon"],
              ["/website-development-company-in-noida", "Website Development Company in Noida"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border/70 bg-background px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
