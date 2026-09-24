"use client";

import { useMemo, useState } from "react";
import {
  AGENTS,
  BRAND,
  BRAND_VALUES,
  PROPERTIES,
  SERVICES,
  STATS,
  TIMELINE,
  PROPERTY_TYPES,
  PRICE_BANDS,
  type Property,
} from "@/lib/data";
import { navigate, routeToPath } from "@/lib/router";
import { PageBanner, Reveal } from "./chrome";
import { PropertyCard, SectionHead } from "./shared";
import { CtaBand } from "./home";
import {
  ArrowRight,
  Award,
  Bath,
  BedDouble,
  Check,
  ChevronDown,
  Clock,
  Home as HomeIcon,
  Mail,
  MapPin,
  Phone,
  Quote,
  Ruler,
  Search,
  Send,
  Star,
  TrendingUp,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/* ================= ABOUT ================= */

export function AboutPage() {
  return (
    <>
      <PageBanner
        kicker="Since 2013"
        title="The firm behind the quiet sales"
        image="/images/banner-properties.jpg"
      />

      <section className="py-20 md:py-28">
        <div className="container-luxe grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <Reveal>
              <p className="kicker mb-4">Our Story</p>
              <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.12] text-evergreen text-balance-luxe">
                Built out of frustration, kept alive by referrals
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 text-[16px] leading-relaxed text-taupe font-light">
                Velmora started at a kitchen table in Beverlywood in 2013. Diana Whitmore had spent eight years
                at a large brokerage watching good clients get passed to junior agents, and she left with two
                phones and a single listing on Elm Drive. That year the firm closed eleven homes. Every one came
                from someone who had heard how she worked.
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-taupe font-light">
                Twelve years later the model has not changed. Four senior agents. A hard rule that the person who
                wins the listing works the listing. A client list that reads like a private school directory, kept
                small on purpose. We could grow faster. We have decided not to.
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-taupe font-light">
                What has grown is the ledger. Off-market homes trade through our book every month, and the
                relationships behind them took a decade to build. That part, more than anything, is why people
                call us.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/5] max-w-[520px] mx-auto lg:ml-auto">
              <img src="/images/about-story.jpg" alt="Glass residence surrounded by trees" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border border-brass/50 -translate-x-5 translate-y-5 -z-10 hidden md:block" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container-luxe">
          <Reveal>
            <SectionHead
              kicker="How We Work"
              title="Three rules we do not bend"
              lead="They sound simple. Very few firms in this town actually run on them."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {BRAND_VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="bg-ivory p-9 h-full border-b-2 border-brass hover-lift">
                  <span className="font-display text-4xl font-medium text-brass">0{i + 1}</span>
                  <h3 className="font-display text-2xl font-semibold text-evergreen mt-4">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-taupe font-light">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <Reveal>
            <SectionHead kicker="The Journey" title="Twelve years, four agents, one ledger" />
          </Reveal>
          <div className="max-w-3xl mx-auto">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 70}>
                <div className="relative pl-28 pb-12 last:pb-0 group">
                  {i < TIMELINE.length - 1 && (
                    <span className="absolute left-[72px] top-16 bottom-0 w-px bg-border" />
                  )}
                  <span className="absolute left-0 top-1 w-14 h-14 flex items-center justify-center border border-brass/60 font-display text-lg font-semibold text-brass-dark group-hover:bg-evergreen group-hover:text-brass-light group-hover:border-evergreen transition-colors duration-300">
                    {t.year}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-evergreen">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-taupe font-light">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-evergreen-deep py-20 md:py-24">
        <div className="container-luxe grid grid-cols-2 lg:grid-cols-4 gap-y-12">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="font-display text-5xl md:text-6xl font-semibold text-brass-light">{s.value}</p>
              <p className="mt-2 text-[13px] uppercase tracking-[0.22em] text-ivory/60 font-medium">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-luxe grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] max-w-[540px] mx-auto lg:mr-auto">
              <img src="/images/about-craft.jpg" alt="Pool terrace at dusk" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border border-brass/50 translate-x-5 translate-y-5 -z-10 hidden md:block" />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="kicker mb-4">The Craft</p>
              <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.12] text-evergreen text-balance-luxe">
                Preparation you can feel the moment you walk in
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 text-[16px] leading-relaxed text-taupe font-light">
                A Velmora listing is staged, photographed, filmed, and written by people we would hire for our own
                homes. Before a buyer ever crosses the threshold, the house has been lit, styled, and scheduled
                into a preview list of several hundred qualified names.
              </p>
              <ul className="mt-7 space-y-3.5">
                {[
                  "Editorial photography and film on every listing",
                  "Private preview period before the portals ever see it",
                  "Broker and architect walkthroughs that surface real value",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink/85 font-light">
                    <Check className="w-5 h-5 text-brass-dark mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={routeToPath({ name: "properties" })}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(routeToPath({ name: "properties" }));
                }}
                className="mt-9 inline-flex items-center gap-2 bg-evergreen text-ivory text-[13px] uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-brass hover:text-evergreen-deep transition-colors duration-300"
              >
                See the Results
                <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ================= PROPERTIES ================= */

