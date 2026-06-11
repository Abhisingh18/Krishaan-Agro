import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({
  title,
  subtitle,
  crumb,
}: {
  title: string;
  subtitle?: string;
  crumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 bg-leaf-grid bg-[length:24px_24px] opacity-50" />
      <div className="container-x relative py-16 text-center sm:py-20">
        {crumb && (
          <nav className="mb-4 flex items-center justify-center gap-1 text-sm text-brand-500">
            {crumb.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="hover:text-brand-700">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-brand-800">{c.label}</span>
                )}
                {i < crumb.length - 1 && <ChevronRight className="h-3.5 w-3.5" />}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-4xl font-bold text-brand-950 sm:text-5xl md:text-6xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-800/70 text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
