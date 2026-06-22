import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paid Media Agency Perth | Google, Meta, TikTok & More',
  description: 'Full-service paid media agency in Perth. We manage campaigns across Google Ads, Meta, TikTok, LinkedIn, Pinterest, Bing, and programmatic networks.',
  keywords: ['paid media agency Perth', 'Google Ads management Perth', 'Meta ads agency Australia', 'TikTok ads Australia', 'LinkedIn ads agency', 'paid advertising management', 'PPC agency Perth', 'programmatic advertising Australia'],
  alternates: { canonical: 'https://mayicreative.com.au/services/paid-media' },
  openGraph: {
    title: 'Paid Media Agency Perth | Google, Meta, TikTok & More',
    description: 'Full-service paid media agency in Perth. We manage campaigns across Google Ads, Meta, TikTok, LinkedIn, Pinterest, Bing, and programmatic networks.',
    url: 'https://mayicreative.com.au/services/paid-media',
    type: 'website',
  },
}

export default function PaidMediaPage() {
  return (
    <ServicePageTemplate
      badge="Paid Media Services"
      title="Paid media that"
      titleAccent="pays for itself."
      description="Precision-targeted advertising campaigns across every major platform. We don't just run ads. We build full-funnel paid media strategies that turn budget into measurable revenue."
      offerings={[
        { title: 'Google Ads', description: 'Search, Shopping, Display, YouTube, and Performance Max campaigns managed by certified Google Ads specialists.' },
        { title: 'Meta Ads', description: 'Facebook and Instagram advertising with advanced audience targeting, creative testing, and ROAS-focused optimisation.' },
        { title: 'TikTok Ads', description: 'Short-form video ad campaigns that capture attention and drive results on the world\'s fastest-growing platform.' },
        { title: 'LinkedIn Ads', description: 'B2B advertising with precise professional targeting, ideal for lead generation and brand awareness in corporate markets.' },
        { title: 'Pinterest Ads', description: 'Visual discovery advertising for lifestyle, fashion, homewares, and eCommerce brands targeting purchase-intent audiences.' },
        { title: 'Bing Ads', description: 'Microsoft Advertising campaigns that capture high-intent search traffic at a lower cost per click than Google.' },
        { title: 'Programmatic Display', description: 'Automated, data-driven display advertising across premium publisher networks. Brand-safe and performance-optimised.' },
      ]}
      subPages={[
        { title: 'Google Ads', href: '/services/paid-media/google-ads', description: 'Search, Shopping, Display, and Performance Max' },
        { title: 'Meta Ads', href: '/services/paid-media/meta-ads', description: 'Facebook and Instagram advertising' },
        { title: 'TikTok Ads', href: '/services/paid-media/tiktok-ads', description: 'Short-form video advertising' },
        { title: 'LinkedIn Ads', href: '/services/paid-media/linkedin-ads', description: 'B2B professional targeting' },
        { title: 'Pinterest Ads', href: '/services/paid-media/pinterest-ads', description: 'Visual discovery for lifestyle brands' },
        { title: 'Bing Ads', href: '/services/paid-media/bing-ads', description: 'Microsoft Advertising campaigns' },
        { title: 'Programmatic', href: '/services/paid-media/programmatic', description: 'Automated display advertising networks' },
      ]}
      whyUs={[
        { title: 'Platform-certified specialists', description: 'Our team holds certifications across Google, Meta, and other major ad platforms.' },
        { title: 'Creative + media together', description: 'We handle both ad creative and media buying in-house for faster testing and better results.' },
        { title: 'ROAS-focused reporting', description: 'Every report is built around return on ad spend and business outcomes, not impressions and clicks.' },
        { title: 'Cross-platform strategy', description: 'We build paid media strategies that work together across platforms, not siloed campaigns running independently.' },
      ]}
    />
  )
}
