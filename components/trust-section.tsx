"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/container";

type TrustStat = {
  icon: LucideIcon;
  value: string;
  label: string;
  microcopy: string;
  desktopSpan: string;
  desktopOffset?: string;
};

const trustStats: TrustStat[] = [
  {
    icon: Award,
    value: "5+",
    label: "O’smirlar ta’limidagi 5+ yillik tajriba",
    microcopy: "O’smirlar ta’limidagi sinovdan o‘tgan yondashuv.",
    desktopSpan: "lg:col-span-3 lg:min-h-[214px]",
    // desktopOffset: "lg:-translate-y-1",
  },
  {
    icon: Users,
    value: "10 000+",
    label: "10 000+ o’quvchilar",
    microcopy: "Real natija ko‘rsatgan katta o‘quvchi bazasi.",
    desktopSpan: "lg:col-span-3 lg:min-h-[240px]",
    // desktopOffset: "lg:translate-y-4",
  },
  {
    icon: HeartHandshake,
    value: "20 000+",
    label: "20 000+ ota-onalar",
    microcopy: "Ishonchni tanlagan oilalar hamjamiyati.",
    desktopSpan: "lg:col-span-4 lg:min-h-[228px]",
  },
  {
    icon: MapPin,
    value: "7",
    label: "7 filial",
    microcopy: "Yagona sifat standarti bilan ishlaydigan filiallar.",
    desktopSpan: "lg:col-span-2 lg:min-h-[198px]",
    // desktopOffset: "lg:translate-y-5",
  },
];

export function TrustSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ishonch"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background py-16 md:py-24 lg:py-28"
      aria-labelledby="trust-title"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 -translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container className="relative z-10">
        <header
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2
            id="trust-title"
            className="text-3xl font-extrabold text-foreground md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Bizga ishonishadi
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            NAVI - ota-onalar uchun aniq natija va mas’uliyatga qurilgan
            ishonchli ta’lim tizimi.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:mt-12 lg:grid-cols-[1.02fr_1.38fr] lg:gap-7">
          <article
            aria-label="Asoschi va shaxsiy mas’uliyat"
            className={`group relative h-full overflow-hidden rounded-[32px] border border-primary/30 bg-gradient-to-br from-primary/14 via-card to-cyan-500/12 p-6 shadow-[0_18px_46px_rgba(0,67,255,0.14)] transition-all duration-700 lg:p-8 lg:hover:-translate-y-1 lg:hover:shadow-[0_24px_60px_rgba(0,67,255,0.2)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "110ms" }}
          >
            <div className="pointer-events-none absolute -left-8 -top-8 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-8 h-44 w-44 rounded-full bg-cyan-500/16 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="mx-auto flex h-[250px] w-full max-w-[320px] items-center justify-center sm:h-[280px] lg:h-auto lg:min-h-[320px] lg:flex-1">
                <span
                  aria-hidden="true"
                  className="absolute h-44 w-44 rounded-full bg-primary/20 blur-3xl animate-pulse"
                />
                <span
                  aria-hidden="true"
                  className="absolute h-60 w-60 rounded-[42%_58%_63%_37%/40%_38%_62%_60%] bg-gradient-to-br from-primary/25 via-cyan-400/20 to-primary/10"
                />
                <div className="relative h-52 w-52 overflow-hidden rounded-[38%_62%_61%_39%/42%_40%_60%_58%] border border-primary/25 shadow-[0_20px_40px_rgba(15,23,42,0.18)] sm:h-56 sm:w-56">
                  <img
                    src="/atham.JPG"
                    alt="Asoschi rasmi"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-3 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Asoschi
                </span>
                <h3 className="mt-3 text-2xl font-bold text-foreground">
                  Shaxsiy mas’uliyat
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Har bir o‘quvchining o‘sishi uchun javobgarlik shaxsan nazorat
                  qilinadi.
                </p>
              </div>
            </div>
          </article>

          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden lg:block"
            >
              <div className="absolute left-[6%] top-[21%] h-px w-[88%] bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
              <div className="absolute left-[16%] top-[38%] h-px w-[70%] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
              <div className="absolute left-[49%] top-[8%] h-[80%] w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
            </div>

            <ul
              className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
              aria-label="Ishonch statistikasi"
            >
              {trustStats.map((item, index) => (
                <li
                  key={item.label}
                  className={`group relative overflow-hidden rounded-3xl border border-border/80 bg-card/85 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:border-primary/35 hover:shadow-[0_20px_42px_rgba(15,23,42,0.15)] md:p-6 ${item.desktopSpan} ${
                    item.desktopOffset ?? ""
                  } ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${220 + index * 85}ms` }}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="relative mt-5 text-4xl font-extrabold leading-none tracking-tight text-foreground">
                    {item.value}
                  </p>
                  <h3 className="relative mt-3 text-base font-semibold text-foreground md:text-lg">
                    {item.label}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.microcopy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground md:text-sm">
          Bu raqamlar jamoamizning 5+ yillik tajribasi asosida.
        </p>
      </Container>
    </section>
  );
}
