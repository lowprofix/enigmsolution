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
  FileEdit,
  Languages,
  Upload,
  BarChart2,
  ImagePlus,
  Video,
  MapPin,
  TrendingUp,
  Calendar,
  LineChart,
  PieChart,
  Search,
  Share2,
  Mail,
  BookOpen,
  MessageCircle,
  Type,
  Target,
  Lightbulb,
  Globe,
  PenTool,
  Megaphone,
  MessageSquare,
  Palette,
  BarChart,
  FileText,
} from "lucide-react";
import React from "react";

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  category?:
    | "featured"
    | "particular"
    | "professional"
    | "creation-annonce"
    | "optimisation-visuelle"
    | "tarification-strategie"
    | "marketing-visibilite"
    | "communication-client"
    | "branding-differenciation"
    | "reporting-suivi";
  features?: string[]; // Caractéristiques principales du service
  benefits?: string[]; // Bénéfices pour le client
  process?: {
    // Processus de réalisation du service
    step: string;
    description: string;
  }[];
  relatedServices?: string[]; // Services complémentaires recommandés
  testimonial?: {
    // Témoignage client (optionnel)
    name: string;
    role: string;
    text: string;
  };
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
    features: [
      "Accueil personnalisé à votre arrivée",
      "Assistance 7j/7 pendant tout votre séjour",
      "Conseils et recommandations locales",
      "Gestion des urgences et dépannages",
    ],
    benefits: [
      "Séjour sans stress ni soucis logistiques",
      "Gain de temps pour profiter pleinement de vos vacances",
      "Réponse rapide à tous vos besoins",
      "Personnalisation de votre expérience",
    ],
    process: [
      {
        step: "Premier contact",
        description:
          "Échange pour comprendre vos attentes et besoins spécifiques",
      },
      {
        step: "Préparation personnalisée",
        description: "Organisation de votre accueil et des services souhaités",
      },
      {
        step: "Prise en charge",
        description: "Accueil à votre arrivée et présentation des services",
      },
    ],
    relatedServices: ["Ménage", "Blanchisserie", "Services sur mesure"],
  },
  {
    title: "Apéro dinatoire d'arrivée",
    description:
      "Accueil personnalisé avec un apéritif dînatoire préparé pour votre arrivée.",
    icon: UtensilsCrossed,
    href: "/services/welcome-dinner",
    category: "particular",
    features: [
      "Sélection de produits locaux et de saison",
      "Préparation avant votre arrivée",
      "Présentation soignée et élégante",
      "Options végétariennes, vegan ou sans allergènes disponibles",
    ],
    benefits: [
      "Détente immédiate dès votre arrivée",
      "Découverte des saveurs locales",
      "Pas de courses ou de préparation à prévoir",
      "Début de séjour convivial et chaleureux",
    ],
    process: [
      {
        step: "Échange sur vos préférences",
        description:
          "Discussion sur vos goûts et restrictions alimentaires éventuelles",
      },
      {
        step: "Préparation et présentation",
        description:
          "Sélection et mise en place de l'apéritif avant votre arrivée",
      },
      {
        step: "Accueil gastronomique",
        description: "Présentation des spécialités à votre arrivée",
      },
    ],
    relatedServices: [
      "Conciergerie incluse",
      "Livraison de courses",
      "Services de chef à domicile",
    ],
  },
  {
    title: "Ménage",
    description:
      "Service de ménage complet pour un séjour en toute tranquillité.",
    icon: Sparkles,
    href: "/services/cleaning-particular",
    category: "particular",
    features: [
      "Nettoyage complet et méticuleux",
      "Personnel qualifié et de confiance",
      "Produits écologiques et hypoallergéniques",
      "Fréquence adaptée à vos besoins",
    ],
    benefits: [
      "Séjour dans un environnement toujours propre",
      "Gain de temps et confort optimal",
      "Aucune préoccupation ménagère pendant vos vacances",
      "Logement sain et hygiénique",
    ],
    process: [
      {
        step: "Évaluation des besoins",
        description: "Définition de la fréquence et des prestations souhaitées",
      },
      {
        step: "Organisation des interventions",
        description: "Planification des passages selon votre planning",
      },
      {
        step: "Réalisation du service",
        description: "Intervention discrète et efficace de notre personnel",
      },
    ],
    relatedServices: [
      "Blanchisserie",
      "Changement de linge",
      "Conciergerie incluse",
    ],
  },
  {
    title: "Blanchisserie",
    description: "Service de blanchisserie et repassage pendant votre séjour.",
    icon: WashingMachine,
    href: "/services/laundry-particular",
    category: "particular",
    features: [
      "Collecte et livraison à domicile",
      "Lavage, séchage et repassage professionnels",
      "Respect des consignes spécifiques pour chaque vêtement",
      "Service rapide (24-48h selon demande)",
    ],
    benefits: [
      "Vêtements parfaitement entretenus pendant votre séjour",
      "Valises plus légères (moins de vêtements à emporter)",
      "Gain de temps considérable",
      "Solution idéale pour les séjours de longue durée",
    ],
    process: [
      {
        step: "Collecte du linge",
        description: "Récupération à domicile selon l'horaire convenu",
      },
      {
        step: "Traitement professionnel",
        description: "Lavage, séchage et repassage selon vos instructions",
      },
      {
        step: "Livraison",
        description: "Retour de votre linge propre et plié/repassé",
      },
    ],
    relatedServices: [
      "Ménage",
      "Changement de linge de maison",
      "Conciergerie incluse",
    ],
  },
  {
    title: "Services sur mesure",
    description:
      "Location de draps de plage, foutas, siège de plage, parasol, glacière et bien plus encore.",
    icon: Users,
    href: "/services/custom-services",
    category: "particular",
    features: [
      "Large gamme d'équipements disponibles",
      "Matériel de qualité et en parfait état",
      "Livraison et récupération incluses",
      "Conseils personnalisés selon vos activités",
    ],
    benefits: [
      "Voyage léger sans encombrement",
      "Équipement adapté aux conditions locales",
      "Économie sur l'achat d'équipements temporaires",
      "Accessoires parfaitement adaptés à vos activités",
    ],
    process: [
      {
        step: "Consultation et sélection",
        description: "Choix des équipements selon vos projets d'activités",
      },
      {
        step: "Préparation et livraison",
        description: "Mise à disposition des équipements à votre arrivée",
      },
      {
        step: "Récupération en fin de séjour",
        description: "Collecte des équipements sans contrainte pour vous",
      },
    ],
    relatedServices: [
      "Conciergerie incluse",
      "Excursions et activités",
      "Transport privé",
    ],
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
    features: [
      "Tarif fixe mensualisé",
      "Ensemble de services prédéfinis",
      "Gestion complète des arrivées et départs",
      "Interlocuteur dédié pour votre bien",
    ],
    benefits: [
      "Budget prévisible et constant",
      "Tranquillité d'esprit avec une gestion clé en main",
      "Aucune surprise financière en fonction du taux d'occupation",
      "Solution idéale pour les budgets planifiés",
    ],
    process: [
      {
        step: "Évaluation de votre bien",
        description: "Analyse des caractéristiques et besoins spécifiques",
      },
      {
        step: "Proposition personnalisée",
        description: "Élaboration d'un forfait adapté à votre situation",
      },
      {
        step: "Mise en place opérationnelle",
        description: "Démarrage de la gestion et suivi régulier",
      },
    ],
    relatedServices: [
      "Ménage et entretien",
      "Blanchisserie",
      "Optimisation d'annonce",
    ],
  },
  {
    title: "Conciergerie au pourcentage",
    description:
      "Conciergerie avec rémunération basée sur un pourcentage des revenus locatifs.",
    icon: Building2,
    href: "/services/percentage-concierge",
    category: "professional",
    features: [
      "Commission sur les revenus générés",
      "Alignement d'intérêts avec le propriétaire",
      "Gestion proactive des réservations",
      "Optimisation continue du taux d'occupation",
    ],
    benefits: [
      "Coûts proportionnels aux revenus",
      "Motivation accrue pour maximiser vos revenus",
      "Réduction des frais en basse saison",
      "Partenariat gagnant-gagnant",
    ],
    process: [
      {
        step: "Analyse de potentiel",
        description: "Évaluation des revenus potentiels et du positionnement",
      },
      {
        step: "Définition de la stratégie",
        description: "Élaboration du plan de commercialisation et gestion",
      },
      {
        step: "Implémentation et optimisation",
        description:
          "Mise en œuvre et ajustements continus pour maximiser les résultats",
      },
    ],
    relatedServices: [
      "Marketing & visibilité",
      "Pricing dynamique",
      "Optimisation d'annonce",
    ],
  },
  {
    title: "Blanchisserie",
    description:
      "Service de blanchisserie professionnel pour vos biens locatifs.",
    icon: WashingMachine,
    href: "/services/laundry-professional",
    category: "professional",
    features: [
      "Service après chaque départ",
      "Traitement de tout le linge de maison",
      "Standards hôteliers de qualité",
      "Stock tampon disponible en cas d'urgence",
    ],
    benefits: [
      "Rotation efficace entre les séjours",
      "Linge toujours impeccable pour vos voyageurs",
      "Gestion des imprévus et séjours courts",
      "Professionnalisme renforçant votre réputation",
    ],
    process: [
      {
        step: "Collecte post-départ",
        description: "Récupération du linge après le départ des voyageurs",
      },
      {
        step: "Traitement professionnel",
        description: "Lavage, séchage et conditionnement selon les normes",
      },
      {
        step: "Remise en place",
        description: "Installation du linge propre avant la prochaine arrivée",
      },
    ],
    relatedServices: [
      "Ménage et entretien",
      "Conciergerie au forfait",
      "Conciergerie au pourcentage",
    ],
  },
  {
    title: "Ménage et entretien",
    description:
      "Services de ménage et d'entretien réguliers pour vos propriétés locatives.",
    icon: Bath,
    href: "/services/cleaning-maintenance",
    category: "professional",
    features: [
      "Nettoyage complet entre chaque séjour",
      "Vérification systématique des équipements",
      "Réapprovisionnement des consommables",
      "Rapport d'état après chaque intervention",
    ],
    benefits: [
      "Bien toujours prêt à accueillir de nouveaux voyageurs",
      "Maintien de la qualité et prévention des problèmes",
      "Excellentes évaluations sur la propreté",
      "Réduction des réclamations et litiges",
    ],
    process: [
      {
        step: "Intervention post-départ",
        description: "Nettoyage complet selon une checklist stricte",
      },
      {
        step: "Vérification qualité",
        description: "Contrôle de tous les points essentiels du logement",
      },
      {
        step: "Préparation pour l'arrivée",
        description:
          "Mise en place des éléments d'accueil pour les nouveaux voyageurs",
      },
    ],
    relatedServices: [
      "Blanchisserie",
      "Maintenance technique",
      "Conciergerie professionnelle",
    ],
  },
];

