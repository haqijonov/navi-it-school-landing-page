"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { scaleInRotate, viewportConfig } from "@/animations/variants";

interface CircularVideoPlaceholderProps {
  onClick?: () => void;
}

export function CircularVideoPlaceholder({
  onClick,
}: CircularVideoPlaceholderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={scaleInRotate}
        className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center"
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
          <div className="absolute inset-0 w-full h-full animate-spin-slow">
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
                  NAVI • MAQSAD • YO'L • KELAJAK • NAVI • MAQSAD • YO'L
                </textPath>
              </text>
            </svg>
          </div>

          {/* Decorative Dots */}
          <div className="absolute inset-0 rounded-full opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 2px, transparent 2px)`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Play Button */}
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Play Why NAVI video"
            className={`relative z-20 w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background ${
              isHovered
                ? "scale-110 shadow-2xl shadow-primary/50"
                : "hover:scale-105"
            }`}
          >
            {/* Pulsing Ring */}
            <div
              className={`absolute inset-0 rounded-full bg-primary/30 ${
                isHovered ? "animate-ping" : ""
              }`}
              style={{
                animation: isHovered
                  ? "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite"
                  : "none",
              }}
            />
            <Play
              className={`w-10 h-10 md:w-12 md:h-12 ml-1 transition-transform duration-300 ${
                isHovered ? "scale-110" : ""
              }`}
              fill="currentColor"
            />
          </button>

          {/* Coming Soon Badge */}
          <div
            className={`absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background border-2 border-primary/30 shadow-lg backdrop-blur-sm transition-all duration-300 ${
              isHovered ? "scale-105 border-primary/50" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Tez orada
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-1">
              Ota-onalar hikoyalari
            </p>
          </div>
        </div>
      </motion.div>

      {/* Coming Soon Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-2xl text-center">
              Tez orada!
            </DialogTitle>
            <DialogDescription className="text-center pt-2">
              Ota-onalar hikoyalari videolari yaqin orada qo'shiladi. Bizning
              o'quvchilarning muvaffaqiyat hikoyalarini va ota-onalarning
              sharhlarini ko'rish uchun qaytib turing.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Tushundim
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
