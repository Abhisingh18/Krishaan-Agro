import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import CartDrawer from "@/components/cart/CartDrawer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationSchema, websiteSchema } from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Krishaan Agro — Smart Farming, Urban Gardening & Agri Solutions",
    template: "%s | Krishaan Agro",
  },
  description:
    "Krishaan Agro empowers farmers with smart farming, urban gardening, contract farming, agri machinery, soil testing and market linkage. Shop premium agri products with COD & WhatsApp ordering.",
  applicationName: "Krishaan Agro",
  authors: [{ name: "Krishaan Agro" }],
  creator: "Krishaan Agro",
  publisher: "Krishaan Agro",
  category: "agriculture",
  keywords: [
    "Krishaan Agro",
    "Krishaan Agro Aurangabad Bihar",
    "agriculture",
    "smart farming",
    "urban gardening",
    "contract farming",
    "hydroponics",
    "agri machinery",
    "soil testing",
    "organic products",
    "cattle feed",
    "agri startup Bihar",
  ],
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Krishaan Agro",
    title: "Krishaan Agro — Growing India, Together",
    description:
      "Smart farming, urban gardening, contract farming & premium agri products.",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Krishaan Agro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishaan Agro — Growing India, Together",
    description:
      "Smart farming, urban gardening, contract farming & premium agri products.",
    images: ["/og-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
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
