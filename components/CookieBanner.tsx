'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 28 }}
          className="fixed bottom-4 left-4 right-4 z-[9999] max-w-2xl mx-auto"
        >
          <div className="bg-[#0D0D1A] border border-white/10 rounded-2xl px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-white/70 leading-relaxed flex-1">
              We use cookies to improve your experience.{' '}
              <Link href="/cookie-policy" className="text-white/40 underline underline-offset-2 hover:text-white/60 transition-colors">
                Learn more
              </Link>
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={decline}
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-5 py-2.5 bg-[#E8192C] hover:bg-[#FF3347] text-white text-sm font-syne font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,25,44,0.4)]"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
