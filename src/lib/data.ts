/**
 * Central content store for Krishaan Agro.
 * (Later this can be swapped for a Prisma/DB-backed source — shapes are kept clean.)
 */

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  accent: "brand" | "accent";
  items: { name: string; desc: string; image: string }[];
  /** Real project photos shown as a marquee gallery on the service page */
  gallery?: string[];
  galleryNote?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  mrp?: number;
  unit: string;
  rating: number;
  badge?: string;
  image: string;
  short: string;
  description: string;
  highlights: string[];
};

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ----------------------------- SERVICE CATEGORIES ----------------------------- */

export const categories: Category[] = [
  {
    slug: "krishaan-agro-services",
    title: "Krishaan Agro Services",
    tagline: "End-to-end agri solutions",
    description:
      "From farm to market — a complete ecosystem of trade, machinery, lab testing and advisory built to make Indian agriculture profitable and future-ready.",
    image: img("photo-1625246333195-78d9c38ad449"),
    accent: "brand",
    items: [
      {
        name: "B2C Service",
        desc: "Fresh, traceable produce and inputs delivered directly to consumers.",
        image: img("photo-1542838132-92c53300491e"),
      },
      {
        name: "B2B Trade",
        desc: "Bulk sourcing & supply between farms, mandis, retailers and exporters.",
        image: img("photo-1556767576-5ec41e3239ea"),
      },
      {
        name: "Agri Machinery",
        desc: "Modern tractors, tools and implements on sale and rental.",
        image: img("photo-1605000797499-95a51c5269ae"),
      },
      {
        name: "Soil Testing Lab",
        desc: "Accurate NPK, pH and micro-nutrient analysis with crop advisory.",
        image: img("photo-1582719478250-c89cae4dc85b"),
      },
      {
        name: "Agri & Farm Advisory",
        desc: "Agronomy, farm and entrepreneurship consulting from experts.",
        image: img("photo-1500382017468-9049fed747ef"),
      },
      {
        name: "Internship / Training",
        desc: "Hands-on workshops, internships and skill programs for farmers & students.",
        image: img("photo-1524178232363-1fb2b075b655"),
      },
      {
        name: "Agroranto",
        desc: "Our innovative farm-tech platform connecting growers with opportunity.",
        image: img("photo-1530836369250-ef72a3f5cda8"),
      },
      {
        name: "Market Linkage",
        desc: "Direct access to buyers, mandis and premium markets for better prices.",
        image: img("photo-1488459716781-31db52582fe9"),
      },
    ],
  },
  {
    slug: "urban-gardening",
    title: "Urban Gardening",
    tagline: "Green cities, greener homes",
    description:
      "Transform rooftops, balconies and walls into thriving green spaces with our design, setup and maintenance services for urban India.",
    image: img("photo-1466692476868-aef1dfb1e735"),
    accent: "brand",
    items: [
      {
        name: "Rooftop / Terrace Gardening",
        desc: "Turn unused terraces into productive, beautiful gardens.",
        image: img("photo-1416879595882-3373a0480b5b"),
      },
      {
        name: "Vertical Gardening",
        desc: "Lush living walls that save space and cool your home.",
        image: img("photo-1558904541-efa843a96f01"),
      },
      {
        name: "Windowsill Gardening",
        desc: "Compact herb & flower setups for every window.",
        image: img("photo-1485955900006-10f4d324d411"),
      },
      {
        name: "Park Gardening",
        desc: "Landscaping and green-space design for communities.",
        image: img("photo-1519331379826-f10be5486c6f"),
      },
      {
        name: "Lawn Gardening",
        desc: "Healthy, manicured lawns designed and maintained.",
        image: img("photo-1558904541-efa843a96f01"),
      },
      {
        name: "Interior Designing",
        desc: "Biophilic indoor greenery that elevates any space.",
        image: img("photo-1493957988430-a5f2e15f39a3"),
      },
    ],
  },
  {
    slug: "smart-farming",
    title: "Smart Farming",
    tagline: "Technology-driven cultivation",
    description:
      "Grow more with less. Protected and soil-less cultivation systems engineered for high yield, water efficiency and year-round production.",
    image: "/smart-farming/sf1.jpg",
    accent: "accent",
    items: [
      {
        name: "Polyhouse Development / Setup",
        desc: "Climate-controlled polyhouse design aur turnkey installation — structure se cultivation tak, sab hamari team karti hai.",
        image: "/smart-farming/sf14.jpg",
      },
      {
        name: "Hydroponic Farm Setup",
        desc: "Complete soil-less farm systems — NFT channels, grow towers, nutrient dosing — installed, commissioned aur training ke saath.",
        image: "/smart-farming/sf18.jpg",
      },
      {
        name: "Hydroponic Farming",
        desc: "Hamare operational hydroponic farms mein year-round premium leafy greens — 90% kam paani, zero soil, double speed growth.",
        image: "/smart-farming/sf25.jpg",
      },
      {
        name: "Multilayer Farming",
        desc: "Multi-tier A-frame racks se ek hi jagah par kai guna production — chhoti zameen, badi kamai.",
        image: "/smart-farming/sf22.jpg",
      },
      {
        name: "Vertical Farming",
        desc: "Vertically trained high-density crops aur tower systems se har sq.ft. ka maximum istemal.",
        image: "/smart-farming/sf10.jpg",
      },
    ],
    gallery: Array.from(
      { length: 28 },
      (_, i) => `/smart-farming/sf${i + 1}.jpg`
    ),
    galleryNote:
      "Sirf baatein nahi — kaam bola karta hai. Ye photos hamare asli operational projects ki hain: polyhouse cultivation, hydroponic grow towers, NFT systems, multilayer A-frame racks aur protected field farming. Har project hamari team ne design, setup aur manage kiya hai — aapka project bhi aisa hi dikh sakta hai.",
  },
  {
    slug: "contract-farming",
    title: "Contract Farming",
    tagline: "Assured cultivation, assured buy-back",
    description:
      "Grow high-value medicinal and floriculture crops with full input support, technical guidance and a guaranteed market for your harvest.",
    image: "/contract-farming/cf9.jpg",
    accent: "accent",
    items: [
      {
        name: "Gladiolus Farming",
        desc: "Premium gladiolus cut-flowers — shaadi, events aur decoration market mein zabardast demand. Hamare khet iska saboot hain.",
        image: "/contract-farming/cf6.jpg",
      },
      {
        name: "Marigold (Genda) Farming",
        desc: "Festival aur mandir market ki year-round demand — fast-cycle genda crop, assured kharidari ke saath.",
        image: "/contract-farming/cf12.jpg",
      },
      {
        name: "Tuberose (Rajnigandha) Farming",
        desc: "Khushboodar rajnigandha — cut-flower aur perfume industry ke liye high-value crop.",
        image: "/contract-farming/cf10.jpg",
      },
      {
        name: "Chrysanthemum (Guldaudi) Farming",
        desc: "Winter season ka star flower — dense production, strong wholesale market.",
        image: "/contract-farming/cf8.jpg",
      },
      {
        name: "Mixed Floriculture Beds",
        desc: "Ek hi khet mein multiple flower crops ki scientific planning — risk kam, income zyada.",
        image: "/contract-farming/cf5.jpg",
      },
      {
        name: "Medicinal & Herbal Crops",
        desc: "Herbal crops ki cultivation hamari technical team ki nigrani mein — quality jo market maange.",
        image: "/contract-farming/cf3.jpg",
      },
      {
        name: "On-Field Supervision",
        desc: "Hamari team regular field visits karti hai — buaai se harvest tak har stage pe expert saath.",
        image: "/contract-farming/cf13.jpg",
      },
      {
        name: "Assured Buy-Back & Procurement",
        desc: "Harvest ki weighing, grading aur on-the-spot procurement — poore record ke saath, seedha khet se.",
        image: "/contract-farming/cf1.jpg",
      },
    ],
    gallery: Array.from(
      { length: 16 },
      (_, i) => `/contract-farming/cf${i + 1}.jpg`
    ),
    galleryNote:
      "Ye photos hamare asli contract farming operations ki hain — Bihar ke kheton mein harvest procurement, weighing aur record-keeping se lekar gladiolus jaise floriculture crops ki cultivation tak. Assured buy-back sirf vaada nahi, hamara roz ka kaam hai — aur ye tasveerein iska saboot hain.",
  },
];

