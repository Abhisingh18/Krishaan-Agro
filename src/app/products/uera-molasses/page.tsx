import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import UeraMolassesDetail from "./UeraMolassesDetail";

export const metadata: Metadata = {
  title: "Krishaan Uera Molasses — Natural Cattle Nutrition",
  description:
    "Krishaan Uera Molasses — dudh utpadan badhane ka prakritik aur asardar solution. Milk yield, base fat & SNF, immunity aur animal health improve kare.",
  alternates: { canonical: "/products/uera-molasses" },
  openGraph: {
    title: "Krishaan Uera Molasses — Natural Cattle Nutrition",
    description:
      "Natural cattle nutrition that boosts milk yield, fat & SNF, immunity and animal health.",
    url: "/products/uera-molasses",
    type: "website",
  },
};

export default function UeraMolassesPage() {
  return (
    <>
      <PageHeader
        title="Krishaan Uera Molasses"
        subtitle="Doodh badhao, munafa badhao, pashu ko swasth banao — cattle ke liye natural nutrition aur energy ka asardar solution."
        crumb={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/#uera-molasses" },
          { label: "Uera Molasses" },
        ]}
      />
      <UeraMolassesDetail />
    </>
  );
}
