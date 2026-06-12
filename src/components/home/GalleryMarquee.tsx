"use client";

import Image from "next/image";

const defaultPhotos = Array.from(
  { length: 31 },
  (_, i) => `/gallery/g${i + 1}.jpg`
);

function Row({
  items,
  reverse = false,
  duration,
}: {
  items: string[];
  reverse?: boolean;
  duration: string;
}) {
  const list = [...items, ...items];
  return (
    <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {list.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl bg-brand-900 shadow-card ring-1 ring-white/50 transition-all duration-500 hover:scale-[1.04] hover:shadow-glow sm:h-52 sm:w-80"
          >
            <Image
              src={src}
              alt="Krishaan Agro moments"
              fill
              sizes="320px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent opacity-0 transition hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GalleryMarquee({
  photos = defaultPhotos,
}: {
  photos?: string[];
}) {
  const mid = Math.ceil(photos.length / 2);
  const rowA = photos.slice(0, mid);
  const rowB = photos.slice(mid);

  return (
    <div className="mt-16 space-y-4">
      <Row items={rowA} duration="55s" />
      {rowB.length > 0 && <Row items={rowB} reverse duration="65s" />}
    </div>
  );
}
