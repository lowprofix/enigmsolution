import {
  Lightbulb,
  Home,
  FileEdit,
  Globe,
  CalendarCheck,
  TrendingUp,
  FileText,
  CheckSquare,
  Calculator,
  Wrench,
} from "lucide-react";
import React from "react";

/**
 * Interface représentant une étape du parcours d'accompagnement pour les propriétaires
 * de biens en location saisonnière, basée sur data_enrichment.md
 */
export interface AccompanimentStep {
  id: string; // Identifiant unique de l'étape
  number: number; // Numéro de l'étape (1-6)
  title: string; // Titre de l'étape
  description: string; // Description détaillée
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Icône représentative
  details: string[]; // Points détaillés de l'étape
  tools?: {
    // Outils recommandés (optionnel)
    name: string;
    description: string;
    link?: string;
  }[];
  tips?: string[]; // Conseils pratiques (optionnel)
}

/**
 * Interface représentant un bonus du parcours d'accompagnement
 */
export interface AccompanimentBonus {
  id: string; // Identifiant unique du bonus
  name: string; // Nom du bonus
  description: string; // Description du bonus
  type: "template" | "checklist" | "calculator" | "tool"; // Type de bonus
}

// Implémentation des étapes du parcours d'accompagnement basée sur data_enrichment.md
export const accompanimentSteps: AccompanimentStep[] = [
  {
    id: "definir-projet",
    number: 1,
    title: "Définir son projet",
    description:
      "La première étape consiste à clarifier votre vision, identifier votre cible de voyageurs et définir vos objectifs de revenus. Cette fondation est essentielle pour orienter toutes vos décisions futures.",
    icon: Lightbulb,
    details: [
      "Définir le type de bien que vous souhaitez mettre en location",
      "Identifier votre clientèle cible (familles, couples, voyageurs d'affaires, etc.)",
      "Établir des objectifs clairs de revenus mensuels et annuels",
      "Comprendre les réglementations locales et les obligations fiscales",
      "Évaluer la saisonnalité de votre destination",
    ],
    tools: [
      {
        name: "Calculateur de revenus potentiels",
        description:
          "Outil permettant d'estimer vos revenus en fonction de votre localisation et type de bien",
        link: "/tools/revenue-calculator",
      },
      {
        name: "Guide des réglementations locales",
        description:
          "Ressource pour comprendre les règles spécifiques à votre zone géographique",
        link: "/resources/local-regulations",
      },
    ],
    tips: [
      "Commencez par analyser les biens similaires au vôtre dans votre zone pour comprendre le marché",
      "N'hésitez pas à définir une niche spécifique pour vous démarquer de la concurrence",
      "Prévoyez différents scénarios de revenus (optimiste, réaliste, pessimiste) pour mieux vous préparer",
    ],
  },
  {
    id: "preparer-logement",
    number: 2,
    title: "Préparer son logement",
    description:
      "La préparation de votre bien est une étape cruciale qui influencera directement la satisfaction de vos voyageurs et vos évaluations. Un espace accueillant, propre et fonctionnel est la base d'une location réussie.",
    icon: Home,
    details: [
      "Désencombrer et nettoyer en profondeur votre logement",
      "Équiper votre bien avec tout le nécessaire pour un séjour confortable",
      "Sécuriser le logement et prévoir les équipements de sécurité obligatoires",
      "Créer des espaces fonctionnels et esthétiques",
      "Préparer un espace de rangement pour vos effets personnels",
    ],
    tools: [
      {
        name: "Checklist d'équipement essentiel",
        description:
          "Liste exhaustive de tout ce dont vos voyageurs auront besoin pendant leur séjour",
        link: "/resources/essential-amenities",
      },
      {
        name: "Guide de décoration pour location",
        description:
          "Conseils pour rendre votre bien attrayant avec un budget limité",
        link: "/resources/decoration-guide",
      },
    ],
    tips: [
      "Investissez dans du linge de lit et des serviettes de qualité, c'est un détail que les voyageurs remarquent",
      "Prévoyez des équipements supplémentaires qui peuvent vous démarquer (machine à café, équipements de sport...)",
      "Pensez à l'aspect pratique autant qu'esthétique - les voyageurs apprécient la fonctionnalité",
    ],
  },
  {
    id: "creer-annonce",
    number: 3,
    title: "Créer une annonce irrésistible",
    description:
      "Votre annonce est votre vitrine en ligne, elle doit captiver l'attention et déclencher l'envie de réserver. Une annonce optimisée combine un titre accrocheur, des photos de qualité et une description engageante.",
    icon: FileEdit,
    details: [
      "Rédiger un titre accrocheur qui se démarque",
      "Prendre des photos professionnelles mettant en valeur chaque espace",
      "Écrire une description détaillée et séduisante",
      "Mettre en avant les atouts uniques de votre bien",
      "Lister avec précision les équipements et services disponibles",
    ],
    tools: [
      {
        name: "Générateur de titres d'annonces",
        description:
          "Outil pour créer des titres accrocheurs basés sur les caractéristiques de votre bien",
        link: "/tools/title-generator",
      },
      {
        name: "Guide de photographie immobilière",
        description:
          "Techniques pour prendre des photos attrayantes même sans équipement professionnel",
        link: "/resources/photography-guide",
      },
    ],
    tips: [
      "Utilisez des mots-clés recherchés par les voyageurs dans votre titre et description",
      "Prenez vos photos par temps clair et en journée pour maximiser la luminosité",
      "Soyez honnête dans votre description - les mauvaises surprises mènent à de mauvaises évaluations",
      "Mettez à jour régulièrement vos photos, surtout si vous améliorez votre logement",
    ],
  },
  {
    id: "lancer-plateformes",
    number: 4,
    title: "Se lancer sur les plateformes",
    description:
      "Le choix des bonnes plateformes et le paramétrage optimal de vos annonces sont déterminants pour votre succès. Chaque plateforme a ses spécificités et vous devez en tirer le meilleur parti.",
    icon: Globe,
    details: [
      "Choisir les plateformes adaptées à votre bien (Airbnb, Booking, Abritel)",
      "Configurer correctement tous les paramètres de votre annonce",
      "Définir une politique d'annulation adaptée à votre situation",
      "Paramétrer vos règles d'occupation et conditions particulières",
      "Profiter du 'boost de visibilité' offert aux nouvelles annonces",
    ],
    tools: [
      {
        name: "Comparatif des plateformes",
        description:
          "Analyse détaillée des avantages et inconvénients de chaque plateforme",
        link: "/resources/platform-comparison",
      },
      {
        name: "Assistant de paramétrage",
        description:
          "Guide pas à pas pour configurer optimalement vos annonces sur chaque plateforme",
        link: "/tools/setup-assistant",
      },
    ],
    tips: [
      "Commencez par une seule plateforme pour vous familiariser avec le processus",
      "Proposez un prix légèrement inférieur au marché lors de votre lancement pour attirer les premières réservations",
      "Activez l'option 'Réservation instantanée' si possible pour améliorer votre taux de conversion",
      "Soyez réactif aux premières demandes pour améliorer votre classement dans les résultats",
    ],
  },
  {
    id: "gerer-reservations",
    number: 5,
    title: "Gérer ses réservations comme un pro",
    description:
      "La gestion professionnelle des réservations et de la communication avec vos voyageurs est essentielle pour obtenir de bonnes évaluations. Une expérience fluide de bout en bout fidélisera vos clients.",
    icon: CalendarCheck,
    details: [
      "Mettre en place une communication claire et efficace",
      "Organiser un processus d'accueil sans faille (physique ou autonome)",
      "Préparer des instructions détaillées pour le logement",
      "Prévoir un système pour gérer les incidents pendant le séjour",
      "Assurer un suivi des avis et y répondre professionnellement",
    ],
    tools: [
      {
        name: "Modèles de messages pour chaque étape",
        description:
          "Messages pré-rédigés pour la confirmation, les instructions d'arrivée, le suivi, etc.",
        link: "/resources/message-templates",
      },
      {
        name: "Guide de résolution des incidents",
        description:
          "Protocoles pour gérer efficacement les problèmes courants",
        link: "/resources/incident-management",
      },
    ],
    tips: [
      "Répondez toujours aux messages dans un délai de 1-2 heures maximum, surtout avant l'arrivée",
      "Créez un guide de la maison digital facile à consulter pour les voyageurs",
      "Prévoyez toujours un plan B pour l'accueil en cas d'imprévu",
      "Demandez directement des avis à vos voyageurs satisfaits après leur départ",
    ],
  },
  {
    id: "booster-revenus",
    number: 6,
    title: "Booster ses revenus",
    description:
      "Après avoir établi les bases solides de votre activité de location, vous pouvez désormais vous concentrer sur l'optimisation de vos revenus par diverses stratégies avancées.",
    icon: TrendingUp,
    details: [
      "Mettre en place une tarification dynamique selon la saison et les événements",
      "Maximiser l'obtention d'avis 5 étoiles pour améliorer votre classement",
      "Proposer des services supplémentaires payants",
      "Optimiser votre taux d'occupation en ajustant vos tarifs",
      "Fidéliser vos clients pour encourager les réservations répétées",
    ],
    tools: [
      {
        name: "Outil de pricing dynamique",
        description:
          "Logiciel pour ajuster automatiquement vos prix selon l'offre et la demande",
        link: "/tools/dynamic-pricing",
      },
      {
        name: "Analyse de performance",
        description:
          "Tableau de bord pour suivre vos indicateurs clés et identifier les opportunités d'amélioration",
        link: "/tools/performance-analytics",
      },
    ],
    tips: [
      "Analysez régulièrement les tarifs de vos concurrents directs pour rester compétitif",
      "Offrez des réductions pour les séjours longue durée, surtout en basse saison",
      "Créez des partenariats locaux pour proposer des services supplémentaires",
      "Investissez dans les équipements qui justifient une augmentation de prix (jacuzzi, équipement haut de gamme...)",
    ],
  },
];

