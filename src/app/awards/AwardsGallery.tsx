"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Award, Calendar, Trophy, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { awards, type AwardItem } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["All", "Award", "Event", "Recognition"] as const;

export default function AwardsGallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<AwardItem | null>(null);

  const visible =
    active === "All" ? awards : awards.filter((a) => a.category === active);

  return (
    <section className="container-x py-16">
      {/* filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "relative rounded-full px-5 py-2.5 text-sm font-semibold transition",
              active === f
                ? "text-white"
                : "border border-brand-200 bg-white text-brand-700 hover:bg-brand-50"
            )}
          >
            {active === f && (
              <motion.span
                layoutId="award-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-600 to-brand-700"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-1.5">
              {f === "All" && <Trophy className="h-3.5 w-3.5" />}
              {f}
              {f !== "All" && (
                <span
                  className={cn(
                    "rounded-full px-1.5 text-[10px] font-bold",
                    active === f
                      ? "bg-white/20"
                      : "bg-brand-100 text-brand-600"
                  )}
                >
                  {awards.filter((a) => a.category === f).length}
                </span>
              )}
            </span>
          </button>
        ))}
      </div>

      {/* masonry-style gallery */}
      <motion.div layout className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((a, i) => (
          <motion.button
            layout
            key={a.title}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            onClick={() => setSelected(a)}
            className={cn(
              "group relative overflow-hidden rounded-3xl bg-brand-900 text-left shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow",
              a.tall ? "row-span-2 aspect-[3/4.5]" : "aspect-[3/2.2]"
            )}
          >
            <Image
              src={a.image}
              alt={a.title}
              fill
              sizes="(max-width:768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            {/* category chip */}
            <span
              className={cn(
                "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-soft",
                a.category === "Award"
                  ? "bg-accent-500"
                  : a.category === "Event"
                    ? "bg-brand-600"
                    : "bg-brand-800"
              )}
            >
              {a.category}
            </span>

            {/* shine sweep */}
            <div className="absolute inset-y-0 w-1/3 -translate-x-[150%] -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[350%]" />

            <div className="absolute inset-x-0 bottom-0 p-4 text-white [text-shadow:_0_1px_8px_rgba(0,0,0,0.9)]">
              <p className="flex items-center gap-1.5 text-[11px] font-bold text-accent-300">
                <Calendar className="h-3 w-3" /> {a.year}
              </p>
              <h3 className="mt-0.5 font-display text-sm font-bold leading-snug sm:text-base">
                {a.title}
              </h3>
              <p className="mt-0.5 truncate text-[11px] text-white/80">
                {a.org}
              </p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/85 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 24 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-accent-500"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-[16/10] bg-brand-900">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  sizes="(max-width:768px) 95vw, 672px"
                  className="object-cover"
                />
              </div>
              <div className="flex items-start gap-4 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-soft">
                  <Award className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-accent-600">
                    {selected.category} • {selected.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-brand-900">
                    {selected.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-600">{selected.org}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
