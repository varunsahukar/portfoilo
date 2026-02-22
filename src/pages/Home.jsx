export default function Home() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-screen flex items-center">
      <div className="relative z-10 w-full flex flex-col items-start text-left">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
          Hi, I'm <span className="text-blue-500">Varun Sahukar</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-8">
          I’m a <span className="nav-link-curly text-white">full‑stack developer</span> who enjoys taking ideas from sketch to production. I design <span className="nav-link-curly text-white">APIs</span>, model data, and build <span className="nav-link-curly text-white">fast, responsive interfaces</span> that feel thoughtful, reliable, and easy to use.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-900/20">View Work</a>
          <a href="#contact" className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition bg-white/5">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