export const creationAnnonceServices: Service[] = [
  {
    title: "Rédaction optimisée d'annonce",
    description:
      "Création de contenus captivants qui mettent en valeur les atouts de votre bien et attirent plus de voyageurs.",
    icon: FileEdit,
    href: "/services/listing-writing",
    category: "creation-annonce",
    features: [
      "Titres accrocheurs et optimisés SEO",
      "Descriptions détaillées et engageantes",
      "Mise en avant des points forts",
      "Formulations persuasives",
    ],
    benefits: [
      "Augmentation du taux de clics sur votre annonce",
      "Meilleur positionnement dans les résultats de recherche",
      "Différenciation par rapport à la concurrence",
      "Plus de réservations grâce à un contenu de qualité",
    ],
    process: [
      {
        step: "Analyse de votre bien",
        description:
          "Identification des points forts et atouts uniques de votre logement",
      },
      {
        step: "Rédaction professionnelle",
        description: "Création d'un contenu optimisé et engageant",
      },
      {
        step: "Révision et validation",
        description: "Ajustements selon vos retours et finalisation",
      },
    ],
    relatedServices: [
      "Traduction d'annonce",
      "Mise en ligne et paramétrage",
      "Optimisation SEO",
    ],
  },
  {
    title: "Traduction d'annonce",
    description:
      "Traduction professionnelle de votre annonce pour toucher un public international et multiplier vos opportunités de réservation.",
    icon: Languages,
    href: "/services/listing-translation",
    category: "creation-annonce",
    features: [
      "Traduction en plusieurs langues (anglais, espagnol, allemand...)",
      "Adaptation culturelle du contenu",
      "Terminologie spécifique au secteur touristique",
      "Relecture par des natifs",
    ],
    benefits: [
      "Élargissement de votre clientèle potentielle",
      "Augmentation des réservations internationales",
      "Meilleure expérience pour les voyageurs étrangers",
      "Différenciation par rapport aux annonces monolingues",
    ],
    process: [
      {
        step: "Sélection des langues cibles",
        description:
          "Analyse des marchés potentiels et choix des langues pertinentes",
      },
      {
        step: "Traduction professionnelle",
        description: "Adaptation linguistique par des traducteurs spécialisés",
      },
      {
        step: "Validation et intégration",
        description:
          "Vérification de la qualité et mise en ligne des versions traduites",
      },
    ],
    relatedServices: [
      "Rédaction optimisée d'annonce",
      "Mise en ligne et paramétrage",
      "Marketing international",
    ],
  },
  {
    title: "Mise en ligne et paramétrage",
    description:
      "Configuration professionnelle et complète de vos annonces sur les principales plateformes de réservation.",
    icon: Upload,
    href: "/services/listing-setup",
    category: "creation-annonce",
    features: [
      "Paramétrage optimal des annonces",
      "Configuration des règles et conditions",
      "Optimisation du calendrier et des tarifs",
      "Intégration des photos et descriptions",
    ],
    benefits: [
      "Gain de temps considérable",
      "Paramétrage optimisé pour la visibilité",
      "Évitement des erreurs techniques",
      "Lancement rapide et professionnel",
    ],
    process: [
      {
        step: "Création des comptes",
        description:
          "Ouverture ou accès aux comptes sur les plateformes sélectionnées",
      },
      {
        step: "Configuration complète",
        description: "Paramétrage détaillé de chaque aspect de l'annonce",
      },
      {
        step: "Vérification et activation",
        description: "Tests de validation et mise en ligne effective",
      },
    ],
    relatedServices: [
      "Rédaction optimisée d'annonce",
      "Analyse de la concurrence",
      "Optimisation SEO",
    ],
  },
  {
    title: "Analyse de la concurrence",
    description:
      "Étude approfondie du marché local pour positionner stratégiquement votre offre et maximiser votre compétitivité.",
    icon: BarChart2,
    href: "/services/competition-analysis",
    category: "creation-annonce",
    features: [
      "Benchmark des prix du marché local",
      "Analyse des forces et faiblesses concurrentielles",
      "Identification des opportunités de différenciation",
      "Recommandations stratégiques personnalisées",
    ],
    benefits: [
      "Positionnement tarifaire optimal",
      "Identification de vos avantages concurrentiels",
      "Stratégie basée sur des données réelles",
      "Augmentation de votre taux d'occupation",
    ],
    process: [
      {
        step: "Collecte de données",
        description:
          "Identification et analyse des logements similaires dans votre zone",
      },
      {
        step: "Analyse comparative",
        description: "Évaluation détaillée des offres, prix et performances",
      },
      {
        step: "Recommandations stratégiques",
        description: "Élaboration d'un plan d'action pour vous démarquer",
      },
    ],
    relatedServices: [
      "Tarification dynamique",
      "Optimisation d'annonce",
      "Branding & différenciation",
    ],
  },
];

