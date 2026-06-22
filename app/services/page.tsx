import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Services Perth | Full-Service Agency',
  description: 'Mayi Digital Creative offers a complete suite of digital marketing services: SEO, paid media, social media, branding, web design, email, analytics, and strategy.',
  keywords: ['digital marketing services Perth', 'full-service digital marketing agency', 'SEO services Australia', 'paid media management', 'social media marketing Perth', 'branding agency Perth', 'web design Perth'],
  alternates: { canonical: 'https://mayicreative.com.au/services' },
  openGraph: {
    title: 'Digital Marketing Services Perth | Full-Service Agency',
    description: 'Mayi Digital Creative offers a complete suite of digital marketing services: SEO, paid media, social media, branding, web design, and more.',
    url: 'https://mayicreative.com.au/services',
    type: 'website',
  },
}

const serviceCategories = [
  {
    number: '01', title: 'SEO', href: '/services/seo',
    description: 'Technical SEO, local SEO, eCommerce SEO, and enterprise SEO to dominate search rankings.',
    subs: ['Technical SEO', 'Local SEO', 'eCommerce SEO', 'Enterprise SEO'],
  },
  {
    number: '02', title: 'Paid Media', href: '/services/paid-media',
    description: 'Every major ad platform: Google, Meta, TikTok, LinkedIn, Pinterest, Bing, and programmatic.',
    subs: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads', 'Pinterest Ads', 'Bing Ads', 'Programmatic'],
  },
  {
    number: '03', title: 'Social Media Marketing', href: '/services/social-media-marketing',
    description: 'Management, strategy, influencer marketing, and UGC across every major social platform.',
    subs: ['Social Management', 'Instagram', 'TikTok', 'Facebook', 'LinkedIn', 'Pinterest', 'Influencer Marketing', 'UGC'],
  },
  {
    number: '04', title: 'Content Marketing', href: '/services/content-marketing',
    description: 'Content strategy, copywriting, video production, and photography that builds authority and converts.',
    subs: ['Content Strategy', 'Copywriting', 'Video Production', 'Photography'],
  },
  {
    number: '05', title: 'Web Design & Development', href: '/services/web-design-development',
    description: 'High-converting websites and landing pages built for performance, SEO, and stunning design.',
    subs: ['Custom Websites', 'Landing Pages'],
  },
  {
    number: '06', title: 'Branding Strategy', href: '/services/branding-strategy',
    description: 'Brand strategy, visual identity, naming, and brand refresh to position your business for premium.',
    subs: ['Brand Strategy', 'Visual Identity', 'Brand Naming', 'Brand Refresh'],
  },
  {
    number: '07', title: 'Email & SMS Marketing', href: '/services/email-marketing',
    description: 'Campaigns, automation flows, and SMS marketing that drive repeat revenue and retention.',
    subs: ['Email Marketing', 'SMS Marketing'],
  },
  {
    number: '08', title: 'Analytics & Reporting', href: '/services/analytics-reporting',
    description: 'GA4, dashboards, CRO, competitor audits, and full-funnel reporting that actually makes sense.',
    subs: ['Analytics Dashboards', 'CRO', 'Competitor Audits'],
  },
  {
    number: '09', title: 'Marketing Strategy', href: '/services/marketing-strategy',
    description: 'Go-to-market strategy, full-funnel planning, campaign strategy, and market research.',
    subs: ['Go-To-Market', 'Full-Funnel Strategy', 'Campaign Strategy', 'Market Research'],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-24" style={{ overflow: 'clip' }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#E8192C]/10 blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-6">Our Services</p>
          <h1 className="font-syne font-bold text-5xl lg:text-7xl text-[#0D0D1A] leading-[1.05] max-w-4xl mb-8">
            Every channel.
            <br />
            <span style={{ background: 'linear-gradient(135deg, #E8192C 0%, #FF3347 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Every market.
            </span>
          </h1>
          <p className="text-lg text-[#6E6E8A] max-w-2xl leading-relaxed">
            10 service areas. 45+ individual services. One agency that handles it all, so you don&apos;t have to manage five different vendors.
          </p>
        </div>
      </section>

      {/* Service list */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-px bg-[#E2E2EE] rounded-2xl overflow-hidden">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group flex flex-col lg:flex-row lg:items-center gap-6 p-8 bg-white hover:bg-[#F5F5FA] transition-all duration-300"
              >
                <span className="font-syne font-bold text-4xl text-[#E2E2EE] group-hover:text-[#E8192C]/20 transition-colors min-w-[56px]">
                  {cat.number}
                </span>
                <div className="flex-1">
                  <h2 className="font-syne font-bold text-2xl text-[#0D0D1A] mb-2 group-hover:text-[#E8192C] transition-colors">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-[#6E6E8A] mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.subs.map((sub) => (
                      <span key={sub} className="px-3 py-1 rounded-full border border-[#E2E2EE] text-xs text-[#6E6E8A] font-syne">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-[#6E6E8A] group-hover:text-[#E8192C] flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
