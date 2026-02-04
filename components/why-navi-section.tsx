"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { CheckCircle2, Shield, Heart, Star } from "lucide-react";
import { CircularVideoPlaceholder } from "./circular-video-placeholder";
import {
  titleReveal,
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight,
  viewportConfig,
} from "@/animations/variants";

const benefits = [
  {
    icon: Shield,
    title: "Xavfsiz va ishonchli muhit",
    description:
      "Bizning platformamizda har bir o'quvchi xavfsiz va qulay sharoitda o'rganadi. Professional murabbiylar va yaxshi tayyorlangan dasturlar bilan.",
  },
  {
    icon: Star,
    title: "Yuqori sifatli ta'lim",
    description:
      "Eng zamonaviy metodlar va texnologiyalar bilan ta'minlangan dasturlar. Har bir dars qiziqarli va amaliy bilimlar bilan to'ldirilgan.",
  },
  {
    icon: Heart,
    title: "Shaxsiy yondashuv",
    description:
      "Har bir o‘quvchiga individual yondashuv. Kichik guruhlar va shaxsiy e’tibor orqali bola o‘z potentsialini to‘liq ochadi.",
  },
];

export function WhyNaviSection() {
  return (
    <section
      id="why-navi"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={titleReveal}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            <span className="text-primary bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Nega NAVI ?
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Nega ota-onalar aynan NAVI ni tanlashadi? Keling, bizning
            o'quvchilarimizning muvaffaqiyat hikoyalarini bilib oling.
          </motion.p>
        </motion.div>

        {/* Main Content: Text + Circular Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={slideInLeft}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed"
              >
                Har bir bola kelajakda muvaffaqiyatli bo'lishi mumkin — biz
                ularga yo'l ko'rsatamiz
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={staggerContainer}
                className="space-y-4"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2 text-lg">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-6 border-t border-border"
            >
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>500+ o'quvchilar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>7+ yillik tajriba</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Professional murabbiylar</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Circular Video Placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={slideInRight}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <CircularVideoPlaceholder />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
