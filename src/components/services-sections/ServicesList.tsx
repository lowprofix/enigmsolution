"use client";

import { allServices, Service } from "@/data/services";
import { pricingCategories } from "@/data/pricing";
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
import { ChevronRight, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReservationModal } from "@/components/reservation/ReservationModal";

// Mapping des anciennes catégories vers les nouvelles
const categoryMapping: Record<string, string> = {
  particular: "services-particuliers",
  professional: "services-professionnels",
  featured: "services-professionnels", // Par défaut dans professionnels
  "creation-annonce": "creation-annonce",
  "optimisation-visuelle": "optimisation-visuelle",
  "tarification-strategie": "tarification-strategie",
  "marketing-visibilite": "marketing-visibilite",
  "communication-client": "communication-client",
  "branding-differenciation": "branding-differenciation",
  "reporting-suivi": "reporting-suivi",
};

export const ServicesList = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Organiser les services par catégorie
  const servicesByCategory = allServices.reduce((acc, service) => {
    const mappedCategory = service.category
      ? categoryMapping[service.category] || service.category
      : "autres";

    if (!acc[mappedCategory]) {
      acc[mappedCategory] = [];
    }

    acc[mappedCategory].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  // Ouvrir le modal de réservation avec le service sélectionné
  const handleReserveClick = (service: Service) => {
    setSelectedService(service);
    setSelectedCategory(
      service.category
        ? categoryMapping[service.category] || service.category
        : null
    );
    setServiceModalOpen(true);
  };

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tous" className="w-full">
            <TabsList className="mb-8 flex justify-center flex-wrap">
              <TabsTrigger value="tous">Tous les services</TabsTrigger>
              {pricingCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Affichage de tous les services */}
            <TabsContent value="tous" className="space-y-16">
              {pricingCategories.map((category) => (
                <div key={category.id} className="space-y-8">
                  <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesByCategory[category.id]?.map((service, index) => (
                      <ServiceCard
                        key={service.title}
                        service={service}
                        index={index}
                        onDetailsClick={() => setSelectedService(service)}
                        onReserveClick={() => handleReserveClick(service)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {/* Affichage par catégorie */}
            {pricingCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {servicesByCategory[category.id]?.map((service, index) => (
                    <ServiceCard
                      key={service.title}
                      service={service}
                      index={index}
                      onDetailsClick={() => setSelectedService(service)}
                      onReserveClick={() => handleReserveClick(service)}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Modal de détail du service */}
      <Dialog
        open={!!selectedService && !serviceModalOpen}
        onOpenChange={(open) => !open && setSelectedService(null)}
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
                {selectedService.features && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Caractéristiques du service
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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

                {!selectedService.process && (
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
                  <Button
                    onClick={() => {
                      handleReserveClick(selectedService);
                      setSelectedService(null);
                    }}
                  >
                    Réserver maintenant
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de réservation */}
      <ReservationModal
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
        initialService={selectedService?.title}
        initialCategory={selectedCategory || undefined}
      />
    </>
  );
};

// Composant de carte de service réutilisable
interface ServiceCardProps {
  service: Service;
  index: number;
  onDetailsClick: () => void;
  onReserveClick: () => void;
}

const ServiceCard = ({
  service,
  index,
  onDetailsClick,
  onReserveClick,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col"
    >
      <div className="relative h-48 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        {service.icon && (
          <service.icon className="w-24 h-24 text-primary/40 group-hover:text-primary/60 transition-colors" />
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {service.description}
        </p>
        <div className="flex justify-between items-center mt-2">
          <Button
            variant="ghost"
            className="text-primary hover:text-primary/80 hover:bg-primary/5 p-0 h-auto font-medium"
            onClick={onDetailsClick}
          >
            En savoir plus
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
          <Button
            size="sm"
            onClick={onReserveClick}
            className="whitespace-nowrap"
          >
            <Plus className="w-4 h-4 mr-1" />
            Réserver
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
