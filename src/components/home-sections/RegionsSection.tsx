"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { regions } from "@/data/regions";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

export const RegionsSection = () => {
  return (
    <section id="regions" className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Nos Régions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous sommes présents dans les plus belles régions des Antilles,
            d&apos;Asie en passant par l&apos;Afrique
          </p>
        </div>

        <InfiniteSlider
          speed={40}
          speedOnHover={0}
          direction="horizontal"
          className="mb-6"
        >
          {regions.map((region) => (
            <div
              key={region.name}
              className="relative overflow-hidden rounded-lg h-48 sm:h-56 md:h-64 w-[300px] sm:w-[350px] flex-shrink-0 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="absolute inset-0">
                <Image
                  src={region.imageUrl}
                  alt={`Région ${region.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                  {region.name}
                </h3>
                <Link
                  href={region.href}
                  className="flex items-center text-xs sm:text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Explorer la région
                </Link>
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};
