import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://onnextweb.in"),
  title: {
    default: "ON Next Web | Premium Digital Studio",
    template: "%s | ON Next Web",
  },
  description: "We craft modern websites, custom software, and premium brand designs engineered for ambitious brands. Think Best, Think Next.",
  keywords: ["web development", "UI/UX design", "custom software", "Next.js", "branding", "digital studio", "India"],
  authors: [{ name: "ON Next Web", url: "https://onnextweb.in" }],
  creator: "ON Next Web",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://onnextweb.in",
    siteName: "ON Next Web",
    title: "ON Next Web | Premium Digital Studio",
    description: "We craft modern websites, custom software, and premium brand designs. Think Best, Think Next.",
    images: [
      {
        url: "/dark logo.png",
        width: 1200,
        height: 630,
        alt: "ON Next Web — Premium Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ON Next Web | Premium Digital Studio",
    description: "We craft modern websites, custom software, and premium brand designs.",
    images: ["/dark logo.png"],
    creator: "@onnextweb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
