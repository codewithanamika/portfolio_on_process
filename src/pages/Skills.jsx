import React, { useState } from 'react';
import { FaReact, FaCss3Alt, FaMicrophone, FaJsSquare, FaGitAlt, FaFigma, FaChrome } from 'react-icons/fa';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { 
      name: "React", 
      icon: <FaReact />, 
      level: "Advanced",
      description: "Building modern web applications with hooks, context, and state management",
      color: "from-cyan-400 to-blue-500"
    },
    { 
      name: "JavaScript", 
      icon: <FaJsSquare />, 
      level: "Advanced",
      description: "ES6+, async/await, DOM manipulation, and modern JavaScript features",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      name: "Tailwind CSS", 
      icon: <FaCss3Alt />, 
      level: "Advanced",
      description: "Utility-first CSS framework for rapid UI development",
      color: "from-cyan-400 to-teal-500"
    },
    { 
      name: "Web Speech API", 
      icon: <FaMicrophone />, 
      level: "Intermediate",
      description: "Voice recognition and speech synthesis for accessible web apps",
      color: "from-purple-400 to-pink-500"
    },
    { 
      name: "PWA", 
      icon: <FaChrome />, 
      level: "Intermediate",
      description: "Progressive Web Apps with service workers and offline functionality",
      color: "from-green-400 to-blue-500"
    },
    { 
      name: "Git", 
      icon: <FaGitAlt />, 
      level: "Advanced",
      description: "Version control, branching, merging, and collaborative development",
      color: "from-orange-400 to-red-500"
    },
    { 
      name: "Figma", 
      icon: <FaFigma />, 
      level: "Intermediate",
      description: "UI/UX design, prototyping, and design system creation",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "Tailwind CSS"],
      icon: "💻"
    },
    {
      title: "Modern Web APIs",
      skills: ["Web Speech API", "PWA"],
      icon: "🚀"
    },
    {
      title: "Development Tools",
      skills: ["Git", "Figma"],
      icon: "🛠️"
    }
  ];

  const stats = [
    { number: '7+', label: 'Technologies', icon: '⚡' },
    { number: '5+', label: 'Projects Built', icon: '🚀' },
    { number: '∞', label: 'Lines of Code', icon: '💻' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                My Skills
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life and create exceptional web experiences
            </p>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Technical Skills</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hover over each skill to learn more about my experience and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative p-6 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <span className="text-sm text-cyan-400 font-medium">{skill.level}</span>
                  </div>
                </div>
                
                <div className={`transition-all duration-300 ${hoveredSkill === index ? 'opacity-100 max-h-20' : 'opacity-70 max-h-12 overflow-hidden'}`}>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Skill level indicator */}
                <div className="mt-4">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                      style={{ 
                        width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '50%' 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Categories */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Skill Categories</h2>
            <p className="text-gray-300">
              My expertise organized by focus areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-8 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skillName, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 mx-1 mb-2 hover:bg-blue-600/20 hover:text-blue-400 transition-colors duration-300"
                    >
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-6">
              Let's work together to bring your ideas to life using these technologies and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                View Projects
              </button>
              <a href="mailto:anamikaregmi1.com">
              <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                Get in Touch
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
<footer className="bg-slate-950 text-gray-400 py-8 px-6 border-t border-slate-800 mt-20">
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Anamika Regmi &mdash; Frontend Developer & React Enthusiast
    </p>
    <p className="text-xs text-slate-500 mt-2">
      Designed & developed with care and curiosity.
    </p>
  </div>
</footer>

    </div>
  );
};

export default Skills;