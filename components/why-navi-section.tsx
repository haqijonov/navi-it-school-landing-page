"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Brain,
  Shield,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "Tanqidiy Fikirlash",
    description:
      "Biz muammolarni hal qilish ko'nikmalarini va mantiqiy fikrlashni rivojlantiramiz, talabalarni raqamli dunyoda har qanday muammoni hal qilishga tayyorlaymiz.",
    color: "bg-chart-1",
  },
  {
    icon: Shield,
    title: "Raqamli Madaniyat",
    description:
      "O'quvchilarimiz texnalogiyadan qanday foydalanish kerak ekanligini amaliy holatda o'rganishadi",
    color: "bg-chart-2",
  },
  {
    icon: Rocket,
    title: "Kelajakka tayyor ko'nikmalar",
    description:
      "Eng so'ngi texnalogiyalarni ishlatishni o'rganishadi. Suniy intelektni to'g'ri yo'lda foydalanish ko'nikmalarini hosil qilishdi",
    color: "bg-chart-3",
  },
];

export function WhyNaviSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % values.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + values.length) % values.length);
  };

  return (
    <section id="why-navi" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nega NAVI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl ">
            Nega ota-onalar aynan NAVI ni tanlashadi.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Video placeholder */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img
                    src={`/.jpg?height=300&width=400&query=${value.title} technology education kids`}
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-primary-foreground rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center`}
                    >
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              {/* Video placeholder */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={`/.jpg?height=300&width=400&query=${values[activeIndex].title} technology education kids`}
                  alt={values[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                  <div className="w-14 h-14 bg-primary-foreground rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 ${values[activeIndex].color} rounded-xl flex items-center justify-center`}
                  >
                    {(() => {
                      const Icon = values[activeIndex].icon;
                      return (
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      );
                    })()}
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {values[activeIndex].title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {values[activeIndex].description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-border hover:bg-muted bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <div className="flex gap-2">
              {values.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-border hover:bg-muted bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
