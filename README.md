# 🌱 Krishaan Agro — Growing Together

Official website of **Krishaan Agro** — a premium agriculture company from Aurangabad, Bihar, empowering Indian farmers with smart farming, urban gardening, contract farming, agri machinery, soil testing and farm-direct products.

🔗 **Live:** [krishaan-agro.vercel.app](https://krishaan-agro.vercel.app) &nbsp;•&nbsp; 📦 **Repo:** [Abhisingh18/Krishaan-Agro](https://github.com/Abhisingh18/Krishaan-Agro)

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-e10098?logo=framer)
![License](https://img.shields.io/badge/License-Private-orange)

---

## ✨ Highlights

| Feature | Details |
|---|---|
| 🎨 **Premium animated UI** | Hero image slideshow (6 photos, crossfade + ken-burns), scroll reveals, parallax, shine sweeps, count-up stats, animated mega-menu |
| 🛒 **Shop + Cart** | 8 products, category filters, cart drawer with localStorage — **enquiry-based pricing** (no public prices) |
| 💬 **WhatsApp ordering (COD)** | Cart checkout, product "Order Now", every service "Enquire now" — all open WhatsApp at **+91 97715 72816** with a pre-filled message |
| 📧 **Email contact form** | Contact page form delivers enquiries to **krishaanagro1@gmail.com** via FormSubmit (no backend needed) |
| 🤖 **Agri-bot chatbot** | Floating AI-style assistant with smart replies about services, products & pricing; WhatsApp fallback |
| 🏆 **Awards & Gallery** | 31 real photos — masonry grid + lightbox with keyboard navigation, photo marquees across the site |
| 📸 **Real photography** | Smart Farming (28 project photos), Contract Farming (16 field photos), Urban Gardening (6), trust & team photos — all authentic |
| 🔍 **SEO-ready** | `sitemap.xml`, `robots.txt`, per-page metadata, OpenGraph tags, static generation (SSG) |
| 📱 **Fully responsive** | Mobile-first design, hamburger menu, adaptive layouts |

## 🌿 Service Verticals

1. **Krishaan Agro Services** — B2C, B2B trade, agri machinery, soil testing lab, farm advisory, training/internships, Agroranto, market linkage
2. **Urban Gardening** — rooftop/terrace, vertical, windowsill, park, lawn gardening + biophilic interior design
3. **Smart Farming** — polyhouse setup, hydroponic farm setup & farming, multilayer & vertical farming
4. **Contract Farming** — gladiolus, marigold (genda), tuberose (rajnigandha), chrysanthemum, herbal crops with **assured buy-back & procurement**

🤝 **Official Partner:** Satbahani Agro Pvt Ltd (SAPL), Aurangabad

## 🧑‍🤝‍🧑 Team

| Name | Role |
|---|---|
| **Abhishek Kumar** | Founder & CEO |
| **Ujjawal Kumar** | Co-Founder |
| **Pawan Kumar** | CMO |
| **Deepak Kumar** | COO |

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router, SSG) + React 18 + TypeScript
- **Styling:** Tailwind CSS 3 with custom green/white/orange brand theme
- **Animations:** Framer Motion 11
- **Icons:** lucide-react • **Counters:** react-countup
- **Forms → Email:** FormSubmit (serverless)
- **Hosting:** Vercel (auto-deploys from `main`)

## 🚀 Getting Started

```bash
# 1. clone
git clone https://github.com/Abhisingh18/Krishaan-Agro.git
cd Krishaan-Agro

# 2. install dependencies
npm install

# 3. run development server
npm run dev          # → http://localhost:3000

# 4. production build (what Vercel runs)
npm run build && npm start
```

> ⚠️ **Note:** Never run `npm run build` while `npm run dev` is running — both share the `.next` folder. If you see `ChunkLoadError`, stop the server, delete `.next`, and restart.

## ⚙️ Configuration

**All contact details live in one place** — [`src/lib/utils.ts`](src/lib/utils.ts) → `SITE` object:

```ts
phoneDisplay: "+91 97715 72816"   // shown in navbar/footer/contact
whatsapp:     "919771572816"      // cart, chatbot & all enquiry buttons
email:        "krishaanagro1@gmail.com"
address:      "Govind Bhawan, ... Aurangabad, Bihar - 824101"
socials:      { linkedin, facebook, instagram, youtube }
```

**All content** (services, products, team, testimonials, galleries, partners) lives in [`src/lib/data.ts`](src/lib/data.ts).

**Site URL for SEO** — set the env var `NEXT_PUBLIC_SITE_URL` (e.g. `https://krishaanagro.in`) in Vercel → Settings → Environment Variables; `sitemap.xml` and `robots.txt` pick it up automatically.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx               # Homepage
│   ├── shop/                  # Shop grid + product pages
│   ├── services/[slug]/       # 4 service vertical pages
│   ├── awards/                # Awards & Gallery (lightbox)
│   ├── about/                 # Story, founder, team
│   ├── contact/               # Form → email + Google Map
│   ├── sitemap.ts, robots.ts  # SEO
│   └── layout.tsx             # Root layout (navbar/footer/cart/chatbot)
├── components/
│   ├── home/                  # Hero, Services, Stats, Founder, etc.
│   ├── cart/                  # CartProvider + CartDrawer (WhatsApp COD)
│   ├── ui/                    # Reveal, SectionHeading, PageHeader
│   ├── Navbar.tsx             # Mega-menu with live preview
│   ├── Footer.tsx             # Newsletter + contact cards
│   └── Chatbot.tsx            # Agri-bot
└── lib/
    ├── data.ts                # 🌾 ALL site content
    └── utils.ts               # SITE config + helpers
public/
├── gallery/      (31)  ├── smart-farming/ (28)
├── contract-farming/ (16)  ├── urban/ (6)
├── trust/ (12)   ├── partners/  ├── logo.jpeg  └── team photos
```

## 🌐 Deployment & Domain

1. **Vercel:** import this repo at [vercel.com/new](https://vercel.com/new) → Deploy (zero config)
2. **Custom domain:** Vercel → Settings → Domains → add domain, then at the registrar set:
   - `A` record: `@` → `76.76.21.21`
   - `CNAME`: `www` → `cname.vercel-dns.com`
3. **Google:** verify the domain in [Search Console](https://search.google.com/search-console) and submit `/sitemap.xml`

## 📞 Contact

**Krishaan Agro** — Govind Bhawan, Veer Kunwar Singh Path, New Area, Behind US Residency, Aurangabad, Bihar 824101
📱 +91 97715 72816 • ✉️ krishaanagro1@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/company/krishaanagro.in/) • [Facebook](https://www.facebook.com/share/17uou5m38Q/)

---

Made with 🌱 for Indian farmers — **Aapki mehnat, hamari guarantee.**
