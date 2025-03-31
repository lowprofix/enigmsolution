import { Metadata } from "next";
import { ServicesHero } from "@/components/services-sections/ServicesHero";
import { ServicesList } from "@/components/services-sections/ServicesList";
import { Testimonials } from "@/components/services-sections/Testimonials";
import { ServicesFAQ } from "@/components/services-sections/ServicesFAQ";
import { pricingCategories } from "@/data/pricing";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Services | EnigmSolution",
  description:
    "Découvrez notre gamme complète de services immobiliers : gestion locative, mise en valeur, photographie, optimisation de location saisonnière et plus encore.",
  openGraph: {
    title: "Nos Services | EnigmSolution",
    description:
      "Des solutions immobilières complètes et sur mesure pour valoriser et gérer votre patrimoine.",
    images: [{ url: "/images/IMG_6305.JPG", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />

      {/* Courte introduction */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Une approche globale pour vos besoins immobiliers
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Chez EnigmSolution, nous prenons soin de votre bien comme s'il
              était le nôtre. Découvrez notre gamme complète de services conçus
              pour maximiser la valeur et le potentiel de votre propriété.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {pricingCategories.slice(0, 3).map((category) => (
                <div
                  key={category.id}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-muted hover:border-primary/50 transition-colors"
                >
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description.substring(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liste des services */}
      <div id="services-list">
        <ServicesList />
      </div>

      {/* Avantages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Pourquoi choisir EnigmSolution ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nous nous engageons à fournir un service d'excellence qui dépasse
              vos attentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-muted">
              <h3 className="text-xl font-semibold mb-4">Expertise locale</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Connaissance approfondie du marché immobilier local
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Réseau de partenaires qualifiés</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Services adaptés aux spécificités régionales</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-muted">
              <h3 className="text-xl font-semibold mb-4">
                Service personnalisé
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Solutions sur mesure selon vos besoins spécifiques
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Un interlocuteur dédié pour chaque client</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Approche flexible et adaptative</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-muted">
              <h3 className="text-xl font-semibold mb-4">Résultats prouvés</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Augmentation moyenne des revenus de 15-25%</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Taux d'occupation optimisé</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Avis clients exceptionnels (4.8/5 de satisfaction)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <Testimonials />

      {/* FAQ */}
      <ServicesFAQ />

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à transformer votre expérience immobilière ?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et
              découvrir comment nous pouvons vous aider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-all inline-flex items-center justify-center"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/appointments"
                className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/20 transition-all inline-flex items-center justify-center"
              >
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
