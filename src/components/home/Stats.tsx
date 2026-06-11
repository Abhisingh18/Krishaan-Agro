"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 py-16 text-white">
      {/* decorative glows */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-300/25 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-leaf-grid bg-[length:26px_26px] opacity-15" />
      {/* top & bottom accent lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent" />

      <div className="container-x relative grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-3xl border border-white/10 bg-white/5 px-4 py-7 text-center backdrop-blur-sm transition hover:border-accent-400/40 hover:bg-white/10"
          >
            <p className="font-display text-4xl font-bold text-white sm:text-5xl">
              <CountUp
                end={s.value}
                duration={2.2}
                enableScrollSpy
                scrollSpyOnce
                separator=","
              />
              <span className="text-accent-400">{s.suffix}</span>
            </p>
            <p className="mt-2 text-sm font-semibold text-brand-50/90">
              {s.label}
            </p>
            <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-accent-500/60 transition-all group-hover:w-16 group-hover:bg-accent-400" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
