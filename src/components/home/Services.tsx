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
            Five verticals, <span className="gradient-text">one mission</span>
          </>
        }
        subtitle="A complete agriculture ecosystem — explore the solution that fits your land, your city or your business."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-3xl shadow-card card-hover",
              i === 0 && "lg:col-span-2"
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-900">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width:1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* strong dark scrim so white text is always readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
              <span
                className={cn(
                  "absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-soft",
                  c.accent === "accent" ? "bg-accent-500" : "bg-brand-600"
                )}
              >
                {c.items.length} solutions
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 text-white [text-shadow:_0_2px_18px_rgba(0,0,0,0.95),_0_1px_3px_rgba(0,0,0,0.9)]">
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/85">
                {c.tagline}
              </p>
              <h3 className="mt-1 font-display text-xl font-extrabold text-white">
                {c.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm font-semibold text-white">
                {c.description}
              </p>
              <Link
                href={`/services/${c.slug}`}
                className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-white transition group-hover:gap-2"
              >
                Explore <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
