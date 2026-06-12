"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/data";
import { whatsappLink, cn } from "@/lib/utils";
import GalleryMarquee from "@/components/home/GalleryMarquee";
import { Camera } from "lucide-react";

export default function ServiceItems({ category }: { category: Category }) {
  return (
    <div className="container-x py-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card card-hover"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span
                className={cn(
                  "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-white opacity-0 transition group-hover:opacity-100",
                  category.accent === "accent" ? "bg-accent-500" : "bg-brand-600"
                )}
              >
                <Check className="h-4 w-4" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-bold text-brand-900">
                {item.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-600/80">
                {item.desc}
              </p>
              <a
                href={whatsappLink(
                  `Hi Krishaan Agro! I'm interested in "${item.name}" under ${category.title}. Please share details.`
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition group-hover:gap-2 hover:text-accent-600"
              >
                Enquire now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Real project gallery */}
      {category.gallery && category.gallery.length > 0 && (
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
              <Camera className="h-3.5 w-3.5 text-accent-500" />
              Hamare Real Projects
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
              Kaam jo <span className="gradient-text">khud bolta hai</span>
            </h2>
            {category.galleryNote && (
              <p className="mt-4 leading-relaxed text-brand-700/80">
                {category.galleryNote}
              </p>
            )}
          </div>
          <GalleryMarquee photos={category.gallery} />
        </div>
      )}

      {/* CTA band */}
      <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-brand-700 to-brand-900 p-8 text-white sm:flex-row sm:p-12">
        <div>
          <h3 className="font-display text-2xl font-bold sm:text-3xl">
            Need help choosing the right {category.title.toLowerCase()} solution?
          </h3>
          <p className="mt-2 text-brand-100/80">
            Our experts offer a free consultation tailored to your needs.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <a
            href={whatsappLink(
              `Hi Krishaan Agro! I'd like a free consultation about ${category.title}.`
            )}
            target="_blank"
            rel="noreferrer"
            className="btn bg-accent-500 text-white hover:bg-accent-600"
          >
            <MessageCircle className="h-4 w-4" /> Free Consultation
          </a>
          <Link href="/contact" className="btn bg-white text-brand-700 hover:bg-brand-50">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
