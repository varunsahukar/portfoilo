import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]
  const left = navLinks.slice(0, 2)
  const right = navLinks.slice(2)

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 w-full">
        <div className="relative w-full">
          <div className="hidden md:flex items-center justify-center">
            <div className={`inline-flex p-[1px] rounded-full backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.85)] ${isDark ? 'bg-black/60' : 'bg-white/60'}`}>
              <div className={`inline-flex items-center gap-4 px-6 py-2.5 rounded-full ${isDark ? 'bg-black/80' : 'bg-white/80'}`}>
                {[...left, ...right].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`nav-link-curly px-2.5 py-1.5 text-sm rounded-full transition-colors ${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'}`}
                  >
                    {link.name}
                  </a>
                ))}
                <span className={`h-5 w-px ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                <button
                  onClick={() => setIsDark(!isDark)}
                  aria-label="Toggle theme"
                  className={`p-2 rounded-full transition-colors ${isDark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-black/80 hover:text-black hover:bg-black/10'}`}
                >
                  {isDark ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </button>
                <span className={`h-5 w-px ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                <a
                  href="#contact"
                  className={`px-3 py-1.5 text-xs font-medium rounded-full flex items-center gap-1 transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="M7 10l5 5 5-5" />
                    <path d="M12 15V3" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>
          </div>

          <div className="flex md:hidden items-center justify-between px-4 py-3">
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className={`p-2.5 rounded-md transition ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className={`rounded-md p-2.5 transition ${isDark ? 'hover:bg-white/10 active:scale-95' : 'hover:bg-black/10 active:scale-95'}`}
            >
              {open ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className={`md:hidden fixed top-14 left-0 right-0 z-40 mx-auto w-[92vw] p-[1px] rounded-2xl backdrop-blur-xl ${isDark ? 'bg-black/60' : 'bg-white/60'}`}
          >
            <div className={`rounded-2xl p-3 ${isDark ? 'bg-black/80' : 'bg-white/80'}`}>
              <div className="grid gap-1">
                {navLinks.concat([{ name: 'Resume', href: '#contact' }]).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`nav-link-curly px-3 py-2 rounded-lg text-sm transition-colors ${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'}`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
