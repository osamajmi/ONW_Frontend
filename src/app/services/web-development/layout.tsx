export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  const pageUrl = "https://www.onnextweb.in/services/web-development";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What technologies do you use for web development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ON Next Web builds with React, Next.js, TypeScript and Tailwind CSS, with backend integrations using technologies such as Node.js, Express, MongoDB and headless CMS platforms."
        }
      },
      {
        "@type": "Question",
        name: "How long does a custom web development project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project timelines depend on scope. Business websites can often be completed in a few weeks, while complex ecommerce platforms, portals and custom web applications generally require longer delivery cycles."
        }
      },
      {
        "@type": "Question",
        name: "Will my website be SEO-ready?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Web development projects can include semantic HTML, structured data, performance optimization, crawlable navigation and technical SEO foundations designed to support search visibility."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide full source code ownership?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project handover can include the agreed source code repository and deployment access so the client can maintain and extend the website after launch."
        }
      }
    ]
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
