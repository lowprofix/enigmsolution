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
