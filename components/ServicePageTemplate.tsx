import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ServiceSubPage {
  title: string
  href: string
  description: string
}

interface ServicePageTemplateProps {
  badge: string
  title: string
  titleAccent: string
  description: string
  whatWeDoTitle?: string
  offerings: { title: string; description: string }[]
  subPages?: ServiceSubPage[]
  whyUs?: { title: string; description: string }[]
  ctaText?: string
  serviceUrl?: string
}

export default function ServicePageTemplate({
  badge,
  title,
  titleAccent,
  description,
  whatWeDoTitle = 'What We Do',
  offerings,
  subPages,
  whyUs,
  ctaText = 'Start a Project',
  serviceUrl,
}: ServicePageTemplateProps) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${title} ${titleAccent}`.replace(/\n/g, ' '),
    description,
    provider: {
      '@type': 'Organization',
      name: 'Mayi Digital Creative',
      url: 'https://mayicreative.com.au',
    },
    areaServed: 'Australia',
    ...(serviceUrl ? { url: `https://mayicreative.com.au${serviceUrl}` } : {}),
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#E8192C]/[0.07] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#E8192C]/[0.04] blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-6">{badge}</p>
          <h1 className="font-syne font-bold text-5xl lg:text-7xl text-[#0D0D1A] leading-[1.05] max-w-4xl mb-8">
            {title}
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #E8192C 0%, #FF3347 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {titleAccent}
            </span>
          </h1>
          <p className="text-lg text-[#6E6E8A] max-w-2xl leading-relaxed mb-10">{description}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8192C] hover:bg-[#FF3347] text-white font-syne font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,25,44,0.4)] group"
          >
            {ctaText}
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-[#F5F5FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-4">{whatWeDoTitle}</p>
          <h2 className="font-syne font-bold text-4xl text-[#0D0D1A] mb-12 max-w-xl leading-tight">
            Everything you need to win.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-[#E2E2EE] bg-white hover:border-[#E8192C]/30 hover:bg-[#FAFAFD] transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center mb-5">
                  <span className="font-syne font-bold text-xs text-[#E8192C]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-syne font-bold text-lg text-[#0D0D1A] mb-3">{item.title}</h3>
                <p className="text-sm text-[#6E6E8A] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      {subPages && subPages.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-4">Specialisations</p>
            <h2 className="font-syne font-bold text-4xl text-[#0D0D1A] mb-12 leading-tight">
              Explore our specific services.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex items-center justify-between p-6 rounded-2xl border border-[#E2E2EE] bg-[#F5F5FA] hover:border-[#E8192C]/30 transition-all duration-300"
                >
                  <div>
                    <h3 className="font-syne font-bold text-[#0D0D1A] mb-1 group-hover:text-[#E8192C] transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-[#6E6E8A]">{page.description}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-[#6E6E8A] group-hover:text-[#E8192C] flex-shrink-0 ml-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Us */}
      {whyUs && (
        <section className="py-24 bg-[#F5F5FA]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-4">Why Mayi</p>
            <h2 className="font-syne font-bold text-4xl text-[#0D0D1A] mb-12 leading-tight">
              Why choose Mayi Digital Creative?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyUs.map((item, i) => (
                <div key={i} className="flex gap-5 p-6 rounded-2xl border border-[#E2E2EE] bg-white">
                  <div className="w-10 h-10 rounded-xl bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-syne font-bold text-xs text-[#E8192C]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-[#0D0D1A] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6E6E8A] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative p-12 lg:p-16 rounded-3xl border border-[#E2E2EE] bg-[#F5F5FA] text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8192C]/[0.04] to-[#E8192C]/[0.06] pointer-events-none" />
            <div className="relative">
              <h2 className="font-syne font-bold text-4xl lg:text-5xl text-[#0D0D1A] mb-6">
                Ready to get started?
              </h2>
              <p className="text-[#6E6E8A] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Book a free strategy call and let&apos;s talk about how we can drive real results for your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#E8192C] hover:bg-[#FF3347] text-white font-syne font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,25,44,0.4)] group"
              >
                Book a Free Strategy Call
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
