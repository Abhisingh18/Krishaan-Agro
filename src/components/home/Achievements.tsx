"use client";

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

      {/* Real moments photo marquee */}
      <GalleryMarquee />
    </section>
  );
}
