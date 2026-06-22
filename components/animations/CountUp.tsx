'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  end: string
  duration?: number
  className?: string
}

export default function CountUp({ end, duration = 2, className }: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState('0')

  const numericMatch = end.match(/[\d.]+/)
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0
  const prefix = end.replace(/[\d.]+.*/, '')
  const suffix = end.replace(/^[^0-9]*[\d.]+/, '')

  useEffect(() => {
    if (!isInView) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = numericValue * eased
      setDisplay(
        numericValue % 1 === 0
          ? Math.floor(current).toString()
          : current.toFixed(1)
      )
      if (progress < 1) requestAnimationFrame(step)
      else setDisplay(numericValue % 1 === 0 ? numericValue.toString() : numericValue.toFixed(1))
    }
    requestAnimationFrame(step)
  }, [isInView, numericValue, duration])

  if (!numericMatch) {
    return <span ref={ref} className={className}>{end}</span>
  }

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  )
}
