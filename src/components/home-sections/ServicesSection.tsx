"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Check, Plus } from "lucide-react";
import {
  allServices,
  featuredServices,
  particularServices,
  professionalServices,
} from "../../data/services";
import { ReservationModal } from "../reservation";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [userType, setUserType] = useState<
    "particular" | "professional" | null
  >(null);
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<
    (typeof allServices)[0] | null
  >(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  const handleServiceSelect = (service: (typeof allServices)[0]) => {
    setSelectedServiceDetails(service);
  };

  const toggleServiceSelection = (serviceTitle: string) => {
    if (selectedServices.includes(serviceTitle)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceTitle));
    } else {
      setSelectedServices([...selectedServices, serviceTitle]);
    }
  };

  // Filtrer les services en fonction du type d'utilisateur sélectionné
  const filteredServices = userType
    ? userType === "particular"
      ? particularServices
      : professionalServices
    : [];

  return (
    <>
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              Nos Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos services adaptés à vos besoins
            </p>
          </div>

          {/* Sélection du type d'utilisateur */}
          {!userType ? (
            <div className="max-w-3xl mx-auto p-8 bg-card rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Vous êtes...
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <button
                  onClick={() => setUserType("particular")}
                  className="flex flex-col items-center p-6 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <ChevronRight className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-lg font-medium">Un particulier</span>
                  <span className="text-sm text-muted-foreground mt-2 text-center">
                    À la recherche de services pour votre séjour
                  </span>
                </button>
                <button
                  onClick={() => setUserType("professional")}
                  className="flex flex-col items-center p-6 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <ChevronRight className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-lg font-medium">Un professionnel</span>
                  <span className="text-sm text-muted-foreground mt-2 text-center">
                    À la recherche de services pour vos biens
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              {/* En-tête avec possibilité de revenir en arrière */}
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={() => {
                    setUserType(null);
                    setSelectedServiceDetails(null);
                    setSelectedServices([]);
                  }}
                  className="text-primary hover:underline flex items-center"
                >
                  <ChevronRight className="h-4 w-4 transform rotate-180 mr-1" />
                  Revenir à la sélection
                </button>
                <h3 className="text-xl font-semibold">
                  Services pour{" "}
                  {userType === "particular"
                    ? "particuliers"
                    : "professionnels"}
                </h3>
                <div className="w-24"></div> {/* Espace pour équilibrer */}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Colonne de gauche: liste des services (badges) */}
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-4">Explorez nos services</h4>
                  <div className="flex flex-wrap gap-2">
                    {filteredServices.map((service) => (
                      <Badge
                        key={service.title}
                        variant={
                          selectedServiceDetails?.title === service.title
                            ? "default"
                            : "outline"
                        }
                        className="cursor-pointer text-sm py-1"
                        onClick={() => handleServiceSelect(service)}
                      >
                        <service.icon className="h-3.5 w-3.5 mr-1" />
                        {service.title}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Colonne du milieu: détails du service sélectionné */}
                <div className="bg-card p-6 rounded-lg shadow-sm md:col-span-2">
                  {selectedServiceDetails ? (
                    <div className="animate-fade-in">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                            <selectedServiceDetails.icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold">
                            {selectedServiceDetails.title}
                          </h3>
                        </div>
                        <button
                          onClick={() =>
                            toggleServiceSelection(selectedServiceDetails.title)
                          }
                          className={cn(
                            "flex items-center text-sm font-medium px-3 py-1.5 rounded-md",
                            selectedServices.includes(
                              selectedServiceDetails.title
                            )
                              ? "bg-primary/20 text-primary"
                              : "bg-primary text-primary-foreground hover:bg-primary/90"
                          )}
                        >
                          {selectedServices.includes(
                            selectedServiceDetails.title
                          ) ? (
                            <>
                              <Check className="h-4 w-4 mr-1" /> Sélectionné
                            </>
                          ) : (
                            <>
                              <Plus className="h-4 w-4 mr-1" /> Ajouter
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {selectedServiceDetails.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        <button
                          onClick={() =>
                            openModal(selectedServiceDetails.title)
                          }
                          className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                          Réserver ce service
                        </button>
                        <Link
                          href={selectedServiceDetails.href}
                          className="text-primary bg-primary/10 px-4 py-2 rounded-md text-sm font-medium flex items-center hover:bg-primary/20 transition-colors"
                        >
                          En savoir plus
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-6">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <ChevronRight className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-medium mb-2">
                        Sélectionnez un service
                      </h4>
                      <p className="text-muted-foreground">
                        Cliquez sur un badge pour découvrir les détails du
                        service
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Section des services sélectionnés */}
              {selectedServices.length > 0 && (
                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h4 className="font-medium mb-4">
                    Services sélectionnés ({selectedServices.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedServices.map((serviceTitle) => {
                      const service = allServices.find(
                        (s) => s.title === serviceTitle
                      );
                      return service ? (
                        <Badge
                          key={service.title}
                          variant="secondary"
                          className="cursor-pointer text-sm py-1 pr-2"
                        >
                          <service.icon className="h-3.5 w-3.5 mr-1" />
                          {service.title}
                          <button
                            onClick={() =>
                              toggleServiceSelection(service.title)
                            }
                            className="ml-1 p-0.5 hover:bg-muted-foreground/20 rounded-full"
                          >
                            ×
                          </button>
                        </Badge>
                      ) : null;
                    })}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => openModal(selectedServices[0])}
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Demander un devis
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Services vedettes en bas de page */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-center mb-6">
              Services vedettes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-5">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="text-primary text-sm font-medium flex items-center group"
                    >
                      En savoir plus
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
