import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/animations/CustomCursor'
import PageTransition from '@/components/animations/PageTransition'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: {
    default: 'Mayi Digital Creative | Full-Service Digital Marketing Agency Perth',
    template: '%s | Mayi Digital Creative',
  },
  description:
    'Mayi Digital Creative is a full-service digital marketing agency based in Perth, Australia. We specialise in SEO, paid media, social media marketing, branding, and web design.',
  keywords: [
    'digital marketing agency Perth',
    'SEO agency Perth',
    'paid media agency',
    'social media marketing Perth',
    'branding agency Perth',
    'web design Perth',
    'full service digital marketing',
  ],
  authors: [{ name: 'Mayi Digital Creative' }],
  creator: 'Mayi Digital Creative',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://mayicreative.com.au',
    siteName: 'Mayi Digital Creative',
    title: 'Mayi Digital Creative | Full-Service Digital Marketing Agency Perth',
    description:
      'We build brands that dominate. Full-service digital marketing agency in Perth, Australia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayi Digital Creative | Full-Service Digital Marketing Agency Perth',
    description: 'We build brands that dominate. Full-service digital marketing agency in Perth, Australia.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-bg text-text-primary font-inter cursor-none">
        <div style={{ width: '100%', maxWidth: '100vw', overflowX: 'clip', position: 'relative' }}>
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
