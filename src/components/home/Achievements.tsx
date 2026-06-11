"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";
import { achievements } from "@/lib/data";
import SectionHeading from "../ui/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="Achievements"
        title={
          <>
            Milestones that <span className="gradient-text">make us proud</span>
          </>
        }
        subtitle="A decade of recognition, growth and real impact on the ground."
      />

      <div className="relative mt-16">
        {/* center line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-brand-300 via-accent-300 to-brand-300 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col gap-5 pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0
                  ? "md:ml-0 md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              {/* dot */}
              <span
                className={`absolute left-4 top-3 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-accent-500 text-white ring-4 ring-cream md:left-auto ${
                  i % 2 === 0 ? "md:-right-4 md:left-auto" : "md:-left-4"
                }`}
              >
                <Award className="h-4 w-4" />
              </span>

              <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width:768px) 90vw, 45vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-brand-900/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {a.year}
                  </span>
                </div>
                <div className="p-5 md:text-left">
                  <h3 className="font-display text-lg font-bold text-brand-900">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-600/70">{a.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
