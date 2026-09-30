"use client";

/**
 * Navigation layer for Velmora Estates.
 *
 * Every link in the site goes through `routeToPath` / `navigate`, so the
 * whole component tree stays untouched while the transport underneath is
 * the Next.js App Router. `RouterBridge` mounts once in the root layout
 * and wires the module level `navigate()` to `router.push()`, which keeps
 * client side transitions, prefetch friendly URLs, and scroll restoration
 * handled by Next.js itself.
 */

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export type Route =
  | { name: "home" }
  | { name: "about" }
  | { name: "properties" }
  | { name: "property"; slug: string }
  | { name: "agents" }
  | { name: "services" }
  | { name: "contact" };

export function routeToPath(route: Route): string {
  switch (route.name) {
    case "home":
      return "/";
    case "about":
      return "/about";
    case "properties":
      return "/properties";
    case "property":
      return `/properties/${route.slug}`;
    case "agents":
      return "/agents";
    case "services":
      return "/services";
    case "contact":
      return "/contact";
  }
}

export function parsePath(pathname: string): Route {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  switch (parts[0]) {
    case "about":
      return { name: "about" };
    case "properties":
      return parts[1] ? { name: "property", slug: parts[1] } : { name: "properties" };
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

let pushRef: ((path: string) => void) | null = null;

export function registerRouter(push: (path: string) => void) {
  pushRef = push;
}

export function navigate(path: string) {
  if (pushRef) {
    pushRef(path);
  } else if (typeof window !== "undefined") {
    window.location.assign(path);
  }
}

/** Mounts once in the root layout. Connects navigate() to the App Router. */
export function RouterBridge() {
  const router = useRouter();

  useEffect(() => {
    registerRouter((path) => router.push(path));
    return () => {
      pushRef = null;
    };
  }, [router]);

  return null;
}

export function useRoute(): Route {
  const pathname = usePathname();
  return parsePath(pathname);
}
