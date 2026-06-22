import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Marketing Agency Perth | Copywriting, Video & Photography',
  description: 'Mayi Digital Creative delivers content marketing that builds authority and converts: strategy, copywriting, video production, and brand photography in Perth.',
  keywords: ['content marketing agency Perth', 'copywriting services Australia', 'video production Perth', 'brand photography Perth', 'content strategy Perth', 'SEO content writing', 'blog writing service Perth', 'content creation agency'],
  alternates: { canonical: 'https://mayicreative.com.au/services/content-marketing' },
  openGraph: {
    title: 'Content Marketing Agency Perth | Copywriting, Video & Photography',
    description: 'Mayi Digital Creative delivers content marketing that builds authority and converts: strategy, copywriting, video production, and brand photography in Perth.',
    url: 'https://mayicreative.com.au/services/content-marketing',
    type: 'website',
  },
}

export default function ContentMarketingPage() {
  return (
    <ServicePageTemplate
      badge="Content Marketing"
      title="Content that earns"
      titleAccent="attention and trust."
      description="In a world drowning in content, only the best gets remembered. We create strategic, high-quality content across every format, written, visual, and video, that positions your brand as the authority in your space."
      offerings={[
        { title: 'Content Strategy', description: 'Audience research, keyword mapping, content pillars, editorial calendars, and a distribution plan that maximises every piece of content you produce.' },
        { title: 'Copywriting', description: 'Website copy, landing pages, ad copy, email sequences, product descriptions, and long-form articles written to convert.' },
        { title: 'Blog & SEO Content', description: 'Long-form, SEO-optimised articles designed to rank, educate, and build topical authority in your industry.' },
        { title: 'Video Production', description: 'Brand videos, product videos, testimonials, social content, and campaign films produced to a premium standard.' },
        { title: 'Brand Photography', description: 'High-end brand and product photography with professional art direction. Images that make your brand look as good as it is.' },
        { title: 'Creative Direction', description: 'Overarching creative direction ensuring all content, written, visual, and video, is cohesive, on-brand, and exceptional.' },
      ]}
      subPages={[
        { title: 'Copywriting', href: '/services/content-marketing/copywriting', description: 'Website, ad, and conversion-focused copy' },
        { title: 'Video Production', href: '/services/content-marketing/video-production', description: 'Brand and social video content' },
        { title: 'Photography', href: '/services/content-marketing/photography', description: 'Brand and product photography' },
      ]}
      whyUs={[
        { title: 'SEO-integrated content', description: 'Every piece of content we produce is optimised for search, so it works harder long after it\'s published.' },
        { title: 'Quality over quantity', description: 'We produce less content than most agencies and invest more in making each piece exceptional.' },
        { title: 'Brand voice consistency', description: 'Whether it\'s a blog post, a product description, or a video script, every word sounds like you.' },
        { title: 'Full production in-house', description: 'Copywriting, video, and photography all under one roof. No agency coordination tax.' },
      ]}
    />
  )
}
