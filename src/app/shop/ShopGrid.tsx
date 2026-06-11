"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ShopGrid() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="container-x py-16">
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active === c
                ? "text-white"
                : "border border-brand-200 bg-white text-brand-700 hover:bg-brand-50"
            }`}
          >
            {active === c && (
              <motion.span
                layoutId="shop-pill"
                className="absolute inset-0 rounded-full bg-brand-600"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <motion.div
            layout
            key={p.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <ProductCard product={p} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
