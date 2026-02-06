"use client";

import type React from "react";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import {
  Send,
  CheckCircle,
  Eye,
  Brain,
  CheckCircle2,
  Clock,
  FileWarning,
  MailWarning,
  Clock1,
} from "lucide-react";

interface ContactSectionProps {
  id: string;
}

export function ContactSection({ id }: ContactSectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    hasComputer: false,
  });

  const trustSteps = [
    {
      icon: Eye,
      text: "Dars jarayonini kuzatasiz",
    },
    {
      icon: Brain,
      text: "Farzandingiz qanday fikrlashini ko'rasiz",
    },
    {
      icon: CheckCircle2,
      text: "Qarorni ongli ravishda qabul qilasiz",
    },
    {
      icon: Clock,
      text: "Kichik guruhlar sababli joylar soni cheklangan",
    },
  ] as const;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", hasComputer: false });
    }, 3000);
  };

  return (
    <section id={id} className="w-full bg-background py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] [&>*]:min-w-0">
          {/* Left column: title, intro, form */}
          <div className="max-w-2xl w-full mx-auto">
            <Card className="bg-transparent shadow-none">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">
                  <span className="text-primary bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                    Hoziroq BEPUL Darsga Yoziling
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                    <p className="text-lg font-medium text-card-foreground">
                      Bizga habar yuborganingizdan mamnunmiz
                    </p>
                    <p className="text-muted-foreground">
                      Biz sizga tez orada javob qaytaramiz
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        id={`name-${id}`}
                        type="text"
                        placeholder="Ism"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-input border-border"
                      />
                    </div>

                    <div>
                      <Input
                        id={`phone-${id}`}
                        type="text"
                        placeholder="Telefon raqam"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="bg-input border-border"
                      />
                    </div>

                    {/* ✅ Radio qismi */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-card-foreground">
                        Farzandingizda kompyuter bormi?
                      </p>

                      <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 cursor-pointer text-sm">
                          <input
                            type="radio"
                            name={`hasComputer-${id}`}
                            checked={formData.hasComputer === true}
                            onChange={() =>
                              setFormData({ ...formData, hasComputer: true })
                            }
                            className="h-4 w-4 text-primary focus:ring-primary"
                          />
                          Ha
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer text-sm">
                          <input
                            type="radio"
                            name={`hasComputer-${id}`}
                            checked={formData.hasComputer === false}
                            onChange={() =>
                              setFormData({ ...formData, hasComputer: false })
                            }
                            className="h-4 w-4 text-primary focus:ring-primary"
                          />
                          Yo‘q
                        </label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-accent"
                    >
                      <Send className="mr-2" size={18} />
                      Yuborish
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right column: trust / reassurance block */}
          <motion.aside
            aria-labelledby={`contact-trust-title-${id}`}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.45 }}
            className="w-full max-w-xl mx-auto lg:mx-0 rounded-4xl bg-gradient-to-r from-primary/[0.08] via-background to-background   p-6 md:p-7 lg:p-8"
          >
            <h3
              id={`contact-trust-title-${id}`}
              className="mt-2 text-xl md:text-2xl font-semibold text-foreground"
            >
              Hammasi sizning nazoratingizda
            </h3>

            <ul className="mt-6 space-y-3.5">
              {trustSteps.map((step, index) => (
                <li
                  key={step.text}
                  className="group flex items-start gap-3 rounded-2xl px-3 py-3 transition-colors duration-200 hover:bg-primary/[0.07]"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <step.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="mt-0.5 text-sm md:text-base font-medium text-foreground/95 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
