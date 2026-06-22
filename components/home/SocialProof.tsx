'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimateIn from '@/components/animations/AnimateIn'
import { StaggerParent, StaggerChild } from '@/components/animations/StaggerChildren'
import CountUp from '@/components/animations/CountUp'

const stats = [
  { value: '10+', label: 'Marketing\nChannels', sub: 'Every major platform covered' },
  { value: '3×', label: 'Average\nGrowth', sub: 'Revenue multiplier across clients' },
  { value: '14+', label: 'Industries\nServed', sub: 'From luxury to eCommerce' },
  { value: '$0', label: 'Hidden\nFees', sub: 'Radical transparency, always' },
]

export default function SocialProof() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E2E2EE] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Client */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <AnimateIn>
            <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-[0.2em] mb-5">Trusted By</p>
            <h2 className="font-syne font-bold text-[clamp(2rem,5vw,4rem)] text-[#0D0D1A] leading-[1.05]">
              Working with brands
              <br />that demand the best.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="space-y-4">
              {[
                { industry: 'Real Estate', location: 'Perth, WA' },
                { industry: 'Dining & Hospitality', location: 'Perth, WA' },
                { industry: 'Commercial Lighting', location: 'Western Australia' },
                { industry: 'Health & Wellness', location: 'Perth, WA' },
                { industry: 'eCommerce & Retail', location: 'Australia' },
              ].map((client, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.01, borderColor: 'rgba(232,25,44,0.3)' }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="relative flex items-center justify-between px-6 py-4 rounded-xl border border-[#E2E2EE] bg-[#F5F5FA] overflow-hidden"
                >
                  <div>
                    <p className="font-syne font-bold text-sm text-[#0D0D1A]">{client.industry}</p>
                    <p className="text-xs text-[#6E6E8A]">{client.location}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#E8192C] flex-shrink-0" />
                </motion.div>
              ))}
              <div className="flex items-center justify-center p-4 rounded-xl border border-dashed border-[#E2E2EE]">
                <p className="text-xs font-syne text-[#6E6E8A]/50 uppercase tracking-widest">Your brand could be here</p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* ── BIG STATS ── */}
        <StaggerParent className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E2EE] rounded-3xl overflow-hidden" staggerDelay={0.08}>
          {stats.map((stat, i) => (
            <StaggerChild key={i}>
              <motion.div
                className="flex flex-col justify-between p-8 lg:p-10 bg-white min-h-[200px] relative overflow-hidden group"
                whileHover={{ backgroundColor: '#F5F5FA' }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(232,25,44,0.04) 0%, transparent 70%)' }}
                />
                <CountUp
                  end={stat.value}
                  className="font-syne font-bold text-[clamp(3rem,6vw,5.5rem)] leading-none text-[#E8192C] relative"
                />
                <div className="relative">
                  <p className="font-syne font-bold text-sm text-[#0D0D1A] mb-1 whitespace-pre-line leading-tight">{stat.label}</p>
                  <p className="text-xs text-[#6E6E8A]">{stat.sub}</p>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  )
}
