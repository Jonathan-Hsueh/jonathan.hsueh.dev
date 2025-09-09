"use client";

import React from "react";
import { FaReact, FaHtml5, FaNotesMedical, FaPython } from "react-icons/fa";
import { SiTypescript, SiHuggingface, SiNextdotjs, SiTailwindcss , SiLatex} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { MdOutlineVideoCameraBack } from "react-icons/md";



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
            I'm great in dissecting complex problems into manageable tasks, essential for crafting
            robust, maintainable code in large-scale projects. I&apos;m driven by challenges, always
            seeking opportunities to enhance my skills. My self-directed learning approach empowers
            me to quickly grasp and adapt to new technologies autonomously.
          </p>
        </div>

        {/* Two-column grid of skills */}
        <div className="pl-6 md:pl-8 grid grid-cols-2 gap-y-4 gap-x-8 max-w-4xl">
          {/* Left column */}
          <div className="flex items-center gap-3">
            <SiTypescript className="text-2xl" color="" />
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-3">
            <SiLatex className="text-2xl" />
            <span>LaTeX</span>
          </div>
          <div className="flex items-center gap-3">
            <TbBrandCpp className="text-2xl" />
            <span>C++</span>
          </div>
          <div className="flex items-center gap-3">
            <SiHuggingface className="text-2xl" />
            <span>Transformers</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPython className="text-2xl" />
            <span>Python</span>
          </div>
          <div className="flex items-center gap-3">
            <FaNotesMedical className="text-2xl" />
            <span>MIMIC Data</span>
          </div>
          <div className="flex items-center gap-3">
            <SiNextdotjs className="text-2xl" />
            <span>Next.js</span>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineVideoCameraBack className="text-2xl" />
            <span>YOLO</span>
          </div>
          <div className="flex items-center gap-3">
            <FaReact className="text-2xl" />
            <span>React</span>
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
