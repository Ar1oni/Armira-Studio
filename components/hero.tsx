'use client'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground text-balance">
              Elevate Your Look with <span className="text-primary">Perfect Brows</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Expert eyebrow design and shaping. Transform your appearance with precision artistry and personalized styling.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all inline-block text-center">
              Book Now
            </a>
            <a href="#gallery" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all inline-block text-center">
              View Gallery
            </a>
          </div>

          <div className="flex gap-8 pt-4">
            <div>
              <p className="text-3xl font-display font-bold text-primary">500+</p>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-primary">10+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right: Image Placeholder */}
        <div className="relative h-96 lg:h-full min-h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
            <img
              src="/beautiful-eyebrow-close-up-professional-makeup.jpg"
              alt="Professional eyebrow design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
