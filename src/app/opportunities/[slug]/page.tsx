import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { opportunities } from "@/lib/data";
import PageHeader from "@/components/ui/PageHeader";
import OpportunityDetail from "./OpportunityDetail";

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
  return {
    title: `${o.title} | Krishaan Agro Opportunities`,
    description: o.tagline,
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

  return (
    <>
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
