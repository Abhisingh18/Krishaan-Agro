import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Stats from "@/components/home/Stats";
import Founder from "@/components/home/Founder";
import Achievements from "@/components/home/Achievements";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Sprout, Target, Eye, Award, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Krishaan Agro's mission to empower Indian farmers with smart farming, urban gardening and assured markets.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Krishaan Agro",
    description:
      "Our mission to make Indian agriculture profitable, sustainable and respected.",
    url: "/about",
    type: "website",
  },
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To make Indian agriculture profitable, sustainable and respected through technology and assured markets.",
    gradient: "from-brand-500 to-brand-700",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A future where every farmer and urban grower has access to modern, eco-friendly cultivation.",
    gradient: "from-accent-400 to-accent-600",
  },
  {
    icon: Sprout,
    title: "Our Values",
    desc: "Trust, transparency, sustainability and an unwavering commitment to the farming community.",
    gradient: "from-brand-400 to-accent-500",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Krishaan Agro"
        subtitle="A decade of growing India — empowering farmers with technology, trade and trust."
        crumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="container-x py-16 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Image collage */}
          <Reveal direction="right">
            <div className="relative pb-12 pr-8">
              {/* main image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-brand-900 shadow-glow ring-1 ring-white/40">
                <Image
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1000&q=80"
                  alt="Krishaan Agro story"
                  fill
                  sizes="(max-width:1024px) 90vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
                {/* est. chip */}
                <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/35 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                  <Leaf className="h-3.5 w-3.5 text-accent-300" />
                  Growing since day one 🇮🇳
                </span>
              </div>

              {/* overlapping secondary image */}
              <div className="absolute -bottom-0 left-6 w-40 animate-float sm:w-48">
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-brand-900 shadow-glow ring-4 ring-cream">
                  <Image
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80"
                    alt="Farmers of Krishaan Agro"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* floating experience badge */}
              <div className="absolute -right-0 bottom-10 w-44 rounded-3xl bg-white p-5 shadow-glow">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white">
                  <Award className="h-5 w-5" />
                </span>
                <p className="mt-3 font-display text-3xl font-bold text-brand-700">
                  10+
                </p>
                <p className="text-xs font-medium text-brand-500">
                  Years empowering Indian agriculture
                </p>
                <div className="mt-3 h-1.5 w-full rounded-full bg-brand-100">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Story copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={
                <>
                  Rooted in soil, <span className="gradient-text">driven</span>{" "}
                  by innovation
                </>
              }
            />
            <Reveal delay={0.2}>
              <p className="mt-5 leading-relaxed text-brand-700">
                Krishaan Agro began with a simple belief: Indian agriculture
                deserves modern tools, fair markets and respect. What started as
                a small initiative has grown into a complete ecosystem serving
                thousands of farmers across the country.
              </p>
              <p className="mt-4 leading-relaxed text-brand-700">
                Today we span smart farming, urban gardening, contract farming,
                agri machinery, soil testing and market linkage — all under one
                trusted roof. We don&apos;t just supply inputs; we partner with
                farmers from seed to sale.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  ["12K+", "Farmers"],
                  ["45+", "Districts"],
                  ["5", "Verticals"],
                ].map(([v, l]) => (
                  <div
                    key={l}
                    className="rounded-2xl border border-brand-100 bg-white px-3 py-4 text-center shadow-card transition hover:-translate-y-1 hover:shadow-glow"
                  >
                    <p className="font-display text-2xl font-bold text-brand-700">
                      {v}
                    </p>
                    <p className="text-xs font-medium text-brand-500">{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                {/* top gradient line */}
                <span
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${v.gradient}`}
                />
                {/* big ghost number */}
                <span className="pointer-events-none absolute -right-2 -top-4 bg-gradient-to-br from-brand-300 to-accent-300 bg-clip-text font-display text-8xl font-bold text-transparent">
                  0{i + 1}
                </span>
                <span
                  className={`relative grid h-13 w-13 h-[52px] w-[52px] place-items-center rounded-2xl bg-gradient-to-br ${v.gradient} text-white shadow-soft transition group-hover:scale-110 group-hover:rotate-3`}
                >
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-4 font-display text-xl font-bold text-brand-900">
                  {v.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-brand-600/80">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats />
      <Founder />
      <Achievements />
      <Team />
      <Testimonials />
    </>
  );
}