/* --------------------------------- PRODUCTS --------------------------------- */

export const products: Product[] = [
  {
    id: "p1",
    slug: "multi-nutrient-cattle-feed",
    name: "Multi-Nutrient Cattle Feed",
    category: "Cattle Feed",
    price: 1150,
    mrp: 1400,
    unit: "50 kg bag",
    rating: 4.8,
    badge: "Bestseller",
    image: img("photo-1605000797499-95a51c5269ae"),
    short: "Balanced nutrition for higher milk yield & healthier cattle.",
    description:
      "Scientifically formulated multi-nutrient feed enriched with proteins, minerals and vitamins to boost milk production, immunity and overall cattle health.",
    highlights: [
      "Boosts milk yield up to 15%",
      "Rich in bypass protein & minerals",
      "Improves digestion & immunity",
      "No harmful additives",
    ],
  },
  {
    id: "p2",
    slug: "organic-vermicompost",
    name: "Premium Organic Vermicompost",
    category: "Inputs",
    price: 320,
    mrp: 450,
    unit: "30 kg bag",
    rating: 4.7,
    badge: "Organic",
    image: img("photo-1416879595882-3373a0480b5b"),
    short: "100% organic compost for richer soil and stronger roots.",
    description:
      "Nutrient-dense vermicompost that improves soil structure, water retention and microbial life — perfect for organic farming and home gardens.",
    highlights: [
      "100% natural & chemical-free",
      "Improves soil fertility",
      "Enhances root development",
      "Safe for all crops",
    ],
  },
  {
    id: "p3",
    slug: "mini-power-tiller",
    name: "Mini Power Tiller",
    category: "Agri Machinery",
    price: 48500,
    mrp: 54000,
    unit: "per unit",
    rating: 4.6,
    badge: "Machinery",
    image: img("photo-1530267981375-f0de937f5f13"),
    short: "Compact, fuel-efficient tiller for small & marginal farms.",
    description:
      "A rugged mini power tiller ideal for ploughing, weeding and inter-cultivation. Easy to operate and maintain, designed for Indian field conditions.",
    highlights: [
      "Fuel-efficient 4-stroke engine",
      "Ideal for small farms",
      "Multiple attachments supported",
      "Low maintenance",
    ],
  },
  {
    id: "p4",
    slug: "drip-irrigation-kit",
    name: "Smart Drip Irrigation Kit",
    category: "Inputs",
    price: 2750,
    mrp: 3500,
    unit: "1 acre kit",
    rating: 4.7,
    image: img("photo-1625246333195-78d9c38ad449"),
    short: "Save up to 60% water with precision drip irrigation.",
    description:
      "Complete drip irrigation kit with filters, mains, laterals and emitters. Delivers water and nutrients straight to the root zone for maximum efficiency.",
    highlights: [
      "Saves up to 60% water",
      "Uniform water distribution",
      "Easy DIY installation",
      "Durable UV-resistant pipes",
    ],
  },
  {
    id: "p5",
    slug: "hydroponic-starter-kit",
    name: "Hydroponic Starter Kit",
    category: "Innovative",
    price: 6900,
    mrp: 8500,
    unit: "36 plants",
    rating: 4.9,
    badge: "New",
    image: img("photo-1581092160562-40aa08e78837"),
    short: "Grow fresh greens at home — no soil, no mess.",
    description:
      "An all-in-one hydroponic system with net pots, nutrients, pump and grow channels. Perfect for leafy greens and herbs on your balcony or terrace.",
    highlights: [
      "Soil-less, space-saving design",
      "Grows 36 plants at once",
      "Includes nutrients & pump",
      "Up to 30% faster growth",
    ],
  },
  {
    id: "p6",
    slug: "bio-pesticide-neem",
    name: "Neem Bio-Pesticide",
    category: "Inputs",
    price: 540,
    mrp: 700,
    unit: "1 litre",
    rating: 4.5,
    badge: "Organic",
    image: img("photo-1592982537447-7440770cbfc9"),
    short: "Natural pest control that's safe for crops & soil.",
    description:
      "Cold-pressed neem-based bio-pesticide that controls a wide range of pests without harming beneficial insects or leaving chemical residue.",
    highlights: [
      "Broad-spectrum pest control",
      "Residue-free & organic",
      "Safe for pollinators",
      "Improves crop quality",
    ],
  },
  {
    id: "p7",
    slug: "moringa-powder",
    name: "Pure Moringa Leaf Powder",
    category: "Innovative",
    price: 380,
    mrp: 500,
    unit: "250 g",
    rating: 4.8,
    badge: "Superfood",
    image: img("photo-1615486511484-92e172cc4fe0"),
    short: "Nutrient-packed superfood from our contract farms.",
    description:
      "Naturally dried and finely milled moringa leaf powder, rich in iron, calcium and antioxidants — sourced directly from Krishaan Agro contract farms.",
    highlights: [
      "Farm-direct & pure",
      "Rich in iron & antioxidants",
      "No preservatives",
      "Lab-tested quality",
    ],
  },
  {
    id: "p8",
    slug: "vertical-grow-tower",
    name: "Vertical Grow Tower",
    category: "Innovative",
    price: 4200,
    mrp: 5200,
    unit: "per unit",
    rating: 4.6,
    badge: "New",
    image: img("photo-1558904541-efa843a96f01"),
    short: "Grow more in less space with a stackable garden tower.",
    description:
      "Modular vertical grow tower that lets you cultivate up to 20 plants in a single sq.ft. footprint — ideal for urban balconies and terraces.",
    highlights: [
      "20 plants per sq.ft.",
      "Self-watering reservoir",
      "Weather-resistant build",
      "Easy to assemble",
    ],
  },
];

