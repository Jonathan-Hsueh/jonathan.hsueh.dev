"use client";

import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaPython, FaRust } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiC, SiTailwindcss, SiVuedotjs } from "react-icons/si";

const SkillsSection: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 md:px-10 text-left">
        {/* Header with opening brace */}
        <div className="flex items-baseline gap-3 mb-6">
          <h2 className="text-2xl md:text-2xl font-semibold tracking-wide uppercase">
            SKILLS
          </h2>
          <span className="text-2xl md:text-3xl font-semibold">{"{"}</span>
        </div>

        {/* Intro paragraph */}
        <div className="pl-6 md:pl-8 mb-8">
          <p className="text-base md:text-m leading-relaxed">
            I excel in dissecting complex problems into manageable tasks, essential for crafting
            robust, maintainable code in large-scale projects. I&aposm driven by challenges, always
            seeking opportunities to enhance my skills. My self-directed learning approach empowers
            me to quickly grasp and adapt to new technologies autonomously.
          </p>
        </div>

        {/* Two-column grid of skills */}
        <div className="pl-6 md:pl-8 grid grid-cols-2 gap-y-4 gap-x-8 max-w-4xl">
          {/* Left column */}
          <div className="flex items-center gap-3">
            <SiTypescript className="text-2xl" />
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-3">
            <FaHtml5 className="text-2xl" />
            <span>HTML</span>
          </div>
          <div className="flex items-center gap-3">
            <SiJavascript className="text-2xl" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center gap-3">
            <SiVuedotjs className="text-2xl" />
            <span>Vue.js</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPython className="text-2xl" />
            <span>Python</span>
          </div>
          <div className="flex items-center gap-3">
            <FaReact className="text-2xl" />
            <span>React</span>
          </div>
          <div className="flex items-center gap-3">
            <FaRust className="text-2xl" />
            <span>Rust</span>
          </div>
          <div className="flex items-center gap-3">
            <FaNodeJs className="text-2xl" />
            <span>Node.js</span>
          </div>
          <div className="flex items-center gap-3">
            <SiC className="text-2xl" />
            <span>C</span>
          </div>
          <div className="flex items-center gap-3">
            <SiTailwindcss className="text-2xl" />
            <span>Tailwind</span>
          </div>
        </div>

        {/* Closing brace */}
        <div className="pl-2 md:pl-4 mt-6">
          <span className="text-2xl md:text-3xl font-semibold">{"}"}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
