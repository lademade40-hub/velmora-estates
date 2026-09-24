"use client";

import { useCallback, useEffect, useState } from "react";

export type Route =
  | { name: "home" }
  | { name: "about" }
  | { name: "properties" }
  | { name: "property"; slug: string }
  | { name: "agents" }
  | { name: "services" }
  | { name: "contact" };

export function parseHash(hash: string): Route {
  const clean = hash.replace(/^#\/?/, "").split("?")[0].replace(/\/+$/, "");
  const parts = clean.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  switch (parts[0]) {
    case "about":
      return { name: "about" };
    case "properties":
      return { name: "properties" };
    case "property":
      return { name: "property", slug: parts[1] || "" };
    case "agents":
      return { name: "agents" };
    case "services":
      return { name: "services" };
    case "contact":
      return { name: "contact" };
    default:
      return { name: "home" };
  }
}

export function routeToPath(route: Route): string {
  switch (route.name) {
    case "home":
      return "#/";
    case "about":
      return "#/about";
    case "properties":
      return "#/properties";
    case "property":
      return `#/property/${route.slug}`;
    case "agents":
      return "#/agents";
    case "services":
      return "#/services";
    case "contact":
      return "#/contact";
  }
}

export function navigate(path: string) {
  if (typeof window === "undefined") return;
  window.location.hash = path;
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === "undefined" ? { name: "home" } : parseHash(window.location.hash)
  );

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route;
}

export function useNavigateTo() {
  return useCallback((path: string) => {
    navigate(path);
  }, []);
}
