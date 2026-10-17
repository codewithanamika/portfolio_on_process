
import React from "react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    number: "01",
    title: "SignBridge",
    category: "Accessibility · React",
    description:
      "An accessibility-focused project that connects text with sign language video content, exploring how technology can make communication more inclusive.",
    tags: ["React", "JavaScript", "Accessibility"],
    github: "https://github.com/codewithanamika/SB",
  },
  {
    number: "02",
    title: "E-commerce Application",
    category: "Web Application",
    description:
      "An online shopping application with user authentication, cart functionality, and admin order management.",
    tags: ["React", "Authentication", "Cart management"],
    live: "https://e-com-2d0a.onrender.com",
  },
];

const otherProjects = [
  {
    number: "03",
    title: "Voice-Based Calculator",
    description:
      "A calculator that uses the Web Speech API to support voice-based interaction.",
    tags: ["JavaScript", "Web Speech API"],
    github: "https://github.com/codewithanamika/VBC_geminiapi",
  },
  {
    number: "04",
    title: "ToDo App",
    description:
      "A task management application that helps users organize daily tasks and save them using localStorage.",
    tags: ["React", "JavaScript", "localStorage"],
    live: "https://organizeyourtodos.netlify.app/",
  },
];

const ProjectLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
  >
    {children}
    <span aria-hidden="true">↗</span>
  </a>
);

const Projects = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Page introduction */}
      <section className="px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium tracking-wide text-slate-500">
            PORTFOLIO / SELECTED WORK
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Projects built through{" "}
            <span className="text-blue-700">curiosity and practice.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            I build web applications to practise problem-solving, explore
            frontend technologies, and create interfaces that are useful and
            accessible.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span>Selected projects</span>
            <span>React & JavaScript</span>
            <a
              href="https://github.com/codewithanamika"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              GitHub profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                Featured work
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Projects in focus
              </h2>
            </div>
            <span className="hidden text-sm text-slate-400 sm:block">
              01 — 02
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.number}
                className="flex flex-col border-t-2 border-slate-900 py-6 sm:py-7"
              >
                <p className="text-sm font-medium text-slate-400">
                  {project.number} / {project.category}
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs font-medium text-slate-500"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-5">
                  {project.github && (
                    <ProjectLink href={project.github}>
                      View source
                    </ProjectLink>
                  )}
                  {project.live && (
                    <ProjectLink href={project.live}>
                      View live project
                    </ProjectLink>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other projects */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            More work
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Other projects
          </h2>

          <div className="mt-8 border-t border-slate-200">
            {otherProjects.map((project) => (
              <article
                key={project.number}
                className="grid gap-4 border-b border-slate-200 py-7 sm:grid-cols-[52px_1fr_auto] sm:items-start sm:gap-6"
              >
                <p className="text-sm tabular-nums text-slate-400">
                  {project.number}
                </p>

                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs text-slate-500"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:pt-1">
                  {project.github && (
                    <ProjectLink href={project.github}>
                      View source
                    </ProjectLink>
                  )}
                  {project.live && (
                    <ProjectLink href={project.live}>
                      View live project
                    </ProjectLink>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 border-b border-slate-200 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Let's build something useful.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              I'm interested in junior developer opportunities, collaboration,
              and learning from an experienced team.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 border-b border-blue-700 pb-1 text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-slate-700">Anamika Regmi.</p>
          <p>© {new Date().getFullYear()} Anamika Regmi</p>
        </div>
      </footer>
    </main>
  );
};

export default Projects;
