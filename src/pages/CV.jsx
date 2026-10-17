import React from "react";

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6">
      <div className="mx-auto mb-6 flex max-w-4xl justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Download CV as PDF ↓
        </button>
      </div>

      <article className="cv-page mx-auto max-w-4xl bg-white px-6 py-10 shadow-sm sm:px-12 sm:py-12">
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-5">
          <h1 className="text-3xl font-bold uppercase tracking-wide text-slate-950 sm:text-4xl">
            Anamika Regmi
          </h1>

          <p className="mt-2 text-lg font-medium text-blue-700">
            Frontend Developer | React.js
          </p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
            <span>Nepal</span>

            <a
              href="https://github.com/codewithanamika"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://anamikaregmi.com.np"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio ↗
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="cv-section mt-7">
          <h2 className="cv-heading">Professional Summary</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Aspiring frontend developer with hands-on experience in React.js,
            JavaScript, and responsive web development. Completed a frontend
            development internship and built practical projects involving
            reusable interfaces, API integration, and browser storage.
            Interested in creating accessible, user-friendly web applications
            while continuing to strengthen technical skills.
          </p>
        </section>

        {/* Skills */}
        <section className="cv-section mt-7">
          <h2 className="cv-heading">Technical Skills</h2>
          <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            <p>
              <strong>Frontend:</strong> React.js, JavaScript, HTML5, CSS3,
              Tailwind CSS
            </p>
            <p>
              <strong>Tools:</strong> Git, GitHub, Vite
            </p>
            <p>
              <strong>Concepts:</strong> Responsive Design, Reusable Components,
              Local Storage, Web Accessibility
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="cv-section mt-7">
          <h2 className="cv-heading">Experience</h2>

          <div className="mt-3">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-semibold text-slate-900">
                Frontend Developer Intern
              </h3>
              <span className="text-sm text-slate-500">3-month internship</span>
            </div>

            <p className="mt-1 text-sm font-medium text-blue-700">ByteGurkha</p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
              <li>
                Gained practical experience in frontend development using modern
                web technologies.
              </li>
              <li>
                Practised building and styling responsive user interfaces with
                attention to usability.
              </li>
              <li>
                Developed familiarity with component-based development and
                frontend project workflows.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="cv-section mt-7">
          <h2 className="cv-heading">Selected Projects</h2>

          <div className="mt-3 space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900">SignBridge</h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Developed a project focused on accessible communication through
                sign-language text and video content.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Technologies: React, JavaScript
              </p>
              <a
                href="https://github.com/codewithanamika/SB"
                className="cv-link mt-1 inline-block text-sm"
              >
                GitHub Repository
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                E-commerce Application
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Built an e-commerce application featuring authentication,
                shopping cart functionality, and admin order management.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Technologies: React, JavaScript
              </p>
              <a
                href="https://e-com-2d0a.onrender.com"
                className="cv-link mt-1 inline-block text-sm"
              >
                Live Demo
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Voice-Based Calculator
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Explored voice-based calculator interactions using the Web
                Speech API.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Technologies: JavaScript, Web Speech API
              </p>
              <a
                href="https://github.com/codewithanamika/VBC_geminiapi"
                className="cv-link mt-1 inline-block text-sm"
              >
                GitHub Repository
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                ToDo App & Notes App
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Built productivity applications for task and note management,
                using browser storage to retain user data.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Technologies: React, Local Storage
              </p>
              <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <a
                  href="https://organizeyourtodos.netlify.app/"
                  className="cv-link"
                >
                  ToDo Live Demo
                </a>
                <a
                  href="https://notesasreminder.netlify.app/login"
                  className="cv-link"
                >
                  Notes Live Demo
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Education */}

        <section className="cv-section mt-7">
          <h2 className="cv-heading">Education</h2>

          <div className="mt-3">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-semibold text-slate-900">
                Bachelor of Information Management (BIM)
              </h3>

              <span className="text-sm text-slate-500">2022 – 2026</span>
            </div>

            <p className="mt-1 text-sm text-slate-700">Mechi Multiple Campus</p>
          </div>
        </section>

        {/* Freelance Experience */}
        <section className="cv-section mt-7">
          <h2 className="cv-heading">Freelance Experience</h2>

          <div className="mt-3">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-semibold text-slate-900">
                Freelance Web & Digital Marketing Assistant
              </h3>

              <span className="text-sm text-slate-500">2026 – Present</span>
            </div>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
              <li>
                Create and publish Google Business Profile posts to support
                local business visibility and customer engagement.
              </li>
              <li>
                Prepare service descriptions and conduct keyword research to
                support local SEO and align business content with customer
                search intent.
              </li>
              <li>
                Update business profiles and optimize image filenames and
                related content as part of ongoing SEO tasks.
              </li>
              <li>
                Perform manual website testing by checking page layouts,
                navigation links, forms, and responsive behavior to identify
                visible issues.
              </li>
              <li>
                Assist with website content updates and digital marketing tasks
                for business websites.
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
};

export default CV;
