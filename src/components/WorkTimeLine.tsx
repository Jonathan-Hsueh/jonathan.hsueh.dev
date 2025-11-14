"use client";

import React, { useMemo } from "react";

const WorkTimeline: React.FC = () => {
  // --- 1) Data: add new items here -----------------------------------------
  // Use ISO dates; position is computed automatically between START..END.
  const items = [
    {
      id: "exp1",
      title: "Tunghai University - Research Intern",
      site: "https://orcid.org/0009-0003-8432-6218",
      start: "2024-08-01",
      end: "",
      summary:
        "Researched AI-based tools for hospital settings and gun detection. Published a paper to MDPI Artificial Intelligence journal.",
    },
    {
      id: "exp2",
      title: "Centrova AI - Full-Stack & AI Developer",
      site: "https://centrova.ai/",
      start: "2025-03-01",
      end: "",
      summary:
        "Designed frontend and AI models for a web application that connects patients to relevant clinical trials.",
    },
    {
      id: "exp3",
      title: "Gladecore - Full-stack Developer",
      site: "https://www.gladecore.com/",
      start: "2025-06-01",
      end: "2025-9-20",
      summary:
        "Audited frontend and supabase backend for improved security and performance.",
    },
  ];

  // --- 2) Timeline bounds (2024 → 2025) ------------------------------------
  const START = useMemo(() => new Date("2024-06-01"), []);
  const END = useMemo(() => new Date("2025-7-31"), []);
  const spanMs = END.getTime() - START.getTime();

  const toPct = (iso: string) => {
    const t = new Date(iso).getTime();
    const clamped = Math.min(Math.max(t, START.getTime()), END.getTime());
    return ((clamped - START.getTime()) / spanMs) * 100;
  };
  
  const monthsBetween = useMemo(() => {
    return (END.getFullYear() - START.getFullYear()) * 12 + (END.getMonth() - START.getMonth()) + 1;
  }, [START, END]);
  
  const PX_PER_MONTH = 110; // increase for more spacing per date
  const canvasWidth = monthsBetween * PX_PER_MONTH;
  
  return (
    <div className="h-full w-full flex items-center justify-center overflow-y-hidden">
      <div className="w-full max-w-6xl px-6 md:px-10 text-left">
        {/* WORK { */}
        <div className="flex items-baseline gap-3 mb-6">
          <h2 className="text-2xl md:text-2xl font-semibold tracking-wide uppercase">
            WORK
          </h2>
          <span className="text-2xl md:text-3xl font-semibold">{"{"}</span>
        </div>

        {/* Drag/scroll helper */}
        <div className="pl-6 md:pl-8 text-xs uppercase tracking-wider mb-6 opacity-70">
          Drag to explore 
        </div>

        {/* --- 3) Scrollable timeline strip --------------------------------- */}
        <div className="pl-6 md:pl-8">
        <div
          className="relative w-full overflow-x-auto overflow-y-visible timeline-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >

            {/* Inner canvas: make it wide so we get horizontal scroll on small screens */}
            <div
              className="relative py-32"
              style={{ width: `${canvasWidth}px`, minHeight: "20rem" }}  // ~352px tall rail area
            >
              {/* Baseline */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[6px] bg-black/70 rounded-full" />

              {/* Year ticks */}
              <div className="absolute top-[calc(50%-18px)] -translate-y-1/2 left-0 text-xs font-medium">
                2024
              </div>
              <div className="absolute top-[calc(50%-18px)] -translate-y-1/2 right-0 text-xs font-medium">
                2025
              </div>

              {/* Points + cards */}
              {items.map((it, i) => {
                const leftPct = toPct(it.start);
                const below = true; // job card below the line
                const yDot = "50%";
                const dotBase =
                  "absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-black bg-white";
                const ring =
                  "after:content-[''] after:absolute after:inset-[-8px] after:rounded-full after:border after:border-sky-950";
                const z = 10 + i;

                return (
                  <div
                    key={it.id}
                    className="absolute"
                    style={{ left: `${leftPct}%`, top: 0, bottom: 0, zIndex: z }}
                  >
                    {/* Link above the dot */}
                    <div
                      className="absolute -translate-x-1/2 -translate-y-full mb-2"
                      style={{ left: "0%", top: "calc(50% - 36px)" }}
                    >
                      <a
                        href={it.site}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block whitespace-nowrap font-bold text-xs px-3 py-1 rounded-md border border-black text-black bg-white hover:bg-black hover:text-white transition-colors shadow-sm"
                      >
                        VISIT
                      </a>
                    </div>

                    {/* Dot */}
                    <div
                      className={`${dotBase} ${ring}`}
                      style={{ left: "0%", top: yDot }}
                      aria-hidden
                    />

                    {/* Job card below the line */}
                    {below && (
                      <div
                        className="absolute -translate-x-1/2 mt-8 w-[300px] sm:w-[340px] text-center"
                        style={{ left: "0%", top: "50%" }}
                      >
                        <div className="text-base text-sky-950 font-semibold ">{it.title}</div>
                        <div className="mt-2 text-sm opacity-80 leading-relaxed">
                          {it.summary}
                        </div>
                        <div className="mt-2 text-sm font-medium text-[#C76A2F] uppercase">
                          {new Date(it.start).toLocaleString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}{" "}
                          —{" "}
                          
                          {it.end 
                          ? new Date(it.end).toLocaleString("en-US", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Present"}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* closing } */}
        <div className="pl-2 md:pl-4 mt-6">
          <span className="text-2xl md:text-3xl font-semibold">{"}"}</span>
        </div>
      </div>
      <style jsx>{`
      .timeline-scroll::-webkit-scrollbar {
        display: none;
      }
      `}</style>
    </div>
  );
};

export default WorkTimeline;
