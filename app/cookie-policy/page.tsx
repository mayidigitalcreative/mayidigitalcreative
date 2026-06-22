import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Mayi Digital Creative',
  description: 'Read the Mayi Digital Creative cookie policy to understand how we use cookies and similar technologies on our website to improve your experience.',
  keywords: ['cookie policy', 'cookies', 'website cookies', 'analytics cookies', 'Mayi Digital Creative cookies', 'browser cookies'],
  alternates: { canonical: 'https://mayicreative.com.au/cookie-policy' },
  openGraph: {
    title: 'Cookie Policy | Mayi Digital Creative',
    description: 'Read the Mayi Digital Creative cookie policy to understand how we use cookies on our website.',
    url: 'https://mayicreative.com.au/cookie-policy',
    type: 'website',
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="bg-white">
      <section className="pt-40 pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-4">Legal</p>
          <h1 className="font-syne font-bold text-4xl text-[#0D0D1A] mb-4">Cookie Policy</h1>
          <p className="text-sm text-[#6E6E8A] mb-12">Last updated: May 2026</p>
          <div className="space-y-8 text-[#6E6E8A]">
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">1. What Are Cookies</h2>
              <p className="leading-relaxed">Cookies are small text files stored on your device when you visit a website. They help us understand how visitors use our site and improve your experience.</p>
            </section>
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">2. How We Use Cookies</h2>
              <p className="leading-relaxed">We use essential cookies to ensure our website functions correctly, analytics cookies to understand visitor behaviour (via Google Analytics 4), and marketing cookies to deliver relevant advertising if you have consented to this.</p>
            </section>
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">3. Managing Cookies</h2>
              <p className="leading-relaxed">You can control and delete cookies through your browser settings. Disabling certain cookies may affect the functionality of our website.</p>
            </section>
            <section>
              <h2 className="font-syne font-bold text-xl text-[#0D0D1A] mb-4">4. Contact</h2>
              <p className="leading-relaxed">For any questions, please contact us at <a href="mailto:hello@mayicreative.com.au" className="text-[#E8192C] hover:text-[#FF3347]">hello@mayicreative.com.au</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
