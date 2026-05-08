import { motion } from 'framer-motion';
import userPhoto from '../assets/images/me.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const TextType = ({ children, delay = 0 }) => {
  const text = typeof children === 'string' ? children : '';
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: delay + index * 0.015 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const CurlyUnderline = ({ children, color = "#3b82f6", delay = 1 }) => {
  return (
    <span className="relative inline-block group mx-1">
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute left-0 top-[95%] w-full h-3 overflow-visible pointer-events-none"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,5.5 C15,0 35,11 50,5.5 C65,0 85,11 100,5.5"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay }}
        />
      </svg>
    </span>
  );
};

export default function About({ isDark }) {
  return (
    <section
      id="about"
      className="relative py-32 px-4 max-w-6xl mx-auto min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-500/10">
            <img
              src={userPhoto}
              alt="Varun Sahukar"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            {/* Subtle overlay gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/60 via-transparent to-transparent' : 'from-black/20 via-transparent to-transparent'}`} />
          </div>
          
          {/* Decorative background glow */}
          <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] -z-10 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col gap-10 order-1 lg:order-2 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-7xl font-black uppercase tracking-tighter bg-gradient-to-b ${isDark ? 'from-white to-white/40' : 'from-black to-black/40'} bg-clip-text text-transparent mb-2`}>
              About Me
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full" />
          </motion.div>

          <div className={`text-lg md:text-xl leading-relaxed font-medium ${isDark ? 'text-white/80' : 'text-black/80'} space-y-6`}>
            <p>
              <TextType delay={0.5}>
                I am a
              </TextType>
              <CurlyUnderline color="#3b82f6" delay={1.5}>Full-stack Developer</CurlyUnderline>
              <TextType delay={1.8}>
                and
              </TextType>
              <CurlyUnderline color="#3b82f6" delay={2.2}>Graphic Designer</CurlyUnderline>
              <TextType delay={2.5}>
                dedicated to crafting digital experiences that are both beautiful and functional.
              </TextType>
            </p>

            <p>
              <TextType delay={3.5}>
                Currently serving as a Graphic Designer at
              </TextType>
              <CurlyUnderline color="#10b981" delay={4.5}>GDG On Campus</CurlyUnderline>
              <TextType delay={4.8}>
                , I specialize in bridging the gap between
              </TextType>
              <CurlyUnderline color="#3b82f6" delay={5.5}>vision and execution</CurlyUnderline>
              <TextType delay={5.8}>
                . My approach combines technical precision with creative problem-solving to build software that doesn't just work—it inspires.
              </TextType>
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 6.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://github.com/varunsahukar"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-1' : 'bg-black/5 border-black/10 text-black/70 hover:text-black hover:bg-black/10 hover:border-black/30 hover:-translate-y-1'}`}
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/varunsahukar9798/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-1' : 'bg-black/5 border-black/10 text-black/70 hover:text-black hover:bg-black/10 hover:border-black/30 hover:-translate-y-1'}`}
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/varun_sahukar19"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-1' : 'bg-black/5 border-black/10 text-black/70 hover:text-black hover:bg-black/10 hover:border-black/30 hover:-translate-y-1'}`}
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
