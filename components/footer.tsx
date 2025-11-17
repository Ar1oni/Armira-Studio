'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Armira Studio</h3>
            <p className="text-cream/80">
              Elevating brows with precision artistry and personalized styling since 2014.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-primary mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#services" className="block text-cream/80 hover:text-cream transition-colors">
                Services
              </Link>
              <Link href="#gallery" className="block text-cream/80 hover:text-cream transition-colors">
                Gallery
              </Link>
              <Link href="#contact" className="block text-cream/80 hover:text-cream transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-4">Follow Us</h4>
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
          <p>&copy; {new Date().getFullYear()} Armira Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
