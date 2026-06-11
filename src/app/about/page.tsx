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
import { Sprout, Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Krishaan Agro",
  description:
    "Learn about Krishaan Agro's mission to empower Indian farmers with smart farming, urban gardening and assured markets.",
};

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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-glow">
              <Image
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1000&q=80"
                alt="Krishaan Agro story"
                fill
                sizes="(max-width:1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={
                <>
                  Rooted in soil, <span className="gradient-text">driven</span> by
                  innovation
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
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To make Indian agriculture profitable, sustainable and respected through technology and assured markets.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "A future where every farmer and urban grower has access to modern, eco-friendly cultivation.",
            },
            {
              icon: Sprout,
              title: "Our Values",
              desc: "Trust, transparency, sustainability and an unwavering commitment to the farming community.",
            },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-brand-100 bg-white p-7 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-brand-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600/80">
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
