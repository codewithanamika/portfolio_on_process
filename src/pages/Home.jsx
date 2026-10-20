import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  GitBranch,
} from "lucide-react";
import { Link } from "react-router-dom";

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
                View My Work
                <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
              </a>

              <a
                href="#about"
                onClick={(event) => scrollToSection(event, "about")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                More About Me
                <ArrowRight size={16} aria-hidden="true" />
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
                href="#resume"
                onClick={(event) => scrollToSection(event, "resume")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                Explore my background
                <ArrowRight size={16} aria-hidden="true" />
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
              <GitBranch size={17} aria-hidden="true" />
              More on GitHub
              <ExternalLink size={14} aria-hidden="true" />
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

                  <ArrowUpRight
                    size={19}
                    className="text-slate-400"
                    aria-hidden="true"
                  />
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
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
                    >
                      Live Demo
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}

                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-700"
                    >
                      View Code
                      <GitBranch size={15} aria-hidden="true" />
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

      {/* Education and Resume */}
      <section id="resume" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-center md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Background
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Learning, building, growing.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              My background in Information Management and practical frontend
              experience help me approach problems with technical curiosity and
              an understanding of users.
            </p>

            <div className="mt-8 border-l-2 border-blue-200 pl-5">
              <p className="text-sm font-medium text-blue-700">2022 – 2026</p>

              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Bachelor of Information Management
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Mechi Multiple Campus
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/cv"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                View CV
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
            <p className="text-sm font-semibold text-slate-500">
              What I'm focused on
            </p>

            <ul className="mt-6 space-y-5">
              <li>
                <h3 className="font-semibold text-slate-900">
                  Strengthening React fundamentals
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Practising reusable components and application structure.
                </p>
              </li>

              <li>
                <h3 className="font-semibold text-slate-900">
                  Creating responsive interfaces
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Building layouts that work across different screen sizes.
                </p>
              </li>

              <li>
                <h3 className="font-semibold text-slate-900">
                  Improving through projects
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Practising problem-solving and learning from each project.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-slate-200 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-4xl rounded-2xl bg-slate-950 px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
            Let's connect
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have an opportunity in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
            I'm interested in opportunities to contribute to a team, learn from
            others, and continue growing as a frontend developer.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:anamikaregmi1@gmail.com"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Mail size={17} aria-hidden="true" />
              Email Me
            </a>

            <a
              href="https://github.com/codewithanamika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-slate-800"
            >
              <GitBranch size={17} aria-hidden="true" />
              GitHub
              <ExternalLink size={14} aria-hidden="true" />
            </a>

            <a
              href="#home"
              onClick={(event) => scrollToSection(event, "home")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold !text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Back to Top
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
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
