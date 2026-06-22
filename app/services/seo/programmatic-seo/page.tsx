import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programmatic SEO Agency Perth | Scale to Thousands of Pages',
  description: 'Programmatic SEO services that build thousands of optimised, indexable pages at scale. Capture long-tail search demand your competitors are missing entirely.',
  keywords: ['programmatic SEO', 'programmatic SEO agency Australia', 'large scale SEO Perth', 'automated SEO pages', 'long-tail SEO strategy', 'scalable SEO content', 'database-driven SEO', 'SEO page generation', 'programmatic content Perth'],
  alternates: { canonical: 'https://mayicreative.com.au/services/seo/programmatic-seo' },
  openGraph: {
    title: 'Programmatic SEO Agency Perth | Scale to Thousands of Pages',
    description: 'Build thousands of optimised, indexable pages at scale. Capture long-tail search demand your competitors are missing entirely.',
    url: 'https://mayicreative.com.au/services/seo/programmatic-seo',
    type: 'website',
  },
}

export default function ProgrammaticSEOPage() {
  return (
    <ServicePageTemplate
      badge="Programmatic SEO"
      title="Thousands of pages."
      titleAccent="One strategic system."
      description="Programmatic SEO lets you capture enormous volumes of long-tail search demand by generating high-quality, uniquely relevant pages at scale. We design and build the systems, templates, and data pipelines that turn your database into a ranking machine."
      serviceUrl="/services/seo/programmatic-seo"
      offerings={[
        {
          title: 'Keyword Universe Research',
          description: 'We map every viable long-tail keyword cluster for your business, from location modifiers to product attributes, service combinations, and comparison queries that collectively drive enormous traffic volume.',
        },
        {
          title: 'Page Template Architecture',
          description: 'Design of scalable page templates that satisfy search intent, pass Google quality thresholds, and convert. Each template is built for uniqueness, not duplication.',
        },
        {
          title: 'Data Infrastructure Setup',
          description: 'We build or connect the data sources powering your programmatic pages, whether that\'s a CMS, database, spreadsheet, or API feed. Clean data in, ranking pages out.',
        },
        {
          title: 'Unique Content Generation',
          description: 'Programmatic doesn\'t mean thin. We build content variation systems using structured data, dynamic copy modules, and contextual blocks that make each page genuinely distinct.',
        },
        {
          title: 'Internal Linking Architecture',
          description: 'Thousands of pages need a robust internal linking system to pass authority effectively. We design hub-and-spoke and silo structures that distribute link equity across your entire page set.',
        },
        {
          title: 'Crawl Budget Optimisation',
          description: 'At scale, crawl budget management is critical. We implement canonicalisation, noindex rules, XML sitemaps, and pagination handling so Google indexes your best pages efficiently.',
        },
        {
          title: 'Quality Monitoring and Pruning',
          description: 'We monitor performance across your page set and prune low-quality or cannibalising pages before they drag down your overall domain authority.',
        },
        {
          title: 'Ongoing Expansion Strategy',
          description: 'Programmatic SEO is a compounding asset. We continuously identify new keyword sets, locations, and page types to expand your footprint as your site authority grows.',
        },
      ]}
      whyUs={[
        {
          title: 'Built for quality, not just scale',
          description: 'Google\'s Helpful Content system penalises low-quality scaled content. Every programmatic system we build is designed to pass quality thresholds and genuinely serve user intent.',
        },
        {
          title: 'Cross-discipline execution',
          description: 'Programmatic SEO sits at the intersection of SEO, development, and content strategy. Our team covers all three, so nothing falls through the cracks.',
        },
        {
          title: 'Proven long-tail capture',
          description: 'Long-tail search drives the majority of purchase-intent queries. Our programmatic systems are designed to capture demand at every stage of the buyer journey.',
        },
        {
          title: 'Transparent page performance tracking',
          description: 'We track rankings, impressions, clicks, and conversions across your programmatic page set so you can see the ROI growing in real time.',
        },
      ]}
      ctaText="Build Your Programmatic System"
    />
  )
}
