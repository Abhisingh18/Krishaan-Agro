"use client";

import { ArrowRight, Camera } from "lucide-react";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import GalleryMarquee from "./GalleryMarquee";

export default function Achievements() {
  return (
    <section id="achievements" className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="Achievements"
        title={
          <>
            Moments that <span className="gradient-text">make us proud</span>
          </>
        }
        subtitle="Awards, felicitations aur kisaano ke saath bitaye hue yaadgar lamhe — sab kuch asli, sab kuch dil se."
      />

      {/* dynamic right-to-left photo marquee — natural width, no cropping */}
      <GalleryMarquee />

      {/* view all CTA */}
      <div className="mt-10 text-center">
        <Link href="/awards" className="btn-primary text-base">
          <Camera className="h-4 w-4" />
          View All Moments
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
