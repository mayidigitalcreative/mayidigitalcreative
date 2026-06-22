'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import AnimateIn from '@/components/animations/AnimateIn'
import ClipReveal from '@/components/animations/ClipReveal'

const studies = [
  {
    num: '01',
    client: 'Client A',
    category: 'Luxury Furniture',
    services: 'SEO · Paid Media · Social Media',
    description: 'Building a comprehensive digital presence for one of the world\'s most prestigious luxury furniture brands across the Australian market.',
    href: '/contact',
    color: '#E8192C',
    metric: { value: '3×', label: 'Organic Growth' },
  },
  {
    num: '02',
    client: 'Ace Hotpot',
    category: 'Dining & Hospitality',
    services: 'Social Media · Paid Media · Branding',
    description: 'Transforming a beloved Perth hotpot restaurant into one of the city\'s most talked-about dining destinations through targeted social content and precision paid campaigns.',
    href: '/work/ace-hotpot',
    color: '#E8192C',
    metric: { value: '5×', label: 'Social Reach' },
  },
  {
    num: '03',
    client: 'Your Brand',
    category: 'Any Industry',
    services: 'Full-Service Digital Marketing',
    description: 'Ambitious brands deserve exceptional marketing. Book a strategy call and let\'s build something that dominates your market.',
    href: '/contact',
    color: '#6B6B80',
    cta: true,
  },
]

export default function CaseStudies() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'center center'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, 0])

  return (
    <section ref={sectionRef} className="py-32 bg-[#F5F5FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <AnimateIn>
            <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-[0.2em] mb-5">Selected Work</p>
            <h2 className="font-syne font-bold text-[clamp(2.5rem,6vw,5rem)] text-[#0D0D1A] leading-[1.0]">
              Results that
              <br />speak for themselves.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2} direction="left">
            <Link href="/work" className="flex items-center gap-2 text-sm font-syne font-bold text-[#6E6E8A] hover:text-[#0D0D1A] transition-colors group">
              All Work <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </AnimateIn>
        </div>

        {/* Case study rows */}
        <div className="space-y-4">
          {studies.map((study, i) => (
            <ClipReveal key={i} delay={i * 0.12}>
              <Link
                href={study.href}
                className={`group relative flex flex-col lg:flex-row lg:items-center gap-8 p-8 lg:p-12 rounded-3xl border bg-white overflow-hidden transition-all duration-500 block ${
                  study.cta
                    ? 'border-dashed border-[#D0D0E0] hover:border-[#E8192C]/30'
                    : 'border-[#E2E2EE] hover:border-[#E8192C]/30'
                }`}
              >
                {/* Hover bg */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ background: `radial-gradient(ellipse at 20% 50%, ${study.color}0D 0%, transparent 60%)` }}
                />

                {/* Number */}
                <div className="flex-shrink-0">
                  <motion.span
                    className="font-syne font-bold text-[80px] lg:text-[100px] leading-none select-none block"
                    style={{ color: study.color + '1A' }}
                  >
                    {study.num}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="flex-1 relative">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="text-xs font-syne font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{
                        color: study.color,
                        backgroundColor: study.color + '14',
                        border: `1px solid ${study.color}28`,
                      }}
                    >
                      {study.category}
                    </span>
                    <span className="text-xs text-[#9090A8] font-syne">{study.services}</span>
                  </div>
                  <h3 className={`font-syne font-bold text-3xl lg:text-5xl mb-4 leading-tight ${study.cta ? 'text-[#9090A8]' : 'text-[#0D0D1A]'}`}>
                    {study.client}
                  </h3>
                  <p className="text-[#6E6E8A] max-w-lg leading-relaxed">{study.description}</p>
                </div>

                {/* Metric (non-CTA only) */}
                {study.metric && !study.cta && (
                  <div className="flex-shrink-0 text-center lg:text-right hidden lg:block">
                    <p className="font-syne font-bold text-4xl text-[#E8192C]">{study.metric.value}</p>
                    <p className="text-xs text-[#9090A8] font-syne uppercase tracking-wider mt-1">{study.metric.label}</p>
                  </div>
                )}

                {/* Arrow */}
                <motion.div
                  className="flex-shrink-0 w-14 h-14 rounded-full border border-[#E2E2EE] flex items-center justify-center self-end lg:self-auto"
                  whileHover={{ scale: 1.15, borderColor: study.cta ? '#9090A8' : '#E8192C', backgroundColor: study.cta ? '#F5F5FA' : 'rgba(232,25,44,0.1)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <ArrowUpRight size={18} className="text-[#9090A8] group-hover:text-[#0D0D1A] transition-colors" />
                </motion.div>
              </Link>
            </ClipReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
