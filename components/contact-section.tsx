"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "eyebrow-design",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", service: "eyebrow-design", message: "" })
      setIsSubmitting(false)

      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("contact.description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">📍 {t("contact.location")}</h3>
              <p className="text-muted-foreground">{t("contact.locationText")}</p>
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">📱 {t("contact.phone")}</h3>
              <a href="tel:+1234567890" className="text-primary hover:text-secondary transition-colors">
                (123) 456-7890
              </a>
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">📧 {t("contact.email")}</h3>
              <a href="mailto:hello@armira.studio" className="text-primary hover:text-secondary transition-colors">
                hello@armira.studio
              </a>
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-foreground mb-4">⏰ {t("contact.hours")}</h3>
              <div className="space-y-1 text-muted-foreground text-sm">
                <p>{t("contact.mondayFriday")}</p>
                <p>{t("contact.saturday")}</p>
                <p>{t("contact.sunday")}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6 bg-muted p-8 rounded-xl">
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                ✓ {t("contact.success")}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                {t("contact.name")}
                {t("contact.required")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
                placeholder={t("contact.namePlaceholder")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  {t("contact.emailLabel")}
                  {t("contact.required")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  {t("contact.phoneLabel")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
                  placeholder={t("contact.phonePlaceholder")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                {t("contact.service")}
                {t("contact.required")}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
              >
                <option value="eyebrow-design">{t("contact.services.eyebrow-design")}</option>
                <option value="microblading">{t("contact.services.microblading")}</option>
                <option value="brow-tinting">{t("contact.services.brow-tinting")}</option>
                <option value="brow-threading">{t("contact.services.brow-threading")}</option>
                <option value="consultation">{t("contact.services.consultation")}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground resize-none"
                placeholder={t("contact.messagePlaceholder")}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-all"
            >
              {isSubmitting ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
