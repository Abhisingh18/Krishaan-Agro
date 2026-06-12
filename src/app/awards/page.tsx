import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Stats from "@/components/home/Stats";
import Achievements from "@/components/home/Achievements";
import AwardsGallery from "./AwardsGallery";

export const metadata: Metadata = {
  title: "Awards & Gallery — Krishaan Agro",
  description:
    "Awards, recognitions and memorable moments from Krishaan Agro's journey of empowering Indian agriculture.",
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
      <Achievements />
    </>
  );
}
