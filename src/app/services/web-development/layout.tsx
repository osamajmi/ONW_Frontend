export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  const pageUrl = "https://www.onnextweb.in/services/web-development";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Web Development Services in India | ON Next Web",
    description: "Custom web development services for business websites, ecommerce applications, portals and modern Next.js and React projects.",
    isPartOf: {
      "@id": "https://www.onnextweb.in/#website"
    },
    about: {
      "@id": `${pageUrl}#service`
    },
    provider: {
      "@id": "https://www.onnextweb.in/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {children}
    </>
  );
}
