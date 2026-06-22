import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'China & APAC Digital Marketing Agency Australia | WeChat, Xiaohongshu, Baidu',
  description: 'Mayi Digital Creative is Australia\'s specialist China and APAC digital marketing agency. WeChat marketing, Xiaohongshu (Little Red Book) strategy, and APAC market entry for brands ready to expand.',
  keywords: ['China digital marketing Australia', 'WeChat marketing Australia', 'Xiaohongshu marketing', 'Little Red Book marketing', 'APAC market entry', 'Chinese consumer marketing', 'Mandarin marketing Australia', 'cross-border eCommerce China'],
  alternates: { canonical: 'https://mayicreative.com.au/services/china-apac' },
  openGraph: {
    title: 'China & APAC Digital Marketing Agency Australia | WeChat, Xiaohongshu, Baidu',
    description: "Australia's specialist China and APAC digital marketing agency. WeChat marketing, Xiaohongshu strategy, and APAC market entry for brands ready to expand.",
    url: 'https://mayicreative.com.au/services/china-apac',
    type: 'website',
  },
}

export default function ChinaAPACPage() {
  return (
    <ServicePageTemplate
      badge="China & APAC Marketing"
      title="The bridge between"
      titleAccent="your brand and Asia."
      description="Most Australian agencies don't understand Asian markets. We do. We help brands successfully enter, scale, and dominate in China and broader APAC markets, with authentic strategy, native expertise, and real results."
      offerings={[
        { title: 'Xiaohongshu (RED) Marketing', description: 'Content strategy, account management, influencer seeding, and paid advertising on Little Red Book, the most influential platform for Chinese consumers.' },
        { title: 'WeChat Marketing', description: 'WeChat Official Account management, content creation, mini-program strategy, and WeChat advertising for brands targeting Chinese-speaking audiences.' },
        { title: 'APAC Market Entry Strategy', description: 'Comprehensive market entry planning for brands expanding into China, Singapore, Hong Kong, and broader APAC markets.' },
        { title: 'Chinese Consumer Insights', description: 'Deep research into Chinese consumer behaviour, cultural nuances, and market dynamics that Western agencies simply don\'t have access to.' },
        { title: 'Cross-Border eCommerce', description: 'Strategy and execution for brands selling into China via cross-border eCommerce channels: Tmall Global, JD Worldwide, and more.' },
        { title: 'Bilingual Content Creation', description: 'Professional Chinese and English content creation, ensuring your brand message is culturally appropriate and resonates with both audiences.' },
      ]}
      subPages={[
        { title: 'WeChat Marketing', href: '/services/china-apac/wechat-marketing', description: 'Official accounts, mini-programs, and WeChat ads' },
        { title: 'Xiaohongshu Marketing', href: '/services/china-apac/xiaohongshu-marketing', description: 'Little Red Book content strategy and advertising' },
        { title: 'APAC Market Entry', href: '/services/china-apac/apac-market-entry', description: 'Strategy for brands entering Asian markets' },
      ]}
      whyUs={[
        { title: 'Genuine APAC expertise', description: 'We have real, hands-on experience in Chinese and APAC markets. This is not a surface-level offering bolted onto a Western agency model.' },
        { title: 'Bilingual capability', description: 'Our team operates in English and Mandarin, ensuring your brand is represented accurately and authentically in both languages.' },
        { title: 'Cultural intelligence', description: 'Understanding cultural nuance is non-negotiable in Asian markets. We build campaigns that connect, not just translate.' },
        { title: 'Full-funnel APAC strategy', description: 'From brand awareness on Xiaohongshu to conversion on cross-border eCommerce, we manage the complete customer journey.' },
      ]}
      ctaText="Explore APAC Markets"
    />
  )
}
