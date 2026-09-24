export type Property = {
  slug: string;
  title: string;
  location: string;
  neighborhood: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  lot: string;
  year: number;
  type: "Single Family" | "Penthouse" | "Villa" | "Estate";
  status: "For Sale" | "New Listing" | "Open House";
  featured?: boolean;
  tagline: string;
  description: string[];
  features: string[];
  images: string[];
  agentId: string;
};

export type Agent = {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  years: number;
  sales: string;
  transactions: number;
  bio: string[];
  specialties: string[];
};

export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  image: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const BRAND = {
  name: "Velmora Estates",
  shortName: "Velmora",
  phone: "(310) 555 0148",
  phoneHref: "tel:+13105550148",
  email: "hello@velmoraestates.com",
  address: "9200 Sunset Boulevard, Suite 1140, West Hollywood, CA 90069",
  hours: "Monday to Friday, 9am to 6pm. Saturdays by appointment.",
  founded: 2013,
};

export const STATS = [
  { value: "$2.4B", label: "Closed since 2013" },
  { value: "640", label: "Homes sold" },
  { value: "98%", label: "List to sale ratio" },
  { value: "21", label: "Median days on market" },
];

export const NEIGHBORHOODS = [
  "Bel Air",
  "Beverly Hills",
  "Holmby Hills",
  "Malibu",
  "Pacific Palisades",
  "Hollywood Hills",
  "Hancock Park",
  "Manhattan Beach",
];

export const AGENTS: Agent[] = [
  {
    id: "diana",
    name: "Diana Whitmore",
    role: "Founder & Principal Broker",
    phone: "(310) 555 0121",
    email: "diana@velmoraestates.com",
    image: "/images/agent-diana.jpg",
    years: 19,
    sales: "$1.6B",
    transactions: 342,
    bio: [
      "Diana opened Velmora in 2013 after eight years at a national brokerage, where she watched too many clients get passed from agent to agent. Her answer was a firm with no junior handoffs and no volume quotas. Every client works with her directly, from the first walkthrough to the final signature.",
      "She is known around town for her poker face at the negotiating table and her habit of telling clients things they would rather not hear. It has cost her commissions. It has also earned her a client list that barely turns over.",
    ],
    specialties: ["Estate acquisitions", "Off-market sales", "Bel Air & Holmby Hills"],
  },
  {
    id: "marcus",
    name: "Marcus Bell",
    role: "Director of Sales",
    phone: "(310) 555 0176",
    email: "marcus@velmoraestates.com",
    image: "/images/agent-marcus.jpg",
    years: 14,
    sales: "$940M",
    transactions: 211,
    bio: [
      "Marcus came to real estate by way of residential architecture, and it shows. He can tell you which builder poured a foundation, and he is usually right. Buyers lean on him to catch what an inspection misses. Sellers lean on him to price architectural homes the market actually respects.",
      "He covers the Westside, with a soft spot for mid century and modern work. Off duty he restores a 1962 Stahl-adjacent post and beam in Mar Vista, slowly, with his own two hands.",
    ],
    specialties: ["Architectural homes", "New development", "Westside modern"],
  },
  {
    id: "sofia",
    name: "Sofia Reyes",
    role: "Senior Agent, Coastal & Westside",
    phone: "(310) 555 0134",
    email: "sofia@velmoraestates.com",
    image: "/images/agent-sofia.jpg",
    years: 11,
    sales: "$720M",
    transactions: 168,
    bio: [
      "Sofia grew up in Pacific Palisades and knows the coastal market the way locals do, which is to say personally. She has sold on nearly every street between the Palisades and Paradise Cove, and she will tell you exactly what the surf, the light, and the school run do to a price.",
      "Her clients tend to stay clients. Eleven years in, roughly eight out of ten of her transactions come from referrals or repeat buyers, a ratio she is quietly proud of.",
    ],
    specialties: ["Malibu & beach cities", "Buyer representation", "Relocation"],
  },
  {
    id: "james",
    name: "James Calloway",
    role: "Senior Agent, Estates & Development",
    phone: "(310) 555 0163",
    email: "james@velmoraestates.com",
    image: "/images/agent-james.jpg",
    years: 13,
    sales: "$810M",
    transactions: 187,
    bio: [
      "James works the space where private capital meets Los Angeles dirt. He advises families on estate assembly, represents developers on teardown and build decisions, and handles the kind of sales that never appear on the portals.",
      "Before real estate he spent five years in commercial banking, which means he reads a pro forma faster than most agents read a CMA. Sellers appreciate that. So do buyers with complicated entities and even more complicated timelines.",
    ],
    specialties: ["Land & development", "Trust & estate sales", "Investment advisory"],
  },
];

