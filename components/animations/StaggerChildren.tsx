'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
  once?: boolean
}

export function StaggerParent({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
  once = true,
}: StaggerChildrenProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: initialDelay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChild({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
