import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/anamika.jpg'; // Make sure this path and filename are correct

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-yellow-100 px-6 py-16">
      
      {/* Left: Profile Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={profile}
          alt="Anamika Regmi"
          className="w-64 h-64 rounded-full shadow-lg object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Hi, I'm <span className="text-purple-600">Anamika Regmi</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-md">
          A passionate frontend developer creating inclusive, speech-powered, and accessible web experiences.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <Link to="/projects" className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition">
            View Projects
          </Link>
          <Link to="/contact" className="bg-white text-purple-600 border border-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
