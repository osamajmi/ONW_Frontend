import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Silver Point | Premium Creative Studio",
  description: "Crafting modern digital products, interactive websites, and premium brand designs.",
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

