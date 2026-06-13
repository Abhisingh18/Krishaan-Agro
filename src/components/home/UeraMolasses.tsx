"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";

const photos = [
  { src: "/products/uera-showcase.jpg", w: 1570, h: 1002 },
  { src: "/products/uera-details.jpg", w: 1536, h: 1024 },
];

export default function UeraMolasses() {
  return (
    <section
      id="uera-molasses"
      className="relative scroll-mt-24 overflow-hidden bg-sand/50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Featured Product"
          title={
            <>
              Krishaan <span className="gradient-text">Uera Molasses</span>
            </>
          }
          subtitle="Doodh badhao, munafa badhao, pashu ko swasth banao — cattle ke liye natural nutrition aur energy ka asardar solution."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href="/products/uera-molasses"
                className="group block overflow-hidden rounded-[2rem] bg-white shadow-glow ring-1 ring-brand-100"
              >
                <Image
                  src={p.src}
                  alt="Krishaan Uera Molasses"
                  width={p.w}
                  height={p.h}
                  sizes="(max-width:1024px) 90vw, 45vw"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
