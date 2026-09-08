import LocationServiceSchema from "@/components/LocationServiceSchema";

export default function DelhiLocationLayout({ children }: { children: React.ReactNode }) {
  const pageUrl = "https://www.onnextweb.in/website-development-company-in-delhi";

  return (
    <>
      <LocationServiceSchema
        city="Delhi"
        pageUrl={pageUrl}
        serviceName="Website Development Services in Delhi"
      />
      {children}
    </>
  );
}
