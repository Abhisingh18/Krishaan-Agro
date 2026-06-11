import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ShopGrid from "./ShopGrid";

export const metadata: Metadata = {
  title: "Shop — Krishaan Agro Premium Agri Products",
  description:
    "Buy cattle feed, organic inputs, agri machinery and innovative farming products with Cash on Delivery.",
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
