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
    image: img("photo-1530836369250-ef72a3f5cda8"),
    accent: "brand",
    items: [
      {
        name: "B2C Service",
        desc: "Fresh, traceable produce and inputs delivered directly to consumers.",
        image: img("photo-1610348725531-843dff563e2c"),
      },
      {
        name: "B2B Trade",
        desc: "Bulk sourcing & supply between farms, mandis, retailers and exporters.",
        image: img("photo-1586201375761-83865001e31c"),
      },
      {
        name: "Agri Machinery",
        desc: "Modern tractors, tools and implements on sale and rental.",
        image: img("photo-1592805144716-feeccccef5ac"),
      },
      {
        name: "Soil Testing Lab",
        desc: "Accurate NPK, pH and micro-nutrient analysis with crop advisory.",
        image: img("photo-1579154204601-01588f351e67"),
      },
      {
        name: "Agri & Farm Advisory",
        desc: "Agronomy, farm and entrepreneurship consulting from experts — seedha khet par.",
        image: "/trust/t7.jpg",
      },
      {
        name: "Internship / Training",
        desc: "Hands-on workshops, internships and skill programs for farmers & students.",
        image: img("photo-1544531585-9847b68c8c86"),
      },
      {
        name: "Agroranto",
        desc: "Our innovative farm-tech platform connecting growers with opportunity.",
        image: img("photo-1586771107445-d3ca888129ff"),
      },
      {
        name: "Market Linkage",
        desc: "Direct access to buyers, mandis and premium markets for better prices.",
        image: img("photo-1577705998148-6da4f3963bc8"),
      },
    ],
  },
  {
    slug: "urban-gardening",
    title: "Urban Gardening",
    tagline: "Green cities, greener homes",
    description:
      "Transform rooftops, balconies and walls into thriving green spaces with our design, setup and maintenance services for urban India.",
    image: "/urban/u3.jpg",
    accent: "brand",
    items: [
      {
        name: "Rooftop / Terrace Gardening",
        desc: "Khaali chhat ko banao productive garden — sabzi, phal aur phool, sab apni terrace par.",
        image: "/urban/u5.jpg",
      },
      {
        name: "Vertical Gardening",
        desc: "Lush living walls jo jagah bachayein aur ghar ko thanda rakhein — style ke saath.",
        image: "/urban/u4.jpg",
      },
      {
        name: "Windowsill Gardening",
        desc: "Balcony aur khidki ke liye compact pots setup — herbs, phool aur positive vibes.",
        image: "/urban/u1.jpg",
      },
      {
        name: "Park Gardening",
        desc: "Communities ke liye raised beds, landscaping aur green-space design.",
        image: "/urban/u6.jpg",
      },
      {
        name: "Lawn Gardening",
        desc: "Designer lawns with seating — design, setup aur maintenance hamari zimmedari.",
        image: "/urban/u2.jpg",
      },
      {
        name: "Interior Designing",
        desc: "Biophilic indoor greenery jo har space ko premium bana de.",
        image: img("photo-1616046229478-9901c5536a45"),
      },
    ],
    gallery: Array.from({ length: 6 }, (_, i) => `/urban/u${i + 1}.jpg`),
    galleryNote:
      "Rooftop pergola se lekar vertical walls aur balcony gardens tak — dekhiye urban gardening ke woh styles jo hum aapke ghar, society ya office ke liye design karte hain.",
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
  {
    slug: "training-program",
    title: "Training Program",
    tagline: "Seekho, ugao, kamao",
    description:
      "Kisaano, students aur agripreneurs ke liye practical training — modern kheti ki har technique, expert trainers ke saath hands-on seekhiye.",
    image: img("photo-1524178232363-1fb2b075b655"),
    accent: "brand",
    items: [
      {
        name: "Smart Farming Training",
        desc: "Hydroponics, polyhouse aur protected cultivation ki hands-on training — hamare operational farms par.",
        image: "/smart-farming/sf18.jpg",
      },
      {
        name: "Organic Farming Training",
        desc: "Vermicompost, bio-pesticides aur organic certification tak — chemical-free kheti ka poora raasta.",
        image: img("photo-1611843467160-25afb8df1074"),
      },
      {
        name: "Floriculture Training",
        desc: "Gladiolus, genda aur rajnigandha jaise flower crops ki commercial cultivation seekhiye.",
        image: "/contract-farming/cf11.jpg",
      },
      {
        name: "Urban Gardening Workshop",
        desc: "Terrace aur balcony gardening ke weekend workshops — ghar se hi shuruat karein.",
        image: "/urban/u1.jpg",
      },
      {
        name: "Agri-Entrepreneurship Training",
        desc: "Farm business planning, costing aur market linkage — kheti ko business banana seekhiye.",
        image: img("photo-1544531585-9847b68c8c86"),
      },
      {
        name: "Soil & Crop Management",
        desc: "Soil testing reports samajhna, nutrient management aur crop planning ki training.",
        image: img("photo-1579154204601-01588f351e67"),
      },
    ],
  },
  {
    slug: "internship",
    title: "Internship",
    tagline: "Career ki shuruaat khet se",
    description:
      "Agriculture students aur fresh graduates ke liye certified internships — real farms, real projects aur industry experts ki mentorship ke saath.",
    image: img("photo-1523240795612-9a054b0db644"),
    accent: "accent",
    items: [
      {
        name: "Agronomy Internship",
        desc: "Field visits, crop monitoring aur advisory ka real on-ground experience.",
        image: "/trust/t7.jpg",
      },
      {
        name: "Hydroponics Internship",
        desc: "Soil-less farming systems ka operation aur management — hamare hydroponic farms par.",
        image: "/smart-farming/sf25.jpg",
      },
      {
        name: "Floriculture Internship",
        desc: "Flower crop production se harvest aur market tak ka complete cycle.",
        image: "/contract-farming/cf13.jpg",
      },
      {
        name: "Agri-Business & Marketing",
        desc: "Market linkage, procurement aur agri-trade operations ki practical learning.",
        image: img("photo-1454165804606-c3d57bc86b40"),
      },
      {
        name: "Soil Lab Internship",
        desc: "Soil testing lab mein NPK, pH analysis aur report making ki training.",
        image: img("photo-1582719478250-c89cae4dc85b"),
      },
      {
        name: "Field Research & Data",
        desc: "Crop trials, data collection aur record-keeping — research career ki neev.",
        image: img("photo-1500382017468-9049fed747ef"),
      },
    ],
  },
  {
    slug: "soil-testing",
    title: "Soil Testing",
    tagline: "Mitti jaano, fasal badhao",
    description:
      "Accredited soil testing lab — NPK, pH aur micro-nutrients ki accurate jaanch ke saath crop-specific advisory, taaki har khaad aur har paisa sahi jagah lage.",
    image: img("photo-1579154204601-01588f351e67"),
    accent: "brand",
    items: [
      {
        name: "Soil Sample Collection",
        desc: "Sahi tarike se sample lena hi aadhi jaanch hai — hamari team khet se scientific sampling karti hai.",
        image: "/smart-farming/sf1.jpg",
      },
      {
        name: "NPK & Micro-Nutrient Analysis",
        desc: "Nitrogen, Phosphorus, Potassium aur zinc-iron jaise micro-nutrients ki lab-grade testing.",
        image: img("photo-1579154204601-01588f351e67"),
      },
      {
        name: "pH & EC Testing",
        desc: "Mitti ki acidity aur salinity ki jaanch — fasal ke liye sahi zameen ka pata.",
        image: img("photo-1582719478250-c89cae4dc85b"),
      },
      {
        name: "Soil Health Report",
        desc: "Aasaan bhasha mein detailed report — kya kami hai, kya zyada hai, sab clear.",
        image: img("photo-1454165804606-c3d57bc86b40"),
      },
      {
        name: "Fertilizer Recommendation",
        desc: "Report ke hisaab se exact khaad aur matra ki salah — kharcha kam, paidawar zyada.",
        image: img("photo-1611843467160-25afb8df1074"),
      },
      {
        name: "Crop-Specific Advisory",
        desc: "Aapki mitti ke liye kaunsi fasal best hai — expert agronomist ki personalized salah.",
        image: "/trust/t7.jpg",
      },
    ],
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
    image: img("photo-1500595046743-cd271d694d30"),
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
    image: img("photo-1611843467160-25afb8df1074"),
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
    image: img("photo-1589923188900-85dae523342b"),
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
    image: img("photo-1622383563227-04401ab4e5ea"),
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
    image: "/smart-farming/sf18.jpg",
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
    image: img("photo-1615811361523-6bd03d7748e7"),
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
    image: img("photo-1610440042657-612c34d95e9f"),
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
    image: "/smart-farming/sf25.jpg",
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

/* ------------------------------ UPCOMING EVENTS ------------------------------ */

export type AgroEvent = {
  title: string;
  day: string;
  month: string;
  year: string;
  category: string;
  location: string;
  image: string;
};

export const events: AgroEvent[] = [
  {
    title: "India Horti Expo 2026",
    day: "19",
    month: "Jun",
    year: "2026",
    category: "Agricultural & Horticulture Expo",
    location: "India Expo Centre, Greater Noida",
    image: img("photo-1531058020387-3be344556be6"),
  },
  {
    title: "Agroworld Expo 2026",
    day: "20",
    month: "Nov",
    year: "2026",
    category: "Agricultural & Agritech Fair",
    location: "Pragati Maidan, New Delhi",
    image: img("photo-1540575467063-178a50c2df87"),
  },
  {
    title: "Bharat Agri Tech 2027",
    day: "08",
    month: "Jan",
    year: "2027",
    category: "Agri Machinery & Technology",
    location: "BIEC, Bengaluru",
    image: img("photo-1505373877841-8d25f7d46678"),
  },
  {
    title: "Farm-Tech India 2027",
    day: "14",
    month: "Feb",
    year: "2027",
    category: "Horticulture & Floriculture",
    location: "Patna, Bihar",
    image: img("photo-1511578314322-379afb476865"),
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

export const partners: { name: string; logo?: string; location?: string }[] = [
  {
    name: "Satbahani Agro Pvt Ltd (SAPL)",
    logo: "/partners/sapl.jpg",
    location: "Aurangabad, Bihar",
  },
];
