"use client";

import { Button } from "@/components/ui/button";
import {
  Trophy,
  Rocket,
  Calendar,
  Clock,
  User,
  Laptop,
  Heart,
} from "lucide-react";
import { Card } from "@/components/ui/card";
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
    <section className="relative py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {/* Experience Badge */}
          <div className="mb-8 px-6 py-3 rounded-full bg-muted border border-border flex items-center gap-2">
            <Trophy className="w-5 h-5 text-white" />
            <span className="text-sm md:text-base font-medium text-white">
              5 yildan ortiq bolalarni o'qitamiz
            </span>
          </div>

          {/* Main Heading with Typing Animation */}
          <HeroTitle />

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mb-12">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a href="#contact-1" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-8 md:px-12 py-6 md:py-7 font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Bepul dars
              </Button>
            </a>

            <a href="#why-navi" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 hover:text-primary  border-primary text-primary hover:bg-primary/5 text-base md:text-lg px-8 md:px-12 py-6 md:py-7 font-semibold rounded-full bg-background"
              >
                Sharhlar
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
