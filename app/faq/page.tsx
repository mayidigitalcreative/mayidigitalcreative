import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ | Digital Marketing Questions Answered Honestly',
  description: 'Answers to the most common questions about working with Mayi Digital Creative: services, pricing, contracts, timelines, and more. No marketing fluff.',
  keywords: ['digital marketing FAQ', 'marketing agency questions', 'digital marketing pricing', 'SEO FAQ', 'marketing retainer questions', 'Mayi Digital Creative FAQ', 'how much does digital marketing cost', 'digital marketing contracts Australia'],
  alternates: { canonical: 'https://mayicreative.com.au/faq' },
  openGraph: {
    title: 'FAQ | Digital Marketing Questions Answered Honestly',
    description: 'Answers to the most common questions about working with Mayi Digital Creative: services, pricing, contracts, timelines, and more.',
    url: 'https://mayicreative.com.au/faq',
    type: 'website',
  },
}

const faqs = [
  { category: 'Working With Us', q: 'Where are you based?', a: 'We\'re based in Perth, Western Australia. We work with clients across Australia and internationally. All work is handled remotely, so location is never a barrier.' },
  { category: 'Working With Us', q: 'Do you lock clients into long-term contracts?', a: 'No. All retainer engagements are on a monthly rolling basis. We don\'t believe in locking clients in. We believe in earning your business every single month.' },
  { category: 'Working With Us', q: 'How quickly can you get started?', a: 'We can typically onboard new clients within two weeks of signing. During onboarding we complete a strategy audit, set up reporting, and build out your 90-day plan.' },
  { category: 'Working With Us', q: 'Do I get a dedicated account manager?', a: 'Yes. Every client has a dedicated point of contact. You\'re never speaking to a different person each time you reach out.' },
  { category: 'Pricing', q: 'What does digital marketing cost?', a: 'Our retainer packages start from $2,500/month. The right budget depends on your goals, the number of channels, and the level of content production required. Book a free call and we\'ll give you a clear recommendation.' },
  { category: 'Pricing', q: 'Are there setup or onboarding fees?', a: 'Yes. We charge a one-time onboarding fee for new retainer clients, which covers the strategy audit, account setup, and your 90-day plan. This is always disclosed upfront and before any agreement is signed.' },
  { category: 'Pricing', q: 'Do you charge for ad spend separately?', a: 'Yes. Our management fees are separate from ad spend. You pay platforms directly and we manage the campaigns. This ensures full transparency over where your money is going.' },
  { category: 'SEO', q: 'How long does SEO take to show results?', a: 'SEO is a long-term investment. Most clients see meaningful improvement in 3-6 months, with significant growth at 6-12 months. We\'re transparent about this from day one.' },
  { category: 'SEO', q: 'Do you guarantee SEO rankings?', a: 'No ethical SEO agency can guarantee specific rankings. Search engines make that impossible. What we guarantee is a thorough strategy, consistent execution, and transparent reporting on progress.' },
]

const categories = [...new Set(faqs.map(f => f.category))]

export default function FAQPage() {
  return (
    <main className="bg-white">
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4B3A9B]/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-6">FAQ</p>
          <h1 className="font-syne font-bold text-5xl lg:text-7xl text-[#0D0D1A] leading-[1.05] max-w-3xl mb-8">
            Questions.
            <br />
            <span style={{ background: 'linear-gradient(135deg, #E8192C 0%, #FF3347 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Answered honestly.
            </span>
          </h1>
          <p className="text-lg text-[#6E6E8A] max-w-xl leading-relaxed">
            Everything you want to know about working with Mayi Digital Creative. No marketing fluff, just straight answers.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-6">{category}</p>
              <div className="space-y-4">
                {faqs.filter(f => f.category === category).map((faq, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-[#E2E2EE] bg-[#F5F5FA]">
                    <h2 className="font-syne font-bold text-[#0D0D1A] mb-3">{faq.q}</h2>
                    <p className="text-sm text-[#6E6E8A] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="p-8 rounded-2xl border border-[#E8192C]/20 bg-gradient-to-br from-[#E8192C]/5 to-[#E8192C]/5 text-center">
            <h2 className="font-syne font-bold text-2xl text-[#0D0D1A] mb-4">Still have questions?</h2>
            <p className="text-[#6E6E8A] mb-6">Book a free 30-minute strategy call. We&apos;d love to talk through your specific situation.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8192C] hover:bg-[#FF3347] text-white font-syne font-bold rounded-full transition-all duration-300 group">
              Book a Free Call
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
