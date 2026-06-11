import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Central place for all company contact info.
 * 👉 Replace the placeholder values below with the client's real details.
 */
export const SITE = {
  name: "Krishaan Agro",
  // TODO: replace with real phone number
  phoneDisplay: "+91 99999 99999",
  phoneTel: "+919999999999",
  // TODO: replace with real WhatsApp number (used in cart checkout + chatbot)
  whatsapp: "919999999999",
  // derived from LinkedIn handle krishaanagro.in — confirm with client
  email: "info@krishaanagro.in",
  website: "www.krishaanagro.in",
  // TODO: replace with real address
  address: "Krishaan Agro HQ, India",
  socials: {
    linkedin: "https://www.linkedin.com/company/krishaanagro.in/",
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
} as const;

/** WhatsApp number for orders/enquiries (replace with client's real number). */
export const WHATSAPP_NUMBER = SITE.whatsapp;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