export const optimisationVisuelleServices: Service[] = [
  {
    title: "Shooting photo professionnel",
    description:
      "Mise en valeur exceptionnelle de votre logement par des photos professionnelles qui captent l'attention des voyageurs.",
    icon: ImagePlus,
    href: "/services/professional-photography",
    category: "optimisation-visuelle",
    features: [
      "Photos haute résolution par photographe spécialisé",
      "Mise en scène optimale des espaces",
      "Prise de vue à la lumière naturelle",
      "Angles et perspectives professionnels",
    ],
    benefits: [
      "Augmentation significative de l'attractivité de votre annonce",
      "Plus grand nombre de clics et de réservations",
      "Image professionnelle et haut de gamme",
      "Différenciation par rapport aux photos amateurs",
    ],
    process: [
      {
        step: "Préparation du logement",
        description: "Conseils pour optimiser l'apparence avant la séance",
      },
      {
        step: "Séance photo professionnelle",
        description: "Réalisation des prises de vue par un expert",
      },
      {
        step: "Sélection et retouches",
        description: "Choix des meilleures images et optimisation",
      },
    ],
    relatedServices: [
      "Retouches photos",
      "Création de vidéo",
      "Rédaction optimisée d'annonce",
    ],
  },
  {
    title: "Retouches photos",
    description:
      "Optimisation professionnelle de vos images existantes pour sublimer votre bien et maximiser son attrait visuel.",
    icon: PenTool,
    href: "/services/photo-editing",
    category: "optimisation-visuelle",
    features: [
      "Correction colorimétrique et luminosité",
      "Recadrage et composition optimisée",
      "Correction des perspectives",
      "Mise en valeur des atouts",
    ],
    benefits: [
      "Valorisation de photos existantes",
      "Images plus attrayantes et professionnelles",
      "Alternative économique au nouveau shooting",
      "Présentation optimale de votre bien",
    ],
    process: [
      {
        step: "Analyse des images existantes",
        description: "Évaluation des forces et faiblesses de vos photos",
      },
      {
        step: "Retouche professionnelle",
        description: "Amélioration technique et esthétique par un expert",
      },
      {
        step: "Optimisation pour le web",
        description:
          "Adaptation des formats et résolutions pour une charge rapide",
      },
    ],
    relatedServices: [
      "Shooting photo professionnel",
      "Mise en ligne et paramétrage",
      "Optimisation SEO",
    ],
  },
  {
    title: "Création de vidéo",
    description:
      "Production de vidéos immersives qui plongent les voyageurs dans l'expérience unique de votre logement.",
    icon: Video,
    href: "/services/video-creation",
    category: "optimisation-visuelle",
    features: [
      "Vidéos HD professionnelles",
      "Prise de vue aériennes par drone (en option)",
      "Montage dynamique et attrayant",
      "Musique d'ambiance adaptée",
    ],
    benefits: [
      "Expérience immersive pour les voyageurs",
      "Augmentation du taux de conversion",
      "Valorisation premium de votre bien",
      "Avantage concurrentiel significatif",
    ],
    process: [
      {
        step: "Scénarisation",
        description:
          "Planification du parcours visuel et des points forts à mettre en valeur",
      },
      {
        step: "Tournage professionnel",
        description: "Captation vidéo par un vidéaste spécialisé",
      },
      {
        step: "Montage et post-production",
        description: "Édition professionnelle et optimisation pour le web",
      },
    ],
    relatedServices: [
      "Shooting photo professionnel",
      "Mise en ligne et paramétrage",
      "Marketing réseaux sociaux",
    ],
  },
  {
    title: "Création de plan 2D",
    description:
      "Réalisation de plans d'étage professionnels qui facilitent la projection des voyageurs dans votre espace.",
    icon: MapPin,
    href: "/services/floor-plan",
    category: "optimisation-visuelle",
    features: [
      "Plans d'étage précis et à l'échelle",
      "Représentation claire des espaces",
      "Design professionnel et épuré",
      "Format optimisé pour le web",
    ],
    benefits: [
      "Meilleure compréhension de l'agencement",
      "Réduction des questions sur la configuration",
      "Élément différenciant pour votre annonce",
      "Image professionnelle renforcée",
    ],
    process: [
      {
        step: "Mesures et relevés",
        description: "Collecte des dimensions précises de votre logement",
      },
      {
        step: "Conception du plan",
        description: "Création d'un plan 2D professionnel et à l'échelle",
      },
      {
        step: "Finalisation et optimisation",
        description: "Ajout des légendes et préparation pour intégration web",
      },
    ],
    relatedServices: [
      "Shooting photo professionnel",
      "Création de vidéo",
      "Mise en ligne et paramétrage",
    ],
  },
];

