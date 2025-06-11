"use client";

import { ElementType, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated hero heading.
 * - Fades from muted grey to soft off-white.
 * - No mix-blend-mode, so the particles do **not** invert the text.
 * - Same font sizes and weight you had originally.
 */
const textVariants = {
  initial: {
    color: "#6D6D6D",
    textShadow: "none",
  },
  visible: {
    color: "#ECECEC",
    textShadow: "0 0 8px rgba(255,255,255,0.35)",
    transition: { duration: 0.6, ease: "easeOut" } as const,
  },
};

const sizeClasses = {
  large: "text-4xl md:text-6xl", // original scale
  small: "text-lg md:text-xl",
};

interface Props {
  children: ReactNode;
  as?: ElementType;
  size?: keyof typeof sizeClasses;
  className?: string;
}

export default function HeroTitle({
  children,
  as = "h1",
  size = "large",
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  return (
    <MotionTag
      initial="initial"
      animate={reduce ? "initial" : "visible"}
      variants={textVariants}
      className={`${sizeClasses[size]} font-semibold tracking-tight leading-tight ${className}`}
    >
      {children}
    </MotionTag>
  );
}



