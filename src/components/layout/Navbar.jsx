import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]
  const left = navLinks.slice(0, 2)
  const right = navLinks.slice(2)

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 w-full">
        <div className="relative w-full">
          <div className="hidden md:flex items-center justify-center">
            <div className="inline-flex p-[1px] rounded-full bg-black/60 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.85)]">
              <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-black/80">
                {[...left, ...right].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="nav-link-curly px-2.5 py-1.5 text-sm text-white/80 hover:text-white rounded-full transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <span className="h-5 w-px bg-white/10" />
                <a
                  href="#contact"
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center gap-1 transition-colors"
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

          <div className="flex md:hidden items-center justify-end px-4 py-3">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="rounded-md p-2.5 hover:bg-white/10 active:scale-95 transition"
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
            className="md:hidden fixed top-14 left-0 right-0 z-40 mx-auto w-[92vw] p-[1px] rounded-2xl bg-black/60 backdrop-blur-xl"
          >
            <div className="rounded-2xl bg-black/80 p-3">
              <div className="grid gap-1">
                {navLinks.concat([{ name: 'Resume', href: '#contact' }]).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="nav-link-curly px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white transition-colors"
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
