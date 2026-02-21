import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function MagicText({ text }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = text.split(' ');

  return (
    <p ref={container} className="flex flex-wrap leading-[0.5] p-4">
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={index}
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
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mt-[12px] mr-1 text-3xl font-semibold">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

