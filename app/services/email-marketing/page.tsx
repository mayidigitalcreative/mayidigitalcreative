import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email & SMS Marketing Agency Perth',
  description: 'Mayi Digital Creative delivers email and SMS marketing strategies that drive revenue: campaigns, automation flows, and list management for Perth businesses and beyond.',
  keywords: ['email marketing agency Perth', 'SMS marketing Australia', 'email automation Perth', 'Klaviyo agency Australia', 'email campaign management', 'email marketing services Perth', 'abandoned cart email', 'email list growth Perth'],
  alternates: { canonical: 'https://mayicreative.com.au/services/email-marketing' },
  openGraph: {
    title: 'Email & SMS Marketing Agency Perth',
    description: 'Mayi Digital Creative delivers email and SMS marketing strategies that drive revenue: campaigns, automation flows, and list management for Perth businesses and beyond.',
    url: 'https://mayicreative.com.au/services/email-marketing',
    type: 'website',
  },
}

export default function EmailMarketingPage() {
  return (
    <ServicePageTemplate
      badge="Email & SMS Marketing"
      title="Own your audience."
      titleAccent="Own your revenue."
      description="Email and SMS are the only channels you truly own. We build and manage campaigns, automation flows, and list strategies that turn your audience into a reliable, repeatable revenue stream."
      offerings={[
        { title: 'Email Campaign Management', description: 'Strategy, design, copywriting, segmentation, and deployment of regular email campaigns that engage and convert.' },
        { title: 'Automation Flows', description: 'Welcome sequences, abandoned cart, post-purchase, re-engagement, and lifecycle flows that work 24/7 on autopilot.' },
        { title: 'List Growth Strategy', description: 'Lead magnet development, pop-up optimisation, and list building strategies that grow your subscriber base with quality contacts.' },
        { title: 'Email Design & Copy', description: 'High-converting email templates and persuasive copywriting that reflects your brand and drives action.' },
        { title: 'SMS Marketing', description: 'Strategic SMS campaigns and automated text flows, one of the highest-ROI channels available with 98% open rates.' },
        { title: 'Email Audits & Deliverability', description: 'Audits of your existing email program, identifying deliverability issues, segmentation gaps, and optimisation opportunities.' },
      ]}
      subPages={[
        { title: 'Email Marketing', href: '/services/email-marketing', description: 'Campaigns, flows, and list management' },
        { title: 'SMS Marketing', href: '/services/email-marketing/sms-marketing', description: 'High-ROI text message marketing' },
      ]}
      whyUs={[
        { title: 'Platform agnostic', description: 'We work across Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and more. We\'ll use whatever works best for your business.' },
        { title: 'Copywriters who convert', description: 'Our email copywriters understand persuasion psychology. Every email is crafted to get opens, clicks, and purchases.' },
        { title: 'Email + SMS together', description: 'We manage both channels in sync, maximising reach without oversaturating your audience.' },
        { title: 'Revenue attribution', description: 'We track exactly how much revenue each campaign and automation is generating. No guesswork.' },
      ]}
    />
  )
}
