"use client"

import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// When your ArmiraStudioPictures folder syncs, replace these placeholder paths with actual image paths
const serviceGalleries = {
  browDesign: [
    { id: 1, src: "/brow-design-result-1.jpg" },
    { id: 2, src: "/brow-design-result-2.jpg" },
    { id: 3, src: "/brow-design-result-3.jpg" },
    { id: 4, src: "/brow-design-result-4.jpg" },
  ],
  microblading: [
    { id: 5, src: "/microblading-result-1.jpg" },
    { id: 6, src: "/microblading-result-2.jpg" },
    { id: 7, src: "/microblading-result-3.jpg" },
    { id: 8, src: "/microblading-result-4.jpg" },
  ],
  browTinting: [
    { id: 9, src: "/brow-tinting-result-1.jpg" },
    { id: 10, src: "/brow-tinting-result-2.jpg" },
    { id: 11, src: "/brow-tinting-result-3.jpg" },
    { id: 12, src: "/brow-tinting-result-4.jpg" },
  ],
  browThreading: [
    { id: 13, src: "/brow-threading-result-1.jpg" },
    { id: 14, src: "/brow-threading-result-2.jpg" },
    { id: 15, src: "/brow-threading-result-3.jpg" },
    { id: 16, src: "/brow-threading-result-4.jpg" },
  ],
}

type ServiceKey = keyof typeof serviceGalleries

export function Gallery() {
  const { t } = useLanguage()
  const [activeService, setActiveService] = useState<ServiceKey>("browDesign")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentImages = serviceGalleries[activeService]

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowRight") setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
      if (e.key === "ArrowLeft")
        setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
    },
    [lightboxOpen, currentImages.length],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  const serviceLabels: Record<ServiceKey, string> = {
    browDesign: t("gallery.tabs.browDesign"),
    microblading: t("gallery.tabs.microblading"),
    browTinting: t("gallery.tabs.browTinting"),
    browThreading: t("gallery.tabs.browThreading"),
  }

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">{t("gallery.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("gallery.description")}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(Object.keys(serviceGalleries) as ServiceKey[]).map((service) => (
            <button
              key={service}
              onClick={() => setActiveService(service)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeService === service
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {serviceLabels[service]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={`${serviceLabels[activeService]} - ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">{t("gallery.clickToView")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Image container */}
          <div className="relative max-w-5xl max-h-[85vh] mx-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImages[currentImageIndex].src || "/placeholder.svg"}
              alt={`${serviceLabels[activeService]} - ${currentImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                {currentImageIndex + 1} / {currentImages.length}
              </span>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[80vw] overflow-x-auto p-2">
            {currentImages.map((image, index) => (
              <button
                key={image.id}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex(index)
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentImageIndex
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-black scale-110"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <img src={image.src || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
