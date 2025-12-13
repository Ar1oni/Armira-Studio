"use client"

import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// 🔥 Updated categories + all videos
const serviceGalleries = {
  browLamination: [
    { id: 1, src: "/lamination1.mp4" },
    { id: 2, src: "/lamination2.mp4" },
  ],

  microblading: [
    { id: 5, src: "/micro1.mp4" },
    { id: 6, src: "/micro2.mp4" },
    { id: 7, src: "/micro3.mp4" },
    { id: 8, src: "/micro4.mp4" },
    { id: 9, src: "/micro5.mp4" },
    { id: 10, src: "/micro6.mp4" },
    { id: 11, src: "/micro7.mp4" },
  ],

  phiShading: [
    { id: 12, src: "/phi1.mp4" },
    { id: 13, src: "/phi2.mp4" },
    { id: 14, src: "/phi3.mp4" },
    { id: 15, src: "/phi4.mp4" },
    { id: 16, src: "/phi5.mp4" },
    { id: 17, src: "/phi6.mp4" },
  ],
}

type ServiceKey = keyof typeof serviceGalleries

// ✅ Prices shown under the tabs (edit these)
const servicePrices: Record<ServiceKey, { price: string; note?: string }> = {
  browLamination: { price: "€30", note: "" },
  microblading: { price: "€150", note: "" },
  phiShading: { price: "€200", note: "" },
}

export function Gallery() {
  const { t } = useLanguage()

  const [activeService, setActiveService] = useState<ServiceKey>("browLamination")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentVideos = serviceGalleries[activeService]
  const activePrice = servicePrices[activeService]

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % currentVideos.length)
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + currentVideos.length) % currentVideos.length)
      }
    },
    [lightboxOpen, currentVideos.length]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % currentVideos.length)
  }

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + currentVideos.length) % currentVideos.length)
  }

  // Tab labels
  const serviceLabels: Record<ServiceKey, string> = {
    browLamination: "Brow Lamination",
    microblading: "Microblading",
    phiShading: "Phi Shading",
  }

  const fewVideos = currentVideos.length <= 2

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("gallery.description")}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
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

        {/* ✅ Price (under tabs, above videos) */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-background/70 border border-border px-4 py-2 shadow-sm">
            <span className="text-sm text-muted-foreground">
              {activePrice?.note ? `${activePrice.note} ` : ""}
            </span>
            <span className="text-base font-semibold text-foreground">{activePrice.price}</span>
          </div>
        </div>

        {/* Video Grid */}
        {fewVideos ? (
          <div className="flex justify-center gap-4">
            {currentVideos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => openLightbox(index)}
                className="relative w-full max-w-sm aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">{t("gallery.clickToView")}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentVideos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => openLightbox(index)}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">{t("gallery.clickToView")}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevVideo()
            }}
            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Video */}
          <div className="relative max-w-5xl max-h-[85vh] mx-16" onClick={(e) => e.stopPropagation()}>
            <video
              src={currentVideos[currentIndex].src}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              controls
              autoPlay
              muted
              playsInline
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                {currentIndex + 1} / {currentVideos.length}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextVideo()
            }}
            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[80vw] overflow-x-auto p-2">
            {currentVideos.map((video, index) => (
              <button
                key={video.id}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentIndex(index)
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentIndex
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-black scale-110"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <video src={video.src} className="w-full h-full object-cover" muted loop autoPlay playsInline />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
