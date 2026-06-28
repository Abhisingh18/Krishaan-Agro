import Hero from "@/components/home/Hero";
import TrustMarquee from "@/components/home/TrustMarquee";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import WhyChoose from "@/components/home/WhyChoose";
import Events from "@/components/home/Events";
import UeraMolasses from "@/components/home/UeraMolasses";
import Opportunities from "@/components/home/Opportunities";
import Achievements from "@/components/home/Achievements";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import CTA from "@/components/home/CTA";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/seo";
import { faqs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Hero />
      <TrustMarquee />
      <Services />
      <Stats />
      <WhyChoose />
      <UeraMolasses />
      <Events />
      <Opportunities />
      <Achievements />
      <Testimonials />
      <Faq />
      <CTA />
    </>
  );
}
