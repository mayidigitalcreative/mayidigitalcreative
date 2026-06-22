import { MetadataRoute } from 'next'

const baseUrl = 'https://mayicreative.com.au'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '', '/about', '/about/careers',
    '/services', '/services/seo', '/services/seo/technical-seo', '/services/seo/local-seo', '/services/seo/ecommerce-seo', '/services/seo/enterprise-seo',
    '/services/seo/seo-audit', '/services/seo/programmatic-seo', '/services/seo/ai-seo', '/services/seo/site-architecture',
    '/services/paid-media', '/services/paid-media/google-ads', '/services/paid-media/meta-ads', '/services/paid-media/tiktok-ads',
    '/services/paid-media/linkedin-ads', '/services/paid-media/pinterest-ads', '/services/paid-media/bing-ads', '/services/paid-media/programmatic',
    '/services/social-media-marketing', '/services/social-media-marketing/management',
    '/services/social-media-marketing/instagram-management', '/services/social-media-marketing/tiktok-management',
    '/services/social-media-marketing/facebook-management', '/services/social-media-marketing/linkedin-management',
    '/services/social-media-marketing/pinterest-management',
    '/services/social-media-marketing/influencer-marketing', '/services/social-media-marketing/ugc',
    '/services/content-marketing', '/services/content-marketing/copywriting', '/services/content-marketing/video-production', '/services/content-marketing/photography',
    '/services/web-design-development', '/services/web-design-development/landing-pages',
    '/services/branding-strategy', '/services/branding-strategy/brand-strategy', '/services/branding-strategy/visual-identity', '/services/branding-strategy/brand-naming', '/services/branding-strategy/brand-refresh',
    '/services/email-marketing', '/services/email-marketing/sms-marketing',
    '/services/analytics-reporting', '/services/analytics-reporting/cro', '/services/analytics-reporting/competitor-audits', '/services/analytics-reporting/marketing-consulting',
    '/services/marketing-strategy', '/services/marketing-strategy/go-to-market', '/services/marketing-strategy/full-funnel-strategy', '/services/marketing-strategy/campaign-strategy', '/services/marketing-strategy/market-research',
    '/industries', '/industries/luxury-lifestyle', '/industries/ecommerce-retail', '/industries/hospitality-tourism', '/industries/real-estate',
    '/industries/health-wellness', '/industries/finance-fintech', '/industries/education', '/industries/food-beverage',
    '/industries/beauty-cosmetics', '/industries/fashion-apparel', '/industries/technology-saas', '/industries/automotive',
    '/industries/legal-professional-services', '/industries/construction-trades',

    '/blog', '/blog/category/seo', '/blog/category/paid-media', '/blog/category/social-media', '/blog/category/content-marketing', '/blog/category/branding',
    '/resources', '/resources/guides', '/resources/tools', '/resources/glossary',
    '/faq', '/contact',
    '/privacy-policy', '/terms-of-service', '/cookie-policy',
  ]

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : page.startsWith('/blog') ? 'daily' : 'monthly',
    priority: page === '' ? 1 : page.startsWith('/services') ? 0.9 : page.startsWith('/industries') ? 0.8 : 0.7,
  }))
}
