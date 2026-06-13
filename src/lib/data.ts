/**
 * Central content store for Krishaan Agro.
 * (Later this can be swapped for a Prisma/DB-backed source — shapes are kept clean.)
 */

export type ServiceItem = {
  name: string;
  desc: string;
  image: string;
  /** Shown on the sub-service detail page */
  highlights?: string[];
  usp?: string[];
  /** Optional chip-cloud section on the detail page (e.g. equipment list) */
  tagsTitle?: string;
  tags?: string[];
  /** Real project photos shown as a gallery on the sub-service detail page */
  gallery?: string[];
};

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  accent: "brand" | "accent";
  items: ServiceItem[];
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

/** "B2C Service" -> "b2c-service" (used for sub-service detail page URLs) */
export const itemSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

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
        highlights: [
          "AI-Powered Crop Advisory",
          "Smart Farming Solutions",
          "Precision Agriculture Services",
          "Drone Survey & Spraying",
          "Satellite Crop Monitoring",
          "AI Crop Disease Detection",
          "Soil & Water Testing",
          "Smart Irrigation Management",
          "Certified Seeds & Bio-Inputs",
          "Farm Mechanization Support",
          "Crop Insurance & Subsidy Assistance",
          "Direct Market Linkage",
          "Contract Farming Opportunities",
          "Value Addition & Food Processing",
          "Farmer Training & Skill Development",
        ],
        usp: [
          "AI Crop Doctor",
          "AI Farm Planner",
          "AI Yield Prediction System",
          "AI Pest Early Warning Alerts",
          "Digital Farm Dashboard",
          "Voice-Based Farmer Assistant",
          "GIS & Farm Mapping Services",
          "Carbon Farming Advisory",
          "Export Facilitation Support",
          "Farm-to-Market Integrated Ecosystem",
        ],
      },
      {
        name: "B2B Trade",
        desc: "Bulk sourcing & supply between farms, mandis, retailers and exporters.",
        image: img("photo-1586201375761-83865001e31c"),
        highlights: [
          "Agribusiness Consulting & Strategy",
          "Agri Startup Incubation Support",
          "AI-Powered Agritech Solutions",
          "Precision Agriculture & Smart Farming",
          "Enterprise Drone & GIS Services",
          "Agricultural Research & Data Analytics",
          "Laboratory & Quality Testing Services",
          "FPO & Cooperative Development",
          "Food Processing & Value Chain Solutions",
          "Agri Supply Chain Management",
          "Contract Farming Solutions",
          "Export & Global Market Access",
          "Sustainability & ESG Advisory",
          "Carbon Credit & Climate Smart Agriculture",
          "Investment & Fundraising Support",
        ],
        usp: [
          "AI-Powered Farm Intelligence Platform",
          "Enterprise Agriculture ERP Solutions",
          "Custom Agritech Software Development",
          "Large-Scale Crop Intelligence & Monitoring",
          "Commodity & Market Forecasting",
          "Digital Transformation for FPOs & Agribusinesses",
          "Carbon Credit Project Development",
          "End-to-End Traceability Solutions",
          "Farm-to-Factory Integration",
          "Data-Driven Agribusiness Decision Support",
        ],
      },
      {
        name: "Agroranto™",
        desc: "Farm Machinery & Equipment Solutions — tractor se drone tak, rent karo ya book karo, Uber jaise aasaan.",
        image: img("photo-1592805144716-feeccccef5ac"),
        highlights: [
          "Tractor Rental & Booking Services",
          "Agricultural Implements Supply",
          "Drone Spraying Equipment Services",
          "Seed Drill & Planter Services",
          "Rotavator & Tillage Equipment Services",
          "Harvesting & Threshing Machinery Support",
        ],
        usp: [
          "Uber Model for Farm Equipment Booking",
          "Farm Equipment Subscription Plans",
          "Farm Equipment Sharing Platform",
          "Drone-as-a-Service (DaaS)",
        ],
        tagsTitle: "🚜 Equipment Categories",
        tags: [
          "Tractors",
          "Power Tillers",
          "Rotavators",
          "Seed Drills",
          "Happy Seeders",
          "Laser Land Levellers",
          "Cultivators",
          "Harrows",
          "Reapers",
          "Combine Harvesters",
          "Paddy Transplanters",
          "Straw Balers",
          "Boom Sprayers",
          "Agricultural Drones",
          "Irrigation Equipment",
        ],
      },
      {
        name: "Agri Advisory & Agronomy",
        desc: "Crop planning se yield optimization tak — expert agronomy advisory seedha khet par.",
        image: "/trust/t7.jpg",
        highlights: [
          "Crop Planning & Agronomy Advisory",
          "Soil Health & Nutrient Management",
          "Pest & Disease Management Solutions",
          "Precision Farming Recommendations",
          "Irrigation & Water Management Planning",
          "Protected Cultivation Advisory",
          "Organic & Natural Farming Support",
          "Climate-Smart Agriculture Solutions",
          "Crop Monitoring & Yield Optimization",
          "Sustainable Farming Practices",
        ],
      },
      {
        name: "Farm Advisory",
        desc: "End-to-end farm management — planning, mechanization aur post-harvest tak ka complete saath.",
        image: img("photo-1592419044706-39796d40f98c"),
        highlights: [
          "End-to-End Farm Management",
          "Farm Development & Expansion Planning",
          "Smart Farming Technology Integration",
          "Farm Mechanization Solutions",
          "Drone & Remote Sensing Advisory",
          "Resource & Cost Optimization",
          "Harvest & Post-Harvest Management",
          "Farm Digitization Support",
          "Quality Audits & Compliance Services",
          "Market-Oriented Production Planning",
        ],
      },
      {
        name: "Agri Entrepreneurship Advisory",
        desc: "Agribusiness shuru karna hai? DPR se funding tak — end-to-end agripreneur mentorship.",
        image: img("photo-1454165804606-c3d57bc86b40"),
        highlights: [
          "Agribusiness Consulting & Strategy",
          "Startup Registration & Compliance Support",
          "DPR & Project Report Preparation",
          "NABARD & Government Scheme Consultancy",
          "Agri Loan & Funding Assistance",
          "Investor Readiness & Pitch Development",
          "FPO & Cooperative Development",
          "Food Processing Business Advisory",
          "Agri Export & Market Access Support",
          "End-to-End Agripreneur Mentorship",
        ],
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
        image: "/urban/rooftop/r1.jpg",
        gallery: [
          "/urban/rooftop/r1.jpg",
          "/urban/rooftop/r2.jpg",
          "/urban/rooftop/r3.jpg",
          "/urban/rooftop/r4.jpg",
          "/urban/rooftop/r5.jpg",
          "/urban/rooftop/r6.jpg",
        ],
      },
      {
        name: "Vertical Gardening",
        desc: "Lush living walls jo jagah bachayein aur ghar ko thanda rakhein — style ke saath.",
        image: "/urban/vertical/v1.jpg",
        gallery: [
          "/urban/vertical/v1.jpg",
          "/urban/vertical/v2.jpg",
          "/urban/vertical/v3.jpg",
          "/urban/vertical/v4.jpg",
          "/urban/vertical/v5.jpg",
          "/urban/vertical/v6.jpg",
        ],
      },
      {
        name: "Windowsill Gardening",
        desc: "Balcony aur khidki ke liye compact pots setup — herbs, phool aur positive vibes.",
        image: "/urban/windowsill/w1.jpg",
        gallery: [
          "/urban/windowsill/w1.jpg",
          "/urban/windowsill/w2.jpg",
          "/urban/windowsill/w3.jpg",
          "/urban/windowsill/w4.jpg",
          "/urban/windowsill/w5.jpg",
        ],
      },
      {
        name: "Park Gardening",
        desc: "Communities ke liye raised beds, landscaping aur green-space design.",
        image: "/urban/park-lawn/p1.jpg",
        gallery: [
          "/urban/park-lawn/p1.jpg",
          "/urban/park-lawn/p2.jpg",
          "/urban/park-lawn/p3.jpg",
          "/urban/park-lawn/p4.jpg",
          "/urban/park-lawn/p5.jpg",
          "/urban/park-lawn/p6.jpg",
        ],
      },
      {
        name: "Lawn Gardening",
        desc: "Designer lawns with seating — design, setup aur maintenance hamari zimmedari.",
        image: "/urban/park-lawn/p1.jpg",
        gallery: [
          "/urban/park-lawn/p1.jpg",
          "/urban/park-lawn/p2.jpg",
          "/urban/park-lawn/p3.jpg",
          "/urban/park-lawn/p4.jpg",
          "/urban/park-lawn/p5.jpg",
          "/urban/park-lawn/p6.jpg",
        ],
      },
      {
        name: "Interior Designing",
        desc: "Biophilic indoor greenery jo har space ko premium bana de.",
        image: "/urban/interior/in1.jpg",
        gallery: [
          "/urban/interior/in1.jpg",
          "/urban/interior/in2.jpg",
          "/urban/interior/in3.jpg",
        ],
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
        image: "/smart-farming/polyhouse/ph1.jpg",
        gallery: [
          "/smart-farming/polyhouse/ph1.jpg",
          "/smart-farming/polyhouse/ph2.jpg",
          "/smart-farming/polyhouse/ph3.jpg",
          "/smart-farming/polyhouse/ph4.jpg",
        ],
      },
      {
        name: "Hydroponic Farm Setup",
        desc: "Complete soil-less farm systems — NFT channels, grow towers, nutrient dosing — installed, commissioned aur training ke saath.",
        image: "/smart-farming/hydroponic-setup/hs1.jpg",
        gallery: [
          "/smart-farming/hydroponic-setup/hs1.jpg",
          "/smart-farming/hydroponic-setup/hs2.jpg",
          "/smart-farming/hydroponic-setup/hs3.jpg",
          "/smart-farming/hydroponic-setup/hs4.jpg",
        ],
      },
      {
        name: "Hydroponic Farming",
        desc: "Hamare operational hydroponic farms mein year-round premium leafy greens — 90% kam paani, zero soil, double speed growth.",
        image: "/smart-farming/hydroponic/hy1.jpg",
        gallery: [
          "/smart-farming/hydroponic/hy1.jpg",
          "/smart-farming/hydroponic/hy2.jpg",
          "/smart-farming/hydroponic/hy3.jpg",
          "/smart-farming/hydroponic/hy4.jpg",
        ],
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
        name: "Students Programs",
        desc: "Agriculture students ke liye industry-ready banane wale programs — internships, smart farming, drone-GIS aur AI applications tak ka practical exposure.",
        image: "/smart-farming/sf12.jpg",
        highlights: [
          "Agricultural Internships (RAWE, READY, Research)",
          "Agribusiness & Startup Training",
          "Smart Farming & Precision Agriculture",
          "Drone, GIS & Remote Sensing Training",
          "Food Processing & Value Addition",
          "Digital Agriculture & AI Applications",
          "Certification & Skill Development Programs",
          "Industry Exposure & Field Learning",
        ],
      },
      {
        name: "Faculty & Scientists Programs",
        desc: "Faculty aur researchers ke liye advanced programs — research methodology, IPR, AI-digital agriculture aur industry-academia collaboration par focus.",
        image: img("photo-1523240795612-9a054b0db644"),
        highlights: [
          "Faculty Development Programs (FDPs)",
          "Research Methodology & Scientific Writing",
          "Patent, IPR & Innovation Management",
          "AI & Digital Agriculture Training",
          "Precision Farming & Climate Smart Agriculture",
          "GIS, Data Analytics & Agricultural Modelling",
          "Entrepreneurship & Startup Mentoring",
          "Industry-Academia Collaboration Programs",
        ],
      },
      {
        name: "High-Demand Farmers Training Programs",
        desc: "Kisaano ke liye sabse zyada demand wale practical training programs — organic kheti se lekar drone, dairy, poultry aur FPO development tak.",
        image: "/contract-farming/cf11.jpg",
        highlights: [
          "Organic & Natural Farming",
          "Precision Farming & Smart Agriculture",
          "Soil Health & Nutrient Management",
          "Integrated Pest & Disease Management (IPM)",
          "Smart Irrigation & Water Management",
          "Protected Cultivation (Polyhouse/Greenhouse)",
          "Vegetable Nursery Management",
          "Mushroom Cultivation",
          "Beekeeping (Apiculture)",
          "Dairy Farming Management",
          "Goat Farming Entrepreneurship",
          "Poultry Farming",
          "Fish Farming & Aquaculture",
          "Farm Mechanization & Agri Machinery Training",
          "Agri Drone Training & Demonstration",
          "Food Processing & Value Addition",
          "Agri Marketing & Direct Selling",
          "FPO Development & Farmer Collectives",
          "Climate Smart Agriculture",
        ],
      },
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
    image: "/internship/internship.png",
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
        image: "/internship/agri-marketing.jpg",
      },
      {
        name: "Soil Lab Internship",
        desc: "Soil testing lab mein NPK, pH analysis aur report making ki training.",
        image: "/internship/soil-lab-test.jpg",
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
        desc: "🌱 Soil Sampling (Mitti Ka Namuna Sangrahan) ek scientific technique hai jiske madhyam se khet ki mitti ka sahi namuna lekar uski fertility, nutrient status aur soil health ka assessment kiya jata hai. Sahi soil sample hi accurate soil testing aur fertilizer recommendation ka aadhar hota hai.",
        image: "/soil-testing/sampling/s1.jpg",
        highlights: [
          "Khet ke 8–10 alag-alag sthanon se mitti ka sample collect karein.",
          "Sample hamesha \"V\" shape ka gaddha khodkar lein.",
          "Samanya faslon ke liye 0–15 cm aur bagwani faslon ke liye 0–30 cm gahrai se mitti lein.",
          "Sabhi samples ko achhi tarah milakar ek representative composite sample tayyar karein.",
          "Lagbhag 500 gram mitti laboratory testing ke liye paryapt hoti hai.",
          "Medh, nali, ped ke niche, khaad ke dher aur pani jama hone wale sthanon se sample na lein.",
          "Sample ko saaf plastic bag me bhar kar proper labeling karein.",
          "Soil testing se pH, Organic Carbon, NPK aur micronutrients ki jankari milti hai.",
        ],
        usp: [
          "🌾 Balanced Fertilizer Application",
          "📈 Higher Crop Yield & Quality",
          "💰 Reduced Fertilizer Cost",
          "🌱 Improved Soil Fertility",
          "♻️ Sustainable Farming Practices",
          "🚜 Scientific Crop Planning",
        ],
        gallery: [
          "/soil-testing/sampling/s1.jpg",
          "/soil-testing/sampling/s2.jpg",
          "/soil-testing/sampling/s3.jpg",
          "/soil-testing/sampling/s4.jpg",
        ],
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
        image: img("photo-1500382017468-9049fed747ef"),
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

/* ------------------------------ OPPORTUNITIES ------------------------------ */

export type Opportunity = {
  slug: string;
  title: string;
  org: string;
  category: string;
  /** short timeline / deadline label shown on the card */
  meta: string;
  /** poster image (used in the floating marquee + detail hero) */
  image: string;
  tagline: string;
  body: string[];
  pointsTitle?: string;
  points?: string[];
  whyTitle?: string;
  why?: string[];
  /** images shown one below another (line by line) on the detail page */
  gallery: string[];
  /** external apply / info link */
  link?: string;
};

export const opportunities: Opportunity[] = [
  {
    slug: "startup-bihar-speed-that-builds-confidence",
    title: "Speed that Builds Confidence. Results that Build Trust.",
    org: "Startup Bihar · Department of Industries, Govt. of Bihar",
    category: "Startup Selection",
    meta: "April 2026 cycle · 42 days",
    image: "/opportunities/startup-bihar.jpg",
    tagline:
      "Startup Bihar ne April 2026 ki applications ka poora selection process — preliminary screening se final selection tak — sirf 42 din me complete kiya.",
    body: [
      "Startup Bihar is happy to share that we completed the entire startup selection process — from preliminary screening to final selection — for applications received in April 2026 in just 42 days.",
      "This milestone reflects our commitment to creating a founder-first, transparent, and efficient startup ecosystem where promising entrepreneurs receive timely support and opportunities to grow.",
      "A sincere thanks to all experts, committee members, ecosystem partners, and the team whose dedication made this fast, founder-first process possible.",
    ],
    pointsTitle: "The journey included",
    points: [
      "Preliminary Screening of applications",
      "Detailed Expert Evaluation",
      "Founder Pitching Sessions",
      "Final Selection by the Preliminary Scrutiny Committee (PSC)",
    ],
    whyTitle: "Why does speed matter?",
    why: [
      "Faster decision-making enables startups to move quickly from idea to execution.",
      "Timely support builds founder confidence and ecosystem trust.",
      "Reduced processing timelines help maintain startup momentum.",
      "Efficient governance strengthens Bihar's position as an emerging innovation hub.",
    ],
    gallery: ["/opportunities/startup-bihar.jpg"],
  },
  {
    slug: "sabour-agri-incubators-sabagris",
    title: "Sabour Agri Incubators (SABAGRIS)",
    org: "Sabour Agricultural University, Bihar",
    category: "Agri Startup Incubation",
    meta: "Last date to apply: 7 July 2026",
    image: "/opportunities/sabagris.jpg",
    tagline:
      "Idea, pre-seed aur seed stage agri-startups & students ke liye incubation support — funding, mentorship, validation aur market linkages ke saath.",
    body: [
      "SABAGRIS supports agri-startups with funding, mentorship, validation and market linkages through a 30-day hybrid capacity-building programme.",
      "Expert mentorship from industry & academia, business model development, startup strategy aur technology validation — sab kuch ek hi programme me.",
    ],
    pointsTitle: "Programmes available",
    points: [
      "Startup Agri-Business Incubation Programme (SAIP) — ₹25L",
      "Agripreneurship Orientation Programme (AOP) — ₹5L",
      "Student Orientation Programme (SOP) — ₹4L",
    ],
    whyTitle: "Programme highlights",
    why: [
      "30-Day Hybrid Capacity Building Programme",
      "Expert Mentorship from Industry & Academia",
      "Business Model Development & Startup Strategy",
      "Technology Validation & Product Refinement",
    ],
    gallery: ["/opportunities/sabagris.jpg"],
  },
  {
    slug: "iatr-rawe-aia-2026",
    title: "IATR — RAWE & AIA 2026",
    org: "Institute of Agriculture Training and Research, Dehradun",
    category: "Internship & Training",
    meta: "Registration open now",
    image: "/opportunities/iatr-rawe-aia.jpg",
    tagline:
      "Rural Agricultural Work Experience (RAWE) aur Agro-Industrial Attachment (AIA) — practical exposure, skill development aur rural connect ke saath.",
    body: [
      "RAWE & AIA 2026 ek skilling, entrepreneurship aur research focused programme hai jo students ko real, on-ground agricultural experience deta hai.",
      "Practical knowledge, communication & extension skills, confidence aur entrepreneurship foundation — career ko aage le jaane ke liye complete package.",
    ],
    pointsTitle: "Programme components",
    points: [
      "Rural Agricultural Work Experience (RAWE)",
      "Agro-Industrial Attachment (AIA)",
      "Plant Clinic — crop & pest diagnosis",
      "Unit Attachment — KVKs, Research Stations & Agri Institutions",
    ],
    whyTitle: "What you will gain",
    why: [
      "Practical knowledge & real-field experience",
      "Improved communication & extension skills",
      "Understanding of rural challenges & solutions",
      "Foundation for entrepreneurship & startups",
    ],
    gallery: ["/opportunities/iatr-rawe-aia.jpg"],
    link: "https://www.iatr.in",
  },
  {
    slug: "stpi-smartagri-open-challenge",
    title: "STPI SmartAgri — Open Challenge Program 1.0",
    org: "STPI SmartAgri CoE, Bhilai · Ministry of Electronics & IT",
    category: "AgriTech Challenge",
    meta: "Deadline: 15 July 2026",
    image: "/opportunities/stpi-smartagri.jpg",
    tagline:
      "AgriTech startups ke liye open challenge — apni innovation prove karein aur Rs. 35 Lakh tak ka support jeetein.",
    body: [
      "Pitch. Prove. Prevail — agar aap AgriTech domain me impact create karne ke liye taiyaar ho, toh STPI SmartAgri CoE, Bhilai ke Open Challenge Program 1.0 me participate karein.",
      "Winning startups ko Rs. 35 Lakh tak ka support milta hai — funding, mentorship aur ecosystem access ke saath.",
    ],
    gallery: ["/opportunities/stpi-smartagri.jpg"],
    link: "https://sayuj.net/apply-contest/smartagri-ocp",
  },
  {
    slug: "icrisat-global-research-opportunities",
    title: "ICRISAT Global Research Opportunities 2026–27",
    org: "ICRISAT, Patancheru, Telangana",
    category: "Research Opportunity",
    meta: "Applications open for 2026–27 intakes",
    image: "/opportunities/icrisat-2026.jpg",
    tagline:
      "Global agri research me career banayein — research internships, Master's, PhD aur fellowship programmes ke saath sustainable, food-secure future shape karein.",
    body: [
      "ICRISAT global research opportunities provide hands-on research experience with world-class experts across science, impact, inclusion and collaboration.",
      "Research focus areas include crops & systems (millets, sorghum, chickpea, pigeonpea, groundnut), climate resilience, genetic improvement, digital agriculture & AI, and nutrition, markets & policy.",
    ],
    pointsTitle: "Opportunities available",
    points: [
      "Research Internships",
      "Master's Programs",
      "PhD Programs",
      "Fellowship Programs",
    ],
    gallery: ["/opportunities/icrisat-2026.jpg"],
    link: "https://www.icrisat.org/careers",
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
