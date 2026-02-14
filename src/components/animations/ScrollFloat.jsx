import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  start = "top 80%",
  end = "bottom 20%",
  scrub = true,
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    if (typeof children !== 'string') return children;
    return children.split(" ").map((word, index) => (
      <span 
        key={index} 
        className="inline-block mr-[0.25em] will-change-transform opacity-0 translate-y-10"
      >
        {word}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('span');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: start,
        end: end,
        scrub: scrub,
        // markers: true, // Uncomment for debugging
      }
    });

    tl.to(words, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: animationDuration,
      ease: "power2.out",
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [animationDuration, start, end, scrub]);

  return (
    <div ref={containerRef} className={`${containerClassName} overflow-hidden`}>
      <div className={textClassName}>
        {splitText}
      </div>
    </div>
  );
};

export default ScrollFloat;
