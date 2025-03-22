"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { TextLoop } from "../../../components/motion-primitives/text-loop";
import { featuredServices } from "../../data/services";

export const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_6305.JPG"
          alt="EnigmSolution - Vue aérienne de propriétés"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60" />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <div className="animate-fade-in">
          <span className="text-lg md:text-xl lg:text-2xl font-medium mb-2 block">
            Bienvenue chez EnigmSolution
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
          <span className="block mb-1 md:mb-2 animate-fade-in">
            Votre Partenaire Immobilier en
          </span>
          <TextLoop
            className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-7xl"
            interval={3.5}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {[
              ...featuredServices.map((service) => (
                <span key={service.title} className="font-bold">
                  <span className="sm:hidden">
                    {service.title === "Mise en valeur immobilière"
                      ? "Mise en valeur"
                      : service.title === "Photographie & Vidéo"
                      ? "Photo & Vidéo"
                      : service.title === "Optimisation BnB"
                      ? "Optimisation BnB"
                      : service.title}
                  </span>
                  <span className="hidden sm:inline">{service.title}</span>
                </span>
              )),
            ]}
          </TextLoop>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mb-6 md:mb-8 animate-fade-in-delay">
          De la gestion locative à la mise en valeur, nous prenons soin de votre
          bien comme s&apos;il était le nôtre.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-delay-long">
          <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-opacity-90 transition-all text-sm sm:text-base lg:text-lg">
            <Link href="/services">Découvrir nos services</Link>
          </button>
          <button className="bg-transparent border border-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-white/10 transition-all text-sm sm:text-base lg:text-lg flex items-center">
            <Link href="/appointments" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Prendre rendez-vous
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};
