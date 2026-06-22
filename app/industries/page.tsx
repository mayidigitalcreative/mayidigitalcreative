import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries We Serve | Digital Marketing Across Every Sector',
  description: 'Mayi Digital Creative works with businesses across every industry: luxury, eCommerce, hospitality, real estate, finance, health, education, and more. Tailored strategy for your market.',
  keywords: ['digital marketing industries', 'industry-specific digital marketing', 'marketing for luxury brands', 'eCommerce marketing', 'hospitality digital marketing', 'real estate marketing agency', 'health wellness marketing', 'finance marketing Perth'],
  alternates: { canonical: 'https://mayicreative.com.au/industries' },
  openGraph: {
    title: 'Industries We Serve | Digital Marketing Across Every Sector',
    description: 'Mayi Digital Creative works with businesses across every industry. Tailored digital marketing strategy for your specific market.',
    url: 'https://mayicreative.com.au/industries',
    type: 'website',
  },
}

const industries = [
  { name: 'Luxury & Lifestyle', href: '/industries/luxury-lifestyle', description: 'Premium brands that demand exceptional marketing to match their positioning.' },
  { name: 'eCommerce & Retail', href: '/industries/ecommerce-retail', description: 'Online stores and retail brands driving growth through SEO, paid media, and social.' },
  { name: 'Hospitality & Tourism', href: '/industries/hospitality-tourism', description: 'Hotels, restaurants, tourism operators, and experience brands.' },
  { name: 'Real Estate & Property', href: '/industries/real-estate', description: 'Developers, agencies, and property brands generating qualified leads.' },
  { name: 'Health & Wellness', href: '/industries/health-wellness', description: 'Clinics, practitioners, wellness brands, and health product companies.' },
  { name: 'Finance & Fintech', href: '/industries/finance-fintech', description: 'Financial services, accounting firms, and fintech platforms building trust and leads.' },
  { name: 'Education', href: '/industries/education', description: 'Universities, schools, training providers, and EdTech platforms.' },
  { name: 'Food & Beverage', href: '/industries/food-beverage', description: 'Restaurants, cafes, food brands, and FMCG companies.' },
  { name: 'Beauty & Cosmetics', href: '/industries/beauty-cosmetics', description: 'Beauty brands, skincare companies, and cosmetics retailers.' },
  { name: 'Fashion & Apparel', href: '/industries/fashion-apparel', description: 'Fashion brands, clothing retailers, and accessories companies.' },
  { name: 'Technology & SaaS', href: '/industries/technology-saas', description: 'Tech companies, software platforms, and SaaS businesses growing their user base.' },
  { name: 'Automotive', href: '/industries/automotive', description: 'Car dealerships, automotive brands, and mobility companies.' },
  { name: 'Legal & Professional Services', href: '/industries/legal-professional-services', description: 'Law firms, consulting businesses, and professional service providers.' },
  { name: 'Construction & Trades', href: '/industries/construction-trades', description: 'Builders, tradespeople, and construction businesses generating local leads.' },
]

export default function IndustriesPage() {
  return (
    <main className="bg-white">
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full bg-[#4B3A9B]/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-6">Industries</p>
          <h1 className="font-syne font-bold text-5xl lg:text-7xl text-[#0D0D1A] leading-[1.05] max-w-4xl mb-8">
            We work with
            <br />
            <span style={{ background: 'linear-gradient(135deg, #E8192C 0%, #FF3347 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              every industry.
            </span>
          </h1>
          <p className="text-lg text-[#6E6E8A] max-w-2xl leading-relaxed">
            No matter your industry, ambitious brands deserve exceptional marketing. We adapt our strategy, language, and approach to your specific market, every time.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group flex items-start justify-between gap-4 p-6 rounded-2xl border border-[#E2E2EE] bg-[#F5F5FA] hover:border-[#E8192C]/30 hover:bg-white transition-all duration-300"
              >
                <div>
                  <h2 className="font-syne font-bold text-[#0D0D1A] mb-2 group-hover:text-[#E8192C] transition-colors">{industry.name}</h2>
                  <p className="text-sm text-[#6E6E8A] leading-relaxed">{industry.description}</p>
                </div>
                <ArrowUpRight size={16} className="text-[#6E6E8A] group-hover:text-[#E8192C] flex-shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            ))}
          </div>

          {/* Not in list */}
          <div className="mt-8 p-8 rounded-2xl border border-dashed border-[#E2E2EE] text-center">
            <p className="text-[#6E6E8A] mb-4">Don&apos;t see your industry listed? We work with businesses across every sector.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-syne font-bold text-[#E8192C] hover:text-[#FF3347] transition-colors group">
              Get in touch <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
