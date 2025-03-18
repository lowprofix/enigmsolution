"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "../../src/lib/utils";
import { ThemeToggle } from "../theme/theme-toggle";
import { MobileMenu } from "./mobile-menu";

interface NavbarProps {
  className?: string;
  logo?: React.ReactNode;
  links?: { href: string; label: string }[];
}

export function Navbar({
  className,
  logo = "EnigmSolution",
  links = [
    { href: "#", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#avantages", label: "Avantages" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#contact", label: "Contact" },
  ],
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          className
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 md:px-8 lg:px-12 mx-auto max-w-7xl">
          {/* Logo */}
          <a href="#" className="font-bold text-xl text-foreground">
            {typeof logo === "string" ? logo : logo}
          </a>

          {/* Desktop navigation - centered */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="flex md:hidden rounded-md p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu principal"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        links={links}
      />
    </>
  );
}
