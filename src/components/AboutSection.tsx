"use client";

import React from "react";
import { HeartHandshake } from "lucide-react";
import { GrDocumentUser } from "react-icons/gr";

const AboutSection: React.FC = () => {
  const paragraph1 =
    "Software and AI engineer with 2 years of experience. Part-time wizard & proud bug developer.";
  const paragraph2 =
    "CS Student at University of California Santa Barbara.";
  const paragraph3 =
    "Passionate about CS design since childhood, I keep learning by building things that make a big impact.";
  const paragraph4 = 
    `I like to learn by doing and being involved with the community, not waiting for someone
    to teach me.`;
  const paragraph5 = 
    `Over the years I've collaboratively developed numerous research and technical projects to solve the most
    important problems.`;
  const paragraph6 =
    `At school I'm a part of Taiwanese Cultural Club and Breakdancing Club leadership, and 
    I've been on Student Government and in independent startup projects.`;
  const imageSrc = "/about-image.jpg";
  const imageAlt = "About image";

  return (
    // centered inside the snap container
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 md:px-10 text-left">
        {/* ABOUT { */}
        <div className="flex items-baseline gap-3 mb-6">
          <h2 className="text-2xl md:text-2xl font-semibold tracking-wide uppercase">
            ABOUT
          </h2>
          <span className="text-2xl md:text-3xl font-semibold">{"{"}</span>
        </div>

        {/* indented content */}
        <div className="pl-6 md:pl-8">
          <div className="flex gap-2"> 
          <p className="text-base md:text-sm leading-relaxed mb-4">
            {paragraph1}
            <br />
            {paragraph2}
          </p>
          <HeartHandshake />
          </div>
          <p className="text-base md:text-sm leading-relaxed">
            
            {paragraph3}
            <br />
            {paragraph4}
            <br />
            {paragraph5}
            <br />
            <br />
            {paragraph6}
            <br />
            <br /> 
          </p>
          <a
              href="https://drive.google.com/file/d/1g1pk0Sk0CStmj8I9BTbLjk3mBQSVrFJX/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <GrDocumentUser className="w-6 h-6 text-xl" />
              <span>Resume</span>
            </a>

          {/* space then indented image */}
          <div className="mt-8">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-56 h-56  object-cover rounded-sm"
            />
          </div>
        </div>

        {/* closing } */}
        <div className="pl-2 md:pl-4 mt-6">
          <span className="text-2xl md:text-3xl font-semibold">{"}"}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
