import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Terms of Service', description: 'Mayi Digital Creative terms of service.' }

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="pt-40 pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-4">Legal</p>
          <h1 className="font-syne font-bold text-4xl text-[#0D0D1A] mb-4">Terms of Service</h1>
          <p className="text-sm text-[#6E6E8A] mb-12">Last updated: May 2026</p>
          <div className="space-y-8 text-[#6E6E8A]">
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">By accessing or using the Mayi Digital Creative website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>
            </section>
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">2. Services</h2>
              <p className="leading-relaxed">Mayi Digital Creative provides digital marketing services including but not limited to SEO, paid media management, social media marketing, content marketing, branding, web design and development, email and SMS marketing, analytics, and marketing strategy. Specific terms for each engagement are outlined in individual service agreements.</p>
            </section>
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">3. Intellectual Property</h2>
              <p className="leading-relaxed">All content on this website, including text, graphics, logos, and images, is the property of Mayi Digital Creative and is protected by applicable copyright and intellectual property laws.</p>
            </section>
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">4. Contact</h2>
              <p className="leading-relaxed">For any questions regarding these terms, please contact us at <a href="mailto:hello@mayicreative.com.au" className="text-[#E8192C] hover:text-[#FF3347]">hello@mayicreative.com.au</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
