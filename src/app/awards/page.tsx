import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Stats from "@/components/home/Stats";
import AwardsGallery from "./AwardsGallery";

export const metadata: Metadata = {
  title: "Awards & Gallery",
  description:
    "Awards, recognitions and memorable moments from Krishaan Agro's journey of empowering Indian agriculture.",
  alternates: { canonical: "/awards" },
  openGraph: {
    title: "Awards & Gallery — Krishaan Agro",
    description:
      "Recognitions and milestones from Krishaan Agro's journey of empowering Indian agriculture.",
    url: "/awards",
    type: "website",
  },
};

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        title="Awards & Gallery"
        subtitle="Har award ke peeche hai kisaano ka bharosa — a journey of recognition, milestones and memories."
        crumb={[{ label: "Home", href: "/" }, { label: "Awards & Gallery" }]}
      />
      <AwardsGallery />
      <Stats />
    </>
  );
}
