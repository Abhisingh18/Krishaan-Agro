"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import type { FeedbackRow } from "@/lib/db";
import SectionHeading from "../ui/SectionHeading";
import FeedbackForm from "./FeedbackForm";

type Card = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image?: string;
};

const BRAND_GRADIENTS = [
  "from-brand-400 to-brand-600",
  "from-accent-400 to-accent-600",
  "from-emerald-400 to-teal-600",
  "from-lime-500 to-green-600",
];

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function toCard(f: FeedbackRow): Card {
  return {
    name: f.name,
    role: f.role || "Krishaan Agro Customer",
    quote: f.message,
    rating: f.rating,
  };
}

export default function Testimonials() {
  const [feedbacks, setFeedbacks] = useState<Card[]>([]);

  useEffect(() => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data: { feedbacks?: FeedbackRow[] }) => {
        if (data.feedbacks) setFeedbacks(data.feedbacks.map(toCard));
      })
      .catch(() => {});
  }, []);

  // Newest visitor feedback first, then the curated testimonials.
  const cards: Card[] = [...feedbacks, ...(testimonials as Card[])];

  return (
    <section className="bg-sand/60 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Audience Feedback"
          title={
            <>
              Loved by farmers &amp;{" "}
              <span className="gradient-text">gardeners</span>
            </>
          }
          subtitle="Real stories from the people we grow with every day."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="flex flex-col rounded-3xl border border-brand-100 bg-white p-6 shadow-card transition hover:shadow-glow"
            >
              <Quote className="h-8 w-8 text-accent-300" />
              <div className="mt-3 flex gap-0.5 text-accent-500">
                {[...Array(Math.max(1, Math.min(5, t.rating)))].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent-500" />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-700">
                “{t.quote}”
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-brand-100 pt-4">
                {t.image ? (
                  <span className="relative h-11 w-11 overflow-hidden rounded-full">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${
                      BRAND_GRADIENTS[i % BRAND_GRADIENTS.length]
                    } text-sm font-bold text-white`}
                    aria-hidden
                  >
                    {initials(t.name) || "🌱"}
                  </span>
                )}
                <div>
                  <p className="text-sm font-bold text-brand-900">{t.name}</p>
                  <p className="text-xs text-brand-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <FeedbackForm
          onSubmitted={(f) => setFeedbacks((prev) => [toCard(f), ...prev])}
        />
      </div>
    </section>
  );
}
