import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import './LogoLoop.css';

export default function LogoLoop({
  logos = [],
  speed = 100,
  direction = 'left',
  logoHeight = 60,
  gap = 60,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo loop',
  useCustomRender = false
}) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (contentRef.current) {
        // Measure exactly one set of logos
        // We use scrollWidth / 2 because we render duplicatedLogos
        const fullWidth = contentRef.current.scrollWidth;
        setContentWidth(fullWidth / 2);
      }
    };

    // Use ResizeObserver for more reliable dimension tracking
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (contentRef.current) resizeObserver.observe(contentRef.current);

    // Initial measurement
    updateDimensions();
    // Fallback for font/icon loading
    const timer = setTimeout(updateDimensions, 500);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, [logos]);

  const x = useTransform(baseX, (v) => {
    if (contentWidth === 0) return 0;
    // Standard modulo for seamless wrapping
    const mod = v % contentWidth;
    return mod;
  });

  useAnimationFrame((_, delta) => {
    if (contentWidth === 0) return;
    
    const currentSpeed = isHovered ? hoverSpeed : speed;
    const moveBy = currentSpeed * (delta / 1000);
    
    // Smoothly update baseX and let useTransform handle the wrapping
    if (direction === 'left') {
      baseX.set(baseX.get() - moveBy);
    } else if (direction === 'right') {
      baseX.set(baseX.get() + moveBy);
    }
  });

  const renderLogo = (logo, index) => {
    const key = `logo-${index}`;
    const content = logo.node ? (
      <div className="logo-item-content" style={{ height: logoHeight }}>
        {logo.node}
        {logo.title && <span className="logo-title">{logo.title}</span>}
      </div>
    ) : (
      <img 
        src={logo.src} 
        alt={logo.alt || 'logo'} 
        style={{ height: logoHeight }} 
        className="logo-img"
      />
    );

    return (
      <motion.div
        key={key}
        className="logo-item"
        style={{ marginRight: gap }}
        whileHover={scaleOnHover ? { scale: 1.1 } : {}}
      >
        {logo.href ? (
          <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.title || logo.alt}>
            {content}
          </a>
        ) : (
          content
        )}
      </motion.div>
    );
  };

  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div 
      className={`logo-loop-container ${fadeOut ? 'fade-out' : ''}`}
      ref={containerRef}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--fade-color': fadeOutColor,
        height: logoHeight + 20
      }}
    >
      <motion.div 
        className="logo-loop-content"
        ref={contentRef}
        style={{ x }}
      >
        {duplicatedLogos.map((logo, index) => renderLogo(logo, index))}
      </motion.div>
    </div>
  );
}
