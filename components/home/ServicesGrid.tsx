'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import TiltCard from '@/components/animations/TiltCard'
import AnimateIn from '@/components/animations/AnimateIn'
import { StaggerParent, StaggerChild } from '@/components/animations/StaggerChildren'

const services = [
  { number: '01', title: 'SEO', description: 'Technical, local, eCommerce, and enterprise SEO that compounds over time, turning search into your highest-ROI channel.', href: '/services/seo', tag: 'Search' },
  { number: '02', title: 'Paid Media', description: 'Every major platform: Google, Meta, TikTok, LinkedIn, Pinterest. Precision targeting that turns ad spend into revenue.', href: '/services/paid-media', tag: 'Performance' },
  { number: '03', title: 'Social Media', description: 'Management, strategy, influencer, and UGC across every platform. Your brand, amplified.', href: '/services/social-media-marketing', tag: 'Social' },
  { number: '04', title: 'Branding', description: 'Strategy, visual identity, naming, and refresh. Brands built to command attention and justify premium pricing.', href: '/services/branding-strategy', tag: 'Brand' },
  { number: '05', title: 'Web Design', description: 'Beautiful, fast, conversion-optimised websites and landing pages with SEO baked in from day one.', href: '/services/web-design-development', tag: 'Digital' },
  { number: '06', title: 'Analytics & Reporting', description: 'Real-time dashboards, attribution modelling, and performance reporting that ties every dollar of spend to business outcomes.', href: '/services/analytics-reporting', tag: 'Data' },
]

const marqueeItems = ['SEO', 'Paid Media', 'Social Media', 'Branding', 'Web Design', 'Email & SMS', 'Analytics', 'Content', 'Strategy', 'CRO']

export default function ServicesGrid() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* ── SECTION LABEL ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <AnimateIn>
            <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-[0.2em] mb-5">What We Do</p>
            <h2 className="font-syne font-bold text-[clamp(2.5rem,6vw,5rem)] text-[#0D0D1A] leading-[1.0]">
              Every channel.
              <br />
              <span style={{ background: 'linear-gradient(135deg,#E8192C,#FF3347)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Every market.
              </span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2} direction="left" className="max-w-xs">
            <p className="text-[#6E6E8A] text-sm leading-relaxed mb-5">
              10 service areas. One agency. No juggling five vendors. We handle everything under one roof.
            </p>
            <Link href="/services" className="flex items-center gap-2 text-sm font-syne font-bold text-[#0D0D1A] hover:text-[#E8192C] transition-colors group">
              All Services <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </AnimateIn>
        </div>
      </div>

      {/* ── SCROLLING MARQUEE ── */}
      <div className="mb-20 border-y border-[#E2E2EE] py-5 overflow-hidden">
        <motion.div style={{ x: marqueeX }} className="flex gap-12 whitespace-nowrap w-max">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-syne font-bold text-sm text-[#6E6E8A] uppercase tracking-widest">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C]/50" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── 3D TILT CARDS ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
          {services.map((service) => (
            <StaggerChild key={service.href}>
              <TiltCard className="h-full">
                <Link
                  href={service.href}
                  className="group relative flex flex-col h-full min-h-[280px] p-8 rounded-2xl border border-[#E2E2EE] bg-white overflow-hidden transition-colors duration-300 hover:border-[#E8192C]/30"
                >
                  {/* Animated bg gradient on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(232,25,44,0.06) 0%, transparent 70%)' }}
                  />

                  {/* Number */}
                  <div className="flex items-start justify-between mb-auto">
                    <span className="font-syne font-bold text-[64px] leading-none text-[#E2E2EE] group-hover:text-[#E8192C]/15 transition-colors duration-500 select-none">
                      {service.number}
                    </span>
                    <span className="mt-2 px-3 py-1 rounded-full border border-[#E2E2EE] group-hover:border-[#E8192C]/30 text-[10px] font-syne font-bold text-[#6E6E8A] uppercase tracking-widest transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="font-syne font-bold text-2xl text-[#0D0D1A] mb-3 group-hover:text-[#0D0D1A] transition-colors">{service.title}</h3>
                    <p className="text-sm text-[#6E6E8A] leading-relaxed">{service.description}</p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-[#E2E2EE] flex items-center justify-center"
                    whileHover={{ scale: 1.2, borderColor: '#E8192C', backgroundColor: 'rgba(232,25,44,0.1)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <ArrowUpRight size={14} className="text-[#6E6E8A] group-hover:text-[#E8192C] transition-colors" />
                  </motion.div>

                  {/* Bottom glow line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#E8192C] to-[#4B3A9B] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: '100%' }}
                  />
                </Link>
              </TiltCard>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  )
}
