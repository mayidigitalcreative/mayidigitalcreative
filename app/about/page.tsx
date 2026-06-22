import Link from 'next/link'
import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Mayi Digital Creative | Perth Digital Marketing Agency',
  description: 'Mayi Digital Creative is a full-service digital marketing agency based in Perth, Australia. Learn about our story, our values, and the senior specialists behind the work.',
  keywords: ['about Mayi Digital Creative', 'digital marketing agency Perth', 'Perth marketing agency story', 'about us digital marketing', 'full-service agency Australia', 'marketing agency values', 'Perth digital agency team', 'Australian digital marketing agency'],
  alternates: { canonical: 'https://mayicreative.com.au/about' },
  openGraph: {
    title: 'About Mayi Digital Creative | Perth Digital Marketing Agency',
    description: 'Mayi Digital Creative is a full-service digital marketing agency based in Perth, Australia. Senior specialists, transparent pricing, real results.',
    url: 'https://mayicreative.com.au/about',
    type: 'website',
  },
}

const values = [
  {
    title: 'Results First',
    description:
      'Every strategy, every campaign, every decision is made with one thing in mind: measurable outcomes for your business. We don\'t do vanity metrics.',
  },
  {
    title: 'Radical Transparency',
    description:
      'We show you exactly what we\'re doing, why, and how it\'s performing. No black boxes, no confusing reports, no hidden fees.',
  },
  {
    title: 'Relentless Curiosity',
    description:
      'Digital marketing never stops evolving. We stay ahead of algorithm changes, platform updates, and emerging channels so you don\'t have to.',
  },
  {
    title: 'Accountable Partnership',
    description:
      'We treat your budget like our own. When you win, we win. That alignment drives everything we build together.',
  },
]

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-24" style={{ overflow: 'clip' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#4B3A9B]/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-6">About Us</p>
          <h1 className="font-syne font-bold text-5xl lg:text-7xl text-[#0D0D1A] leading-[1.05] max-w-4xl mb-8">
            Built different.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #E8192C 0%, #FF3347 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Built to perform.
            </span>
          </h1>
          <p className="text-lg text-[#6E6E8A] max-w-2xl leading-relaxed">
            Mayi Digital Creative is a full-service digital marketing agency based in Perth, Western Australia. We work with ambitious brands across Australia and internationally to drive real, measurable growth.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#F5F5FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-6">Our Story</p>
              <h2 className="font-syne font-bold text-4xl text-[#0D0D1A] mb-8 leading-tight">
                Founded on a simple belief: marketing should actually work.
              </h2>
              <div className="space-y-5 text-[#6E6E8A] leading-relaxed">
                <p>
                  Mayi Digital Creative was founded on one conviction: businesses deserve a digital marketing agency that is as invested in their growth as they are. Not one that hides behind jargon, inflated reports, or vague deliverables.
                </p>
                <p>
                  Based in Perth, WA, we&apos;re a boutique agency with a full-service capability that most large agencies simply can&apos;t match. From technical SEO to brand identity, from content strategy to full-funnel paid media. We do it all, and we do it to an exceptional standard.
                </p>
                <p>
                  We work with brands across luxury, hospitality, real estate, retail, and beyond. Our clients choose us because they have high standards — and that&apos;s exactly where we do our best work.
                </p>
              </div>
            </div>

            {/* Info card */}
            <div className="space-y-4">
              {[
                { label: 'Founded', value: 'Perth, Western Australia' },
                { label: 'Specialisation', value: 'Full-Service Digital Marketing' },
                { label: 'Markets', value: 'Australia & Global' },
                { label: 'Contact', value: 'hello@mayicreative.com.au' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-6 rounded-2xl border border-[#E2E2EE] bg-white"
                >
                  <span className="text-sm text-[#6E6E8A] font-syne uppercase tracking-wider">{item.label}</span>
                  <span className="text-sm font-syne font-bold text-[#0D0D1A]">{item.value}</span>
                </div>
              ))}

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full p-5 bg-[#E8192C] hover:bg-[#FF3347] text-white font-syne font-bold rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,25,44,0.4)] group mt-6"
              >
                Work With Us
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-4">Our Values</p>
            <h2 className="font-syne font-bold text-4xl lg:text-5xl text-[#0D0D1A]">
              What drives everything we do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-[#E2E2EE] bg-[#F5F5FA] hover:border-[#E8192C]/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center mb-6">
                  <span className="font-syne font-bold text-sm text-[#E8192C]">0{i + 1}</span>
                </div>
                <h3 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">{value.title}</h3>
                <p className="text-[#6E6E8A] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-2xl border border-[#E2E2EE] bg-[#F5F5FA]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center">
                <MapPin size={20} className="text-[#E8192C]" />
              </div>
              <div>
                <p className="font-syne font-bold text-[#0D0D1A]">152 St Georges Terrace, Perth WA 6000</p>
                <p className="text-sm text-[#6E6E8A]">Serving clients across Australia and globally</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="tel:0420371048"
                className="flex items-center gap-2 text-sm font-syne font-bold text-[#E8192C] hover:text-[#FF3347] transition-colors"
              >
                <Phone size={16} />
                0420 371 048
              </a>
              <a
                href="mailto:hello@mayicreative.com.au"
                className="flex items-center gap-2 text-sm font-syne font-bold text-[#E8192C] hover:text-[#FF3347] transition-colors"
              >
                <Mail size={16} />
                hello@mayicreative.com.au
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
