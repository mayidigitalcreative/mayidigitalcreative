import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Digital Marketing Insights, Guides & Strategy',
  description: 'Digital marketing insights, SEO guides, paid media strategies, and social media advice from the Mayi Digital Creative team in Perth, Australia.',
  keywords: ['digital marketing blog', 'SEO guides Australia', 'paid media strategy', 'social media marketing tips', 'content marketing insights', 'digital marketing Perth', 'marketing agency insights'],
  alternates: { canonical: 'https://mayicreative.com.au/blog' },
  openGraph: {
    title: 'Blog | Digital Marketing Insights, Guides & Strategy',
    description: 'Digital marketing insights, SEO guides, paid media strategies, and social media advice from the Mayi Digital Creative team.',
    url: 'https://mayicreative.com.au/blog',
    type: 'website',
  },
}

const categories = [
  { label: 'All', href: '/blog' },
  { label: 'SEO', href: '/blog/category/seo' },
  { label: 'Paid Media', href: '/blog/category/paid-media' },
  { label: 'Social Media', href: '/blog/category/social-media' },
  { label: 'Content Marketing', href: '/blog/category/content-marketing' },
  { label: 'Branding', href: '/blog/category/branding' },
]

const posts = [
  {
    category: 'SEO', categoryColor: '#E8192C',
    title: 'The Complete Guide to Technical SEO in 2025',
    excerpt: 'Core Web Vitals, crawlability, indexing, and schema markup: everything your website needs to rank in a post-AI search world.',
    readTime: '8 min read', href: '/blog/technical-seo-guide-2025', featured: true,
  },
  {
    category: 'Social Media', categoryColor: '#E8192C',
    title: 'TikTok for Business in Australia: The 2026 Playbook',
    excerpt: 'TikTok is no longer just for Gen Z. Here\'s how Australian brands across every industry are driving real, measurable revenue from the platform.',
    readTime: '6 min read', href: '/blog/tiktok-business-australia-2026', featured: false,
  },
  {
    category: 'Paid Media', categoryColor: '#FF3347',
    title: 'Google vs Meta Ads in 2025: Where Should Your Budget Go?',
    excerpt: 'A data-driven breakdown of ROAS, audience intent, and targeting capabilities to help you allocate your ad spend intelligently.',
    readTime: '7 min read', href: '/blog/google-vs-meta-ads-2025', featured: false,
  },
  {
    category: 'Branding', categoryColor: '#E8192C',
    title: 'How to Build a Premium Brand on a Startup Budget',
    excerpt: 'Luxury positioning isn\'t about spending the most. It\'s about making every touchpoint feel intentional. Here\'s how to do it.',
    readTime: '5 min read', href: '/blog/premium-brand-startup-budget', featured: false,
  },
  {
    category: 'Social Media', categoryColor: '#E8192C',
    title: 'TikTok for Business in Australia: The 2025 Playbook',
    excerpt: 'TikTok is no longer just for Gen Z. Here\'s how Australian brands across every industry are driving real revenue from the platform.',
    readTime: '9 min read', href: '/blog/tiktok-business-australia-2025', featured: false,
  },
  {
    category: 'Content Marketing', categoryColor: '#FF3347',
    title: 'Why Your Content Marketing Isn\'t Working (And How to Fix It)',
    excerpt: 'Most businesses publish content and wonder why nothing happens. Here are the six reasons your content strategy is failing, and what to do about each one.',
    readTime: '6 min read', href: '/blog/content-marketing-not-working', featured: false,
  },
]

export default function BlogPage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mayi Digital Creative Blog',
    url: 'https://mayicreative.com.au/blog',
    description: 'Digital marketing insights, SEO guides, and strategy from Mayi Digital Creative.',
    publisher: {
      '@type': 'Organization',
      name: 'Mayi Digital Creative',
      url: 'https://mayicreative.com.au',
    },
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-40 pb-24" style={{ overflow: 'clip' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full bg-[#4B3A9B]/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-6">Insights & Strategy</p>
          <h1 className="font-syne font-bold text-5xl lg:text-7xl text-[#0D0D1A] leading-[1.05] max-w-4xl mb-8">
            Marketing intelligence
            <br />
            <span style={{ background: 'linear-gradient(135deg, #E8192C 0%, #FF3347 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              you can act on.
            </span>
          </h1>
          <p className="text-lg text-[#6E6E8A] max-w-xl leading-relaxed">
            No fluff. No recycled advice. Just practical digital marketing strategy from people who do this every day.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="px-5 py-2 rounded-full border border-[#E2E2EE] text-sm font-syne font-bold text-[#6E6E8A] hover:border-[#E8192C]/40 hover:text-[#0D0D1A] transition-all"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured */}
          {posts.filter(p => p.featured).map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block mb-6 p-10 rounded-3xl border border-[#E2E2EE] bg-[#F5F5FA] hover:border-[#E8192C]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-syne font-bold uppercase tracking-wider" style={{ backgroundColor: post.categoryColor + '20', color: post.categoryColor, border: `1px solid ${post.categoryColor}30` }}>
                  {post.category}
                </span>
                <span className="text-xs text-[#6E6E8A]">{post.readTime}</span>
              </div>
              <h2 className="font-syne font-bold text-3xl lg:text-4xl text-[#0D0D1A] mb-4 group-hover:text-[#0D0D1A] max-w-3xl">
                {post.title}
              </h2>
              <p className="text-[#6E6E8A] leading-relaxed max-w-2xl mb-6">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-sm font-syne font-bold text-[#E8192C]">
                Read Article <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.filter(p => !p.featured).map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex flex-col p-8 rounded-2xl border border-[#E2E2EE] bg-[#F5F5FA] hover:border-[#E8192C]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full text-xs font-syne font-bold uppercase tracking-wider" style={{ backgroundColor: post.categoryColor + '20', color: post.categoryColor, border: `1px solid ${post.categoryColor}30` }}>
                    {post.category}
                  </span>
                </div>
                <h2 className="font-syne font-bold text-lg text-[#0D0D1A] leading-snug mb-4 flex-1">{post.title}</h2>
                <p className="text-sm text-[#6E6E8A] leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#E2E2EE]">
                  <span className="text-xs text-[#6E6E8A]">{post.readTime}</span>
                  <ArrowUpRight size={14} className="text-[#6E6E8A] group-hover:text-[#E8192C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
