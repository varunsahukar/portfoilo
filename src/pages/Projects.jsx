import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNodedotjs, 
  SiFirebase, 
  SiVuedotjs, 
  SiD3Dotjs, 
  SiPython,
  SiGithub 
} from 'react-icons/si';

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-scale online store with secure payments, real-time inventory tracking, and an intuitive admin dashboard.",
      icon: SiReact,
      rotation: -2,
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative tool for teams to manage projects, track time, and automate workflows with ease.",
      icon: SiVuedotjs,
      rotation: 1.5,
      liveUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform processing millions of data points for actionable business insights.",
      icon: SiD3Dotjs,
      rotation: -1,
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <p className="max-w-2xl mx-auto mb-10 text-center text-sm text-slate-400">
          Each card below highlights a project I’ve built, including the core tech and what it does.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {[ 
          ...projects,
          { title: "Serverless Chat App", description: "Realtime messaging using Firebase/Socket.io with auth and presence.", icon: SiFirebase, liveUrl: "#" },
          { title: "Weather Tracker", description: "Global weather forecasting using OpenWeatherMap API and Leaflet maps.", icon: SiPython, liveUrl: "#" }
        ].map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.05, 
              ease: [0.23, 1, 0.32, 1]
            }}
            whileHover={{ 
              y: -5, 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
            className="group relative w-full"
          >
            <div className="h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-8 text-white/90 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                  {project.icon && <project.icon className="text-2xl" />}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-8">{project.description}</p>
              <div className="flex items-center justify-between">
                <a 
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
