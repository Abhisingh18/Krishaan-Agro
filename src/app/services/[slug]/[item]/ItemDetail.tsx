"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Category, ServiceItem } from "@/lib/data";
import { SITE, whatsappLink, cn } from "@/lib/utils";

export default function ItemDetail({
  category,
  item,
}: {
  category: Category;
  item: ServiceItem;
}) {
  return (
    <div className="container-x py-14">
      {/* hero: image + intro */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={cn(
            "relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-white/40",
            item.imageContain ? "bg-white p-3" : "bg-brand-900"
          )}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority
            sizes="(max-width:1024px) 90vw, 45vw"
            className={cn(
              item.imageContain ? "object-contain" : "object-cover",
              item.imagePos
            )}
          />
          <span
            className={cn(
              "absolute left-4 top-4 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-soft",
              category.accent === "accent" ? "bg-accent-500" : "bg-brand-600"
            )}
          >
            {category.title}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-display text-2xl font-bold text-brand-950 sm:text-3xl">
            {item.name} —{" "}
            <span className="gradient-text">kya milta hai aapko?</span>
          </h2>
          <p className="mt-4 leading-relaxed text-brand-700">{item.desc}</p>
          <p className="mt-3 leading-relaxed text-brand-700">
            Krishaan Agro ki expert team aapke saath har kadam par —
            consultation se lekar execution tak. Neeche poori detail hai, aur
            koi bhi sawaal ho toh seedha WhatsApp par puchhein.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={whatsappLink(
                `Hi Krishaan Agro! I'm interested in "${item.name}" (${category.title}). Please share details.`
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-accent"
            >
              <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="btn-outline">
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>

      {/* key highlights */}
      {item.highlights && (
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Key Highlights
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
              🌱 {item.name} <span className="gradient-text">Key Highlights</span>
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {item.highlights.map((h, i) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="group flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-glow"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold leading-snug text-brand-900">
                  {h}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* USPs */}
      {item.usp && (
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-accent-500" />
              What Makes Us Different
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
              🚀 Unique <span className="gradient-text">Value Propositions</span>
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {item.usp.map((u, i) => (
              <motion.div
                key={u}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-5 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600" />
                <Star className="h-6 w-6 fill-accent-400 text-accent-400" />
                <p className="mt-3 text-sm font-bold leading-snug">{u}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* tag cloud (e.g. equipment categories) */}
      {item.tags && (
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
              {item.tagsTitle ?? "Categories"}
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {item.tags.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: (i % 6) * 0.05 }}
                className="rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-bold text-brand-800 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400 hover:bg-accent-50 hover:text-accent-700 hover:shadow-glow"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      {/* project photo gallery */}
      {item.gallery && item.gallery.length > 0 && (
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Gallery
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
              📸 {item.name} <span className="gradient-text">Photos</span>
            </h2>
          </div>
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {item.gallery.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-brand-100 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              >
                {/* natural aspect — pura photo dikhta hai, koi crop nahi */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${item.name} ${i + 1}`}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* expert message / quote */}
      {item.quote && (
        <div className="mt-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 text-center shadow-card sm:p-12">
            <span className="eyebrow justify-center">
              <Sparkles className="h-3.5 w-3.5 text-accent-500" />
              Expert Message
            </span>
            <p className="mt-4 font-display text-2xl font-bold text-brand-950 sm:text-3xl">
              🌟 “{item.quote}”
            </p>
            {item.quoteText && (
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-brand-700">
                {item.quoteText}
              </p>
            )}
          </div>
        </div>
      )}

      {/* CTA band */}
      <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-brand-700 to-brand-900 p-8 text-white sm:flex-row sm:p-12">
        <div>
          <h3 className="font-display text-2xl font-bold sm:text-3xl">
            {item.name} shuru karna hai?
          </h3>
          <p className="mt-2 text-brand-100/80">
            Free consultation ke liye abhi sampark karein — hamari team turant
            guide karegi.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={whatsappLink(
              `Hi Krishaan Agro! I'd like a free consultation about "${item.name}".`
            )}
            target="_blank"
            rel="noreferrer"
            className="btn bg-accent-500 text-white hover:bg-accent-600"
          >
            <MessageCircle className="h-4 w-4" /> Free Consultation
          </a>
          <Link
            href={`/services/${category.slug}`}
            className="btn bg-white text-brand-700 hover:bg-brand-50"
          >
            <ArrowLeft className="h-4 w-4" /> All {category.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
