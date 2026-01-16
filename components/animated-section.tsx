"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";
import {
  sectionReveal,
  staggerContainer,
  viewportConfig,
} from "@/animations/variants";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  useStagger?: boolean;
  delay?: number;
}

/**
 * Reusable animated section wrapper component
 * Wraps sections with smooth scroll-based reveal animations
 * Respects reduced motion preferences
 */
export function AnimatedSection({
  children,
  className = "",
  variants = sectionReveal,
  useStagger = false,
  delay = 0,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Simplified variants for reduced motion users
  const simplifiedVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const finalVariants = shouldReduceMotion
    ? simplifiedVariants
    : useStagger
      ? staggerContainer
      : variants;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={finalVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

/**
 * Reusable animated div component
 * For animating any div element with scroll-based reveal
 */
export function AnimatedDiv({
  children,
  className = "",
  variants,
  delay = 0,
}: AnimatedDivProps) {
  const shouldReduceMotion = useReducedMotion();

  const simplifiedVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const finalVariants = shouldReduceMotion
    ? simplifiedVariants
    : variants || simplifiedVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={finalVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

