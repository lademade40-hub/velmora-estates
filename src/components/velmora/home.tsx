"use client";

import { useState } from "react";
import {
  AGENTS,
  FAQS,
  NEIGHBORHOODS,
  PROPERTIES,
  SERVICES,
  STATS,
  TESTIMONIALS,
} from "@/lib/data";
import { navigate, routeToPath } from "@/lib/router";
import { Reveal } from "./chrome";
import { PropertyCard, SectionHead } from "./shared";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Quote, Star } from "lucide-react";

/* ================= HERO ================= */

function HeroSearch() {
  const [location, setLocation] = useState("Any location");
  const [type, setType] = useState("Any type");
  const [price, setPrice] = useState("Any price");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(routeToPath({ name: "properties" }));
  };

  const selectCls =
    "w-full bg-transparent text-ink text-[14px] font-light outline-none cursor-pointer appearance-none pr-6";

  return (
    <form
      onSubmit={submit}
      className="bg-card shadow-[0_32px_64px_-32px_rgba(10,32,25,0.45)] border border-border/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      aria-label="Property search"
    >
      {[
        { label: "Location", value: location, set: setLocation, opts: ["Any location", ...NEIGHBORHOODS] },
        { label: "Property type", value: type, set: setType, opts: ["Any type", "Single Family", "Villa", "Estate", "Penthouse"] },
        { label: "Price range", value: price, set: setPrice, opts: ["Any price", "Up to $10M", "$10M to $20M", "$20M and above"] },
      ].map((f) => (
        <label key={f.label} className="relative px-6 py-5 border-b lg:border-b-0 lg:border-r border-border/60 block">
          <span className="block text-[11px] uppercase tracking-[0.22em] text-taupe font-medium mb-1.5">{f.label}</span>
          <select value={f.value} onChange={(e) => f.set(e.target.value)} className={selectCls} aria-label={f.label}>
            {f.opts.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-brass absolute right-6 bottom-6 pointer-events-none" />
        </label>
      ))}
      <button
        type="submit"
        className="bg-evergreen text-ivory text-[13px] uppercase tracking-[0.2em] font-medium px-6 py-6 hover:bg-brass hover:text-evergreen-deep transition-colors duration-300 flex items-center justify-center gap-2"
      >
        Search Homes
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="relative min-h-[86vh] flex items-center overflow-hidden bg-evergreen-deep">
        <img
          src="/images/hero.jpg"
          alt="Hillside modern estate at dusk"
          className="absolute inset-0 w-full h-full object-cover opacity-80 hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-evergreen-deep/70 via-evergreen-deep/35 to-evergreen-deep/85" />
        <div className="relative container-luxe text-center pt-24 pb-40">
          <p className="kicker-light fade-up">Private brokerage · Los Angeles · Est. 2013</p>
          <h1 className="font-display text-ivory font-medium leading-[1.05] mt-6 text-[42px] md:text-7xl lg:text-[86px] text-balance-luxe fade-up fade-up-1">
            Homes worth
            <span className="italic text-brass-light"> the drive </span>
            up the hill
          </h1>
          <p className="text-ivory/75 text-[17px] md:text-lg font-light max-w-2xl mx-auto mt-7 leading-relaxed fade-up fade-up-2">
            Velmora represents a short list of exceptional properties each year. Bel Air to Paradise Cove,
            with a client list that expects results and a firm that prefers to let the homes do the talking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 fade-up fade-up-3">
            <a
              href={routeToPath({ name: "properties" })}
              onClick={(e) => {
                e.preventDefault();
                navigate(routeToPath({ name: "properties" }));
              }}
              className="bg-brass text-evergreen-deep text-[13px] uppercase tracking-[0.2em] font-medium px-9 py-4 hover:bg-ivory transition-colors duration-300"
            >
              Browse Properties
            </a>
            <a
              href={routeToPath({ name: "contact" })}
              onClick={(e) => {
                e.preventDefault();
                navigate(routeToPath({ name: "contact" }));
              }}
              className="border border-ivory/40 text-ivory text-[13px] uppercase tracking-[0.2em] font-medium px-9 py-4 hover:border-brass hover:text-brass-light transition-colors duration-300"
            >
              Speak With an Advisor
            </a>
          </div>
        </div>
      </div>
      <div className="container-luxe relative -mt-20 z-10">
        <div className="fade-up fade-up-4">
          <HeroSearch />
        </div>
      </div>
    </section>
  );
}

/* ================= STATS ================= */

function Stats() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-luxe grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="text-center relative">
            {i > 0 && (
              <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-border" />
            )}
            <p className="font-display text-5xl md:text-6xl font-semibold text-evergreen">{s.value}</p>
            <p className="mt-2 text-[13px] uppercase tracking-[0.22em] text-taupe font-medium">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ================= ABOUT PREVIEW ================= */

