import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ShopGrid from "./ShopGrid";

export const metadata: Metadata = {
  title: "Shop — Premium Agri Products",
  description:
    "Buy cattle feed, organic inputs, agri machinery and innovative farming products with Cash on Delivery & WhatsApp ordering.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop Premium Agri Products — Krishaan Agro",
    description:
      "Cattle feed, organic inputs, agri machinery & innovative farming products. COD available.",
    url: "/shop",
    type: "website",
  },
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        title="Shop Premium Agri Products"
        subtitle="Farm-direct quality, fair prices, Cash on Delivery. Add to cart and order in seconds via WhatsApp."
        crumb={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />
      <ShopGrid />
    </>
  );
}
