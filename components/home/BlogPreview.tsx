'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import AnimateIn from '@/components/animations/AnimateIn'
import ClipReveal from '@/components/animations/ClipReveal'

const posts = [
  {
    num: '01',
    category: 'SEO',
    categoryColor: '#E8192C',
    title: 'The Complete Guide to Technical SEO in 2026',
    excerpt: 'Core Web Vitals, crawlability, indexing, and schema markup: everything your website needs to rank in a post-AI search world.',
    readTime: '8 min read',
    href: '/blog/technical-seo-guide-2026',
    featured: true,
  },
  {
    num: '02',
    category: 'Social Media',
    categoryColor: '#E8192C',
    title: 'TikTok for Business in Australia: The 2026 Playbook',
    excerpt: 'TikTok is no longer just for Gen Z. Here\'s how Australian brands across every industry are driving real, measurable revenue from the platform.',
    readTime: '6 min read',
    href: '/blog/tiktok-business-australia-2026',
    featured: false,
  },
  {
    num: '03',
    category: 'Paid Media',
    categoryColor: '#E8192C',
    title: 'Google vs Meta Ads in 2026: Where Should Your Budget Go?',
    excerpt: 'A data-driven breakdown of ROAS, audience intent, and targeting capabilities to help you allocate your ad spend intelligently.',
    readTime: '7 min read',
    href: '/blog/google-vs-meta-ads-2026',
    featured: false,
  },
]

export default function BlogPreview() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <section ref={sectionRef} className="py-32 bg-[#F5F5FA] relative" style={{ overflow: 'clip' }}>
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#E8192C]/[0.03] via-transparent to-[#4B3A9B]/[0.02]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <AnimateIn>
            <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-[0.2em] mb-5">Latest Insights</p>
            <h2 className="font-syne font-bold text-[clamp(2.5rem,6vw,5rem)] text-[#0D0D1A] leading-[1.0]">
              Marketing intelligence
              <br />
              <span style={{ background: 'linear-gradient(135deg,#E8192C,#FF3347)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                you can act on.
              </span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2} direction="left">
            <Link href="/blog" className="flex items-center gap-2 text-sm font-syne font-bold text-[#6E6E8A] hover:text-[#0D0D1A] transition-colors group">
              All Articles <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </AnimateIn>
        </div>

        {/* Featured article — full width */}
        <ClipReveal delay={0}>
          <Link
            href={featured.href}
            className="group relative flex flex-col lg:flex-row gap-10 p-10 lg:p-14 rounded-3xl border border-[#E2E2EE] bg-white overflow-hidden hover:border-[#E8192C]/30 transition-all duration-500 block mb-4"
          >
            {/* Hover gradient */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ background: `radial-gradient(ellipse at 0% 50%, ${featured.categoryColor}0D 0%, transparent 55%)` }}
            />

            {/* Left: number + category */}
            <div className="flex-shrink-0 flex lg:flex-col justify-between lg:justify-start gap-4">
              <span
                className="font-syne font-bold text-[80px] leading-none select-none block"
                style={{ color: featured.categoryColor + '18' }}
              >
                {featured.num}
              </span>
              <div className="flex items-start gap-3 lg:mt-auto">
                <span
                  className="inline-block px-3 py-1 rounded-full text-[10px] font-syne font-bold uppercase tracking-[0.15em]"
                  style={{ color: featured.categoryColor, backgroundColor: featured.categoryColor + '14', border: `1px solid ${featured.categoryColor}28` }}
                >
                  {featured.category}
                </span>
                <span className="text-xs text-[#9090A8] font-syne mt-1">{featured.readTime}</span>
              </div>
            </div>

            {/* Right: content */}
            <div className="flex-1 flex flex-col justify-between gap-8 relative">
              <div>
                <span className="inline-block text-[10px] font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full bg-[#E8192C]/8 border border-[#E8192C]/20">
                  Featured
                </span>
                <h3 className="font-syne font-bold text-2xl lg:text-4xl text-[#0D0D1A] leading-snug mb-4 group-hover:text-[#0D0D1A] transition-colors">
                  {featured.title}
                </h3>
                <p className="text-[#6E6E8A] leading-relaxed max-w-2xl">{featured.excerpt}</p>
              </div>

              <div className="flex items-center gap-3">
                <motion.div
                  className="w-12 h-12 rounded-full border border-[#E2E2EE] flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.15, borderColor: featured.categoryColor, backgroundColor: featured.categoryColor + '14' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <ArrowUpRight size={16} className="text-[#6E6E8A] group-hover:text-[#0D0D1A] transition-colors" />
                </motion.div>
                <span className="text-sm font-syne font-bold text-[#6E6E8A] group-hover:text-[#0D0D1A] transition-colors">Read Article</span>
              </div>
            </div>
          </Link>
        </ClipReveal>

        {/* Secondary articles — 2-column grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {rest.map((post, i) => (
            <ClipReveal key={i} delay={(i + 1) * 0.1}>
              <Link
                href={post.href}
                className="group relative flex flex-col gap-6 p-8 lg:p-10 rounded-2xl border border-[#E2E2EE] bg-white overflow-hidden hover:border-[#E8192C]/25 transition-all duration-500 block h-full"
              >
                {/* Hover gradient */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${post.categoryColor}0D 0%, transparent 60%)` }}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-syne font-bold uppercase tracking-[0.15em]"
                    style={{ color: post.categoryColor, backgroundColor: post.categoryColor + '14', border: `1px solid ${post.categoryColor}28` }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-[#9090A8] font-syne flex-shrink-0 mt-0.5">{post.readTime}</span>
                </div>

                <div className="relative flex-1">
                  <h3 className="font-syne font-bold text-xl text-[#0D0D1A] leading-snug mb-3 group-hover:text-[#0D0D1A] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#6E6E8A] leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="relative flex items-center justify-between">
                  <span
                    className="font-syne font-bold text-[48px] leading-none select-none"
                    style={{ color: post.categoryColor + '14' }}
                  >
                    {post.num}
                  </span>
                  <motion.div
                    className="w-10 h-10 rounded-full border border-[#E2E2EE] flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.15, borderColor: post.categoryColor, backgroundColor: post.categoryColor + '14' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <ArrowUpRight size={14} className="text-[#6E6E8A] group-hover:text-[#0D0D1A] transition-colors" />
                  </motion.div>
                </div>
              </Link>
            </ClipReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