function AboutPreview() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-luxe grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] max-w-[520px] mx-auto lg:mx-0">
            <img src="/images/home-about.jpg" alt="Elegant living room in a Velmora listing" className="w-full h-full object-cover" />
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 hidden md:block">
              <div className="bg-evergreen text-ivory px-8 py-7">
                <p className="font-display text-4xl font-semibold text-brass-light">12</p>
                <p className="text-[12px] uppercase tracking-[0.2em] text-ivory/70 mt-1">Years of quiet wins</p>
              </div>
            </div>
            <div className="absolute inset-0 border border-brass/50 translate-x-5 translate-y-5 -z-10 hidden md:block" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="kicker mb-4">The Firm</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.12] text-evergreen text-balance-luxe">
              A small senior team for people who take their homes seriously
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-7 text-[16px] leading-relaxed text-taupe font-light">
              Velmora began in 2013 at a kitchen table in Beverlywood, with two phones, one listing, and a simple
              frustration. The best homes in Los Angeles rarely reach the open market, and the buyers most ready
              for them were tired of being sold to.
            </p>
            <p className="mt-5 text-[16px] leading-relaxed text-taupe font-light">
              So we built the firm we wished existed. Four senior agents, no junior handoffs, and a rule that
              never bends. The person who wins your business does the work.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="mt-8 space-y-3.5">
              {[
                "Off-market access built over twelve years of relationships",
                "One point of contact from first call to close of escrow",
                "Average list to sale ratio of 98 percent, year after year",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink/85 font-light">
                  <Check className="w-5 h-5 text-brass-dark mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-6 mt-10">
              <a
                href={routeToPath({ name: "about" })}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(routeToPath({ name: "about" }));
                }}
                className="inline-flex items-center gap-2 bg-evergreen text-ivory text-[13px] uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-brass hover:text-evergreen-deep transition-colors duration-300"
              >
                Our Story
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={routeToPath({ name: "agents" })}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(routeToPath({ name: "agents" }));
                }}
                className="text-[13px] uppercase tracking-[0.2em] font-medium text-evergreen hover:text-brass-dark transition-colors inline-flex items-center gap-1.5"
              >
                Meet the Team
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURED PROPERTIES ================= */

function FeaturedProperties() {
  const featured = PROPERTIES.filter((p) => p.featured);
  return (
    <section className="py-20 md:py-28">
      <div className="container-luxe">
        <Reveal>
          <SectionHead
            kicker="Current Portfolio"
            title="Featured residences"
            lead="A selection from the current book. Each one visited, vetted, and known personally by the agent whose name is on it."
          />
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p, i) => (
            <PropertyCard key={p.slug} property={p} index={i} />
          ))}
        </div>
        <Reveal className="text-center mt-14">
          <a
            href={routeToPath({ name: "properties" })}
            onClick={(e) => {
              e.preventDefault();
              navigate(routeToPath({ name: "properties" }));
            }}
            className="inline-flex items-center gap-2 border border-evergreen text-evergreen text-[13px] uppercase tracking-[0.2em] font-medium px-9 py-4 hover:bg-evergreen hover:text-ivory transition-colors duration-300"
          >
            View All {PROPERTIES.length} Listings
            <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */

