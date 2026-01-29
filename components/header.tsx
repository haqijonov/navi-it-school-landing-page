"use client";

import { useState, useEffect } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#courses", label: "Kurslarimiz" },
    { href: "#why-navi", label: "Nega NAVI" },
    { href: "#teachers", label: "Ustozlarimiz" },
  ];

  const phoneNumber = "+998 90 166 61 13";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4 md:py-6"
        }`}
      >
        {/* Background with gradient and blur */}
        <div className={`absolute inset-0 transition-all duration-500 `} />

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />

        {/* Container */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div
            className={`flex items-center justify-between transition-all lg:border py-2 px-4 rounded-full border-primary  duration-500 ${
              isScrolled ? "max-w-7xl mx-auto" : ""
            }`}
          >
            {/* Logo */}
            <a
              href="#"
              className={`font-bold text-foreground transition-all duration-500 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg ${
                isScrolled ? "text-xl" : "text-2xl md:text-3xl"
              }`}
              aria-label="NAVI - Bosh sahifa"
            >
              {/* <span className="bg-gradient-to-r from-primary via-cyan-500 to-primary bg-clip-text text-transparent">
                NAVI
              </span> */}
              <img className="w-[120px]" src="/main-logo.png" alt="logo" />
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden  lg:flex items-center gap-8"
              aria-label="Asosiy navigatsiya"
            >
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

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
              <a href="#contact-2" aria-label="Bog'lanish">
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
        </div>
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
      className={`relative font-medium transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-2 py-1 ${
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
      {/* Animated underline */}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
      {/* Dot indicator */}
      <span
        className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary transition-all duration-300 ${
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
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
          <a href="#contact-2" onClick={onClose} className="mt-4">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 rounded-full font-semibold shadow-lg">
              Bog'laning
            </Button>
          </a>
        </nav>
      </div>
    </>
  );
}
