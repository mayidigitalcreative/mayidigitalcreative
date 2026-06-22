import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Site Architecture Perth | URL Structure and Information Architecture',
  description: 'Strategic SEO site architecture that helps Google crawl, understand, and rank every page on your website. We design URL structures, silos, and internal linking systems built for long-term growth.',
  keywords: ['SEO site architecture', 'website architecture SEO', 'URL structure SEO', 'information architecture Perth', 'SEO silo structure', 'internal linking architecture', 'crawl optimisation', 'SEO site structure Australia', 'topical authority architecture Perth'],
  alternates: { canonical: 'https://mayicreative.com.au/services/seo/site-architecture' },
  openGraph: {
    title: 'SEO Site Architecture Perth | URL Structure and Information Architecture',
    description: 'Strategic site architecture that helps Google crawl, understand, and rank every page on your website.',
    url: 'https://mayicreative.com.au/services/seo/site-architecture',
    type: 'website',
  },
}

export default function SiteArchitecturePage() {
  return (
    <ServicePageTemplate
      badge="Site Architecture"
      title="Structure your site"
      titleAccent="to rank at scale."
      description="Site architecture is the foundation of sustainable SEO. A well-structured site communicates topical authority to Google, distributes link equity efficiently, and makes every new page you publish more powerful than the last. We design information architectures built for long-term organic growth."
      serviceUrl="/services/seo/site-architecture"
      offerings={[
        {
          title: 'URL Structure Design',
          description: 'We design clean, logical URL hierarchies that signal topical relevance to Google and make your site easy to crawl. Every URL is crafted to reinforce your content strategy.',
        },
        {
          title: 'Content Silo Architecture',
          description: 'We build topic cluster and silo structures that group related content, concentrate topical authority, and make it clear to Google exactly what your site is an expert on.',
        },
        {
          title: 'Internal Linking Strategy',
          description: 'A strategic internal linking system passes PageRank to your most important pages, reduces orphaned content, and builds clear pathways for both Google and users to navigate your site.',
        },
        {
          title: 'Navigation and Taxonomy Design',
          description: 'We design site navigation, category structures, and tag taxonomies that serve user intent and SEO simultaneously. No more navigation structures built for looks but not for rankings.',
        },
        {
          title: 'Hub and Spoke Content Planning',
          description: 'We map out pillar pages and supporting cluster content for every key topic area, creating a content architecture that builds compounding authority over time.',
        },
        {
          title: 'Crawl Budget and Indexation Planning',
          description: 'We determine what should and shouldn\'t be indexed, design XML sitemaps, implement canonical tags, and create a crawl strategy that ensures Google spends its budget on your best pages.',
        },
        {
          title: 'Migration Architecture',
          description: 'Redesigning or replatforming? We plan the new information architecture before a single page moves and map every redirect to protect your existing ranking equity.',
        },
        {
          title: 'Architecture Documentation',
          description: 'We deliver complete documentation of your site architecture, including URL maps, content relationship diagrams, and internal linking blueprints, so your team can maintain it long-term.',
        },
      ]}
      whyUs={[
        {
          title: 'Architecture before content',
          description: 'Most businesses build content first and fix the structure later. We build the architecture first, so every piece of content you publish compounds from day one.',
        },
        {
          title: 'Designed for topical authority',
          description: 'Google rewards sites that demonstrate deep, organised expertise in a topic area. Our architectures are purpose-built to achieve and signal topical authority.',
        },
        {
          title: 'Built for scale',
          description: 'Whether you have 50 pages today or plan to have 5,000, we design architectures that scale cleanly without creating cannibalisation or crawl issues as you grow.',
        },
        {
          title: 'Tied to business goals',
          description: 'Architecture decisions are driven by which pages need to rank and convert. We prioritise the structural work that has the most direct impact on your revenue-generating pages.',
        },
      ]}
      ctaText="Audit My Site Architecture"
    />
  )
}
