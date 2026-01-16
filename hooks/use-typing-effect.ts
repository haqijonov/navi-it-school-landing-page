"use client";

import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface UseTypingEffectOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

/**
 * Custom hook for typing effect animation
 * Creates a typewriter effect that types and erases text in a loop
 */
export function useTypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  loop = true,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const staticText = texts[0];

  // Handle reduced motion: set static text and skip animation
  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(staticText);
      // Clear any pending timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }
    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    const currentText = texts[currentIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, speed);
    } else {
      if (displayText.length === currentText.length) {
        setIsPaused(true);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
      }, speed);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    displayText,
    currentIndex,
    isDeleting,
    isPaused,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    shouldReduceMotion,
    staticText,
    texts,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    displayText: shouldReduceMotion ? staticText : displayText,
    showCursor: !shouldReduceMotion,
  };
}