// Implémentation des bonus du parcours d'accompagnement
export const accompanimentBonuses: AccompanimentBonus[] = [
  {
    id: "message-templates",
    name: "Modèles de messages",
    description:
      "Collection de messages pré-rédigés pour toutes les étapes du parcours client : confirmation de réservation, instructions d'arrivée, suivi pendant le séjour, rappel de départ, demande d'avis.",
    type: "template",
  },
  {
    id: "property-checklist",
    name: "Checklist de préparation du logement",
    description:
      "Liste exhaustive des équipements essentiels et optionnels pour préparer votre bien à la location, avec indications de budget et priorités.",
    type: "checklist",
  },
  {
    id: "cleaning-checklist",
    name: "Checklist de ménage entre deux locations",
    description:
      "Protocole détaillé pour assurer un nettoyage parfait entre chaque séjour, particulièrement important pour les bonnes évaluations.",
    type: "checklist",
  },
  {
    id: "revenue-simulator",
    name: "Simulateur de revenus",
    description:
      "Outil permettant d'estimer votre potentiel de revenus en fonction de votre localisation, type de bien, saison et stratégie de tarification.",
    type: "calculator",
  },
  {
    id: "profitability-calculator",
    name: "Calculateur de rentabilité",
    description:
      "Calculez votre rentabilité réelle en prenant en compte tous les coûts associés à votre activité de location saisonnière.",
    type: "calculator",
  },
  {
    id: "tools-list",
    name: "Liste d'outils recommandés",
    description:
      "Sélection d'applications, logiciels et services pour optimiser chaque aspect de votre activité : gestion des réservations, communication, pricing, etc.",
    type: "tool",
  },
  {
    id: "digital-welcome-book",
    name: "Modèle de livret d'accueil digital",
    description:
      "Template personnalisable pour créer un guide complet de votre logement et de ses environs à l'intention de vos voyageurs.",
    type: "template",
  },
  {
    id: "regulations-guide",
    name: "Guide des réglementations",
    description:
      "Information sur les obligations légales, fiscales et administratives pour les loueurs en fonction des différentes régions.",
    type: "tool",
  },
];
