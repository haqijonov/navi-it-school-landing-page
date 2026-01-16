"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  titleReveal,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/animations/variants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Code,
  Palette,
  FileCode,
  Atom,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Award,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CourseDialog } from "./cource-ddiolog";

interface Course {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  duration: string;
  level: "Boshlang'ich" | "O'rta" | "Yuqori";
  students: string;
  features: string[];
  gradient: string;
  size: "small" | "medium" | "large";
  span: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const courses: Course[] = [
  {
    icon: Code,
    title: "HTML",
    shortDescription: "Veb-saytlaringizning asosini yarating",
    fullDescription:
      "HTML — bu har qanday veb-saytning asosi. Bu kursda siz HTML elementlari, struktur, semantika va zamonaviy HTML5 standartlarini o'rganasiz. Har bir darsdan keyin siz o'z loyihangizni yaratasiz va real veb-sahifalar qilishni boshlaysiz!",
    tags: ["Boshlang'ich", "Loyiha", "Qiziqarli"],
    duration: "6 hafta",
    level: "Boshlang'ich",
    students: "500+ o'quvchilar",
    features: [
      "HTML5 elementlari va semantik markup",
      "Formalar va interaktiv elementlar",
      "Media elementlari (rasm, video, audio)",
      "Real loyihalar bilan amaliyot",
      "Portfolio uchun 3 ta loyiha",
    ],
    gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
    size: "large",
    span: {
      mobile: "col-span-1 ",
      tablet: "md:col-span-2",
      desktop: "lg:col-span-2 row-span-1",
    },
  },
  {
    icon: Palette,
    title: "CSS",
    shortDescription: "Chiroyli va zamonaviy dizaynlar yarating",
    fullDescription:
      "CSS bilan veb-saytlaringizni yorqin, zamonaviy va chiroyli qiling! Flexbox, Grid, animatsiyalar, responsiv dizayn va boshqa kuchli CSS texnikalarini o'rganing. Har bir darsda yangi dizayn hiylalarini o'rganib, professional ko'rinishga ega bo'lasiz.",
    tags: ["O'rta", "Dizayn", "Yaratuvchanlik"],
    duration: "8 hafta",
    level: "O'rta",
    students: "450+ o'quvchilar",
    features: [
      "Flexbox va CSS Grid",
      "Animatsiyalar va transitions",
      "Responsiv dizayn (mobile-first)",
      "CSS Variables va modern CSS",
      "5 ta chiroyli loyiha",
    ],
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    size: "medium",
    span: {
      mobile: "col-span-1",
      tablet: "md:col-span-1",
      desktop: "lg:col-span-2 row-span-1",
    },
  },
  {
    icon: FileCode,
    title: "JavaScript",
    shortDescription: "Veb-saytlaringizni jonlantiring",
    fullDescription:
      "JavaScript — bu veb-saytlaringizni interaktiv qiladigan kuchli dasturlash tili! Bu kursda siz DOM manipulyatsiyasi, event handling, arrays, objects, functions va zamonaviy JavaScript (ES6+) ni o'rganasiz. O'qiganlaringizni darhol qo'llash orqali qiziqarli loyihalar yaratasiz!",
    tags: ["O'rta", "Dasturlash", "Qiziqarli"],
    duration: "10 hafta",
    level: "O'rta",
    students: "600+ o'quvchilar",
    features: [
      "JavaScript asoslari va ES6+",
      "DOM manipulyatsiyasi",
      "Event handling va asinxron kod",
      "Array methods va object manipulation",
      "6 ta interaktiv loyiha",
    ],
    gradient: "from-purple-500/20 via-blue-500/20 to-cyan-500/20",
    size: "large",
    span: {
      mobile: "col-span-1",
      tablet: "md:col-span-2",
      desktop: "lg:col-span-3 row-span-1",
    },
  },
  {
    icon: Atom,
    title: "React",
    shortDescription: "Zamonaviy veb-ilovalar yarating",
    fullDescription:
      "React — bu dunyoda eng mashhur JavaScript kutubxonasi! Facebook tomonidan yaratilgan React bilan siz komponentli, tez va zamonaviy veb-ilovalar yaratasiz. Hooks, state management, routing va boshqa professional ko'nikmalarni o'rganib, o'z ilovangizni yarating!",
    tags: ["Yuqori", "Framework", "Sertifikat"],
    duration: "12 hafta",
    level: "Yuqori",
    students: "400+ o'quvchilar",
    features: [
      "React asoslari va hooks",
      "State management va context",
      "React Router va navigation",
      "API integration va data fetching",
      "To'liq stack loyiha (final project)",
    ],
    gradient: "from-blue-600/20 via-purple-500/20 to-cyan-500/20",
    size: "medium",
    span: {
      mobile: "col-span-1",
      tablet: "md:col-span-1",
      desktop: "lg:col-span-1 row-span-1",
    },
  },
  {
    icon: Sparkles,
    title: "AI Skills",
    shortDescription: "Sun'iy intellekt bilan ishlashni o'rganing",
    fullDescription:
      "AI — bu kelajak! ChatGPT, MidJourney, DALL-E va boshqa AI vositalari bilan ishlashni o'rganing. Prompt engineering, AI-assisted coding, creative AI tools va qanday qilib AI dan samarali foydalanishni o'rganib, o'zingizni kelajakga tayyorlang!",
    tags: ["O'rta", "AI", "Kelajak"],
    duration: "8 hafta",
    level: "O'rta",
    students: "350+ o'quvchilar",
    features: [
      "ChatGPT va prompt engineering",
      "AI for coding va development",
      "Creative AI tools (MidJourney, DALL-E)",
      "AI-assisted project building",
      "Real-world AI applications",
    ],
    gradient: "from-cyan-500/20 via-purple-500/20 to-blue-600/20",
    size: "large",
    span: {
      mobile: "col-span-1",
      tablet: "md:col-span-2",
      desktop: "lg:col-span-4 row-span-1",
    },
  },
];

function CourseCard({
  course,
  onDetailsClick,
  index,
}: {
  course: Course;
  onDetailsClick: (courseTitle: string) => void;
  index: number;
}) {
  return (
    <Card
      className={`group relative overflow-hidden ${course.span.mobile} ${course.span.tablet} ${course.span.desktop} h-full bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer`}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Decorative Blob */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
      <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />

      {/* Dotted Pattern (subtle) */}
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <CardHeader className="relative z-10 p-6">
        {/* Icon */}
        <div className="mb-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <course.icon className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {course.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <CardTitle className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {course.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 p-6 pt-0 flex flex-col flex-1">
        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
          {course.shortDescription}
        </p>

        {/* Stats (for larger cards) */}
        {course.size === "large" && (
          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span>{course.students}</span>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onDetailsClick(course.title);
          }}
          className="w-full bg-primary py-6 text-primary-foreground hover:bg-primary/90 group/button transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
        >
          <span className="mr-2">Batafsil</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
        </Button>
      </CardContent>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 pointer-events-none" />
    </Card>
  );
}

function CourseModal({
  course,
  isOpen,
  onClose,
}: {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!course) return null;

  return <CourseDialog isOpen={isOpen} onClose={onClose} course={course} />;
}

export function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = (courseTitle: string) => {
    const course = courses.find((c) => c.title === courseTitle);
    if (course) {
      setSelectedCourse(course);
      setIsModalOpen(true);
    }
  };

  return (
    <section
      id="courses"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={titleReveal}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            Bizning{" "}
            <span className="text-primary bg-gradient-to-r from-primary via-cyan-500 to-primary bg-clip-text text-transparent">
              Maqsadimiz
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Bu shunchaki kurslar emas — bu o‘sish yo‘li. Noldan boshlanib,
            ishonchli bilim va real ko‘nikmalar bilan yakunlanadigan safar.
            Keling, bilim orqali kelajakni birga yaratamiz.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-6"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              variants={staggerItem}
              className={
                course.span.mobile +
                " " +
                course.span.tablet +
                " " +
                course.span.desktop
              }
            >
              <CourseCard
                course={course}
                onDetailsClick={handleDetailsClick}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Course Details Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
