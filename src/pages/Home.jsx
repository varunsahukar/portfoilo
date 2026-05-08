import { useEffect, useState, useRef, useCallback } from 'react';
import { AnimatePresence, motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import stickerImg from '../assets/images/me.png';

const headlines = [
  'Building thoughtful web experiences.',
  'Designing calm, reliable interfaces.',
  'Connecting clean APIs to clear UI.',
];

export default function Home({ isDark }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const [stickerOpen, setStickerOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const handleStickerClick = useCallback(() => {
    setStickerOpen(true);
    setShowHint(false);
  }, []);
  const handleStickerClose = useCallback(() => setStickerOpen(false), []);
  
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
      <motion.div 
        className="absolute right-2 bottom-16 md:right-6 md:bottom-24 z-20 -rotate-[2deg] cursor-pointer relative"
        animate={{ y: [-6, 0, -6], rotate: [-2, -1.2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        onClick={handleStickerClick}
      >
        {showHint && (
          <motion.div
            className="pointer-events-none absolute -top-3 right-3 md:-top-4 md:right-4 z-30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="relative">
              <div className={`w-10 h-10 rounded-full backdrop-blur-md border ${isDark ? 'bg-white/15 border-white/25' : 'bg-black/10 border-black/20'}`} />
              <div className={`absolute inset-0 rounded-full ring-2 ${isDark ? 'ring-white/40' : 'ring-black/30'}`} />
              <div className="absolute -top-2 -left-1 text-xl">🖱️</div>
            </div>
          </motion.div>
        )}
        <img
          src={stickerImg}
          alt="Sticker"
          className="w-56 md:w-72 rounded-xl shadow-[0_40px_100px_rgba(0,0,0,0.65)]"
        />
      </motion.div>
      
      <AnimatePresence>
        {stickerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-30 backdrop-blur-md ${isDark ? 'bg-black/45' : 'bg-black/25'}`}
            onClick={handleStickerClose}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`absolute right-6 bottom-24 md:right-10 md:bottom-32 max-w-md w-[92%] md:w-[480px] rounded-2xl border backdrop-blur-xl p-6 shadow-[0_30px_80px_rgba(0,0,0,0.65)] ${isDark ? 'border-white/15 bg-black/40' : 'border-black/15 bg-white/40'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start gap-4">
                <img src={stickerImg} alt="Sticker" className="w-20 h-20 rounded-xl object-cover shadow-[0_10px_30px_rgba(0,0,0,0.35)]" />
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>Role at GDG</h3>
                  <p className="text-green-500 text-sm font-semibold mt-1">Graphic Designer 2025–2026</p>
                </div>
              </div>
              
              <div className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                <p>
                  Google Developer Groups (GDG) are community-led developer groups for people who are interested in Google’s developer technologies and platforms. Chapters host talks, workshops, hackathons, and help members grow skills through collaboration.
                </p>
                <p className="mt-3">
                  As a Graphic Designer, responsibilities include brand-aligned visuals for events, social assets, presentation design, and supporting content that improves reach and community engagement.
                </p>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleStickerClose}
                  className={`px-4 py-2 rounded-lg border transition ${isDark ? 'bg-white/10 border-white/15 text-white hover:bg-white/15' : 'bg-black/10 border-black/15 text-black hover:bg-black/15'}`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
                className={`text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-[#e8b72e] via-[#e8b72e] to-${isDark ? 'white' : 'black'} bg-clip-text text-transparent`}
              >
                {headlines[index]}
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          <p className={`text-sm md:text-base max-w-2xl leading-relaxed ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            A small collection of projects, experiments, and interfaces for the web.
          </p>

          <a
            href="#about"
            className="inline-flex items-center mt-2 rounded-lg px-6 py-2 text-sm font-medium bg-[#e8b72e] text-black hover:bg-[#f0c955] shadow-[0_0_25px_rgba(232,183,46,0.45)] transition"
          >
            Know more
          </a>
        </div>
      </div>
    </section>
  );
}
