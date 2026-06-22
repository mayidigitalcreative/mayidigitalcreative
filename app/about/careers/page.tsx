import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at Mayi Digital Creative | Join Our Team in Perth',
  description: 'Join the team at Mayi Digital Creative in Perth. We are always looking for exceptional digital marketing specialists. No open roles? Send your details anyway.',
  keywords: ['digital marketing careers Perth', 'marketing agency jobs Perth', 'join digital marketing agency', 'Mayi Digital Creative careers', 'marketing specialist Perth', 'digital marketing jobs Australia'],
  alternates: { canonical: 'https://mayicreative.com.au/about/careers' },
  openGraph: {
    title: 'Careers at Mayi Digital Creative | Join Our Team in Perth',
    description: 'Join the team at Mayi Digital Creative in Perth. We look for exceptional digital marketing specialists who care about results.',
    url: 'https://mayicreative.com.au/about/careers',
    type: 'website',
  },
}

export default function CareersPage() {
  return (
    <main className="bg-white">
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#4B3A9B]/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-6">Careers</p>
          <h1 className="font-syne font-bold text-5xl lg:text-7xl text-[#0D0D1A] leading-[1.05] max-w-4xl mb-8">
            Work with the best.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #E8192C 0%, #FF3347 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Build something real.
            </span>
          </h1>
          <p className="text-lg text-[#6E6E8A] max-w-2xl leading-relaxed mb-16">
            We&apos;re building something ambitious. If you&apos;re a specialist who is exceptional at what you do, cares about results, and wants to work with interesting brands: we want to hear from you.
          </p>

          {/* No current openings */}
          <div className="max-w-2xl p-10 rounded-2xl border border-[#E2E2EE] bg-[#F5F5FA] mb-12">
            <h2 className="font-syne font-bold text-2xl text-[#0D0D1A] mb-4">No open roles right now</h2>
            <p className="text-[#6E6E8A] leading-relaxed mb-8">
              We don&apos;t have any listed positions at the moment. We&apos;re always interested in exceptional people. If you&apos;re a digital marketing specialist who thinks you&apos;d be a great fit, send us your details and we&apos;ll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:hello@mayicreative.com.au"
              className="flex items-center gap-2 px-8 py-4 bg-[#E8192C] hover:bg-[#FF3347] text-white font-syne font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,25,44,0.4)] w-fit group"
            >
              <Mail size={16} />
              Send Your Details
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* What we look for */}
          <h2 className="font-syne font-bold text-2xl text-[#0D0D1A] mb-8">What we look for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Deep specialist knowledge in at least one marketing discipline',
              'A track record of delivering measurable results for clients',
              'Clear, honest communication. No fluff, no ego.',
              'Curiosity about new platforms, technologies, and strategies',
              'Comfort working autonomously and managing your own output',
              'Genuine care about the brands and people you work with',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-[#E2E2EE] bg-[#F5F5FA]">
                <div className="w-5 h-5 rounded-full bg-[#E8192C]/10 border border-[#E8192C]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8192C]" />
                </div>
                <span className="text-sm text-[#6E6E8A] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
