import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { useTheme } from "../../context/ThemeContext";
import './card-spotlight.css';

export const CardSpotlight = ({
  children,
  radius = 350,
  color,
  className,
  ...props
}) => {
  const { isDark } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Choose a subtle glow for dark mode; keep bright brand tint for light mode
  const effectiveColor = color ?? (isDark
    ? "rgba(92, 225, 230, 0.16)" // soft cyan glow in dark
    : "rgba(237, 249, 250, 1)"   // original light glow
  );
  
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  return (
    <div
      className={cn(
        "group/spotlight card-spotlight-motion relative",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}>
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: effectiveColor,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 50%
            )
          `,
        }}
      />
      
      {/* Animated dots effect */}
      {isHovering && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
          <div className="animated-dots opacity-60"></div>
        </div>
      )}
      
      <div className="card-content relative z-10 card-spotlight h3">
        {children}
      </div>
    </div>
  );
};