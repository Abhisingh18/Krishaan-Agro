"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { events } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";

export default function Events() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) =>
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section className="bg-sand/60 py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Events"
            title={
              <>
                Upcoming <span className="gradient-text">Events</span>
              </>
            }
            subtitle="Agri expos, fairs aur tech events jahan aap humse mil sakte hain."
          />
          {/* arrows */}
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous events"
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-card transition hover:bg-brand-600 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next events"
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-card transition hover:bg-brand-600 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* slider */}
        <div
          ref={scroller}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group w-[290px] shrink-0 snap-start overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow sm:w-[320px]"
            >
              {/* image + date badge */}
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-900">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" />
                {/* date badge */}
                <div className="absolute left-4 top-4 overflow-hidden rounded-2xl bg-white text-center shadow-glow">
                  <p className="px-4 pt-2 font-display text-2xl font-bold leading-none text-brand-700">
                    {e.day}
                  </p>
                  <p className="bg-accent-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    {e.month} {e.year}
                  </p>
                </div>
              </div>

              {/* body */}
              <div className="p-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-700">
                  <CalendarDays className="h-3 w-3 text-accent-500" />
                  {e.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-brand-950">
                  {e.title}
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-brand-500">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-accent-500" />
                  {e.location}
                </p>
                <a
                  href={whatsappLink(
                    `Hi Krishaan Agro! I'd like to know more about "${e.title}" (${e.day} ${e.month} ${e.year}).`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-700 transition-all group-hover:gap-2 hover:text-accent-600"
                >
                  Know more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
