"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactSection } from "@/components/contact-section";

export function FloatingContactButton() {
  const [mounted, setMounted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Ensure component only renders on client side to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Try to find the first contact section
    const contactSection = document.querySelector(
      "#contact-1, #contact, [id^='contact']",
    );

    if (contactSection) {
      // Smooth scroll to the contact section
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback: open modal if no contact section found
      setIsDialogOpen(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label="Contact"
        className="group fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/95 text-primary-foreground shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-primary"
        style={{
          // Subtle glassmorphism effect with backdrop blur
          backdropFilter: "blur(8px) saturate(180%)",
          WebkitBackdropFilter: "blur(8px) saturate(180%)",
        }}
      >
        <MessageCircle
          className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-12 group-active:rotate-0"
          aria-hidden="true"
        />
      </button>

      {/* Fallback modal dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl">
              BEPUL konsultatsiya
            </DialogTitle>
            <DialogDescription>
              Telefon raqamingizni qoldiring — biz siz bilan tez orada
              bog'lanamiz
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <ContactSection id="contact-modal" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
