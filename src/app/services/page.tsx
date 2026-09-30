import type { Metadata } from "next";
import { ServicesPage } from "@/components/velmora/pages";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Selling, buying, off-market placement, investment, and property care. Six practices delivered personally by named senior agents.",
};

export default function Page() {
  return <ServicesPage />;
}
