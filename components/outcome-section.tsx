"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Brain, CheckCircle2, Cpu, Lightbulb, Target } from "lucide-react";
import { Container } from "@/components/ui/container";

type OutcomeCard = {
  icon: LucideIcon;
  title: string;
  image: string;
};

const outcomeCards: OutcomeCard[] = [
  {
    icon: CheckCircle2,
    title: "Har oy loyiha yaratadi",
    image: "/real-loyha-bola.jpg",
  },
  {
    icon: Brain,
    title:
      "Sun'iy intelekt qanday ishlashini va to'g'ri foydalanishni o'rganadi",
    image: "/ai-literasing.jpg",
  },

  {
    icon: Lightbulb,
    title: '"Qanday loyiha yaratay ekan?" deb o\'ylaydi',
    image: "/thinking.jpg",
  },
  {
    icon: Target,
    title: "O'z kelajagi haqida tasavur qila oladi ",
    image: "inde-think.jpg",
  },
  {
    icon: Target,
    title: "Mustaqil fikrlashni boshlaydi",
    image: "independed-thinking.jpg",
  },
  {
    icon: Target,
    title: "Telefon va kompyuterdan to'g'ri foydalanadi",
    image: "it-chi.jpg",
  },
];

export function OutcomeSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="outcome"
      className="relative w-full py-16 md:py-24 lg:py-28"
      aria-labelledby="outcome-title"
    >
      <Container>
        <div className="mx-auto max-w-5xl">
          <motion.header
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.55 }}
            className="mb-8 text-center md:mb-10 lg:mb-12"
          >
            <h2
              id="outcome-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            >
              1 oydan keyin natija ko'rasiz
            </h2>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.55 }}
            className="relative overflow-hidden rounded-[28px] border border-border/80 bg-gradient-to-b from-secondary/35 via-background to-background p-4 md:p-6 lg:p-7"
          >
            <div className="pointer-events-none absolute -right-16 -top-14 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

            <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {outcomeCards.map((card, index) => (
                <motion.li
                  key={card.title}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 14,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.65 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.2 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  className={`group relative overflow-hidden rounded-2xl border bg-card/90 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)] ${
                    index === outcomeCards.length - 1
                      ? "border-primary/35 bg-gradient-to-b from-primary/[0.12] to-card"
                      : "border-border/70"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />

                    <span className="absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/70 bg-white/80 text-[11px] font-semibold text-foreground backdrop-blur-sm">
                      {index + 1}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 md:p-5">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                      <card.icon className="h-4 w-4 text-primary/80" />
                    </span>
                    <h3 className="text-sm md:text-base font-semibold leading-snug text-foreground/95">
                      {card.title}
                    </h3>
                  </div>
                </motion.li>
              ))}
            </ol>

            <p className="mt-5 text-right text-xs md:text-sm text-muted-foreground/90">
              Bu boshlanish xolos.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
