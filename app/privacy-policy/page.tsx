import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Mayi Digital Creative',
  description: 'Read the Mayi Digital Creative privacy policy to learn how we collect, use, and protect your personal information when you use our website and services.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'Mayi Digital Creative privacy', 'GDPR', 'Australian Privacy Act'],
  alternates: { canonical: 'https://mayicreative.com.au/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Mayi Digital Creative',
    description: 'Read the Mayi Digital Creative privacy policy to learn how we collect, use, and protect your personal information.',
    url: 'https://mayicreative.com.au/privacy-policy',
    type: 'website',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="pt-40 pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-4">Legal</p>
          <h1 className="font-syne font-bold text-4xl text-[#0D0D1A] mb-4">Privacy Policy</h1>
          <p className="text-sm text-[#6E6E8A] mb-12">Last updated: May 2026</p>
          <div className="prose prose-invert max-w-none space-y-8 text-[#6E6E8A]">
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">1. Introduction</h2>
              <p className="leading-relaxed">Mayi Digital Creative (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and protect information about you when you visit our website or use our services.</p>
            </section>
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed">We may collect information you provide directly to us, such as when you submit a contact form, request a proposal, or communicate with us via email. This may include your name, email address, company name, phone number, and details about your project or enquiry.</p>
            </section>
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed">We use the information we collect to respond to enquiries, provide our services, send relevant communications, improve our website, and comply with legal obligations. We do not sell your personal information to third parties.</p>
            </section>
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">4. Contact</h2>
              <p className="leading-relaxed">For any privacy-related enquiries, please contact us at <a href="mailto:hello@mayicreative.com.au" className="text-[#E8192C] hover:text-[#FF3347]">hello@mayicreative.com.au</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
