import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories } from "@/lib/data";
import PageHeader from "@/components/ui/PageHeader";
import ServiceItems from "./ServiceItems";
import SoilGuide from "./SoilGuide";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: "Service not found" };
  return {
    title: `${cat.title} — Krishaan Agro`,
    description: cat.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  return (
    <>
      <PageHeader
        title={cat.title}
        subtitle={cat.description}
        crumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: cat.title },
        ]}
      />
      <ServiceItems category={cat} />
      {cat.slug === "soil-testing" && <SoilGuide />}
    </>
  );
}
