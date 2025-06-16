import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('story');
  const sectionRefs = useRef({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = [];
    
    Object.keys(sectionRefs.current).forEach(key => {
      const element = sectionRefs.current[key];
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const stats = [

    { number: '3+', label: 'Years Learning', icon: '📚' },
    { number: '100%', label: 'Passion', icon: '❤️' }
  ];

  const skills = [
    { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'Tailwind CSS', level: 95, color: 'from-teal-500 to-blue-500' },
    { name: 'Web Speech API', level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'Figma', level: 75, color: 'from-pink-500 to-rose-500' }
    
  ];

  const journey = [
    {
      year: '2022',
      title: 'Started Coding Journey',
      description: 'Began learning web development with HTML, CSS, and JavaScript',
      icon: '🌱'
    },
    {
      year: '2023',
      title: 'first project',
      description: 'sign language to text translator and vice versa',
      icon: '🏆'
    },
    {
      year: '2024',
      title: 'Learning continues',
      description: 'currently learning react with vite and tailwindcss',
      icon: '🌟'
    }
  ];

  const values = [
    {
      title: 'Accessibility First',
      description: 'Creating inclusive digital experiences for everyone',
      icon: '♿',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Innovation',
      description: 'Pushing boundaries with creative technical solutions',
      icon: '💡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Community Impact',
      description: 'Building tools that make a real difference in people\'s lives',
      icon: '🤝',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and methodologies',
      icon: '📚',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      
   
      <section className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={el => sectionRefs.current.hero = el}
            className={`text-center transform transition-all duration-1000 ${
              isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A passionate developer from Nepal, crafting accessible and innovative solutions 
              that bridge technology with human needs
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
          <div 
            ref={el => sectionRefs.current.stats = el}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 delay-200 ${
              isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-full p-2 border border-slate-700/50">
              {['story', 'skills', 'journey', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Story Tab */}
          {activeTab === 'story' && (
            <div className="animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-cyan-400 mb-6">My Story</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm a developer from Nepal who discovered my passion for creating 
                    <span className="text-cyan-400 font-semibold"> inclusive technology</span> that 
                    makes a real difference in people's lives.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My journey began with a simple question: <em>"How can technology be more accessible?"</em> 
                    This led me to build <span className="text-blue-400 font-semibold">voice-based applications</span>, 
                    <span className="text-indigo-400 font-semibold"> speech-to-text tools</span>, and 
                    <span className="text-purple-400 font-semibold"> sign language translators</span>.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    When I'm not coding, you'll find me designing random stuffs in figma or listening to music.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl backdrop-blur-md border border-slate-700/50">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🌍</span>
                        <span className="text-gray-300">Based in Nepal</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">💻</span>
                        <span className="text-gray-300">Frontend Developer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">♿</span>
                        <span className="text-gray-300">Accessibility Advocate</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🎨</span>
                        <span className="text-gray-300">UI/UX Enthusiast</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="animate-fadeIn">
              <h3 className="text-3xl font-bold text-cyan-400 mb-12 text-center">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-200">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform transition-all duration-1000 delay-${index * 100}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Journey Tab */}
          {activeTab === 'journey' && (
            <div className="animate-fadeIn">
              <h3 className="text-3xl font-bold text-cyan-400 mb-12 text-center">My Journey</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                <div className="space-y-12">
                  {journey.map((item, index) => (
                    <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-cyan-400 font-bold">{item.year}</span>
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Values Tab */}
          {activeTab === 'values' && (
            <div className="animate-fadeIn">
              <h3 className="text-3xl font-bold text-cyan-400 mb-12 text-center">Core Values</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={value.title}
                    className="group p-6 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${value.color} text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                        <p className="text-gray-300">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;