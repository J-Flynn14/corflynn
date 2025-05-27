'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10% 0px -10% 0px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0.85 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0.85 }}
      transition={{ duration: 0.25, delay, ease: 'easeOut' }}
      className="will-change-[opacity]"
    >
      {children}
    </motion.section>
  );
}

