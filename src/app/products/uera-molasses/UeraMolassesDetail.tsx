"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Droplets,
  HeartPulse,
  Leaf,
  MessageCircle,
  Milk,
  Phone,
  Sprout,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { SITE, whatsappLink } from "@/lib/utils";

const benefits = [
  { icon: Milk, title: "Doodh Utpadan mein Vridhi", desc: "Doodh ki maatra aur gunwatta dono badhaye." },
  { icon: Droplets, title: "Base Fat aur SNF Badhaye", desc: "Doodh ko bana zyada paushtik aur premium." },
  { icon: HeartPulse, title: "Pashu Swasthya mein Sudhar", desc: "Pachan tantra mazboot, bimariyon se bachav." },
  { icon: Zap, title: "Prakritik Urja ka Srot", desc: "Pashu ko adhik energy aur behtar performance." },
  { icon: Sprout, title: "Prajan Kshamta mein Sudhar", desc: "Heat me jaldi laaye, prajan dar badhaye." },
  { icon: Leaf, title: "100% Prakritik Pashu Aahar", desc: "Rasaynik mukt — sabhi nasl ke pashu ke liye." },
];

const facts = [
  "Doodh ki maatra 10–30% tak badhaye",
  "Base fat 0.5–1% tak badhaye",
  "Bimariyon se bachav",
  "Jaldi heat me laaye",
  "Sabhi naslon ke pashu ke liye upyogi",
];

export default function UeraMolassesDetail() {
  return (
    <div className="container-x py-14">
      {/* hero: image + intro */}
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] bg-white shadow-glow ring-1 ring-brand-100"
        >
          <Image
            src="/products/uera-showcase.jpg"
            alt="Krishaan Uera Molasses product"
            width={1570}
            height={1002}
            priority
            sizes="(max-width:1024px) 90vw, 45vw"
            className="h-auto w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg font-semibold text-brand-800">
            🐄 Healthy cattle, higher milk yield
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-brand-950 sm:text-3xl">
            Uera Molasses <span className="gradient-text">kya hai?</span>
          </h2>
          <p className="mt-4 leading-relaxed text-brand-700">
            Uera Molasses ek prakritik nutritional supplement hai jo cattle ki
            milk production aur quality ko naturally improve karta hai —
            digestion, energy aur overall animal health ko support karte hue.
            Doodh ki maatra aur gunwatta dono badhaye, pashu ko tandurust banaye.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={whatsappLink(
                "Hi Krishaan Agro! I'd like to know more about Krishaan Uera Molasses (cattle nutrition / milk improvement)."
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-accent"
            >
              <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="btn-outline">
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>

      {/* benefits */}
      <div className="mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Benefits
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
            🌱 Uera Molasses ke <span className="gradient-text">Fayde</span>
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              className="rounded-2xl border border-brand-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-bold text-brand-900">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-600">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* usage */}
      <div className="mt-20 grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-7 shadow-card">
          <h3 className="font-display text-xl font-bold text-brand-950">
            🐄 Upyog Kaise Karein?
          </h3>
          <ul className="mt-4 space-y-2.5 text-brand-700">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              <span><b>Samanya pashu:</b> 250 se 500 gram pratidin</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              <span><b>Chote / anya pashu:</b> 100 se 200 gram pratidin</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              <span>Chara ya paani me milakar pashu ko khilayein.</span>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-brand-100 bg-white p-7 shadow-card">
          <h3 className="font-display text-xl font-bold text-brand-950">
            ✅ Key Facts
          </h3>
          <ul className="mt-4 space-y-2.5">
            {facts.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-brand-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* details banner */}
      <div className="mt-16 overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-brand-100">
        <Image
          src="/products/uera-details.jpg"
          alt="Krishaan Uera Molasses — benefits and usage details"
          width={1536}
          height={1024}
          sizes="(max-width:1024px) 95vw, 1100px"
          className="h-auto w-full"
        />
      </div>

      {/* CTA */}
      <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-brand-700 to-brand-900 p-8 text-white sm:flex-row sm:p-12">
        <div>
          <h3 className="font-display text-2xl font-bold sm:text-3xl">
            Doodh Badhao, Munafa Badhao! 🥛
          </h3>
          <p className="mt-2 text-brand-100/80">
            Uera Molasses order karne ya jaankari ke liye abhi sampark karein.
          </p>
        </div>
        <a
          href={whatsappLink(
            "Hi Krishaan Agro! I'd like to order / know the price of Krishaan Uera Molasses."
          )}
          target="_blank"
          rel="noreferrer"
          className="btn shrink-0 bg-accent-500 text-white hover:bg-accent-600"
        >
          <MessageCircle className="h-4 w-4" /> Order / Enquire Now
        </a>
      </div>
    </div>
  );
}
