"use client";

import { useState, useEffect } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#courses", label: "Kurslarimiz" },
    { href: "#why-navi", label: "Nega NAVI" },
  ];

  const phoneNumber = "+998 90 128 09 90";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (isMenuOpen) {
      const handleScroll = () => setIsMenuOpen(false);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4 md:py-6"
        }`}
      >
        {/* Container */}
        <Container className="relative z-10">
          <div className="flex w-full max-w-full items-center justify-between rounded-full border border-white/40 bg-background/70 px-4 py-2 shadow-sm backdrop-blur-xl transition-all duration-500 dark:border-white/10">
            {/* Logo */}
            <a
              href="#"
              className="group rounded-2xl px-1 py-1 text-foreground transition-all duration-500 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="NAVI - Bosh sahifa"
            >
              <div className="flex  items-center">
                <img
                  className={`transition-all duration-500 ${
                    isScrolled
                      ? "w-[108px] md:w-[116px]"
                      : "w-[120px] md:w-[128px]"
                  }`}
                  src="/main-logo.png"
                  alt="NAVI logo"
                />
                <span
                  className={` inline-flex max-w-[190px] rounded-full  text-primary/90  transition-all duration-500 leading-tight font-semibold ${
                    isScrolled
                      ? "px-2 py-0.5 text-[8px] md:px-2.5 md:text-[14px]"
                      : "px-2.5 py-1 text-[9px] md:text-[14px]"
                  }`}
                >
                  IT va sun&apos;iy intellekt bo&apos;yicha mentorlik markazi
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            {/* <nav
              className="hidden lg:flex items-center gap-4"
              aria-label="Asosiy navigatsiya"
            >
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav> */}

            {/* Desktop Right Section: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Phone Number */}
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                aria-label={`Qo'ng'iroq qilish: ${phoneNumber}`}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{phoneNumber}</span>
              </a>

              {/* CTA Button */}
              <a href="#contact" aria-label="Bog'lanish">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Bog'laning
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-primary/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Menuni yopish" : "Menuni ochish"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
        phoneNumber={phoneNumber}
      />
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (section) {
        const rect = section.getBoundingClientRect();
        const scrollPosition = window.scrollY + 150; // Offset for header height
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        setIsActive(
          scrollPosition >= sectionTop && scrollPosition < sectionBottom,
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [href]);

  return (
    <a
      href={href}
      className={`relative font-medium transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full px-3 py-1 ${
        isActive
          ? "text-primary bg-primary/10"
          : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
      }`}
    >
      {children}
      {/* Minimal active pill indicator is handled by background; remove extra dots/lines for a calmer look */}
    </a>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ href: string; label: string }>;
  phoneNumber: string;
}

function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  phoneNumber,
}: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-background shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menu"
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="text-xl font-bold text-primary">NAVI</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Menuni yopish"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Content */}
        <nav
          className="flex flex-col p-6 gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-lg font-medium text-muted-foreground hover:text-primary py-3 px-4 rounded-xl hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {link.label}
            </a>
          ))}

          {/* Divider */}
          <div className="my-4 border-t border-border" />

          {/* Phone Number in Menu */}
          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            onClick={onClose}
            className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Telefon raqam</p>
              <p className="font-semibold text-foreground">{phoneNumber}</p>
            </div>
          </a>

          {/* CTA Button */}
          <a href="#contact" onClick={onClose} className="mt-4">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 rounded-full font-semibold shadow-lg">
              Bog'laning
            </Button>
          </a>
        </nav>
      </div>
    </>
  );
}
