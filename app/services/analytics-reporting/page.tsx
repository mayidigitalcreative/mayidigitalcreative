import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analytics & Reporting Services Perth | CRO & Marketing Intelligence',
  description: 'GA4 setup, custom dashboards, CRO, competitor audits, and marketing intelligence services from Mayi Digital Creative in Perth.',
  keywords: ['analytics reporting Perth', 'GA4 setup Australia', 'marketing dashboard', 'CRO services Perth', 'conversion rate optimisation', 'competitor analysis Australia', 'marketing analytics agency', 'data-driven marketing Perth'],
  alternates: { canonical: 'https://mayicreative.com.au/services/analytics-reporting' },
  openGraph: {
    title: 'Analytics & Reporting Services Perth | CRO & Marketing Intelligence',
    description: 'GA4 setup, custom dashboards, CRO, competitor audits, and marketing intelligence services from Mayi Digital Creative in Perth.',
    url: 'https://mayicreative.com.au/services/analytics-reporting',
    type: 'website',
  },
}

export default function AnalyticsPage() {
  return (
    <ServicePageTemplate
      badge="Analytics & Reporting"
      title="Data that drives"
      titleAccent="smarter decisions."
      description="Most businesses are sitting on a goldmine of data they don't know how to use. We set up, interpret, and action your marketing data, turning numbers into decisions that drive growth."
      offerings={[
        { title: 'GA4 Setup & Configuration', description: 'Proper GA4 implementation, event tracking, conversion configuration, and data layer setup done right from the start.' },
        { title: 'Custom Dashboards', description: 'Real-time performance dashboards built in Looker Studio or your preferred tool, showing exactly the metrics that matter to your business.' },
        { title: 'Monthly Performance Reports', description: 'Clear, executive-level reports that translate data into insights and recommendations, delivered without fail every month.' },
        { title: 'CRO (Conversion Rate Optimisation)', description: 'Heatmaps, session recordings, A/B testing, and UX improvements designed to squeeze more conversions from your existing traffic.' },
        { title: 'Competitor Analysis', description: 'Regular competitive intelligence across SEO, paid media, social, and content, so you always know where you stand and what to do about it.' },
        { title: 'Marketing Audits', description: 'Comprehensive audits of your entire marketing operation, identifying waste, gaps, and high-impact opportunities.' },
      ]}
      subPages={[
        { title: 'Analytics & Dashboards', href: '/services/analytics-reporting', description: 'GA4, custom dashboards, and reporting' },
        { title: 'CRO Services', href: '/services/analytics-reporting/cro', description: 'Conversion rate optimisation and A/B testing' },
        { title: 'Competitor Audits', href: '/services/analytics-reporting/competitor-audits', description: 'Competitive intelligence and market analysis' },
        { title: 'Marketing Consulting', href: '/services/analytics-reporting/marketing-consulting', description: 'Strategic consulting and marketing audits' },
      ]}
      whyUs={[
        { title: 'We speak English, not spreadsheets', description: 'Our reports are designed for business owners and marketing managers: clear insights, not raw data dumps.' },
        { title: 'Action-oriented analysis', description: 'Every report ends with clear recommendations. We tell you what the data means and exactly what to do about it.' },
        { title: 'Full-funnel view', description: 'We look at every touchpoint, from first click to final purchase, to understand what\'s actually driving your business growth.' },
        { title: 'Real-time visibility', description: 'Custom dashboards mean you can check performance at any time without waiting for a monthly report.' },
      ]}
    />
  )
}
