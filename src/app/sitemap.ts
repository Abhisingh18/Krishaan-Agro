import type { MetadataRoute } from "next";
import { categories, products, opportunities, itemSlug } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/shop",
    "/awards",
    "/about",
    "/contact",
    "/products/uera-molasses",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = categories.map((c) => ({
    url: `${SITE_URL}/services/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Individual sub-service detail pages (e.g. /services/smart-farming/hydroponic-farming)
  const serviceItemPages = categories.flatMap((c) =>
    c.items.map((it) => ({
      url: `${SITE_URL}/services/${c.slug}/${itemSlug(it.name)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const productPages = products.map((p) => ({
    url: `${SITE_URL}/shop/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const opportunityPages = opportunities.map((o) => ({
    url: `${SITE_URL}/opportunities/${o.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...serviceItemPages,
    ...productPages,
    ...opportunityPages,
  ];
}
