import { Package, PackageCheck, PackagePlus, Star, Award } from "lucide-react";
import React from "react";

/**
 * Interface représentant un pack de services prédéfini pour la commercialisation
 * de biens en location saisonnière, basée sur data_enrichment.md
 */
export interface ServicePackage {
  id: string; // Identifiant unique du pack
  name: string; // Nom du pack
  price: number; // Prix en euros
  currency: string; // Devise (EUR par défaut)
  description: string; // Description complète
  shortDescription: string; // Description courte (pour les aperçus)
  features: string[]; // Caractéristiques principales
  includedServices: string[]; // Services inclus dans le pack
  targetAudience: string; // Public cible
  benefits: string[]; // Bénéfices principaux
  savings?: string; // Économies par rapport à l'achat à l'unité
  popular?: boolean; // Marqueur pour le pack le plus populaire
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Icône représentative
}

// Implémentation des packs de services basée sur data_enrichment.md
export const servicePackages: ServicePackage[] = [
  {
    id: "starter",
    name: "Pack Starter",
    price: 190,
    currency: "EUR",
    description:
      "Une solution économique et efficace pour débuter dans la location saisonnière avec les éléments essentiels. Ce pack vous permet de créer rapidement une annonce professionnelle et d'établir les bases d'une communication efficace avec vos futurs voyageurs.",
    shortDescription:
      "L'essentiel pour démarrer votre activité de location saisonnière",
    features: [
      "Création d'une annonce attractive",
      "Paramétrage complet de votre compte",
      "Analyse concurrentielle",
      "Mise en place de la communication client",
    ],
    includedServices: [
      "Rédaction optimisée de l'annonce",
      "Mise en ligne + paramétrage complet",
      "Analyse de la concurrence locale",
      "Mise en place des messages automatisés",
      "Création du livret d'accueil PDF",
    ],
    targetAudience:
      "Propriétaires débutants souhaitant se lancer dans la location saisonnière avec un budget limité",
    benefits: [
      "Économie de temps dans la mise en place de votre annonce",
      "Professionnalisme immédiat de votre offre",
      "Meilleur positionnement par rapport à la concurrence",
      "Communication fluide avec vos premiers voyageurs",
    ],
    savings: "Économisez 15% par rapport à l'achat des services à l'unité",
    icon: Package,
  },
  {
    id: "pro",
    name: "Pack Pro",
    price: 390,
    currency: "EUR",
    description:
      "Une solution complète pour les propriétaires qui souhaitent optimiser leur présence en ligne et maximiser leurs revenus. Ce pack inclut tout le nécessaire pour créer une annonce parfaitement optimisée et commencer à développer votre stratégie marketing.",
    shortDescription:
      "Optimisez votre présence en ligne et boostez vos revenus",
    features: [
      "Annonce parfaitement optimisée",
      "Visibilité améliorée",
      "Stratégie tarifaire personnalisée",
      "Accompagnement marketing",
    ],
    includedServices: [
      "Tout ce qui est inclus dans le Pack Starter",
      "Retouches photos professionnelles (jusqu'à 10 photos)",
      "Optimisation SEO de l'annonce",
      "Création de calendrier tarifaire saisonnier",
      "Mise en place d'un compte Google Business",
      "Diffusion sur une plateforme supplémentaire",
    ],
    targetAudience:
      "Propriétaires souhaitant professionnaliser leur approche et maximiser leur taux d'occupation",
    benefits: [
      "Meilleure visibilité sur les plateformes",
      "Tarification optimisée pour maximiser les revenus",
      "Présence renforcée en ligne",
      "Diversification des canaux de réservation",
    ],
    savings: "Économisez 20% par rapport à l'achat des services à l'unité",
    icon: PackageCheck,
  },
  {
    id: "premium",
    name: "Pack Premium",
    price: 790,
    currency: "EUR",
    description:
      "Une solution haut de gamme pour les propriétaires exigeants qui souhaitent se démarquer de la concurrence. Ce pack comprend tous les éléments nécessaires pour créer une véritable identité à votre bien et assurer un suivi de qualité.",
    shortDescription: "Démarquez-vous avec une approche haut de gamme",
    features: [
      "Identité de marque complète",
      "Présence multi-plateformes",
      "Stratégie marketing avancée",
      "Suivi des performances",
    ],
    includedServices: [
      "Tout ce qui est inclus dans le Pack Pro",
      "Shooting photo professionnel (demi-journée)",
      "Création d'un nom et d'un logo pour votre bien",
      "Diffusion sur trois plateformes au total",
      "Création de contenu pour réseaux sociaux (5 posts)",
      "Rapport de performance mensuel pendant 3 mois",
      "Définition de la promesse marketing et du positionnement",
      "Fiche PDF professionnelle pour diffusion externe",
    ],
    targetAudience:
      "Propriétaires de biens haut de gamme cherchant à créer une expérience unique et mémorable",
    benefits: [
      "Différenciation forte par rapport à la concurrence",
      "Création d'une véritable identité pour votre bien",
      "Potentiel de tarification plus élevé",
      "Suivi régulier pour optimiser les performances",
    ],
    savings: "Économisez 25% par rapport à l'achat des services à l'unité",
    popular: true,
    icon: Star,
  },
  {
    id: "luxe",
    name: "Pack Luxe",
    price: 1490,
    currency: "EUR",
    description:
      "Une solution tout-en-un pour les propriétaires de biens d'exception qui souhaitent offrir une expérience inoubliable à leurs voyageurs. Ce pack comprend tous les éléments pour positionner votre bien comme une référence sur le marché haut de gamme.",
    shortDescription: "L'excellence pour les biens d'exception",
    features: [
      "Positionnement luxe sur le marché",
      "Médias de qualité exceptionnelle",
      "Marketing multi-canal avancé",
      "Suivi personnalisé continu",
    ],
    includedServices: [
      "Tout ce qui est inclus dans le Pack Premium",
      "Shooting photo professionnel (journée complète)",
      "Création de vidéo par drone",
      "Création de plan 2D de votre bien",
      "Diffusion sur cinq plateformes au total",
      "Traduction de l'annonce en 3 langues",
      "Mise en place de pricing dynamique",
      "Rapport de performance mensuel pendant 6 mois",
      "Campagne emailing pour fidélisation",
      "Contenu réseaux sociaux mensuel pendant 3 mois",
      "Livret d'accueil digital interactif",
    ],
    targetAudience:
      "Propriétaires de biens de luxe visant une clientèle exigeante et internationale",
    benefits: [
      "Positionnement dans le segment luxe du marché",
      "Attraction d'une clientèle à fort pouvoir d'achat",
      "Maximisation du revenu par nuitée",
      "Visibilité internationale maximale",
      "Fidélisation accrue des clients",
    ],
    savings: "Économisez 30% par rapport à l'achat des services à l'unité",
    icon: Award,
  },
  {
    id: "signature",
    name: "Pack Signature",
    price: 3000,
    currency: "EUR",
    description:
      "Une solution complète et sur-mesure pour les investisseurs et conciergeries premium qui souhaitent développer une véritable stratégie de lancement et un écosystème marketing à long terme pour leur activité de location saisonnière.",
    shortDescription:
      "Stratégie complète pour investisseurs et conciergeries premium",
    features: [
      "Stratégie de lancement complète",
      "Écosystème marketing long terme",
      "Médias professionnels haut de gamme",
      "Accompagnement personnalisé",
    ],
    includedServices: [
      "Stratégie & Branding complet (audit, étude de marché, identité de marque, mini-site)",
      "Médias professionnels haut de gamme (shooting photo, vidéo drone, plan 2D)",
      "Mise en ligne & conversion (optimisation des annonces, channel manager, livret d'accueil interactif)",
      "Visibilité & communication (Google Business, SEO local, contenu réseaux sociaux, campagne Meta Ads)",
      "Accompagnement personnalisé (onboarding, sessions stratégiques, suivi de performance)",
      "Formation à l'autonomie (outils, techniques, ressources)",
    ],
    targetAudience:
      "Investisseurs et conciergeries premium souhaitant une stratégie de lancement complète, un écosystème marketing à long terme et un positionnement haut de gamme",
    benefits: [
      "Stratégie de lancement complète pour un démarrage optimal",
      "Écosystème marketing cohérent et pérenne",
      "Positionnement haut de gamme voire 'hôtelier'",
      "Outils pour l'autonomie future",
      "Accompagnement par des experts du secteur",
      "ROI accéléré sur votre investissement",
    ],
    icon: PackagePlus,
  },
];
