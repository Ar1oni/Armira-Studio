import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-display'
})

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: 'Armira Studio',
  description: 'Discover the art of perfect brows at Armira Studio. Expert eyebrow shaping, microblading, and brow design services.',
  generator: 'v0.app',
icons: {
  icon: [
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
}

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} font-body antialiased bg-cream text-charcoal`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
