"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const ServicesHero = () => {
  const scrollToServices = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-[70vh] min-h-[500px]">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Des services sur mesure pour votre patrimoine immobilier
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mb-8">
            De la gestion locative à la mise en valeur immobilière, nous
            proposons des solutions complètes adaptées à vos besoins
            spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-all text-center sm:text-left"
            >
              Demander un devis gratuit
            </Link>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-md font-medium hover:bg-white/20 transition-all"
            >
              Découvrir nos services
              <ArrowDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center text-white"
          onClick={scrollToServices}
        >
          <span className="text-sm mb-2">Explorer</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};
