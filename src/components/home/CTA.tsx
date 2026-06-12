"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="container-x py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-accent-500 via-accent-600 to-brand-700 px-8 py-14 text-center text-white shadow-glow sm:px-16 sm:py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-leaf-grid bg-[length:24px_24px] opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Ready to grow with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Whether you&apos;re a farmer, an entrepreneur or a home gardener —
            let&apos;s build something green together. Talk to our experts today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink(
                "Hi Krishaan Agro! I'd like to know more about your services."
              )}
              target="_blank"
              rel="noreferrer"
              className="btn bg-white text-brand-700 hover:bg-brand-50"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="btn bg-brand-900/30 text-white ring-1 ring-white/40 hover:bg-brand-900/50">
              <Phone className="h-4 w-4" /> Call Us
            </a>
            <Link href="/contact" className="btn bg-brand-900 text-white hover:bg-brand-950">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
