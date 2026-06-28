"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import SectionHeading from "../ui/SectionHeading";
import FeedbackForm from "./FeedbackForm";

export default function Testimonials() {
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
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-3xl border border-brand-100 bg-white p-6 shadow-card transition hover:shadow-glow"
            >
              <Quote className="h-8 w-8 text-accent-300" />
              <div className="mt-3 flex gap-0.5 text-accent-500">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent-500" />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-700">
                “{t.quote}”
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-brand-100 pt-4">
                <span className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-900">{t.name}</p>
                  <p className="text-xs text-brand-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <FeedbackForm />
      </div>
    </section>
  );
}
