"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { pricingPlans } from "../../data/pricing";
import { ReservationModal } from "../reservation";

export const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const openModal = (planId: string) => {
    setSelectedPlan(planId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Réinitialiser le plan sélectionné après un petit délai pour éviter un clignotement
    setTimeout(() => setSelectedPlan(null), 300);
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              Nos Forfaits
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choisissez le forfait qui correspond le mieux à vos besoins et à
              votre budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`
                bg-card rounded-lg overflow-hidden border border-border 
                ${
                  plan.popular
                    ? "ring-2 ring-primary shadow-lg scale-105 md:scale-110 z-10"
                    : "shadow-md"
                }
                transition-all duration-300 hover:shadow-lg flex flex-col
              `}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-xs sm:text-sm font-medium">
                    Recommandé
                  </div>
                )}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      {plan.price}
                    </span>
                    {plan.frequency && (
                      <span className="text-muted-foreground text-sm">
                        /{plan.frequency}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 text-primary mr-2">
                          <Check className="h-5 w-5" />
                        </div>
                        <span className="text-sm text-card-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => openModal(plan.id)}
                      className={`
                      w-full py-2 px-4 rounded-md text-center font-medium text-sm sm:text-base
                      ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }
                      transition-colors duration-200
                    `}
                    >
                      Réserver maintenant
                    </button>
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
        initialService={
          selectedPlan
            ? pricingPlans.find((p) => p.id === selectedPlan)?.name
            : undefined
        }
      />
    </>
  );
};
