import React, { useState, useEffect } from 'react';
import profile from '../assets/anamika.jpg'; 

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const dynamicTexts = [
    "Frontend Developer",
    "UI/UX Enthusiast", 
    "React Specialist",
    "Web Designer"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

 
  const FloatingElement = ({ delay = 0, size = "w-4 h-4", position = "top-10 left-10" }) => (
    <div 
      className={`absolute ${position} ${size} bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float`}
      style={{ animationDelay: `${delay}s` }}
    ></div>
  );

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-6 py-20 overflow-hidden">
      
      
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement delay={0} size="w-6 h-6" position="top-20 left-20" />
        <FloatingElement delay={1} size="w-4 h-4" position="top-40 right-32" />
        <FloatingElement delay={2} size="w-8 h-8" position="bottom-32 left-16" />
        <FloatingElement delay={1.5} size="w-5 h-5" position="bottom-20 right-20" />
        <FloatingElement delay={0.5} size="w-3 h-3" position="top-60 left-1/3" />
        
       
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      </div>

      
      <div className={`md:w-1/2 mb-12 md:mb-0 flex justify-center relative z-10 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="relative group">
          
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 animate-pulse"></div>
          
         
          <div className="relative">
            <img
              src={profile}
              alt="Anamika Regmi"
              className="w-72 h-72 rounded-full shadow-2xl object-cover border-4 border-white/20 group-hover:scale-105 transition-all duration-500 group-hover:border-cyan-400/50"
            />
            
           
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
          </div>
          
         
          <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-400 rounded-full border-4 border-white shadow-lg animate-bounce">
            <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

     
      <div className={`md:w-1/2 text-center md:text-left relative z-10 transform transition-all duration-1000 delay-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        
        <div className="mb-4">
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 px-4 py-2 rounded-full text-sm font-semibold text-slate-900 shadow-lg animate-fadeInUp">
            👋 Hello, I'm
          </span>
        </div>

       
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Anamika</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
            Regmi
          </span>
        </h1>

       
        <div className="mb-8 h-16 flex items-center justify-center md:justify-start">
          <span className="text-2xl md:text-3xl font-semibold text-gray-300">
            I'm a{' '}
            <span className="relative inline-block">
              <span className="text-cyan-400 animate-typewriter">
                {dynamicTexts[textIndex]}
              </span>
              <span className="absolute -right-1 top-0 w-0.5 h-full bg-cyan-400 animate-blink"></span>
            </span>
          </span>
        </div>

      
        <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
          Creating <span className="text-cyan-400 font-semibold">inclusive</span>, 
          <span className="text-blue-400 font-semibold"> speech-powered</span>, and 
          <span className="text-indigo-400 font-semibold"> accessible</span> web experiences 
          that make a difference in people's lives.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mb-12">
          <a 
            href="/projects" 
            className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          
          <a 
            href="/contact" 
            className="group relative bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-2xl hover:shadow-cyan-400/25"
          >
            <span className="flex items-center justify-center gap-2">
              Let's Connect
              <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6">
          {[
            { name: 'GitHub', icon: '🐙', href: 'https://github.com/codewithanamika' },
            { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/anamika-regmi-962611244?utm_sources=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { name: 'Twitter', icon: '🐦', href: 'https://x.com/AnamikaRegmi?t=grBt -TX5vK7ZUxPOBIFQ&s=09' },
          ].map((social, index) => (
            <a
              key={social.name}
              href={social.href}
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-md rounded-full flex items-center justify-center text-xl transform transition-all duration-300 hover:scale-110 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-400/25"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-typewriter {
          animation: typewriter 1s steps(20, end);
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
