import type { Metadata } from "next";
import { AgentsPage } from "@/components/velmora/pages";

export const metadata: Metadata = {
  title: "Our Agents",
  description:
    "Four senior advisors, each with a decade or more in Los Angeles luxury real estate. No junior handoffs, ever.",
};

export default function Page() {
  return <AgentsPage />;
}
