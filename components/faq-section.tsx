"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  position: string;
  tail: string;
}

const faqs: FAQItem[] = [
  {
    question: "Qimmat emasmi?",
    answer:
      "Oflaynga qaraganda arzonroq: yo‘l, vaqt va qo‘shimcha xarajatlar yo‘q. Eng muhimi — pul darsga emas, natijaga ishlaydi.",
    position: "left-0 top-6",
    tail: "left-[70%] top-full rotate-12",
  },
  {
    question: "Noutbukimiz yo‘q.",
    answer:
      "Boshlash uchun noutbuk kerak bo‘ladi. Ko‘pchilik ota-onalar konsultatsiyadan keyin bosqichma-bosqich olib beradi. Xohlasangiz, qaysi minimal noutbuk kerakligini aniq aytib beramiz.",
    position: "right-0 top-16",
    tail: "right-[65%] top-full -rotate-12",
  },
  {
    question: "Natija qanchada ko‘rinadi?",
    answer:
      "Birinchi natijalar 1 oy ichida: farzandingiz birinchi kichik loyihani qiladi. 1–3 oyda o‘sish ko‘rinadi.",
    position: "left-6 bottom-12",
    tail: "left-[60%] -top-2 rotate-6",
  },
  {
    question: "Online darslar natija beradimi?",
    answer:
      "Ha. Natija formatda emas, metodika + mentor nazorati + amaliy loyihalarda. Shuning uchun online ham real natija beradi.",
    position: "right-8 bottom-4",
    tail: "right-[60%] -top-2 -rotate-6",
  },
  {
    question: "Vaqti bekorga ketmaydimi?",
    answer:
      "Yo‘q. Har oy loyiha qiladi, mentor esa jarayonni nazorat qiladi. Telefon vaqtini “bekorchilik”dan foydali ko‘nikmaga aylantiramiz.",
    position: "left-1/2 -translate-x-1/2 top-[80%]",
    tail: "left-1/2 -top-2 -translate-x-1/2",
  },
  {
    question: "To‘laydigan pul oqlanadimi?",
    answer:
      "Ha, chunki siz faqat dars emas, shaxsiy mentor, kichik guruh, loyiha va ota-onaga hisobot olasiz. Natija va nazorat — pulni oqlaydi.",
    position: "left-1/4 -translate-x-1/2 top-[94%]",
    tail: "left-1/2 -top-2 -translate-x-1/2",
  },
  {
    question: "Natija bo‘ladimi?",
    answer:
      "Bo‘ladi — agar farzandingiz darslarga qatnashsa va topshiriqlarni bajarsa. Biz tomondan: mentor, tizim, nazorat va qo‘llab-quvvatlash bor.",
    position: "left-2/3 -translate-x-1/7 top-[99%]",
    tail: "left-1/2 -top-2 -translate-x-1/2",
  },
];

const bubbleMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-secondary py-20 md:py-28"
      aria-labelledby="faq-title"
    >
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2
            id="faq-title"
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6"
          >
            <span className="text-primary bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Ota-onalar so'raydigan savollar
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Bu yerda eng ko'p beriladigan savollar va qisqa, samimiy javoblar.
          </p>
        </motion.div>

        {/* Desktop radial layout */}
        <div className="relative hidden md:block">
          <div className="relative mx-auto h-[520px] max-w-5xl">
            {/* Center illustration */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                viewBox="0 0 480 480"
                className="h-full w-full scale-[1.2] md:scale-[1.4]"
                aria-hidden
                style={{ background: "transparent" }}
              >
                <defs>
                  {/* Gradient */}
                  <linearGradient
                    id="faq-center-glow"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#dff5ff" />
                    <stop offset="50%" stopColor="#e9fbf3" />
                    <stop offset="100%" stopColor="#eef3ff" />
                  </linearGradient>

                  {/* Blur */}
                  <filter
                    id="faq-soft-blur"
                    x="-35%"
                    y="-35%"
                    width="170%"
                    height="170%"
                  >
                    <feGaussianBlur stdDeviation="14" />
                  </filter>

                  {/* Main shape path (NEW SHAPE) */}
                  <path
                    id="faq-center-path"
                    d="M437.3 158.3A99.5 99.5 0 0 0 321.6 42.8a99.5 99.5 0 0 0-163.4 0A99.5 99.5 0 0 0 42.7 158.3a99.5 99.5 0 0 0 0 163.4 99.5 99.5 0 0 0 115.6 115.6 99.5 99.5 0 0 0 163.4 0 99.5 99.5 0 0 0 115.5-115.6 99.5 99.5 0 0 0 0-163.4Z"
                  />

                  {/* Clip path */}
                  <clipPath id="faq-center-clip" clipPathUnits="userSpaceOnUse">
                    <use href="#faq-center-path" />
                  </clipPath>
                </defs>

                {/* 🔹 Glow background */}
                <use
                  href="#faq-center-path"
                  fill="url(#faq-center-glow)"
                  filter="url(#faq-soft-blur)"
                  opacity="0.95"
                />

                {/* 🔹 Image clipped inside shape */}
                <g clipPath="url(#faq-center-clip)">
                  <image
                    href="/thinking-parent.jpg"
                    x="0"
                    y="0"
                    width="480"
                    height="480"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* 🔹 Soft shadow */}
                <use
                  href="#faq-center-path"
                  fill="transparent"
                  className="drop-shadow-[0_30px_70px_rgba(14,116,144,0.16)]"
                />
              </svg>
            </motion.div>

            {/* FAQ bubbles around */}
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                variants={bubbleMotion}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`absolute ${faq.position}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group relative max-w-[240px] rounded-3xl bg-white/90 px-5 py-4 text-left shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                >
                  <div
                    className={`absolute ${faq.tail} h-3 w-3 rounded-full bg-white/90 shadow-[0_6px_16px_rgba(15,23,42,0.08)] transition-colors duration-300 group-hover:bg-primary/10`}
                  />
                  <p className="text-sm font-semibold text-foreground">
                    {faq.question}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="block md:hidden">
          <Accordion type="single" collapsible defaultValue="faq-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="mb-3 rounded-2xl border border-white/30 bg-transparent px-4 shadow-none"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Savolingiz bormi?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            BEPUL kansultatsiya
          </a>
        </div>
      </Container>
    </section>
  );
}
