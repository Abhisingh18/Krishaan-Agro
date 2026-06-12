import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, itemSlug } from "@/lib/data";
import PageHeader from "@/components/ui/PageHeader";
import ItemDetail from "./ItemDetail";

export function generateStaticParams() {
  return categories.flatMap((c) =>
    c.items.map((it) => ({ slug: c.slug, item: itemSlug(it.name) }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; item: string }>;
}): Promise<Metadata> {
  const { slug, item } = await params;
  const cat = categories.find((c) => c.slug === slug);
  const it = cat?.items.find((x) => itemSlug(x.name) === item);
  if (!cat || !it) return { title: "Service not found" };
  return {
    title: `${it.name} — ${cat.title} | Krishaan Agro`,
    description: it.desc,
  };
}

export default async function ServiceItemPage({
  params,
}: {
  params: Promise<{ slug: string; item: string }>;
}) {
  const { slug, item } = await params;
  const cat = categories.find((c) => c.slug === slug);
  const it = cat?.items.find((x) => itemSlug(x.name) === item);
  if (!cat || !it) notFound();

  return (
    <>
      <PageHeader
        title={it.name}
        subtitle={it.desc}
        crumb={[
          { label: "Home", href: "/" },
          { label: cat.title, href: `/services/${cat.slug}` },
          { label: it.name },
        ]}
      />
      <ItemDetail category={cat} item={it} />
    </>
  );
}
