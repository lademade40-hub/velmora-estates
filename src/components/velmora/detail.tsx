"use client";

import { useState } from "react";
import { PROPERTIES, formatPrice, fullPrice, getAgent, getProperty } from "@/lib/data";
import { navigate, routeToPath } from "@/lib/router";
import { PageBanner, Reveal } from "./chrome";
import { PropertyCard, SectionHead } from "./shared";
import { CtaBand } from "./home";
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  Calendar,
  Check,
  ChevronRight,
  Home as HomeIcon,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Share2,
  TreePine,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function PropertyDetailPage({ slug }: { slug: string }) {
  const property = getProperty(slug);
  const [activeImg, setActiveImg] = useState(0);
  const { toast } = useToast();

  if (!property) {
    return (
      <section className="py-32">
        <div className="container-luxe text-center">
          <HomeIcon className="w-10 h-10 text-sand mx-auto mb-6" />
          <p className="font-display text-4xl font-medium text-evergreen">This residence has left the book</p>
          <p className="text-taupe font-light mt-4 max-w-md mx-auto text-[15px] leading-relaxed">
            The listing you are looking for was sold, withdrawn, or moved off-market. Similar homes are waiting
            in the current portfolio.
          </p>
          <a
            href={routeToPath({ name: "properties" })}
            onClick={(e) => {
              e.preventDefault();
              navigate(routeToPath({ name: "properties" }));
            }}
            className="mt-8 inline-flex items-center gap-2 bg-evergreen text-ivory text-[13px] uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-brass hover:text-evergreen-deep transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Properties
          </a>
        </div>
      </section>
    );
  }

  const agent = getAgent(property.agentId);
  const similar = PROPERTIES.filter((p) => p.slug !== property.slug && p.neighborhood === property.neighborhood)
    .concat(PROPERTIES.filter((p) => p.slug !== property.slug && p.neighborhood !== property.neighborhood))
    .slice(0, 3);

  const share = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.clipboard) navigator.clipboard.writeText(url);
    toast({ title: "Link copied", description: "The listing link is on your clipboard. Send it to anyone you trust with good news." });
  };

  const specs = [
    { icon: BedDouble, label: "Bedrooms", value: `${property.beds}` },
    { icon: Bath, label: "Bathrooms", value: `${property.baths}` },
    { icon: Ruler, label: "Interior", value: `${property.sqft.toLocaleString()} sqft` },
    { icon: TreePine, label: "Lot", value: property.lot },
    { icon: Calendar, label: "Built", value: `${property.year}` },
    { icon: HomeIcon, label: "Type", value: property.type },
  ];

  return (
    <>
      <PageBanner kicker={property.status} title={property.title} image={property.images[0]} />

      <section className="py-14 md:py-20">
        <div className="container-luxe">
          {/* breadcrumb */}
          <Reveal>
            <nav className="flex flex-wrap items-center gap-2 text-[13px] font-light text-taupe mb-8" aria-label="Breadcrumb">
              <a href={routeToPath({ name: "home" })} onClick={(e) => { e.preventDefault(); navigate(routeToPath({ name: "home" })); }} className="hover:text-brass-dark transition-colors">Home</a>
              <ChevronRight className="w-3.5 h-3.5" />
              <a href={routeToPath({ name: "properties" })} onClick={(e) => { e.preventDefault(); navigate(routeToPath({ name: "properties" })); }} className="hover:text-brass-dark transition-colors">Properties</a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-evergreen font-medium">{property.title}</span>
            </nav>
          </Reveal>

          {/* header row */}
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 pb-8 border-b border-border">
              <div>
                <p className="flex items-center gap-2 text-taupe text-[14px] font-light">
                  <MapPin className="w-4 h-4 text-brass" /> {property.location}
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-medium text-evergreen mt-2">{property.title}</h2>
              </div>
              <div className="flex items-center gap-5">
                <p className="font-display text-4xl md:text-5xl font-semibold text-brass-dark">{fullPrice(property.price)}</p>
                <button
                  onClick={share}
                  className="w-12 h-12 border border-border flex items-center justify-center text-evergreen hover:border-brass hover:text-brass-dark transition-colors"
                  aria-label="Copy listing link"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* gallery */}
          <Reveal className="mt-10">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={property.images[activeImg]} alt={`${property.title} view ${activeImg + 1}`} className="w-full h-full object-cover fade-up" key={activeImg} />
              <span className="absolute top-4 left-4 bg-brass text-evergreen-deep text-[11px] uppercase tracking-[0.16em] font-medium px-3 py-1.5">
                {formatPrice(property.price)} · {property.status}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3 md:gap-4 mt-3 md:mt-4">
              {property.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-[16/10] overflow-hidden border-2 transition-colors ${
                    i === activeImg ? "border-brass" : "border-transparent hover:border-sand"
                  }`}
                  aria-label={`Show photo ${i + 1}`}
                >
                  <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </Reveal>

          {/* main grid */}
          <div className="grid lg:grid-cols-3 gap-10 mt-14">
            <div className="lg:col-span-2">
              {/* specs */}
              <Reveal>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border/70 border border-border/70">
                  {specs.map((s) => (
                    <div key={s.label} className="bg-card px-6 py-5">
                      <s.icon className="w-5 h-5 text-brass" />
                      <p className="text-[11px] uppercase tracking-[0.2em] text-taupe font-medium mt-2.5">{s.label}</p>
                      <p className="font-display text-xl font-semibold text-evergreen mt-0.5">{s.value}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* description */}
              <Reveal className="mt-12">
                <h3 className="font-display text-3xl font-semibold text-evergreen">About this residence</h3>
                <p className="mt-4 text-[17px] leading-relaxed text-ink/80 font-light italic border-l-2 border-brass pl-5">
                  {property.tagline}
                </p>
                <div className="mt-6 space-y-5">
                  {property.description.map((para, i) => (
                    <p key={i} className="text-[16px] leading-relaxed text-taupe font-light">{para}</p>
                  ))}
                </div>
              </Reveal>

              {/* features */}
              <Reveal className="mt-12">
                <h3 className="font-display text-3xl font-semibold text-evergreen">Features &amp; amenities</h3>
                <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                  {property.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-ink/85 font-light border-b border-border/60 pb-3">
                      <Check className="w-5 h-5 text-brass-dark mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* sidebar */}
            <div className="space-y-6 lg:sticky lg:top-28 self-start">
              {agent && (
                <Reveal>
                  <div className="bg-evergreen text-ivory p-8">
                    <div className="flex items-center gap-5">
                      <img src={agent.image} alt={agent.name} className="w-20 h-20 object-cover border-2 border-brass/50" />
                      <div>
                        <p className="text-brass-light text-[11px] uppercase tracking-[0.2em] font-medium">Listing Agent</p>
                        <h4 className="font-display text-2xl font-semibold mt-1">{agent.name}</h4>
                        <p className="text-ivory/60 text-[13px] font-light mt-0.5">{agent.role}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-[14px] leading-relaxed text-ivory/70 font-light">
                      {agent.name.split(" ")[0]} represents this residence personally. Direct line below, no
                      assistants, no call centers.
                    </p>
                    <div className="mt-6 space-y-3 text-[14px] font-light">
                      <a href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 hover:text-brass-light transition-colors">
                        <Phone className="w-4 h-4 text-brass" /> {agent.phone}
                      </a>
                      <a href={`mailto:${agent.email}`} className="flex items-center gap-3 hover:text-brass-light transition-colors">
                        <Mail className="w-4 h-4 text-brass" /> {agent.email}
                      </a>
                    </div>
                    <a
                      href={routeToPath({ name: "contact" })}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(routeToPath({ name: "contact" }));
                      }}
                      className="mt-7 w-full inline-flex items-center justify-center bg-brass text-evergreen-deep text-[13px] uppercase tracking-[0.2em] font-medium px-6 py-4 hover:bg-ivory transition-colors duration-300"
                    >
                      Schedule a Viewing
                    </a>
                  </div>
                </Reveal>
              )}
              <Reveal delay={90}>
                <div className="bg-cream p-8">
                  <h4 className="font-display text-2xl font-semibold text-evergreen">Private showings</h4>
                  <p className="mt-3 text-[14px] leading-relaxed text-taupe font-light">
                    Showings are by appointment only, seven days a week, with the listing agent present. Proof of
                    funds or lender pre-approval is requested before the door opens.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* similar */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe">
          <Reveal>
            <SectionHead
              kicker="Keep Looking"
              title="Residences you may also like"
              align="center"
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {similar.map((p, i) => (
              <PropertyCard key={p.slug} property={p} index={i} />
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <a
              href={routeToPath({ name: "properties" })}
              onClick={(e) => {
                e.preventDefault();
                navigate(routeToPath({ name: "properties" }));
              }}
              className="inline-flex items-center gap-2 border border-evergreen text-evergreen text-[13px] uppercase tracking-[0.2em] font-medium px-9 py-4 hover:bg-evergreen hover:text-ivory transition-colors duration-300"
            >
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
