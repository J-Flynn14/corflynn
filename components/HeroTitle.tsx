"use client";

import { ElementType, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Polymorphic animated title that fades from muted grey to off‑white while
 * adding a subtle glow. Accepts a `size` prop so subtitles can stay smaller
 * yet reuse the same animation.
 */
const textVariants = {
  initial: {
    color: "var(--vscode-editor-foreground, #6D6D6D)",
    textShadow: "none",
  },
  visible: {
    color: "#ECECEC",
    textShadow: "0 0 8px rgba(255,255,255,0.35)",
    transition: { duration: 0.6, ease: "easeOut" } as const,
  },
};

const sizeClasses = {
  large: "text-4xl md:text-6xl",
  small: "text-lg md:text-xl",
};

interface HeroTitleBaseProps {
  children: ReactNode;
  /** Heading tag (h1‑h6) or other element. */
  as?: ElementType;
  /** Font‑size preset. */
  size?: keyof typeof sizeClasses;
  className?: string;
}

export default function HeroTitle({
  children,
  as = "h1",
  size = "large",
  className = "",
}: HeroTitleBaseProps) {
  const shouldReduce = useReducedMotion();
  const Tag = as as ElementType;
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      initial="initial"
      animate={shouldReduce ? "initial" : "visible"}
      variants={textVariants}
      style={{ mixBlendMode: "difference" }}
      className={`${sizeClasses[size]} font-semibold tracking-tight leading-tight ${className}`}
    >
      {children}
    </MotionTag>
  );
}


