import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PatentsGallery from "@/components/Patent/PatentsGallery";

export const metadata: Metadata = {
  title: "Patents & Designs",
  description:
    "Government-certified patents and registered designs behind Krishaan Agro's innovations — granted across India and the UK.",
  alternates: { canonical: "/patents" },
  openGraph: {
    title: "Patents & Designs — Krishaan Agro",
    description:
      "Government-certified patents and registered designs powering Krishaan Agro's agri-innovation.",
    url: "/patents",
    type: "website",
  },
};

export default function PatentsPage() {
  return (
    <>
      <PageHeader
        title="Patents & Designs"
        subtitle="Innovation jo certified hai — our granted patents and registered designs across India and the UK."
        crumb={[{ label: "Home", href: "/" }, { label: "Patents & Designs" }]}
      />
      <PatentsGallery />
    </>
  );
}
