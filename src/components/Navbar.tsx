"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Leaf, Menu, Phone, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/lib/data";
import { useCart } from "./cart/CartProvider";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
              <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-brand-800 transition hover:bg-brand-100">
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
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-3"
                  >
                    <div className="grid grid-cols-2 gap-2 rounded-3xl border border-brand-100 bg-white p-3 shadow-glow">
                      {categories.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/services/${c.slug}`}
                          className="group flex gap-3 rounded-2xl p-3 transition hover:bg-brand-50"
                        >
                          <span
                            className={cn(
                              "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white",
                              c.accent === "accent"
                                ? "bg-accent-500"
                                : "bg-brand-600"
                            )}
                          >
                            <Leaf className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-brand-900 group-hover:text-brand-700">
                              {c.title}
                            </span>
                            <span className="block text-xs text-brand-500">
                              {c.tagline}
                            </span>
                          </span>
                        </Link>
                      ))}
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
              href="tel:+919999999999"
              className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-brand-800 transition hover:bg-brand-100 xl:flex"
            >
              <Phone className="h-4 w-4 text-brand-600" />
              +91 99999 99999
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
                href="tel:+919999999999"
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
