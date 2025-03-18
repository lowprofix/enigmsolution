"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { regions } from "../../data/regions";

export const RegionsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Nos Régions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous sommes présents dans les plus belles régions de l'Arc Antillais
            et de l'Afrique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {regions.map((region, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg h-48 sm:h-56 md:h-64 group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-zinc-800">
                {/* Placeholder pour l'image de la région */}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                  {region.name}
                </h3>
                <Link
                  href={region.href}
                  className="flex items-center text-xs sm:text-sm"
                >
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Explorer la région
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
