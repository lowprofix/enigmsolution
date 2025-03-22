"use client";

import { testimonials } from "../../data/testimonials";

export const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de propriétaires qui nous font confiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-4 sm:p-6 rounded-lg shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-full mr-3 sm:mr-4"></div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-card-foreground">
                &quot;{testimonial.content}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
