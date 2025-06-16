import React, { useState, useEffect } from 'react';

const Navbar = ({ currentPath = '/' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" }

  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl py-2' 
          : 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-lg py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo/Name with animation */}
            <a href="/" className="group">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-wider transform transition-all duration-300 group-hover:scale-105">
                <span className="inline-block animate-letterDrop animation-delay-100">A</span>
                <span className="inline-block animate-letterDrop animation-delay-200">n</span>
                <span className="inline-block animate-letterDrop animation-delay-300">a</span>
                <span className="inline-block animate-letterDrop animation-delay-400">m</span>
                <span className="inline-block animate-letterDrop animation-delay-500">i</span>
                <span className="inline-block animate-letterDrop animation-delay-600">k</span>
                <span className="inline-block animate-letterDrop animation-delay-700">a</span>
                <span className="inline-block ml-2 animate-letterDrop animation-delay-800">R</span>
                <span className="inline-block animate-letterDrop animation-delay-900">e</span>
                <span className="inline-block animate-letterDrop animation-delay-1000">g</span>
                <span className="inline-block animate-letterDrop animation-delay-1100">m</span>
                <span className="inline-block animate-letterDrop animation-delay-1200">i</span>
              </h1>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.to}
                  href={link.to}
                  className={`relative font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group ${
                    currentPath === link.to
                      ? 'text-cyan-400'
                      : 'text-gray-200 hover:text-cyan-300'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform origin-left transition-transform duration-300 ${
                    currentPath === link.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                  {/* Glow effect */}
                  <span className="absolute inset-0 bg-cyan-400/20 rounded-lg transform scale-0 transition-transform duration-300 group-hover:scale-100 -z-10"></span>
                </a>
              ))}
              
              {/* CTA Button */}
              
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
            >
              <span className={`block w-6 h-0.5 bg-cyan-400 transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-cyan-400 transform transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-cyan-400 transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-slate-800/90 backdrop-blur-md rounded-xl p-4 space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:translate-x-2 ${
                    currentPath === link.to
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-200 hover:text-cyan-300 hover:bg-slate-700/50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-center transform transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Add spacing to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>

      {/* Custom styles */}
      <style>{`
        @keyframes letterDrop {
          0% { 
            transform: translateY(-20px); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }
        
        .animate-letterDrop {
          animation: letterDrop 0.8s ease-out both;
        }
        
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1100 { animation-delay: 1.1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
      `}</style>
    </>
  );
};

export default Navbar;