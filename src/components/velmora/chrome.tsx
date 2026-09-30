"use client";

import { useEffect, useState } from "react";
import { BRAND, NEIGHBORHOODS } from "@/lib/data";
import { navigate, routeToPath, useRoute, type Route } from "@/lib/router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, Twitter, X } from "lucide-react";

/* ---------------- Logo ---------------- */

export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <a
      href={routeToPath({ name: "home" })}
      onClick={(e) => {
        e.preventDefault();
        navigate(routeToPath({ name: "home" }));
      }}
      className="flex items-center gap-3 shrink-0"
      aria-label="Velmora Estates home"
    >
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none" aria-hidden="true" className="shrink-0">
        <rect width="64" height="64" className={light ? "fill-ivory/0" : "fill-evergreen"} />
        <rect x="1" y="1" width="62" height="62" fill="none" className={light ? "stroke-ivory/40" : "stroke-brass"} strokeWidth="1.4" />
        <path d="M16 18 L32 46 L48 18" fill="none" stroke="#b99256" strokeWidth="4" strokeLinecap="square" />
        <rect x="24" y="10" width="16" height="2.5" fill="#b99256" />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-[26px] font-semibold tracking-[0.08em] ${light ? "text-ivory" : "text-evergreen"}`}>
            VELMORA
          </span>
          <span className={`text-[10px] uppercase font-medium ${light ? "text-ivory/60" : "text-taupe"}`} style={{ letterSpacing: "0.42em" }}>
            Estates
          </span>
        </span>
      )}
    </a>
  );
}

/* ---------------- Site frame (chrome around every page) ---------------- */

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const route = useRoute();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <Header route={route} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

/* ---------------- Reveal on scroll ---------------- */

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);

  return (
    <div ref={setRef} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------------- Top bar ---------------- */

export function TopBar() {
  return (
    <div className="bg-evergreen-deep text-ivory/80 hidden md:block">
      <div className="container-luxe flex items-center justify-between h-10 text-[13px] font-light">
        <div className="flex items-center gap-6">
          <a href={BRAND.phoneHref} className="flex items-center gap-2 hover:text-brass-light transition-colors">
            <Phone className="w-3.5 h-3.5 text-brass" />
            {BRAND.phone}
          </a>
          <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-brass-light transition-colors">
            <Mail className="w-3.5 h-3.5 text-brass" />
            {BRAND.email}
          </a>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-ivory/50 font-light">Est. {BRAND.founded} · Los Angeles</span>
          <div className="flex items-center gap-4 text-ivory/70">
            <a href="#/" aria-label="Instagram" onClick={(e) => e.preventDefault()} className="hover:text-brass-light transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#/" aria-label="Facebook" onClick={(e) => e.preventDefault()} className="hover:text-brass-light transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#/" aria-label="LinkedIn" onClick={(e) => e.preventDefault()} className="hover:text-brass-light transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#/" aria-label="Twitter" onClick={(e) => e.preventDefault()} className="hover:text-brass-light transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Header ---------------- */

const NAV: { label: string; route: Route }[] = [
  { label: "Home", route: { name: "home" } },
  { label: "About", route: { name: "about" } },
  { label: "Properties", route: { name: "properties" } },
  { label: "Agents", route: { name: "agents" } },
  { label: "Services", route: { name: "services" } },
  { label: "Contact", route: { name: "contact" } },
];

export function Header({ route }: { route: Route }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (r: Route) => {
    if (r.name === "properties" && route.name === "property") return true;
    return r.name === route.name;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(14,42,32,0.08)]" : "bg-ivory"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-[76px]">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={routeToPath(item.route)}
              onClick={(e) => {
                e.preventDefault();
                navigate(routeToPath(item.route));
              }}
              className={`relative text-[13px] uppercase font-medium tracking-[0.18em] transition-colors py-2 ${
                isActive(item.route) ? "text-brass-dark" : "text-evergreen hover:text-brass-dark"
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-brass transition-all duration-300 ${
                  isActive(item.route) ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href={routeToPath({ name: "contact" })}
            onClick={(e) => {
              e.preventDefault();
              navigate(routeToPath({ name: "contact" }));
            }}
            className="inline-flex items-center justify-center bg-evergreen text-ivory text-[13px] uppercase tracking-[0.18em] font-medium px-7 py-3.5 hover:bg-brass hover:text-evergreen-deep transition-colors duration-300"
          >
            Book a Consultation
          </a>
        </div>
        <button
          className="lg:hidden text-evergreen p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-ivory border-t border-sand">
          <nav className="container-luxe py-6 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={routeToPath(item.route)}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(routeToPath(item.route));
                  setOpen(false);
                }}
                className={`py-3 text-sm uppercase tracking-[0.18em] font-medium border-b border-sand/60 last:border-0 ${
                  isActive(item.route) ? "text-brass-dark" : "text-evergreen"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={routeToPath({ name: "contact" })}
              onClick={(e) => {
                e.preventDefault();
                navigate(routeToPath({ name: "contact" }));
                setOpen(false);
              }}
              className="mt-4 inline-flex items-center justify-center bg-evergreen text-ivory text-[13px] uppercase tracking-[0.18em] font-medium px-7 py-4"
            >
              Book a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Page banner (inner pages) ---------------- */

export function PageBanner({ kicker, title, image }: { kicker: string; title: string; image: string }) {
  return (
    <section className="relative h-[46vh] min-h-[360px] overflow-hidden bg-evergreen-deep">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 hero-zoom" />
      <div className="absolute inset-0 bg-gradient-to-t from-evergreen-deep/95 via-evergreen-deep/40 to-evergreen-deep/30" />
      <div className="relative container-luxe h-full flex flex-col items-center justify-center text-center">
        <p className="kicker-light mb-4 fade-up">{kicker}</p>
        <h1 className="font-display text-4xl md:text-6xl font-medium text-ivory fade-up fade-up-1 text-balance-luxe">{title}</h1>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

export function Footer() {
  const year = new Date().getFullYear();

  const go = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="mt-auto bg-evergreen-deep text-ivory/75">
      <div className="container-luxe py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 text-[15px] font-light leading-relaxed text-ivory/60 max-w-sm">
              A private brokerage for exceptional homes across Los Angeles. Quiet counsel, sharp negotiation, and access you will not find on the portals.
            </p>
            <div className="mt-7 flex items-center gap-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Social link"
                  className="w-10 h-10 border border-ivory/15 flex items-center justify-center hover:border-brass hover:text-brass-light transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-ivory text-sm uppercase font-medium tracking-[0.22em] mb-6">Explore</h4>
            <ul className="space-y-3.5 text-[15px] font-light">
              <li><a href="/" onClick={go("/")} className="hover:text-brass-light transition-colors">Home</a></li>
              <li><a href="/about" onClick={go("/about")} className="hover:text-brass-light transition-colors">About the Firm</a></li>
              <li><a href="/properties" onClick={go("/properties")} className="hover:text-brass-light transition-colors">Properties</a></li>
              <li><a href="/agents" onClick={go("/agents")} className="hover:text-brass-light transition-colors">Our Agents</a></li>
              <li><a href="/services" onClick={go("/services")} className="hover:text-brass-light transition-colors">Services</a></li>
              <li><a href="/contact" onClick={go("/contact")} className="hover:text-brass-light transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-ivory text-sm uppercase font-medium tracking-[0.22em] mb-6">Neighborhoods</h4>
            <ul className="grid grid-cols-2 gap-3.5 text-[15px] font-light">
              {NEIGHBORHOODS.map((n) => (
                <li key={n}>
                  <a href="/properties" onClick={go("/properties")} className="hover:text-brass-light transition-colors">
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-ivory text-sm uppercase font-medium tracking-[0.22em] mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-[15px] font-light">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1 text-brass shrink-0" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-brass shrink-0" />
                <a href={BRAND.phoneHref} className="hover:text-brass-light transition-colors">{BRAND.phone}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-brass shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-brass-light transition-colors">{BRAND.email}</a>
              </li>
            </ul>
            <p className="mt-6 text-[13px] text-ivory/45 font-light">{BRAND.hours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] font-light text-ivory/50">
          <p>© {year} {BRAND.name}. All rights reserved. DRE #01994421.</p>
          <p>
            <span className="text-ivory/60">Designed and built with care. </span>
            <a
              href="https://emnexaif.space-z.ai/"
              className="text-ivory/60 hover:text-brass-light transition-colors"
            >
              Designed By Emnex AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
