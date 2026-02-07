"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Sparkles } from "lucide-react";
import { scaleInRotate, viewportConfig } from "@/animations/variants";

interface CircularVideoPlaceholderProps {
  onClick?: () => void;
}

export function CircularVideoPlaceholder({
  onClick,
}: CircularVideoPlaceholderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTouchActive, setIsTouchActive] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const touchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTogglePlay = async () => {
    if (onClick) {
      onClick();
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.paused) {
      try {
        await video.play();
      } catch {
        return;
      }
    } else {
      video.pause();
    }
  };

  const clearHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const scheduleHideControls = () => {
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 1000);
  };

  const handleTouchActivate = () => {
    setIsTouchActive(true);
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }
    touchTimeoutRef.current = setTimeout(() => {
      setIsTouchActive(false);
    }, 1000);

    // Mobile: show controls briefly on touch
    setShowControls(true);
    if (isPlaying) {
      scheduleHideControls();
    }
  };

  useEffect(() => {
    return () => {
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
      clearHideTimer();
    };
  }, []);

  const showControl = !isPlaying || isHovered || isTouchActive;

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={scaleInRotate}
        className="group relative w-full max-w-md mx-auto aspect-square flex items-center justify-center"
      >
        {/* Outer Glow Effect */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-cyan-500/20 to-primary/30 blur-2xl transition-all duration-700 ${
            isHovered ? "scale-110 opacity-100" : "scale-100 opacity-60"
          }`}
        />

        {/* Main Circle Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Background Circle with Gradient */}
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-cyan-500/10 to-purple-500/10 border-2 border-primary/20 transition-all duration-500 ${
              isHovered
                ? "border-primary/40 shadow-2xl shadow-primary/30 scale-105"
                : "shadow-lg shadow-primary/10"
            }`}
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          />

          {/* Rotating Text Circle */}
          <div className="absolute left-1/2 top-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
              }}
            >
              <defs>
                <path
                  id="circle-path"
                  d="M 200, 200 m -150, 0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                />
              </defs>
              <text
                className="fill-primary font-bold"
                fontSize="20"
                style={{
                  letterSpacing: "4px",
                }}
              >
                <textPath href="#circle-path" startOffset="0%">
                  Qiziqarli Ta'lim Orqali Yoshlarni Kelajakka Tayyorlaymiz!
                </textPath>
              </text>
            </svg>
          </div>

          {/* Video Circle */}
          <div
            className="absolute inset-7 sm:inset-5 md:inset-8 rounded-full overflow-hidden shadow-2xl ring-2 ring-primary/20 z-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchActivate}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover transition duration-200 group-hover:brightness-105"
              src="/nega-aynan.mp4"
              playsInline
              preload="metadata"
              poster="/video-poster.jpeg"
              onPlay={() => {
                setIsPlaying(true);
                setShowControls(true);
                scheduleHideControls();
              }}
              onPause={() => {
                setIsPlaying(false);
                setShowControls(true);
                clearHideTimer();
              }}
              onEnded={() => {
                setIsPlaying(false);
                setShowControls(true);
                clearHideTimer();
              }}
            />

            {/* Play/Pause Overlay - Desktop (unchanged behavior) */}
            <button
              type="button"
              onClick={handleTogglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className={`absolute inset-0 z-30 hidden md:flex items-center justify-center transition-[opacity,transform] duration-200 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background ${
                showControl
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <span className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 backdrop-blur-md ring-1 ring-white/20 text-white shadow-xl">
                {isPlaying ? (
                  <Pause className="w-10 h-10 md:w-12 md:h-12" />
                ) : (
                  <Play className="w-10 h-10 md:w-12 md:h-12 ml-1" />
                )}
              </span>
            </button>

            {/* Play/Pause Overlay - Mobile (auto-hide) */}
            <button
              type="button"
              onClick={handleTogglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className={`absolute inset-0 z-30 flex md:hidden items-center justify-center transition-[opacity,transform] duration-200 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background ${
                showControls
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <span className="flex items-center justify-center w-20 h-20 rounded-full bg-black/40 backdrop-blur-md ring-1 ring-white/20 text-white shadow-xl">
                {isPlaying ? (
                  <Pause className="w-10 h-10" />
                ) : (
                  <Play className="w-10 h-10 ml-1" />
                )}
              </span>
            </button>
          </div>

          {/* Decorative Dots */}
          <div className="absolute inset-0 rounded-full opacity-20 z-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 2px, transparent 2px)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Coming Soon Badge */}
        </div>
      </motion.div>
    </>
  );
}
