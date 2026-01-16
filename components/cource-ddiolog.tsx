"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface Course {
  title: string;
  fullDescription: string;
  duration: string;
  level: string;
  students: string;
  tags: string[];
  features: string[];
  icon: LucideIcon;
}

interface CourseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course;
}

export function CourseDialog({ isOpen, onClose, course }: CourseDialogProps) {
  const IconComponent = course.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="lg:max-w-[70%]
  w-[calc(100%-24px)]
  max-h-[92dvh]
  flex flex-col
  overflow-hidden"
      >
        <DialogHeader>
          <div className="flex flex-col gap-4 mb-4 overflow-hidden">
            <div className="flex items-center justify-start gap-2">
              <DialogTitle className="text-3xl font-bold">
                {course.title}
              </DialogTitle>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-primary" />
              </div>
            </div>
            <DialogDescription className="text-base mt-2">
              {course.fullDescription}
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4 overflow-y-auto flex-1">
          {/* Course Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Davomiyligi</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border">
              <Award className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Daraja</p>
                <p className="font-semibold">{course.level}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">O'quvchilar</p>
                <p className="font-semibold">{course.students}</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-semibold mb-3">Kurs xususiyatlari:</h3>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-3">Siz nimalarni o'rganasiz:</h3>
            <ul className="space-y-2">
              {course.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DialogFooter className="border-t pt-4">
          <a href="#contact-1" onClick={onClose} className="w-full">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg py-5 md:py-6">
              <span className="mr-2">Kursga yozilish</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
