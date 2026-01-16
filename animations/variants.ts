import { Variants } from "framer-motion";

/**
 * Animation variants for NAVI website
 * Creative, modern, premium, and youth-friendly animations
 * All animations respect reduced motion preferences
 */

/**
 * Spring configuration for smooth, lively animations
 */
export const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
  mass: 0.8,
};

/**
 * Gentle spring for softer animations
 */
export const gentleSpring = {
  type: "spring" as const,
  stiffness: 80,
  damping: 20,
  mass: 1,
};

/**
 * Viewport configuration for animations
 */
export const viewportConfig = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px",
};

/**
 * Section reveal animation
 * For wrapping entire sections
 */
export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springConfig,
      duration: 0.6,
    },
  },
};

/**
 * Title/Heading reveal animation
 * For section titles and headings
 */
export const titleReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...springConfig,
      duration: 0.7,
    },
  },
};

/**
 * Card reveal animation
 * For individual cards with subtle creative touches
 */
export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    rotate: -1,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      ...springConfig,
      duration: 0.6,
    },
  },
};

/**
 * Stagger container for animating groups
 * Use with staggerItem variant
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger item for use with staggerContainer
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...springConfig,
      duration: 0.5,
    },
  },
};

/**
 * Image reveal animation
 * For images with parallax-like micro movement
 */
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ...gentleSpring,
      duration: 0.8,
    },
  },
};

/**
 * Fade in from bottom
 * Simple fade with upward movement
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springConfig,
      duration: 0.6,
    },
  },
};

/**
 * Scale in with rotation
 * For circular or rounded elements
 */
export const scaleInRotate: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      ...gentleSpring,
      duration: 0.7,
    },
  },
};

/**
 * Slide in from side
 * For elements entering from left or right
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...springConfig,
      duration: 0.6,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...springConfig,
      duration: 0.6,
    },
  },
};

/**
 * Accordion item reveal
 * For FAQ and accordion items
 */
export const accordionItemReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...gentleSpring,
      duration: 0.5,
    },
  },
};

/**
 * Hero section animation
 * For hero content with dramatic reveal
 */
export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...springConfig,
      duration: 0.8,
      delay: 0.2,
    },
  },
};

/**
 * Button/CTA reveal
 * For call-to-action buttons
 */
export const buttonReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ...springConfig,
      duration: 0.5,
    },
  },
};

