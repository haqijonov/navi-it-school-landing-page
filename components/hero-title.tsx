"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface HeroTitleProps {
  className?: string;
}

/**
 * True typewriter effect:
 * - Text 1 types letter-by-letter -> deletes letter-by-letter
 * - Text 2 types letter-by-letter -> stays (no more deleting)
 * - Slower typing + subtle glow pulse while typing
 * - Real caret cursor
 */
type UseTypingEffectOptions = {
  texts: string[]; // ideally 2 items
  typingSpeed?: number; // ms per char
  deletingSpeed?: number; // ms per char
  pauseAfterTyped?: number; // ms after fully typed (for text 1)
  pauseAfterDeleted?: number; // ms after fully deleted
  stopAfterLastTyped?: boolean; // if true, last text will remain
  startIndex?: number;
};

function useTypingEffect({
  texts,
  typingSpeed = 145, // slower typing
  deletingSpeed = 90, // slower deletion
  pauseAfterTyped = 1100,
  pauseAfterDeleted = 250,
  stopAfterLastTyped = true,
  startIndex = 0,
}: UseTypingEffectOptions) {
  const safeTexts = useMemo(() => {
    const arr = Array.isArray(texts) ? texts.filter(Boolean) : [];
    return arr.length ? arr : ["", ""];
  }, [texts]);

  const lastIndex = safeTexts.length - 1;

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(startIndex);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!safeTexts.length) return;

    if (isDone) {
      setShowCursor(false);
      return;
    }

    let timer: number | undefined;
    const idx = Math.min(textIndex, lastIndex);
    const current = safeTexts[idx];

    if (!isDeleting) {
      // TYPING
      if (charIndex < current.length) {
        timer = window.setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((v) => v + 1);
        }, typingSpeed);
      } else {
        // Fully typed
        const isLast = idx >= lastIndex;

        if (isLast && stopAfterLastTyped) {
          // Last text typed -> stop here
          timer = window.setTimeout(() => setIsDone(true), 350);
        } else {
          // Pause then start deleting (for text 1)
          timer = window.setTimeout(() => setIsDeleting(true), pauseAfterTyped);
        }
      }
    } else {
      // DELETING
      if (charIndex > 0) {
        timer = window.setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((v) => v - 1);
        }, deletingSpeed);
      } else {
        // Fully deleted -> next text
        timer = window.setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((v) => Math.min(v + 1, lastIndex));
        }, pauseAfterDeleted);
      }
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [
    safeTexts,
    textIndex,
    charIndex,
    isDeleting,
    isDone,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyped,
    pauseAfterDeleted,
    stopAfterLastTyped,
    lastIndex,
  ]);

  const isTyping = !isDone && !isDeleting;

  return { displayText, showCursor, isDeleting, isTyping, isDone, textIndex };
}

export function HeroTitle({ className = "" }: HeroTitleProps) {
  const typingTexts = [
    "Bolalar va o'smirlar uchun",
    " Kelajakni biz bilan yarating",
  ];

  const { displayText, showCursor, isTyping, isDone } = useTypingEffect({
    texts: typingTexts,
    typingSpeed: 145,
    deletingSpeed: 90,
    pauseAfterTyped: 1100,
    pauseAfterDeleted: 250,
    stopAfterLastTyped: true,
  });

  return (
    <h1
      className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 text-center leading-tight ${className}`}
    >
      {/* Static NAVI
      <motion.span
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="block mb-2"
      >
        <span className="bg-gradient-to-r from-primary via-cyan-500 to-primary bg-clip-text text-transparent">
          NAVI
        </span>
      </motion.span> */}

      {/* Typewriter line */}
      <span className="block text-primary min-h-[1.2em]">
        {/* Visual-only changing text (avoid SR spam) */}
        <motion.span
          aria-hidden="true"
          className="inline-flex items-baseline"
          animate={
            isTyping
              ? {
                  textShadow: [
                    "0 0 0px rgba(56,189,248,0)",
                    "0 0 10px rgba(56,189,248,0.22)",
                    "0 0 0px rgba(56,189,248,0)",
                  ],
                }
              : { textShadow: "0 0 0px rgba(56,189,248,0)" }
          }
          transition={
            isTyping
              ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.2 }
          }
        >
          <span>{displayText}</span>

          {/* Real caret cursor */}
          {!isDone && showCursor && (
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              className="ml-1 inline-block h-[1em] w-[2px] rounded bg-primary align-middle"
              style={{ transform: "translateY(2px)" }}
            />
          )}
        </motion.span>

        {/* Screen reader fallback (static) */}
        <span className="sr-only">
          NAVI — Bolalar va o&apos;smirlar uchun. Kelajakni biz bilan yarating.
        </span>
      </span>
    </h1>
  );
}
