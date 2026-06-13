"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const TOTAL = 31;
const photos = Array.from({ length: TOTAL }, (_, i) => `/gallery/g${i + 1}.jpg`);

export default function AwardsGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = useCallback(
    () =>
      setSelected((s) => (s === null ? s : (s - 1 + TOTAL) % TOTAL)),
    []
  );
  const next = useCallback(
    () => setSelected((s) => (s === null ? s : (s + 1) % TOTAL)),
    []
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
      {/* video on top */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-14 max-w-4xl"
      >
        <div className="overflow-hidden rounded-[2rem] bg-brand-950 shadow-glow ring-1 ring-white/20">
          <video
            src="/awards/awards-video.mp4"
            controls
            playsInline
            preload="metadata"
            className="h-auto w-full"
          />
        </div>
        <p className="mt-4 text-center text-sm font-semibold text-brand-600">
          🏆 Krishi Jagran — Millionaire Farmer of India 2024
        </p>
      </motion.div>

      {/* photos below — masonry: natural aspect ratio, no cropping, no repeats */}
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {photos.map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            onClick={() => setSelected(i)}
            aria-label={`Open photo ${i + 1}`}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-brand-100 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Krishaan Agro moment ${i + 1}`}
              loading="lazy"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
            />
            {/* hover overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            {/* zoom hint */}
            <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-brand-700 opacity-0 shadow-soft transition duration-500 group-hover:opacity-100">
              <Camera className="h-4 w-4" />
            </span>
          </motion.button>
        ))}
      </div>

      {/* lightbox with prev/next */}
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
              className="relative w-full max-w-4xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-brand-900 shadow-2xl ring-1 ring-white/20">
                <Image
                  src={photos[selected]}
                  alt={`Krishaan Agro moment ${selected + 1}`}
                  fill
                  sizes="(max-width:768px) 95vw, 896px"
                  className="object-contain"
                />
              </div>

              {/* controls */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute -top-3 right-0 grid h-11 w-11 -translate-y-full place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-accent-500"
              >
                <X className="h-5 w-5" />
              </button>
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-brand-600 sm:-left-16 sm:bg-white/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-brand-600 sm:-right-16 sm:bg-white/10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <p className="mt-4 text-center text-sm font-semibold text-white/70">
                {selected + 1} / {TOTAL} • Krishaan Agro Moments
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
