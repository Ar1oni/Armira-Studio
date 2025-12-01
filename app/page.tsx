"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Courses } from "@/components/courses"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LocationSection } from "@/components/locationSection"
import { VideoSection } from "@/components/video-section"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-cream">
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <VideoSection />
        <Courses />
        <ContactSection />
        <LocationSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
