import type { MetadataRoute } from "next";
import { PROPERTIES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://velmora-estates.vercel.app";
  const now = new Date();

  const pages = ["", "/about", "/properties", "/agents", "/services", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));

  const homes = PROPERTIES.map((p) => ({
    url: `${base}/properties/${p.slug}`,
    lastModified: now,
  }));

  return [...pages, ...homes];
}
