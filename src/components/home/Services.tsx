"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";
import SectionHeading from "../ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <section id="services" className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="What We Do"
        title={
          <>
            Our <span className="gradient-text">Services</span>
          </>
        }
        subtitle="A complete agriculture ecosystem — explore the solution that fits your land, your city or your business."
      />

      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {categories.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-glow"
          >
            <Link
              href={`/services/${c.slug}`}
              className="absolute inset-0 z-10"
              aria-label={`Explore ${c.title}`}
            />

            {/* top gradient line on hover */}
            <span
              className={cn(
                "absolute inset-x-0 top-0 z-[5] h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
                c.accent === "accent"
                  ? "bg-gradient-to-r from-accent-400 to-accent-600"
                  : "bg-gradient-to-r from-brand-400 to-brand-600"
              )}
            />

            {/* square image */}
            <div className="relative aspect-square overflow-hidden bg-brand-900">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width:1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* shine sweep on hover */}
              <div className="absolute inset-y-0 w-1/3 -translate-x-[150%] -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-[350%]" />
              {/* count chip */}
              <span
                className={cn(
                  "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-soft",
                  c.accent === "accent" ? "bg-accent-500" : "bg-brand-600"
                )}
              >
                {c.items.length} solutions
              </span>
              {/* corner arrow */}
              <span
                className={cn(
                  "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-white opacity-0 shadow-glow transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45",
                  c.accent === "accent" ? "bg-accent-500" : "bg-brand-600"
                )}
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            {/* text box — solid white, always readable */}
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <p
                className={cn(
                  "text-[10px] font-bold uppercase tracking-wider sm:text-[11px]",
                  c.accent === "accent" ? "text-accent-600" : "text-brand-600"
                )}
              >
                {c.tagline}
              </p>
              <h3 className="mt-1 font-display text-base font-extrabold leading-snug text-brand-950 sm:text-lg">
                {c.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-brand-600/80 sm:text-sm">
                {c.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-brand-700 transition-all group-hover:gap-2.5 group-hover:text-accent-600 sm:text-sm">
                Explore{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
