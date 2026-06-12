import Hero from "@/components/home/Hero";
import TrustMarquee from "@/components/home/TrustMarquee";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import WhyChoose from "@/components/home/WhyChoose";
import Events from "@/components/home/Events";
import Achievements from "@/components/home/Achievements";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Services />
      <Stats />
      <WhyChoose />
      <Events />
      <Achievements />
      <Testimonials />
      <CTA />
    </>
  );
}
