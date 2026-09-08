import LocationServiceSchema from "@/components/LocationServiceSchema";

export default function NoidaLocationLayout({ children }: { children: React.ReactNode }) {
  const pageUrl = "https://www.onnextweb.in/website-development-company-in-noida";

  return (
    <>
      <LocationServiceSchema
        city="Noida"
        pageUrl={pageUrl}
        serviceName="Website Development Services in Noida"
      />
      {children}
    </>
  );
}
