'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState<'default' | 'link' | 'video'>('default')
  const [visible, setVisible] = useState(false)
  const [onDark, setOnDark] = useState(false)

  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.6 })

  const dx = useSpring(mx, { stiffness: 400, damping: 28 })
  const dy = useSpring(my, { stiffness: 400, damping: 28 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onEnterLink = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      if (el.dataset.cursorVideo !== undefined) setHoverType('video')
      else setHoverType('link')
    }
    const onLeaveLink = () => setHoverType('default')

    const onEnterDark = () => setOnDark(true)
    const onLeaveDark = () => setOnDark(false)

    window.addEventListener('mousemove', onMove)

    const update = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
      document.querySelectorAll('[data-cursor-theme="dark"]').forEach(el => {
        el.addEventListener('mouseenter', onEnterDark)
        el.addEventListener('mouseleave', onLeaveDark)
      })
    }
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [mx, my, visible])

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  if (isMobile) return null

  return (
    <>
      {/* Large trailing circle */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border"
        style={{ left: sx, top: sy, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hoverType === 'link' ? 70 : hoverType === 'video' ? 100 : 40,
          height: hoverType === 'link' ? 70 : hoverType === 'video' ? 100 : 40,
          opacity: visible ? 1 : 0,
          backgroundColor:
            hoverType === 'link'
              ? 'rgba(232,25,44,0.10)'
              : onDark
              ? 'rgba(255,255,255,0.06)'
              : 'rgba(13,13,26,0.04)',
          borderColor:
            hoverType === 'link'
              ? 'rgba(232,25,44,0.6)'
              : hoverType === 'video'
              ? onDark ? 'rgba(255,255,255,0.6)' : 'rgba(13,13,26,0.6)'
              : onDark ? 'rgba(255,255,255,0.5)' : 'rgba(13,13,26,0.3)',
        }}
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{ left: dx, top: dy, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hoverType !== 'default' ? 8 : 6,
          height: hoverType !== 'default' ? 8 : 6,
          opacity: visible ? 1 : 0,
          backgroundColor: hoverType === 'link' ? '#E8192C' : onDark ? '#FFFFFF' : '#0D0D1A',
          boxShadow: hoverType === 'link' ? '0 0 12px rgba(232,25,44,0.8)' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* Play label for video */}
      {hoverType === 'video' && (
        <motion.div
          className="fixed pointer-events-none z-[9999] flex items-center justify-center"
          style={{ left: sx, top: sy, translateX: '-50%', translateY: '-50%' }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-[10px] font-syne font-bold text-white uppercase tracking-widest">Play</span>
        </motion.div>
      )}
    </>
  )
}
