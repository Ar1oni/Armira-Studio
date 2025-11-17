'use client'

const galleryImages = [
  {
    id: 1,
    query: 'natural-eyebrow-before-after'
  },
  {
    id: 2,
    query: 'bold-eyebrow-design'
  },
  {
    id: 3,
    query: 'microbladed-eyebrows-natural'
  },
  {
    id: 4,
    query: 'professional-eyebrow-shaping'
  },
  {
    id: 5,
    query: 'eyebrow-transformation-close-up'
  },
  {
    id: 6,
    query: 'beautiful-brow-makeup-application'
  }
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See our latest brow transformations and happy clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={`/.jpg?height=300&width=300&query=${image.query}`}
                alt="Gallery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
