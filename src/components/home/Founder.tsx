"use client";

import { motion } from "framer-motion";
import { Linkedin, MessageCircle, Quote, Sprout } from "lucide-react";
import Image from "next/image";
import { founder } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export default function Founder() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 py-20 text-white sm:py-28">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-leaf-grid bg-[length:26px_26px] opacity-10" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-500/15 blur-3xl" />
      {/* giant ghost quote */}
      <div className="pointer-events-none absolute -top-10 right-8 font-display text-[16rem] leading-none text-white/[0.04] sm:text-[22rem]">
        ”
      </div>
      {/* top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ---------- Photo side ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm pb-8"
        >
          {/* glow ring behind */}
          <div className="absolute inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-400/50 to-accent-500/50 blur-2xl" />

          {/* rotating dashed orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 -z-10"
          >
            <svg viewBox="0 0 200 200" className="h-full w-full">
              <circle
                cx="100"
                cy="100"
                r="97"
                fill="none"
                stroke="#fb923c"
                strokeOpacity="0.35"
                strokeWidth="1"
                strokeDasharray="2 10"
              />
            </svg>
          </motion.div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-900 shadow-glow ring-4 ring-white/15">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              sizes="(max-width:1024px) 80vw, 30vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />

            {/* floating quote badge on photo */}
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-accent-500 text-white shadow-glow"
            >
              <Quote className="h-5 w-5" />
            </motion.span>
          </div>

          {/* name plate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-0 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/15 bg-white/10 p-4 text-center shadow-glow backdrop-blur-xl"
          >
            <p className="font-display text-xl font-bold text-white">
              {founder.name}
            </p>
            <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              {founder.role}
            </p>
            <div className="mt-3 flex justify-center gap-2">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Founder on LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#0a66c2]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink(
                  "Hi Abhishek ji! I'd like to connect regarding Krishaan Agro."
                )}
                target="_blank"
                rel="noreferrer"
                aria-label="Message the founder on WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-brand-500"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------- Message side ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
            <Sprout className="h-3.5 w-3.5 text-accent-400" />
            Founder&apos;s Message
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold leading-snug sm:text-4xl lg:text-[2.6rem]">
            “We don&apos;t just sell products —{" "}
            <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              we grow partnerships.
            </span>
            ”
          </h2>

          <div className="relative mt-7 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <Quote className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-accent-500 p-1.5 text-white" />
            <p className="text-base leading-relaxed text-brand-50/90 sm:text-lg">
              {founder.message}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
              <div className="text-right">
                <p className="font-display text-2xl italic text-accent-300">
                  {founder.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                  {founder.role}, Krishaan Agro
                </p>
              </div>
            </div>
          </div>

          {/* highlight chips */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {["🌱 Sustainability First", "🤝 Farmer Partnerships", "🚜 Modern Tech", "🇮🇳 Growing India"].map(
              (chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur transition hover:border-accent-400/50 hover:bg-white/10"
                >
                  {chip}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
