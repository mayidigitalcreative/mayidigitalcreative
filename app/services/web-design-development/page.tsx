import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design & Development Agency Perth | High-Converting Websites',
  description: 'Mayi Digital Creative builds premium websites and landing pages in Perth, designed to convert, built for SEO, and crafted to reflect the quality of your brand.',
  keywords: ['web design Perth', 'web development Perth', 'custom website design Australia', 'SEO web design', 'landing page design Perth', 'eCommerce website Perth', 'Shopify development Perth', 'website agency Perth WA'],
  alternates: { canonical: 'https://mayicreative.com.au/services/web-design-development' },
  openGraph: {
    title: 'Web Design & Development Agency Perth | High-Converting Websites',
    description: 'Mayi Digital Creative builds premium websites and landing pages in Perth, designed to convert, built for SEO, and crafted to reflect the quality of your brand.',
    url: 'https://mayicreative.com.au/services/web-design-development',
    type: 'website',
  },
}

export default function WebDesignPage() {
  return (
    <ServicePageTemplate
      badge="Web Design & Development"
      title="Websites that work"
      titleAccent="as hard as you do."
      description="Your website is your most important sales asset. We design and build premium websites that look exceptional, rank on Google, load fast, and convert visitors into customers."
      offerings={[
        { title: 'Custom Website Design', description: 'Bespoke website design tailored to your brand identity. No templates, no compromises, no off-the-shelf solutions.' },
        { title: 'Website Development', description: 'Clean, performant code built on modern frameworks. Fast load times, mobile-first, and built to scale.' },
        { title: 'SEO-First Architecture', description: 'Every site we build has SEO baked in from the ground up: URL structure, page speed, schema markup, and internal linking.' },
        { title: 'Landing Page Design', description: 'High-converting campaign and funnel landing pages designed to maximise conversions from your paid media and email campaigns.' },
        { title: 'eCommerce Development', description: 'Shopify and custom eCommerce websites designed for conversion, with seamless product pages, checkout flows, and post-purchase experience.' },
        { title: 'Website Audits', description: 'Comprehensive audits of existing websites, identifying performance issues, UX problems, and SEO gaps holding back your growth.' },
      ]}
      subPages={[
        { title: 'Custom Web Design', href: '/services/web-design-development', description: 'Bespoke website design and development' },
        { title: 'Landing Pages', href: '/services/web-design-development/landing-pages', description: 'High-converting campaign and funnel pages' },
      ]}
      whyUs={[
        { title: 'SEO built in, not bolted on', description: 'We build websites the way search engines love. Beautiful design without rankings is just an expensive brochure.' },
        { title: 'Design meets performance', description: 'We never sacrifice load speed for aesthetics. Our sites consistently score 90+ on Google PageSpeed Insights.' },
        { title: 'Conversion-focused', description: 'Every layout decision is made with conversion in mind, from hero sections to CTAs to checkout flows.' },
        { title: 'Ongoing support', description: 'We don\'t disappear after launch. We offer ongoing maintenance, updates, and growth partnerships.' },
      ]}
    />
  )
}
