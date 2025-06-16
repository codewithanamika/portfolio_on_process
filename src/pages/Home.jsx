import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      
      {/* Optional: Add more sections here */}
      {/* 
      <AboutPreview />
      <FeaturedProjects />
      <SkillsPreview />
      */}
    </div>
  );
};

export default Home;