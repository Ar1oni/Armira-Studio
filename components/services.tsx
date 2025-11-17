'use client'

const services = [
  {
    id: 1,
    icon: '✨',
    title: 'Brow Design',
    description: 'Personalized eyebrow design tailored to your face shape and features. We analyze your unique traits to create the perfect arch and definition.'
  },
  {
    id: 2,
    icon: '🎨',
    title: 'Microblading',
    description: 'Semi-permanent eyebrow enhancement for perfectly defined brows. Creates a natural, hair-like appearance that lasts 18-24 months.'
  },
  {
    id: 3,
    icon: '💄',
    title: 'Brow Tinting',
    description: 'Professional eyebrow tinting to enhance definition and depth. Choose from our curated palette of shades to complement your coloring.'
  },
  {
    id: 4,
    icon: '✂️',
    title: 'Brow Threading',
    description: 'Precision hair removal using the traditional thread technique. Painless removal of fine hair for clean, defined brows.'
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From shaping to microblading, we offer comprehensive brow solutions tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 border border-border rounded-xl hover:shadow-lg transition-all group"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <a href="#contact" className="mt-4 inline-block text-primary font-semibold hover:text-secondary transition-colors">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
