import userPhoto from '../assets/varun.png'

export default function Home() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-screen flex items-center">
      <div className="relative z-10 grid md:grid-cols-2 gap-10 w-full">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
            Hi, I'm <span className="text-blue-500">Varun Sahukar</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-8">
            I’m a developer focused on building scalable web applications. I work across both frontend and backend systems, designing APIs, managing databases, and creating clean, responsive interfaces.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-900/20">View Work</a>
            <a href="#contact" className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition bg-white/5">Contact Me</a>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src={userPhoto}
            alt="Varun"
            className="w-full max-w-sm rounded-2xl object-cover ring-1 ring-white/20 shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
