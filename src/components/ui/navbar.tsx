"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme/theme-toggle";
import { MobileMenu } from "@/components/ui/mobile-menu";

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
    { href: "#regions", label: "Régions" },
    { href: "#testimonials", label: "Témoignages" },
    { href: "#pricing", label: "Tarifs" },
    { href: "#appointment", label: "Rendez-vous" },
    { href: "#cta", label: "Contact" },
  ],
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Navigation handler - version simplifiée
  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    // Mise à jour immédiate de la section active
    if (href === "#") {
      setActiveSection("");
    } else {
      setActiveSection(href.substring(1));
    }

    // Navigation fluide
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      const navbarHeight = 64;
      const sectionTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  // Observer pour le défilement manuel uniquement
  useEffect(() => {
    // Écouteur de défilement simplifié pour détecter uniquement la position d'accueil
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <a
            href="#"
            className="font-bold text-xl text-foreground"
            onClick={(e) => handleNavigation(e, "#")}
          >
            {typeof logo === "string" ? logo : logo}
          </a>

          {/* Desktop navigation - centered */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors",
                  activeSection === link.href.substring(1) ||
                    (link.href === "#" && activeSection === "")
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
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
        activeSection={activeSection}
        onNavigate={handleNavigation}
      />
    </>
  );
}
