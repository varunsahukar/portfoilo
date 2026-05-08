import userPhoto from '../assets/varun.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function About({ isDark }) {
  return (
    <section
      id="about"
      className="relative py-24 px-4 max-w-6xl mx-auto min-h-screen flex items-center"
    >
      <div className="relative z-10 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-10 w-full">
        <div className="relative">
          <div className="absolute -inset-8 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(232,183,46,0.45),transparent_60%),radial-gradient(circle_at_bottom,_rgba(232,183,46,0.35),transparent_60%)] opacity-80 blur-xl pointer-events-none" />
          <div className={`relative rounded-[32px] border backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col justify-between min-h-[360px] p-8 ${isDark ? 'bg-black/50 border-white/10' : 'bg-white/50 border-black/10'}`}>
            <div>
              <p className={`text-sm uppercase tracking-[0.3em] mb-4 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                Hello, I am
              </p>
              <h2 className={`text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none bg-gradient-to-b ${isDark ? 'from-white to-white/40' : 'from-black to-black/40'} bg-clip-text text-transparent`}>
                Varun
                <span className="block text-[#e8b72e]">Sahukar</span>
              </h2>
              <p className={`mt-4 text-sm font-medium tracking-[0.22em] uppercase ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                Full‑stack Developer
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)]">
                <img
                  src={userPhoto}
                  alt="Varun"
                    className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-6">
          <div className={`rounded-3xl border backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] px-8 py-7 ${isDark ? 'bg-black/60 border-white/10' : 'bg-white/60 border-black/10'}`}>
            <h3 className={`text-sm font-semibold tracking-[0.28em] uppercase mb-3 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
              About Me
            </h3>
            <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
              I’m a developer who enjoys taking products from rough idea to
              reliable, production‑ready software. I work across the stack:
              designing APIs, modeling data, and building interfaces that feel
              clean, fast, and predictable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className={`rounded-3xl border backdrop-blur-xl px-6 py-5 ${isDark ? 'bg-black/60 border-white/10' : 'bg-white/60 border-black/10'}`}>
              <h3 className={`text-xs font-semibold tracking-[0.28em] uppercase mb-3 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                Education
              </h3>
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                Jain Deemed to be University
              </p>
              <p className="text-xs text-[#e8b72e] font-medium mt-1">
                Information Science and Engineering
              </p>
              <p className={`text-xs mt-1 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                Focused on web development, distributed systems, and backend architecture.
              </p>
            </div>
            <div className={`rounded-3xl border backdrop-blur-xl px-6 py-5 ${isDark ? 'bg-black/60 border-white/10' : 'bg-white/60 border-black/10'}`}>
              <h3 className={`text-xs font-semibold tracking-[0.28em] uppercase mb-3 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                Experience
              </h3>
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                Full‑stack projects
              </p>
              <p className={`text-xs mt-1 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                Building end‑to‑end apps with React, FastAPI, PostgreSQL, and
                modern DevOps tooling.
              </p>
            </div>
          </div>

          <div className={`rounded-3xl border backdrop-blur-xl px-6 py-5 flex flex-col gap-4 ${isDark ? 'bg-black/60 border-white/10' : 'bg-white/60 border-black/10'}`}>
            <div>
              <h3 className={`text-xs font-semibold tracking-[0.28em] uppercase mb-2 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                Skills
              </h3>
              <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                React, TypeScript, FastAPI, Node.js, PostgreSQL, Tailwind CSS.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className={`inline-flex items-center justify-center rounded-2xl border px-3 py-2 text-xs font-medium transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white/80' : 'bg-black/5 hover:bg-black/10 border-black/10 text-black/80'}`}>
                Frontend
              </button>
              <button className={`inline-flex items-center justify-center rounded-2xl border px-3 py-2 text-xs font-medium transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white/80' : 'bg-black/5 hover:bg-black/10 border-black/10 text-black/80'}`}>
                Backend
              </button>
              <button className={`inline-flex items-center justify-center rounded-2xl border px-3 py-2 text-xs font-medium transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white/80' : 'bg-black/5 hover:bg-black/10 border-black/10 text-black/80'}`}>
                APIs
              </button>
              <button className={`inline-flex items-center justify-center rounded-2xl border px-3 py-2 text-xs font-medium transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white/80' : 'bg-black/5 hover:bg-black/10 border-black/10 text-black/80'}`}>
                Databases
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="https://github.com/varunsahukar"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border backdrop-blur-xl transition-colors ${isDark ? 'bg-black/60 border-white/10 text-white/70 hover:text-white hover:bg-white/10' : 'bg-white/60 border-black/10 text-black/70 hover:text-black hover:bg-black/10'}`}
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/varunsahukar9798/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border backdrop-blur-xl transition-colors ${isDark ? 'bg-black/60 border-white/10 text-white/70 hover:text-white hover:bg-white/10' : 'bg-white/60 border-black/10 text-black/70 hover:text-black hover:bg-black/10'}`}
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/varun_sahukar19"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border backdrop-blur-xl transition-colors ${isDark ? 'bg-black/60 border-white/10 text-white/70 hover:text-white hover:bg-white/10' : 'bg-white/60 border-black/10 text-black/70 hover:text-black hover:bg-black/10'}`}
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
