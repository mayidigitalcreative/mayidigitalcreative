import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Marketing Resources | Guides, Tools & Glossary',
  description: 'Free digital marketing resources from Mayi Digital Creative: guides, tools, a marketing glossary, and expert insights to help your brand grow online.',
  keywords: ['free marketing guides', 'digital marketing tools', 'marketing glossary', 'SEO guides free', 'marketing resources Australia', 'free marketing downloads', 'digital marketing knowledge', 'marketing tips Perth'],
  alternates: { canonical: 'https://mayicreative.com.au/resources' },
  openGraph: {
    title: 'Free Marketing Resources | Guides, Tools & Glossary',
    description: 'Free digital marketing resources from Mayi Digital Creative: guides, tools, a marketing glossary, and expert insights to help your brand grow.',
    url: 'https://mayicreative.com.au/resources',
    type: 'website',
  },
}

const resources = [
  { title: 'Free Guides & Downloads', description: 'In-depth guides on SEO, paid media, social media, and content marketing. All free to download.', href: '/resources/guides', tag: 'Guides' },
  { title: 'Free Marketing Tools', description: 'SEO audit tools, ad spend calculators, and other free tools to help you market smarter.', href: '/resources/tools', tag: 'Tools' },
  { title: 'Marketing Glossary', description: 'Plain-English definitions for every marketing term you\'ll ever encounter. No jargon.', href: '/resources/glossary', tag: 'Glossary' },
  { title: 'FAQ', description: 'Honest answers to the most common questions about digital marketing and working with an agency.', href: '/faq', tag: 'FAQ' },
]

export default function ResourcesPage() {
  return (
    <main className="bg-white">
      <section className="relative pt-40 pb-24" style={{ overflow: 'clip' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4B3A9B]/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-6">Resources</p>
          <h1 className="font-syne font-bold text-5xl lg:text-7xl text-[#0D0D1A] leading-[1.05] max-w-4xl mb-8">
            Free tools and
            <br />
            <span style={{ background: 'linear-gradient(135deg, #E8192C 0%, #FF3347 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              expert knowledge.
            </span>
          </h1>
          <p className="text-lg text-[#6E6E8A] max-w-xl leading-relaxed">
            We believe in giving before taking. These resources are free. Use them to grow your business, with or without us.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group flex flex-col justify-between p-8 rounded-2xl border border-[#E2E2EE] bg-[#F5F5FA] hover:border-[#E8192C]/30 transition-all duration-300 min-h-[200px]"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#E8192C]/10 border border-[#E8192C]/20 text-xs font-syne font-bold text-[#E8192C] uppercase tracking-wider mb-5">
                    {resource.tag}
                  </span>
                  <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-3 group-hover:text-[#E8192C] transition-colors">{resource.title}</h2>
                  <p className="text-sm text-[#6E6E8A] leading-relaxed">{resource.description}</p>
                </div>
                <div className="flex items-center gap-2 mt-6 text-sm font-syne font-bold text-[#6E6E8A] group-hover:text-[#E8192C] transition-colors">
                  Explore
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
