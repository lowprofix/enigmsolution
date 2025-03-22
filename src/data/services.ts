import {
  Home as HomeIcon,
  Camera,
  Star,
  Shield,
  Users,
  Building2,
  Briefcase,
  Sparkles,
  UtensilsCrossed,
  Bath,
  WashingMachine,
} from "lucide-react";
import React from "react";

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  category?: "featured" | "particular" | "professional";
}

export const featuredServices: Service[] = [
  {
    title: "Optimisation BnB",
    description:
      "Maximisez vos revenus locatifs avec notre expertise en optimisation Airbnb et plateformes similaires.",
    icon: HomeIcon,
    href: "/services/bnb-optimization",
    category: "featured",
  },
  {
    title: "Mise en valeur immobilière",
    description:
      "Rendez votre bien irrésistible avec nos services de home staging et de décoration professionnelle.",
    icon: Star,
    href: "/services/property-enhancement",
    category: "featured",
  },
  {
    title: "Photographie & Vidéo",
    description:
      "Captez l'attention avec des prises de vue professionnelles et des vidéos par drone de haute qualité.",
    icon: Camera,
    href: "/services/photography",
    category: "featured",
  },
  {
    title: "Conciergerie",
    description:
      "Offrez une expérience sans faille à vos locataires avec notre service de conciergerie premium.",
    icon: Shield,
    href: "/services/concierge",
    category: "featured",
  },
];

export const particularServices: Service[] = [
  {
    title: "Conciergerie incluse",
    description:
      "Service de conciergerie inclus pendant toute la durée de votre séjour.",
    icon: Shield,
    href: "/services/included-concierge",
    category: "particular",
  },
  {
    title: "Apéro dinatoire d'arrivée",
    description:
      "Accueil personnalisé avec un apéritif dînatoire préparé pour votre arrivée.",
    icon: UtensilsCrossed,
    href: "/services/welcome-dinner",
    category: "particular",
  },
  {
    title: "Ménage",
    description:
      "Service de ménage complet pour un séjour en toute tranquillité.",
    icon: Sparkles,
    href: "/services/cleaning-particular",
    category: "particular",
  },
  {
    title: "Blanchisserie",
    description: "Service de blanchisserie et repassage pendant votre séjour.",
    icon: WashingMachine,
    href: "/services/laundry-particular",
    category: "particular",
  },
  {
    title: "Services sur mesure",
    description:
      "Location de draps de plage, foutas, siège de plage, parasol, glacière et bien plus encore.",
    icon: Users,
    href: "/services/custom-services",
    category: "particular",
  },
];

export const professionalServices: Service[] = [
  {
    title: "Conciergerie au forfait",
    description:
      "Service de conciergerie professionnelle avec tarification forfaitaire.",
    icon: Briefcase,
    href: "/services/fixed-concierge",
    category: "professional",
  },
  {
    title: "Conciergerie au pourcentage",
    description:
      "Conciergerie avec rémunération basée sur un pourcentage des revenus locatifs.",
    icon: Building2,
    href: "/services/percentage-concierge",
    category: "professional",
  },
  {
    title: "Blanchisserie",
    description:
      "Service de blanchisserie professionnel pour vos biens locatifs.",
    icon: WashingMachine,
    href: "/services/laundry-professional",
    category: "professional",
  },
  {
    title: "Ménage et entretien",
    description:
      "Services de ménage et d'entretien réguliers pour vos propriétés locatives.",
    icon: Bath,
    href: "/services/cleaning-maintenance",
    category: "professional",
  },
];

export const allServices = [
  ...featuredServices,
  ...particularServices,
  ...professionalServices,
];
