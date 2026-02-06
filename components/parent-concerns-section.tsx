"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Smartphone, School, Bot, Brain, Cpu } from "lucide-react";
import { Container } from "@/components/ui/container";

interface PainSignal {
  icon: LucideIcon;
  text: string;
}

const painSignals: PainSignal[] = [
  {
    icon: Smartphone,
    text: "Farzand ko'p vaqtini telefonda o'tkazyapti",
  },
  {
    icon: School,
    text: "Maktab baho qo'yadi, kelajakka tayorlamaydi ",
  },
  {
    icon: Bot,
    text: "Sun'iy intelekt chiqdi — eski kasblar yo'qolayapti",
  },
  {
    icon: Brain,
    text: "Bola aqlli, lekin yo'nalishsiz",
  },
  {
    icon: Cpu,
    text: "Texnologiyadan foydalanadi, lekin tushunmaydi",
  },
];

export function ParentConcernsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="parent-concerns"
      className="relative w-full py-14 md:py-20 lg:py-24"
      aria-labelledby="parent-concerns-title"
    >
      <Container>
        <div className="mx-auto max-w-5xl">
          <motion.header
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.55 }}
            className="mb-8 text-center md:mb-10"
          >
            <h2
              id="parent-concerns-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            >
              Ota-onalar bugun nimadan xavotirda?
            </h2>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.6 }}
            className="relative overflow-hidden rounded-[30px] border border-border/80 bg-gradient-to-b from-secondary/45 via-background to-background p-5 md:p-8 lg:p-10 shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-y-12 left-[15px] w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent md:left-[22px]" />

            <ul className="relative space-y-4 md:space-y-5">
              {painSignals.map((signal, index) => (
                <motion.li
                  key={signal.text}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.65 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.2 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  className="relative pl-11 md:pl-14"
                >
                  <span className="absolute left-0 top-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-primary/25 bg-primary/10 md:h-8 md:w-8">
                    <signal.icon className="h-3.5 w-3.5 text-primary/80 md:h-4 md:w-4" />
                  </span>
                  <div className="rounded-2xl border border-border/70 bg-background/90 px-4 py-3.5 md:px-5 md:py-4">
                    <p className="text-sm md:text-base font-medium leading-relaxed text-foreground/90">
                      {signal.text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.aside
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.45,
                delay: shouldReduceMotion ? 0 : 0.25,
              }}
              role="note"
              className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-4 md:mt-7 md:px-5"
            >
              <p className="text-[24px] md:text-base md:text-[22px] font-bold leading-relaxed text-foreground">
                ❗️ Eng katta xato — "Keyinroq o'rganib olar" deyish.
              </p>
              <p className="mt-1 text-sm md:text-base font-bold text-foreground/90">
                Lekin kelajak kutmaydi!
              </p>
            </motion.aside>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
