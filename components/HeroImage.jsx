'use client';

import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden shadow-2xl group">
      <Image
        src="/images/hero-seo.jpg"
        alt="Professional SEO analytics workspace showing growth charts and metrics"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
      {/* Floating stats badge */}
      <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">+147% Traffic</p>
            <p className="text-xs text-muted-foreground">Average client growth</p>
          </div>
        </div>
      </div>
      {/* Top-right badge */}
      <div className="absolute top-6 right-6 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-xs font-bold shadow-lg">
        #1 Ranked Agency
      </div>
    </div>
  );
}
