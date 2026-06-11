"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { founder } from "@/lib/data";

export default function Founder() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-25" />
      <div className="pointer-events-none absolute -left-10 top-10 text-[20rem] font-display leading-none text-white/5">
        “
      </div>
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-glow ring-4 ring-white/10">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              sizes="(max-width:1024px) 80vw, 30vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent-500 px-6 py-2.5 text-center shadow-glow">
            <p className="font-bold leading-none">{founder.name}</p>
            <p className="text-xs text-white/80">{founder.role}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="eyebrow border-white/20 bg-white/10 text-white">
            <Quote className="h-3.5 w-3.5 text-accent-400" />
            Founder&apos;s Message
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-snug sm:text-4xl">
            “We don&apos;t just sell products — we grow partnerships.”
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-100/85">
            {founder.message}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/20" />
            <span className="font-display text-2xl italic text-accent-300">
              {founder.name}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
