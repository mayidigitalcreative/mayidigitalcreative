'use client'

import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import MagneticButton from '@/components/animations/MagneticButton'
import AnimateIn from '@/components/animations/AnimateIn'

export default function CTASection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="relative py-48 overflow-hidden bg-[#0D0D1A]">
      {/* Top separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#E8192C]/40 to-transparent" />

      {/* Large background text */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="font-syne font-bold text-[20vw] text-[#FFFFFF]/[0.02] whitespace-nowrap">
          DOMINATE
        </span>
      </motion.div>

      {/* Gradient orbs */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#E8192C]/[0.12] blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#4B3A9B]/[0.15] blur-[140px]" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <AnimateIn>
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8192C]/40 bg-[#E8192C]/15 mb-10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8192C]" />
            <span className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-[0.2em]">
              Accepting New Clients
            </span>
          </motion.div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="font-syne font-bold text-[clamp(3rem,8vw,7rem)] text-white leading-[0.95] mb-10">
            Ready to
            <br />
            <span style={{ background: 'linear-gradient(135deg,#E8192C 0%,#FF3347 40%,#6B52C8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              dominate
            </span>
            <br />
            your market?
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-14">
            Book a free strategy call. We&apos;ll audit your digital presence, identify your biggest opportunities, and show you exactly how we drive growth.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <MagneticButton>
            <Link
              href="/contact"
              className="flex items-center gap-3 px-10 py-5 bg-[#E8192C] hover:bg-[#C8101F] text-white font-syne font-bold text-base rounded-full transition-all duration-300 hover:shadow-[0_0_80px_rgba(232,25,44,0.5)] group"
            >
              Book a Free Strategy Call
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowUpRight size={18} />
              </motion.div>
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a
              href="mailto:hello@mayicreative.com.au"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 text-white font-syne font-bold text-base rounded-full transition-all duration-300"
            >
              <Mail size={16} />
              hello@mayicreative.com.au
            </a>
          </MagneticButton>
        </AnimateIn>

        {/* Trust pills */}
        <AnimateIn delay={0.4} className="flex flex-wrap items-center justify-center gap-6">
          {['Free Initial Audit', 'Perth Based', 'Senior Specialists', 'Transparent Pricing'].map((item, i) => (
            <motion.div
              key={item}
              className="flex items-center gap-2 text-xs font-syne text-white/40 uppercase tracking-widest"
              whileHover={{ color: '#FFFFFF', scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#E8192C]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
              />
              {item}
            </motion.div>
          ))}
        </AnimateIn>
      </div>
    </section>
  )
}
