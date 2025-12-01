"use client";

import { useLanguage } from "@/lib/language-context";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function LocationSection() {
  const { t } = useLanguage();

  // Individual translations (matches your t() function signature)
  const location = {
    title: t("location.title"),
    description: t("location.description"),
    mapTitle: t("location.mapTitle"),
    visitTitle: t("location.visitTitle"),
    visitSubtitle: t("location.visitSubtitle"),

    salonName: t("location.salonName"),
    address: t("location.address"),
    phoneLabel: t("location.phoneLabel"),
    phoneDisplay: t("location.phoneDisplay"),
    phoneLink: t("location.phoneLink"),
    emailLabel: t("location.emailLabel"),
    emailDisplay: t("location.emailDisplay"),
    emailLink: t("location.emailLink"),
    hoursLabel: t("location.hoursLabel"),
    hours: t("location.hours"),
    bookButton: t("location.bookButton"),
  };

  // Real Google Maps embed from your coordinates (42.643291, 21.171146)
  const googleMapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.480312345678!2d21.171146!3d42.643291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDM4JzM1LjY1NCIgTiAyMcKwMTAnMTUuNjU0IiBF!5e0!3m2!1sen!2sus!4v1234567890";

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-warm-brown mb-4">
            {location.title}
          </h2>
          <p className="text-warm-brown/70 max-w-2xl mx-auto text-lg">
            {location.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Google Maps */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 lg:h-full min-h-96">
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={location.mapTitle}
              className="absolute inset-0"
            />
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-warm-brown/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gold/10 rounded-full">
                <MapPin className="h-8 w-8 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-warm-brown">
                  {location.visitTitle}
                </h3>
                <p className="text-warm-brown/60">{location.visitSubtitle}</p>
              </div>
            </div>

            <div className="space-y-6 text-warm-brown/80">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{location.salonName}</p>
                  <p dangerouslySetInnerHTML={{ __html: location.address }} />
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{location.phoneLabel}</p>
                  <a href={location.phoneLink} className="hover:text-gold transition">
                    {location.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{location.emailLabel}</p>
                  <a href={location.emailLink} className="hover:text-gold transition">
                    {location.emailDisplay}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{location.hoursLabel}</p>
                  <p dangerouslySetInnerHTML={{ __html: location.hours }} />
                </div>
              </div>
            </div>

            {/* Book Button */}
            <a
              href="#contact"
              className="mt-8 block w-full text-center py-4 bg-gold text-cream font-medium rounded-xl hover:bg-black hover:text-white transition shadow-lg"
            >
              {location.bookButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}