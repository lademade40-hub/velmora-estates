import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROPERTIES, getProperty } from "@/lib/data";
import { PropertyDetailPage } from "@/components/velmora/detail";

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: "Listing Not Found" };
  return {
    title: property.title,
    description: property.tagline,
    openGraph: {
      title: `${property.title} | Velmora Estates`,
      description: property.tagline,
      images: [{ url: property.images[0] }],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();
  return <PropertyDetailPage slug={slug} />;
}