/* ------------------------------ ACHIEVEMENTS / STATS ------------------------------ */

export const stats = [
  { value: 12000, suffix: "+", label: "Farmers Empowered" },
  { value: 45, suffix: "+", label: "Districts Served" },
  { value: 8, suffix: "", label: "Service Verticals" },
  { value: 98, suffix: "%", label: "Happy Customers" },
];

export const achievements = [
  {
    year: "2024",
    title: "Best Agri-Startup Award",
    desc: "Recognized by the State Agriculture Board for innovation in smart farming.",
    image: img("photo-1454165804606-c3d57bc86b40"),
  },
  {
    year: "2023",
    title: "10,000+ Farmers Onboarded",
    desc: "Crossed a major milestone of empowering farmers across 40+ districts.",
    image: img("photo-1500382017468-9049fed747ef"),
  },
  {
    year: "2023",
    title: "Export Quality Certification",
    desc: "Achieved certification for export-grade organic produce and inputs.",
    image: img("photo-1488459716781-31db52582fe9"),
  },
  {
    year: "2022",
    title: "Soil Lab Accreditation",
    desc: "Our soil testing lab received national accreditation for accuracy.",
    image: img("photo-1582719478250-c89cae4dc85b"),
  },
];

/* --------------------------------- TEAM --------------------------------- */

