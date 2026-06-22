import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Mayi Digital Creative | Book a Free Strategy Call',
  description: 'Get in touch with Mayi Digital Creative. Book a free strategy call or send us a message. We respond within one business day and would love to hear about your project.',
  keywords: ['contact digital marketing agency', 'book strategy call', 'digital marketing Perth', 'free marketing consultation', 'Mayi Digital Creative contact', 'marketing agency Perth enquiry', 'hire digital marketing agency', 'digital agency consultation Australia'],
  alternates: { canonical: 'https://mayicreative.com.au/contact' },
  openGraph: {
    title: 'Contact Mayi Digital Creative | Book a Free Strategy Call',
    description: 'Get in touch with Mayi Digital Creative. Book a free strategy call or send us a message. We respond within one business day.',
    url: 'https://mayicreative.com.au/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mayi Digital Creative',
    description: 'Full-service digital marketing agency based in Perth, Western Australia.',
    url: 'https://mayicreative.com.au',
    email: 'hello@mayicreative.com.au',
    telephone: '+61420371048',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '152 St Georges Terrace',
      addressLocality: 'Perth',
      addressRegion: 'WA',
      postalCode: '6000',
      addressCountry: 'AU',
    },
    areaServed: ['Australia'],
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-17:00',
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#4B3A9B]/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-6">Get In Touch</p>
          <h1 className="font-syne font-bold text-[clamp(2rem,8vw,4.5rem)] text-[#0D0D1A] leading-[1.05] max-w-4xl mb-8">
            Let&apos;s build something
            <br />
            <span style={{ background: 'linear-gradient(135deg, #E8192C 0%, #FF3347 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              extraordinary.
            </span>
          </h1>
          <p className="text-lg text-[#6E6E8A] max-w-xl leading-relaxed">
            Tell us about your project, your goals, and your timeline. We&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="p-8 lg:p-10 rounded-3xl border border-[#E2E2EE] bg-[#F5F5FA]">
              <h2 className="font-syne font-bold text-2xl text-[#0D0D1A] mb-8">Send us a message</h2>
              <form className="space-y-6" action="mailto:hello@mayicreative.com.au" method="get" encType="text/plain">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-syne font-bold text-[#6E6E8A] uppercase tracking-wider mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E2EE] text-[#0D0D1A] text-sm placeholder-[#6E6E8A]/40 focus:outline-none focus:border-[#E8192C]/50 transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-syne font-bold text-[#6E6E8A] uppercase tracking-wider mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E2EE] text-[#0D0D1A] text-sm placeholder-[#6E6E8A]/40 focus:outline-none focus:border-[#E8192C]/50 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-syne font-bold text-[#6E6E8A] uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E2EE] text-[#0D0D1A] text-sm placeholder-[#6E6E8A]/40 focus:outline-none focus:border-[#E8192C]/50 transition-colors"
                    placeholder="jane@yourbrand.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-syne font-bold text-[#6E6E8A] uppercase tracking-wider mb-2">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E2EE] text-[#0D0D1A] text-sm placeholder-[#6E6E8A]/40 focus:outline-none focus:border-[#E8192C]/50 transition-colors"
                    placeholder="Your Brand Pty Ltd"
                  />
                </div>

                <div>
                  <label className="block text-xs font-syne font-bold text-[#6E6E8A] uppercase tracking-wider mb-2">
                    What services are you interested in?
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E2EE] text-[#6E6E8A] text-sm focus:outline-none focus:border-[#E8192C]/50 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO</option>
                    <option value="paid-media">Paid Media</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="content">Content Marketing</option>
                    <option value="web">Web Design & Development</option>
                    <option value="branding">Branding Strategy</option>
                    <option value="email-sms">Email & SMS Marketing</option>
                    <option value="analytics">Analytics & Reporting</option>
                    <option value="strategy">Marketing Strategy</option>
                    <option value="full-service">Full-Service Retainer</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-syne font-bold text-[#6E6E8A] uppercase tracking-wider mb-2">
                    Monthly Budget Range
                  </label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E2EE] text-[#6E6E8A] text-sm focus:outline-none focus:border-[#E8192C]/50 transition-colors"
                  >
                    <option value="">Select a budget range</option>
                    <option value="under-2500">Under $2,500/month</option>
                    <option value="2500-5000">$2,500 - $5,000/month</option>
                    <option value="5000-10000">$5,000 - $10,000/month</option>
                    <option value="10000-plus">$10,000+/month</option>
                    <option value="project">One-off project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-syne font-bold text-[#6E6E8A] uppercase tracking-wider mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E2EE] text-[#0D0D1A] text-sm placeholder-[#6E6E8A]/40 focus:outline-none focus:border-[#E8192C]/50 transition-colors resize-none"
                    placeholder="Tell us about your brand, your goals, and what you'd like to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#E8192C] hover:bg-[#FF3347] text-white font-syne font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,25,44,0.4)]"
                >
                  Send Message
                </button>

                <p className="text-xs text-[#6E6E8A] text-center">
                  We respond to all enquiries within one business day.
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              {/* Direct contact */}
              <div className="p-8 rounded-2xl border border-[#E2E2EE] bg-[#F5F5FA]">
                <h3 className="font-syne font-bold text-xl text-[#0D0D1A] mb-6">Contact Details</h3>
                <div className="space-y-5">
                  <a href="mailto:hello@mayicreative.com.au" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[#E8192C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6E6E8A] mb-0.5">Email</p>
                      <p className="font-syne font-bold text-[#0D0D1A] group-hover:text-[#E8192C] transition-colors">
                        hello@mayicreative.com.au
                      </p>
                    </div>
                  </a>
                  <a href="tel:0420371048" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-[#E8192C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6E6E8A] mb-0.5">Phone</p>
                      <p className="font-syne font-bold text-[#0D0D1A] group-hover:text-[#E8192C] transition-colors">0420 371 048</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-[#E8192C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6E6E8A] mb-0.5">Location</p>
                      <p className="font-syne font-bold text-[#0D0D1A]">152 St Georges Terrace, Perth WA 6000</p>
                      <p className="text-xs text-[#6E6E8A]">Serving clients nationally & globally</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-[#E8192C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6E6E8A] mb-0.5">Response Time</p>
                      <p className="font-syne font-bold text-[#0D0D1A]">Within 1 business day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="p-8 rounded-2xl border border-[#E2E2EE] bg-[#F5F5FA]">
                <h3 className="font-syne font-bold text-xl text-[#0D0D1A] mb-6">What happens next?</h3>
                <div className="space-y-5">
                  {[
                    { step: '01', title: 'We review your enquiry', desc: 'We read every message and come prepared with ideas specific to your situation.' },
                    { step: '02', title: 'Free strategy call', desc: 'A 30-minute call to understand your goals and see if we\'re the right fit.' },
                    { step: '03', title: 'Custom proposal', desc: 'A tailored proposal with clear scope, pricing, and expected outcomes.' },
                    { step: '04', title: 'We get to work', desc: 'Onboarding, strategy, and execution all happen within the first two weeks.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-syne font-bold text-[#E8192C]">{item.step}</span>
                      </div>
                      <div>
                        <p className="font-syne font-bold text-sm text-[#0D0D1A] mb-0.5">{item.title}</p>
                        <p className="text-xs text-[#6E6E8A]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-3">
                {['Free initial audit', 'Response within 24hrs', 'Perth based', 'Senior specialists'].map((signal) => (
                  <div key={signal} className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E2E2EE] bg-[#F5F5FA]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8192C]" />
                    <span className="text-xs text-[#6E6E8A] font-syne">{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