export const PROPERTIES: Property[] = [
  {
    slug: "the-wetherly-estate",
    title: "The Wetherly Estate",
    location: "Bel Air, Los Angeles",
    neighborhood: "Bel Air",
    price: 18500000,
    beds: 6,
    baths: 8,
    sqft: 11240,
    lot: "0.92 acre",
    year: 2019,
    type: "Estate",
    status: "New Listing",
    featured: true,
    tagline: "A gated hillside compound with views that run from downtown to the Pacific.",
    description: [
      "The drive up Wetherly Ridge says a lot before you reach the gate. Stone walls, mature olives, and a motor court sized for the cars that usually end up here. The house opens ahead of you in one long horizontal line, all limestone and glass, holding the ridge without shouting about it.",
      "Inside, the plan is simple and generous. A great room with twelve foot ceilings sits at the center, flanked by a chefs kitchen with two islands and a pantry that could swallow most apartments. Six bedrooms sit on their own wings, so the house stays quiet even when it is full. The primary suite faces west and owns the best hour of the day.",
      "Outside, a zero edge pool runs along the terrace, and the lawn beyond it drops toward a canyon that will never be built on. Evenings out here are the reason people pay Bel Air prices. It is calm in a way the city below never is.",
    ],
    features: [
      "Screening room",
      "800 bottle wine cellar",
      "Zero edge pool and spa",
      "Detached guest house",
      "Gym with canyon views",
      "Six car gallery",
      "Full smart home system",
      "Backup generator",
    ],
    images: [
      "/images/prop-wetherly-1.jpg",
      "/images/prop-wetherly-2.jpg",
      "/images/prop-wetherly-3.jpg",
      "/images/prop-wetherly-4.jpg",
    ],
    agentId: "diana",
  },
  {
    slug: "casa-del-mar-vista",
    title: "Casa del Mar Vista",
    location: "Paradise Cove, Malibu",
    neighborhood: "Malibu",
    price: 24900000,
    beds: 5,
    baths: 7,
    sqft: 9860,
    lot: "1.4 acres",
    year: 2021,
    type: "Villa",
    status: "For Sale",
    featured: true,
    tagline: "A coastal villa with a private path to one of Malibu's most guarded coves.",
    description: [
      "There are houses in Malibu with ocean views, and then there is Casa del Mar Vista, where the water is effectively the front yard. A private stair winds down from the terrace to a stretch of sand shared by four other families, none of whom are talking about it.",
      "The architecture does what good coastal work should. It gets out of the way. Travertine floors run from the entry to the covered loggia, and every principal room frames the same horizon. The kitchen is oak and polished plaster, built for the kind of weekends where nobody leaves.",
      "Five bedrooms, a pool that meets the deck at exactly chair height, and an outdoor shower disguised as sculpture. Come summer, you will wonder why you ever kept a place in town.",
    ],
    features: [
      "Private beach path",
      "Ocean view from every bedroom",
      "Heated pool and spa",
      "Outdoor loggia and fireplace",
      "Whole house water filtration",
      "Solar with battery backup",
      "Three car garage",
      "Surfboard and gear room",
    ],
    images: [
      "/images/prop-casa-del-mar-1.jpg",
      "/images/prop-casa-del-mar-2.jpg",
      "/images/prop-casa-del-mar-3.jpg",
      "/images/prop-casa-del-mar-4.jpg",
    ],
    agentId: "sofia",
  },
  {
    slug: "the-roxbury-modern",
    title: "The Roxbury Modern",
    location: "Trousdale Estates, Beverly Hills",
    neighborhood: "Beverly Hills",
    price: 12750000,
    beds: 5,
    baths: 6,
    sqft: 7940,
    lot: "0.55 acre",
    year: 2022,
    type: "Single Family",
    status: "Open House",
    featured: true,
    tagline: "A sculptural new build on one of Trousdale's quietest streets.",
    description: [
      "From the street, the Roxbury Modern reads like a folded sheet of white stone, and honestly, that is the point. The architecture firm behind it spent two years on the facade alone. Up close the joints are so tight you could set a watch by them.",
      "A floating travertine stair anchors the entry and pulls light down from a skylight three stories up. The great room opens on both sides to the pool deck, so the house breathes all day. Ceilings run at eleven feet, and the kitchen's honed marble island seats eight without crowding.",
      "The lower level carries the party, with a lounge that opens to a sunken fire court and a forty foot pool that glows blue after dark. It is a house built for the way Los Angeles actually lives, which is mostly outdoors, mostly barefoot.",
    ],
    features: [
      "40 foot heated pool",
      "Sunken fire lounge",
      "Floating travertine stair",
      "Polished plaster walls",
      "Sub zero and Gaggenau suite",
      "Theater and bar",
      "Motor court for eight",
      "Fully wired smart home",
    ],
    images: [
      "/images/prop-roxbury-1.jpg",
      "/images/prop-roxbury-2.jpg",
      "/images/prop-roxbury-3.jpg",
      "/images/prop-roxbury-4.jpg",
    ],
    agentId: "marcus",
  },
  {
    slug: "palisades-ridge",
    title: "Palisades Ridge",
    location: "Pacific Palisades, Los Angeles",
    neighborhood: "Pacific Palisades",
    price: 9400000,
    beds: 5,
    baths: 5.5,
    sqft: 6720,
    lot: "0.61 acre",
    year: 2018,
    type: "Single Family",
    status: "For Sale",
    featured: false,
    tagline: "White oak, canyon views, and a village stroll five minutes from the door.",
    description: [
      "Palisades Ridge sits on a cul de sac above the village, close enough that the farmers market is a Sunday walk and far enough that you hear birds instead of Sunset. The house is arranged around a central courtyard, which keeps it bright without cooking the rooms that face west.",
      "The finishes are the quiet kind that age well. White oak floors, limestone counters, and cabinetry built by the same shop that does the award winning work down the coast. Five bedrooms including a main floor suite that grandparent visits will thank you for.",
      "The back terrace takes the afternoon sun and the canyon view together. There is a dining loggia with its own fireplace, and a lawn flat enough for the sort of games children invent and adults pretend not to enjoy.",
    ],
    features: [
      "Central courtyard",
      "Dining loggia with fireplace",
      "Main floor guest suite",
      "White oak throughout",
      "Walk to village schools",
      "Solar owned, not leased",
      "Three car garage",
      "Whole house purifier",
    ],
    images: [
      "/images/prop-palisades-1.jpg",
      "/images/prop-palisades-2.jpg",
      "/images/prop-palisades-3.jpg",
      "/images/prop-palisades-4.jpg",
    ],
    agentId: "sofia",
  },
  {
    slug: "the-skyline-penthouse",
    title: "The Skyline Penthouse",
    location: "Century City, Los Angeles",
    neighborhood: "Century City",
    price: 7850000,
    beds: 3,
    baths: 3.5,
    sqft: 4580,
    lot: "Full floor",
    year: 2020,
    type: "Penthouse",
    status: "New Listing",
    featured: false,
    tagline: "A full floor penthouse with the whole city arranged beneath it.",
    description: [
      "Take the private elevator up and the city goes quiet. The Skyline Penthouse occupies an entire floor, with glass from the entry to the far corner and sight lines that run from downtown, past the hills, out to the sea on a clear afternoon.",
      "Twelve foot ceilings make the 4,580 square feet feel closer to six thousand. The kitchen is a single slab of veined marble with cabinetry you have to touch to believe, and the primary suite comes with a terrace built for two chairs and absolutely nothing else.",
      "The building handles everything, valet, concierge, house cars, and a residents' terrace forty stories up. It is the rare Los Angeles home that makes sense for people who travel for a living.",
    ],
    features: [
      "Full floor residence",
      "Private elevator entry",
      "12 foot ceilings",
      "Concierge and valet",
      "Residents rooftop terrace",
      "Two parking spaces plus storage",
      "Crestron automation",
      "Walker and elevator certified",
    ],
    images: [
      "/images/prop-skyline-1.jpg",
      "/images/prop-skyline-2.jpg",
      "/images/prop-skyline-3.jpg",
      "/images/prop-skyline-4.jpg",
    ],
    agentId: "james",
  },
  {
    slug: "canyon-retreat",
    title: "Canyon Retreat",
    location: "Hollywood Hills, Los Angeles",
    neighborhood: "Hollywood Hills",
    price: 6200000,
    beds: 4,
    baths: 4,
    sqft: 4180,
    lot: "0.43 acre",
    year: 2016,
    type: "Single Family",
    status: "For Sale",
    featured: false,
    tagline: "Glass, cedar, and oak trees. A treehouse for grown ups, ten minutes from Sunset.",
    description: [
      "You take a road most maps barely acknowledge, cross a wooden bridge, and suddenly the house appears in the trees. Cedar cladding, walls of glass, and a deck that follows the hillside like it grew there. The oaks were here first and the design treats them accordingly.",
      "Inside, it is warm rather than precious. Wide plank floors, a plaster fireplace, and a kitchen with a single long counter where every dinner party ends up standing. Four bedrooms, two of them ideal for a home office you will actually use.",
      "The plunge pool sits on the deck's west end, which sounds small until you are in it at sunset with the canyon turning gold. Nobody who visits forgets this house. That tends to matter when it is your turn to sell.",
    ],
    features: [
      "Canyon view plunge pool",
      "Cedar clad exterior",
      "Plaster fireplace",
      "Outdoor dining deck",
      "Detached studio",
      "Radiant heat floors",
      "Two car carport",
      "Native drought tolerant garden",
    ],
    images: [
      "/images/prop-canyon-1.jpg",
      "/images/prop-canyon-2.jpg",
      "/images/prop-canyon-3.jpg",
      "/images/prop-canyon-4.jpg",
    ],
    agentId: "marcus",
  },
  {
    slug: "the-oakmont-manor",
    title: "The Oakmont Manor",
    location: "Holmby Hills, Los Angeles",
    neighborhood: "Holmby Hills",
    price: 29000000,
    beds: 8,
    baths: 11,
    sqft: 16400,
    lot: "1.8 acres",
    year: 2008,
    type: "Estate",
    status: "For Sale",
    featured: true,
    tagline: "A grand manor on 1.8 flat acres, restored over four patient years.",
    description: [
      "Holmby Hills does not do modest, and the Oakmont Manor does not do ordinary. A sycamore lined drive crosses the full depth of the lot before the house reveals itself, symmetrical, limestone, and entirely certain of itself. The current owners spent four years and a famous craftsman's patience bringing everything back to standard.",
      "The public rooms are exactly what you hope for. A paneled library with a fireplace you could stand in, a formal dining room seating twenty, and a ballroom that has hosted two charity galas and one very memorable birthday. Eight bedroom suites, each with its own bath and most with terrace access.",
      "The grounds carry a regulation tennis court, a pool pavilion with loggias on two sides, and a sunken garden that photographs like Tuscany. Service is handled by a wing with its own entrance, kitchen, and parking court. Practical money, hidden beautifully.",
    ],
    features: [
      "Regulation tennis court",
      "Ballroom and gallery",
      "Paneled library",
      "Pool pavilion and loggias",
      "Sunken formal garden",
      "Staff wing with separate entry",
      "12 car motor court",
      "Full building automation",
    ],
    images: [
      "/images/prop-oakmont-1.jpg",
      "/images/prop-oakmont-2.jpg",
      "/images/prop-oakmont-3.jpg",
      "/images/prop-oakmont-4.jpg",
    ],
    agentId: "diana",
  },
  {
    slug: "shoreline-villa",
    title: "Shoreline Villa",
    location: "Manhattan Beach, Los Angeles",
    neighborhood: "Manhattan Beach",
    price: 8950000,
    beds: 5,
    baths: 6,
    sqft: 5340,
    lot: "2,500 sqft bluff",
    year: 2019,
    type: "Villa",
    status: "Open House",
    featured: false,
    tagline: "Walk to the sand in ninety seconds. Surf report visible from bed.",
    description: [
      "The whole point of Shoreline Villa is the walk, ninety seconds on flat sand, no stairs, no Strand traffic. You can hear the sets from the primary bedroom, and yes, you can check the surf without getting out of bed.",
      "The villa stacks five floors around an elevator, ending at a rooftop deck with a sunken spa, a built in grill, and the best seat for New Year's fireworks in the South Bay. Coastal modern detailing, ipe decking, and glass railings keep the view where you want it.",
      "Downstairs, the plan is family friendly in a way beach houses rarely manage. A bunk room with four built ins, an outdoor shower nobody uses the indoor one, and a garage that fits two cars plus every board and bike the household owns.",
    ],
    features: [
      "90 second walk to sand",
      "Rooftop deck and spa",
      "Elevator to all floors",
      "Bunk room with four beds",
      "Outdoor shower",
      "Ipe decking and glass rails",
      "Two car garage plus storage",
      "Fire sprinklers throughout",
    ],
    images: [
      "/images/prop-shoreline-1.jpg",
      "/images/prop-shoreline-2.jpg",
      "/images/prop-shoreline-3.jpg",
      "/images/prop-shoreline-4.jpg",
    ],
    agentId: "sofia",
  },
  {
    slug: "the-garden-house",
    title: "The Garden House",
    location: "Hancock Park, Los Angeles",
    neighborhood: "Hancock Park",
    price: 5600000,
    beds: 5,
    baths: 5,
    sqft: 6010,
    lot: "0.38 acre",
    year: 1928,
    type: "Single Family",
    status: "For Sale",
    featured: false,
    tagline: "A 1928 Spanish revival, restored with love and a walled garden to match.",
    description: [
      "Some houses feel like they have been waiting politely for the right owners, and the Garden House is one of them. Built in 1928 and restored over two years, it keeps every bit of its Spanish bones. Arched windows, hand troweled plaster, and a red clay roof that will outlive everyone currently reading this.",
      "The restoration focused on flow rather than expansion. The kitchen was rebuilt in the original footprint with plaster hood details copied from the era, and the five bedrooms share four restored baths plus a new primary suite bath that manages to look a hundred years old already.",
      "The walled garden is the sell. Olive trees, a reflecting fountain, and a loggia wired for whatever dinner parties you plan to throw. Hancock Park streets like this one rarely trade, and when they do, neighbors whisper. Consider this your whisper.",
    ],
    features: [
      "Walled garden with fountain",
      "Restored 1928 details",
      "Loggia with outdoor wiring",
      "Original arched windows",
      "New systems, old soul",
      "Detached two car garage",
      "Drought tolerant plantings",
      "Walk to Larchmont",
    ],
    images: [
      "/images/prop-garden-1.jpg",
      "/images/prop-garden-2.jpg",
      "/images/prop-garden-3.jpg",
      "/images/prop-garden-4.jpg",
    ],
    agentId: "james",
  },
];

