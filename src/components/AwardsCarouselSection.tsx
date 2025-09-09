"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Award, NotebookText } from 'lucide-react'

const AwardsCarouselSection: React.FC = () => {
  const items = useMemo(
    () => [
      {
        title: "Journal Publication to MDPI",
        description: "Paper on YOLO for gun detection accepted to MDPI Artificial Intelligence journal, with a 6.9 impact factor and 5.0 cite score.",
        href: "https://www.mdpi.com/2673-2688/6/9/198",
        status: "completed" as const,
        icon: <NotebookText className="w-12 h-12"/>,
      },
      {
        title: "UCSB Dataorbit Datathon First Place",
        description: "Recognized for first place in natural language processing track of UCSB datathon.",
        href: "https://www.dataorbit.info/",
        status: "completed" as const,
        icon: <Award className="w-12 h-12"/>,
      },
      {
        title: "Skin Cancer Detection Research",
        description: "Paper on dual-stage Swin Transformer Classifier for skin lesions, targetting ScienceDirect Results in Engineering Journal.",
        href: "https://www.sciencedirect.com/journal/results-in-engineering",
        status: "in-progress" as const,
        icon: <NotebookText className="w-12 h-12"/>,
      },
      {
        title: "Hospital Resources and Events Research",
        description: "Advanced to finals in global AI innovation challenge.",
        href: "https://ieee-iotj.org/",
        status: "in-progress" as const,
        icon: <NotebookText className="w-12 h-12"/>,
      },
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
            Awards and Publications
          </h2>
          <span className="text-2xl md:text-3xl font-semibold">{"{"}</span>
        </div>

        {/* Carousel */}
        <div className="pl-6 md:pl-8">
          <div className="relative flex justify-center">
            {/* Track with animation */}
            <div
              key={center}
              className={`flex items-stretch justify-center gap-4 md:gap-8 transition-transform duration-500 ease-in-out will-change-transform ${
                direction === "left"
                  ? "animate-slide-left"
                  : direction === "right"
                  ? "animate-slide-right"
                  : ""
              }`}
            >
              <AwardCard item={items[leftIdx]} />
              <div className="relative">
                <AwardCard item={items[center]} />
                {/* Arrows */}
                <button
                  aria-label="Previous"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-black/60 bg-white/80 backdrop-blur-sm hover:bg-black hover:text-white hover:border-black transition-colors flex items-center justify-center opacity-50"
                >
                  <span className="text-lg leading-none">‹</span>
                </button>
                <button
                  aria-label="Next"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-black/60 bg-white/80 backdrop-blur-sm hover:bg-black hover:text-white hover:border-black transition-colors flex items-center justify-center opacity-50"
                >
                  <span className="text-lg leading-none">›</span>
                </button>
              </div>
              <AwardCard item={items[rightIdx]} />
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

export default AwardsCarouselSection;

/* ---------- Helpers ---------- */

type AwardItem = {
  title: string;
  description: string;
  href: string;
  status: "in-progress" | "completed";
  icon: React.JSX.Element;
};

const AwardCard = ({ item }: { item: AwardItem }) => {
  const borderStyle =
    item.status === "completed" ? "border-solid" : "border-dashed";
  const completedTag = 
    item.status === "completed" ? "Completed" : "In-progress";
  const completedStyle = 
    item.status === "completed" ? "font-bold text-[#C76A2F]" : "text-sky-950";
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className={`block h-[26rem] w-[26rem] max-w-[85vw] rounded-2xl border-4 ${borderStyle} border-black p-6 flex flex-col justify-between text-left`}
    >
      <div>
        <div className="flex-initial justify-between w-full">
        <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
        {item.icon}
        <br />
        </div>

        <p className="text-l text-gray-700 leading-relaxed">{item.description}</p>
      </div>
      
      <div className="flex justify-between w-full">
      <div className="text-[0.65rem] uppercase tracking-wide text-gray-500">
        Click to go to website
      </div>
      <div className={`text-[0.65rem] uppercase tracking-wide ${completedStyle}`}>
        {completedTag}
      </div>
      </div>
    </a>
  );
};
