"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#courses", label: "Kurslarimiz" },
    { href: "#platform", label: "Platforma" },
    { href: "#why-navi", label: "Nega NAVI" },
    { href: "#teachers", label: "Ustozlarimiz" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-foreground">
          NAVI
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <a href="#contact-1" className="hidden md:block">
          <Button className="bg-primary text-primary-foreground hover:bg-accent">
            Biz bilan bog‘laning
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu + Overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 min-h-screen lg:hidden bg-black/30"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Navigation */}
          <div className="fixed top-18 left-0 right-0 z-50 md:hidden bg-background border-b border-border">
            <nav
              className="container mx-auto px-4 py-4 flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact-1"
                className="bg-primary text-primary-foreground hover:bg-accent text-center py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Bizga qo‘shiling
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
