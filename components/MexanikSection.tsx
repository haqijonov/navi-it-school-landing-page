"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, FolderKanban, UserCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/container";

type MechanicCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  glowClass: string;
};

const mechanicCards: MechanicCard[] = [
  {
    icon: UserCheck,
    title: "Shaxsiy mentor",
    description:
      "Farzandingizning kuchli va sust tomonlari alohida kuzatiladi. Har bosqichda kimdir yonida bo'ladi.",
    glowClass: "bg-primary/14",
  },
  {
    icon: Users,
    title: "Kichik guruhlar (8-10 o'quvchi)",
    description:
      "Har bir o'quvchi darsda faol bo'ladi va savolsiz qolmaydi. E'tibor yo'qolmaydi, natija tezroq ko'rinadi.",
    glowClass: "bg-cyan-500/14",
  },
  {
    icon: FolderKanban,
    title: "Har oy real loyiha",
    description:
      "Nazariya darhol amaliyotga aylanadi. Bola har oy qo'li bilan yaratgan natijasini ko'rsatib boradi.",
    glowClass: "bg-blue-500/14",
  },
  {
    icon: ClipboardCheck,
    title: "Nazorat va oylik hisobot",
    description:
      "Ota-ona jarayonni aniq ko'radi: davomat, topshiriqlar va o'sish nuqtalari bir joyda jamlanadi.",
    glowClass: "bg-indigo-500/14",
  },
];

export function MexanikSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="mexanik"
      className="relative w-full overflow-hidden bg-background py-16 md:py-24 lg:py-28"
      aria-labelledby="mexanik-title"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <h2
            id="mexanik-title"
            className="text-3xl font-extrabold text-foreground md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Ta'lim tizimi qanday ishlaydi?
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Har bir qadam reja asosida quriladi: mentor, amaliyot va nazorat bir
            tizimda ishlaydi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mechanicCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 20,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.07,
              }}
              className="group relative overflow-hidden rounded-3xl border border-border/75 bg-card/80 p-5 shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/35 hover:shadow-[0_20px_40px_rgba(15,23,42,0.14)] md:p-6"
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full ${card.glowClass} opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/20 to-primary/5 text-primary">
                  <card.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay: 0.1 }}
          className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-[30px] border border-primary/30 bg-gradient-to-r from-primary/10 via-card to-cyan-500/10 px-6 py-8 text-center shadow-[0_20px_50px_rgba(0,67,255,0.14)] md:mt-12 md:px-8 md:py-10"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-44 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl" />
          <p className="relative text-2xl font-extrabold text-foreground md:text-3xl">
            Farzandingiz yolg'iz qolmaydi!
          </p>
          <p className="relative mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Mentor nazorati, kichik guruh va doimiy hisobot tufayli ta'lim
            jarayoni nazorat ostida qoladi.
          </p>
          <span className="relative mx-auto mt-4 block h-1 w-28 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
        </motion.div>
      </Container>
    </section>
  );
}
