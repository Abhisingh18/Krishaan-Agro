"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { opportunities } from "@/lib/data";
import SectionHeading from "../ui/SectionHeading";

export default function Opportunities() {
  // duplicated once for a seamless infinite right-to-left loop
  const loop = [...opportunities, ...opportunities];

  return (
    <section id="opportunities" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Opportunities"
          title={
            <>
              Latest <span className="gradient-text">Opportunities</span>
            </>
          }
          subtitle="Startup programs, incubation, internships aur research openings — kisi bhi card par click karke poori detail dekhein."
        />
      </div>

      {/* right-to-left floating marquee */}
      <div className="group relative mt-14 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max items-stretch gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((o, i) => (
            <Link
              key={`${o.slug}-${i}`}
              href={`/opportunities/${o.slug}`}
              aria-label={o.title}
              className="group/card relative flex w-[260px] shrink-0 flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow sm:w-[300px]"
            >
              {/* full poster — no crop */}
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-50">
                <Image
                  src={o.image}
                  alt={o.title}
                  fill
                  sizes="300px"
                  className="object-contain transition-transform duration-700 group-hover/card:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-soft">
                  {o.category}
                </span>
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-bold leading-snug text-brand-950 line-clamp-2">
                  {o.title}
                </h3>
                <p className="mt-1.5 text-xs font-semibold text-accent-600">
                  {o.meta}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-700 transition-all group-hover/card:gap-2">
                  View details <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
