import type { Metadata } from "next";
import LoginClient from "@/components/LoginClient";

export const metadata: Metadata = {
  title: "Administrative Login Portal | OnNextWeb",
  description: "Secure login portal for ON Next Web administrators. Authentication is required to access the site dashboard content management tools.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "https://www.onnextweb.in/login",
  },
};

export default function LoginPage() {
  return <LoginClient />;
}
