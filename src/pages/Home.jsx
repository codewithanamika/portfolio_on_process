import React from "react";

const skills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
  "Responsive Design",
  "Web Accessibility",
];

const projects = [
  {
    number: "01",
    title: "SignBridge",
    description:
      "A project focused on making communication more accessible through sign-language text and video content.",
    tags: ["React", "JavaScript", "Accessibility"],
    code: "https://github.com/codewithanamika/SB",
  },
  {
    number: "02",
    title: "E-commerce Application",
    description:
      "An e-commerce application featuring authentication, a shopping cart, and admin order management.",
    tags: ["React", "JavaScript", "Authentication"],
    demo: "https://e-com-2d0a.onrender.com",
  },
  {
    number: "03",
    title: "Voice-Based Calculator",
    description:
      "A calculator project that explores voice interaction using the Web Speech API.",
    tags: ["JavaScript", "Web Speech API"],
    code: "https://github.com/codewithanamika/VBC_geminiapi",
  },
  {
    number: "04",
    title: "ToDo App",
    description:
      "A simple task management app for organizing everyday tasks and saving them with local storage.",
    tags: ["React", "Local Storage"],
    demo: "https://organizeyourtodos.netlify.app/",
  },
  {
    number: "05",
    title: "Notes App",
    description:
      "A notes application with login and signup screens, dark mode, and local storage.",
    tags: ["React", "Dark Mode", "Local Storage"],
    demo: "https://notesasreminder.netlify.app/login",
  },
  {
    number: "06",
    title: "Theme Switcher",
    description:
      "A small project exploring theme switching and reusable interface components.",
    tags: ["React", "UI"],
    code: "https://github.com/codewithanamika/theme-switcher",
  },
];

const interests = [
  {
    number: "01",
    title: "User-focused interfaces",
    description:
      "Building responsive interfaces that feel clear, intuitive, and easy to use.",
  },
  {
    number: "02",
    title: "Accessible experiences",
    description:
      "Learning to make websites more inclusive and usable for different people.",
  },
  {
    number: "03",
    title: "Learning by building",
    description:
      "Improving my JavaScript and React skills through practice and projects.",
  },
];

const scrollToSection = (event, sectionId) => {
  event.preventDefault();

  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section
        id="home"
        className="scroll-mt-24 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-600">
              <span
                className="h-2 w-2 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              Frontend Developer · React
            </p>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Hello, I'm Anamika Regmi
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl md:text-7xl">
              Turning ideas into{" "}
              <span className="text-blue-600">web experiences.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              I'm a frontend developer with hands-on experience in React and
              modern web technologies. I enjoy building responsive,
              user-friendly interfaces and learning through practical projects.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                onClick={(event) => scrollToSection(event, "projects")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold !text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                View My Work <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#about"
                onClick={(event) => scrollToSection(event, "about")}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                More About Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
              <span>React & JavaScript</span>
              <span>Responsive Design</span>
              <span>Project-based Learning</span>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-200 pt-6">
            <p className="text-sm leading-7 text-slate-500">
              Currently building my skills, exploring new ideas, and looking for
              opportunities to grow as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              A little about me
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Curious by nature. A developer in progress.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              My background is in Information Management, and my interest in
              technology has led me toward frontend development. Through
              hands-on practice and an internship, I've been learning how to
              turn ideas into functional web interfaces using React and
              JavaScript.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              I enjoy working on practical problems, exploring accessible
              design, and improving my code one project at a time. I'm still
              learning, and I see each project as an opportunity to get better.
            </p>

            <div className="mt-7">
              
<a
  href="/cv"
  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
>
  View my CV <span aria-hidden="true">→</span>
</a>

            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
          {interests.map((interest) => (
            <article
              key={interest.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
            >
              <p className="text-sm font-semibold text-blue-700">
                {interest.number}
              </p>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {interest.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {interest.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Projects I've built.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                A selection of projects where I've practised frontend
                development, explored APIs, and worked on useful features.
              </p>
            </div>

            <a
              href="https://github.com/codewithanamika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              More on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-300 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-700">
                    {project.number}
                  </span>
                  <span className="text-lg text-slate-400" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-100 pt-5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-700 hover:text-blue-700"
                    >
                      View Code ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            My toolkit
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Technologies I'm learning and using.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            The tools and fundamentals I use to build, style, and improve web
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      
      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Let's build something meaningful.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              I'm open to frontend development opportunities where I can
              contribute, learn from a team, and continue growing my skills.
              I'd love to hear from you!
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anamikaregmi1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-blue-700"
            >
              Email Me <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-medium text-slate-500">
              Contact details
            </p>

            <div className="mt-5">
              <p className="text-sm text-slate-500">Email</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=anamikaregmi1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 break-all font-semibold text-slate-900 hover:text-blue-700"
              >
                anamikaregmi1@gmail.com
              </a>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-sm text-slate-500">GitHub</p>
              <a
                href="https://github.com/codewithanamika"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-blue-700"
              >
                github.com/codewithanamika ↗
              </a>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-sm text-slate-500">Resume</p>
              <a
                href="/cv"
                className="mt-1 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
              >
                View my CV ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-semibold text-slate-800">
            Anamika Regmi<span className="text-blue-600">.</span>
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Anamika Regmi. Built with care.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
