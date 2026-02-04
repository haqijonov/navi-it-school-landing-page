"use client";

import { useEffect, useRef, useState } from "react";
import {
  Rocket,
  BookOpen,
  Lightbulb,
  Heart,
  Shield,
  Award,
} from "lucide-react";
import { Container } from "@/components/ui/container";

const values = [
  {
    icon: Shield,
    title: "Ishonch",
    description: "Har bir bola uchun xavfsiz va qulay muhit",
  },
  {
    icon: Award,
    title: "Sifat",
    description: "Yuqori darajadagi ta'lim va professional yondashuv",
  },
  {
    icon: Heart,
    title: "G'amxo'rlik",
    description: "Har bir o'quvchiga individual e'tibor va qo'llab-quvvatlash",
  },
];

export function FounderSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            <span className="text-primary bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              NAVI Asoschisi
            </span>
          </h2>
        </div>

        {/* Main Content: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Founder Image */}
          <div
            className={`relative order-2 lg:order-1 flex items-center justify-center ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="relative w-full max-w-md">
              {/* Floating Icons */}
              <div
                className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-primary/10 backdrop-blur-sm border-2 border-primary/20 flex items-center justify-center animate-float-slow"
                aria-hidden="true"
              >
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <div
                className="absolute -bottom-8 -left-8 w-14 h-14 rounded-full bg-cyan-500/10 backdrop-blur-sm border-2 border-cyan-500/20 flex items-center justify-center animate-float-slow-delayed"
                aria-hidden="true"
              >
                <BookOpen className="w-7 h-7 text-cyan-500" />
              </div>
              <div
                className="absolute top-1/2 -right-12 w-12 h-12 rounded-full bg-purple-500/10 backdrop-blur-sm border-2 border-purple-500/20 flex items-center justify-center animate-float-slow"
                style={{ animationDelay: "1s" }}
                aria-hidden="true"
              >
                <Lightbulb className="w-6 h-6 text-purple-500" />
              </div>

              {/* Animated Outline Rings */}
              <div className="absolute -inset-1 rounded-full border-2 border-primary/10" />
              <div className="absolute -inset-2 rounded-full border-2 border-cyan-500/10 animate-pulse-slow" />

              {/* Main Image Container - Circular with Organic Shape */}
              <div className="relative w-full aspect-square">
                {/* Gradient Glow */}
                <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/20 via-cyan-500/20 to-purple-500/20 blur-2xl opacity-60" />

                {/* Photo with Soft Mask */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                  <img
                    src="/atham.JPG"
                    alt="Atham Azam - NAVI Founder & CEO, ta'lim va texnologiya sohasidagi mutaxassis"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Soft overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                </div>

                {/* Decorative Dots */}
                <div className="absolute top-0 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-ping-slow" />
                <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-cyan-500/40 rounded-full animate-ping-slow-delayed" />
              </div>
            </div>
          </div>

          {/* Right: Story Content */}
          <div
            className={`order-1 lg:order-2 space-y-8 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            {/* Name & Role */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Atham Azam
              </h3>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
                Founder & CEO / Lead Mentor
              </p>
            </div>

            {/* Headline */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-cyan-500 to-purple-500 rounded-full" />
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight pl-6">
                Kelajakda ishonchli yaratuvchilarni tarbiyalaymiz
              </p>
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Mening orzuim — bolalar va yoshlar uchun faqat o'qish emas,
                balki yaratishni o'rgatadigan platformani yaratish. NAVI orqali
                biz kelajak mutaxassislarini tarbiyalaymiz, ular o'z g'oyalarini
                amalga oshiradi va dunyoga o'z hissasini qo'shadi.
              </p>
              <p>
                Biz bilan birga bolalar nafaqat bilim oladi, balki o'z
                salohiyatini ochadi va yangi imkoniyatlarni kashf etadi. Har bir
                dars, har bir loyiha — bu kelajakka qadam.
              </p>
              <p className="text-foreground font-semibold">
                Biz faqat foydalanuvchilarni emas, yangi loyihalar yaratuvchi
                yosh avlodni tarbiyalaymiz.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                  style={{
                    animationDelay: `${400 + index * 100}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-3 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <div className="pt-6 space-y-2">
              <p className="text-sm font-semibold text-foreground mb-3">
                Qo'shimcha loyihalar:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span>
                    MARS IT - O'zbekistondagi eng yirik o'smirlar uchun
                    mo'ljallangan o'quv markaz asoschisi
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
