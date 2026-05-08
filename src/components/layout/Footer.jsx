export default function Footer({ isDark }) {
  return (
    <footer className={`py-12 px-4 text-center border-t transition-colors duration-500 ${isDark ? 'text-white/40 border-white/10 bg-black' : 'text-black/40 border-black/10 bg-[#F5F0E8]'}`}>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <p className="text-sm font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} VARUN SAHUKAR. Crafted with Precision.
        </p>
        <div className="flex gap-6 text-xs font-bold tracking-[0.2em] uppercase">
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-amber-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
