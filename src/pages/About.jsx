import userPhoto from '../assets/varun.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 max-w-6xl mx-auto min-h-screen flex items-center"
    >
      <div className="relative z-10 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-10 w-full">
        <div className="relative">
          <div className="absolute -inset-8 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.45),transparent_60%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.35),transparent_60%)] opacity-80 blur-3xl pointer-events-none" />
          <div className="relative rounded-[32px] bg-black/50 border border-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col justify-between min-h-[360px] p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
                Hello, I am
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Varun
                <span className="block text-blue-500">Sahukar</span>
              </h2>
              <p className="mt-4 text-sm font-medium tracking-[0.22em] uppercase text-white/40">
                Full‑stack Developer
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)]">
                <img
                  src={userPhoto}
                  alt="Varun"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-6">
          <div className="rounded-3xl bg-black/60 border border-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.85)] px-8 py-7">
            <h3 className="text-sm font-semibold tracking-[0.28em] uppercase text-white/40 mb-3">
              About Me
            </h3>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              I’m a developer who enjoys taking products from rough idea to
              reliable, production‑ready software. I work across the stack:
              designing APIs, modeling data, and building interfaces that feel
              clean, fast, and predictable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-black/60 border border-white/10 backdrop-blur-2xl px-6 py-5">
              <h3 className="text-xs font-semibold tracking-[0.28em] uppercase text-white/40 mb-3">
                Education
              </h3>
              <p className="text-sm text-white font-semibold">
                Jain Deemed to be University
              </p>
              <p className="text-xs text-blue-400 font-medium mt-1">
                Information Science and Engineering
              </p>
              <p className="text-xs text-white/50 mt-1">
                Focused on web development, distributed systems, and backend architecture.
              </p>
            </div>
            <div className="rounded-3xl bg-black/60 border border-white/10 backdrop-blur-2xl px-6 py-5">
              <h3 className="text-xs font-semibold tracking-[0.28em] uppercase text-white/40 mb-3">
                Experience
              </h3>
              <p className="text-sm text-white font-semibold">
                Full‑stack projects
              </p>
              <p className="text-xs text-white/50 mt-1">
                Building end‑to‑end apps with React, FastAPI, PostgreSQL, and
                modern DevOps tooling.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-black/60 border border-white/10 backdrop-blur-2xl px-6 py-5 flex flex-col gap-4">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.28em] uppercase text-white/40 mb-2">
                Skills
              </h3>
              <p className="text-sm text-white/70">
                React, TypeScript, FastAPI, Node.js, PostgreSQL, Tailwind CSS.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 text-xs font-medium text-white/80 transition-colors">
                Frontend
              </button>
              <button className="inline-flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 text-xs font-medium text-white/80 transition-colors">
                Backend
              </button>
              <button className="inline-flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 text-xs font-medium text-white/80 transition-colors">
                APIs
              </button>
              <button className="inline-flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 text-xs font-medium text-white/80 transition-colors">
                Databases
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="https://github.com/varunsahukar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/varunsahukar9798/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/varun_sahukar19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
