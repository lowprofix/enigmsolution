"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { ReservationModal } from "../reservation";
import { consultingService } from "../../data/pricing";

export const CtaSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section
        id="cta"
        className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">
            Prêt à valoriser votre bien immobilier?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant un appel conseil avec nos experts et
            découvrez comment nous pouvons vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="bg-white text-primary px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md font-bold hover:bg-opacity-90 transition-all text-sm sm:text-base md:text-lg flex items-center justify-center sm:justify-start"
            >
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Réserver un appel conseil
            </button>
            <Link
              href={consultingService.buttonLink}
              className="bg-transparent border border-white text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md font-bold hover:bg-white/10 transition-all text-sm sm:text-base md:text-lg inline-flex items-center justify-center"
            >
              Voir les disponibilités
            </Link>
          </div>
        </div>
      </section>

      <ReservationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
