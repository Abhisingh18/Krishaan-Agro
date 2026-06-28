import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import SectionHeading from "../ui/SectionHeading";

export default function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently asked{" "}
              <span className="gradient-text">questions</span>
            </>
          }
          subtitle="Everything you need to know about Krishaan Agro's services and products."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-brand-100 overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-semibold text-brand-900 transition hover:bg-brand-50/60">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="px-6 pb-5 text-sm leading-relaxed text-brand-600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
