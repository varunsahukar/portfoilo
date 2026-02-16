import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useScroll } from 'framer-motion'
import './NotebookCard.css'

export default function ProjectScrollColumn({ items = [], gap = 28 }) {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const y = useMotionValue(0)
  const maxShiftRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  })

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !contentRef.current) return
      const viewport = containerRef.current.clientHeight
      const content = Array.from(contentRef.current.children).reduce(
        (sum, el) => sum + el.getBoundingClientRect().height + gap,
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
      // move content upwards as user scrolls (bottom -> top)
      y.set(-maxShiftRef.current * v)
    })
    return () => unsub()
  }, [scrollYProgress, y])

  return (
    <div ref={containerRef} className="relative overflow-hidden" style={{ minHeight: 420 }}>
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="flex flex-col items-stretch"
        aria-label="Projects scrolling column"
      >
        {items.map((item, i) => (
          <div key={i} className="shrink-0 flex justify-center" style={{ marginBottom: gap }}>
            <div className="notebook-page">
              <div className="notebook-margin" />
              <p>
                <strong>{item.title}.</strong> {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </div>
  )
}
