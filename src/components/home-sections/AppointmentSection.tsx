"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { consultingService } from "../../data/pricing";
import { ReservationModal } from "../reservation";

export const AppointmentSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-5 sm:p-8 md:p-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6">
                  Réservez votre appel conseil
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-8">
                  Nos experts sont à votre disposition pour un appel
                  personnalisé afin d'optimiser la gestion et la rentabilité de
                  votre bien immobilier.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
                  {consultingService.features
                    .slice(0, 3)
                    .map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="bg-green-100 text-green-500 p-1 rounded-full mr-2 sm:mr-3">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={openModal}
                    className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-opacity-90 transition-all text-sm sm:text-base flex items-center justify-center"
                  >
                    <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    {consultingService.buttonText}
                  </button>
                  <Link
                    href={consultingService.buttonLink}
                    className="border border-primary text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-primary/5 transition-all text-sm sm:text-base text-center"
                  >
                    Voir les disponibilités
                  </Link>
                </div>
              </div>

              <div className="md:flex-1 bg-muted flex items-center justify-center p-5 sm:p-8">
                <div className="text-center">
                  <p className="font-bold text-xl sm:text-2xl mb-1 sm:mb-2">
                    Tarif
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
                    {consultingService.price}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    {consultingService.frequency}
                  </p>
                  <p className="text-xs sm:text-sm text-card-foreground">
                    {consultingService.features[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReservationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        initialService={consultingService.name}
      />
    </>
  );
};
