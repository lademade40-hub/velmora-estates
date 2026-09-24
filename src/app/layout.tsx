import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cormorant-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/cormorant-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/cormorant-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = localFont({
  src: [
    { path: "../fonts/jost-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/jost-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/jost-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/jost-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/jost-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Velmora Estates | Luxury Real Estate in Los Angeles",
  description:
    "Velmora Estates is a private brokerage representing exceptional homes across Los Angeles. Bel Air, Beverly Hills, Malibu, Pacific Palisades and beyond.",
  keywords: [
    "luxury real estate",
    "Los Angeles homes",
    "Bel Air estates",
    "Malibu villas",
    "Beverly Hills realtor",
    "Velmora Estates",
  ],
  authors: [{ name: "Velmora Estates" }],
  icons: { icon: "/velmora-icon.svg" },
  openGraph: {
    title: "Velmora Estates | Luxury Real Estate in Los Angeles",
    description:
      "A private brokerage for exceptional homes across Los Angeles. Quiet counsel, sharp negotiation, and access you will not find on the portals.",
    siteName: "Velmora Estates",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${jost.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
