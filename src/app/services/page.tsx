import { Metadata } from "next";
import { ServicesHero } from "@/components/services-sections/ServicesHero";
import { ServicesList } from "@/components/services-sections/ServicesList";

export const metadata: Metadata = {
  title: "Nos Services | EnigmSolution",
  description:
    "Découvrez notre gamme complète de services immobiliers : gestion locative, mise en valeur, photographie et plus encore.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServicesList />
    </main>
  );
}
