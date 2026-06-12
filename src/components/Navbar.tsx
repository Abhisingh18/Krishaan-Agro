"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  ShoppingBag,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/lib/data";
import { useCart } from "./cart/CartProvider";
import { cn, SITE, whatsappLink } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Awards", href: "/awards" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(0);
  const { count, open } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-brand-100 bg-cream/85 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-brand-100 shadow-soft transition group-hover:ring-brand-300">
              <Image
                src="/logo.jpeg"
                alt="Krishaan Agro"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-brand-900">
                Krishaan<span className="text-accent-500">Agro</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-500">
                Growing Together
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(0, 2).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-brand-800 transition hover:bg-brand-100"
              >
                {l.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen((o) => !o)}
                aria-expanded={servicesOpen}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-brand-800 transition hover:bg-brand-100"
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.97 }}
                    transition={{ type: "spring", damping: 26, stiffness: 320 }}
                    className="absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-3"
                  >
                    <div className="overflow-hidden rounded-[1.75rem] border border-brand-100 bg-white shadow-glow">
                      <div className="grid grid-cols-[1.1fr_1fr]">
                        {/* Left: category list */}
                        <div className="space-y-1 p-3">
                          {categories.map((c, idx) => (
                            <Link
                              key={c.slug}
                              href={`/services/${c.slug}`}
                              onClick={() => setServicesOpen(false)}
                              onMouseEnter={() => setActiveCat(idx)}
                              className={cn(
                                "group/item flex items-center gap-3 rounded-2xl p-3 transition-all duration-300",
                                activeCat === idx
                                  ? "bg-gradient-to-r from-brand-50 to-accent-50/60 shadow-soft"
                                  : "hover:bg-brand-50/60"
                              )}
                            >
                              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-brand-900">
                                <Image
                                  src={c.image}
                                  alt={c.title}
                                  fill
                                  sizes="48px"
                                  className="object-cover"
                                />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="flex items-center gap-2">
                                  <span className="truncate text-sm font-bold text-brand-900">
                                    {c.title}
                                  </span>
                                  <span
                                    className={cn(
                                      "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold text-white",
                                      c.accent === "accent"
                                        ? "bg-accent-500"
                                        : "bg-brand-600"
                                    )}
                                  >
                                    {c.items.length}
                                  </span>
                                </span>
                                <span className="block truncate text-xs text-brand-500">
                                  {c.tagline}
                                </span>
                              </span>
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 shrink-0 -rotate-90 text-brand-300 transition-all",
                                  activeCat === idx &&
                                    "translate-x-0.5 text-accent-500"
                                )}
                              />
                            </Link>
                          ))}
                        </div>

                        {/* Right: live preview */}
                        <div className="relative m-3 ml-0 overflow-hidden rounded-2xl bg-brand-950">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeCat}
                              initial={{ opacity: 0, scale: 1.06 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.35 }}
                              className="absolute inset-0"
                            >
                              <Image
                                src={categories[activeCat].image}
                                alt={categories[activeCat].title}
                                fill
                                sizes="340px"
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                            </motion.div>
                          </AnimatePresence>
                          <div className="relative flex h-full min-h-[260px] flex-col justify-end p-5 text-white [text-shadow:_0_1px_8px_rgba(0,0,0,0.8)]">
                            <motion.div
                              key={`txt-${activeCat}`}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              <p className="font-display text-lg font-bold">
                                {categories[activeCat].title}
                              </p>
                              <p className="mt-1 line-clamp-2 text-xs text-white/90">
                                {categories[activeCat].description}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {categories[activeCat].items
                                  .slice(0, 3)
                                  .map((it) => (
                                    <span
                                      key={it.name}
                                      className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm"
                                    >
                                      {it.name}
                                    </span>
                                  ))}
                                {categories[activeCat].items.length > 3 && (
                                  <span className="rounded-full bg-accent-500 px-2.5 py-1 text-[10px] font-bold">
                                    +{categories[activeCat].items.length - 3} more
                                  </span>
                                )}
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom CTA strip */}
                      <div className="flex items-center justify-between gap-3 border-t border-brand-100 bg-gradient-to-r from-brand-50 to-accent-50/50 px-5 py-3">
                        <p className="text-xs font-medium text-brand-700">
                          🌱 Not sure which service fits you?{" "}
                          <span className="font-bold">
                            Get a free consultation
                          </span>
                        </p>
                        <a
                          href={whatsappLink(
                            "Hi Krishaan Agro! I'd like a free consultation about your services."
                          )}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-accent shrink-0 px-4 py-2 text-xs"
                        >
                          <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Us
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-brand-800 transition hover:bg-brand-100"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-brand-800 transition hover:bg-brand-100 xl:flex"
            >
              <Phone className="h-4 w-4 text-brand-600" />
              {SITE.phoneDisplay}
            </a>
            <button
              onClick={open}
              className="relative grid h-11 w-11 place-items-center rounded-full bg-brand-600 text-white shadow-soft transition hover:bg-brand-700"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent-500 px-1 text-[11px] font-bold text-white ring-2 ring-cream"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-800 shadow-card lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-brand-950/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-cream p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg font-bold text-brand-900">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-card"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-brand-900 transition hover:bg-brand-100"
                  >
                    {l.label}
                  </Link>
                ))}
                <p className="mt-4 px-4 text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Services
                </p>
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/services/${c.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-brand-800 transition hover:bg-brand-100"
                  >
                    {c.title}
                  </Link>
                ))}
              </nav>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="btn-primary mt-auto w-full"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
