"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { Opportunity } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export default function OpportunityDetail({
  opportunity: o,
}: {
  opportunity: Opportunity;
}) {
  return (
    <div className="container-x py-14">
      {/* intro */}
      <div className="mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-700">
          <CalendarClock className="h-3.5 w-3.5" />
          {o.meta}
        </span>
        <p className="mt-5 text-lg leading-relaxed text-brand-800">
          {o.tagline}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {o.link && (
            <a
              href={o.link}
              target="_blank"
              rel="noreferrer"
              className="btn-accent"
            >
              <ExternalLink className="h-4 w-4" /> Apply / Official Info
            </a>
          )}
          <a
            href={whatsappLink(
              `Hi Krishaan Agro! I'd like to know more about the opportunity "${o.title}".`
            )}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
          </a>
        </div>
      </div>

      {/* body paragraphs */}
      <div className="mx-auto mt-10 max-w-3xl space-y-4">
        {o.body.map((p) => (
          <p key={p} className="leading-relaxed text-brand-700">
            {p}
          </p>
        ))}
      </div>

      {/* key points */}
      {o.points && (
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="font-display text-xl font-bold text-brand-950">
            📌 {o.pointsTitle ?? "Highlights"}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {o.points.map((pt, i) => (
              <motion.div
                key={pt}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.07 }}
                className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4 shadow-card"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                <p className="text-sm font-semibold text-brand-900">{pt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* why / secondary list */}
      {o.why && (
        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-brand-950">
            <Sparkles className="h-5 w-5 text-accent-500" />
            {o.whyTitle ?? "Why it matters"}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {o.why.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-brand-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                <span className="leading-relaxed">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* gallery — images shown one below another (line by line), full, no crop */}
      <div className="mx-auto mt-14 max-w-3xl space-y-6">
        {o.gallery.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="overflow-hidden rounded-3xl border border-brand-100 bg-brand-50 shadow-card"
          >
            {/* natural aspect — pura poster dikhta hai, koi crop nahi */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={o.title} className="h-auto w-full" />
          </motion.div>
        ))}
      </div>

      {/* back link */}
      <div className="mx-auto mt-12 max-w-3xl">
        <Link
          href="/#opportunities"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition hover:gap-2.5 hover:text-accent-600"
        >
          <ArrowLeft className="h-4 w-4" /> All Opportunities
        </Link>
      </div>
    </div>
  );
}
