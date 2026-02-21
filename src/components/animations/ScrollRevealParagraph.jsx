import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const KEY_PREFIX_LENGTH = 3;

export default function ScrollRevealParagraph({
  paragraph,
  className = '',
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = paragraph.split(' ');

  return (
    <p
      ref={containerRef}
      className={`text-lg leading-relaxed ${className}`}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={`word-${index}-${word.slice(0, KEY_PREFIX_LENGTH)}`}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({ children, progress, range }) {
  const shouldReduceMotion = useReducedMotion();

  const opacity = useTransform(
    progress,
    range,
    shouldReduceMotion ? [1, 1] : [0, 1],
  );

  return (
    <span className="relative mr-2 inline-block">
      {shouldReduceMotion ? null : (
        <span className="text-white/10">{children}</span>
      )}
      <motion.span
        className="absolute inset-0 text-white"
        style={{ opacity }}
      >
        {children}
      </motion.span>
    </span>
  );
}

