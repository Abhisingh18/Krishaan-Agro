"use client";

import Image from "next/image";
import { partners } from "@/lib/data";
import { Handshake, Leaf } from "lucide-react";

export default function TrustMarquee() {
  // With only a few partners, show a clean static strip instead of a marquee
  if (partners.length < 3) {
    return (
      <section className="border-y border-brand-100 bg-white/60 py-8">
        <div className="container-x flex flex-col items-center gap-5">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            <Handshake className="h-4 w-4 text-accent-400" />
            Official Partnership
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-white px-6 py-4 shadow-card transition hover:shadow-glow"
              >
                {p.logo && (
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-1 ring-brand-100">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                )}
                <div>
                  <p className="font-display text-lg font-bold text-brand-900">
                    {p.name}
                  </p>
                  {p.location && (
                    <p className="text-sm text-brand-500">{p.location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
                key={`${p.name}-${i}`}
                className="flex items-center gap-2.5 text-lg font-bold text-brand-700/60"
              >
                {p.logo ? (
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg ring-1 ring-brand-100">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <Leaf className="h-4 w-4 text-accent-400" />
                )}
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
