"use client";

import { useState, useEffect } from "react";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Calendar as CalendarIcon,
  Users,
  Briefcase,
  FileEdit,
  Camera,
  TrendingUp,
  Search,
  MessageCircle,
  Target,
  BarChart,
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  pricingPlans,
  consultingService,
  pricingCategories,
  PricingTier,
} from "../../data/pricing";
import { featuredServices, allServices } from "../../data/services";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// Étape de réservation étendue pour inclure la sélection de catégorie
type Step = "category" | "service" | "tier" | "details" | "confirmation";

// Interface de données de réservation mise à jour
export interface ReservationData {
  category: string; // ID de la catégorie
  service: string; // Titre du service
  tier: string; // ID du tier de prix
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialCategory?: string;
  initialTier?: string;
}

export const ReservationModal = ({
  isOpen,
  onClose,
  initialService,
  initialCategory,
  initialTier,
}: ReservationModalProps) => {
  // État initial selon les propriétés fournies
  const [step, setStep] = useState<Step>(
    initialService && initialCategory
      ? "tier"
      : initialService
      ? "service"
      : initialCategory
      ? "service"
      : "category"
  );

  const [data, setData] = useState<ReservationData>({
    category: initialCategory || "",
    service: initialService || "",
    tier: initialTier || "",
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    data.date ? new Date(data.date) : undefined
  );

  useEffect(() => {
    // Désactiver le défilement sur le body quand la modal est ouverte
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    // Initialisation intelligente basée sur les props
    if (initialService && !initialCategory) {
      // Trouver la catégorie correspondante au service
      const service = allServices.find((s) => s.title === initialService);
      if (service?.category) {
        // Mapper les anciennes catégories vers les nouvelles
        const categoryMap: Record<string, string> = {
          particular: "services-particuliers",
          professional: "services-professionnels",
          featured: "featured",
          "creation-annonce": "creation-annonce",
          "optimisation-visuelle": "optimisation-visuelle",
          "tarification-strategie": "tarification-strategie",
          "marketing-visibilite": "marketing-visibilite",
          "communication-client": "communication-client",
          "branding-differenciation": "branding-differenciation",
          "reporting-suivi": "reporting-suivi",
        };

        const mappedCategory =
          categoryMap[service.category as keyof typeof categoryMap] || "";
        setData((prev) => ({
          ...prev,
          service: initialService,
          category: mappedCategory,
        }));

        if (mappedCategory) {
          setStep("tier");
        } else {
          setStep("service");
        }
      }
    }
  }, [initialService, initialCategory]);

  useEffect(() => {
    if (selectedDate) {
      setData((prev) => ({
        ...prev,
        date: selectedDate.toISOString().split("T")[0],
      }));
    }
  }, [selectedDate]);

  // Handlers pour chaque étape du processus
  const handleCategorySelect = (category: string) => {
    setData((prev) => ({ ...prev, category, service: "" }));
    setStep("service");
  };

  const handleServiceSelect = (service: string) => {
    setData((prev) => ({ ...prev, service }));
    setStep("tier");
  };

  const handleTierSelect = (tier: string) => {
    setData((prev) => ({ ...prev, tier }));
    setStep("details");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler un délai d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Ici, vous pourriez envoyer les données à votre API
    setStep("confirmation");
  };

  const handleBack = () => {
    if (step === "service") setStep("category");
    else if (step === "tier") setStep("service");
    else if (step === "details") setStep("tier");
  };

  // Fonction améliorée pour afficher l'indicateur d'étapes
  const renderStepIndicator = () => {
    const steps: Step[] = [
      "category",
      "service",
      "tier",
      "details",
      "confirmation",
    ];

    return (
      <div className="flex items-center justify-center space-x-2 mb-4">
        {steps.map((s, index) => (
          <div key={s} className="flex items-center">
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === s
                  ? "bg-primary text-primary-foreground"
                  : step === "confirmation" && s !== "confirmation"
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
                  : s === "confirmation"
                  ? "bg-muted text-muted-foreground"
                  : steps.indexOf(step) > steps.indexOf(s)
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step === "confirmation" && s !== "confirmation" ? (
                <Check className="h-4 w-4" />
              ) : (
                index + 1
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-6 ${
                  steps.indexOf(step) > steps.indexOf(s) ||
                  step === "confirmation"
                    ? "bg-primary"
                    : "bg-muted"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Titres contextuels selon l'étape actuelle
  const getStepTitle = () => {
    switch (step) {
      case "category":
        return "Quelle catégorie de service vous intéresse ?";
      case "service":
        // Trouver le nom de la catégorie
        const categoryName =
          pricingCategories.find((cat) => cat.id === data.category)?.name ||
          data.category === "featured"
            ? "Services populaires"
            : data.category;
        return `Quel service de ${categoryName} vous intéresse ?`;
      case "tier":
        return `Choisissez votre formule pour ${data.service}`;
      case "details":
        return "Vos informations de contact";
      case "confirmation":
        return "Demande envoyée avec succès !";
      default:
        return "";
    }
  };

  // Rendu de l'étape de sélection de catégorie
  const renderCategoryStep = () => {
    const categoryIcons: Record<
      string,
      React.ComponentType<React.SVGProps<SVGSVGElement>>
    > = {
      "services-particuliers": Users,
      "services-professionnels": Briefcase,
      "creation-annonce": FileEdit,
      "optimisation-visuelle": Camera,
      "tarification-strategie": TrendingUp,
      "marketing-visibilite": Search,
      "communication-client": MessageCircle,
      "branding-differenciation": Target,
      "reporting-suivi": BarChart,
    };

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pricingCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all flex items-start text-left group"
          >
            <div className="bg-primary/10 p-2 rounded-full mr-3 group-hover:bg-primary/20 transition-colors">
              {categoryIcons[category.id] ? (
                <CategoryIcon
                  category={category.id}
                  className="h-5 w-5 text-primary"
                />
              ) : (
                <ArrowRight className="h-5 w-5 text-primary" />
              )}
            </div>
            <div>
              <h4 className="font-medium">{category.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">
                {category.description.substring(0, 100)}
                {category.description.length > 100 ? "..." : ""}
              </p>
            </div>
          </button>
        ))}
      </div>
    );
  };

  // Helper component for dynamic category icons
  const CategoryIcon = ({
    category,
    className,
  }: {
    category: string;
    className: string;
  }) => {
    switch (category) {
      case "services-particuliers":
        return <Users className={className} />;
      case "services-professionnels":
        return <Briefcase className={className} />;
      case "creation-annonce":
        return <FileEdit className={className} />;
      case "optimisation-visuelle":
        return <Camera className={className} />;
      case "tarification-strategie":
        return <TrendingUp className={className} />;
      case "marketing-visibilite":
        return <Search className={className} />;
      case "communication-client":
        return <MessageCircle className={className} />;
      case "branding-differenciation":
        return <Target className={className} />;
      case "reporting-suivi":
        return <BarChart className={className} />;
      default:
        return <ArrowRight className={className} />;
    }
  };

  // Rendu de l'étape de sélection de service
  const renderServiceStep = () => {
    // Filtrer les services pour la catégorie sélectionnée
    const categoryMapping: Record<string, string> = {
      "services-particuliers": "particular",
      "services-professionnels": "professional",
      "creation-annonce": "creation-annonce",
      "optimisation-visuelle": "optimisation-visuelle",
      "tarification-strategie": "tarification-strategie",
      "marketing-visibilite": "marketing-visibilite",
      "communication-client": "communication-client",
      "branding-differenciation": "branding-differenciation",
      "reporting-suivi": "reporting-suivi",
    };

    const categoryServices = allServices.filter(
      (service) =>
        service.category === data.category ||
        service.category === categoryMapping[data.category]
    );

    // Si pas de services spécifiques, utiliser les services vedettes
    const servicesToShow =
      categoryServices.length > 0 ? categoryServices : featuredServices;

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesToShow.map((service) => (
            <button
              key={service.title}
              onClick={() => handleServiceSelect(service.title)}
              className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all flex items-start text-left group"
            >
              <div className="bg-primary/10 p-2 rounded-full mr-3 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">{service.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {service.description.substring(0, 100)}
                  {service.description.length > 100 ? "..." : ""}
                </p>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={handleBack}
          className="mt-4 text-muted-foreground hover:text-foreground flex items-center justify-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux catégories
        </button>
      </div>
    );
  };

  // Rendu de l'étape de sélection de tier/formule
  const renderTierStep = () => {
    // Trouver la catégorie correspondante ou utiliser le service de consultation par défaut
    const category = pricingCategories.find((cat) => cat.id === data.category);

    if (data.service === consultingService.name || !category) {
      return (
        <div className="bg-card border border-border rounded-lg p-6 max-w-md mx-auto">
          <h4 className="text-lg font-bold">{consultingService.name}</h4>
          <div className="mt-2">
            <span className="text-2xl font-bold">
              {consultingService.price}
            </span>
            <span className="text-muted-foreground text-sm">
              {consultingService.frequency}
            </span>
          </div>
          <ul className="mt-4 space-y-2">
            {consultingService.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleTierSelect(consultingService.id)}
            className="w-full mt-6 bg-primary text-primary-foreground py-2 rounded-md"
          >
            Continuer
          </button>
          <button
            onClick={handleBack}
            className="w-full mt-3 text-muted-foreground hover:text-foreground flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux services
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <h4 className="text-center text-lg font-medium mb-4">
          Sélectionnez votre formule pour {data.service}
        </h4>
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          {category.tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => handleTierSelect(tier.id)}
              className={`p-4 bg-card border rounded-lg text-left hover:shadow-md transition-all ${
                tier.popular
                  ? "border-primary ring-1 ring-primary"
                  : "border-border hover:border-primary"
              }`}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{tier.name}</h4>
                {tier.popular && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    Recommandé
                  </span>
                )}
              </div>
              <div className="mt-2">
                <span className="text-2xl font-bold">{tier.price}€</span>
                <span className="text-muted-foreground text-sm">
                  {tier.billingPeriod === "monthly"
                    ? "/mois"
                    : tier.billingPeriod === "yearly"
                    ? "/an"
                    : ""}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {tier.description.substring(0, 100)}
                {tier.description.length > 100 ? "..." : ""}
              </p>

              {/* Afficher les fonctionnalités incluses */}
              <div className="mt-3">
                <h5 className="text-sm font-medium mb-1">Inclus :</h5>
                <ul className="space-y-1">
                  {tier.features.included.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mr-1.5 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {tier.features.included.length > 3 && (
                    <li className="text-sm text-muted-foreground">
                      + {tier.features.included.length - 3} autres avantages
                    </li>
                  )}
                </ul>
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={handleBack}
          className="mt-4 text-muted-foreground hover:text-foreground flex items-center justify-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux services
        </button>
      </div>
    );
  };

  // Le reste du formulaire de contact reste similaire
  const renderDetailsStep = () => {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={data.name}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={data.email}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={data.phone}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Date de rendez-vous souhaitée
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? (
                    format(selectedDate, "d MMMM yyyy", { locale: fr })
                  ) : (
                    <span>Sélectionnez une date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message (optionnel)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={data.message}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </button>
          <button
            type="submit"
            className="bg-primary text-primary-foreground py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
          >
            Envoyer ma demande
          </button>
        </div>
      </form>
    );
  };

  // Récapitulatif amélioré avec toutes les informations
  const renderConfirmationStep = () => {
    // Trouver les informations détaillées
    const category = pricingCategories.find((cat) => cat.id === data.category);
    const tier = category?.tiers.find((t) => t.id === data.tier);
    const service = allServices.find((s) => s.title === data.service);

    return (
      <div className="text-center space-y-4">
        <div className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto">
          <Check className="h-8 w-8" />
        </div>
        <p className="text-muted-foreground">
          Merci pour votre intérêt. Notre équipe vous contactera dans les plus
          brefs délais pour confirmer votre rendez-vous.
        </p>
        <div className="bg-card p-4 rounded-lg mt-6 text-left">
          <h4 className="font-medium">Récapitulatif de votre demande :</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <span className="text-muted-foreground">Catégorie :</span>{" "}
              {category?.name || data.category}
            </li>
            <li>
              <span className="text-muted-foreground">Service :</span>{" "}
              {data.service}
            </li>
            <li>
              <span className="text-muted-foreground">Formule :</span>{" "}
              {tier?.name ||
                (data.tier === "consulting"
                  ? "Consultation"
                  : pricingPlans.find((p) => p.id === data.tier)?.name || "")}
            </li>
            <li>
              <span className="text-muted-foreground">Prix :</span>{" "}
              {tier
                ? `${tier.price}€${
                    tier.billingPeriod === "monthly"
                      ? "/mois"
                      : tier.billingPeriod === "yearly"
                      ? "/an"
                      : ""
                  }`
                : data.tier === "consulting"
                ? consultingService.price + " " + consultingService.frequency
                : ""}
            </li>
            <li>
              <span className="text-muted-foreground">Nom :</span> {data.name}
            </li>
            <li>
              <span className="text-muted-foreground">Email :</span>{" "}
              {data.email}
            </li>
            <li>
              <span className="text-muted-foreground">Téléphone :</span>{" "}
              {data.phone}
            </li>
            <li>
              <span className="text-muted-foreground">Date souhaitée :</span>{" "}
              {data.date
                ? format(new Date(data.date), "d MMMM yyyy", { locale: fr })
                : "Non spécifiée"}
            </li>
            {data.message && (
              <li>
                <span className="text-muted-foreground">Message :</span>{" "}
                {data.message}
              </li>
            )}
          </ul>
        </div>
        <button
          onClick={onClose}
          className="bg-primary text-primary-foreground py-2 px-6 rounded-md hover:bg-primary/90 transition-colors mt-4"
        >
          Fermer
        </button>
      </div>
    );
  };

  // Sélection du rendu selon l'étape actuelle
  const renderCurrentStep = () => {
    switch (step) {
      case "category":
        return renderCategoryStep();
      case "service":
        return renderServiceStep();
      case "tier":
        return renderTierStep();
      case "details":
        return renderDetailsStep();
      case "confirmation":
        return renderConfirmationStep();
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-transparent"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className="relative bg-background rounded-xl shadow-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Fermer</span>
        </button>

        {/* En-tête fixe */}
        <div className="p-6 pt-4 pb-0 border-b">
          {renderStepIndicator()}
          <h3 className="text-xl font-bold text-center mt-2 mb-4">
            {getStepTitle()}
          </h3>
        </div>

        {/* Contenu défilant */}
        <div className="p-6 overflow-y-auto flex-grow">
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  );
};
