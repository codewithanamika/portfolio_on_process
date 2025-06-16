import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import photo from '../assets/anamika.jpg'

const rotatingTexts = [
  "Frontend Developer",
  "React Enthusiast", 
  "Web Accessibility Advocate",
  "Open to Internship Opportunities"
];

const Home = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [textIndex, setTextIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const education = [
    {
      degree: "Bachelor's of Information Management",
      institution: "Mechi Multiple Campus",
      period: "2022 - Present",
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



  const interests = [
    { title: "UI/UX Design", description: "Creating beautiful, user-friendly interfaces", icon: "🎨" },
    { title: "Accessibility", description: "Building inclusive web experiences for everyone", icon: "♿" },
    { title: "Performance", description: "Optimizing websites for speed and efficiency", icon: "⚡" },
    { title: "Innovation", description: "Exploring cutting-edge web technologies", icon: "🔬" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white min-h-screen">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <div 
          className="transform transition-all duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-2 animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Anamika Regmi
            </span>
          </h1>
          <div className="h-16 md:h-20 flex items-center justify-center">
            <p className="text-gray-400 text-xl md:text-2xl font-semibold tracking-wide transition-all duration-500 ease-in-out transform">
              {rotatingTexts[textIndex]}
            </p>
          </div>
        </div>

        {/* Photo with enhanced animation */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
            <img
              src={photo}
              alt=""
              className="relative w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-cyan-400 object-cover mx-auto shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <a className="inline-block text-cyan-400 font-semibold animate-bounce mt-4 text-lg cursor-pointer hover:text-cyan-300 transition-colors duration-300">
          Scroll down ↓
        </a>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-indigo-500/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse"></div>
      </section>



      {/* What Drives Me Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                What Drives Me
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The passions and principles that fuel my journey in frontend development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 text-center transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50 group"
              >
                <div className="text-4xl mb-4 group-hover:animate-pulse">{interest.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{interest.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-md rounded-2xl border border-slate-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Ready to Build Something Amazing?
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                I'm always excited to collaborate on projects and learn from experienced developers. Let's create something incredible together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Get In Touch
                </button>
                </Link>
                <Link to="/projects">
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                  View My Work
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="pt-12 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            My Resume
          </span>
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-xl mx-auto">
          A quick overview of my education and skills as I begin my professional journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/Anamika_Regmi_CV.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span>📄</span> Download Resume
          </a>
          <a href="https://drive.google.com/file/d/1e3xzTho_cSBYS9_FUwuzDfshDjiPaM5z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
            View Online
          </button>
          </a>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
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

        {/* Tab Content */}
        <div>
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
                    <div
                      key={index}
                      className="p-6 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50"
                    >
                      <h4 className="text-xl font-semibold text-cyan-400 mb-3">{group.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 hover:bg-blue-600/20 hover:text-blue-400 transition-colors duration-300"
                          >
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
                  <div
                    key={index}
                    className="p-8 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center"
                  >
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

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
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

export default Home;