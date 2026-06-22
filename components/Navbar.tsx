'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  { label: 'SEO', href: '/services/seo' },
  { label: 'Paid Media', href: '/services/paid-media' },
  { label: 'Social Media', href: '/services/social-media-marketing' },
  { label: 'Content Marketing', href: '/services/content-marketing' },
  { label: 'Web Design & Dev', href: '/services/web-design-development' },
  { label: 'Branding Strategy', href: '/services/branding-strategy' },
  { label: 'Email & SMS', href: '/services/email-marketing' },
  { label: 'Analytics & Reporting', href: '/services/analytics-reporting' },
  { label: 'Marketing Strategy', href: '/services/marketing-strategy' },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#E2E2EE]'
          : 'bg-white/80 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/mayi-logo.png"
              alt="Mayi Digital Creative"
              width={160}
              height={60}
              className="h-28 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="relative flex items-center gap-1 text-[#6E6E8A] hover:text-[#0D0D1A] text-sm font-medium transition-colors duration-200 group">
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                  >
                    <div className="bg-white border border-[#E2E2EE] rounded-2xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                      <Link
                        href="/services"
                        className="block px-4 py-2.5 text-xs font-syne font-bold text-[#E8192C] uppercase tracking-wider hover:bg-[#F5F5FA] rounded-xl transition-colors"
                      >
                        All Services
                      </Link>
                      <div className="h-px bg-[#E2E2EE] mx-4 my-1" />
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2.5 text-sm text-[#6E6E8A] hover:text-[#0D0D1A] hover:bg-[#F5F5FA] rounded-xl transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[#6E6E8A] hover:text-[#0D0D1A] text-sm font-medium transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E8192C] group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="relative px-6 py-2.5 bg-[#E8192C] hover:bg-[#FF3347] text-white text-sm font-syne font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,25,44,0.4)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#0D0D1A] p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E2EE]">
          <div className="px-6 py-6 space-y-4">
            <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-[#6E6E8A] hover:text-[#0D0D1A] py-1 transition-colors"
              >
                {s.label}
              </Link>
            ))}
            <div className="h-px bg-[#E2E2EE]" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-[#6E6E8A] hover:text-[#0D0D1A] py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-3 bg-[#E8192C] text-white text-sm font-syne font-bold rounded-full mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
