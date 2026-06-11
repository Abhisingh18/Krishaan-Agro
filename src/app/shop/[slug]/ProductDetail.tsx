"use client";

import { motion } from "framer-motion";
import { Check, Minus, Plus, ShoppingBag, Star, Truck, ShieldCheck, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { whatsappLink } from "@/lib/utils";
import type { Product } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="container-x py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square overflow-hidden rounded-[2rem] shadow-glow"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width:1024px) 90vw, 45vw"
            className="object-cover"
          />
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-4 py-1.5 text-sm font-bold text-white">
              {product.badge}
            </span>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="eyebrow">{product.category}</span>
          <h1 className="mt-4 font-display text-3xl font-bold text-brand-950 sm:text-4xl">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1 text-accent-500">
              <Star className="h-4 w-4 fill-accent-500" />
              <span className="font-bold text-brand-800">{product.rating}</span>
            </span>
            <span className="text-brand-400">• In stock</span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700">
              {product.unit}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-4 py-1.5 text-sm font-bold text-accent-600">
              Best price on enquiry
            </span>
          </div>

          <p className="mt-5 leading-relaxed text-brand-700">
            {product.description}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-brand-800">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-100 text-brand-600">
                  <Check className="h-3 w-3" />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1 rounded-full border border-brand-200 bg-white p-1.5">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-brand-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-bold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-brand-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() =>
                add(
                  {
                    id: product.id,
                    slug: product.slug,
                    name: product.name,
                    price: product.price,
                    unit: product.unit,
                    image: product.image,
                  },
                  qty
                )
              }
              className="btn-primary flex-1 text-base sm:flex-none"
            >
              <ShoppingBag className="h-5 w-5" /> Add to Cart
            </button>
            <a
              href={whatsappLink(
                `Hi! I'm interested in ${product.name} (${product.unit}). Please share the best price.`
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-accent text-base"
            >
              <MessageCircle className="h-5 w-5" /> Order Now
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-brand-50 p-4">
              <Truck className="h-6 w-6 text-brand-600" />
              <div>
                <p className="text-sm font-semibold text-brand-900">
                  Cash on Delivery
                </p>
                <p className="text-xs text-brand-500">Pay when you receive</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-brand-50 p-4">
              <ShieldCheck className="h-6 w-6 text-brand-600" />
              <div>
                <p className="text-sm font-semibold text-brand-900">
                  Quality Assured
                </p>
                <p className="text-xs text-brand-500">Lab-tested products</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl font-bold text-brand-900">
            You may also like
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
