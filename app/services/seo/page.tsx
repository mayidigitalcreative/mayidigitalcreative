import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Agency Perth | Search Engine Optimisation Services',
  description: 'Mayi Digital Creative is Perth\'s leading SEO agency. Technical SEO, local SEO, eCommerce SEO, and enterprise SEO services that drive sustainable organic growth.',
  keywords: ['SEO agency Perth', 'search engine optimisation Perth', 'technical SEO Australia', 'local SEO Perth', 'eCommerce SEO', 'enterprise SEO Australia', 'organic traffic growth Perth', 'Google rankings Perth'],
  alternates: { canonical: 'https://mayicreative.com.au/services/seo' },
  openGraph: {
    title: 'SEO Agency Perth | Search Engine Optimisation Services',
    description: "Mayi Digital Creative is Perth's leading SEO agency. Technical SEO, local SEO, eCommerce SEO, and enterprise SEO services that drive sustainable organic growth.",
    url: 'https://mayicreative.com.au/services/seo',
    type: 'website',
  },
}

export default function SEOPage() {
  return (
    <ServicePageTemplate
      badge="SEO Services"
      title="SEO that drives"
      titleAccent="real organic growth."
      description="We build search engine optimisation strategies that compound over time, driving qualified traffic, increasing domain authority, and generating leads that don't disappear when you pause your ad spend."
      offerings={[
        { title: 'Technical SEO', description: 'Site audits, Core Web Vitals, crawlability fixes, structured data, page speed optimisation, and everything that makes Google love your site.' },
        { title: 'On-Page Optimisation', description: 'Title tags, meta descriptions, heading structures, internal linking, and content optimisation aligned to high-intent keywords.' },
        { title: 'Link Building', description: 'High-authority backlink acquisition through editorial outreach, digital PR, and content-led link building strategies.' },
        { title: 'Content Strategy', description: 'Keyword research, content gap analysis, and a publishing calendar designed to build topical authority in your niche.' },
        { title: 'Local SEO', description: 'Google Business Profile optimisation, local citation building, and map pack ranking strategies for location-based businesses.' },
        { title: 'Monthly Reporting', description: 'Clear, jargon-free reports showing rankings, traffic, conversions, and ROI, delivered every month without fail.' },
      ]}
      subPages={[
        { title: 'Technical SEO', href: '/services/seo/technical-seo', description: 'Site health, crawlability, Core Web Vitals, and structured data' },
        { title: 'Local SEO', href: '/services/seo/local-seo', description: 'Google Business Profile, citations, and map pack rankings' },
        { title: 'eCommerce SEO', href: '/services/seo/ecommerce-seo', description: 'Product pages, categories, and shopping SEO' },
        { title: 'Enterprise SEO', href: '/services/seo/enterprise-seo', description: 'Large-scale SEO for complex, high-volume websites' },
        { title: 'SEO Audit', href: '/services/seo/seo-audit', description: 'Full technical and content audit with a prioritised fix roadmap' },
        { title: 'Programmatic SEO', href: '/services/seo/programmatic-seo', description: 'Scale to thousands of pages and capture long-tail search demand' },
        { title: 'AI SEO', href: '/services/seo/ai-seo', description: 'Optimise for Google AI Overviews, ChatGPT, and Perplexity' },
        { title: 'Site Architecture', href: '/services/seo/site-architecture', description: 'URL structure, content silos, and internal linking systems' },
      ]}
      whyUs={[
        { title: 'Strategy-first approach', description: 'Every SEO engagement starts with a comprehensive audit and a clear strategy before any work begins.' },
        { title: 'No black-hat tactics', description: 'We only use sustainable, white-hat SEO techniques that build long-term value without putting your site at risk.' },
        { title: 'Full-funnel integration', description: 'Our SEO integrates with your paid media, content, and social strategy for compounding results.' },
        { title: 'Transparent reporting', description: 'You always know exactly what we\'re doing, why, and what impact it\'s having on your business.' },
      ]}
    />
  )
}
