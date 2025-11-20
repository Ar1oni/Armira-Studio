"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-display font-bold text-primary">
          Armira Studio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#services" className="text-foreground hover:text-primary transition-colors">
            {t("nav.services")}
          </Link>
          <Link href="#gallery" className="text-foreground hover:text-primary transition-colors">
            {t("nav.gallery")}
          </Link>
          <Link
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-all"
          >
            {t("nav.contact")}
          </Link>

          <div className="flex gap-2 ml-4 pl-4 border-l border-border">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                language === "en" ? "bg-primary text-primary-foreground" : "text-foreground hover:text-primary"
              }`}
            >
              ENG
            </button>
            <button
              onClick={() => setLanguage("alb")}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                language === "alb" ? "bg-primary text-primary-foreground" : "text-foreground hover:text-primary"
              }`}
            >
              ALB
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-cream">
          <div className="px-4 py-4 space-y-4">
            <Link href="#services" className="block text-foreground hover:text-primary">
              {t("nav.services")}
            </Link>
            <Link href="#gallery" className="block text-foreground hover:text-primary">
              {t("nav.gallery")}
            </Link>
            <Link
              href="#contact"
              className="block bg-primary text-primary-foreground px-4 py-2 rounded-full text-center"
            >
              {t("nav.contact")}
            </Link>

            <div className="flex gap-2 pt-4 border-t border-border">
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 px-3 py-2 rounded-full font-semibold transition-all ${
                  language === "en" ? "bg-primary text-primary-foreground" : "text-foreground hover:text-primary"
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage("alb")}
                className={`flex-1 px-3 py-2 rounded-full font-semibold transition-all ${
                  language === "alb" ? "bg-primary text-primary-foreground" : "text-foreground hover:text-primary"
                }`}
              >
                ALB
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