export const tarificationStrategieServices: Service[] = [
  {
    title: "Mise en place de pricing dynamique",
    description:
      "Implémentation d'une tarification intelligente qui s'adapte automatiquement à la demande pour maximiser vos revenus.",
    icon: TrendingUp,
    href: "/services/dynamic-pricing",
    category: "tarification-strategie",
    features: [
      "Analyse algorithmique de la demande",
      "Ajustement automatique des prix",
      "Adaptation aux événements locaux",
      "Optimisation par saison et jour de semaine",
    ],
    benefits: [
      "Augmentation moyenne des revenus de 15-25%",
      "Réduction des périodes d'inoccupation",
      "Maximisation du taux d'occupation",
      "Tarification toujours compétitive",
    ],
    process: [
      {
        step: "Analyse de votre marché",
        description:
          "Étude approfondie de la demande locale et facteurs saisonniers",
      },
      {
        step: "Configuration de l'outil",
        description: "Mise en place d'un système de pricing intelligent adapté",
      },
      {
        step: "Suivi et ajustements",
        description:
          "Surveillance des performances et optimisations régulières",
      },
    ],
    relatedServices: [
      "Analyse de la concurrence",
      "Calendrier tarifaire",
      "Rapport mensuel de performance",
    ],
  },
  {
    title: "Création de calendrier tarifaire",
    description:
      "Élaboration d'une stratégie tarifaire saisonnière complète pour anticiper et maximiser vos revenus sur toute l'année.",
    icon: Calendar,
    href: "/services/pricing-calendar",
    category: "tarification-strategie",
    features: [
      "Planification tarifaire annuelle",
      "Gestion des saisons haute, moyenne et basse",
      "Ajustements pour événements spéciaux",
      "Stratégie pour réservations anticipées/dernière minute",
    ],
    benefits: [
      "Visibilité financière à long terme",
      "Optimisation des revenus saisonniers",
      "Gestion proactive des périodes creuses",
      "Valorisation des périodes à forte demande",
    ],
    process: [
      {
        step: "Analyse saisonnière",
        description: "Identification des patterns de demande sur votre marché",
      },
      {
        step: "Élaboration stratégique",
        description: "Création d'un calendrier tarifaire personnalisé",
      },
      {
        step: "Intégration et mise en œuvre",
        description: "Déploiement sur vos plateformes de réservation",
      },
    ],
    relatedServices: [
      "Pricing dynamique",
      "Analyse de la concurrence",
      "Optimisation du taux d'occupation",
    ],
  },
  {
    title: "Ajustement saisonnier",
    description:
      "Révision et optimisation précise de votre stratégie tarifaire pour chaque saison spécifique.",
    icon: LineChart,
    href: "/services/seasonal-adjustment",
    category: "tarification-strategie",
    features: [
      "Analyse des tendances saisonnières locales",
      "Recommandations tarifaires personnalisées",
      "Adaptation aux variations du marché",
      "Stratégie pour jours fériés et événements",
    ],
    benefits: [
      "Ajustement aux réalités du marché actuel",
      "Maximisation des revenus saisonniers",
      "Flexibilité tarifaire stratégique",
      "Anticipation des fluctuations de demande",
    ],
    process: [
      {
        step: "Analyse de performance",
        description: "Évaluation des résultats passés et tendances actuelles",
      },
      {
        step: "Révision stratégique",
        description: "Ajustement des tarifs en fonction des nouvelles données",
      },
      {
        step: "Implémentation et suivi",
        description:
          "Mise en place des nouveaux tarifs et évaluation des résultats",
      },
    ],
    relatedServices: [
      "Calendrier tarifaire",
      "Analyse de la concurrence",
      "Rapport de performance",
    ],
  },
  {
    title: "Analyse de performance tarifaire",
    description:
      "Évaluation détaillée de l'efficacité de votre stratégie de prix avec recommandations d'optimisation basées sur les données.",
    icon: PieChart,
    href: "/services/pricing-performance",
    category: "tarification-strategie",
    features: [
      "Analyse des KPIs de revenus",
      "Comparaison avec le marché local",
      "Identification des opportunités d'optimisation",
      "Évaluation du rapport prix/taux d'occupation",
    ],
    benefits: [
      "Identification des faiblesses stratégiques",
      "Optimisation continue des revenus",
      "Décisions basées sur des données concrètes",
      "Ajustements stratégiques ciblés",
    ],
    process: [
      {
        step: "Collecte et analyse de données",
        description: "Compilation des performances historiques et actuelles",
      },
      {
        step: "Benchmarking concurrentiel",
        description: "Comparaison avec les performances du marché",
      },
      {
        step: "Recommandations stratégiques",
        description: "Élaboration d'un plan d'optimisation tarifaire",
      },
    ],
    relatedServices: [
      "Pricing dynamique",
      "Rapport mensuel",
      "Analyse de la concurrence",
    ],
  },
];

