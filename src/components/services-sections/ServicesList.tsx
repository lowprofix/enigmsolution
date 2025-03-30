"use client";

import { allServices, featuredServices, Service } from "@/data/services";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const ServicesList = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {service.icon && (
                    <service.icon className="w-24 h-24 text-primary/40 group-hover:text-primary/60 transition-colors" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <service.icon className="w-5 h-5 text-primary" />
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 hover:bg-primary/5 p-0 h-auto font-medium"
                    onClick={() => setSelectedService(service)}
                  >
                    En savoir plus
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={!!selectedService}
        onOpenChange={() => setSelectedService(null)}
      >
        <DialogContent className="sm:max-w-[600px]">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-2xl">
                  <selectedService.icon className="w-6 h-6 text-primary" />
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    Caractéristiques du service
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.category === "featured" && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>Service premium avec assistance dédiée</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>Disponibilité 7j/7</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>Suivi personnalisé de votre dossier</span>
                        </li>
                      </>
                    )}
                    {selectedService.category === "particular" && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>Service sur mesure pour particuliers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>Flexibilité des prestations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>Tarification transparente</span>
                        </li>
                      </>
                    )}
                    {selectedService.category === "professional" && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>Solutions adaptées aux professionnels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>Gestion de volume importante</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>Reporting détaillé</span>
                        </li>
                      </>
                    )}
                    {(selectedService.category === "creation-annonce" ||
                      selectedService.category === "optimisation-visuelle" ||
                      selectedService.category === "tarification-strategie" ||
                      selectedService.category === "marketing-visibilite" ||
                      selectedService.category === "communication-client" ||
                      selectedService.category === "branding-differenciation" ||
                      selectedService.category === "reporting-suivi") &&
                      selectedService.features && (
                        <>
                          {selectedService.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </>
                      )}
                  </ul>
                </div>

                {selectedService.benefits && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Bénéfices</h4>
                    <ul className="space-y-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedService.process && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Notre processus
                    </h4>
                    <ol className="space-y-3 list-decimal pl-4">
                      {selectedService.process.map((step, index) => (
                        <li key={index}>
                          <span className="font-medium">{step.step}</span>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {!selectedService.process &&
                  ![
                    "creation-annonce",
                    "optimisation-visuelle",
                    "tarification-strategie",
                    "marketing-visibilite",
                    "communication-client",
                    "branding-differenciation",
                    "reporting-suivi",
                  ].includes(selectedService.category || "") && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        Comment ça marche ?
                      </h4>
                      <ol className="space-y-3 list-decimal pl-4">
                        <li>Contactez-nous via le formulaire dédié</li>
                        <li>Un expert vous rappelle sous 24h</li>
                        <li>Nous établissons un devis personnalisé</li>
                        <li>Début de la prestation selon vos besoins</li>
                      </ol>
                    </div>
                  )}

                {selectedService.relatedServices && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Services complémentaires
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.relatedServices.map((service, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex justify-end gap-3 mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedService(null)}
                  >
                    Fermer
                  </Button>
                  <Button asChild>
                    <a href={selectedService.href}>Réserver maintenant</a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
