"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function LocationSection() {
  // Replace this with your real Google Maps embed link once you send it
  const googleMapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.914412345678!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_PLACE_NAME!5e0!3m2!1sen!2s!4v1234567890"

  return (
    <section id="location" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-warm-brown mb-4">
            Find Us
          </h2>
          <p className="text-warm-brown/70 max-w-2xl mx-auto text-lg">
            We are waiting for you in the heart of the city — come and discover the art of perfect brows
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Google Maps */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 lg:h-full min-h-96">
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our studio location"
              className="absolute inset-0"
            ></iframe>
          </div>

          {/* Contact & Address Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-warm-brown/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gold/10 rounded-full">
                <MapPin className="h-8 w-8 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-warm-brown">Visit Our Studio</h3>
                <p className="text-warm-brown/60">We’re easy to find</p>
              </div>
            </div>

            <div className="space-y-6 text-warm-brown/80">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Your Salon Name</p>
                  <p>123 Beauty Street, Floor 2<br />10000 City, Country</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-gold transition">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:hello@yoursalon.com" className="hover:text-gold transition">
                    hello@yoursalon.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Opening Hours</p>
                  <p>Mon–Fri: 9:00 – 19:00<br />Sat: 10:00 – 17:00<br />Sun: Closed</p>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full py-4 bg-gold text-cream font-medium rounded-xl hover:bg-amber-600 transition shadow-lg">
              Book Your Visit Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}