function ServicesStrip() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-luxe">
        <Reveal>
          <SectionHead
            kicker="What We Do"
            title="Counsel for every chapter of ownership"
            lead="Six practices, one standard. Whatever the brief, a senior agent handles it personally."
          />
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/70 border border-border/70">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 80}>
              <a
                href={routeToPath({ name: "services" })}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(routeToPath({ name: "services" }));
                }}
                className="group block bg-cream hover:bg-card transition-colors duration-500 h-full p-8 md:p-10"
              >
                <span className="font-display text-4xl font-medium text-brass">{s.index}</span>
                <h3 className="font-display text-2xl font-semibold text-evergreen mt-4 group-hover:text-brass-dark transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-taupe font-light">{s.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-medium text-brass-dark">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= NEIGHBORHOODS ================= */

function Neighborhoods() {
  return (
    <section className="relative py-20 md:py-28 bg-evergreen-deep overflow-hidden">
      <img src="/images/cta-dark.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-evergreen-deep via-evergreen-deep/80 to-evergreen-deep/60" />
      <div className="relative container-luxe grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <p className="kicker-light mb-4">Territory</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.12] text-ivory text-balance-luxe">
              From the canyon to the coast, and every gate in between
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ivory/65 font-light max-w-xl">
              We keep our territory deliberately small. Eight neighborhoods, walked and watched, where we know
              the off-market chatter before the appraisers do. If it trades quietly, we usually hear first.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-9 flex flex-wrap gap-3">
              {NEIGHBORHOODS.map((n) => (
                <span
                  key={n}
                  className="border border-ivory/20 text-ivory/80 text-[13px] font-light px-4 py-2.5 hover:border-brass hover:text-brass-light transition-colors cursor-default"
                >
                  {n}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="relative hidden lg:block">
          <div className="relative aspect-[4/3] max-w-[520px] ml-auto">
            <img src="/images/services-side.jpg" alt="Terrace lounge at a Velmora listing" className="w-full h-full object-cover" />
            <div className="absolute inset-0 border border-brass/40 -translate-x-5 translate-y-5 -z-10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= AGENTS PREVIEW ================= */

function AgentsPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-luxe">
        <Reveal>
          <SectionHead
            kicker="The Team"
            title="Four agents. Zero handoffs."
            lead="Every advisor here has at least a decade in the field. You will never be handed to the new hire."
          />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {AGENTS.map((a, i) => (
            <Reveal key={a.id} delay={i * 90}>
              <a
                href={routeToPath({ name: "agents" })}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(routeToPath({ name: "agents" }));
                }}
                className="group block zoom-img"
                aria-label={`Meet ${a.name}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={a.image} alt={a.name} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-evergreen-deep/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 inset-x-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-brass-light text-[12px] uppercase tracking-[0.2em] font-medium">{a.role}</p>
                    <p className="text-ivory font-light text-[14px] mt-1">{a.sales} in career sales</p>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold text-evergreen mt-5 group-hover:text-brass-dark transition-colors">
                  {a.name}
                </h3>
                <p className="text-[13px] uppercase tracking-[0.16em] text-taupe font-medium mt-1">{a.role}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= TESTIMONIALS ================= */

function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-luxe">
        <Reveal>
          <SectionHead kicker="Client Words" title="Better than anything we could say" />
        </Reveal>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center relative">
            <Quote className="w-10 h-10 text-brass/50 mx-auto mb-8" />
            <blockquote className="font-display text-2xl md:text-[32px] leading-snug text-evergreen font-medium italic min-h-[180px] md:min-h-[160px]">
              {t.quote}
            </blockquote>
            <div className="flex items-center justify-center gap-1.5 mt-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brass text-brass" />
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-brass/40" />
              <div className="text-left">
                <p className="text-evergreen font-medium text-[15px]">{t.name}</p>
                <p className="text-taupe text-[13px] font-light">{t.detail}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-9">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-[3px] transition-all duration-300 ${
                    i === active ? "w-10 bg-brass" : "w-5 bg-sand hover:bg-brass/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28">
      <div className="container-luxe grid lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <Reveal>
            <p className="kicker mb-4">Common Questions</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.12] text-evergreen text-balance-luxe">
              Asked often, answered straight
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-taupe font-light">
              If your question is not here, call the office. A person answers, usually Diana or Marcus, and
              nobody will ask you to press one.
            </p>
            <a
              href={routeToPath({ name: "contact" })}
              onClick={(e) => {
                e.preventDefault();
                navigate(routeToPath({ name: "contact" }));
              }}
              className="mt-8 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] font-medium text-brass-dark hover:text-evergreen transition-colors"
            >
              Contact the Office
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
        <div className="lg:col-span-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.question} delay={i * 60}>
              <div className="border-b border-border">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-display text-xl md:text-2xl font-semibold text-evergreen group-hover:text-brass-dark transition-colors">
                    {f.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brass-dark shrink-0 transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open === i ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-[15px] leading-relaxed text-taupe font-light pr-10">{f.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CTA BAND ================= */

export function CtaBand() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-evergreen-deep">
      <img src="/images/cta-dark.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-evergreen-deep/70 to-evergreen-deep/90" />
      <div className="relative container-luxe text-center">
        <Reveal>
          <p className="kicker-light mb-4">Private Consultation</p>
          <h2 className="font-display text-3xl md:text-6xl font-medium leading-[1.1] text-ivory max-w-3xl mx-auto text-balance-luxe">
            Tell us where you want to wake up next year
          </h2>
          <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed text-ivory/65 font-light max-w-xl mx-auto">
            One conversation, no obligation. We will tell you what your home is worth, what is quietly
            available, and whether now is even the right time. Call it advice with a handshake.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href={routeToPath({ name: "contact" })}
              onClick={(e) => {
                e.preventDefault();
                navigate(routeToPath({ name: "contact" }));
              }}
              className="bg-brass text-evergreen-deep text-[13px] uppercase tracking-[0.2em] font-medium px-10 py-4 hover:bg-ivory transition-colors duration-300"
            >
              Book a Consultation
            </a>
            <a
              href="tel:+13105550148"
              className="border border-ivory/40 text-ivory text-[13px] uppercase tracking-[0.2em] font-medium px-10 py-4 hover:border-brass hover:text-brass-light transition-colors duration-300"
            >
              Call (310) 555 0148
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= HOME ================= */

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <FeaturedProperties />
      <ServicesStrip />
      <Neighborhoods />
      <AgentsPreview />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
