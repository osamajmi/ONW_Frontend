type Props = {
  city: string;
  pageUrl: string;
  serviceName: string;
};

export default function LocationServiceSchema({ city, pageUrl, serviceName }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: serviceName,
    serviceType: "Website Development",
    url: pageUrl,
    provider: {
      "@type": "Organization",
      "@id": "https://www.onnextweb.in/#organization",
      name: "ON Next Web",
      url: "https://www.onnextweb.in",
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: pageUrl,
      servicePhone: "+91-8765077474",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
