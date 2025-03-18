"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { featuredServices } from "../../data/services";
import { ReservationModal } from "../reservation";

export const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Réinitialiser le service sélectionné après un petit délai pour éviter un clignotement
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              Nos Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche complète pour valoriser, gérer et optimiser votre
              patrimoine immobilier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 sm:p-6">
                  <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => openModal(service.title)}
                      className="text-primary bg-primary/10 px-3 py-1 rounded-md text-sm font-medium flex items-center hover:bg-primary/20 transition-colors"
                    >
                      Réserver
                    </button>
                    <Link
                      href={service.href}
                      className="text-primary text-sm font-medium flex items-center group"
                    >
                      En savoir plus
                      <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReservationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        initialService={selectedService || undefined}
      />
    </>
  );
};
