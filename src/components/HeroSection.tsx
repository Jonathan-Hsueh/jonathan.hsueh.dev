import { useState, useEffect } from 'react';
import { Button } from './ui/Button';

const HeroSection = () => {
  const cyclingWords = [
    "Frontend Developer",
    "UI/UX Designer", 
    "React Enthusiast",
    "Creative Thinker",
    "Problem Solver"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(80);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = cyclingWords[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypeSpeed(40);
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypeSpeed(80);
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typeSpeed, cyclingWords]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-orange-50 min-h-screen flex items-top">
      <div className="container mx-auto px-8 py-20">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Name */}
            <h1 className="text-4xl text-sky-950 md:text-5xl font-bold text-[#1E1E1E] mb-3">
              Jonathan
            </h1>
            
            {/* Cycling Words */}
            <div className="mb-8">
              <span className="text-xl md:text-2xl text-[#C76A2F]">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            
            {/* Info Tag */}
            <p className="text-lg text-[#1E1E1E] mb-8 w-full">
              Passionate about creating beautiful, functional web experiences that make a difference.
            </p>
            
            {/* Buttons */}
            <div className="flex gap-6 flex-wrap">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#C76A2F] via-[#E6CBA8] to-sky-950 text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Me
              </Button>
              
              <Button
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="text-[#1E1E1E] border-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white px-8 py-3 rounded-lg transition-colors"
              >
                About Page
              </Button>
            </div>
          </div>
          {/* Underneath Image Space */}
            <div className="max-w-xs">    
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                <span className="text-sm">Your Image Here</span>
              </div>
            </div>
            
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;