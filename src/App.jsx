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
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 background-grid opacity-20 [mask-image:radial-gradient(80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-35">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
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
