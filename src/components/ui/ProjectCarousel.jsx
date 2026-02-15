import { useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'

export default function ProjectCarousel({
  items = [],
  speed = 50,
  gap = 24,
  direction = 'rtl',
}) {
  const baseX = useMotionValue(0)
  const contentRef = useRef(null)
  const wrapWidthRef = useRef(1)

  useEffect(() => {
    if (contentRef.current) {
      const total = Array.from(contentRef.current.children).reduce(
        (sum, el) => sum + el.offsetWidth + gap,
        0
      )
      // half because we duplicate items for seamless loop
      wrapWidthRef.current = total / 2
    }
  }, [items, gap])

  useAnimationFrame((_, delta) => {
    const w = wrapWidthRef.current
    if (!w) return
    const px = speed * (delta / 1000)
    if (direction === 'rtl') {
      baseX.set((baseX.get() - px) % w)
    } else {
      baseX.set((baseX.get() + px) % w)
    }
  })

  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <motion.div
        ref={contentRef}
        style={{ x: baseX }}
        className="flex items-stretch"
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="shrink-0"
            style={{ marginRight: gap, width: 320 }}
          >
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 text-white/90 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                {item.icon && (
                  <item.icon className="text-xl text-white/80" />
                )}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </div>
  )
}
