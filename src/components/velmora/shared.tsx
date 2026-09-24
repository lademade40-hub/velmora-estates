"use client";

import { formatPrice, type Property } from "@/lib/data";
import { navigate, routeToPath } from "@/lib/router";
import { Reveal } from "./chrome";
import { ArrowRight, Bath, BedDouble, MapPin, Ruler } from "lucide-react";

/* ---------------- Section heading ---------------- */

export function SectionHead({
  kicker,
  title,
  lead,
  align = "center",
  light = false,
}: {
  kicker: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"} mb-12 md:mb-16`}>
      <p className={`kicker mb-4 ${light ? "kicker-light" : ""}`}>{kicker}</p>
      <h2 className={`font-display text-3xl md:text-5xl font-medium leading-[1.12] text-balance-luxe ${light ? "text-ivory" : "text-evergreen"}`}>
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-[16px] leading-relaxed font-light ${light ? "text-ivory/65" : "text-taupe"}`}>{lead}</p>
      )}
    </div>
  );
}

/* ---------------- Property card ---------------- */

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  const go = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(routeToPath({ name: "property", slug: property.slug }));
  };

  return (
    <Reveal delay={(index % 3) * 90}>
      <a
        href={routeToPath({ name: "property", slug: property.slug })}
        onClick={go}
        className="group block bg-card zoom-img hover-lift"
        aria-label={`View ${property.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-brass text-evergreen-deep text-[11px] uppercase tracking-[0.16em] font-medium px-3 py-1.5">
              {formatPrice(property.price)}
            </span>
            {property.status === "New Listing" && (
              <span className="bg-evergreen-deep/85 text-ivory text-[11px] uppercase tracking-[0.16em] font-medium px-3 py-1.5">
                New
              </span>
            )}
            {property.status === "Open House" && (
              <span className="bg-evergreen-deep/85 text-ivory text-[11px] uppercase tracking-[0.16em] font-medium px-3 py-1.5">
                Open House
              </span>
            )}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-1.5 text-taupe text-[13px] font-light">
            <MapPin className="w-3.5 h-3.5 text-brass" />
            {property.location}
          </div>
          <h3 className="font-display text-2xl font-semibold text-evergreen mt-2 group-hover:text-brass-dark transition-colors">
            {property.title}
          </h3>
          <p className="text-[14px] text-taupe font-light mt-1.5 leading-relaxed line-clamp-2">{property.tagline}</p>
          <div className="flex items-center gap-5 mt-5 pt-5 border-t border-border text-[13px] text-ink/80">
            <span className="flex items-center gap-1.5">
              <BedDouble className="w-4 h-4 text-brass-dark" /> {property.beds} Beds
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-brass-dark" /> {property.baths} Baths
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler className="w-4 h-4 text-brass-dark" /> {property.sqft.toLocaleString()} Sqft
            </span>
          </div>
          <div className="mt-5 flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-medium text-brass-dark">
            View Property
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </div>
        </div>
      </a>
    </Reveal>
  );
}
