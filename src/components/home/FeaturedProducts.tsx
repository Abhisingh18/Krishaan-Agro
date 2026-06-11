"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import ProductCard from "../ProductCard";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function FeaturedProducts() {
  return (
    <section className="bg-sand/60 py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Shop"
            title={
              <>
                Premium <span className="gradient-text">agri products</span>
              </>
            }
            subtitle="Farm-direct quality with Cash on Delivery. From cattle feed to innovative hydroponic kits."
          />
          <Reveal>
            <Link href="/shop" className="btn-outline shrink-0">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
