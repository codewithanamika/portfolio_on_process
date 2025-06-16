import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [activeSection, setActiveSection] = useState('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Store in memory
    const timestamp = new Date().toISOString();
    const messageData = { ...form, timestamp };
    
    console.log('Message submitted:', messageData);
    alert('Message sent successfully! 🎉');
    setForm({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'anamikaregmi1@gmail.com',
      description: 'Drop me a line anytime',
      href: 'mailto:anamikaregmi1@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      description: 'Professional networking',
      href: 'https://www.linkedin.com/in/anamika-regmi-962611244?utm_sources=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'Check my work',
      description: 'Open source projects',
      href: 'https://github.com/codewithanamika'
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: 'Follow me',
      description: 'Latest updates',
      href: 'https://x.com/AnamikaRegmi?t=grBt -TX5vK7ZUxPOBIFQ&s=09'
    }
  ];

  const stats = [
    { number: '24h', label: 'Response Time', icon: '⚡' },
    { number: '100%', label: 'Privacy Guaranteed', icon: '🔒' },
    { number: '∞', label: 'Coffee Consumed', icon: '☕' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say hello? 
              I'd love to hear from you!
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

      {/* Tab Navigation */}
      <section className="py-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-full p-2 border border-slate-700/50">
              {['contact', 'connect'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSection(tab)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                    activeSection === tab
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {tab === 'contact' ? 'Send Message' : 'Connect With Me'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Contact Form Tab */}
          {activeSection === 'contact' && (
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-cyan-400 mb-4">Send a Message</h3>
                  <p className="text-gray-300 mb-8">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={form.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      'Send Message 🚀'
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-blue-400 mb-4">Get in Touch</h3>
                  <p className="text-gray-300 mb-8">
                    Prefer a more direct approach? Reach out through any of these channels.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {contactMethods.slice(0, 2).map((method) => (
                    <a
                      key={method.title}
                      href={method.href}
                      className="block p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-600 rounded-lg text-2xl">
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-1">{method.title}</h4>
                          <p className="text-blue-400 font-medium">{method.value}</p>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Social Media Tab */}
          {activeSection === 'connect' && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-blue-400 mb-4">Let's Connect</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Follow me on social media for updates, behind-the-scenes content, and tech discussions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    className="p-8 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-colors text-center"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-6 bg-blue-600 rounded-xl text-4xl">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold text-white mb-2">{method.title}</h4>
                        <p className="text-blue-400 font-medium text-lg mb-1">{method.value}</p>
                        <p className="text-gray-400">{method.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;