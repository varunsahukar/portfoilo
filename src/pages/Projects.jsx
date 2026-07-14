import { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { 
  SiReact, 
  SiTypescript, 
  SiGithub 
} from 'react-icons/si';

export default function Projects({ isDark }) {
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
      title: "Solo Bot",
      description: "AI-powered study app: chat with documents, generate quizzes, explain code, summarize videos. Powered by Groq, Supabase, and FastAPI.",
      icon: SiReact,
      githubUrl: "https://github.com/varunsahukar/Solo-Bot.git",
      liveUrl: "https://solobot.netlify.app"
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Modern developer portfolio with animated sections, dark/light theme, and SEO optimization. Built with React, Framer Motion, and Tailwind CSS.",
      icon: SiReact,
      githubUrl: "https://github.com/varunsahukar/portfoilo.git",
      liveUrl: "https://varunsahukar9798-portfoilo.vercel.app"
    },
    {
      id: 3,
      title: "Finca",
      description: "Modern finance application for tracking expenses, managing budgets, and visualizing financial data with beautiful charts.",
      icon: SiReact,
      githubUrl: "https://github.com/narensen/Finca.git",
      liveUrl: "https://finca-opal.vercel.app/"
    },
    {
      id: 4,
      title: "Lumina",
      description: "A sleek, modern AI-powered productivity application with real-time collaboration, smart task management, and an intuitive user interface.",
      icon: SiReact,
      githubUrl: "https://github.com/varunsahukar/Lumina.git"
    },
    {
      id: 5,
      title: "Helix (Team Ocular)",
      description: "Collaborative team platform with advanced visualization, real-time data synchronization, and scalable system architecture.",
      icon: SiTypescript,
      githubUrl: "https://github.com/varunsahukar/team-ocular.git"
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
            className={`fixed top-0 left-0 w-12 h-12 rounded-full flex items-center justify-center pointer-events-none z-[60] backdrop-blur-[2px] ${isDark ? 'bg-[rgba(232,183,46,0.2)] border border-[rgba(232,183,46,0.5)]' : 'bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.2)]'}`}
          >
            <span className={`text-[8px] font-bold uppercase tracking-widest ${isDark ? 'text-[#e8b72e]' : 'text-black'}`}>Click</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-5xl md:text-8xl font-black mb-12 text-center tracking-tighter uppercase bg-gradient-to-b ${isDark ? 'from-white to-white/40' : 'from-black to-black/40'} bg-clip-text text-transparent`}>
          WORK SPACE
        </h2>
        <p className={`max-w-2xl mx-auto mb-10 text-center text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
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
            <div className={`h-full rounded-xl border shadow-2xl overflow-hidden transition-all duration-300 ${isDark ? 'border-white/10 bg-black/80 group-hover:border-[rgba(232,183,46,0.3)]' : 'border-black/10 bg-white/80 group-hover:border-[rgba(0,0,0,0.3)]'}`}>
              {/* Terminal Title Bar */}
              <div className={`flex items-center justify-between px-4 py-2 border-b ${isDark ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'}`}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-black/30'}`}>zsh</div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    layoutId={`icon-${project.id}`}
                    className={`${isDark ? 'text-[#e8b72e]' : 'text-black'}`}
                  >
                    {project.icon && <project.icon className="text-xl" />}
                  </motion.div>
                  <motion.h3 layoutId={`title-${project.id}`} className={`text-base font-bold uppercase tracking-tight ${isDark ? 'text-white/90' : 'text-black/90'}`}>
                    {project.title}
                  </motion.h3>
                </div>
                
                <div className="flex gap-2 text-sm">
                  <span className={`font-bold ${isDark ? 'text-[#e8b72e]' : 'text-black'}`}>$</span>
                  <motion.p layoutId={`desc-${project.id}`} className={`leading-relaxed line-clamp-3 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
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
              className={`fixed inset-0 backdrop-blur-xl z-[100] cursor-zoom-out ${isDark ? 'bg-black/40' : 'bg-black/20'}`}
            />
            
            {/* Expanded Card */}
            <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4 font-mono">
              <motion.div
                layoutId={`card-${selectedId}`}
                className={`rounded-xl shadow-2xl pointer-events-auto relative overflow-hidden max-w-2xl w-full ${isDark ? 'bg-black/90 border border-white/20' : 'bg-white/90 border border-black/20'}`}
              >
                {/* Terminal Title Bar */}
                <div className={`flex items-center justify-between px-6 py-3 border-b ${isDark ? 'bg-white/10 border-white/10' : 'bg-black/10 border-black/10'}`}>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className={`text-xs uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-black/40'}`}>project_details.sh</div>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className={`p-1 rounded-md transition-colors ${isDark ? 'hover:bg-white/10 text-white/40 hover:text-white' : 'hover:bg-black/10 text-black/40 hover:text-black'}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-6">
                      <motion.div 
                        layoutId={`icon-${selectedId}`}
                    className={`${isDark ? 'text-[#e8b72e]' : 'text-black'}`}
                      >
                        {selectedProject.icon && <selectedProject.icon className="text-5xl" />}
                      </motion.div>
                      <motion.h3 
                        layoutId={`title-${selectedId}`}
                        className={`text-3xl md:text-4xl font-extrabold tracking-tight uppercase ${isDark ? 'text-white' : 'text-black'}`}
                      >
                        {selectedProject.title}
                      </motion.h3>
                    </div>

                    <div className="flex gap-4">
                      <span className={`font-bold text-xl ${isDark ? 'text-[#e8b72e]' : 'text-black'}`}>$</span>
                      <motion.p 
                        layoutId={`desc-${selectedId}`}
                        className={`text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-black/80'}`}
                      >
                        {selectedProject.description}
                      </motion.p>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className={`flex flex-wrap gap-4 pt-6 border-t ${isDark ? 'border-white/5' : 'border-black/5'}`}
                    >
                      {selectedProject.liveUrl && (
                        <a 
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#e8b72e] hover:bg-[#f0c955] text-black font-bold transition-all shadow-[0_0_15px_rgba(232,183,46,0.2)]"
                        >
                          ./run_demo.sh
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </a>
                      )}
                      {selectedProject.githubUrl ? (
                        <a 
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all border ${isDark ? 'bg-white/5 hover:bg-white/10 text-white/70 border-white/10' : 'bg-black/5 hover:bg-black/10 text-black/70 border-black/10'}`}
                        >
                          git_clone
                          <SiGithub className="text-lg" />
                        </a>
                      ) : (
                        <button className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all border ${isDark ? 'bg-white/5 hover:bg-white/10 text-white/70 border-white/10' : 'bg-black/5 hover:bg-black/10 text-black/70 border-black/10'}`}>
                          git_clone
                          <SiGithub className="text-lg" />
                        </button>
                      )}
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
