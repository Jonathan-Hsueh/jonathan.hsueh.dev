"use client"
import React from "react";
import ImpactText from "@/components/ImpactText";
import { ImpactPageWrapper} from "@/components/ImpactNavigation";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import WorkTimeline from "@/components/WorkTimeLine";
import ProjectsCarouselSection from "@/components/ProjectsCarouselSection";
import AwardsCarouselSection from "@/components/AwardsCarouselSection";
import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";

export default function Home() {
  const navItems = [
    { id: 0, number: '0', text: 'HOME' },
    { id: 1, number: '1', text: 'ABOUT' },
    { id: 2, number: '2', text: 'SKILLS' },
    { id: 3, number: '3', text: 'WORK' },
    { id: 4, number: '4', text: 'PROJECTS' },
    { id: 5, number: '5', text: 'AWARDS & PUBS' },
    { id: 6, number: '6', text: 'CONTACT' },
    { id: 7, number: '7', text: 'GALLERY' }
  ];
/// https://www.comme-des-garcons.com/index.html <- Inspiration behind website
  return (
    <ImpactPageWrapper navItems={navItems}>
       <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden min-w-0">
        <section id="section-0" className="h-screen snap-start w-full bg-white">
          <ImpactText />
        </section>

        <section id="section-1" className="w-full h-screen snap-start bg-white">
        <AboutSection/>
        </section>

        <section id="section-2" className="w-full h-screen snap-start bg-white">
          <SkillsSection/>
        </section>

        <section id="section-3" className="w-full h-screen snap-start bg-white">
          {/* Your About content */}
          <WorkTimeline/>
        </section>

        <section id="section-4" className="w-full h-screen snap-start bg-white">
          {/* Your About content */}
          <ProjectsCarouselSection />
        </section>
        
        <section id="section-5" className="w-full h-screen snap-start bg-white">
          {/* Your About content */}
          <AwardsCarouselSection />
          
        </section>

        <section id="section-6" className="w-full h-screen snap-start bg-white">
          {/* Your About content */}
          <ContactSection />
        </section>
        <section id="section-7" className="w-full h-screen snap-start bg-white">
          {/* Your About content */}
          <Gallery />
        </section>
        {/* Add more sections as needed */}
        
      </div>
    </ImpactPageWrapper>

  );
}