export const marketingVisibiliteServices: Service[] = [
  {
    title: "Optimisation SEO",
    description:
      "Amélioration de la visibilité et du classement de vos annonces dans les résultats de recherche des plateformes de réservation.",
    icon: Search,
    href: "/services/seo-optimization",
    category: "marketing-visibilite",
    features: [
      "Recherche de mots-clés optimaux",
      "Optimisation du titre et de la description",
      "Utilisation stratégique des balises et attributs",
      "Structure de contenu optimisée",
    ],
    benefits: [
      "Meilleur positionnement dans les résultats de recherche",
      "Plus grande visibilité auprès des voyageurs",
      "Augmentation du taux de clics",
      "Plus de réservations grâce à une meilleure exposition",
    ],
    process: [
      {
        step: "Audit SEO initial",
        description:
          "Analyse de l'état actuel et identification des opportunités",
      },
      {
        step: "Optimisation stratégique",
        description: "Implémentation des meilleures pratiques SEO",
      },
      {
        step: "Suivi et ajustements",
        description: "Mesure des résultats et améliorations continues",
      },
    ],
    relatedServices: [
      "Rédaction optimisée d'annonce",
      "Diffusion multi-plateformes",
      "Analyse de performance",
    ],
  },
  {
    title: "Diffusion multi-plateformes",
    description:
      "Amplification de votre visibilité par la publication synchronisée de votre annonce sur les principales plateformes de réservation.",
    icon: Share2,
    href: "/services/multi-platform",
    category: "marketing-visibilite",
    features: [
      "Publication sur Airbnb, Booking, Abritel, etc.",
      "Synchronisation des calendriers et tarifs",
      "Optimisation spécifique à chaque plateforme",
      "Gestion centralisée des réservations",
    ],
    benefits: [
      "Maximisation de votre visibilité en ligne",
      "Diversification des sources de réservation",
      "Réduction des risques de dépendance à une plateforme",
      "Augmentation globale du taux d'occupation",
    ],
    process: [
      {
        step: "Analyse et sélection",
        description:
          "Identification des plateformes les plus pertinentes pour votre bien",
      },
      {
        step: "Création et configuration",
        description:
          "Mise en place des annonces optimisées sur chaque plateforme",
      },
      {
        step: "Synchronisation et maintenance",
        description:
          "Configuration d'un channel manager pour une gestion simplifiée",
      },
    ],
    relatedServices: [
      "Mise en ligne et paramétrage",
      "Optimisation SEO",
      "Pricing dynamique",
    ],
  },
  {
    title: "Contenu réseaux sociaux",
    description:
      "Création et gestion de contenus attractifs sur les réseaux sociaux pour promouvoir votre bien et attirer des réservations directes.",
    icon: Globe,
    href: "/services/social-content",
    category: "marketing-visibilite",
    features: [
      "Création de comptes dédiés (Instagram, Facebook)",
      "Production de contenu visuel professionnel",
      "Calendrier éditorial planifié",
      "Interactions avec la communauté",
    ],
    benefits: [
      "Construction d'une audience fidèle",
      "Génération de réservations directes",
      "Renforcement de l'image de marque",
      "Différenciation dans un marché concurrentiel",
    ],
    process: [
      {
        step: "Définition de stratégie",
        description:
          "Élaboration d'une ligne éditoriale cohérente avec votre positionnement",
      },
      {
        step: "Création de contenu",
        description: "Production de visuels et textes engageants",
      },
      {
        step: "Publication et engagement",
        description:
          "Gestion des publications et interactions avec la communauté",
      },
    ],
    relatedServices: [
      "Shooting photo professionnel",
      "Création de vidéo",
      "Branding & différenciation",
    ],
  },
  {
    title: "Campagnes emailing",
    description:
      "Conception et déploiement de campagnes emailing ciblées pour fidéliser vos anciens clients et stimuler les réservations récurrentes.",
    icon: Mail,
    href: "/services/email-campaigns",
    category: "marketing-visibilite",
    features: [
      "Constitution d'une base de contacts qualifiée",
      "Création d'emails professionnels et attractifs",
      "Segmentation et personnalisation des messages",
      "Analyse des performances (ouvertures, clics)",
    ],
    benefits: [
      "Fidélisation des clients satisfaits",
      "Augmentation des réservations directes",
      "Réduction de la dépendance aux plateformes",
      "Communication ciblée et personnalisée",
    ],
    process: [
      {
        step: "Construction de la base",
        description: "Collecte éthique et organisation des contacts clients",
      },
      {
        step: "Création de campagnes",
        description:
          "Conception d'emails engageants et conformes à la législation",
      },
      {
        step: "Analyse et optimisation",
        description: "Suivi des performances et amélioration continue",
      },
    ],
    relatedServices: [
      "Livret d'accueil",
      "Branding & différenciation",
      "Communication client",
    ],
  },
  {
    title: "Google Business & SEO local",
    description:
      "Création et optimisation de votre présence locale sur Google pour attirer des voyageurs recherchant un hébergement dans votre zone.",
    icon: Megaphone,
    href: "/services/google-business",
    category: "marketing-visibilite",
    features: [
      "Création et vérification de votre fiche Google",
      "Optimisation complète du profil",
      "Stratégie d'obtention d'avis positifs",
      "Intégration de photos et informations attrayantes",
    ],
    benefits: [
      "Visibilité dans les recherches locales sur Google",
      "Apparition sur Google Maps",
      "Renforcement de votre crédibilité via les avis",
      "Canal de réservation directe supplémentaire",
    ],
    process: [
      {
        step: "Création et vérification",
        description: "Mise en place et confirmation de votre profil Google",
      },
      {
        step: "Optimisation complète",
        description:
          "Configuration de tous les éléments pour maximiser l'impact",
      },
      {
        step: "Stratégie d'avis",
        description:
          "Mise en place d'un système pour collecter des avis positifs",
      },
    ],
    relatedServices: [
      "Optimisation SEO",
      "Branding & différenciation",
      "Photographie professionnelle",
    ],
  },
];

