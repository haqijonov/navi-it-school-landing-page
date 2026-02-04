"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";

type Module = {
  id: string;
  title: string;
  description: string;
  image: string;
  shape?: "playA" | "playB" | "blob";
  mediaLeft: boolean;
};

const modules: Module[] = [
  {
    id: "module-1",
    title: "Programming & Problem Solving",
    description:
      "Farzandingiz kod yozishni emas, muammoni yechishni o'rganadi. Har bir loyiha mantiq, sabr va tizimli fikrlashni mustahkamlaydi - natijada u o'ziga ishonch bilan yechim topa oladi.",
    mediaLeft: true,
    image: "/programming-online.jpg",
    shape: "playA",
  },
  {
    id: "module-2",
    title: "Logical & Critical Thinking",
    description:
      "Biz bolalarga savol berishni, fikrni tahlil qilishni va dalil bilan qaror qilishni o'rgatamiz. Bu modul tafakkurni aniq, xotirjam va mustaqil qilishga xizmat qiladi.",
    mediaLeft: false,
    image: "/thinking.jpg",
    shape: "blob",
  },
  {
    id: "module-3",
    title: "AI Literacy & Creative Collaboration",
    description:
      "AI - bu raqib emas, hamkor. Farzandingiz AI bilan mas'uliyatli muloqot qilib, ijodiy fikrini kuchaytiradi va kelajak texnologiyalariga sog'lom munosabatni shakllantiradi.",
    mediaLeft: true,
    image: "/ai-literasing.jpg",
    shape: "playB",
  },
];

const shapePaths: Record<NonNullable<Module["shape"]>, string> = {
  playA:
    "M120,40 C210,10 430,20 520,120 C600,210 560,350 430,400 C300,450 150,420 90,320 C30,220 40,80 120,40 Z",
  playB:
    "M90,80 C170,10 420,10 520,120 C620,230 560,380 420,420 C280,460 120,420 70,300 C20,190 20,130 90,80 Z",
  blob: "M140,40 C240,10 430,40 500,140 C570,240 540,350 430,410 C320,470 180,450 110,360 C40,270 40,110 140,40 Z",
};

function ModuleIllustration({ module }: { module: Module }) {
  const shape = module.shape ?? "playA";
  const clipId = `clip-${module.id}`;
  const glowId = `glow-${module.id}`;
  const path = shapePaths[shape];

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 480 480"
        className="h-full w-full scale-[1.15] md:scale-[1.1]"
        aria-hidden="true"
        style={{ background: "transparent" }}
      >
        <defs>
          {/* unique ids (assume you already generate them) */}
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <path d="m452.3 154.4 8.5-47.6A75.6 75.6 0 0 0 373.2 19l-47.4 8.5c-16.7 3-34 .2-49-7.8l-1.1-.6c-22.3-12-49-12-71.4 0l-1.2.6c-15 8-32.2 10.8-48.9 7.8L106.7 19A75.6 75.6 0 0 0 19 106.7l8.5 47.5c3 16.7.3 34-7.8 49l-.6 1.1c-12 22.3-12 49 0 71.3l.6 1.3c8 15 10.8 32.2 7.8 48.9L19 373.3a75.6 75.6 0 0 0 87.7 87.7l47.5-8.5c16.7-3 34-.3 49 7.8l1.1.6c22.3 12 49 12 71.3 0l1.3-.6c15-8 32.2-10.8 48.9-7.8l47.5 8.5a75.6 75.6 0 0 0 87.7-87.7l-8.4-47.2c-3-16.9-.2-34.3 8-49.4a75.5 75.5 0 0 0 .3-71.6l-1-1.8c-8-15-10.7-32.2-7.6-48.9Z" />
          </clipPath>

          <linearGradient id={glowId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dff5ff" />
            <stop offset="50%" stopColor="#e9fbf3" />
            <stop offset="100%" stopColor="#eef3ff" />
          </linearGradient>

          <filter x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        {/* 🔹 Glow background (ONLY shape, no rectangle) */}
        <path
          d="m452.3 154.4 8.5-47.6A75.6 75.6 0 0 0 373.2 19l-47.4 8.5c-16.7 3-34 .2-49-7.8l-1.1-.6c-22.3-12-49-12-71.4 0l-1.2.6c-15 8-32.2 10.8-48.9 7.8L106.7 19A75.6 75.6 0 0 0 19 106.7l8.5 47.5c3 16.7.3 34-7.8 49l-.6 1.1c-12 22.3-12 49 0 71.3l.6 1.3c8 15 10.8 32.2 7.8 48.9L19 373.3a75.6 75.6 0 0 0 87.7 87.7l47.5-8.5c16.7-3 34-.3 49 7.8l1.1.6c22.3 12 49 12 71.3 0l1.3-.6c15-8 32.2-10.8 48.9-7.8l47.5 8.5a75.6 75.6 0 0 0 87.7-87.7l-8.4-47.2c-3-16.9-.2-34.3 8-49.4a75.5 75.5 0 0 0 .3-71.6l-1-1.8c-8-15-10.7-32.2-7.6-48.9Z"
          fill={`url(#${glowId})`}
          filter={`url(#)`}
          opacity="0.95"
        />

        {/* 🔹 Image clipped perfectly to shape */}
        <g clipPath={`url(#${clipId})`}>
          <image
            href={module.image}
            x="0"
            y="0"
            width="480"
            height="480"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
    </div>
  );
}

export function CoursesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    let rafId = 0;
    const handleScroll = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const el = sectionRef.current;
        if (!el) {
          return;
        }
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const height = rect.height;
        const vh = window.innerHeight;
        const progress = Math.min(
          1,
          Math.max(0, (window.scrollY - top) / (height - vh)),
        );
        const nextIndex = Math.min(
          modules.length - 1,
          Math.floor(progress * modules.length),
        );
        setActiveIndex(nextIndex);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [isDesktop]);

  const activeModule = useMemo(() => modules[activeIndex], [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background py-16 md:py-24 lg:py-28"
      aria-labelledby="courses-title"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Module-based education
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            <span className="text-primary bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent ">
              {" "}
              Farzandingizning fikirlashi o'zgaradigan yo'l
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Bu kurslar texnologiya ro'yxati emas. Bu - mantiq, ijod va AI bilan
            sog'lom hamkorlikni shakllantiradigan 3 ta katta modul.
          </p>
        </div>

        {/* Desktop: scroll story */}
        <div className="hidden md:block">
          <div className="relative h-[320vh]">
            <div className="sticky top-20 h-[calc(100vh-5rem)] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule.id}
                  className="grid w-full items-center gap-12 lg:grid-cols-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <motion.div
                    className={`relative h-[320px] w-full sm:h-[360px] lg:h-[420px] ${
                      activeModule.mediaLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1.02, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ModuleIllustration module={activeModule} />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className={`${
                      activeModule.mediaLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                    initial={{
                      opacity: 0,
                      x: activeModule.mediaLeft ? 24 : -24,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Modul {activeIndex + 1}
                    </p>
                    <h3 className="mt-3 text-2xl lg:text-4xl font-semibold text-blue-600">
                      {activeModule.title}
                    </h3>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      {activeModule.description}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile: stacked modules */}
        <div className="md:hidden space-y-12">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              className="grid gap-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative h-[260px] w-full">
                <motion.div
                  className="absolute inset-0"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ModuleIllustration module={module} />
                </motion.div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Modul {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {module.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
