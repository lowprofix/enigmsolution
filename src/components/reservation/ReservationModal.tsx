"use client";

import { useState, useEffect } from "react";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Calendar as CalendarIcon,
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { pricingPlans, consultingService } from "../../data/pricing";
import { featuredServices } from "../../data/services";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Step = "service" | "plan" | "details" | "confirmation";

export interface ReservationData {
  service: string;
  plan: string;
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
}

export const ReservationModal = ({
  isOpen,
  onClose,
  initialService,
}: ReservationModalProps) => {
  const [step, setStep] = useState<Step>("service");
  const [data, setData] = useState<ReservationData>({
    service: initialService || "",
    plan: "",
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
    if (initialService) {
      setData((prev) => ({ ...prev, service: initialService }));
      setStep("plan");
    }
  }, [initialService]);

  useEffect(() => {
    if (selectedDate) {
      setData((prev) => ({
        ...prev,
        date: selectedDate.toISOString().split("T")[0],
      }));
    }
  }, [selectedDate]);

  const handleServiceSelect = (service: string) => {
    setData((prev) => ({ ...prev, service }));
    setStep("plan");
  };

  const handlePlanSelect = (plan: string) => {
    setData((prev) => ({ ...prev, plan }));
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
    if (step === "plan") setStep("service");
    else if (step === "details") setStep("plan");
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center space-x-2 mb-4">
        {["service", "plan", "details", "confirmation"].map((s, index) => (
          <div key={s} className="flex items-center">
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === s
                  ? "bg-primary text-primary-foreground"
                  : step === "confirmation" && s !== "confirmation"
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
                  : s === "confirmation"
                  ? "bg-muted text-muted-foreground"
                  : index <
                    ["service", "plan", "details", "confirmation"].indexOf(step)
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
            {index < 3 && (
              <div
                className={`h-1 w-6 ${
                  index < ["service", "plan", "details"].indexOf(step) ||
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

  const getStepTitle = () => {
    switch (step) {
      case "service":
        return "Quel service vous intéresse ?";
      case "plan":
        return data.service === consultingService.name
          ? "Consultation personnalisée"
          : `Choisissez votre formule pour ${data.service}`;
      case "details":
        return "Vos informations de contact";
      case "confirmation":
        return "Demande envoyée avec succès !";
      default:
        return "";
    }
  };

  const renderServiceStep = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredServices.map((service) => (
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
                {service.description}
              </p>
            </div>
          </button>
        ))}
        <button
          onClick={() => handleServiceSelect(consultingService.name)}
          className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all flex items-start text-left group"
        >
          <div className="bg-primary/10 p-2 rounded-full mr-3 group-hover:bg-primary/20 transition-colors">
            <ArrowRight className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">{consultingService.name}</h4>
            <p className="text-sm text-muted-foreground mt-1">
              {consultingService.description}
            </p>
          </div>
        </button>
      </div>
    );
  };

  const renderPlanStep = () => {
    if (data.service === consultingService.name) {
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
            onClick={() => handlePlanSelect(consultingService.id)}
            className="w-full mt-6 bg-primary text-primary-foreground py-2 rounded-md"
          >
            Continuer
          </button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {pricingPlans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => handlePlanSelect(plan.id)}
            className={`p-4 bg-card border rounded-lg text-left hover:shadow-md transition-all ${
              plan.popular
                ? "border-primary ring-1 ring-primary"
                : "border-border hover:border-primary"
            }`}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{plan.name}</h4>
              {plan.popular && (
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  Recommandé
                </span>
              )}
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground text-sm">
                /{plan.frequency}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {plan.description}
            </p>
          </button>
        ))}
      </div>
    );
  };

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

  const renderConfirmationStep = () => {
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
              <span className="text-muted-foreground">Service :</span>{" "}
              {data.service}
            </li>
            <li>
              <span className="text-muted-foreground">Formule :</span>{" "}
              {data.plan === "consulting"
                ? "Consultation"
                : pricingPlans.find((p) => p.id === data.plan)?.name || ""}
            </li>
            <li>
              <span className="text-muted-foreground">Nom :</span> {data.name}
            </li>
            <li>
              <span className="text-muted-foreground">Date souhaitée :</span>{" "}
              {data.date
                ? format(new Date(data.date), "d MMMM yyyy", { locale: fr })
                : "Non spécifiée"}
            </li>
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

  const renderCurrentStep = () => {
    switch (step) {
      case "service":
        return renderServiceStep();
      case "plan":
        return renderPlanStep();
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
