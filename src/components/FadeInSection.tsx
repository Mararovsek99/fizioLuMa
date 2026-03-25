"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

export const FadeInSection = ({
  children,
  className,
  delay = 0,
  y = 28,
}: FadeInSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.7,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
};
