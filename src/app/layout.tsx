import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import CartDrawer from "@/components/cart/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://krishaan-agro.vercel.app"
  ),
  title: "Krishaan Agro — Smart Farming, Urban Gardening & Agri Solutions",
  description:
    "Krishaan Agro empowers farmers with smart farming, urban gardening, contract farming, agri machinery, soil testing and market linkage. Shop premium agri products with COD & WhatsApp ordering.",
  keywords: [
    "Krishaan Agro",
    "agriculture",
    "smart farming",
    "urban gardening",
    "contract farming",
    "hydroponics",
    "agri machinery",
    "soil testing",
    "organic products",
  ],
  openGraph: {
    title: "Krishaan Agro — Growing India, Together",
    description:
      "Smart farming, urban gardening, contract farming & premium agri products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <Chatbot />
        </CartProvider>
      </body>
    </html>
  );
}
