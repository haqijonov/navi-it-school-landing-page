"use client";

import { motion } from "framer-motion";
import {
  HelpCircle,
  GraduationCap,
  Laptop,
  MapPin,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import {
  titleReveal,
  staggerContainer,
  staggerItem,
  accordionItemReveal,
  viewportConfig,
} from "@/animations/variants";

interface FAQItem {
  question: string;
  answer: string;
  icon: LucideIcon;
}

const faqs: FAQItem[] = [
  {
    question: "Dars qanday olib boriladi?",
    answer:
      "Bizning o'qitish tizimimiz onlayn platformada amalga oshiriladi. Har bir dars jonli (live) tarzda o'tkaziladi, bu yerda o'quvchilar o'qituvchi bilan bevosita aloqa qilish imkoniyatiga ega. Darslardan tashqari, o'quvchilar amaliy mashg'ulotlar bajaradilar, loyihalar yaratadilar va murabbiylardan individual yordam oladilar. Darslar haftasiga 3 marta, har bir dars 1 siatdan o'tkaziladi, har bir o'quvchi bilan ustoz va mentor (yordamchi ustoz) doimiy ravishda shug'ullanadi.",
    icon: HelpCircle,
  },
  {
    question: "Kimlar uchun?",
    answer:
      "NAVI - farzandingiz kelajagini bugundan o'ylaydigan ota-onalar tanlovi. Biz IT va sun'iy intellekt orqali 10-17 yoshdagi bolalarda zamonaviy fikrlashni va kelajak kasblariga tayyorgarlikni shakllantiramiz. NAVI - bu oddiy kurs emas, balki farzandingizning mustaqil hayoti va kelajagiga qaratilgan ongli sarmoya.",
    icon: GraduationCap,
  },
  {
    question: "Siz qayerda joylashgansiz?",
    answer:
      "Biz butunlay onlayn platformamiz. O'quvchilar qayerda bo'lishidan qat'iy nazar, internet orqali bizning kurslarimizga qo'shilishlari mumkin. Bu sizga va farzandingizga qulaylik beradi — uydan chiqmasdan sifatli ta'lim olish imkoniyatini ta'minlaydi.",
    icon: MapPin,
  },
  {
    question: "Kurslar qancha turadi?",
    answer: "1 oy - 490 000 so'm (oyiga - 490 000).",
    icon: Laptop,
  },
  {
    question: "NAVI bilan qanday bog'lanish mumkin?",
    answer:
      "Biz bilan bog'lanish uchun sahifadagi 'Bog'lanish' tugmasini yoki kontakt formasidan foydalanishingiz mumkin. Telefon raqamingizni qoldiring va biz sizga tez orada qayta qo'ng'iroq qilamiz. Shuningdek, bepul konsultatsiya olish va sinov darsiga yozilish uchun ham biz bilan bog'laning. Biz sizning barcha savollaringizga javob berishga tayyormiz!",
    icon: MessageCircle,
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 bg-secondary overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={titleReveal}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            Tez-tez{" "}
            <span className="text-primary bg-gradient-to-r from-primary via-cyan-500 to-primary bg-clip-text text-transparent">
              so'raladigan savollar
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Ota-onalar ko'pincha so'radigan savollarga javoblar. Boshqa
            savolingiz bormi? Biz bilan bog'laning!
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <FAQCard key={index} faq={faq} index={index} />
            ))}
          </Accordion>
        </motion.div>

        {/* CTA at bottom */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Boshqa savolingiz bormi?</p>
          <a
            href="#contact-2"
            className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Biz bilan bog'laning
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQCard({ faq, index }: { faq: FAQItem; index: number }) {
  const Icon = faq.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={accordionItemReveal}
      transition={{ delay: index * 0.1 }}
    >
      <AccordionItem
        value={`item-${index}`}
        className="border-none data-[state=open]:mb-4"
      >
        <Card className="bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
          <AccordionTrigger className="px-6 py-5 hover:no-underline group">
            <div className="flex items-center gap-4 flex-1 text-left">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 group-data-[state=open]:bg-primary/20">
                <Icon className="w-6 h-6 text-primary transition-transform duration-300 group-data-[state=open]:rotate-12" />
              </div>

              {/* Question */}
              <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {faq.question}
              </h3>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6 pb-6 pt-0">
            <div className="pl-16 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 to-transparent rounded-full" />
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {faq.answer}
              </p>
            </div>
          </AccordionContent>
        </Card>
      </AccordionItem>
    </motion.div>
  );
}
