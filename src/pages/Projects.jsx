import { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { 
  SiReact, 
  SiFirebase, 
  SiVuedotjs, 
  SiD3Dotjs, 
  SiPython,
  SiGithub 
} from 'react-icons/si';

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const sectionRef = useRef(null);
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  
  // Custom cursor motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for the custom cursor
  const springX = useSpring(mouseX, { stiffness: 250, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 25 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-scale online store with secure payments, real-time inventory tracking, and an intuitive admin dashboard. Built with React and Node.js.",
      icon: SiReact,
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative tool for teams to manage projects, track time, and automate workflows with ease. High performance and real-time updates.",
      icon: SiVuedotjs,
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform processing millions of data points for actionable business insights. Using D3.js and React.",
      icon: SiD3Dotjs,
      liveUrl: "#"
    },
    { 
      id: 4,
      title: "Serverless Chat App", 
      description: "Realtime messaging using Firebase/Socket.io with auth and presence. Seamlessly scales to thousands of concurrent users.", 
      icon: SiFirebase, 
      liveUrl: "#" 
    },
    { 
      id: 5,
      title: "Weather Tracker", 
      description: "Global weather forecasting using OpenWeatherMap API and Leaflet maps. Real-time alerts and interactive weather maps.", 
      icon: SiPython, 
      liveUrl: "#" 
    }
  ];

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 px-4 max-w-6xl mx-auto min-h-screen relative overflow-hidden group/section"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
      style={{ cursor: isHoveringSection && !selectedId ? 'none' : 'auto' }}
    >
      {/* Custom "Click" Cursor */}
      <AnimatePresence>
        {isHoveringSection && !selectedId && (
          <motion.div
            style={{
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed top-0 left-0 w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-full flex items-center justify-center pointer-events-none z-[60] backdrop-blur-[2px]"
          >
            <span className="text-[8px] font-bold uppercase tracking-widest text-blue-400">Click</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-8xl font-black mb-12 text-center tracking-tighter uppercase bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
          WORK SPACE
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-center text-sm text-slate-400">
          Click on any card below to see more details.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: project.id * 0.05, 
              ease: [0.23, 1, 0.32, 1]
            }}
            whileHover={{ 
              y: -5, 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
            className="group relative w-full cursor-pointer font-mono"
          >
            <div className="h-full rounded-xl border border-white/10 bg-black/80 shadow-2xl overflow-hidden transition-all duration-300 group-hover:border-blue-500/30">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest">zsh</div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    layoutId={`icon-${project.id}`}
                    className="text-blue-400"
                  >
                    {project.icon && <project.icon className="text-xl" />}
                  </motion.div>
                  <motion.h3 layoutId={`title-${project.id}`} className="text-base font-bold text-white/90 uppercase tracking-tight">
                    {project.title}
                  </motion.h3>
                </div>
                
                <div className="flex gap-2 text-sm">
                  <span className="text-blue-500 font-bold">$</span>
                  <motion.p layoutId={`desc-${project.id}`} className="text-white/60 leading-relaxed line-clamp-3">
                    {project.description}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[100] cursor-zoom-out"
            />
            
            {/* Expanded Card */}
            <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4 font-mono">
              <motion.div
                layoutId={`card-${selectedId}`}
                className="bg-black/90 border border-white/20 rounded-xl shadow-2xl pointer-events-auto relative overflow-hidden max-w-2xl w-full"
              >
                {/* Terminal Title Bar */}
                <div className="flex items-center justify-between px-6 py-3 bg-white/10 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">project_details.sh</div>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="p-1 rounded-md hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-6">
                      <motion.div 
                        layoutId={`icon-${selectedId}`}
                        className="text-blue-400"
                      >
                        {selectedProject.icon && <selectedProject.icon className="text-5xl" />}
                      </motion.div>
                      <motion.h3 
                        layoutId={`title-${selectedId}`}
                        className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase"
                      >
                        {selectedProject.title}
                      </motion.h3>
                    </div>

                    <div className="flex gap-4">
                      <span className="text-blue-500 font-bold text-xl">$</span>
                      <motion.p 
                        layoutId={`desc-${selectedId}`}
                        className="text-lg text-white/80 leading-relaxed"
                      >
                        {selectedProject.description}
                      </motion.p>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap gap-4 pt-6 border-t border-white/5"
                    >
                      <a 
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all"
                      >
                        ./run_demo.sh
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                      </a>
                      <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 font-bold transition-all border border-white/10">
                        git_clone
                        <SiGithub className="text-lg" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
