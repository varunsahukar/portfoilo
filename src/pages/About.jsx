import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import userPhoto from '../assets/images/varunnp.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Custom TextType component to reveal text character by character
const TextType = ({ text, delay = 0, speed = 30, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const startTimeout = setTimeout(() => {
        let i = 0;
        const timer = setInterval(() => {
          setDisplayedText(text.slice(0, i + 1));
          i++;
          if (i >= text.length) {
            clearInterval(timer);
            setHasAnimated(true);
          }
        }, speed);
        return () => clearInterval(timer);
      }, delay * 1000);
      return () => clearTimeout(startTimeout);
    }
  }, [isInView, text, speed, hasAnimated, delay]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {!hasAnimated && isInView && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default function About({ isDark }) {
  const aboutHeading = "About Me";
  const firstSentence = "I build things that work — and work well.";
  
  return (
    <section
      id="about"
      className={`relative py-32 px-4 max-w-7xl mx-auto min-h-screen flex items-center transition-colors duration-500`}
    >
      <div className="relative z-10 grid lg:grid-cols-[0.4fr_0.6fr] gap-16 lg:gap-24 items-center w-full">
        {/* LEFT COLUMN (40%) */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[400px] aspect-[4/5]">
            <img
              src={userPhoto}
              alt="Varun Sahukar Portrait"
              className="w-full h-full object-cover rounded-[2rem] shadow-sm grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* RIGHT COLUMN (60%) */}
        <div className="relative flex flex-col items-start text-left">
          {/* Section Heading with TextType */}
          <div className="mb-6">
            <h2 className={`text-xs uppercase tracking-[0.4em] font-bold ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
              <TextType text={aboutHeading} speed={50} />
            </h2>
          </div>

          {/* First Sentence with TextType and Wavy Underline */}
          <div className={`text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
            <div className="relative inline-block">
              <TextType 
                text={firstSentence} 
                speed={40} 
                delay={0.5} 
              />
              {/* Wavy underline for "build things that work" */}
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="absolute left-0 bottom-[4px] w-[60%] h-[10px] pointer-events-none"
                style={{ 
                  textDecoration: 'underline wavy #D4A017', 
                  textDecorationSkipInk: 'none',
                  fontSize: '24px', // Helps control wavy scale
                  display: 'block'
                }}
              />
            </div>
          </div>

          {/* Paragraph with Remaining Copy and Wavy Underlines */}
          <div className={`text-lg md:text-xl leading-relaxed font-medium mb-12 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
            <p className="mb-6">
              As a full-stack developer, I take ownership of the{" "}
              <span className="relative inline-block">
                entire product lifecycle
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute left-0 bottom-[-4px] w-full h-[10px] pointer-events-none"
                  style={{ 
                    textDecoration: 'underline wavy #D4A017', 
                    textDecorationSkipInk: 'none',
                    display: 'block'
                  }}
                />
              </span>
              : from architecting robust APIs and designing scalable data models, to crafting interfaces that feel intuitive and load fast. I don't just write code — I solve problems and{" "}
              <span className="relative inline-block">
                ship software people can rely on
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute left-0 bottom-[-4px] w-full h-[10px] pointer-events-none"
                  style={{ 
                    textDecoration: 'underline wavy #D4A017', 
                    textDecorationSkipInk: 'none',
                    display: 'block'
                  }}
                />
              </span>
              .
            </p>
            <p>
              I am particularly{" "}
              <span className="relative inline-block">
                good at building scalable system architectures
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="absolute left-0 bottom-[-4px] w-full h-[10px] pointer-events-none"
                  style={{ 
                    textDecoration: 'underline wavy #D4A017', 
                    textDecorationSkipInk: 'none',
                    display: 'block'
                  }}
                />
              </span>{" "}
              that handle growth without compromise. My focus is on creating high-performance, resilient systems that bridge the gap between technical complexity and seamless user experience.
            </p>
          </div>

          {/* SOCIAL ICONS (Preserved exactly as-is) */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="https://github.com/varunsahukar"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'}`}
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/varunsahukar9798/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'}`}
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/varun_sahukar19"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'}`}
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
