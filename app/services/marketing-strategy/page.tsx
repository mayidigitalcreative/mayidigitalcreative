import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Strategy Agency Perth | Go-To-Market & Full-Funnel Strategy',
  description: 'Mayi Digital Creative builds marketing strategies that work: go-to-market planning, full-funnel strategy, campaign strategy, and market research for ambitious brands.',
  keywords: ['marketing strategy agency Perth', 'go-to-market strategy Australia', 'full-funnel marketing strategy', 'digital marketing planning', 'campaign strategy Perth', 'market research Australia', 'marketing consultant Perth', 'annual marketing plan'],
  alternates: { canonical: 'https://mayicreative.com.au/services/marketing-strategy' },
  openGraph: {
    title: 'Marketing Strategy Agency Perth | Go-To-Market & Full-Funnel Strategy',
    description: 'Mayi Digital Creative builds marketing strategies that work: go-to-market planning, full-funnel strategy, campaign strategy, and market research for ambitious brands.',
    url: 'https://mayicreative.com.au/services/marketing-strategy',
    type: 'website',
  },
}

export default function MarketingStrategyPage() {
  return (
    <ServicePageTemplate
      badge="Marketing Strategy"
      title="Strategy that gives"
      titleAccent="you the edge."
      description="Execution without strategy is just noise. We build comprehensive marketing strategies grounded in research, competitive intelligence, and a clear understanding of what drives growth in your specific market."
      offerings={[
        { title: 'Go-To-Market Strategy', description: 'Launch planning for new products, services, or brands entering a market, with positioning, channels, messaging, and timing mapped out in detail.' },
        { title: 'Full-Funnel Marketing Strategy', description: 'End-to-end strategy across awareness, consideration, and conversion, ensuring every channel and tactic works together towards the same goal.' },
        { title: 'Campaign Strategy', description: 'Planning and strategy for specific marketing campaigns, from concept and creative direction to channel selection and budget allocation.' },
        { title: 'Market Research & Insights', description: 'Audience research, competitor analysis, market sizing, and consumer behaviour insights that inform smarter strategy.' },
        { title: 'Marketing Consulting', description: 'Ongoing strategic consulting for businesses that want expert guidance on their marketing direction without full agency engagement.' },
        { title: 'Annual Marketing Planning', description: 'Comprehensive annual marketing plans with channel strategies, budgets, KPIs, and a quarterly execution roadmap.' },
      ]}
      subPages={[
        { title: 'Go-To-Market Strategy', href: '/services/marketing-strategy/go-to-market', description: 'Launch planning for new products and brands' },
        { title: 'Full-Funnel Strategy', href: '/services/marketing-strategy/full-funnel-strategy', description: 'End-to-end marketing strategy' },
        { title: 'Campaign Strategy', href: '/services/marketing-strategy/campaign-strategy', description: 'Planning and strategy for specific campaigns' },
        { title: 'Market Research', href: '/services/marketing-strategy/market-research', description: 'Audience insights and competitive intelligence' },
      ]}
      whyUs={[
        { title: 'Research-driven, not opinion-driven', description: 'Our strategies are built on real market research and data, not assumptions or gut feel.' },
        { title: 'Cross-industry expertise', description: 'We\'ve built marketing strategies for luxury, eCommerce, hospitality, finance, and tech — we adapt our thinking to your market.' },
        { title: 'Strategy meets execution', description: 'Unlike pure strategy consultancies, we can also execute the strategy we build. No handover gaps.' },
        { title: 'Full-funnel thinking', description: 'We plan strategies that work from awareness through to conversion and retention, covering every stage of the customer journey.' },
      ]}
    />
  )
}
