"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-charcoal text-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Armira Studio</h3>
            <p className="text-cream/80">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-4">{t("footer.quickLinks")}</h4>
            <div className="space-y-2">
              <Link href="#services" className="block text-cream/80 hover:text-cream transition-colors">
                {t("nav.services")}
              </Link>
              <Link href="#gallery" className="block text-cream/80 hover:text-cream transition-colors">
                {t("nav.gallery")}
              </Link>
              <Link href="#contact" className="block text-cream/80 hover:text-cream transition-colors">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-4">{t("footer.followUs")}</h4>
            <div className="space-y-2">
              <a href="https://instagram.com" className="block text-cream/80 hover:text-cream transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com" className="block text-cream/80 hover:text-cream transition-colors">
                Facebook
              </a>
              <a href="https://pinterest.com" className="block text-cream/80 hover:text-cream transition-colors">
                Pinterest
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 text-center text-cream/60">
          <p>
            &copy; {new Date().getFullYear()} Armira Studio. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
