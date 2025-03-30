import {
  PenTool,
  Megaphone,
  MessageSquare,
  Palette,
  BarChart,
} from "lucide-react";
import React from "react";

/**
 * Interface représentant une étape clé du processus de commercialisation en ligne
 * pour les biens en location saisonnière, basée sur data_enrichment.md
 */
export interface MarketingStep {
  id: string; // Identifiant unique de l'étape
  title: string; // Titre de l'étape
  description: string; // Description détaillée
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Icône représentative
  substeps: {
    // Sous-étapes détaillées
    title: string;
    description: string;
  }[];
  benefits: string[]; // Bénéfices de cette étape
  tools?: string[]; // Outils recommandés (optionnel)
}

// Les données des étapes clés du processus de commercialisation en ligne
export const marketingSteps: MarketingStep[] = [
  {
    id: "creation-annonces",
    title: "Création d'Annonces Optimisées",
    description:
      "Cette étape est considérée comme la première étape concrète vers la génération de réservations et de revenus. Une annonce optimisée combine des éléments visuels attrayants, des descriptions persuasives et une tarification stratégique pour maximiser l'attractivité de votre bien.",
    icon: PenTool,
    substeps: [
      {
        title: "Photos de qualité professionnelle",
        description:
          "Des images qui mettent en valeur les atouts de votre bien, avec une luminosité optimale, des angles judicieux et une mise en scène attractive.",
      },
      {
        title: "Description claire et séduisante",
        description:
          "Un texte adapté aux attentes des voyageurs, mettant en avant les points forts du logement et les avantages de la localisation.",
      },
      {
        title: "Tarification stratégique",
        description:
          "Des prix ajustés selon la saison, les événements locaux et la concurrence pour maximiser le taux d'occupation et le revenu.",
      },
      {
        title: "Calendrier bien géré",
        description:
          "Une disponibilité à jour reflétant vos disponibilités en temps réel pour éviter les réservations impossibles à honorer.",
      },
    ],
    benefits: [
      "Augmentation significative du taux de conversion des visites en réservations",
      "Meilleur positionnement dans les résultats de recherche des plateformes",
      "Possibilité de fixer des tarifs plus élevés grâce à une présentation premium",
      "Réduction du temps entre la mise en ligne et la première réservation",
    ],
    tools: [
      "Editeurs de photos professionnels",
      "Outils d'analyse de prix des concurrents",
      "Logiciels de gestion de calendrier synchronisé",
    ],
  },
  {
    id: "visibilite-marketing",
    title: "Visibilité et Marketing",
    description:
      "Au-delà de la création de l'annonce, il est essentiel de maximiser sa visibilité pour attirer davantage de voyageurs potentiels. Cette étape comprend différentes stratégies pour augmenter la présence en ligne et atteindre un public plus large.",
    icon: Megaphone,
    substeps: [
      {
        title: "Optimisation SEO de l'annonce",
        description:
          "Intégration de mots-clés pertinents et optimisation des titres et descriptions pour un meilleur référencement.",
      },
      {
        title: "Diffusion multi-plateformes",
        description:
          "Présence sur différentes plateformes (Airbnb, Booking, Abritel, Expedia, etc.) pour maximiser l'exposition.",
      },
      {
        title: "Création de contenu pour réseaux sociaux",
        description:
          "Production de photos, vidéos et textes attrayants pour promouvoir le bien sur Instagram, Facebook et autres réseaux sociaux.",
      },
      {
        title: "Campagnes emailing",
        description:
          "Communication régulière avec les anciens clients pour encourager les réservations répétées et les recommandations.",
      },
      {
        title: "Gestion d'un compte Google Business",
        description:
          "Création et maintenance d'une présence sur Google Maps avec photos, avis et informations à jour.",
      },
    ],
    benefits: [
      "Diversification des sources de réservation",
      "Réduction de la dépendance à une seule plateforme",
      "Augmentation de la visibilité auprès de clientèles internationales",
      "Construction progressive d'une audience fidèle",
      "Amélioration du positionnement dans les recherches locales",
    ],
    tools: [
      "Outils de gestion de présence sur les réseaux sociaux",
      "Logiciels d'automatisation d'emails",
      "Channel managers pour synchroniser les calendriers entre plateformes",
    ],
  },
  {
    id: "gestion-reservations",
    title: "Gestion des Réservations et Communication Client",
    description:
      "Une gestion professionnelle des réservations et de la communication avec les clients est cruciale pour obtenir de bonnes évaluations et fidéliser la clientèle. Cette étape assure une expérience fluide et positive pour les voyageurs.",
    icon: MessageSquare,
    substeps: [
      {
        title: "Mise en place de messages automatisés",
        description:
          "Séquences de messages pré-rédigés envoyés automatiquement à différentes étapes du parcours client (confirmation, pré-arrivée, check-in, etc.).",
      },
      {
        title: "Création d'un livret d'accueil digital",
        description:
          "Guide complet pour les voyageurs incluant les instructions d'arrivée, le fonctionnement des équipements, les recommandations locales, etc.",
      },
      {
        title: "Rédaction de réponses types",
        description:
          "Modèles de réponses pour les questions fréquentes permettant de répondre rapidement et professionnellement.",
      },
    ],
    benefits: [
      "Amélioration significative de la satisfaction client",
      "Réduction du temps consacré à la communication",
      "Augmentation du taux d'évaluations positives",
      "Diminution des problèmes et malentendus",
      "Professionnalisation de l'accueil et du suivi",
    ],
    tools: [
      "Plateformes de messagerie automatisée",
      "Outils de création de guides digitaux",
      "Applications de gestion de relation client",
    ],
  },
  {
    id: "branding-differenciation",
    title: "Branding et Différenciation",
    description:
      "Dans un marché de plus en plus concurrentiel, il est important de se démarquer en créant une identité unique pour votre bien. Cette étape permet de transformer une simple location en une véritable expérience mémorable pour les voyageurs.",
    icon: Palette,
    substeps: [
      {
        title: "Création d'un nom pour le logement",
        description:
          "Choix d'un nom distinctif et mémorable qui reflète l'identité et les caractéristiques uniques du bien.",
      },
      {
        title: "Création d'un logo",
        description:
          "Conception d'un élément visuel reconnaissable pour renforcer l'identité du lieu.",
      },
      {
        title: "Définition de la promesse marketing",
        description:
          "Élaboration d'un positionnement clair et d'une proposition de valeur unique qui différencie le bien de la concurrence.",
      },
      {
        title: "Création d'une fiche PDF professionnelle",
        description:
          "Conception d'un document marketing de qualité pour la diffusion externe et les partenariats potentiels.",
      },
    ],
    benefits: [
      "Différenciation claire par rapport à la concurrence",
      "Possibilité de pratiquer des tarifs plus élevés",
      "Création d'une expérience cohérente pour les voyageurs",
      "Facilitation du bouche-à-oreille et des recommandations",
      "Construction d'une réputation durable",
    ],
    tools: [
      "Outils de design graphique",
      "Plateformes de création de logo",
      "Modèles de fiches PDF professionnelles",
    ],
  },
  {
    id: "suivi-amelioration",
    title: "Suivi et Amélioration Continue",
    description:
      "Le succès à long terme d'une location saisonnière repose sur un suivi régulier des performances et une amélioration constante. Cette étape permet d'identifier les points forts à valoriser et les faiblesses à corriger.",
    icon: BarChart,
    substeps: [
      {
        title: "Rapport mensuel de performance",
        description:
          "Analyse détaillée des indicateurs clés (taux d'occupation, revenu, tarif moyen, etc.) avec comparaison mois par mois et année par année.",
      },
      {
        title: "Recommandations d'améliorations",
        description:
          "Suggestions concrètes basées sur les données et les retours clients pour optimiser l'annonce, l'accueil ou l'équipement.",
      },
      {
        title: "Suivi des avis",
        description:
          "Monitoring et analyse des commentaires laissés par les voyageurs pour identifier les points d'amélioration.",
      },
      {
        title: "Stratégie d'obtention de 5 étoiles",
        description:
          "Mise en place de processus spécifiques pour encourager et maximiser les évaluations excellentes.",
      },
    ],
    benefits: [
      "Optimisation continue du revenu locatif",
      "Identification rapide des problèmes récurrents",
      "Adaptation aux tendances et évolutions du marché",
      "Amélioration progressive de la qualité de service",
      "Prise de décisions basée sur des données concrètes",
    ],
    tools: [
      "Tableaux de bord analytiques",
      "Outils de suivi des avis et de e-réputation",
      "Logiciels de benchmarking concurrentiel",
    ],
  },
];
