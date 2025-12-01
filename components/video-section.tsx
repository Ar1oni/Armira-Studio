"use client"
import { useLanguage } from "@/lib/language-context"
import { Play, Maximize2 } from "lucide-react"
import { useRef, useState } from "react"

export function VideoSection() {
  const { t } = useLanguage()

  const videos = [
    { id: 1, src: "brow-design-demo.mp4", poster: "/videos/poster-1.jpg" },
    { id: 2, src: "microblading-process.mp4", poster: "/videos/poster-2.jpg" },
    { id: 3, src: "training-day.mp4", poster: "/videos/poster-3.jpg" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            {t("videos.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("videos.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} src={video.src} poster={video.poster} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoCard({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = async () => {
    if (!videoRef.current) return

    try {
      if (videoRef.current.paused) {
        await videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    } catch (err) {
      console.error("Play failed:", err)
    }
  }

  const handleFullscreen = () => {
    const video = videoRef.current
    if (!video) return

    if (video.requestFullscreen) video.requestFullscreen()
    else if ((video as any).webkitEnterFullscreen) (video as any).webkitEnterFullscreen()
    else if ((video as any).webkitRequestFullscreen) (video as any).webkitRequestFullscreen()
    else if ((video as any).msRequestFullscreen) (video as any).msRequestFullscreen()
  }

  return (
    <div
      className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-black cursor-pointer"
      onClick={handlePlayPause}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        controls={isPlaying}
        controlsList="nodownload"
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Play Overlay – only shown when paused */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-8 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-20 h-20 text-white" fill="white" />
          </div>
        </div>
      )}

      {/* Fullscreen button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleFullscreen()
        }}
        className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 p-3 rounded-full transition opacity-0 group-hover:opacity-100"
      >
        <Maximize2 className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}