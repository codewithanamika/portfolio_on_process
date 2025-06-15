import React from 'react';
import { FaReact, FaCss3Alt, FaMicrophone, FaJsSquare, FaGitAlt, FaFigma, FaChrome } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <FaCss3Alt /> },
    { name: "Web Speech API", icon: <FaMicrophone /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "PWA", icon: <FaChrome /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Figma", icon: <FaFigma /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 px-8 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">My Skills</h2>
      <p className="text-center text-gray-600 text-lg mb-10">Technologies and tools I use regularly</p>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white text-purple-700 font-semibold px-6 py-4 rounded-full shadow-md hover:bg-purple-700 hover:text-white transition transform hover:scale-105 flex items-center gap-2 text-lg"
          >
            <span className="text-xl">{skill.icon}</span> {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
