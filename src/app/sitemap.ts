import type { MetadataRoute } from "next";
import { categories, products } from "@/lib/data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krishaanagro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/shop", "/awards", "/about", "/contact"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const servicePages = categories.map((c) => ({
    url: `${BASE_URL}/services/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const productPages = products.map((p) => ({
    url: `${BASE_URL}/shop/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...productPages];
}
