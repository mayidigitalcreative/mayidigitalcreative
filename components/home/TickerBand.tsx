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
    <div className="relative bg-[#0D0D1A] py-5" style={{ overflow: 'clip' }}>
      <div
        className="flex whitespace-nowrap ticker-scroll"
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
      </div>
    </div>
  )
}
