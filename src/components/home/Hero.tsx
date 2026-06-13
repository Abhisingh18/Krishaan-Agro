"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Sprout,
  Star,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1400&q=80",
    alt: "Aerial view of tractor in green fields",
  },
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=80",
    alt: "Lush green farmland",
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    alt: "Farmer in golden field at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80",
    alt: "Sustainable green agriculture",
  },
  {
    src: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1400&q=80",
    alt: "Fresh farm harvest",
  },
];

const collageImg =
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=700&q=80";

const avatars = [
  "photo-1568602471122-7832951cc4c5",
  "photo-1544723795-3fb6469f5b39",
  "photo-1506794778202-cad84cf45f1d",
  "photo-1531123897727-8f129e1688ce",
];

const miniStats = [
  { value: "12K+", label: "Farmers" },
  { value: "45+", label: "Districts" },
  { value: "4.9★", label: "Rating" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((s) => (s + 1) % heroSlides.length),
      4500
    );
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-[72px]"
    >
      {/* Background mesh + grid */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 bg-leaf-grid bg-[length:26px_26px] opacity-50" />

      {/* Floating blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-accent-300/30 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-x-12 gap-y-16 py-16 lg:grid-cols-2 lg:py-24">
        {/* ---------------- Left copy ---------------- */}
        <motion.div style={{ y, opacity }} className="max-w-xl">
          {/* eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            India&apos;s Trusted Agri-Growth Partner
          </motion.span>

          {/* headline */}
          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.08] text-brand-950 sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.06]">
            <AnimatedLine delay={0.1}>Smart Kheti,</AnimatedLine>{" "}
            <span className="relative inline-block">
              <AnimatedLine delay={0.2}>
                <span className="gradient-text">Zyada Munafa,</span>
              </AnimatedLine>
              <motion.svg
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full"
              >
                <motion.path
                  d="M4 11 C 70 3, 150 3, 296 8"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.9, ease: "easeInOut" }}
                />
              </motion.svg>
            </span>
            <br />
            <AnimatedLine delay={0.3}>Pakka Bazaar</AnimatedLine>{" "}
            <AnimatedLine delay={0.4}>🌾</AnimatedLine>
          </h1>

          {/* subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-base leading-relaxed text-brand-800/70 sm:text-lg"
          >
            Beej se bazaar tak — Krishaan Agro har kadam pe aapke saath.{" "}
            <span className="font-semibold text-brand-800">
              Smart farming technology, expert guidance, premium inputs aur
              guaranteed buy-back
            </span>{" "}
            — sab ek hi chhat ke neeche. Aapki mehnat, hamari guarantee. 🤝
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link href="/shop" className="btn-primary group text-base">
              Shop Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services/smart-farming"
              className="btn-outline group text-base"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-600 text-white transition group-hover:scale-110">
                <Play className="h-3 w-3 fill-white" />
              </span>
              Explore Services
            </Link>
          </motion.div>

          {/* social proof card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 rounded-2xl border border-brand-100 bg-white/70 px-5 py-4 shadow-soft backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((id) => (
                  <span
                    key={id}
                    className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white"
                  >
                    <Image
                      src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=100&q=80`}
                      alt="Happy farmer"
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent-500" />
                  ))}
                </div>
                <p className="mt-0.5 text-xs font-medium text-brand-700">
                  <span className="font-bold text-brand-800">12,000+</span>{" "}
                  kisaan parivaaron ka bharosa
                </p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-brand-200 sm:block" />

            <div className="flex items-center gap-5">
              {miniStats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-xl font-bold leading-none text-brand-800">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-brand-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ---------------- Right visual: layered collage ---------------- */}
        <motion.div
          style={{ y: yImg }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md pb-14 pl-6 sm:pl-10 lg:mr-2"
        >
          {/* glow behind */}
          <div className="absolute inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-400/40 to-accent-400/40 blur-2xl" />

          {/* decorative orbit ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 -z-10"
          >
            <svg viewBox="0 0 200 200" className="h-full w-full">
              <circle
                cx="100"
                cy="100"
                r="96"
                fill="none"
                stroke="#39a035"
                strokeOpacity="0.25"
                strokeWidth="1"
                strokeDasharray="3 8"
              />
              <circle cx="100" cy="4" r="3.5" fill="#f97316" />
            </svg>
          </motion.div>

          {/* MAIN image — auto slideshow with crossfade + ken-burns */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-brand-900 shadow-glow ring-1 ring-white/40">
            <AnimatePresence>
              <motion.div
                key={slide}
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1, ease: "easeInOut" },
                  scale: { duration: 5.5, ease: "easeOut" },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={heroSlides[slide].src}
                  alt={heroSlides[slide].alt}
                  fill
                  priority={slide === 0}
                  sizes="(max-width:1024px) 90vw, 40vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/10" />

            {/* slide indicator dots */}
            <div className="absolute bottom-4 right-4 flex gap-1.5">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    slide === i
                      ? "w-5 bg-accent-400"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* shine sweep on the image */}
            <motion.div
              initial={{ x: "-130%" }}
              animate={{ x: "130%" }}
              transition={{
                duration: 2.4,
                delay: 1.2,
                repeat: Infinity,
                repeatDelay: 6,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
            />

            {/* rotating circular badge */}
            <div className="absolute right-3 top-3">
              <div className="relative grid h-[88px] w-[88px] place-items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="fill-white text-[9px] font-bold uppercase tracking-[0.22em]">
                      <textPath href="#circlePath">
                        Krishaan Agro • Growing Together •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-500 text-white shadow-glow">
                  <Sprout className="h-5 w-5" />
                </span>
              </div>
            </div>

            {/* location chip on image */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/35 px-3.5 py-1.5 text-white backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="text-xs font-semibold">
                Live from our farms 🇮🇳
              </span>
            </div>
          </div>

          {/* OVERLAPPING secondary image — smart greenhouse */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-2 -left-1 w-44 sm:-left-2 sm:w-52"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-900 shadow-glow ring-4 ring-cream"
            >
              <Image
                src={collageImg}
                alt="Hydroponic greenhouse technology"
                fill
                sizes="220px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Floating live-farm video card top-left */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-6 w-28 sm:left-0 sm:w-32"
          >
            {/* native aspect + object-contain — pura video frame dikhta hai, kahin se nahi katta */}
            <div className="relative aspect-[360/797] overflow-hidden rounded-2xl bg-brand-950 shadow-glow ring-4 ring-cream">
              <video
                src="/hero/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Yield-growth stat card */}
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-[42%] w-40 rounded-2xl bg-white/90 p-4 shadow-glow backdrop-blur sm:-right-4"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-brand-600">
                <TrendingUp className="h-4 w-4" />
              </span>
              <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-600">
                +15%
              </span>
            </div>
            <p className="mt-2 text-xs font-bold text-brand-900">Yield Growth</p>
            <div className="mt-2 flex h-10 items-end gap-1">
              {[40, 55, 45, 70, 60, 85].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  className="flex-1 rounded-full bg-gradient-to-t from-brand-500 to-accent-400"
                />
              ))}
            </div>
          </motion.div>

          {/* Assured buy-back chip */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-2 right-0 flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-white shadow-glow sm:right-2"
          >
            <ShieldCheck className="h-4 w-4" />
            <span className="text-sm font-semibold">Assured Buy-Back</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}