export const communicationClientServices: Service[] = [
  {
    title: "Messages automatisés",
    description:
      "Mise en place d'un système de communication automatisée pour assurer une expérience client fluide et personnalisée.",
    icon: MessageCircle,
    href: "/services/automated-messaging",
    category: "communication-client",
    features: [
      "Messages personnalisés pré et post-séjour",
      "Réponses automatiques aux demandes courantes",
      "Séquences de communication stratégiques",
      "Modèles optimisés pour la conversion",
    ],
    benefits: [
      "Temps de réponse immédiat (boost dans les algorithmes)",
      "Professionnalisme et constance dans la communication",
      "Libération de votre temps",
      "Augmentation de la satisfaction client",
    ],
    process: [
      {
        step: "Analyse des besoins",
        description:
          "Identification des points de contact critiques avec vos voyageurs",
      },
      {
        step: "Rédaction stratégique",
        description:
          "Création de messages efficaces pour chaque étape du parcours client",
      },
      {
        step: "Configuration et automatisation",
        description: "Mise en place technique et tests des séquences",
      },
    ],
    relatedServices: [
      "Livret d'accueil digital",
      "Réponses types",
      "Création d'annonce",
    ],
  },
  {
    title: "Livret d'accueil digital",
    description:
      "Création d'un guide interactif complet pour offrir une expérience exceptionnelle à vos voyageurs et maximiser les avis positifs.",
    icon: BookOpen,
    href: "/services/digital-guidebook",
    category: "communication-client",
    features: [
      "Design professionnel et personnalisé",
      "Instructions détaillées d'accès et d'utilisation",
      "Recommandations locales (restaurants, activités...)",
      "Accès multi-support (mobile, tablette, PDF)",
    ],
    benefits: [
      "Réduction significative des questions des voyageurs",
      "Valorisation de votre hébergement et de l'expérience offerte",
      "Promotion de l'économie locale et bonnes adresses",
      "Impact positif sur les évaluations clients",
    ],
    process: [
      {
        step: "Collecte d'informations",
        description:
          "Rassemblement des détails essentiels sur votre logement et sa région",
      },
      {
        step: "Conception et rédaction",
        description: "Création d'un guide ergonomique, informatif et attrayant",
      },
      {
        step: "Mise en ligne et partage",
        description:
          "Déploiement sur une plateforme accessible et envoi automatisé",
      },
    ],
    relatedServices: [
      "Messages automatisés",
      "Réponses types",
      "Création d'annonce",
    ],
  },
  {
    title: "Réponses types",
    description:
      "Préparation d'un ensemble de réponses professionnelles aux questions fréquentes pour une communication rapide et cohérente.",
    icon: MessageSquare,
    href: "/services/response-templates",
    category: "communication-client",
    features: [
      "Modèles pour les demandes pré-réservation",
      "Réponses aux questions fréquentes",
      "Templates pour la gestion des problèmes",
      "Scripts de demande d'avis",
    ],
    benefits: [
      "Rapidité de réponse aux voyageurs",
      "Cohérence du ton et de la qualité",
      "Gestion efficace des situations délicates",
      "Augmentation du taux de conversion",
    ],
    process: [
      {
        step: "Analyse des besoins",
        description: "Identification des scénarios de communication récurrents",
      },
      {
        step: "Rédaction professionnelle",
        description: "Création de réponses efficaces et personnalisables",
      },
      {
        step: "Organisation et formation",
        description: "Structuration des templates et conseils d'utilisation",
      },
    ],
    relatedServices: [
      "Messages automatisés",
      "Livret d'accueil",
      "Suivi des avis",
    ],
  },
];

