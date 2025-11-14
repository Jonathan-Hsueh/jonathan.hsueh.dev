import React, { useState, useEffect } from 'react';

// Main navigation component
export const BlogNavigation = ({ 
  items, 
  activeSection, 
  onSectionClick,
  className = "" 
}: {
  items: Array<{ id: number; number: string; text: string }>;
  activeSection: number;
  onSectionClick: (id: number) => void;
  className?: string;
}) => {
  return (
    <div className={`fixed left-0 top-0 h-screen w-50 bg-white/80 backdrop-blur-sm border-r border-gray-200 flex flex-col justify-start items-center pt-8 z-50 ${className}`}>

      <div className="flex flex-col space-y-8 mt-4 ml-4 mr-6 overflow-y-scroll overflow-x-hidden h-150 ">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onSectionClick(item.id)}
            className={`
              cursor-pointer transition-all duration-300 ease-out
              ${activeSection === item.id 
                ? 'transform scale-110 translate-x-2 opacity-100' 
                : 'opacity-70 hover:opacity-100'
              }
            `}
          >
            <div 
              className={`
                font-black text-left leading-none transition-all duration-300
                ${item.id === 0
                  ? 'text-5xl'
                  : 'text-xl'
                }
                ${activeSection === item.id 
                  ? 'text-[#C76A2F] drop-shadow-lg' 
                  : 'text-black hover:text-orange-500'
                }
              `}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic text display */}
      <div className="absolute bottom-1/32 -translate-y-1/2 transform origin-center">
        <div 
          className="font-black text-4xl tracking-wider text-gray-700 whitespace-nowrap transition-all duration-500"
          style={{
            fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Black", sans-serif',
            fontStretch: 'condensed'
          }}
        >
          {items.find(item => item.id === activeSection)?.id}
        </div>
      </div>
    </div>
  );
};

// Wrapper component that handles scroll detection
export const BlogPageWrapper = ({ 
  navItems,
  children,
  className = ""
}: {
  navItems: Array<{ id: number; number: string; text: string }>;
  children: React.ReactNode;
  className?: string;
}) => {
  const [activeSection, setActiveSection] = useState(1);

  // Scroll to section function
  const scrollToSection = (sectionId: number) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Intersection Observer to track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = parseInt(entry.target.id.replace('section-', ''));
            if (!isNaN(sectionId)) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(`section-${item.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <div className={`min-h-screen bg-white flex ${className}`}>
      {/* Navigation */}
      <BlogNavigation
        items={navItems}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Main Content */}
      <div className="flex-1 ml-24 overflow-x-hidden min-w-0" style={{ width: "calc(100vw - 6rem)" }}>
        {children}
      </div>
    </div>
  );
};