export const founder = {
  name: "Abhishek Kumar",
  role: "Founder & CEO",
  linkedin: "https://www.linkedin.com/in/abhishek-kumar-88b352265/",
  image: "/founder.jpg",
  message:
    "When I started Krishaan Agro, I had one dream — to make Indian agriculture profitable, sustainable and respected. Every farmer deserves modern tools, fair markets and expert guidance. Today, with thousands of farmers in our family, we're turning that dream into a movement. We don't just sell products; we grow partnerships, and together, we grow India.",
};

export const team: {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}[] = [
  {
    name: "Abhishek Kumar",
    role: "Founder & CEO",
    image: "/founder.jpg",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-88b352265/",
  },
  {
    name: "Ujjawal Kumar",
    role: "Co-Founder",
    image: "/team-ujjawal.jpg",
  },
  {
    name: "Pawan Kumar",
    role: "CMO",
    image: "/team-pawan.jpg",
  },
  {
    name: "Deepak Kumar",
    role: "COO",
    image: "/team-deepak.jpg",
  },
];

/* ------------------------------ AWARDS & GALLERY ------------------------------ */

export type AwardItem = {
  title: string;
  year: string;
  org: string;
  category: "Award" | "Event" | "Recognition";
  image: string;
  tall?: boolean;
};

