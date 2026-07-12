import type { Metadata } from "next";
import DashboardClient from "@/components/DashboardClient";

export const metadata: Metadata = {
  title: "Administrative Dashboard | OnNextWeb",
  description: "Secure Content Management System for ON Next Web site management.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "https://www.onnextweb.in/dashboard",
  },
};

export default function DashboardPage() {
  return <DashboardClient />;
}
