"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teachers = [
  {
    name: "Mavlon Haqijonov",
    role: "Senior Web Developer",
    experience: "O'qitishda 3+ yillik tajribaga ega",
    image: "/female-web-developer-teacher-portrait-professionall.jpg",
  },
  {
    name: "Islom Shahobiddinov",
    role: "AI Mutaxasis",
    experience: "Dasturlash va AI da 3+ tajribaga ega",
    image: "/islom.jpeg",
  },
  {
    name: "Azamat Ergashev",
    role: "Full-Stack Developer",
    experience: "Dasturlashda va o'qitishda 4+ tajribaga ega ustoz",
    image: "/female-full-stack-developder-teacher-portrait-profe.jpg",
  },
];

export function TeachersSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % teachers.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
  };

  return (
    <section id="teachers" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className=" mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Ustozlarimiz bilan tanishing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl ">
            Farzandlarimizni kelajakka tayorlashda va eng zamonaviy
            texnalogiyalarni o'rgatishda mutaxasislarimiz
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <Card
              key={teacher.name}
              className="bg-card border-border text-center p-6 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
                  <img
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    className="w-full h-full object-cover scale-160 object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {teacher.name}
                </h3>
                <p className="text-accent font-medium mb-3">{teacher.role}</p>
                <p className="text-muted-foreground text-sm">
                  {teacher.experience}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Card className="bg-card border-border text-center p-6">
            <CardContent className="p-0">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src={teachers[activeIndex].image || "/placeholder.svg"}
                  alt={teachers[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                {teachers[activeIndex].name}
              </h3>
              <p className="text-accent font-medium mb-3">
                {teachers[activeIndex].role}
              </p>
              <p className="text-muted-foreground text-sm">
                {teachers[activeIndex].experience}
              </p>
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
              {teachers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Go to teacher ${index + 1}`}
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
