import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ScrollVelocity from './pages/ScrollVelocity'
import TechStack from './pages/TechStack'
import Contact from './pages/Contact'
import LightRays from './components/ui/LightRays'

function SectionWrapper({ children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Simplify animations for performance and smoother flow
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  
  const springScale = useSpring(scale, { stiffness: 120, damping: 25 })

  return (
    <motion.div
      ref={ref}
      style={{
        scale: springScale,
        y,
        opacity
      }}
      className="w-full relative"
    >
      {children}
    </motion.div>
  )
}

function App() {
  const [isDark, setIsDark] = useState(true)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 3000], [0, -200])
  const springBgY = useSpring(bgY, { stiffness: 50, damping: 20 })
  
  // Dynamic glow following scroll
  const glowY = useTransform(scrollY, [0, 4000], ["0%", "100%"])
  const glowOpacity = useTransform(scrollY, [0, 1000, 3000, 4000], [0.3, 0.6, 0.6, 0.3])
  const springGlowY = useSpring(glowY, { stiffness: 30, damping: 20 })

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const id = href.slice(1)
      const section = document.getElementById(id)
      if (!section) return

      event.preventDefault()

      const startY = window.scrollY || window.pageYOffset
      const targetY = startY + section.getBoundingClientRect().top
      const distance = targetY - startY
      const duration = 1000

      const easeInOutSine = (t) =>
        -(Math.cos(Math.PI * t) - 1) / 2

      let startTime = null

      const step = (timestamp) => {
        if (startTime === null) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const eased = easeInOutSine(progress)
        window.scrollTo(0, startY + distance * eased)
        if (progress < 1) requestAnimationFrame(step)
      }

      requestAnimationFrame(step)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className={`min-h-screen relative overflow-x-hidden ${isDark ? 'bg-black text-white' : 'bg-[#f5f5f0] text-black'}`}>
      <div className={`fixed inset-0 z-0 overflow-hidden ${isDark ? 'bg-black' : 'bg-[#f5f5f0]'}`}>
        <div className={`absolute inset-0 background-grid opacity-15 ${isDark ? '[mask-image:radial-gradient(80%_80%_at_50%_50%,#000_60%,transparent_100%)]' : '[mask-image:radial-gradient(80%_80%_at_50%_50%,#000_60%,transparent_100%)]'}`} />
        
        <div className="absolute inset-0 opacity-25">
          <LightRays
            raysOrigin="top-center"
            raysColor={isDark ? "#bcc1c6ff" : "#666666"}
            raysSpeed={1}
            lightSpread={0.7}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1.15}
            saturation={1.2}
          />
        </div>
        <div className={`pointer-events-none absolute inset-0 vignette-mask opacity-80 ${!isDark ? 'opacity-40' : ''}`} />
      </div>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main className="relative z-10 space-y-12 py-12">
        <SectionWrapper>
          <Home isDark={isDark} />
        </SectionWrapper>
        
        <ScrollVelocity 
          texts={['WELCOME TO MY PORTFOLIO', 'WELCOME TO MY PORTFOLIO']} 
          velocity={100} 
          className="custom-scroll-text" 
          isDark={isDark}
        />
        
        <SectionWrapper>
          <About isDark={isDark} />
        </SectionWrapper>
        
        <TechStack isDark={isDark} />
        
        <SectionWrapper>
          <Projects isDark={isDark} />
        </SectionWrapper>
        
        <SectionWrapper>
          <Contact isDark={isDark} />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}

export default App