export const awards: AwardItem[] = [
  {
    title: "Best Agri-Startup Award",
    year: "2024",
    org: "State Agriculture Board",
    category: "Award",
    image: img("photo-1567427017947-545c5f8d16ad"),
    tall: true,
  },
  {
    title: "Innovation in Smart Farming",
    year: "2024",
    org: "National AgriTech Summit",
    category: "Award",
    image: img("photo-1579389083078-4e7018379f7e"),
  },
  {
    title: "Agri Expo Felicitation",
    year: "2023",
    org: "Kisan Mela, Bihar",
    category: "Event",
    image: img("photo-1540575467063-178a50c2df87"),
  },
  {
    title: "Excellence in Rural Impact",
    year: "2023",
    org: "Agri Business Conclave",
    category: "Recognition",
    image: img("photo-1531058020387-3be344556be6"),
    tall: true,
  },
  {
    title: "Farmer Training Workshop",
    year: "2023",
    org: "Krishaan Agro Academy",
    category: "Event",
    image: img("photo-1524178232363-1fb2b075b655"),
  },
  {
    title: "Startup Recognition",
    year: "2022",
    org: "Startup India Showcase",
    category: "Recognition",
    image: img("photo-1511578314322-379afb476865"),
  },
  {
    title: "Agri Conference Keynote",
    year: "2022",
    org: "AgriVision Conference",
    category: "Event",
    image: img("photo-1505373877841-8d25f7d46678"),
    tall: true,
  },
  {
    title: "Community Impact Honour",
    year: "2022",
    org: "Rural Development Forum",
    category: "Award",
    image: img("photo-1475721027785-f74eccf877e2"),
  },
  {
    title: "Soil Lab Accreditation",
    year: "2022",
    org: "National Accreditation Body",
    category: "Recognition",
    image: img("photo-1582719478250-c89cae4dc85b"),
  },
];

/* ------------------------------ TESTIMONIALS ------------------------------ */

export const testimonials = [
  {
    name: "Suresh Patel",
    role: "Dairy Farmer, Gujarat",
    image: img("photo-1568602471122-7832951cc4c5"),
    quote:
      "After switching to Krishaan Agro's cattle feed, my milk yield went up noticeably. Their team actually visits and guides us.",
    rating: 5,
  },
  {
    name: "Meena Devi",
    role: "Organic Grower, Rajasthan",
    image: img("photo-1544723795-3fb6469f5b39"),
    quote:
      "The soil testing and advisory completely changed how I farm. My input costs are down and my produce quality is up.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Urban Gardener, Delhi",
    image: img("photo-1506794778202-cad84cf45f1d"),
    quote:
      "They turned my barren terrace into a green paradise. Professional design, great plants and amazing after-care.",
    rating: 5,
  },
  {
    name: "Lakshmi Reddy",
    role: "Contract Farmer, Telangana",
    image: img("photo-1531123897727-8f129e1688ce"),
    quote:
      "Guaranteed buy-back for my moringa harvest gave me real peace of mind. Krishaan Agro keeps every promise.",
    rating: 5,
  },
];

/* ------------------------------ PARTNERS ------------------------------ */

export const partners = [
  "AgriTech India",
  "FarmConnect",
  "GreenGrow",
  "BioInputs Co.",
  "Mandi Direct",
  "EcoHarvest",
];
