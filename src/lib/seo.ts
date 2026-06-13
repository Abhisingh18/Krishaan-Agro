/**
 * Central SEO helpers — canonical site URL + JSON-LD structured-data builders.
 * Structured data helps Google show rich results and (importantly) tells Google
 * this is the Aurangabad, Bihar based Krishaan Agro — distinct from same-name firms.
 */
import { SITE } from "@/lib/utils";
import type { Category, Product } from "@/lib/data";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://krishaanagro.com";

/** Build an absolute URL from a site-relative path (e.g. "/shop" -> full URL). */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Organization / LocalBusiness — identifies the real business to Google. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    legalName: "Krishaan Agro",
    url: SITE_URL,
    logo: absoluteUrl("/logo.jpeg"),
    image: absoluteUrl("/logo.jpeg"),
    email: SITE.email,
    telephone: SITE.phoneTel,
    description:
      "Krishaan Agro empowers farmers with smart farming, urban gardening, contract farming, agri machinery, soil testing and assured market linkage.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Govind Bhawan, Veer Kunwar Singh Path, New Area, Behind US Residency",
      addressLocality: "Aurangabad",
      addressRegion: "Bihar",
      postalCode: "824101",
      addressCountry: "IN",
    },
    areaServed: "IN",
    sameAs: ([
      SITE.socials.linkedin,
      SITE.socials.facebook,
      SITE.socials.instagram,
      SITE.socials.youtube,
    ] as string[]).filter((u) => u.startsWith("http")),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneTel,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

/** WebSite schema — enables the Google sitelinks search box. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/shop?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Breadcrumb trail — shows the page hierarchy in search results. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

/** Product schema with price + rating for shop rich results. */
export function productSchema(product: Product, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image.startsWith("http")
      ? product.image
      : absoluteUrl(product.image),
    description: product.description,
    category: product.category,
    brand: { "@type": "Brand", name: SITE.name },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      bestRating: 5,
      ratingCount: 24,
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(path),
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
  };
}

/** Service schema for a service category page. */
export function serviceSchema(cat: Category, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cat.title,
    serviceType: cat.tagline,
    description: cat.description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "IN",
  };
}
