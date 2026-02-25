import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';

const headlines = [
  'Building thoughtful web experiences.',
  'Designing calm, reliable interfaces.',
  'Connecting clean APIs to clear UI.',
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3800);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-screen flex items-center"
    >
      <div className="relative z-10 w-full">
        <div className="flex flex-col items-start text-left gap-8">
          <motion.div 
            style={{ 
              scale: springScale,
              opacity,
              transformOrigin: "center center"
            }}
            className="min-h-[5rem] md:min-h-[7rem] flex items-center overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={headlines[index]}
                initial={{ opacity: 0, y: '60%' }}
                animate={{ opacity: 1, y: '0%' }}
                exit={{ opacity: 0, y: '-60%' }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-blue-200 to-white bg-clip-text text-transparent"
              >
                {headlines[index]}
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          <p className="text-sm md:text-base text-white/60 max-w-2xl leading-relaxed">
            A small collection of projects, experiments, and interfaces for the web.
          </p>

          <a
            href="#about"
            className="inline-flex items-center mt-2 rounded-lg px-6 py-2 text-sm font-medium bg-blue-500 text-white hover:bg-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.45)] transition"
          >
            Know more
          </a>
        </div>
      </div>
    </section>
  );
}
