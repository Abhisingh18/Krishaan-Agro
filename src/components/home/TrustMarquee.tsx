"use client";

import { partners } from "@/lib/data";
import { Leaf } from "lucide-react";

export default function TrustMarquee() {
  const list = [...partners, ...partners];
  return (
    <section className="border-y border-brand-100 bg-white/60 py-6">
      <div className="container-x flex flex-col items-center gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
          Trusted by partners across India
        </p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12">
            {list.map((p, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-lg font-bold text-brand-700/60"
              >
                <Leaf className="h-4 w-4 text-accent-400" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
