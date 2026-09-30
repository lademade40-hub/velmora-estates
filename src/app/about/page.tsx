import type { Metadata } from "next";
import { AboutPage } from "@/components/velmora/pages";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Velmora Estates was founded in 2013 on one rule: the person who wins your listing does the work. Meet the senior team behind Los Angeles quietest high end sales.",
};

export default function Page() {
  return <AboutPage />;
}
