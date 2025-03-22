"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "../../src/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md w-10 h-10 bg-transparent hover:bg-muted transition-colors relative",
        className
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Changer de thème"
      {...props}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Changer de thème</span>
    </button>
  );
}
