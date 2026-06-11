import Hero from "@/components/home/Hero";
import TrustMarquee from "@/components/home/TrustMarquee";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChoose from "@/components/home/WhyChoose";
import Founder from "@/components/home/Founder";
import Achievements from "@/components/home/Achievements";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Services />
      <Stats />
      <FeaturedProducts />
      <WhyChoose />
      <Founder />
      <Achievements />
      <Team />
      <Testimonials />
      <CTA />
    </>
  );
}
