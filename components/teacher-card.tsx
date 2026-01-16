"use client";

import { useState } from "react";
import { Star, Rocket, Lightbulb, Target, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Teacher {
  name: string;
  role: string;
  expertise?: string;
  image: string;
  inspiringQuote: string;
  yearsOfExperience?: number;
  favoriteTech?: string;
  floatingIcon?: LucideIcon;
}

interface TeacherCardProps {
  teacher: Teacher;
  index: number;
}

const floatingIcons = [
  { Icon: Star, delay: "0s", offset: "10%" },
  { Icon: Rocket, delay: "0.5s", offset: "60%" },
  { Icon: Lightbulb, delay: "1s", offset: "30%" },
  { Icon: Target, delay: "1.5s", offset: "80%" },
  { Icon: Sparkles, delay: "2s", offset: "50%" },
];

export function TeacherCard({ teacher, index }: TeacherCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Pick a random floating icon for each card
  const floatingIcon = floatingIcons[index % floatingIcons.length];

  return (
    <article
      className="group relative flex-shrink-0 w-[320px] md:w-[360px] h-[480px] md:h-[520px] bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Teacher: ${teacher.name}, ${teacher.role}`}
      tabIndex={0}
    >
      {/* Background Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
      />

      {/* Decorative Blurred Shapes */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
      <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />

      {/* Floating Icon */}
      <div
        className={`absolute top-8 right-8 text-primary/20 group-hover:text-primary/40 transition-all duration-500 ${
          isHovered ? "animate-bounce" : ""
        }`}
        style={{
          animationDelay: floatingIcon.delay,
        }}
        aria-hidden="true"
      >
        <floatingIcon.Icon className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center h-full">
        {/* Teacher Photo - Circular with Organic Shape */}
        <div className="relative mb-6">
          {/* Glow Ring */}
          <div
            className={`absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-cyan-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-500 ${
              isHovered ? "opacity-100 scale-110" : "opacity-60 scale-100"
            }`}
          />

          {/* Photo Container */}
          <div
            className={`relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500 ${
              isHovered ? "scale-110 shadow-2xl shadow-primary/30" : ""
            }`}
          >
            <img
              src={teacher.image || "/placeholder-user.jpg"}
              alt={`${teacher.name}, ${teacher.role}`}
              className="w-full h-full object-cover object-center"
            />
            {/* Soft overlay on hover */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
          </div>

          {/* Small decorative dots around photo */}
          <div className="absolute -top-2 -left-2 w-3 h-3 bg-primary/40 rounded-full group-hover:bg-primary/60 transition-colors" />
          <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-cyan-500/40 rounded-full group-hover:bg-cyan-500/60 transition-colors" />
        </div>

        {/* Name */}
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center group-hover:text-primary transition-colors duration-300">
          {teacher.name}
        </h3>

        {/* Role/Expertise */}
        <p className="text-accent font-semibold mb-4 text-center text-lg">
          {teacher.role}
        </p>

        {/* Inspiring Quote */}
        <div className="flex-1 flex items-center justify-center px-2">
          <p className="text-muted-foreground text-center leading-relaxed text-base md:text-lg italic">
            "{teacher.inspiringQuote}"
          </p>
        </div>

        {/* Hover Overlay with Extra Info */}
        <div
          className={`w-full mt-6 space-y-2 overflow-hidden transition-all duration-500 ${
            isHovered
              ? "max-h-40 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 translate-y-4"
          }`}
        >
          {teacher.yearsOfExperience && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-primary" />
              <span>{teacher.yearsOfExperience}+ yillik tajriba</span>
            </div>
          )}
          {teacher.favoriteTech && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Yoqtirgan texnologiya: {teacher.favoriteTech}</span>
            </div>
          )}
          {/* View Profile Button */}
          <button
            className="w-full mt-4 py-2 px-4 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={(e) => {
              e.stopPropagation();
              // Could navigate to profile or show more info
            }}
            aria-label={`View profile of ${teacher.name}`}
          >
            Profilni ko'rish
          </button>
        </div>
      </div>

      {/* Border Glow on Hover */}
      <div
        className={`absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </article>
  );
}
