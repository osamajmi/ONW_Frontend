import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

export default function SoftwareOutsourcingGuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-foreground relative min-h-screen">
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