export const SERVICES: Service[] = [
  {
    id: "buyers",
    index: "01",
    title: "Buyer Representation",
    description:
      "We take on a small number of buyers at a time, which means real attention and honest counsel. You get curated previews, candid walk through notes, and an offer strategy built on what the numbers say, not what you want to hear.",
  },
  {
    id: "sellers",
    index: "02",
    title: "Listing & Marketing",
    description:
      "Selling well is preparation, timing, and nerve. We handle staging, photography, film, and a private preview period that finds the buyer who pays the premium. No lockboxes at random. No pricing games that go stale.",
  },
  {
    id: "offmarket",
    index: "03",
    title: "Off-Market Access",
    description:
      "A meaningful share of the homes we trade never reach the public market. Our quiet ledger connects serious buyers with owners who prefer the door to stay shut. Discretion is the product, and it is entirely mutual.",
  },
  {
    id: "investment",
    index: "04",
    title: "Investment Advisory",
    description:
      "Land assembly, teardown math, rental yield, and development upside. James and the advisory desk underwrite Los Angeles dirt every week, and we will happily talk you out of a deal that does not pencil. Consider us the boring voice in your ear.",
  },
  {
    id: "management",
    index: "05",
    title: "Property Care",
    description:
      "A vacant estate is a list of small disasters waiting for a calendar. Our care team runs inspections, landscape and pool vendors, and storm prep while you are away, with a single monthly report that tells you the truth in two pages.",
  },
  {
    id: "relocation",
    index: "06",
    title: "Relocation",
    description:
      "Moving to Los Angeles from another market, or another continent, comes with questions people are embarrassed to ask. We answer all of them, school runs, commute reality, and which neighborhood actually fits your life, before you commit to anything.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Diana sold our home in eleven days, twice what the other agent we interviewed thought it would fetch. She also talked us out of two renovations we were about to waste money on. That honesty is why we sent her my sister.",
    name: "Katherine L.",
    detail: "Sold in Bel Air",
    image: "/images/client-1.jpg",
  },
  {
    quote:
      "Marcus walked our architecturally significant house and quoted us a price 15 percent above the market consensus. We thought he was dreaming. Four offers in the first weekend proved him right and then some.",
    name: "The Hartmann Family",
    detail: "Sold in Pacific Palisades",
    image: "/images/client-2.jpg",
  },
  {
    quote:
      "We bought in Malibu sight unseen from Singapore, which sounds mad, and it would have been with anyone else. Sofia video called us from every property twice and flagged the one thing we would have regretted. She was protector, negotiator, and therapist in one.",
    name: "Daniel R.",
    detail: "Bought in Malibu",
    image: "/images/client-3.jpg",
  },
  {
    quote:
      "James found us an off-market lot nobody knew was trading and structured the deal around our entity requirements without blinking. We have since done three transactions with him and plan a fourth.",
    name: "Priya & Arjun M.",
    detail: "Acquired in Beverly Hills",
    image: "/images/client-4.jpg",
  },
];

