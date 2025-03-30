"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import {
  pricingPlans,
  pricingCategories,
  PricingCategory,
  PricingTier,
} from "../../data/pricing";
import { ReservationModal } from "../reservation";

// Sous-composant pour afficher le sélecteur de catégories
const CategorySelector = ({
  categories,
  activeCategory,
  onCategoryChange,
}: {
  categories: PricingCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}) => {
  return (
    <div className="mb-8">
      {/* Version desktop : onglets */}
      <div className="hidden md:flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
              ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Version mobile : menu déroulant */}
      <div className="md:hidden">
        <select
          value={activeCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full p-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// Sous-composant pour afficher les listes de fonctionnalités
const FeaturesList = ({
  features,
  type,
}: {
  features: string[];
  type: "included" | "excluded";
}) => {
  return (
    <ul className="space-y-2 mb-4">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <div
            className={`flex-shrink-0 mr-2 ${
              type === "included" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {type === "included" ? (
              <Check className="h-5 w-5" />
            ) : (
              <X className="h-5 w-5" />
            )}
          </div>
          <span className="text-sm text-card-foreground">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

// Sous-composant pour afficher un tier individuel
const PricingTierCard = ({
  tier,
  onSelect,
}: {
  tier: PricingTier;
  onSelect: (tierId: string) => void;
}) => {
  return (
    <div
      className={`
        bg-card rounded-lg overflow-hidden border border-border 
        ${
          tier.popular
            ? "ring-2 ring-primary shadow-lg scale-105 md:scale-110 z-10"
            : "shadow-md"
        }
        transition-all duration-300 hover:shadow-lg flex flex-col
      `}
    >
      {tier.popular && (
        <div className="bg-primary text-primary-foreground text-center py-1 text-xs sm:text-sm font-medium">
          Recommandé
        </div>
      )}
      <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
          {tier.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
        <div className="mb-4">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {tier.price}€
          </span>
          <span className="text-muted-foreground text-sm">
            {tier.billingPeriod === "monthly"
              ? "/mois"
              : tier.billingPeriod === "yearly"
              ? "/an"
              : ""}
          </span>
        </div>

        <div className="mb-6 flex-grow">
          {tier.features.included && tier.features.included.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-sm mb-2">Inclus :</h4>
              <FeaturesList features={tier.features.included} type="included" />
            </div>
          )}

          {tier.features.excluded && tier.features.excluded.length > 0 && (
            <div>
              <h4 className="font-medium text-sm mb-2">Non inclus :</h4>
              <FeaturesList features={tier.features.excluded} type="excluded" />
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => onSelect(tier.id)}
            className={`
              w-full py-2 px-4 rounded-md text-center font-medium text-sm sm:text-base
              ${
                tier.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }
              transition-colors duration-200
            `}
          >
            {tier.cta.text}
          </button>
        </div>
      </div>
    </div>
  );
};

// Composant principal
export const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(
    pricingCategories[0]?.id || ""
  );

  // Trouver la catégorie active
  const currentCategory =
    pricingCategories.find((cat) => cat.id === activeCategory) ||
    pricingCategories[0];

  // Fonction pour gérer le changement de catégorie
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  // Fonction pour ouvrir la modal
  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Réinitialiser le tier sélectionné après un petit délai pour éviter un clignotement
    setTimeout(() => setSelectedTier(null), 300);
  };

  // Trouver le tier sélectionné pour la modal
  const selectedTierInfo = currentCategory?.tiers.find(
    (tier) => tier.id === selectedTier
  );

  return (
    <>
      <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              Nos Tarifs
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choisissez le forfait qui correspond le mieux à vos besoins et à
              votre budget
            </p>
          </div>

          {/* Sélecteur de catégories */}
          <CategorySelector
            categories={pricingCategories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Description de la catégorie active */}
          <div className="text-center mb-8">
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              {currentCategory?.description}
            </p>
          </div>

          {/* Affichage des tiers de la catégorie active */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {currentCategory?.tiers.map((tier) => (
              <PricingTierCard
                key={tier.id}
                tier={tier}
                onSelect={handleTierSelect}
              />
            ))}
          </div>

          {/* Affichage des anciens plans de prix pour compatibilité (si nécessaire) */}
          {activeCategory === "legacy" && (
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
                        onClick={() => handleTierSelect(plan.id)}
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
          )}
        </div>
      </section>

      <ReservationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        initialService={selectedTierInfo?.name || undefined}
      />
    </>
  );
};