function PropertyFilters({
  query,
  setQuery,
  type,
  setType,
  band,
  setBand,
  beds,
  setBeds,
}: {
  query: string;
  setQuery: (v: string) => void;
  type: string;
  setType: (v: string) => void;
  band: string;
  setBand: (v: string) => void;
  beds: string;
  setBeds: (v: string) => void;
}) {
  const selectCls =
    "w-full bg-transparent text-ink text-[14px] font-light outline-none cursor-pointer appearance-none pr-6";
  const fields = [
    { label: "Property type", value: type, set: setType, opts: ["Any type", ...PROPERTY_TYPES] },
    { label: "Price range", value: band, set: setBand, opts: PRICE_BANDS.map((b) => b.label) },
    { label: "Bedrooms", value: beds, set: setBeds, opts: ["Any", "3+", "4+", "5+", "6+"] },
  ];
  return (
    <div className="bg-card border border-border/70 shadow-[0_24px_48px_-32px_rgba(10,32,25,0.35)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <label className="relative px-6 py-5 border-b md:border-b lg:border-b-0 lg:border-r border-border/60 block lg:col-span-2">
          <span className="block text-[11px] uppercase tracking-[0.22em] text-taupe font-medium mb-1.5">Search</span>
          <Search className="w-4 h-4 text-brass absolute left-6 bottom-6 pointer-events-none" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Neighborhood, name, keyword"
            className="w-full bg-transparent text-ink text-[14px] font-light outline-none pl-6 placeholder:text-taupe/60"
            aria-label="Search properties"
          />
        </label>
        {fields.map((f) => (
          <label key={f.label} className="relative px-6 py-5 border-b md:border-b lg:border-b-0 lg:border-r border-border/60 block">
            <span className="block text-[11px] uppercase tracking-[0.22em] text-taupe font-medium mb-1.5">{f.label}</span>
            <select value={f.value} onChange={(e) => f.set(e.target.value)} className={selectCls} aria-label={f.label}>
              {f.opts.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-brass absolute right-6 bottom-6 pointer-events-none" />
          </label>
        ))}
        <div className="flex items-center justify-center px-6 py-4 bg-evergreen text-ivory text-[13px] uppercase tracking-[0.2em] font-medium">
          {PROPERTIES.length} Results
        </div>
      </div>
    </div>
  );
}

export function PropertiesPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Any type");
  const [band, setBand] = useState("Any price");
  const [beds, setBeds] = useState("Any");

  const filtered = useMemo(() => {
    const selected = PRICE_BANDS.find((b) => b.label === band) || PRICE_BANDS[0];
    const minBeds = beds === "Any" ? 0 : parseInt(beds.replace("+", ""), 10);
    const q = query.trim().toLowerCase();
    return PROPERTIES.filter((p) => {
      if (type !== "Any type" && p.type !== type) return false;
      if (p.price < selected.min || p.price > selected.max) return false;
      if (p.beds < minBeds) return false;
      if (q && !(`${p.title} ${p.location} ${p.neighborhood} ${p.tagline}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [query, type, band, beds]);

  return (
    <>
      <PageBanner
        kicker="Current Portfolio"
        title="Residences currently represented"
        image="/images/banner-properties.jpg"
      />

      <section className="py-16 md:py-20">
        <div className="container-luxe">
          <Reveal>
            <PropertyFilters
              query={query}
              setQuery={setQuery}
              type={type}
              setType={setType}
              band={band}
              setBand={setBand}
              beds={beds}
              setBeds={setBeds}
            />
          </Reveal>
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <HomeIcon className="w-10 h-10 text-sand mx-auto mb-5" />
              <p className="font-display text-2xl text-evergreen font-semibold">No matches in the current book</p>
              <p className="text-taupe font-light mt-2 max-w-md mx-auto text-[15px] leading-relaxed">
                Try widening the price band or clearing the keyword. Several off-market homes never appear on
                this page, so it is worth a call either way.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {filtered.map((p, i) => (
                <PropertyCard key={p.slug} property={p} index={i} />
              ))}
            </div>
          )}
          <Reveal className="mt-16 bg-cream p-8 md:p-10 text-center">
            <p className="font-display text-2xl md:text-3xl font-medium text-evergreen text-balance-luxe">
              Much of what we trade never reaches this page
            </p>
            <p className="text-taupe font-light mt-3 max-w-2xl mx-auto text-[15px] leading-relaxed">
              Owners preparing to sell privately give us first look. Tell us what you are hunting and we will
              open the quiet ledger for you.
            </p>
            <a
              href={routeToPath({ name: "contact" })}
              onClick={(e) => {
                e.preventDefault();
                navigate(routeToPath({ name: "contact" }));
              }}
              className="mt-6 inline-flex items-center gap-2 bg-evergreen text-ivory text-[13px] uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-brass hover:text-evergreen-deep transition-colors duration-300"
            >
              Request Private Access
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ================= AGENTS ================= */

export function AgentsPage() {
  return (
    <>
      <PageBanner
        kicker="The Team"
        title="Advisors with a decade or two on the streets"
        image="/images/banner-agents.jpg"
      />

      <section className="py-20 md:py-28">
        <div className="container-luxe space-y-20">
          {AGENTS.map((a, i) => (
            <Reveal key={a.id}>
              <div className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center`}>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] max-w-[440px] mx-auto zoom-img">
                    <img src={a.image} alt={a.name} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 border border-brass/50 -translate-x-4 translate-y-4 -z-10 hidden md:block" />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="kicker mb-3">{a.role}</p>
                  <h2 className="font-display text-3xl md:text-5xl font-medium text-evergreen">{a.name}</h2>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4 text-[13px] uppercase tracking-[0.16em] text-taupe font-medium">
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brass" /> {a.years} years in the field</span>
                    <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-brass" /> {a.sales} career sales</span>
                    <span className="flex items-center gap-2"><Award className="w-4 h-4 text-brass" /> {a.transactions} transactions</span>
                  </div>
                  {a.bio.map((p, j) => (
                    <p key={j} className="mt-5 text-[16px] leading-relaxed text-taupe font-light">
                      {p}
                    </p>
                  ))}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {a.specialties.map((s) => (
                      <span key={s} className="bg-ivory border border-sand text-evergreen text-[12px] uppercase tracking-[0.14em] font-medium px-4 py-2">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-5 text-[14px] font-light">
                    <a href={`tel:${a.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 text-evergreen hover:text-brass-dark transition-colors">
                      <Phone className="w-4 h-4 text-brass" /> {a.phone}
                    </a>
                    <a href={`mailto:${a.email}`} className="flex items-center gap-2 text-evergreen hover:text-brass-dark transition-colors">
                      <Mail className="w-4 h-4 text-brass" /> {a.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ================= SERVICES ================= */

export function ServicesPage() {
  return (
    <>
      <PageBanner
        kicker="What We Do"
        title="Six practices, one standard"
        image="/images/banner-services.jpg"
      />

      <section className="py-20 md:py-28">
        <div className="container-luxe grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <Reveal>
              <p className="kicker mb-4">The Approach</p>
              <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.12] text-evergreen text-balance-luxe">
                Advice first. Commissions have a way of following.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 text-[16px] leading-relaxed text-taupe font-light">
                Every service below is delivered by a named senior agent, start to finish. We do not quote a
                strategy in the pitch meeting and hand you to a coordinator on Monday. It costs us volume and
                earns us a client list that barely turns over.
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-taupe font-light">
                If something is not in our wheelhouse, we will say so and introduce you to the specialist we
                would use ourselves. We sleep fine with that arrangement.
              </p>
            </Reveal>
            <Reveal delay={160} className="relative hidden lg:block mt-8">
              <div className="relative aspect-[16/10] max-w-[540px]">
                <img src="/images/services-side.jpg" alt="Covered terrace and lounge at a represented home" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border border-brass/50 -translate-x-5 translate-y-5 -z-10" />
              </div>
            </Reveal>
          </div>
          <div className="space-y-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 70}>
                <div className="group bg-card border border-border/70 p-8 hover:border-brass/60 transition-colors duration-300">
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-3xl font-medium text-brass">{s.index}</span>
                    <h3 className="font-display text-2xl font-semibold text-evergreen group-hover:text-brass-dark transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-taupe font-light">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container-luxe">
          <Reveal>
            <SectionHead
              kicker="Why Clients Stay"
              title="The parts of the job you do not see on listing day"
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Quote,
                title: "Straight numbers",
                text: "Pricing conversations here are boring on purpose. We show comps, we show absorption, and we recommend the number the data supports.",
              },
              {
                icon: Star,
                title: "Vetted vendors",
                text: "Stagers, inspectors, landscape architects, escrow officers. We keep a short list of people who answer their phones and stand behind their work.",
              },
              {
                icon: Check,
                title: "Post-close care",
                text: "We do not disappear at recording. House managers, contractor introductions, and a repair contact list come with the keys.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="bg-ivory p-9 h-full hover-lift">
                  <c.icon className="w-8 h-8 text-brass" />
                  <h3 className="font-display text-2xl font-semibold text-evergreen mt-5">{c.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-taupe font-light">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ================= CONTACT ================= */

function ContactForm() {
  const { toast } = useToast();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "Buying", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "A couple of fields are missing", description: "Please add your name, email, and a short note so we know where to start." });
      return;
    }
    setSent(true);
    toast({
      title: "Message received",
      description: `Thank you, ${form.name.split(" ")[0]}. Diana or Marcus will reply within one business day.`,
    });
  };

  const inputCls =
    "w-full bg-transparent border border-input px-4 py-3.5 text-[15px] font-light text-ink outline-none focus:border-brass transition-colors placeholder:text-taupe/60";

  if (sent) {
    return (
      <div className="bg-card border border-border/70 p-10 text-center h-full flex flex-col items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-evergreen flex items-center justify-center">
          <Check className="w-7 h-7 text-brass-light" />
        </span>
        <h3 className="font-display text-3xl font-semibold text-evergreen mt-6">Consider it handled</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-taupe font-light max-w-sm">
          Your note is in the inbox. A senior agent will reply within one business day, usually sooner. If it is
          urgent, the office line rings straight through.
        </p>
        <a
          href={BRAND.phoneHref}
          className="mt-7 inline-flex items-center gap-2 border border-evergreen text-evergreen text-[13px] uppercase tracking-[0.2em] font-medium px-8 py-3.5 hover:bg-evergreen hover:text-ivory transition-colors"
        >
          <Phone className="w-4 h-4" /> {BRAND.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-card border border-border/70 p-8 md:p-10">
      <h3 className="font-display text-3xl font-semibold text-evergreen">Send a note</h3>
      <p className="mt-2 text-[14px] text-taupe font-light">Fields marked with a star are required.</p>
      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        <div>
          <label htmlFor="c-name" className="block text-[11px] uppercase tracking-[0.22em] text-taupe font-medium mb-2">Full name *</label>
          <input id="c-name" value={form.name} onChange={set("name")} className={inputCls} placeholder="Jordan Avery" />
        </div>
        <div>
          <label htmlFor="c-email" className="block text-[11px] uppercase tracking-[0.22em] text-taupe font-medium mb-2">Email *</label>
          <input id="c-email" type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="c-phone" className="block text-[11px] uppercase tracking-[0.22em] text-taupe font-medium mb-2">Phone</label>
          <input id="c-phone" type="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="(310) 555 0100" />
        </div>
        <div>
          <label htmlFor="c-interest" className="block text-[11px] uppercase tracking-[0.22em] text-taupe font-medium mb-2">I am interested in</label>
          <select id="c-interest" value={form.interest} onChange={set("interest")} className={`${inputCls} cursor-pointer appearance-none`}>
            {["Buying", "Selling", "Off-market homes", "Investment", "Property care", "Something else"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-msg" className="block text-[11px] uppercase tracking-[0.22em] text-taupe font-medium mb-2">Message *</label>
          <textarea
            id="c-msg"
            value={form.message}
            onChange={set("message")}
            rows={5}
            className={`${inputCls} resize-none`}
            placeholder="Tell us about the home you are looking for, or the one you are thinking of selling."
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-evergreen text-ivory text-[13px] uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-brass hover:text-evergreen-deep transition-colors duration-300"
      >
        Send Message
        <Send className="w-4 h-4" />
      </button>
      <p className="mt-4 text-[12px] text-taupe/80 font-light text-center">
        Your details stay between us. No lists, no drip campaigns, no resale. Ever.
      </p>
    </form>
  );
}

export function ContactPage() {
  return (
    <>
      <PageBanner
        kicker="Get in Touch"
        title="One conversation, zero pressure"
        image="/images/banner-contact.jpg"
      />

      <section className="py-20 md:py-24">
        <div className="container-luxe grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2 space-y-5">
            <Reveal>
              <div className="bg-evergreen text-ivory p-8">
                <h3 className="font-display text-2xl font-semibold text-brass-light">Visit the office</h3>
                <div className="mt-6 space-y-5 text-[15px] font-light">
                  <p className="flex gap-3"><MapPin className="w-5 h-5 text-brass shrink-0 mt-0.5" />{BRAND.address}</p>
                  <p className="flex gap-3 items-center"><Phone className="w-5 h-5 text-brass shrink-0" /><a href={BRAND.phoneHref} className="hover:text-brass-light transition-colors">{BRAND.phone}</a></p>
                  <p className="flex gap-3 items-center"><Mail className="w-5 h-5 text-brass shrink-0" /><a href={`mailto:${BRAND.email}`} className="hover:text-brass-light transition-colors">{BRAND.email}</a></p>
                  <p className="flex gap-3"><Clock className="w-5 h-5 text-brass shrink-0 mt-0.5" />{BRAND.hours}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="bg-cream p-8">
                <h3 className="font-display text-2xl font-semibold text-evergreen">Thinking of selling?</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-taupe font-light">
                  Ask for a valuation with teeth. We will walk the property, pull the comps, and give you a
                  number with a plan behind it. No obligation, no sticker on the lawn unless you say so.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="bg-ivory border border-border/70 p-8">
                <h3 className="font-display text-2xl font-semibold text-evergreen">Prefer to browse first?</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-taupe font-light">
                  The current portfolio is open to everyone. When something deserves a closer look, the listing
                  agent's direct line is on every page.
                </p>
                <a
                  href={routeToPath({ name: "properties" })}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(routeToPath({ name: "properties" }));
                  }}
                  className="mt-5 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] font-medium text-brass-dark hover:text-evergreen transition-colors"
                >
                  View Properties <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-3">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe">
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden border border-border/70">
              <img src="/images/prop-casa-del-mar-4.jpg" alt="Coastal terrace at one of the neighborhoods we serve" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-evergreen-deep/30 flex items-center justify-center">
                <p className="font-display text-2xl md:text-4xl font-medium text-ivory italic text-center px-6">
                  Serving Greater Los Angeles, from Hancock Park to Paradise Cove
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
