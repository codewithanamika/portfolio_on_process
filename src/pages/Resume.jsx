import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100 px-8 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Resume</h2>
      <p className="mb-6 text-gray-700">Download my latest resume to know more about my experience and background.</p>
      <a href="/Anamika-Regmi-Resume.pdf" download className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
