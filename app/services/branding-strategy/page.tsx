import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding Agency Perth | Brand Strategy & Visual Identity',
  description: 'Mayi Digital Creative is Perth\'s branding agency for ambitious businesses. Brand strategy, visual identity, naming, and brand refresh services that position you for premium.',
  keywords: ['branding agency Perth', 'brand strategy Perth', 'visual identity design Perth', 'brand naming Australia', 'brand refresh Perth', 'logo design Perth', 'brand guidelines Australia', 'luxury branding agency Perth'],
  alternates: { canonical: 'https://mayicreative.com.au/services/branding-strategy' },
  openGraph: {
    title: 'Branding Agency Perth | Brand Strategy & Visual Identity',
    description: "Mayi Digital Creative is Perth's branding agency for ambitious businesses. Brand strategy, visual identity, naming, and brand refresh services that position you for premium.",
    url: 'https://mayicreative.com.au/services/branding-strategy',
    type: 'website',
  },
}

export default function BrandingPage() {
  return (
    <ServicePageTemplate
      badge="Branding Strategy"
      title="Brands built to"
      titleAccent="command attention."
      description="Your brand is your most valuable business asset. We help ambitious companies define who they are, what they stand for, and how to communicate it with clarity and confidence across every touchpoint."
      offerings={[
        { title: 'Brand Strategy', description: 'Brand positioning, messaging frameworks, value proposition, target audience definition, and competitive differentiation.' },
        { title: 'Visual Identity', description: 'Logo design, colour systems, typography, iconography, and brand guidelines. Everything needed to look consistently exceptional.' },
        { title: 'Brand Naming', description: 'Strategic naming for businesses, products, and campaigns. Names that are distinctive, memorable, and built to last.' },
        { title: 'Brand Refresh', description: 'Evolving an existing brand to stay relevant without losing equity. Strategic updates that respect heritage while modernising presentation.' },
        { title: 'Brand Guidelines', description: 'Comprehensive brand guidelines that ensure consistency across all internal and external applications of your brand.' },
        { title: 'Brand Audit', description: 'A thorough review of your current brand across all touchpoints, identifying gaps, inconsistencies, and opportunities for improvement.' },
      ]}
      subPages={[
        { title: 'Brand Strategy', href: '/services/branding-strategy/brand-strategy', description: 'Positioning, messaging, and competitive differentiation' },
        { title: 'Visual Identity', href: '/services/branding-strategy/visual-identity', description: 'Logo, colour, typography, and brand guidelines' },
        { title: 'Brand Naming', href: '/services/branding-strategy/brand-naming', description: 'Strategic naming for businesses and products' },
        { title: 'Brand Refresh', href: '/services/branding-strategy/brand-refresh', description: 'Modernising existing brands without losing equity' },
      ]}
      whyUs={[
        { title: 'Strategy-led design', description: 'We never design without strategy. Every visual decision is backed by research, positioning work, and a clear rationale.' },
        { title: 'Luxury brand experience', description: 'We\'ve worked with premium brands across luxury, hospitality, and retail. We understand what it takes to build a brand that commands premium pricing.' },
        { title: 'Full-service integration', description: 'Your brand work integrates directly with your website, social media, and marketing, all under one roof.' },
        { title: 'Presentation-ready deliverables', description: 'You receive properly packaged, professionally documented brand assets ready for use across every medium.' },
      ]}
    />
  )
}
