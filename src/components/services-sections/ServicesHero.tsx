"use client";

import Image from "next/image";

export const ServicesHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px]">
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_6305.JPG"
          alt="Services EnigmSolution"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Nos Services
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl">
          Des solutions complètes pour valoriser et gérer votre patrimoine
          immobilier
        </p>
      </div>
    </section>
  );
};
