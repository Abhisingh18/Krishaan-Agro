"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  FlaskConical,
  Leaf,
  MessageCircle,
  Ruler,
  Sprout,
} from "lucide-react";
import { whatsappLink } from "@/lib/utils";

const nutrients = [
  { category: "Non-fertilizer nutrients", elements: "C, H & O", note: "Available from air and water" },
  { category: "Primary macro-nutrients", elements: "N, P & K", note: "Needed in large quantities through soil" },
  { category: "Secondary macro-nutrients", elements: "Ca, Mg & S", note: "Smaller amounts, vital for growth" },
  { category: "Micro-nutrients", elements: "Zn, Cu, Fe, Mn, Mo, B & Cl", note: "Tiny amounts, big impact" },
];

const whyTest = [
  "Know the exact nutrient status (N, P, K + micro-nutrients) of your field",
  "Choose the right crop for your soil type",
  "Apply the right fertilizer in the right quantity — save money, avoid overuse",
  "Identify and correct problem soils (saline, alkaline, acidic)",
  "Track soil health season after season with a Soil Health Report",
];

const steps = [
  "Divide the field into uniform parts by slope, colour, texture and crop — one sample per acre is ideal.",
  "Walk in a zig-zag pattern and mark 15–20 spots across the field.",
  "Clear grass, stones and crop residue from each marked spot.",
  "Dig a V-shaped pit about 15 cm deep at every spot.",
  "Scrape a uniform 2.5 cm thick layer of soil from top to bottom of the pit wall.",
  "Collect all the soil in a clean plastic bucket or tray and mix thoroughly.",
  "Spread the mix, divide into 4 parts, discard two opposite parts — repeat until about 500 g remains.",
  "Fill in a clean cloth/poly bag with a label (name, field, crop, date) and send it to the lab.",
];

const precautions = [
  "Don't collect samples from wet soil — dry them in shade first if unavoidable",
  "Avoid spots near roads, bunds, trees, channels, manure heaps or fertilizer bags",
  "Don't sample right after rain, irrigation, fertilizer application or residue burning",
  "Never use rusted tools for sampling",
  "Sample about one month before sowing so the report arrives in time",
];

export default function SoilGuide() {
  return (
    <section className="container-x pb-8 pt-2">
      {/* What is soil testing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-brand-100 bg-white p-7 shadow-card sm:p-10"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
          <FlaskConical className="h-3.5 w-3.5 text-accent-500" />
          Soil Testing Guide
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold text-brand-950 sm:text-3xl">
          What is Soil Testing? <span className="text-brand-500">(मृदा परीक्षण)</span>
        </h2>
        <p className="mt-4 leading-relaxed text-brand-700">
          Soil testing is the scientific analysis of a soil sample to find out
          its <strong>nutrient content, pH level, salinity</strong> and other
          physical, chemical and biological properties. It tells you exactly
          what your field has — and what it's missing — so you can choose the
          right crop, the right fertilizer and the right quantity. Healthy soil
          is the foundation of profitable farming: plants need{" "}
          <strong>16 essential nutrients</strong> at optimum levels to grow well.
        </p>

        {/* nutrients table */}
        <div className="mt-7 overflow-hidden rounded-2xl border border-brand-100">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-brand-600 to-brand-700 text-white">
                <th className="px-4 py-3 font-bold">Category</th>
                <th className="px-4 py-3 font-bold">Nutrients</th>
                <th className="hidden px-4 py-3 font-bold sm:table-cell">Role</th>
              </tr>
            </thead>
            <tbody>
              {nutrients.map((n, i) => (
                <tr key={n.category} className={i % 2 ? "bg-brand-50/50" : "bg-white"}>
                  <td className="px-4 py-3 font-semibold text-brand-900">{n.category}</td>
                  <td className="px-4 py-3 font-bold text-accent-600">{n.elements}</td>
                  <td className="hidden px-4 py-3 text-brand-600 sm:table-cell">{n.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Why + When */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-brand-100 bg-white p-7 shadow-card"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
            <Sprout className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-xl font-bold text-brand-950">
            Why is soil testing needed?
          </h3>
          <ul className="mt-4 space-y-2.5">
            {whyTest.map((w) => (
              <li key={w} className="flex gap-2.5 text-sm leading-relaxed text-brand-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                {w}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-3xl border border-brand-100 bg-white p-7 shadow-card">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white">
              <CalendarClock className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-brand-950">
              When should you test?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-700">
              Send your sample <strong>about a month before sowing</strong> so
              the report reaches you in time. Test <strong>pH, EC and organic
              matter every season</strong>, and major + micro-nutrients every{" "}
              <strong>1–2 years</strong>.
            </p>
          </div>
          <div className="rounded-3xl border border-brand-100 bg-white p-7 shadow-card">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-accent-500 text-white">
              <Ruler className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-brand-950">
              Sampling depth
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-700">
              <strong>Grains, pulses, oilseeds &amp; vegetables:</strong> 0–15 cm
              and 15–30 cm. <strong>Soil reclamation:</strong> up to 90 cm in
              layers. <strong>Orchards:</strong> separate samples up to 180 cm
              depth.
            </p>
          </div>
        </motion.div>
      </div>

      {/* How to sample — steps */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 rounded-3xl border border-brand-100 bg-white p-7 shadow-card sm:p-10"
      >
        <h3 className="font-display text-2xl font-bold text-brand-950">
          How to take a soil sample — <span className="gradient-text">step by step</span>
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 rounded-2xl bg-brand-50/60 p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-brand-800">{step}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-2xl bg-accent-50 p-4 text-sm text-brand-800">
          <strong>Standing crop?</strong> Take samples from between the crop
          rows — never right where fertilizer was recently applied.
        </p>
      </motion.div>

      {/* Precautions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 rounded-3xl border border-accent-200 bg-gradient-to-br from-accent-50 to-white p-7 shadow-card sm:p-10"
      >
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 text-white">
          <AlertTriangle className="h-5 w-5" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-brand-950">
          Important precautions
        </h3>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {precautions.map((p) => (
            <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-brand-800">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              {p}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Book CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 to-brand-900 p-8 text-center text-white sm:p-12"
      >
        <Leaf className="mx-auto h-10 w-10 text-accent-400" />
        <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
          Apne khet ki mitti ki jaanch karwayein
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm text-brand-50/85 sm:text-base">
          We test <strong>14 soil parameters</strong>, explain the report to you
          in simple language, and give crop-specific fertilizer recommendations.
        </p>
        <a
          href={whatsappLink(
            "Hi Krishaan Agro! I want to book a soil test for my field. Please share the process and charges."
          )}
          target="_blank"
          rel="noreferrer"
          className="btn mt-6 inline-flex bg-accent-500 text-white hover:bg-accent-600"
        >
          <MessageCircle className="h-4 w-4" /> Book Soil Test on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
