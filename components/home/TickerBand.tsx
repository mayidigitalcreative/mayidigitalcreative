'use client'

import { motion } from 'framer-motion'

const items = [
  'Perth\'s Most Ambitious Agency',
  'SEO & Paid Media',
  'Social Media Marketing',
  'Branding & Web Design',
  'Data-Driven Strategy',
  'Transparent Pricing',
  'Full-Service Digital',
  'Data-Driven Results',
]

export default function TickerBand() {
  const allItems = [...items, ...items]

  return (
    <div className="relative overflow-hidden bg-[#0D0D1A] py-5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        style={{ width: 'max-content' }}
      >
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span className="font-syne font-bold text-[11px] text-white/50 uppercase tracking-[0.22em] px-8">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#E8192C]/70 flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
