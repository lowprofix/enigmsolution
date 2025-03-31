"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Comment fonctionne votre service de conciergerie ?",
    answer:
      "Notre service de conciergerie est disponible en deux formats : au forfait ou au pourcentage. Le forfait propose un tarif fixe mensualisé avec des services prédéfinis, tandis que la formule au pourcentage est basée sur une commission des revenus générés, alignant ainsi nos intérêts avec les vôtres. Dans les deux cas, nous gérons intégralement les arrivées, départs, communication avec les voyageurs et maintenance de votre bien.",
    category: "conciergerie",
  },
  {
    question: "Quels sont les avantages d'un shooting photo professionnel ?",
    answer:
      "Un shooting photo professionnel permet d'augmenter significativement l'attractivité de votre annonce. Nos études montrent une augmentation moyenne de 25% du taux de clics et de 15% du taux de conversion avec des photos professionnelles. Nous utilisons des techniques d'éclairage avancées, des angles optimaux et une mise en scène soignée pour mettre en valeur les atouts de votre bien.",
    category: "visuel",
  },
  {
    question: "Comment calculez-vous les tarifs dynamiques pour une location ?",
    answer:
      "Notre système de tarification dynamique analyse plusieurs facteurs : la saisonnalité, les événements locaux, le taux d'occupation des biens similaires, les tendances du marché et l'historique de vos réservations. Nous ajustons automatiquement les prix à la hausse en période de forte demande et proposons des tarifs plus compétitifs en basse saison pour optimiser votre taux d'occupation et vos revenus globaux.",
    category: "pricing",
  },
  {
    question:
      "Quelle est la différence entre les différents forfaits de services ?",
    answer:
      "Nos forfaits varient selon le niveau de service et d'accompagnement. Les formules essentielles offrent les services de base nécessaires au bon fonctionnement de votre location. Les forfaits premium incluent des services additionnels comme la photographie professionnelle, l'optimisation d'annonce et un suivi personnalisé. Les formules exclusives ajoutent des prestations haut de gamme comme la conciergerie 24/7, l'optimisation continue des revenus et des rapports détaillés hebdomadaires.",
  },
  {
    question: "Combien de temps faut-il pour mettre en place vos services ?",
    answer:
      "Le délai de mise en place varie selon le service choisi. Pour une simple optimisation d'annonce, comptez 3 à 5 jours. Pour un service complet incluant shooting photo, création d'annonce et mise en place de conciergerie, prévoyez environ 7 à 10 jours. Pour les projets plus complexes ou nécessitant des aménagements, nous établissons un calendrier personnalisé lors de notre premier rendez-vous.",
  },
  {
    question: "Puis-je choisir uniquement certains services à la carte ?",
    answer:
      "Absolument ! Nous proposons tous nos services à la carte pour répondre précisément à vos besoins. Que vous souhaitiez uniquement un shooting photo, une optimisation de votre annonce existante ou une analyse tarifaire, nous pouvons vous accompagner de manière ponctuelle. Nous proposons également des forfaits qui combinent plusieurs services pour un meilleur rapport qualité-prix.",
  },
  {
    question: "Comment gérez-vous les urgences et les problèmes techniques ?",
    answer:
      "Notre équipe de conciergerie est disponible 7j/7 pour les urgences. Nous disposons d'un réseau d'artisans et de techniciens qualifiés pouvant intervenir rapidement. Pour les clients bénéficiant de nos forfaits premium, nous proposons un service d'intervention prioritaire. Chaque intervention est documentée et vous êtes immédiatement informé des solutions mises en œuvre.",
    category: "conciergerie",
  },
  {
    question:
      "Quels résultats puis-je attendre de vos services d'optimisation ?",
    answer:
      "Nos clients constatent en moyenne une augmentation de 15 à 25% de leurs revenus après l'implémentation de nos services d'optimisation. Cela inclut une amélioration du positionnement dans les résultats de recherche, un taux d'occupation plus élevé et la possibilité d'appliquer des tarifs plus avantageux. Les résultats varient selon la situation initiale, l'emplacement et le type de bien.",
  },
];

export const ServicesFAQ = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-lg text-muted-foreground">
            Vous avez des questions sur nos services ? Voici les réponses aux
            interrogations les plus courantes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-muted rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground">
              Vous avez d'autres questions ? N'hésitez pas à nous contacter.
            </p>
            <a
              href="/contact"
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center mt-2"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
