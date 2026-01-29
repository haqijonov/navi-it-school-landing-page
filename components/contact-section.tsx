"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";

interface ContactSectionProps {
  id: string;
}

export function ContactSection({ id }: ContactSectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "" });
    }, 3000);
  };

  return (
    <section id={id} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
          {/* Left column: title, intro, form */}
          <div className="max-w-2xl w-full mx-auto">
            <Card className="bg-card border-border shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">
                  BEPUL{" "}
                  <span className="text-primary bg-gradient-to-r from-primary via-cyan-500 to-primary bg-clip-text text-transparent">
                    Konsultatsiya
                  </span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Telefon raqamingizni qoldiring — biz siz bilan tez orada
                  bog‘lanamiz
                </p>
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
                      <label
                        htmlFor={`name-${id}`}
                        className="block text-sm font-medium text-card-foreground mb-2"
                      >
                        Ismingiz
                      </label>
                      <Input
                        id={`name-${id}`}
                        type="text"
                        placeholder="ismingiz"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-input border-border"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`email-${id}`}
                        className="block text-sm font-medium text-card-foreground mb-2"
                      >
                        Telefon raqamingiz
                      </label>
                      <Input
                        id={`phone-${id}`}
                        type="text"
                        placeholder="telefon raqamingiz"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="bg-input border-border"
                      />
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

          {/* Right column: supportive illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="contact-illustration-float w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="aspect-[3/3] w-full overflow-hidden rounded-3xl ">
                <img
                  src="/Call center-cuate.svg"
                  alt="Aloqa va qo'llab-quvvatlash illyustratsiyasi"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle float animation with reduced-motion support */}
      <style jsx global>{`
        @keyframes contactFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .contact-illustration-float {
          animation: contactFloat 10s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-illustration-float {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
