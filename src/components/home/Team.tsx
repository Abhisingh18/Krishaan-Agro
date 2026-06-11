"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { team } from "@/lib/data";
import SectionHeading from "../ui/SectionHeading";

export default function Team() {
  return (
    <section id="team" className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="Our Team"
        title={
          <>
            The people behind <span className="gradient-text">the harvest</span>
          </>
        }
        subtitle="Agronomists, technologists and field experts working hand-in-hand with farmers."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group text-center"
          >
            <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-3xl shadow-card">
              <Image
                src={m.image}
                alt={m.name}
                fill
                sizes="(max-width:1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 opacity-0 transition group-hover:opacity-100">
                <a className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-700 transition hover:bg-accent-500 hover:text-white" href="#">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-700 transition hover:bg-accent-500 hover:text-white" href="#">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
            <h3 className="mt-4 font-semibold text-brand-900">{m.name}</h3>
            <p className="text-sm text-accent-600">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
