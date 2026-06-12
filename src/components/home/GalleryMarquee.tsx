"use client";

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
  // duplicated once for a seamless infinite loop
  const list = [...items, ...items];
  return (
    <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        className="flex w-max items-center gap-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {list.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-44 shrink-0 overflow-hidden rounded-2xl bg-brand-100 shadow-card ring-1 ring-white/50 transition-all duration-500 hover:scale-[1.04] hover:shadow-glow sm:h-52"
          >
            {/* natural width at fixed height — pura photo dikhta hai, koi crop nahi */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Krishaan Agro moments"
              loading="lazy"
              className="h-full w-auto"
            />
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
    <div className="mt-14 space-y-4">
      <Row items={rowA} duration="60s" />
      {rowB.length > 0 && <Row items={rowB} reverse duration="75s" />}
    </div>
  );
}
