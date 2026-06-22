'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ClipRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'top' | 'bottom' | 'left' | 'right'
}

export default function ClipReveal({
  children,
  className,
  delay = 0,
  direction = 'bottom',
}: ClipRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const clipPaths = {
    bottom: {
      hidden: 'inset(0 0 100% 0)',
      visible: 'inset(0 0 0% 0)',
    },
    top: {
      hidden: 'inset(100% 0 0 0)',
      visible: 'inset(0% 0 0 0)',
    },
    left: {
      hidden: 'inset(0 100% 0 0)',
      visible: 'inset(0 0% 0 0)',
    },
    right: {
      hidden: 'inset(0 0 0 100%)',
      visible: 'inset(0 0 0 0%)',
    },
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: clipPaths[direction].hidden, opacity: 0 }}
        animate={isInView ? { clipPath: clipPaths[direction].visible, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
