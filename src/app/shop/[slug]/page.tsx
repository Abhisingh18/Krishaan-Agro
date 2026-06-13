import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/lib/data";
import PageHeader from "@/components/ui/PageHeader";
import ProductDetail from "./ProductDetail";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, productSchema } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product not found" };
  const path = `/shop/${product.slug}`;
  return {
    title: product.name,
    description: product.short,
    alternates: { canonical: path },
    openGraph: {
      title: `${product.name} — Krishaan Agro`,
      description: product.short,
      url: path,
      type: "website",
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  const fill = products.filter((p) => p.id !== product.id).slice(0, 4);
  const finalRelated = related.length >= 2 ? related : fill;

  const path = `/shop/${product.slug}`;

  return (
    <>
      <JsonLd
        data={[
          productSchema(product, path),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: product.name, path },
          ]),
        ]}
      />
      <PageHeader
        title={product.name}
        crumb={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: product.category },
        ]}
      />
      <ProductDetail product={product} related={finalRelated} />
    </>
  );
}
