'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimateIn from '@/components/animations/AnimateIn'
import ClipReveal from '@/components/animations/ClipReveal'

const steps = [
  { number: '01', title: 'Discovery & Audit', description: 'Deep dive into your business, goals, competitors, and digital presence. We audit everything before touching anything.' },
  { number: '02', title: 'Strategy', description: 'A bespoke full-funnel strategy built around your market, budget, and growth targets. No templates. No guesswork.' },
  { number: '03', title: 'Execution', description: 'Senior specialists execute across every channel: content, campaigns, creative, and technical. All to the highest standard.' },
  { number: '04', title: 'Optimise & Scale', description: 'Real-time monitoring, relentless optimisation, and compounding growth. We scale what works and cut what doesn\'t.' },
]

export default function ProcessSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const lineH = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%'])
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section ref={sectionRef} className="py-32 bg-[#F5F5FA] relative" style={{ overflow: 'clip' }}>
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4B3A9B]/5 via-transparent to-[#E8192C]/3" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-32">
            <AnimateIn>
              <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-[0.2em] mb-5">How We Work</p>
              <h2 className="font-syne font-bold text-[clamp(2.5rem,5vw,4.5rem)] text-[#0D0D1A] leading-[1.0] mb-8">
                A process
                <br />built for
                <br />
                <span style={{ background: 'linear-gradient(135deg,#E8192C,#FF3347)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>results.</span>
              </h2>
              <p className="text-[#6E6E8A] leading-relaxed max-w-sm">
                Every engagement starts with strategy and ends with measurable growth. We don&apos;t guess. We research, plan, execute, and scale with precision.
              </p>
            </AnimateIn>
          </div>

          {/* Right — steps */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E2E2EE] overflow-hidden hidden md:block">
              <motion.div style={{ height: lineH }} className="w-full bg-gradient-to-b from-[#E8192C] via-[#C44090] to-[#4B3A9B] origin-top" />
            </div>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <ClipReveal key={i} delay={i * 0.1} direction="left">
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="group flex gap-6 md:gap-10 p-7 rounded-2xl border border-[#E2E2EE] hover:border-[#E8192C]/25 bg-white relative overflow-hidden cursor-pointer"
                  >
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(232,25,44,0.04) 0%, transparent 60%)' }}
                    />
                    {/* Dot */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#E2E2EE] group-hover:border-[#E8192C]/50 flex items-center justify-center bg-white z-10 transition-colors">
                      <span className="font-syne font-bold text-xs text-[#6E6E8A] group-hover:text-[#E8192C] transition-colors">{step.number}</span>
                    </div>
                    <div className="relative">
                      <h3 className="font-syne font-bold text-xl text-[#0D0D1A] mb-2">{step.title}</h3>
                      <p className="text-sm text-[#6E6E8A] leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                </ClipReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
