import HeroSection from '@/components/home/HeroSection'
import TickerBand from '@/components/home/TickerBand'
import ServicesGrid from '@/components/home/ServicesGrid'
import SocialProof from '@/components/home/SocialProof'
import ProcessSection from '@/components/home/ProcessSection'
import BlogPreview from '@/components/home/BlogPreview'
import CTASection from '@/components/home/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mayi Digital Creative | Full-Service Digital Marketing Agency Perth',
  description: "Mayi Digital Creative is Perth's full-service digital marketing agency. We specialise in SEO, paid media, social media, branding, and web design. We build brands that dominate.",
  keywords: ['digital marketing agency Perth', 'full-service digital marketing Australia', 'SEO agency Perth', 'paid media Perth', 'social media marketing Perth', 'branding agency Perth', 'web design Perth WA'],
  alternates: {
    canonical: 'https://mayicreative.com.au',
  },
  openGraph: {
    title: 'Mayi Digital Creative | Full-Service Digital Marketing Agency Perth',
    description: "Perth's full-service digital marketing agency. SEO, paid media, social media, branding, and web design. We build brands that dominate.",
    url: 'https://mayicreative.com.au',
    type: 'website',
  },
}

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mayi Digital Creative',
    url: 'https://mayicreative.com.au',
    email: 'hello@mayicreative.com.au',
    description: "Perth's full-service digital marketing agency. SEO, paid media, social media, branding, and web design.",
    telephone: '+61420371048',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '152 St Georges Terrace',
      addressLocality: 'Perth',
      addressRegion: 'WA',
      postalCode: '6000',
      addressCountry: 'AU',
    },
    areaServed: ['Australia'],
    sameAs: [],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      <TickerBand />
      <ServicesGrid />
      <SocialProof />
      <ProcessSection />
      <BlogPreview />
      <CTASection />
    </>
  )
}
