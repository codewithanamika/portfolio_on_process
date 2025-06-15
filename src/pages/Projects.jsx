import React from 'react';

const projects = [
  {
    title: "Voice-Based Calculator",
    description: "A calculator that listens and calculates using speech commands via Web Speech API.",
    link: "https://github.com/codewithanamika/VBC_geminiapi"
  },
  {
    title: "ToDo-App",
    description: "An app to save their day-to-day works",
    link: "https://organizeyourtodos.netlify.app/"
  },
  {
    title: "Notes App",
    description: "A modern notes app with local storage, tech-style UI, add/delete features, and a login/signup system.",
    link: "https://notesasreminder.netlify.app/login"
  },
  {
    title: "SignBridge",
    description: "A sign language translator that converts text to NSL/ASL videos and sign language back to text.",
    link: "https://github.com/codewithanamika/SB",
  },
  {
    title: "Theme-switcher",
    description: "an idea of switching the webapp to a dark mode and ligt mode",
    link: "https://github.com/codewithanamika/theme-switcher"
  },
  {
    title: "fake store",
    description: "A responsive e-commerce frontend that displays product listings using the FakeStoreAPI.",
    link: "https://github.com/codewithanamika/fakestore"
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-rose-200 px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition text-sm font-medium"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
