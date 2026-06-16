"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Hash,
  Maximize2,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Patent = {
  src: string;
  title: string;
  invention: string;
  kind: "Patent" | "Design";
  authority: string;
  flag: string;
  number: string;
  status: string;
  filed?: string;
  granted: string;
  term?: string;
  inventors: string;
};

const patents: Patent[] = [
  {
    src: "/patents/patent-uvc-prowiper.jpeg",
    title: "UV-C Germs Killer D.C Swiper",
    invention: "ProWiper — UV-C powered surface sanitisation device",
    kind: "Patent",
    authority: "Patent Office, Govt. of India",
    flag: "🇮🇳",
    number: "626771",
    status: "Granted",
    filed: "07 Mar 2020",
    granted: "28 Oct 2023",
    term: "20 years",
    inventors: "Abhishek Kumar",
  },
  {
    src: "/patents/patent-bio-chip-kawaj.jpeg",
    title: "Eco-Friendly Anti-Radiation Bio Chip",
    invention: "KAWAJ — eco-friendly anti-radiation bio chip",
    kind: "Patent",
    authority: "Patent Office, Govt. of India",
    flag: "🇮🇳",
    number: "507921",
    status: "Granted",
    filed: "05 Feb 2020",
    granted: "02 Oct 2023",
    term: "20 years",
    inventors: "Abhishek Kumar, Ashok Chaudhary",
  },
  {
    src: "/patents/design-india-fertilizer-applicator.jpeg",
    title: "Multi Fertilizer & Seed Applicator",
    invention: "Multi fertilizer and seed applicator instrument (Class 15-03)",
    kind: "Design",
    authority: "Patent Office, Govt. of India",
    flag: "🇮🇳",
    number: "419533-001",
    status: "Registered",
    granted: "25 Jul 2024",
    inventors: "Abhishek Kumar",
  },
  {
    src: "/patents/design-uk-trolley-sprayer.jpeg",
    title: "Manual Multi-Nozzle Trolley Sprayer",
    invention:
      "Manual multi-nozzle agricultural trolley sprayer with solar components",
    kind: "Design",
    authority: "Intellectual Property Office, UK",
    flag: "🇬🇧",
    number: "6526244",
    status: "Registered",
    granted: "11 Jun 2026",
    inventors: "Abhishek Kumar, Abhishek Bisht, Gokulprasanth Murugan",
  },
];

export default function PatentsGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const TOTAL = patents.length;

  const prev = useCallback(
    () => setSelected((s) => (s === null ? s : (s - 1 + TOTAL) % TOTAL)),
    [TOTAL]
  );
  const next = useCallback(
    () => setSelected((s) => (s === null ? s : (s + 1) % TOTAL)),
    [TOTAL]
  );

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, prev, next]);

  return (
    <section className="container-x py-16">
      {/* intro strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
          <ShieldCheck className="h-4 w-4 text-brand-600" /> Govt.-certified
          intellectual property
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-600">
          <Award className="h-4 w-4" /> {TOTAL} registrations across India & UK
        </span>
      </motion.div>

      {/* patent cards */}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2 xl:gap-8">
        {patents.map((p, i) => (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
            className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-brand-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
          >
            {/* certificate preview */}
            <button
              onClick={() => setSelected(i)}
              aria-label={`View ${p.title} certificate`}
              className="relative block aspect-[4/3] w-full overflow-hidden bg-brand-50"
            >
              <Image
                src={p.src}
                alt={`${p.title} certificate`}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 600px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              {/* badges */}
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-800 shadow-soft backdrop-blur">
                {p.flag} {p.kind}
              </span>
              <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand-600/95 px-3 py-1 text-xs font-bold text-white shadow-soft backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" /> {p.status}
              </span>
              <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-brand-700 opacity-0 shadow-soft transition duration-500 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>

            {/* details */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-bold leading-snug text-brand-950">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm text-brand-800/70">{p.invention}</p>

              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-brand-100 pt-5 text-sm">
                <div className="flex items-center gap-2">
                  <Hash className="h-4 w-4 shrink-0 text-brand-400" />
                  <div className="min-w-0">
                    <dt className="text-[11px] font-medium uppercase tracking-wide text-brand-400">
                      {p.kind} No.
                    </dt>
                    <dd className="truncate font-bold text-brand-900">
                      {p.number}
                    </dd>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 shrink-0 text-brand-400" />
                  <div className="min-w-0">
                    <dt className="text-[11px] font-medium uppercase tracking-wide text-brand-400">
                      {p.kind === "Patent" ? "Granted" : "Issued"}
                    </dt>
                    <dd className="truncate font-bold text-brand-900">
                      {p.granted}
                    </dd>
                  </div>
                </div>
                <div className="col-span-2 flex items-start gap-2">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <div className="min-w-0">
                    <dt className="text-[11px] font-medium uppercase tracking-wide text-brand-400">
                      Inventor{p.inventors.includes(",") ? "s" : ""}
                    </dt>
                    <dd className="font-semibold text-brand-900">
                      {p.inventors}
                    </dd>
                  </div>
                </div>
              </dl>

              <p className="mt-5 flex items-center gap-1.5 text-xs font-medium text-brand-500">
                <Award className="h-3.5 w-3.5 text-accent-500" />
                {p.authority}
                {p.term ? ` · ${p.term} protection` : ""}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              key={selected}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <div className="relative aspect-[3/4] max-h-[82vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-white/20">
                <Image
                  src={patents[selected].src}
                  alt={`${patents[selected].title} certificate`}
                  fill
                  sizes="(max-width:768px) 95vw, 768px"
                  className="object-contain"
                />
              </div>

              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute -top-3 right-0 grid h-11 w-11 -translate-y-full place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-accent-500"
              >
                <X className="h-5 w-5" />
              </button>
              <button
                onClick={prev}
                aria-label="Previous patent"
                className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-brand-600 sm:-left-16 sm:bg-white/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                aria-label="Next patent"
                className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-brand-600 sm:-right-16 sm:bg-white/10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <p className="mt-4 text-center text-sm font-semibold text-white/70">
                {selected + 1} / {TOTAL} • {patents[selected].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
