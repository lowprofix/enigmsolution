"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  service: string;
  imageUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Propriétaire",
    content:
      "Grâce à EnigmSolution, j'ai pu augmenter mes revenus locatifs de plus de 20%. Leur service d'optimisation BnB est vraiment exceptionnel et leur équipe est toujours disponible pour répondre à mes questions.",
    rating: 5,
    service: "Optimisation BnB",
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Investisseur immobilier",
    content:
      "Je gère plusieurs biens et le service de conciergerie au pourcentage d'EnigmSolution est exactement ce qu'il me fallait. Une tranquillité d'esprit totale et des résultats financiers au-delà de mes attentes.",
    rating: 5,
    service: "Conciergerie au pourcentage",
  },
  {
    id: 3,
    name: "Émilie Bernard",
    role: "Propriétaire saisonnier",
    content:
      "La mise en valeur immobilière réalisée par l'équipe d'EnigmSolution a transformé mon appartement. Les réservations ont augmenté instantanément et les retours des voyageurs sont excellents.",
    rating: 4,
    service: "Mise en valeur immobilière",
  },
  {
    id: 4,
    name: "Laurent Petit",
    role: "Propriétaire Airbnb",
    content:
      "Le service photo et vidéo est tout simplement bluffant. La qualité des images a fait toute la différence sur mon annonce. Je recommande vivement !",
    rating: 5,
    service: "Photographie & Vidéo",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les expériences de nos clients satisfaits avec nos
            services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-0 opacity-10">
            <Quote className="h-24 w-24 text-primary" />
          </div>

          {/* Témoignages */}
          <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-8 md:p-12 shadow-md">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {Array.from({ length: testimonials[activeIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  )
                )}
              </div>

              <blockquote className="text-lg md:text-xl italic mb-6">
                "{testimonials[activeIndex].content}"
              </blockquote>

              <div className="flex flex-col items-center">
                {testimonials[activeIndex].imageUrl ? (
                  <img
                    src={testimonials[activeIndex].imageUrl}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full mb-3 object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-primary font-semibold text-lg">
                      {testimonials[activeIndex].name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role} • Service:{" "}
                    {testimonials[activeIndex].service}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button
                onClick={prevTestimonial}
                className="bg-background/80 dark:bg-gray-700/80 p-2 rounded-full shadow-sm hover:bg-background dark:hover:bg-gray-700"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button
                onClick={nextTestimonial}
                className="bg-background/80 dark:bg-gray-700/80 p-2 rounded-full shadow-sm hover:bg-background dark:hover:bg-gray-700"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Indicateurs */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === activeIndex
                      ? "bg-primary"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Voir témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
