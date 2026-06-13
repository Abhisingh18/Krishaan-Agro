import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { opportunities } from "@/lib/data";
import PageHeader from "@/components/ui/PageHeader";
import OpportunityDetail from "./OpportunityDetail";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return opportunities.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const o = opportunities.find((x) => x.slug === slug);
  if (!o) return { title: "Opportunity not found" };
  const path = `/opportunities/${o.slug}`;
  return {
    title: `${o.title} — Opportunities`,
    description: o.tagline,
    alternates: { canonical: path },
    openGraph: {
      title: o.title,
      description: o.tagline,
      url: path,
      type: "article",
      images: [{ url: o.image, alt: o.title }],
    },
  };
}

export default async function OpportunityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const o = opportunities.find((x) => x.slug === slug);
  if (!o) notFound();

  const path = `/opportunities/${o.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Opportunities", path: "/#opportunities" },
          { name: o.title, path },
        ])}
      />
      <PageHeader
        title={o.title}
        subtitle={o.org}
        crumb={[
          { label: "Home", href: "/" },
          { label: "Opportunities", href: "/#opportunities" },
          { label: o.category },
        ]}
      />
      <OpportunityDetail opportunity={o} />
    </>
  );
}
