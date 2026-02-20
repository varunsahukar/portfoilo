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
      <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
      <p className="max-w-2xl mx-auto mb-10 text-center text-sm text-slate-400">
        Each card below highlights a project I’ve built, including the core tech and what it does.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {[ 
          ...projects,
          { title: "Serverless Chat App", description: "Realtime messaging using Firebase/Socket.io with auth and presence.", icon: SiFirebase, liveUrl: "#" },
          { title: "API Gateway", description: "Node.js gateway with rate limiting, caching and observability.", icon: SiNodedotjs, liveUrl: "#" },
          { title: "Data Pipelines", description: "Python ETL pipelines for analytics and reporting.", icon: SiPython, liveUrl: "#" }
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex justify-center">
              <div className="w-[310px] p-[1px] rounded-2xl bg-black/60 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.85)]">
                <div className="rounded-2xl bg-black/70 flex flex-col h-full px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
                        {Icon && <Icon className="w-7 h-7 text-sky-400" />}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] tracking-[0.18em] uppercase text-white/40 mb-0.5">
                          Project
                        </span>
                        <p className="text-white font-semibold text-base">
                          {item.title}
                        </p>
                        <p className="text-white/40 text-xs">
                          Featured project
                        </p>
                      </div>
                    </div>
                    <button className="w-5 text-white/40 hover:text-white duration-200">
                      <SiGithub className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mt-4 flex-1">
                    {item.description}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <a
                      href={item.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-blue-600/90 hover:bg-blue-500 text-xs font-semibold text-white px-4 py-1.5 transition-colors"
                    >
                      <span>Go live</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}
