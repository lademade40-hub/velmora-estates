"use client";

import { useRoute } from "@/lib/router";
import { Footer, Header, TopBar } from "@/components/velmora/chrome";
import HomePage from "@/components/velmora/home";
import { AboutPage, AgentsPage, ContactPage, PropertiesPage, ServicesPage } from "@/components/velmora/pages";
import { PropertyDetailPage } from "@/components/velmora/detail";

export default function Page() {
  const route = useRoute();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <Header route={route} />
      <main className="flex-1">
        {route.name === "home" && <HomePage />}
        {route.name === "about" && <AboutPage />}
        {route.name === "properties" && <PropertiesPage />}
        {route.name === "property" && <PropertyDetailPage slug={route.slug} />}
        {route.name === "agents" && <AgentsPage />}
        {route.name === "services" && <ServicesPage />}
        {route.name === "contact" && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}
