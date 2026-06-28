import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Krishaan Agro — Smart Farming & Agri Solutions",
    short_name: "Krishaan Agro",
    description:
      "Smart farming, urban gardening, contract farming, soil testing and premium agri products — shop with COD & WhatsApp ordering.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f3",
    theme_color: "#288027",
    lang: "en-IN",
    categories: ["agriculture", "shopping", "business"],
    icons: [
      {
        src: "/logo-square.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-square.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
