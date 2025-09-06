"use client"

import React, { useEffect, useState } from 'react';

const ImpactText = ({
  sectionMap = [
    { id: 0, title: 'HOME' },
    { id: 1, title: 'ABOUT' },
    { id: 2, title: "SKILLS" },
    { id: 3, title: 'WORK' },
    { id: 4, title: 'PROJECTS' },
    { id: 5, title: 'AWARDS&PUBS' },
    { id: 6, title: 'CONTACT' },
    { id: 7, title: 'GALLERY' },
  ],
  }: { sectionMap?: Array<{ id: number; title: string }> }) => {
    const goTo = (id: number) => {
      document.getElementById(`section-${id}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    const cyclingWords = [
      "Frontend Developer",
      "UI/UX Designer", 
      "React Enthusiast",
      "Creative Thinker",
      "Problem Solver"
    ];
    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        const d = Number(e.key); // digits '0'..'9'
        if (!Number.isNaN(d)) {
          const hit = sectionMap.find(s => s.id === d);
          if (hit) goTo(hit.id);
        }
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }, [sectionMap]);


const [currentWordIndex, setCurrentWordIndex] = useState(0);    
const [currentText, setCurrentText] = useState('');
const [isDeleting, setIsDeleting] = useState(false);
const [typeSpeed, setTypeSpeed] = useState(80);

useEffect(() => {
  const handleTyping = () => {
    const fullWord = cyclingWords[currentWordIndex];
    if (isDeleting) {
      setCurrentText(fullWord.substring(0, currentText.length - 1));
      setTypeSpeed(40);
    } else {
      setCurrentText(fullWord.substring(0, currentText.length + 1));
      setTypeSpeed(80);
    }

    if (!isDeleting && currentText === fullWord) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }
  };

  const timer = setTimeout(handleTyping, typeSpeed);
  return () => clearTimeout(timer);
}, [currentText, isDeleting, currentWordIndex, typeSpeed, cyclingWords]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center space-y-8">
      {/* Main heading with Impact font */}
      <h1 
        className="text-6xl font-black text-sky-950 uppercase tracking-normal leading-none" // tracking normal or tight
        style={{
          fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Black", sans-serif',
          fontStretch: 'condensed'
        }}
      >
        Jonathan
      </h1>
      
      {/* Secondary text */}
      <h2 
        className="text-2xl text-[#C76A2F] uppercase tracking-normal leading-none"
        
      >
       {currentText}
       <span className="animate-pulse">|</span>
      </h2>
      
      {/* Numbered list matching your image */}
      <div 
        className="text-left space-y-2"
        style={{
          fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Black", sans-serif',
          fontStretch: 'condensed'
        }}
      >
        {sectionMap
  .filter(s => s.id !== 0) // omit 0 here; keep it if you want
  .map((s, idx) => {
    const rightSide = idx % 2 === 0; // alternate sides
    return (
      <div
        key={s.id}
        role="button"
        tabIndex={0}
        onClick={() => goTo(s.id)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && goTo(s.id)}
        className="relative group cursor-pointer select-none text-[2.75rem] font-black text-sky-950 leading-none outline-none"
        style={{
          fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Black", sans-serif',
          fontStretch: 'condensed',
        }}
      >
        {s.id}
        <span
          className={[
            'absolute top-1/2 -translate-y-1/2 opacity-0 pointer-events-none',
            'transition-all duration-200 ease-out group-hover:opacity-100',
            rightSide
              ? 'left-full ml-2 translate-x-1 group-hover:translate-x-0'
              : 'right-full mr-2 -translate-x-1 group-hover:translate-x-0',
          ].join(' ')}
          style={{
            fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Black", sans-serif',
            fontStretch: 'condensed',
          }}
        >
          <span className="text-xs font-normal tracking-wide text-slate-600">
            {s.title}
          </span>
        </span>
      </div>
    );
  })}
      </div>
      
      {/* Custom component for reusable Impact text */}
      <ImpactTextComponent text="Hsueh" size="text-5xl" />

      <button
              type="submit"
              onClick={() => goTo(6)}
              className={`w-fit rounded-lg px-6 py-3 text-lg font-semibold transition-all uppercase
                inline-block whitespace-nowrap rounded-md border border-sky-950 text-sky-950 bg-transparent hover:bg-sky-950 hover:text-white transition-colors shadow-sm`}
              style={{
                fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Black", sans-serif',
                fontStretch: 'condensed',
              }}
            >
              Contact me
      </button>
    </div>
  );
};

// Reusable component for Impact-style text
const ImpactTextComponent = ({ 
  text, 
  size = "text-4xl", 
  color = "text-sky-950",
  className = "" 
}: {
  text: string;
  size?: string;
  color?: string;
  className?: string;
}) => {
  return (
    <div 
      className={`font-black uppercase tracking-normal leading-none ${size} ${color} ${className}`}
      style={{
        fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Black", sans-serif',
        fontStretch: 'condensed'
      }}
    >
      {text}
    </div>
  );
};

export default ImpactText;