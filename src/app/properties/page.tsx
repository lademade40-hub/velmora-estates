import type { Metadata } from "next";
import { PropertiesPage } from "@/components/velmora/pages";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "The current Velmora portfolio: estates, villas, and penthouses across Bel Air, Beverly Hills, Malibu, Pacific Palisades, and the Hollywood Hills.",
};

export default function Page() {
  return <PropertiesPage />;
}
