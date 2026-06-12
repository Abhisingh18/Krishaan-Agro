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
  phoneDisplay: "+91 97715 72816",
  phoneTel: "+919771572816",
  // WhatsApp (used in cart checkout + chatbot)
  whatsapp: "919771572816",
  email: "krishaanagro1@gmail.com",
  website: "www.krishaanagro.in",
  address:
    "Govind Bhawan, Veer Kunwar Singh Path, New Area, Behind US Residency, Aurangabad, Bihar - 824101",
  addressShort: "Aurangabad, Bihar - 824101",
  socials: {
    linkedin: "https://www.linkedin.com/company/krishaanagro.in/",
    facebook: "https://www.facebook.com/share/17uou5m38Q/",
    instagram: "#",
    youtube: "#",
  },
} as const;

/** WhatsApp number for orders/enquiries (replace with client's real number). */
export const WHATSAPP_NUMBER = SITE.whatsapp;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
