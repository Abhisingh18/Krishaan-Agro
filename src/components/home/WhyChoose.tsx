"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BadgeCheck,
  HandCoins,
  Headset,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: Leaf,
    title: "100% Organic & Tested",
    desc: "Every product is lab-tested and sourced from trusted, sustainable farms.",
  },
  {
    icon: HandCoins,
    title: "Assured Buy-Back",
    desc: "Contract farmers get a guaranteed market and fair price for their harvest.",
  },
  {
    icon: Headset,
    title: "Expert Advisory",
    desc: "Free agronomy guidance and on-field support from our specialists.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    desc: "Fast, reliable delivery with convenient Cash on Delivery option.",
  },
  {
    icon: ShieldCheck,
    title: "Accredited Soil Lab",
    desc: "Nationally accredited testing for accurate, actionable crop reports.",
  },
  {
    icon: BadgeCheck,
    title: "Award-Winning",
    desc: "Recognised as a leading agri-startup for innovation and impact.",
  },
];

export default function WhyChoose() {
  return (
    <section className="container-x py-20 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Image collage */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-glow"
          >
            <Image
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80"
              alt="Krishaan Agro farmers"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-6 -right-4 w-44 rounded-2xl bg-white p-4 shadow-glow sm:w-52"
          >
            <p className="font-display text-3xl font-bold text-brand-700">10+</p>
            <p className="text-xs text-brand-500">
              Years empowering Indian agriculture
            </p>
            <div className="mt-3 h-1.5 w-full rounded-full bg-brand-100">
              <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
            </div>
          </motion.div>
        </div>

        {/* Features */}
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
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-brand-900">{f.title}</h3>
                <p className="mt-1 text-sm text-brand-600/70">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
