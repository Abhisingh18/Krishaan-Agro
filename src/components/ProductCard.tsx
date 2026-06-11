"use client";

import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./cart/CartProvider";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card"
    >
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-soft">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center gap-1 text-xs text-accent-500">
          <Star className="h-3.5 w-3.5 fill-accent-500" />
          <span className="font-semibold text-brand-800">{product.rating}</span>
          <span className="text-brand-400">• {product.category}</span>
        </div>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-semibold leading-snug text-brand-900 transition group-hover:text-brand-600">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-brand-600/70">
          {product.short}
        </p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {product.unit}
            </span>
            <p className="mt-1.5 text-[11px] font-medium text-accent-600">
              Best price on enquiry
            </p>
          </div>
          <button
            onClick={() =>
              add({
                id: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                unit: product.unit,
                image: product.image,
              })
            }
            className="grid h-11 w-11 place-items-center rounded-full bg-brand-600 text-white shadow-soft transition hover:scale-110 hover:bg-brand-700 active:scale-95"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
