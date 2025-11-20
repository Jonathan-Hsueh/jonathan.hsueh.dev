"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";

const ImageCarousel: React.FC = () => {
  const items = useMemo(
    () => [
      { img: "/highlights/img_breaking.jpg", alt: "Project 1" },
      { img: "/highlights/img_datathon.JPG", alt: "Project 2"},
      { img: "/highlights/img_tunghai.JPG",  alt: "Project 2"},
      { img: "/highlights/img_professional.png", alt: "Project 2"}
      ],
    []
  );

  const [center, setCenter] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);


  const mod = useCallback((n: number, m: number) => ((n % m) + m) % m, []);
  const prev = useCallback(() => {
    setDirection("left");
    setCenter((i) => mod(i - 1, items.length));
  }, [items.length, mod]);
  const next = useCallback(() => {
    setDirection("right");
    setCenter((i) => mod(i + 1, items.length));
  }, [items.length, mod]);

  // keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // get indices for left/center/right
  const leftIdx = mod(center - 1, items.length);
  const rightIdx = mod(center + 1, items.length);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full max-w-6xl px-6 md:px-10 text-left">
        {/* Header */}
        <div className="flex items-baseline gap-3 mb-6">
          <h2 className="text-2xl md:text-2xl font-semibold tracking-wide uppercase">
            IMPORTANT MOMENTS
          </h2>
          <span className="text-2xl md:text-3xl font-semibold">{"{"}</span>
        </div>

        {/* Carousel */}
        <div className="pl-6 md:pl-8">
          <div className="relative flex justify-center">
            {/* Track with animation */}
            <div
              key={center} // force re-render per move
              className={`flex items-stretch justify-center gap-1 md:gap-3 transition-transform duration-500 ease-in-out will-change-transform ${
                direction === "left"
                  ? "animate-slide-left"
                  : direction === "right"
                  ? "animate-slide-right"
                  : ""
              }`}
            >
              <Card item={items[leftIdx]} />
              <div className="relative">
                <Card item={items[center]} />
                {/* Arrows */}
                <button
                  aria-label="Previous project"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-black/60 bg-white/80 backdrop-blur-sm hover:bg-black hover:text-white hover:border-black transition-colors flex items-center justify-center opacity-50"
                >
                  <span className="text-lg leading-none">‹</span>
                </button>
                <button
                  aria-label="Next project"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-black/60 bg-white/80 backdrop-blur-sm hover:bg-black hover:text-white hover:border-black transition-colors flex items-center justify-center opacity-50"
                >
                  <span className="text-lg leading-none">›</span>
                </button>
              </div>
              <Card item={items[rightIdx]} />
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCenter(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === center ? "bg-black w-6" : "bg-black/30 hover:bg-black/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Closing brace */}
        <div className="pl-2 md:pl-4 mt-6">
          <span className="text-2xl md:text-3xl font-semibold">{"}"}</span>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-left {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        @keyframes slide-right {
          from { transform: translateX(33.333%); }
          to   { transform: translateX(0); }
        }
        .animate-slide-left  { animation: slide-left 0.45s cubic-bezier(0.22,0.61,0.36,1); }
        .animate-slide-right { animation: slide-right 0.45s cubic-bezier(0.22,0.61,0.36,1); }
      `}</style>
    </div>
  );
};

export default ImageCarousel;

/* ---------- Helpers ---------- */

type Item = { img: string; alt?: string };

const Card = ({ item }: { item: Item }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="block h-[26rem] w-[26rem] max-w-[85vw] overflow-hidden rounded-2xl shadow-sm border border-black/10 bg-white"
    >
      <img
        src={item.img}
        alt={item.alt ?? ""}
        className="h-full w-full object-cover"
      />
    </a>
  );
};
