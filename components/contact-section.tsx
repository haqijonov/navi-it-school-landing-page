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
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">
                Biz Bilan Bog'laning
              </CardTitle>
              <p className="text-muted-foreground">
                Mutaxasislarimiz tomonidan savollaringizga batafsil javob oling
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
      </div>
    </section>
  );
}
