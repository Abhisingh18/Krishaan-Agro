"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BadgeCheck,
  HandCoins,
  Headset,
  Leaf,
  ShieldCheck,
  Sprout,
  Truck,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: Leaf,
    title: "100% Organic & Tested",
    desc: "Every product is lab-tested and sourced from trusted, sustainable farms.",
    gradient: "from-brand-500 to-brand-700",
  },
  {
    icon: HandCoins,
    title: "Assured Buy-Back",
    desc: "Contract farmers get a guaranteed market and fair price for their harvest.",
    gradient: "from-accent-400 to-accent-600",
  },
  {
    icon: Headset,
    title: "Expert Advisory",
    desc: "Free agronomy guidance and on-field support from our specialists.",
    gradient: "from-brand-400 to-brand-600",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    desc: "Fast, reliable delivery with convenient Cash on Delivery option.",
    gradient: "from-accent-500 to-orange-700",
  },
  {
    icon: ShieldCheck,
    title: "Accredited Soil Lab",
    desc: "Nationally accredited testing for accurate, actionable crop reports.",
    gradient: "from-brand-600 to-brand-800",
  },
  {
    icon: BadgeCheck,
    title: "Award-Winning",
    desc: "Recognised as a leading agri-startup for innovation and impact.",
    gradient: "from-accent-400 to-brand-600",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* soft background decor */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl" />

      <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* ---------- Image collage ---------- */}
        <div className="relative pb-10 pr-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative aspect-[5/6] overflow-hidden rounded-[2rem] bg-brand-900 shadow-glow ring-1 ring-white/50"
          >
            <Image
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80"
              alt="Krishaan Agro farmers"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />

            {/* floating verified chip on image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-glow backdrop-blur"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-600 text-white">
                <BadgeCheck className="h-4 w-4" />
              </span>
              <span className="text-xs font-bold text-brand-900">
                Trusted Agri Partner
              </span>
            </motion.div>

            {/* bottom-left quote chip */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur-md">
              <p className="text-sm font-semibold text-white [text-shadow:_0_1px_6px_rgba(0,0,0,0.6)]">
                “Hum ugaate nahi, rishte banate hain.” 🌾
              </p>
              <p className="mt-1 text-[11px] text-white/75">
                — Team Krishaan Agro
              </p>
            </div>
          </motion.div>

          {/* 10+ years floating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -right-0 bottom-0 w-48 rounded-3xl border border-brand-100 bg-white p-5 shadow-glow sm:w-56"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
              <Sprout className="h-5 w-5" />
            </span>
            <p className="mt-3 font-display text-4xl font-bold leading-none">
              <span className="gradient-text">10+</span>
            </p>
            <p className="mt-1.5 text-xs font-medium leading-snug text-brand-600">
              Years empowering Indian agriculture
            </p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-brand-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
              />
            </div>
          </motion.div>
        </div>

        {/* ---------- Features ---------- */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Krishaan Agro"
            title={
              <>
                Built on trust, <span className="gradient-text">grown</span> with
                care
              </>
            }
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-brand-100 bg-white p-5 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-glow"
              >
                {/* hover gradient wash */}
                <span
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]`}
                />
                {/* top accent line on hover */}
                <span
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${f.gradient} transition-transform duration-500 group-hover:scale-x-100`}
                />
                {/* ghost number */}
                <span className="pointer-events-none absolute -right-1 -top-3 font-display text-6xl font-bold text-brand-50 transition-colors group-hover:text-brand-100/70">
                  0{i + 1}
                </span>

                <span
                  className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.gradient} text-white shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-4 font-bold text-brand-900">
                  {f.title}
                </h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-brand-600/75">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