export const brandingDifferenciationServices: Service[] = [
  {
    title: "Création de nom pour le logement",
    description:
      "Élaboration d'un nom mémorable et attractif qui distinguera votre bien et renforcera son identité sur le marché.",
    icon: Type,
    href: "/services/property-naming",
    category: "branding-differenciation",
    features: [
      "Recherche créative et stratégique",
      "Vérification de disponibilité",
      "Alignement avec votre positionnement",
      "Validation de l'impact marketing",
    ],
    benefits: [
      "Mémorabilité renforcée auprès des voyageurs",
      "Différenciation dans un marché saturé",
      "Base solide pour votre stratégie de marque",
      "Renforcement de l'identité de votre bien",
    ],
    process: [
      {
        step: "Exploration créative",
        description: "Séance de brainstorming et création de propositions",
      },
      {
        step: "Analyse et sélection",
        description: "Évaluation des options et choix du nom optimal",
      },
      {
        step: "Finalisation et intégration",
        description: "Adaptation du nom à vos supports de communication",
      },
    ],
    relatedServices: [
      "Création de logo",
      "Promesse marketing",
      "Fiche PDF professionnelle",
    ],
  },
  {
    title: "Création de logo",
    description:
      "Conception d'une identité visuelle professionnelle et unique pour renforcer l'image de marque de votre hébergement.",
    icon: Palette,
    href: "/services/logo-creation",
    category: "branding-differenciation",
    features: [
      "Design original et exclusif",
      "Plusieurs propositions créatives",
      "Adaptation multi-support",
      "Fichiers haute résolution",
    ],
    benefits: [
      "Image professionnelle et mémorable",
      "Cohérence visuelle sur tous vos supports",
      "Différenciation significative",
      "Perception haut de gamme",
    ],
    process: [
      {
        step: "Brief et analyse",
        description: "Compréhension de vos besoins et valeurs à transmettre",
      },
      {
        step: "Création graphique",
        description: "Élaboration de concepts visuels uniques",
      },
      {
        step: "Finalisation et livraison",
        description:
          "Ajustements et fourniture des fichiers dans tous les formats",
      },
    ],
    relatedServices: [
      "Création de nom",
      "Promesse marketing",
      "Fiche PDF professionnelle",
    ],
  },
  {
    title: "Promesse marketing & positionnement",
    description:
      "Définition claire de votre proposition de valeur unique pour vous démarquer de la concurrence et attirer votre clientèle idéale.",
    icon: Target,
    href: "/services/marketing-promise",
    category: "branding-differenciation",
    features: [
      "Analyse de votre unicité",
      "Formulation de votre promesse distinctive",
      "Définition de votre clientèle cible",
      "Stratégie de positionnement",
    ],
    benefits: [
      "Message clair et convaincant pour vos clients potentiels",
      "Attraction de la clientèle la plus adaptée",
      "Différenciation stratégique",
      "Augmentation de la valeur perçue",
    ],
    process: [
      {
        step: "Audit et analyse",
        description: "Évaluation de vos atouts, du marché et de la concurrence",
      },
      {
        step: "Définition stratégique",
        description:
          "Élaboration de votre positionnement et promesse distinctive",
      },
      {
        step: "Déploiement et intégration",
        description: "Application de votre promesse sur tous vos supports",
      },
    ],
    relatedServices: [
      "Création de nom",
      "Création de logo",
      "Analyse de la concurrence",
    ],
  },
  {
    title: "Fiche PDF professionnelle",
    description:
      "Création d'un document marketing de qualité professionnelle pour présenter votre logement aux partenaires et clients directs.",
    icon: FileText,
    href: "/services/professional-pdf",
    category: "branding-differenciation",
    features: [
      "Design élégant et personnalisé",
      "Mise en page professionnelle",
      "Présentation optimale des atouts",
      "Format adapté à l'impression et au digital",
    ],
    benefits: [
      "Outil de promotion polyvalent",
      "Image professionnelle renforcée",
      "Support pour les réservations directes",
      "Document partageable facilement",
    ],
    process: [
      {
        step: "Collecte de contenu",
        description:
          "Rassemblement des textes, photos et informations essentielles",
      },
      {
        step: "Design et mise en page",
        description: "Création graphique professionnelle et attrayante",
      },
      {
        step: "Finalisation et optimisation",
        description: "Ajustements finaux et livraison en différents formats",
      },
    ],
    relatedServices: [
      "Shooting photo professionnel",
      "Création de logo",
      "Promesse marketing",
    ],
  },
];

