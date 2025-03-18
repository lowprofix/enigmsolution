import { Home as HomeIcon, Camera, Star, Shield } from "lucide-react";
import React from "react";

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
}

export const featuredServices: Service[] = [
  {
    title: "Optimisation BnB",
    description:
      "Maximisez vos revenus locatifs avec notre expertise en optimisation Airbnb et plateformes similaires.",
    icon: HomeIcon,
    href: "/services/bnb-optimization",
  },
  {
    title: "Mise en valeur immobilière",
    description:
      "Rendez votre bien irrésistible avec nos services de home staging et de décoration professionnelle.",
    icon: Star,
    href: "/services/property-enhancement",
  },
  {
    title: "Photographie & Vidéo",
    description:
      "Captez l'attention avec des prises de vue professionnelles et des vidéos par drone de haute qualité.",
    icon: Camera,
    href: "/services/photography",
  },
  {
    title: "Conciergerie",
    description:
      "Offrez une expérience sans faille à vos locataires avec notre service de conciergerie premium.",
    icon: Shield,
    href: "/services/concierge",
  },
];
