import React from 'react';

const projects = [
  {
    title: "Voice-Based Calculator",
    description: "A calculator that listens and calculates using speech commands via Web Speech API.",
    link: "https://github.com/codewithanamika/VBC_geminiapi"
  },
  {
    title: "ToDo App",
    description: "A task manager to organize daily activities using React and localStorage.",
    link: "https://organizeyourtodos.netlify.app/"
  },
  {
    title: "Notes App",
    description: "A tech-themed notes app with login/signup, dark mode, and local storage.",
    link: "https://notesasreminder.netlify.app/login"
  },
  {
    title: "SignBridge",
    description: "A sign language translator to convert between text and NSL/ASL videos.",
    link: "https://github.com/codewithanamika/SB",
  },
  {
    title: "Theme Switcher",
    description: "A simple web app for toggling between light and dark mode using React.",
    link: "https://github.com/codewithanamika/theme-switcher"
  },
  {
    title: "E-com",
    description: "An ecommerce site featuring user login, cart, and admin order management, hosted securely on render.",
    link: "https://e-com-2d0a.onrender.com"
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white px-8 py-20">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">My Projects</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          A showcase of personal and academic projects built using modern frontend technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-lg text-white text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce"></div>
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

export default Projects;