export const FAQS: Faq[] = [
  {
    question: "Do you charge for an initial consultation?",
    answer:
      "No. The first conversation is free and genuinely useful whether we end up working together or not. Bring your questions, your timeline, and your skeptic. We have heard worse.",
  },
  {
    question: "Do you only handle homes above $5 million?",
    answer:
      "Most of our work sits between $4 million and $30 million, but we make exceptions for the right clients and the right streets. If we are not the right fit for your price range, we will say so and point you to someone good.",
  },
  {
    question: "Can buyers see homes before they hit the market?",
    answer:
      "Often, yes. Our quiet ledger includes owners preparing to sell who prefer a private process. Buyers who work with us exclusively see these first, and in this market, first is frequently what wins.",
  },
  {
    question: "Do you work with international buyers?",
    answer:
      "Regularly. We handle remote closings, entity purchases, and the practical questions that come with buying in a country you do not live in. Sofia alone has closed for clients in nine countries.",
  },
  {
    question: "How long does it take to sell a home right now?",
    answer:
      "Our median days on market sits at 21, but the honest answer depends on price, preparation, and how willing you are to launch correctly rather than test the water. Well prepared homes still move quickly. Under prepared ones donate days to the market.",
  },
];

export const BRAND_VALUES = [
  {
    title: "Discretion",
    text: "Most of our sales never appear on a portal. Names stay out of press releases, and your neighbors hear about it from the county records, not from us.",
  },
  {
    title: "Craft",
    text: "Every listing is photographed, filmed, and staged by people we would hire for our own homes. If the work is not good enough for our wall, it does not go on yours.",
  },
  {
    title: "Candor",
    text: "We tell clients what their home is worth, not what they hope it is worth. It occasionally costs us a listing. It has never cost us a reputation.",
  },
];

