export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  frequency?: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  buttonLink: string;
}

/**
 * Interface étendue pour les niveaux de tarification des services
 * d'accompagnement et de conciergerie, basée sur data_enrichment.md
 */
export interface PricingTier {
  id: string; // Identifiant unique du tier
  name: string; // Nom du tier (e.g., "Starter", "Premium")
  price: number; // Prix en euros
  currency: string; // Devise (EUR par défaut)
  billingPeriod: "one-time" | "monthly" | "yearly"; // Période de facturation
  description: string; // Description détaillée
  features: {
    // Caractéristiques
    included: string[]; // Fonctionnalités incluses
    excluded?: string[]; // Fonctionnalités non incluses (optionnel)
  };
  cta: {
    // Call-to-Action
    text: string;
    href: string;
  };
  audience: string; // Public cible
  popular?: boolean; // Marqueur pour le tier le plus populaire
}

/**
 * Interface pour les catégories de tarification
 */
export interface PricingCategory {
  id: string; // Identifiant unique de la catégorie
  name: string; // Nom de la catégorie
  description: string; // Description de la catégorie
  tiers: PricingTier[]; // Niveaux de tarification dans cette catégorie
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "essential",
    name: "Essentiel",
    description: "Pour les propriétaires débutants",
    price: "199€",
    frequency: "par mois",
    features: [
      "Gestion des annonces",
      "Réponse aux demandes",
      "Assistance téléphonique",
      "Rapport mensuel",
    ],

    buttonLink: "/contact?plan=essential",
  },
  {
    id: "premium",
    name: "Premium",
    description: "Notre formule la plus populaire",
    price: "349€",
    frequency: "par mois",
    features: [
      "Tout ce qui est inclus dans Essentiel",
      "Photographie professionnelle",
      "Check-in/Check-out",
      "Service de ménage",
      "Maintenance de base",
    ],
    popular: true,
    buttonLink: "/contact?plan=premium",
  },
  {
    id: "exclusive",
    name: "Exclusif",
    description: "Pour une expérience sans compromis",
    price: "599€",
    frequency: "par mois",
    features: [
      "Tout ce qui est inclus dans Premium",
      "Conciergerie 24/7",
      "Conseils de décoration",
      "Optimisation des revenus",
      "Gestion des urgences",
      "Rapport détaillé hebdomadaire",
    ],
    buttonLink: "/contact?plan=exclusive",
  },
];

export const consultingService = {
  id: "consulting",
  name: "Consultation",
  description:
    "Pour ceux qui souhaitent des conseils d'experts sans engagement à long terme",
  price: "90€",
  frequency: "pour 45 minutes",
  features: [
    "Analyse personnalisée de votre propriété",
    "Stratégies d'optimisation de revenus",
    "Recommandations sur-mesure",
    "Le montant sera intégralement déduit si vous souscrivez à l'un de nos services par la suite",
  ],
  buttonText: "Réserver",
  buttonLink: "/appointments",
};

