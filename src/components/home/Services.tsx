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
              "group relative flex flex-col overflow-hidden rounded-3xl shadow-card ring-1 ring-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow",
              i === 0 && "lg:col-span-2"
            )}
          >
            <Link
              href={`/services/${c.slug}`}
              className="absolute inset-0 z-10"
              aria-label={`Explore ${c.title}`}
            />

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

              {/* shine sweep on hover */}
              <div className="absolute inset-y-0 w-1/3 -translate-x-[150%] -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[350%]" />

              {/* solutions badge — glass */}
              <span
                className={cn(
                  "absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-soft backdrop-blur-md",
                  c.accent === "accent" ? "bg-accent-500/85" : "bg-brand-600/85"
                )}
              >
                <span className="grid h-4 w-4 place-items-center rounded-full bg-white/25 text-[9px]">
                  {c.items.length}
                </span>
                solutions
              </span>

              {/* corner arrow button */}
              <span
                className={cn(
                  "absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-white opacity-0 shadow-glow transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45",
                  c.accent === "accent" ? "bg-accent-500" : "bg-brand-600"
                )}
              >
                <ArrowUpRight className="h-5 w-5" />
              </span>

              {/* bottom accent line */}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
                  c.accent === "accent"
                    ? "bg-gradient-to-r from-accent-400 to-accent-600"
                    : "bg-gradient-to-r from-brand-400 to-brand-600"
                )}
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 text-white [text-shadow:_0_2px_18px_rgba(0,0,0,0.95),_0_1px_3px_rgba(0,0,0,0.9)]">
              <p
                className={cn(
                  "text-[11px] font-bold uppercase tracking-wider",
                  c.accent === "accent" ? "text-accent-300" : "text-brand-200"
                )}
              >
                {c.tagline}
              </p>
              <h3 className="mt-1 font-display text-xl font-extrabold text-white">
                {c.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm font-semibold text-white/95">
                {c.description}
              </p>

              {/* sub-service chips — slide up on hover */}
              <div className="mt-0 grid grid-rows-[0fr] transition-all duration-500 group-hover:mt-3 group-hover:grid-rows-[1fr]">
                <div className="flex flex-wrap gap-1.5 overflow-hidden">
                  {c.items.slice(0, 3).map((it) => (
                    <span
                      key={it.name}
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[10px] font-bold text-white shadow-soft [text-shadow:none]",
                        c.accent === "accent"
                          ? "bg-gradient-to-r from-accent-500 to-accent-600"
                          : "bg-gradient-to-r from-brand-500 to-brand-700"
                      )}
                    >
                      {it.name}
                    </span>
                  ))}
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[10px] font-bold text-white shadow-soft [text-shadow:none]",
                      c.accent === "accent"
                        ? "bg-gradient-to-r from-brand-500 to-brand-700"
                        : "bg-gradient-to-r from-accent-500 to-accent-600"
                    )}
                  >
                    +{c.items.length - 3} more
                  </span>
                </div>
              </div>

              <span className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-white transition-all group-hover:gap-2.5">
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