export const reportingSuiviServices: Service[] = [
  {
    title: "Rapport mensuel de performance",
    description:
      "Analyse détaillée et régulière des performances de votre hébergement avec indicateurs clés et recommandations d'optimisation.",
    icon: BarChart,
    href: "/services/monthly-report",
    category: "reporting-suivi",
    features: [
      "Suivi des KPIs essentiels",
      "Comparaison avec la période précédente",
      "Analyse de la concurrence",
      "Visualisations graphiques claires",
    ],
    benefits: [
      "Pilotage stratégique de votre activité",
      "Identification rapide des problèmes",
      "Opportunités d'optimisation continues",
      "Décisions basées sur des données concrètes",
    ],
    process: [
      {
        step: "Collecte des données",
        description: "Extraction des métriques de toutes les plateformes",
      },
      {
        step: "Analyse et interprétation",
        description: "Étude approfondie des tendances et résultats",
      },
      {
        step: "Présentation et recommandations",
        description: "Livraison d'un rapport clair avec actions concrètes",
      },
    ],
    relatedServices: [
      "Recommandations d'amélioration",
      "Suivi des avis",
      "Analyse de performance tarifaire",
    ],
  },
  {
    title: "Recommandations d'amélioration",
    description:
      "Conseils personnalisés et actionnables pour optimiser continuellement votre hébergement et augmenter votre rentabilité.",
    icon: Lightbulb,
    href: "/services/improvement-recommendations",
    category: "reporting-suivi",
    features: [
      "Analyse holistique de votre activité",
      "Identification des points d'amélioration",
      "Suggestions concrètes et applicables",
      "Priorisation des actions selon l'impact",
    ],
    benefits: [
      "Optimisation continue de vos performances",
      "Maintien de votre compétitivité",
      "Adaptation aux évolutions du marché",
      "Maximisation de votre ROI",
    ],
    process: [
      {
        step: "Audit complet",
        description:
          "Évaluation détaillée de tous les aspects de votre location",
      },
      {
        step: "Élaboration des recommandations",
        description: "Création d'un plan d'action personnalisé et priorisé",
      },
      {
        step: "Suivi d'implémentation",
        description: "Accompagnement dans la mise en œuvre des améliorations",
      },
    ],
    relatedServices: [
      "Rapport mensuel",
      "Suivi des avis",
      "Analyse de la concurrence",
    ],
  },
  {
    title: "Suivi des avis et stratégie 5 étoiles",
    description:
      "Gestion proactive de votre réputation en ligne et mise en place d'une stratégie pour maximiser les évaluations positives.",
    icon: Star,
    href: "/services/review-management",
    category: "reporting-suivi",
    features: [
      "Monitoring de tous vos avis clients",
      "Réponses professionnelles aux commentaires",
      "Sollicitation stratégique d'avis",
      "Gestion des situations délicates",
    ],
    benefits: [
      "Amélioration de votre note moyenne",
      "Augmentation de la confiance des voyageurs",
      "Meilleur positionnement dans les résultats",
      "Conversion des critiques en opportunités",
    ],
    process: [
      {
        step: "Mise en place du système",
        description: "Configuration des outils de suivi et alertes",
      },
      {
        step: "Élaboration stratégique",
        description: "Création de votre stratégie d'obtention d'avis positifs",
      },
      {
        step: "Gestion et optimisation continue",
        description: "Suivi régulier et ajustements selon les retours",
      },
    ],
    relatedServices: [
      "Messages automatisés",
      "Livret d'accueil",
      "Rapport mensuel",
    ],
  },
];

export const allServices = [
  ...featuredServices,
  ...particularServices,
  ...professionalServices,
  ...creationAnnonceServices,
  ...optimisationVisuelleServices,
  ...tarificationStrategieServices,
  ...marketingVisibiliteServices,
  ...communicationClientServices,
  ...brandingDifferenciationServices,
  ...reportingSuiviServices,
];