// Implémentation des nouvelles catégories de tarification basée sur data_enrichment.md
export const pricingCategories: PricingCategory[] = [
  {
    id: "accompagnement-proprietaires",
    name: "Accompagnement des Propriétaires",
    description:
      "Nos packs d'accompagnement sont conçus pour les propriétaires qui souhaitent optimiser leur activité de location saisonnière. Du pack 100% en ligne aux formules avec coaching personnalisé, trouvez la solution qui correspond à vos besoins.",
    tiers: [
      {
        id: "starter",
        name: "Pack Starter",
        price: 49,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "Accès complet à notre parcours en ligne pour les propriétaires débutants qui souhaitent apprendre par eux-mêmes.",
        features: {
          included: [
            "Accès à vie au parcours complet en 6 étapes",
            "Modèles de messages automatisés",
            "Checklists essentielles",
            "Simulateur de revenus",
            "Accès au groupe communautaire",
          ],
          excluded: [
            "Coaching individuel",
            "Audit personnalisé",
            "Support prioritaire",
          ],
        },
        cta: {
          text: "Commencer",
          href: "/pricing/starter",
        },
        audience: "Propriétaires débutants souhaitant se former en autonomie",
      },
      {
        id: "coaching-starter-plus",
        name: "Pack Coaching Starter+",
        price: 129,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "Formule idéale pour les propriétaires qui souhaitent bénéficier d'un accompagnement personnalisé en plus des ressources en ligne.",
        features: {
          included: [
            "Tout ce qui est inclus dans le Pack Starter",
            "1 séance de coaching individuel (45 minutes)",
            "Audit de votre projet ou annonce",
            "Support email prioritaire pendant 30 jours",
            "Accès aux webinaires mensuels",
          ],
        },
        cta: {
          text: "Choisir ce pack",
          href: "/pricing/coaching-starter-plus",
        },
        audience:
          "Propriétaires cherchant un équilibre entre autonomie et accompagnement",
        popular: true,
      },
      {
        id: "serenite-coaching-plus",
        name: "Pack Sérénité Coaching+",
        price: 249,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "Notre formule la plus complète pour un accompagnement sur-mesure et un suivi personnalisé de votre projet de A à Z.",
        features: {
          included: [
            "Tout ce qui est inclus dans le Pack Coaching Starter+",
            "3 séances de coaching individuel (45 minutes)",
            "Audit complet de votre annonce avec recommandations détaillées",
            "Création de votre calendrier tarifaire personnalisé",
            "Support email et téléphone prioritaire pendant 90 jours",
            "Accès VIP aux nouveaux contenus et outils",
          ],
        },
        cta: {
          text: "Démarrer l'accompagnement",
          href: "/pricing/serenite-coaching-plus",
        },
        audience:
          "Propriétaires souhaitant un accompagnement complet et personnalisé",
      },
    ],
  },
  {
    id: "services-conciergeries",
    name: "Services pour Conciergeries",
    description:
      "Des services spécialement conçus pour les conciergeries et gestionnaires multi-biens qui souhaitent optimiser leurs performances et proposer une valeur ajoutée à leurs clients.",
    tiers: [
      // {
      //   id: "services-a-la-carte",
      //   name: "Services à la Carte",
      //   price: 0,
      //   currency: "EUR",
      //   billingPeriod: "one-time",
      //   description:
      //     "Services ponctuels pour répondre à des besoins spécifiques d'optimisation de vos biens en gestion.",
      //   features: {
      //     included: [
      //       "Audit tarifaire (à partir de 49€/bien)",
      //       "Audit d'annonce (à partir de 69€/annonce)",
      //       "Refonte complète d'annonce (à partir de 149€/annonce)",
      //       "Création de livret d'accueil digital (à partir de 99€/bien)",
      //       "Formation équipe (à partir de 290€/demi-journée)",
      //     ],
      //   },
      //   cta: {
      //     text: "Demander un devis",
      //     href: "/pricing/conciergerie-services",
      //   },
      //   audience: "Conciergeries ayant des besoins ponctuels d'optimisation",
      // },
      {
        id: "pack-mensuel-essentiel",
        name: "Pack Mensuel Essentiel",
        price: 199,
        currency: "EUR",
        billingPeriod: "monthly",
        description:
          "Forfait mensuel idéal pour les petites conciergeries souhaitant améliorer régulièrement leurs performances.",
        features: {
          included: [
            "5 audits tarifaires par mois",
            "3 audits d'annonces par mois",
            "1 refonte complète d'annonce par mois",
            "Remise de 15% sur les services additionnels",
            "Support dédié par email",
          ],
        },
        cta: {
          text: "Souscrire au forfait",
          href: "/pricing/conciergerie-essentiel",
        },
        audience: "Conciergeries gérant jusqu'à 15 biens",
      },
      {
        id: "pack-mensuel-premium",
        name: "Pack Mensuel Premium",
        price: 399,
        currency: "EUR",
        billingPeriod: "monthly",
        description:
          "Solution complète pour les conciergeries en croissance souhaitant maximiser leurs performances sur l'ensemble de leur portefeuille.",
        features: {
          included: [
            "12 audits tarifaires par mois",
            "8 audits d'annonces par mois",
            "3 refontes complètes d'annonce par mois",
            "1 session stratégique mensuelle (1h)",
            "Remise de 25% sur les services additionnels",
            "Support prioritaire par email et téléphone",
          ],
        },
        cta: {
          text: "Souscrire au forfait premium",
          href: "/pricing/conciergerie-premium",
        },
        audience: "Conciergeries gérant entre 15 et 50 biens",
        popular: true,
      },
      {
        id: "pack-mensuel-entreprise",
        name: "Pack Mensuel Entreprise",
        price: 799,
        currency: "EUR",
        billingPeriod: "monthly",
        description:
          "Solution sur-mesure pour les grandes conciergeries et gestionnaires multi-biens souhaitant un accompagnement stratégique complet.",
        features: {
          included: [
            "Audits tarifaires et d'annonces illimités",
            "8 refontes complètes d'annonce par mois",
            "Sessions stratégiques hebdomadaires",
            "Formations pour votre équipe (1 par trimestre)",
            "Développement de votre marque employeur",
            "Accompagnement sur votre stratégie marketing",
            "Interlocuteur dédié disponible 6j/7",
          ],
        },
        cta: {
          text: "Demander un entretien",
          href: "/pricing/conciergerie-entreprise",
        },
        audience: "Conciergeries gérant plus de 50 biens",
      },
    ],
  },
  {
    id: "services-particuliers",
    name: "Services pour Particuliers",
    description:
      "Nos services dédiés aux particuliers pour rendre votre séjour inoubliable. De la conciergerie incluse aux services sur mesure, nous vous offrons un confort optimal pendant toute la durée de votre location.",
    tiers: [
      {
        id: "particuliers-essentiel",
        name: "Forfait Essentiel",
        price: 79,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "Des services essentiels pour un séjour sans tracas avec une assistance de qualité.",
        features: {
          included: [
            "Conciergerie incluse pendant tout le séjour",
            "Assistance 7j/7",
            "Conseils et recommandations locales",
            "Gestion des urgences et dépannages",
          ],
          excluded: [
            "Ménage pendant le séjour",
            "Blanchisserie",
            "Apéro dinatoire d'arrivée",
            "Services sur mesure",
          ],
        },
        cta: {
          text: "Choisir l'Essentiel",
          href: "/pricing/particuliers-essentiel",
        },
        audience: "Voyageurs autonomes cherchant une assistance de base",
      },
      {
        id: "particuliers-confort",
        name: "Forfait Confort",
        price: 149,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "L'équilibre parfait entre confort et budget pour un séjour reposant et sans souci.",
        features: {
          included: [
            "Tout ce qui est inclus dans le forfait Essentiel",
            "Ménage complet en milieu de séjour",
            "Apéro dinatoire d'arrivée avec produits locaux",
            "Changement de linge une fois pendant le séjour",
          ],
          excluded: ["Blanchisserie complète", "Services sur mesure premium"],
        },
        cta: {
          text: "Choisir le Confort",
          href: "/pricing/particuliers-confort",
        },
        audience: "Voyageurs souhaitant un séjour confortable sans compromis",
        popular: true,
      },
      {
        id: "particuliers-premium",
        name: "Forfait Premium",
        price: 279,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "Une expérience sans égale avec l'ensemble de nos services pour un séjour véritablement luxueux et mémorable.",
        features: {
          included: [
            "Tout ce qui est inclus dans le forfait Confort",
            "Blanchisserie complète disponible",
            "Ménage complet deux fois par semaine",
            "Services sur mesure (équipements de plage, etc.)",
            "Transport privé disponible sur demande",
            "Livraison de courses à domicile",
          ],
        },
        cta: {
          text: "Choisir le Premium",
          href: "/pricing/particuliers-premium",
        },
        audience:
          "Voyageurs exigeants à la recherche d'une expérience luxueuse",
      },
    ],
  },
  {
    id: "services-professionnels",
    name: "Services Professionnels",
    description:
      "Des solutions complètes pour les propriétaires professionnels qui souhaitent déléguer la gestion opérationnelle de leurs biens locatifs tout en maximisant leurs revenus.",
    tiers: [
      {
        id: "professionnels-standard",
        name: "Forfait Standard",
        price: 149,
        currency: "EUR",
        billingPeriod: "monthly",
        description:
          "Une solution de base pour les propriétaires qui débutent dans la location saisonnière professionnelle.",
        features: {
          included: [
            "Conciergerie au forfait",
            "Gestion des arrivées et départs",
            "Interlocuteur dédié",
            "Assistance voyageurs 7j/7",
          ],
          excluded: [
            "Ménage et entretien",
            "Blanchisserie",
            "Conciergerie au pourcentage",
            "Optimisation continue des revenus",
          ],
        },
        cta: {
          text: "Démarrer avec Standard",
          href: "/pricing/professionnels-standard",
        },
        audience: "Propriétaires débutants avec 1-2 biens en location",
      },
      {
        id: "professionnels-business",
        name: "Forfait Business",
        price: 299,
        currency: "EUR",
        billingPeriod: "monthly",
        description:
          "Solution complète pour les propriétaires qui souhaitent une gestion optimisée et des services de qualité.",
        features: {
          included: [
            "Tout ce qui est inclus dans le forfait Standard",
            "Ménage et entretien entre chaque séjour",
            "Blanchisserie professionnelle",
            "Vérification systématique des équipements",
            "Réapprovisionnement des consommables",
          ],
          excluded: [
            "Conciergerie au pourcentage",
            "Optimisation tarifaire avancée",
          ],
        },
        cta: {
          text: "Choisir Business",
          href: "/pricing/professionnels-business",
        },
        audience: "Propriétaires avec 2-5 biens en location",
        popular: true,
      },
      {
        id: "professionnels-excellence",
        name: "Forfait Excellence",
        price: 499,
        currency: "EUR",
        billingPeriod: "monthly",
        description:
          "Notre solution haut de gamme pour une gestion complète et sur-mesure de vos biens avec maximisation des revenus.",
        features: {
          included: [
            "Tout ce qui est inclus dans le forfait Business",
            "Conciergerie au pourcentage (commission sur les revenus)",
            "Optimisation continue du taux d'occupation",
            "Gestion proactive des réservations",
            "Stratégie tarifaire dynamique",
            "Rapport détaillé mensuel sur les performances",
          ],
        },
        cta: {
          text: "Opter pour Excellence",
          href: "/pricing/professionnels-excellence",
        },
        audience: "Propriétaires avec plus de 5 biens ou investisseurs",
      },
    ],
  },
  {
    id: "creation-annonce",
    name: "Création d'Annonce",
    description:
      "Des services spécialisés pour créer des annonces performantes qui captent l'attention, maximisent votre visibilité et augmentent significativement votre taux de conversion.",
    tiers: [
      {
        id: "annonce-basique",
        name: "Forfait Basique",
        price: 99,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "L'essentiel pour créer une annonce efficace avec un contenu optimisé.",
        features: {
          included: [
            "Rédaction optimisée d'annonce",
            "Titres accrocheurs et optimisés SEO",
            "Descriptions détaillées et engageantes",
            "Mise en avant des points forts",
          ],
          excluded: [
            "Traduction d'annonce",
            "Mise en ligne et paramétrage",
            "Analyse de la concurrence",
          ],
        },
        cta: {
          text: "Commencer avec Basique",
          href: "/pricing/annonce-basique",
        },
        audience: "Propriétaires souhaitant améliorer leur annonce existante",
      },
      {
        id: "annonce-standard",
        name: "Forfait Standard",
        price: 199,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "Une solution complète pour créer et traduire une annonce performante.",
        features: {
          included: [
            "Tout ce qui est inclus dans le forfait Basique",
            "Traduction d'annonce en une langue au choix",
            "Mise en ligne sur la plateforme principale",
            "Paramétrage de base",
            "Conseils d'optimisation",
          ],
          excluded: [
            "Traductions supplémentaires",
            "Mise en ligne multi-plateformes",
            "Analyse complète de la concurrence",
          ],
        },
        cta: {
          text: "Choisir Standard",
          href: "/pricing/annonce-standard",
        },
        audience: "Propriétaires souhaitant une annonce professionnelle",
        popular: true,
      },
      {
        id: "annonce-premium",
        name: "Forfait Premium",
        price: 349,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "Notre solution la plus complète pour une annonce parfaitement optimisée et diffusée sur toutes les plateformes pertinentes.",
        features: {
          included: [
            "Tout ce qui est inclus dans le forfait Standard",
            "Traduction en deux langues supplémentaires",
            "Mise en ligne et paramétrage sur 3 plateformes",
            "Analyse complète de la concurrence",
            "Recommandations stratégiques personnalisées",
            "Optimisation continue pendant 30 jours",
          ],
        },
        cta: {
          text: "Opter pour Premium",
          href: "/pricing/annonce-premium",
        },
        audience:
          "Propriétaires cherchant des résultats optimaux et internationaux",
      },
    ],
  },
  {
    id: "optimisation-visuelle",
    name: "Optimisation Visuelle",
    description:
      "Des services professionnels pour sublimer visuellement votre bien et captiver instantanément l'attention des voyageurs grâce à des images et vidéos de qualité exceptionnelle.",
    tiers: [
      {
        id: "visuel-essentiel",
        name: "Forfait Essentiel",
        price: 79,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "Optimisation de vos photos existantes pour améliorer leur impact visuel.",
        features: {
          included: [
            "Retouches professionnelles de 10 photos",
            "Correction colorimétrique et luminosité",
            "Recadrage et composition optimisée",
            "Correction des perspectives",
          ],
          excluded: [
            "Shooting photo professionnel",
            "Création de vidéo",
            "Création de plan 2D",
          ],
        },
        cta: {
          text: "Choisir Essentiel",
          href: "/pricing/visuel-essentiel",
        },
        audience: "Propriétaires disposant déjà de photos de qualité correcte",
      },
      {
        id: "visuel-avance",
        name: "Forfait Avancé",
        price: 249,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "Mise en valeur professionnelle de votre bien avec un shooting photo complet.",
        features: {
          included: [
            "Shooting photo professionnel (jusqu'à 15 photos)",
            "Mise en scène optimale des espaces",
            "Prise de vue à la lumière naturelle",
            "Retouches et optimisation de toutes les photos",
            "Création de plan 2D simplifié",
          ],
          excluded: ["Création de vidéo", "Prises de vue par drone"],
        },
        cta: {
          text: "Choisir Avancé",
          href: "/pricing/visuel-avance",
        },
        audience:
          "Propriétaires souhaitant valoriser professionnellement leur bien",
        popular: true,
      },
      {
        id: "visuel-premium",
        name: "Forfait Premium",
        price: 499,
        currency: "EUR",
        billingPeriod: "one-time",
        description:
          "Notre solution complète pour une présentation visuelle exceptionnelle qui démarque véritablement votre bien.",
        features: {
          included: [
            "Tout ce qui est inclus dans le forfait Avancé",
            "Shooting photo étendu (jusqu'à 25 photos)",
            "Création de vidéo professionnelle",
            "Prises de vue aériennes par drone",
            "Plan 2D détaillé à l'échelle",
            "Optimisation pour tous supports (web, mobile, impression)",
          ],
        },
        cta: {
          text: "Opter pour Premium",
          href: "/pricing/visuel-premium",
        },
        audience:
          "Propriétaires de biens haut de gamme cherchant l'excellence visuelle",
      },
    ],
  },
];
