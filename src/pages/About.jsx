import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 via-rose-50 to-orange-100 px-8 py-16 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m a developer from Nepal who loves building creative, inclusive tools like voice-based apps, speech-to-text notes, and sign language translators. I enjoy solving real-life problems through code and turning ideas into beautiful, accessible solutions.
        </p>
        <p className="mt-4">
          I'm skilled in React, Tailwind CSS, Web Speech API, and love experimenting with UI design using Figma. I also take part in hackathons and work on community-focused projects like Budget Bajai and SignBridge.
        </p>
      </div>
    </div>
  );
};

export default About;
