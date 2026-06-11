
"use client";

import {
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/data";
import { SITE } from "@/lib/utils";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex items-center gap-3 rounded-2xl bg-white/15 p-4 backdrop-blur">
        <CheckCircle2 className="h-8 w-8 shrink-0 text-accent-300" />
        <div>
          <p className="font-bold text-white">Subscribed! 🎉</p>
          <p className="text-sm text-brand-50/80">
            Thank you — you&apos;ll hear from us soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:rounded-full sm:bg-white sm:p-1.5 sm:shadow-soft"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 rounded-full bg-white px-5 py-3 text-sm text-brand-900 shadow-soft outline-none sm:bg-transparent sm:py-2.5 sm:shadow-none"
      />
      <button type="submit" className="btn-accent shrink-0 px-6 py-3 sm:py-2.5">
        Subscribe <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-950 text-brand-100">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-40" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />

      {/* Newsletter / CTA */}
      <div className="container-x relative">
        <div className="relative -mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 p-8 shadow-glow md:p-12">
          {/* decorative */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-leaf-grid bg-[length:22px_22px] opacity-10" />

          <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                <Send className="h-3 w-3 text-accent-300" /> Newsletter
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Grow with Krishaan Agro 🌱
              </h3>
              <p className="mt-2 max-w-md text-sm text-brand-50/85 sm:text-base">
                Farming tips, mandi updates and exclusive offers — straight to
                your inbox. No spam, sirf kaam ki baat.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="container-x relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/20">
              <Image src="/logo.jpeg" alt="Krishaan Agro" fill sizes="48px" className="object-cover" />
            </span>
            <span className="font-display text-lg font-bold text-white">
              Krishaan<span className="text-accent-400">Agro</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-brand-100/80">
            Empowering Indian agriculture with smart farming, urban gardening,
            contract farming and premium agri products. Growing India, together.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Facebook, href: SITE.socials.facebook, label: "Facebook" },
              { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
              { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
              { Icon: Youtube, href: SITE.socials.youtube, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href === "#" ? undefined : "_blank"}
                rel={href === "#" ? undefined : "noreferrer"}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-accent-500"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/services/${c.slug}`}
                  className="text-brand-100/75 transition hover:text-accent-400"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["Shop Products", "/shop"],
              ["About Us", "/about"],
              ["Our Team", "/about#team"],
              ["Achievements", "/about#achievements"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-brand-100/75 transition hover:text-accent-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition hover:bg-white/10">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-500/15 text-accent-400">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="text-sm text-brand-100/90">{SITE.address}</span>
            </li>
            <li>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition hover:bg-white/10"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-500/15 text-accent-400">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-sm text-brand-100/90">
                  {SITE.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 transition hover:bg-white/10"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-500/15 text-accent-400">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all text-sm text-brand-100/90">
                  {SITE.email}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-200/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Krishaan Agro. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-accent-400">🌱</span> for Indian
            farmers
          </p>
        </div>
      </div>
    </footer>
  );
}
