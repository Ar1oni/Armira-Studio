"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function Services() {
  const { language, t } = useLanguage();
  const services = translations[language].services.services;

const icons = ["🎨", "✒️", "🪄", "🧵", "🖌️", "✨"];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service: any, index: number) => (
            <div
              key={index}
              className="p-8 border border-border rounded-xl hover:shadow-lg transition-all group"
            >
              <div className="text-5xl mb-4">{icons[index]}</div>

              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-4 inline-block text-primary font-semibold hover:text-secondary transition-colors"
              >
                {t("services.learnMore")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
