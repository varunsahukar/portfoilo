import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./TiltedCard.css";

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText,
  containerHeight = "300px",
  containerWidth = "300px",
  imageHeight = "300px",
  imageWidth = "300px",
  rotateAmplitude = 15,
  scaleOnHover = 1.1,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [rotateAmplitude, -rotateAmplitude]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-rotateAmplitude, rotateAmplitude]
  );

  const [showTooltipState, setShowTooltipState] = useState(false);

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseEnter() {
    setShowTooltipState(true);
  }

  function handleMouseLeave() {
    setShowTooltipState(false);
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={ref}
      className="tilted-card-container"
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-warning">
          This effect works best on desktop
        </div>
      )}

      <motion.div
        className="tilted-card-inner"
        style={{
          rotateX,
          rotateY,
          scale: showTooltipState ? scaleOnHover : 1,
        }}
      >
        <div className="tilted-card-image-wrapper">
          <img
            src={imageSrc}
            alt={altText}
            className="tilted-card-image"
            style={{
              width: imageWidth,
              height: imageHeight,
            }}
          />

          {displayOverlayContent && overlayContent && (
            <div className="tilted-card-overlay">
              {overlayContent}
            </div>
          )}
        </div>

        {showTooltip && captionText && showTooltipState && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="tilted-card-caption"
          >
            {captionText}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
