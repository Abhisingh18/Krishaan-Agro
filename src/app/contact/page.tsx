import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "./ContactForm";
import FeedbackForm from "@/components/home/FeedbackForm";
import { SITE, whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Krishaan Agro for products, services, partnerships or a free consultation. Based in Aurangabad, Bihar.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Krishaan Agro",
    description:
      "Reach Krishaan Agro for products, services, partnerships or a free consultation.",
    url: "/contact",
    type: "website",
  },
};

const info = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      "Govind Bhawan, Veer Kunwar Singh Path",
      "New Area, Behind US Residency",
      "Aurangabad, Bihar - 824101",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [SITE.phoneDisplay, "Mon–Sat, 9am–7pm"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [SITE.email],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon–Sat: 9:00 – 19:00", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's Grow Together"
        subtitle="Have a question or a project in mind? Our team is ready to help you cultivate success."
        crumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {info.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-brand-100 bg-white p-6 shadow-card">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-semibold text-brand-900">
                      {c.title}
                    </h3>
                    {c.lines.map((l) => (
                      <p key={l} className="text-sm text-brand-600/80">
                        {l}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <a
                href={whatsappLink("Hi Krishaan Agro! I'd like to connect.")}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-4 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 p-6 text-white shadow-soft transition hover:shadow-glow"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-bold">Chat on WhatsApp</p>
                  <p className="text-sm text-white/80">
                    Fastest way to reach us — tap to start
                  </p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-4 overflow-hidden rounded-3xl border border-brand-100 shadow-card">
                <iframe
                  title="Krishaan Agro location"
                  src="https://www.google.com/maps?q=Govind%20Bhawan%2C%20Veer%20Kunwar%20Singh%20Path%2C%20New%20Area%2C%20Aurangabad%2C%20Bihar%20824101&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="left">
            <ContactForm />
          </Reveal>
        </div>

        {/* Feedback */}
        <Reveal delay={0.1}>
          <div className="mt-4 border-t border-brand-100 pt-4">
            <FeedbackForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
