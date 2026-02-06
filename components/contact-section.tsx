"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Eye, Brain, CheckCircle2, Clock } from "lucide-react";
import AmoForm from "./formAmo";
// import FormAmo from "@/components/formAmo";

interface ContactSectionProps {
  id: string;
}

export function ContactSection({ id }: ContactSectionProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const trustSteps = [
    { icon: Eye, text: "Dars jarayonini kuzatasiz" },
    { icon: Brain, text: "Farzandingiz qanday fikrlashini ko'rasiz" },
    { icon: CheckCircle2, text: "Qarorni ongli ravishda qabul qilasiz" },
    { icon: Clock, text: "Kichik guruhlar sababli joylar soni cheklangan" },
  ] as const;

  return (
    <section id={id} className="w-full bg-background py-20 md:py-28">
      <Container>
        <AmoForm />
      </Container>
    </section>
  );
}
