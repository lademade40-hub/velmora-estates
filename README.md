# Velmora Estates

A luxury real estate website for Velmora Estates, a private brokerage representing
exceptional homes across Los Angeles. The site covers the full journey of a boutique
firm: an editorial homepage, a filterable portfolio of nine residences, individual
listing pages, the senior team, the firm's services, and a contact experience built
around a real conversation rather than a form dump.

Built with Next.js 16 (App Router), Tailwind CSS 4, and a small amount of custom
design work. No database, no external services, no CMS. Everything renders as
static pages, which keeps hosting effectively free and fast anywhere.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Homepage: hero with property search, stats, firm overview, featured listings, services, neighborhoods, agents, testimonials, FAQ |
| `/about` | The firm's story, working principles, and twelve year timeline |
| `/properties` | The current portfolio with live filtering by type, price band, bedrooms, and keyword |
| `/properties/[slug]` | Listing detail: gallery, specs, description, features, listing agent, similar homes |
| `/agents` | The four senior advisors with bios and direct contact details |
| `/services` | The six practices, from seller representation to off-market placement |
| `/contact` | Contact form with validation, office details, and a note on private showings |

Every page ships its own title and meta description, listing pages generate their
metadata from the property data, and `sitemap.xml` is generated at build time.

## Tech

- Next.js 16 with the App Router. All pages prerender statically; listing pages use `generateStaticParams`.
- Tailwind CSS 4 with a small custom palette: evergreen `#0e2a20`, brass `#b99256`, ivory `#f6f3ec`.
- Cormorant Garamond for display type and Jost for body copy, both self hosted with `next/font/local` so nothing is requested from Google at runtime.
- A thin navigation bridge in `src/lib/router.tsx` keeps every link in the site going through the App Router's client transitions.

## Getting started

```bash
bun install
bun run dev
```

The site runs at `http://localhost:3000`.

For a production build:

```bash
bun run build
bun run start
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose Add New Project and import the repository. Next.js is detected automatically; there is nothing to configure.
3. Optionally set `NEXT_PUBLIC_SITE_URL` to your production domain so the sitemap and social previews use it.
4. Deploy. Every route is static, so builds take seconds and pages are served from the edge.

## Project structure

```
src/
  app/                  Routes, layout, metadata, sitemap, 404
  components/velmora/   The site itself: chrome, home, pages, detail, shared
  components/ui/        A few small primitives (toast, button helpers)
  lib/data.ts           All listings, agents, services, testimonials, FAQs
  lib/router.tsx        Navigation bridge over the Next.js App Router
  fonts/                Self hosted Cormorant Garamond and Jost woff2 files
public/images/          Photography used across the site
```

## A note on the footer

The footer carries the credit "Designed By Emnex AI", which links to
<https://emnexaif.space-z.ai/>. Please keep it in place when you fork or reuse
this project.
