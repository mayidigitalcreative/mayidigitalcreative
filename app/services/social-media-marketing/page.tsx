import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency Perth | Instagram, TikTok, Facebook & More',
  description: 'Full-service social media marketing agency in Perth. We manage Instagram, TikTok, Facebook, LinkedIn, and Pinterest, including strategy, content, influencer marketing, and UGC.',
  keywords: ['social media marketing Perth', 'Instagram management Perth', 'TikTok marketing Australia', 'Facebook management Perth', 'influencer marketing Australia', 'social media agency Perth', 'UGC creator Australia'],
  alternates: { canonical: 'https://mayicreative.com.au/services/social-media-marketing' },
  openGraph: {
    title: 'Social Media Marketing Agency Perth | Instagram, TikTok, Facebook & More',
    description: 'Full-service social media marketing agency in Perth. We manage Instagram, TikTok, Facebook, LinkedIn, and Pinterest, including strategy, content, and influencer marketing.',
    url: 'https://mayicreative.com.au/services/social-media-marketing',
    type: 'website',
  },
}

export default function SocialMediaPage() {
  return (
    <ServicePageTemplate
      badge="Social Media Marketing"
      title="Social media that"
      titleAccent="builds real brands."
      description="We manage your entire social media presence, from strategy and content creation to community management and influencer campaigns. Every platform, every format, every audience."
      offerings={[
        { title: 'Social Media Management', description: 'End-to-end management across Instagram, TikTok, Facebook, LinkedIn, and Pinterest, covering posting, scheduling, and community management.' },
        { title: 'Content Creation', description: 'Scroll-stopping content designed for each platform: Reels, TikToks, carousels, stories, static posts, and more.' },
        { title: 'Social Media Strategy', description: 'Platform selection, audience research, content pillars, posting frequency, and a content calendar built around your business goals.' },
        { title: 'Influencer Marketing', description: 'Influencer sourcing, vetting, outreach, contract management, and campaign reporting across all platforms and market tiers.' },
        { title: 'UGC (User Generated Content)', description: 'Sourcing and managing UGC creators to produce authentic, high-converting content for your brand at scale.' },
        { title: 'Community Management', description: 'Professional management of comments, DMs, and audience engagement to build brand loyalty and reputation.' },
      ]}
      subPages={[
        { title: 'Instagram Management', href: '/services/social-media-marketing/instagram-management', description: 'Feed, Reels, Stories, and IG strategy' },
        { title: 'TikTok Management', href: '/services/social-media-marketing/tiktok-management', description: 'Short-form video content and TikTok growth' },
        { title: 'Facebook Management', href: '/services/social-media-marketing/facebook-management', description: 'Facebook pages, groups, and content strategy' },
        { title: 'LinkedIn Management', href: '/services/social-media-marketing/linkedin-management', description: 'B2B thought leadership and company pages' },
        { title: 'Pinterest Management', href: '/services/social-media-marketing/pinterest-management', description: 'Visual content strategy for lifestyle brands' },
        { title: 'Influencer Marketing', href: '/services/social-media-marketing/influencer-marketing', description: 'End-to-end influencer campaign management' },
        { title: 'UGC Creation', href: '/services/social-media-marketing/ugc', description: 'User-generated content at scale' },
      ]}
      whyUs={[
        { title: 'Platform specialists, not generalists', description: 'We have dedicated specialists for each major platform, not one person trying to do everything.' },
        { title: 'Strategy before content', description: 'Every account starts with a proper strategy before a single post is published.' },
        { title: 'Full creative in-house', description: 'Our content team handles strategy, scripting, design, and editing, so you get a unified brand voice across every platform.' },
        { title: 'Monthly performance reviews', description: 'Clear reporting on reach, engagement, follower growth, and most importantly, business impact.' },
      ]}
    />
  )
}