export const TIMELINE = [
  {
    year: "2013",
    title: "Two phones and one listing",
    text: "Diana leaves a national brokerage and opens Velmora at a kitchen table in Beverlywood. The first year closes eleven homes, all by referral.",
  },
  {
    year: "2016",
    title: "The quiet ledger begins",
    text: "A handful of clients ask for total privacy. Off-market becomes a practice rather than an accident, and the ledger that defines the firm takes shape.",
  },
  {
    year: "2019",
    title: "The senior team forms",
    text: "Marcus, Sofia, and James join within eighteen months. No juniors, no handoffs, and a hard rule that the person who wins the listing works the listing.",
  },
  {
    year: "2024",
    title: "Two billion and counting",
    text: "The firm passes $2B in career sales with a staff of six and a client list that reads like a private school directory. We plan to keep it that way.",
  },
];

export function formatPrice(price: number): string {
  if (price >= 1_000_000) {
    const m = price / 1_000_000;
    return `$${m % 1 === 0 ? m.toFixed(0) : m.toFixed(2).replace(/0$/, "")}M`;
  }
  return `$${price.toLocaleString()}`;
}

export function fullPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}

export function getProperty(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function getAgent(id: string): Agent | undefined {
  return AGENTS.find((a) => a.id === id);
}

export const PROPERTY_TYPES = [
  "Single Family",
  "Villa",
  "Estate",
  "Penthouse",
] as const;

export const PRICE_BANDS = [
  { label: "Any price", min: 0, max: Infinity },
  { label: "Up to $10M", min: 0, max: 10_000_000 },
  { label: "$10M to $20M", min: 10_000_000, max: 20_000_000 },
  { label: "$20M and above", min: 20_000_000, max: Infinity },
];
