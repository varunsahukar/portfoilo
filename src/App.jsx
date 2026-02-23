import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ScrollVelocity from './pages/ScrollVelocity'
import TechStack from './pages/TechStack'
import Contact from './pages/Contact'
import LightRays from './components/ui/LightRays'

function App() {
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

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 background-grid opacity-20 [mask-image:radial-gradient(80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-45">
          <LightRays
            raysOrigin="top-center"
            raysColor="#bcc1c6ff"
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
        <div className="pointer-events-none absolute inset-0 vignette-mask" />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Home />
        <ScrollVelocity 
          texts={['WELCOME TO MY PORTFOLIO', 'WELCOME TO MY PORTFOLIO']} 
          velocity={100} 
          className="custom-scroll-text" 
        />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
