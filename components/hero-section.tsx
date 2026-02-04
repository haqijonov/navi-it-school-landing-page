"use client";

import { Trophy, Rocket, Calendar, Clock, User, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { HeroTitle } from "./hero-title";

const features = [
  {
    icon: Rocket,
    title: "Individual darslar",
    description: "Har bir o'quvchi uchun shaxsiy yondashuv",
  },
  {
    icon: Calendar,
    secondaryIcon: Clock,
    title: "Shaxsiy jadval",
    description: "O'zingizga qulay vaqtda o'rganing",
  },
  {
    icon: User,
    title: "Tajribali o'qituvchi",
    description: "Malakali va e'tiborli murabbiylar",
  },
  {
    icon: Heart,
    title: "Qiziqishni saqlaymiz",
    description: "Qiziqarli va interaktiv o'qitish",
  },
];

export function HeroSection() {
  return (
    <section
      className="relative bg-background py-16 md:py-24 lg:py-28"
      aria-labelledby="hero-title"
    >
      <Container>
        {/* Hero two-column layout */}
        <div className="w-100 text-center justify-center mt-12 flex mx-auto mb-12 items-center gap-2 rounded-full bg-muted border border-border px-6 py-3">
          <Trophy className="h-5 w-5 text-black" />
          <span className="text-sm md:text-base font-medium text-black">
            5 yildan ortiq bolalarni o&apos;qitamiz
          </span>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:grid lg:items-center mx-auto">
          {/* Left: Title & badge */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <div className="w-full" id="hero-title">
              <HeroTitle />
            </div>
          </div>

          {/* Right: Media */}
          <div className="order-1 lg:order-2 w-full mx-auto lg:mx-0">
            <motion.div
              className="relative aspect-[4/3] w-full"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Blob Illustration */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative mx-auto h-full w-full"
              >
                <svg
                  viewBox="0 0 480 480"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <defs>
                    {/* Soft gradient (ref dagidek) */}
                    <linearGradient id="hero-glow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#dff5ff" />
                      <stop offset="55%" stopColor="#e9fbf3" />
                      <stop offset="100%" stopColor="#eef3ff" />
                    </linearGradient>

                    {/* Glow blur */}
                    <filter
                      id="softBlur"
                      x="-30%"
                      y="-30%"
                      width="160%"
                      height="160%"
                    >
                      <feGaussianBlur stdDeviation="10" />
                    </filter>

                    {/* ✅ Main shape path from your NEW svg */}
                    <path
                      id="hero-blob-path"
                      d="M320 0v160a160 160 0 1 0-320 0v320h160V320a160 160 0 1 0 320 0V0H320Z"
                    />

                    {/* ✅ Clip uses the SAME shape */}
                    <clipPath id="hero-blob" clipPathUnits="userSpaceOnUse">
                      <use href="#hero-blob-path" />
                    </clipPath>
                  </defs>

                  {/* ✅ BACKGROUND GLOW (same shape) */}
                  <use
                    href="#hero-blob-path"
                    fill="url(#hero-glow)"
                    filter="url(#softBlur)"
                    opacity="0.95"
                  />

                  {/* ✅ SHADOW */}
                  <use
                    href="#hero-blob-path"
                    fill="transparent"
                    className="drop-shadow-[0_30px_60px_rgba(15,118,110,0.16)]"
                  />

                  {/* ✅ IMAGE CLIPPED INSIDE */}
                  <g clipPath="url(#hero-blob)">
                    <image
                      href="/hero-banner-img.jpg"
                      x="0"
                      y="0"
                      width="480"
                      height="480"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </g>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="
               group relative overflow-hidden
               p-6 bg-card border-none text-center
               transition-all duration-500
               hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2
               cursor-pointer
             "
            >
              {/* Gradient Background (hoverda chiqadi) */}
              <div
                className="
                 absolute inset-0
                 bg-gradient-to-br from-primary/10 via-cyan-500/10 to-primary/5
                 opacity-0 group-hover:opacity-100
                 transition-opacity duration-500
               "
              />

              {/* Decorative Blobs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
              <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />

              {/* Dotted Pattern */}
              <div
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <div className="flex justify-center mb-4 relative">
                  {feature.secondaryIcon ? (
                    <div className="relative">
                      <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                      {/* <feature.secondaryIcon className="w-4 h-4 md:w-5 md:h-5 text-accent absolute -bottom-1 -right-1" /> */}
                    </div>
                  ) : feature.icon === User ? (
                    <div className="relative">
                      <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                      {/* <Laptop className="w-5 h-5 md:w-6 md:h-6 text-accent absolute -bottom-1 -right-1" /> */}
                    </div>
                  ) : (
                    <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  )}
                </div>

                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
