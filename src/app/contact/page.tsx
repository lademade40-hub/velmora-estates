import type { Metadata } from "next";
import { ContactPage } from "@/components/velmora/pages";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Velmora Estates. Private consultations, valuations with teeth, and a person who answers the phone.",
};

export default function Page() {
  return <ContactPage />;
}
