"use client";

import Image from "next/image";
import Link from "next/link";
import { partners, type Partner } from "@/lib/data";
import { Handshake, Leaf } from "lucide-react";

function PartnerCard({ p }: { p: Partner }) {
  const isSupportive = p.tier === "supportive";
  const inner = (
    <div className="flex h-full items-center gap-4 rounded-2xl border border-brand-100 bg-white px-6 py-4 shadow-card transition group-hover:-translate-y-0.5 group-hover:shadow-glow">
      {p.logo && (
        <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-brand-100">
          <Image
            src={p.logo}
            alt={p.name}
            fill
            sizes="56px"
            className={p.fit === "contain" ? "object-contain p-1.5" : "object-cover"}
          />
        </span>
      )}
      <div>
        <span
          className={`mb-1 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
            isSupportive
              ? "bg-violet-50 text-violet-600"
              : "bg-brand-50 text-brand-600"
          }`}
        >
          {isSupportive ? "Supportive Partner" : "Official Partner"}
        </span>
        <p className="font-display text-lg font-bold text-brand-900">{p.name}</p>
        {(p.role || p.location) && (
          <p className="text-sm text-brand-500">{p.role ?? p.location}</p>
        )}
      </div>
    </div>
  );

  if (p.url) {
    return (
      <Link
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${p.name} — visit website`}
        className="group block"
      >
        {inner}
      </Link>
    );
  }
  return <div className="group">{inner}</div>;
}

export default function TrustMarquee() {
  // With only a few partners, show one clean row instead of a marquee
  if (partners.length < 3) {
    return (
      <section className="border-y border-brand-100 bg-white/60 py-10">
        <div className="container-x flex flex-col items-center gap-6">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            <Handshake className="h-4 w-4 text-accent-400" />
            Our Partners
          </p>
          <div className="flex flex-wrap items-stretch justify-center gap-6">
            {partners.map((p) => (
              <PartnerCard key={p.name} p={p} />
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
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-brand-100">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      sizes="40px"
                      className={p.fit === "contain" ? "object-contain p-1" : "object-cover"}
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
