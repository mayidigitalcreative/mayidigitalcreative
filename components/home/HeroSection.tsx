'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import MagneticButton from '@/components/animations/MagneticButton'

const lines = [
  { text: 'We Build', gradient: false },
  { text: 'Brands That', gradient: false },
  { text: 'Dominate.', gradient: true },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (video.readyState >= 2) setVideoLoaded(true)
    video.play().catch(() => {})
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const scrollOverlay = useTransform(scrollYProgress, [0, 0.5], [0, 0.18])
  const heroOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mouseX.set((e.clientX - cx) / cx)
      mouseY.set((e.clientY - cy) / cy)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const parallaxX = useTransform(springX, [-1, 1], ['-2%', '2%'])
  const parallaxY = useTransform(springY, [-1, 1], ['-2%', '2%'])

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-white">

      {/* ── VIDEO BACKGROUND ── */}
      <motion.div
        style={{ scale: videoScale, x: parallaxX, y: parallaxY }}
        className="absolute inset-[-5%] z-0"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Fallback animated gradient when no video */}
        {!videoLoaded && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-white" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
              className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-[#E8192C]/20 blur-[120px]"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.12, 0.06] }}
              transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-[#4B3A9B]/10 blur-[120px]"
            />
          </div>
        )}
      </motion.div>

      {/* ── CINEMATIC GRADIENT OVERLAY — video shows at top, fades to white at bottom ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.22) 30%, rgba(255,255,255,0.72) 65%, rgba(255,255,255,0.97) 100%)',
        }}
      />
      {/* Small scroll-driven additional overlay for smooth exit */}
      <motion.div
        style={{ opacity: scrollOverlay }}
        className="absolute inset-0 bg-white z-[2] pointer-events-none"
      />

      {/* ── NOISE GRAIN ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      {/* ── CONTENT ── */}
      <motion.div
        style={{ y: textY, opacity: heroOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3 mb-10"
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-[#E8192C]"
          />
          <span className="text-xs font-syne font-bold text-white uppercase tracking-[0.2em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            Full-Service Digital Marketing · Perth, Australia
          </span>
        </motion.div>

        {/* ── 3-LINE HEADLINE ── */}
        <h1 className="font-syne font-bold leading-[0.9] mb-12 overflow-hidden">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className={`block text-[clamp(3.5rem,12vw,13rem)] ${
                  line.gradient ? 'bg-clip-text text-transparent' : 'text-[#0D0D1A]'
                }`}
                style={
                  line.gradient
                    ? {
                        backgroundImage: 'linear-gradient(135deg, #E8192C 0%, #FF3347 40%, #6B52C8 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }
                    : {}
                }
                initial={{ y: '110%', rotateX: -20, opacity: 0 }}
                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.45 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Bottom row — sub + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <p className="text-[#4A4A60] text-base lg:text-lg max-w-sm leading-relaxed font-medium">
            Perth&apos;s most ambitious digital agency. Every channel, every market, zero compromises.
          </p>

          <div className="flex items-center gap-4">
            <MagneticButton>
              <Link
                href="/contact"
                className="flex items-center gap-3 px-8 py-4 bg-[#E8192C] hover:bg-[#C8101F] text-white font-syne font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_60px_rgba(232,25,44,0.45)] group"
              >
                Start a Project
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowUpRight size={16} />
                </motion.div>
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#0D0D1A]/15 to-[#0D0D1A]/35 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[#E8192C]"
            animate={{ height: ['0%', '100%'], top: ['0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            style={{ height: '40%' }}
          />
        </div>
        <span className="text-[10px] font-syne uppercase tracking-[0.3em] text-[#0D0D1A]/25">Scroll</span>
      </motion.div>

      {/* ── CORNER COORDINATES ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-8 z-20 text-[10px] font-syne text-[#0D0D1A]/25 leading-relaxed"
      >
        <div>31°57&apos;S 115°51&apos;E</div>
        <div>Perth, WA</div>
      </motion.div>

    </section>
  )
}
