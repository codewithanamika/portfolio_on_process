import React, { useState } from 'react';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Your University Name",
      period: "20XX - Present",
      description: "Currently pursuing a degree in Computer Science with a focus on web development and programming."
    },
    {
      degree: "Web Development Courses",
      institution: "Online Platforms",
      period: "Ongoing",
      description: "Learning React, JavaScript, and frontend tools through hands-on projects and online courses."
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Tools", items: ["Git", "Figma", "VS Code", "Chrome DevTools"] },
    { category: "Concepts", items: ["Responsive Design", "Web APIs", "Basic PWA"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              My Resume
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            A quick overview of my education and skills as I begin my professional journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/Anamika-Regmi-Resume.pdf" 
              download 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>📄</span>
              Download Resume
            </a>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
              View Online
            </button>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce"></div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-8">
        <div className="max-w-6xl mx-auto flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-full p-2 border border-slate-700/50">
            {['overview', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSection(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                  activeSection === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="pb-20 px-8">
        <div className="max-w-6xl mx-auto">

          {activeSection === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-cyan-400 mb-4">Profile Summary</h3>
                <p className="text-gray-300 leading-relaxed">
                  I am a Computer Science student passionate about frontend development. I love creating responsive and accessible websites using React and Tailwind CSS. I am currently seeking internship opportunities to learn more through real-world experience and contribute to meaningful projects.
                </p>
              </div>

              <div className="space-y-6 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-blue-400 mb-4">Core Skills</h3>
                <div className="space-y-4">
                  {skills.map((group, index) => (
                    <div key={index} className="p-6 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-cyan-400 mb-3">{group.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 hover:bg-blue-600/20 hover:text-blue-400 transition-colors duration-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'education' && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-blue-400 mb-4">Education</h3>
                <p className="text-gray-300">Academic background and self-learning journey</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <div key={index} className="p-8 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center">
                    <div className="text-4xl mb-4">🎓</div>
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-blue-400 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-cyan-400 font-medium mb-4">{edu.period}</p>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resume;
