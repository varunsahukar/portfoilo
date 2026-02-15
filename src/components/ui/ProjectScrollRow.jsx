import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useScroll } from 'framer-motion'

export default function ProjectScrollRow({ items = [], gap = 28 }) {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const x = useMotionValue(0)
  const maxShiftRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  })

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !contentRef.current) return
      const viewport = containerRef.current.clientWidth
      const content = Array.from(contentRef.current.children).reduce(
        (sum, el) => sum + el.getBoundingClientRect().width + gap,
        0
      )
      const maxShift = Math.max(0, content - viewport)
      maxShiftRef.current = maxShift
    }

    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    if (contentRef.current) ro.observe(contentRef.current)
    measure()
    return () => ro.disconnect()
  }, [items, gap])

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      x.set(-maxShiftRef.current * v)
    })
    return () => unsub()
  }, [scrollYProgress, x])

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <motion.div
        ref={contentRef}
        style={{ x }}
        className="flex items-stretch"
        aria-label="Projects scrolling row"
      >
        {items.map((item, i) => (
          <div key={i} className="shrink-0" style={{ marginRight: gap, width: 320 }}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 text-white/90 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                {item.icon && <item.icon className="text-xl text-white/80" />}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </div>
  )
}
