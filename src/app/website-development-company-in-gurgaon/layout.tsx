import LocationServiceSchema from "@/components/LocationServiceSchema";
import LocationSeoSupport from "@/components/LocationSeoSupport";

export default function GurgaonLocationLayout({ children }: { children: React.ReactNode }) {
  const pageUrl = "https://www.onnextweb.in/website-development-company-in-gurgaon";

  return (
    <>
      <LocationServiceSchema
        city="Gurgaon"
        pageUrl={pageUrl}
        serviceName="Website Development Services in Gurgaon"
      />
      {children}
      <LocationSeoSupport city="Gurgaon" />
    </>
  );
}
