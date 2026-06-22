import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

const services = [
  { label: 'SEO', href: '/services/seo' },
  { label: 'Paid Media', href: '/services/paid-media' },
  { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
  { label: 'Content Marketing', href: '/services/content-marketing' },
  { label: 'Web Design & Development', href: '/services/web-design-development' },
  { label: 'Branding Strategy', href: '/services/branding-strategy' },
  { label: 'Email & SMS Marketing', href: '/services/email-marketing' },
  { label: 'Analytics & Reporting', href: '/services/analytics-reporting' },
  { label: 'Marketing Strategy', href: '/services/marketing-strategy' },
]

const company = [
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },

  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/about/careers' },
  { label: 'Contact', href: '/contact' },
]

const resources = [
  { label: 'Free Guides', href: '/resources/guides' },
  { label: 'Free Tools', href: '/resources/tools' },
  { label: 'Glossary', href: '/resources/glossary' },
  { label: 'FAQ', href: '/faq' },
]

const social = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'TikTok', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0D0D1A]" data-cursor-theme="dark">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-3">
              Ready to dominate?
            </p>
            <h2 className="font-syne font-bold text-3xl lg:text-4xl text-white">
              Let&apos;s build something{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E8192C 0%, #FF3347 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                extraordinary.
              </span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-4 bg-[#E8192C] hover:bg-[#C8101F] text-white font-syne font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,25,44,0.4)] whitespace-nowrap group"
          >
            Start a Project
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/mayi-logo.png"
                alt="Mayi Digital Creative"
                width={160}
                height={60}
                className="h-28 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              A full-service digital marketing agency based in Perth, Australia. We build brands that dominate. Across every channel, in every market.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@mayicreative.com.au"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <Mail size={16} className="text-[#E8192C]" />
                hello@mayicreative.com.au
              </a>
              <a
                href="tel:0420371048"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <Phone size={16} className="text-[#E8192C]" />
                0420 371 048
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin size={16} className="text-[#E8192C]" />
                152 St Georges Terrace, Perth WA 6000
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-syne font-bold text-white/40 uppercase tracking-widest mb-6">Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-syne font-bold text-white/40 uppercase tracking-widest mb-6">Company</p>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Social */}
          <div>
            <p className="text-xs font-syne font-bold text-white/40 uppercase tracking-widest mb-6">Resources</p>
            <ul className="space-y-3 mb-10">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs font-syne font-bold text-white/40 uppercase tracking-widest mb-6">Follow Us</p>
            <ul className="space-y-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-white/50 hover:text-[#E8192C] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2024 Mayi Digital Creative. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
