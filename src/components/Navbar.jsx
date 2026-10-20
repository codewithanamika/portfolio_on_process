
import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex min-h-[76px] max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
          {/* Personal Brand */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold tracking-wide text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              AR
            </span>

            <span className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                Anamika Regmi
              </span>
              <span className="mt-0.5 text-xs font-medium tracking-wide text-slate-500">
                Frontend Developer
              </span>
            </span>
          </Link>

          {/* Contact and CV */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anamikaregmi1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Anamika Regmi"
              title="Send an email to anamikaregmi1@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              <Mail size={18} strokeWidth={1.8} aria-hidden="true" />

              <span className="hidden lg:inline">
                anamikaregmi1@gmail.com
              </span>

              <span className="lg:hidden">Email</span>
            </a>

            <Link
              to="/cv"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2.5 text-sm font-semibold !text-white transition-colors hover:bg-blue-600 sm:px-5"
            >
              View CV
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </header>

      <div aria-hidden="true" className="h-[76px]" />
    </>
  );
};

export default Navbar;
