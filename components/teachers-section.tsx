"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeacherCard } from "./teacher-card";
import {
  titleReveal,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/animations/variants";

interface Teacher {
  name: string;
  role: string;
  expertise?: string;
  image: string;
  inspiringQuote: string;
  yearsOfExperience?: number;
  favoriteTech?: string;
}

const teachers: Teacher[] = [
  {
    name: "Mavlon Haqijonov",
    role: "Senior Web Developer",
    expertise: "Frontend Mentor",
    image: "/mavlon.png",
    inspiringQuote:
      "Men bolalarga g'oyalarni haqiqiy loyihalarga aylantirishda yordam beraman",
    yearsOfExperience: 3,
    favoriteTech: "React, JavaScript",
  },
  {
    name: "Islom Shahobiddinov",
    role: "Softwear Enginer",
    expertise: "AI Coach",
    image: "/islom.jpeg",
    inspiringQuote: "Kelajak AI bilan - men bu yo'lda yo'lboshchi bo'laman",
    yearsOfExperience: 3,
    favoriteTech: "AI, Machine Learning",
  },
  {
    name: "Azamat Ergashev",
    role: "Full-Stack Developer",
    expertise: "Full-Stack Mentor",
    image: "/azamat.png",
    inspiringQuote:
      "Har bir kod qatori - bu yangi imkoniyat. Keling, birga kashf qilamiz!",
    yearsOfExperience: 4,
    favoriteTech: "Node.js, React",
  },
];

export function TeachersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setIsAtStart(scrollLeft <= 10);
    setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 10);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      // Check on resize
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 400;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const targetScroll =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="teachers"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={titleReveal}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            <span className="text-primary bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Ustozlarimiz bilan tanishing
            </span>
          </h2>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons - Desktop Only */}
          <div className="hidden md:block">
            <button
              onClick={() => scroll("left")}
              disabled={isAtStart}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-background border-2 border-border shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isAtStart
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 hover:scale-110"
              }`}
              aria-label="Scroll teachers left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={isAtEnd}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-background border-2 border-border shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isAtEnd
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 hover:scale-110"
              }`}
              aria-label="Scroll teachers right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide pb-8 scroll-smooth snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            role="region"
            aria-label="Teachers carousel"
            tabIndex={0}
          >
            {/* Snap Points */}
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={staggerItem}
                transition={{ delay: index * 0.15 }}
                className="flex-shrink-0 snap-center snap-always"
                style={{
                  scrollSnapAlign: "center",
                }}
              >
                <TeacherCard teacher={teacher} index={index} />
              </motion.div>
            ))}

            {/* Extra spacing at the end for better scroll UX */}
            <div className="flex-shrink-0 w-4" aria-hidden="true" />
          </div>
        </div>

        {/* Scroll Indicator Dots - Mobile */}
        <div className="md:hidden flex justify-center gap-2 mt-8">
          {teachers.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary/30 transition-all duration-300"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Helper Text */}
      </Container>
    </section>
  );
}
