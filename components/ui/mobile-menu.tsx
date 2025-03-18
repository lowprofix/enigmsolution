"use client";

import React from "react";
import { cn } from "../../src/lib/utils";
import { X } from "lucide-react";
import { ThemeToggle } from "../theme/theme-toggle";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, setIsOpen, links }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col h-full p-6 md:p-8 lg:p-12 mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <p className="font-bold text-xl text-foreground">EnigmSolution</p>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 hover:bg-muted transition-colors"
            aria-label="Fermer le menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-3">
              Changer de thème
            </p>
            <ThemeToggle className="h-12 w-12" />
          </div>
        </nav>
      </div>
    </div>
  );
}
