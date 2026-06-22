import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

type Post = {
  slug: string
  category: string
  categoryColor: string
  title: string
  excerpt: string
  readTime: string
  date: string
  content: React.ReactNode
}

const posts: Record<string, Post> = {
  'technical-seo-guide-2025': {
    slug: 'technical-seo-guide-2025',
    category: 'SEO',
    categoryColor: '#E8192C',
    title: 'The Complete Guide to Technical SEO in 2025',
    excerpt: 'Core Web Vitals, crawlability, indexing, and schema markup: everything your website needs to rank in a post-AI search world.',
    readTime: '8 min read',
    date: 'March 2025',
    content: (
      <>
        <p>Technical SEO has always been the foundation of search performance. But in 2025, the rules have shifted. With Google's AI Overviews now dominating the top of search results and Core Web Vitals baked into ranking signals, the technical health of your site has never mattered more.</p>

        <p>This guide covers every layer of technical SEO you need to get right, from crawlability and indexing to page speed and structured data. If you want to rank in a post-AI search world, this is where you start.</p>

        <h2>1. Core Web Vitals: The Non-Negotiables</h2>
        <p>Google's Core Web Vitals - Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) - are now confirmed ranking factors. Here's what each means in practice:</p>
        <ul>
          <li><strong>LCP</strong> measures how fast your largest visible element loads. Aim for under 2.5 seconds. Slow hero images, unoptimised videos, and render-blocking JavaScript are the usual culprits.</li>
          <li><strong>INP</strong> replaced First Input Delay in 2024. It measures the responsiveness of every click and tap throughout a session. Under 200ms is good; over 500ms is a problem.</li>
          <li><strong>CLS</strong> measures visual stability. Elements shouldn't shift after the page loads. Reserve space for images with width/height attributes and avoid injecting content above the fold after load.</li>
        </ul>

        <h2>2. Crawlability and Indexing</h2>
        <p>If Google can't crawl and index your pages, rankings are impossible. Start with an audit of your robots.txt and XML sitemap. Common mistakes include accidentally blocking important pages in robots.txt and failing to submit updated sitemaps to Google Search Console.</p>
        <p>Use the URL Inspection tool in Google Search Console to check individual pages. If a page is indexed but not ranking, that's a content problem. If it's not indexed at all, that's a technical problem requiring investigation.</p>

        <h2>3. Site Architecture and Internal Linking</h2>
        <p>Your site structure tells Google which pages matter most. A flat architecture - where any page can be reached within three clicks from the homepage - distributes authority efficiently. Deep-buried pages lose PageRank before Google even finds them.</p>
        <p>Internal linking is equally critical. Every important page should receive contextual links from other high-traffic pages on your site. Use descriptive anchor text that includes your target keywords naturally.</p>

        <h2>4. Schema Markup and Structured Data</h2>
        <p>Structured data doesn't directly improve rankings, but it dramatically improves how your results appear in search. Rich snippets - star ratings, FAQs, how-to steps, product prices - can double or triple your click-through rate even at the same ranking position.</p>
        <p>At minimum, implement Organisation schema on your homepage, LocalBusiness schema if you serve a geographic area, Article schema on blog posts, and Product schema on product pages. Test everything in Google's Rich Results Test before deploying.</p>

        <h2>5. HTTPS, Security, and Technical Hygiene</h2>
        <p>HTTPS has been a ranking signal since 2014 and is now table stakes. Beyond that, ensure your redirects are clean (301s for permanent changes, no redirect chains), your canonical tags are correctly implemented, and your hreflang tags are accurate if you run international versions of your site.</p>
        <p>Duplicate content is a persistent issue. Ensure consistent use of trailing slashes, resolve www vs non-www conflicts, and use canonical tags to consolidate similar pages rather than letting Google decide which version to index.</p>

        <h2>The Bottom Line</h2>
        <p>Technical SEO is not a one-time project. It's an ongoing audit process. The sites that rank consistently are the ones that catch technical issues before Google does and fix them faster than their competitors. Run a full technical audit at least quarterly and monitor Core Web Vitals and Search Console data weekly.</p>
        <p>If you want Mayi Digital Creative to conduct a technical SEO audit for your site, <Link href="/contact" className="text-[#E8192C] underline underline-offset-2">get in touch</Link>. We'll tell you exactly what's holding you back and how to fix it.</p>
      </>
    ),
  },
  'tiktok-business-australia-2026': {
    slug: 'tiktok-business-australia-2026',
    category: 'Social Media',
    categoryColor: '#E8192C',
    title: 'TikTok for Business in Australia: The 2026 Playbook',
    excerpt: 'TikTok is no longer just for Gen Z. Here\'s how Australian brands across every industry are driving real, measurable revenue from the platform.',
    readTime: '6 min read',
    date: 'January 2026',
    content: (
      <>
        <p>TikTok has crossed a threshold. It's no longer a platform you can afford to dismiss as a teen app. With over 8.5 million active Australian users and a rapidly maturing advertising ecosystem, TikTok is now a serious revenue channel for brands across hospitality, retail, health, real estate, and beyond.</p>

        <p>Here's what's working in 2026 and how to build a TikTok strategy that drives real business outcomes.</p>

        <h2>Why TikTok Works Differently</h2>
        <p>TikTok's algorithm is fundamentally different from every other social platform. Unlike Instagram or Facebook, which prioritise content from accounts you follow, TikTok's For You Page is almost entirely interest-based. That means a brand-new account with zero followers can reach millions of people with the right video.</p>
        <p>This levels the playing field for smaller Australian brands. You don't need a massive existing audience to break through. What you need is content that holds attention for the first three seconds, delivers genuine value or entertainment, and fits naturally into the TikTok content ecosystem.</p>

        <h2>Content That Converts in 2026</h2>
        <p>The content types that are driving real business results right now:</p>
        <ul>
          <li><strong>Behind-the-scenes and process content.</strong> Showing how your product is made, how your team operates, or what a day looks like inside your business consistently outperforms polished ad content. Authenticity is the currency of TikTok.</li>
          <li><strong>Problem-solution videos.</strong> Lead with a pain point your audience has, then show how you solve it. This format works particularly well for service businesses.</li>
          <li><strong>Social proof in native formats.</strong> Customer reactions, before-and-after transformations, and unboxing videos feel native to TikTok and drive exceptional engagement when they're genuine.</li>
          <li><strong>Trend participation with a business angle.</strong> Adapting trending sounds or formats to your brand keeps your content discoverable while maintaining relevance.</li>
        </ul>

        <h2>TikTok Ads: What's Working Now</h2>
        <p>TikTok's advertising platform has matured significantly. In-Feed Ads, TopView, and Spark Ads (which boost organic content you've already posted) are all delivering strong results for Australian businesses. The key is that your ad creative has to look like organic content. Any hint of a traditional advertisement causes immediate scroll.</p>
        <p>TikTok Shop is also gaining serious traction in Australia. For e-commerce brands, the ability to purchase directly within the platform without leaving TikTok is removing a critical conversion friction point.</p>

        <h2>Building Your TikTok Presence</h2>
        <p>Start by auditing your competitors and the accounts your target audience already follows. Understand what format, tone, and content style resonates. Post consistently - at minimum three times per week - and treat the first 30 days as a learning phase where you're testing different formats and analysing your retention data in TikTok Analytics.</p>
        <p>Hook rate (the percentage of people who watch past the first three seconds) and average watch time are your two most important metrics. Optimise for those before worrying about follower count or likes.</p>

        <h2>The Bottom Line</h2>
        <p>TikTok is no longer optional for consumer-facing Australian brands. The brands winning right now are the ones who committed early, learned the platform's culture, and built a consistent content engine. The gap between early movers and late adopters is widening every month.</p>
        <p>If you want help building a TikTok strategy that actually drives revenue, <Link href="/contact" className="text-[#E8192C] underline underline-offset-2">talk to our team</Link>.</p>
      </>
    ),
  },
  'google-vs-meta-ads-2025': {
    slug: 'google-vs-meta-ads-2025',
    category: 'Paid Media',
    categoryColor: '#FF3347',
    title: 'Google vs Meta Ads in 2025: Where Should Your Budget Go?',
    excerpt: 'A data-driven breakdown of ROAS, audience intent, and targeting capabilities to help you allocate your ad spend intelligently.',
    readTime: '7 min read',
    date: 'February 2025',
    content: (
      <>
        <p>It's one of the most common questions we hear from businesses starting to invest in paid media: Google or Meta? The answer, as with most things in marketing, is that it depends. But there are clear principles that should guide your decision based on your industry, offer, and funnel stage.</p>

        <p>Here's a data-driven breakdown of how to think about allocating your budget between the two dominant paid advertising platforms in 2025.</p>

        <h2>The Fundamental Difference: Intent vs Discovery</h2>
        <p>The single most important distinction between Google and Meta is the mindset of the person you're reaching.</p>
        <p><strong>Google Search captures existing demand.</strong> Someone searching "emergency plumber Perth" or "best accountant for small business" is actively looking for a solution right now. Your ad intercepts that intent at the perfect moment. Conversion rates are typically higher because you're not creating desire - you're meeting it.</p>
        <p><strong>Meta creates and amplifies demand.</strong> Nobody opens Instagram actively looking to buy something. But Meta's audience targeting and creative canvas let you surface the right product to the right person at the right moment in their scroll. You're building awareness and desire, not capturing it.</p>

        <h2>When to Prioritise Google Ads</h2>
        <p>Google Ads wins when:</p>
        <ul>
          <li>Your product or service is actively searched for (high search volume for relevant keywords)</li>
          <li>Your sales cycle is short and transactional</li>
          <li>You're targeting high-intent, ready-to-buy customers</li>
          <li>You're in B2B where decision-makers search for specific solutions</li>
          <li>Local service businesses (tradies, healthcare, legal, financial services)</li>
        </ul>

        <h2>When to Prioritise Meta Ads</h2>
        <p>Meta Ads win when:</p>
        <ul>
          <li>You're launching a new product or brand where no existing search demand exists yet</li>
          <li>Your product sells on visual appeal (fashion, food, interiors, beauty)</li>
          <li>You're targeting specific audience demographics or interest segments</li>
          <li>You're building a remarketing funnel to re-engage website visitors</li>
          <li>Your average order value is high enough to sustain a longer awareness-to-purchase journey</li>
        </ul>

        <h2>The Real Answer: Use Both</h2>
        <p>The most effective paid media strategies in 2025 treat Google and Meta as complementary rather than competing channels. Meta builds awareness and creates demand. Google Search captures it. Used together with a proper funnel - Meta for top-of-funnel awareness and remarketing, Google for bottom-of-funnel conversion - you cover the entire customer journey.</p>
        <p>A rough starting allocation for most businesses: if you have under $3,000/month, focus on Google Search (higher intent, more immediate ROI). If you have $3,000-$10,000/month, split roughly 60% Google and 40% Meta. Above $10,000/month, the split becomes more strategic based on your specific growth objectives and current funnel performance.</p>

        <h2>What Actually Drives ROAS</h2>
        <p>Platform choice matters less than most people think. The biggest drivers of return on ad spend are your offer strength, your creative quality (on Meta), your landing page experience, and your audience targeting precision. We've seen brands achieve 8x ROAS on Meta and 1.5x on Google - and vice versa. The platform is the vehicle. The offer and creative are the engine.</p>
        <p>Want us to audit your current ad performance and tell you where your budget should go? <Link href="/contact" className="text-[#E8192C] underline underline-offset-2">Book a free strategy call.</Link></p>
      </>
    ),
  },
  'premium-brand-startup-budget': {
    slug: 'premium-brand-startup-budget',
    category: 'Branding',
    categoryColor: '#E8192C',
    title: 'How to Build a Premium Brand on a Startup Budget',
    excerpt: 'Luxury positioning isn\'t about spending the most. It\'s about making every touchpoint feel intentional. Here\'s how to do it.',
    readTime: '5 min read',
    date: 'April 2025',
    content: (
      <>
        <p>There's a pervasive myth that premium branding costs premium money. That Rolex-level positioning requires Rolex-level budgets. It doesn't. Some of the most compelling brand identities in the world were built with almost nothing. What they had in abundance was clarity, intentionality, and consistency.</p>

        <p>Here's how to build a brand that feels expensive even when you're bootstrapping.</p>

        <h2>Start With Positioning, Not Visuals</h2>
        <p>Most startups make the mistake of jumping straight to logo design before they've answered the fundamental positioning questions. Who are you for? What do you stand for? What's the one thing you do better than anyone else? What's the emotional state you want your customer to be in when they encounter your brand?</p>
        <p>Premium brands are built on clarity. They know exactly who they're talking to and they never try to appeal to everyone. Paradoxically, narrowing your audience is what makes a brand feel exclusive and desirable. Before you spend a single dollar on design, get your positioning razor-sharp.</p>

        <h2>Invest Disproportionately in Typography and Colour</h2>
        <p>If you have a limited design budget, put the majority of it into typography and colour. These two elements have more impact on perceived brand quality than almost anything else. A beautifully chosen typeface pair on a clean white background immediately reads as premium. Generic stock fonts and clashing colours immediately signal amateur.</p>
        <p>License a distinctive typeface from a foundry like Klim, Commercial Type, or Colophon. Pick a tight colour palette - two primary colours and one accent at most. Apply it with obsessive consistency everywhere. This discipline alone will put your brand above 90% of your competitors.</p>

        <h2>Copywriting Is Your Secret Weapon</h2>
        <p>Premium brands speak differently. They're confident without being arrogant. They're specific without being technical. They show, they don't tell. Instead of "high-quality products," they say what makes them high quality. Instead of "exceptional service," they describe what exceptional looks like.</p>
        <p>The words you choose, the sentence length you favour, the tone you maintain across every touchpoint - your website, your emails, your Instagram captions, your invoices - all of it communicates your brand's calibre. Mediocre copy makes a beautiful logo look cheap. Great copy makes a simple logo feel premium.</p>

        <h2>Ruthlessly Curate What You Show</h2>
        <p>Premium brands don't show everything. They show their best work, their hero products, their sharpest photography. They let white space breathe. They resist the urge to fill every corner of their website or social feed with content just for the sake of volume.</p>
        <p>If you can only afford to photograph three products beautifully, photograph three products beautifully. Don't photograph twenty poorly. Quality over quantity is not just a cliche for premium brands - it's the foundational principle.</p>

        <h2>Consistency Is the Compounding Asset</h2>
        <p>The single most powerful thing a startup can do to build brand equity on a small budget is maintain radical consistency over a long time period. Use the same colours, same fonts, same tone, same visual style across every touchpoint, every month, for years. Brand recognition is built through repetition. Most startups undermine their own brand equity by constantly refreshing or pivoting their visual identity before it's had time to take hold.</p>
        <p>If you need help developing a brand identity that punches above your budget, <Link href="/contact" className="text-[#E8192C] underline underline-offset-2">let's talk</Link>.</p>
      </>
    ),
  },
  'tiktok-business-australia-2025': {
    slug: 'tiktok-business-australia-2025',
    category: 'Social Media',
    categoryColor: '#E8192C',
    title: 'TikTok for Business in Australia: The 2025 Playbook',
    excerpt: 'TikTok is no longer just for Gen Z. Here\'s how Australian brands across every industry are driving real revenue from the platform.',
    readTime: '9 min read',
    date: 'January 2025',
    content: (
      <>
        <p>If you've been sitting on the TikTok fence waiting to see if it's a real business channel, 2025 is the year you need to make a decision. With 7+ million active Australian users and rapidly expanding ad capabilities, TikTok has moved firmly into the mainstream of Australian digital marketing.</p>

        <p>This guide walks you through everything you need to know to build a TikTok presence that drives real business results - not just views.</p>

        <h2>Understanding TikTok's Algorithm</h2>
        <p>TikTok's recommendation engine is the most powerful content distribution system ever built. Unlike Instagram or Facebook, which heavily weight existing follower relationships, TikTok's For You Page distributes content based primarily on engagement signals and content metadata.</p>
        <p>This means that video completion rate, re-watch rate, shares, and comments carry far more weight than follower count. A new account can go viral if the content earns strong engagement. This is genuinely unique in social media and creates real opportunities for brands willing to invest in content quality.</p>

        <h2>What Australian Audiences Want on TikTok</h2>
        <p>Australian TikTok users skew younger than Facebook but older than many brands assume. The 25-34 demographic is the fastest-growing segment on the platform. They respond strongly to:</p>
        <ul>
          <li>Honest, unpolished content that feels real rather than produced</li>
          <li>Local references and Australian humour and culture</li>
          <li>Educational content that teaches something genuinely useful</li>
          <li>Behind-the-scenes business content</li>
          <li>Strong narrative structure (even in 30-second videos)</li>
        </ul>

        <h2>Setting Up for Success</h2>
        <p>Your first step is a TikTok Business account, which gives you access to analytics, the advertising platform, and TikTok Shop. Optimise your profile with a clear value proposition in your bio, a link to your website or a Linktree, and a professional profile image.</p>
        <p>Before you post anything, spend two hours consuming content in your niche. Understand the conventions, the trends, the language. TikTok has its own culture and brands that ignore it look painfully out of place.</p>

        <h2>Content Strategy for Business Accounts</h2>
        <p>Plan content in three categories:</p>
        <ul>
          <li><strong>Authority content (40%):</strong> Tips, tutorials, industry insights, and educational content that establishes your expertise. This is your long-term organic growth engine.</li>
          <li><strong>Brand story content (30%):</strong> Behind the scenes, meet the team, origin story, values. This builds the human connection that drives loyalty and word-of-mouth.</li>
          <li><strong>Conversion content (30%):</strong> Product showcases, testimonials, special offers, and calls to action. Don't lead with this - earn the audience first.</li>
        </ul>

        <h2>TikTok Advertising Options</h2>
        <p>TikTok's ad platform offers several formats. In-Feed Ads appear in the For You Page and are the entry point for most businesses. Spark Ads allow you to boost organic content you've already posted - this is often the highest-performing format because the content has already proven it resonates. TopView ads (appearing when the app is first opened) drive massive awareness but are significantly more expensive.</p>
        <p>For most Australian businesses starting out, we recommend allocating 70% of TikTok ad budget to Spark Ads on your best-performing organic content and 30% to testing In-Feed creative.</p>

        <h2>Measuring What Matters</h2>
        <p>Vanity metrics are particularly seductive on TikTok because view counts can be astronomical. Focus instead on profile visits per 1000 views (this tells you if your content is creating genuine curiosity), website clicks, and for e-commerce, TikTok's conversion tracking data.</p>
        <p>If you want a TikTok strategy built specifically for your business, <Link href="/contact" className="text-[#E8192C] underline underline-offset-2">get in touch with our team</Link>.</p>
      </>
    ),
  },
  'content-marketing-not-working': {
    slug: 'content-marketing-not-working',
    category: 'Content Marketing',
    categoryColor: '#FF3347',
    title: "Why Your Content Marketing Isn't Working (And How to Fix It)",
    excerpt: "Most businesses publish content and wonder why nothing happens. Here are the six reasons your content strategy is failing, and what to do about each one.",
    readTime: '6 min read',
    date: 'May 2025',
    content: (
      <>
        <p>Businesses invest in content marketing, publish consistently for six months, and see almost nothing in return. No traffic growth. No leads. No revenue. They conclude that content marketing doesn't work for their industry. Usually, they're wrong. Usually, the problem is one of six predictable mistakes.</p>

        <h2>1. You're Creating Content Nobody Is Searching For</h2>
        <p>The most common failure mode. Businesses write about topics they find interesting or that seem relevant to their industry, without checking whether anyone is actually searching for that content. If there's no search demand, there's no organic traffic potential.</p>
        <p>Fix: Before writing a single word, do keyword research. Use tools like Ahrefs, SEMrush, or even Google's free Keyword Planner to identify what your potential customers are actually searching for. Prioritise topics with meaningful search volume and achievable difficulty. Your content strategy should be driven by demand data, not editorial instinct.</p>

        <h2>2. Your Content Doesn't Match Search Intent</h2>
        <p>Even when businesses target the right keywords, they often produce the wrong type of content. Someone searching "how to choose an accountant" wants a practical guide, not a case study or a sales page. Google has already figured out what content type satisfies each search query - look at the first page results and replicate that format.</p>
        <p>Fix: Before writing, analyse the top three ranking pages for your target keyword. Note the content format (guide, list, comparison, etc.), the approximate word count, the headers used, and the depth of information provided. Use this as your benchmark, then aim to produce something meaningfully better.</p>

        <h2>3. You're Not Distributing What You Create</h2>
        <p>"Publish and pray" is not a content strategy. Most businesses spend 90% of their content budget on creation and 10% (or nothing) on distribution. The result is brilliant content that nobody ever finds.</p>
        <p>Fix: Every piece of content should have a distribution plan before it's published. Repurpose blog content into social posts, email newsletters, and short-form video. Share to relevant LinkedIn groups, online communities, and forums where your audience spends time. Build an email list and send your best content directly to people who've opted in to hear from you. Reach out to websites that might want to link to genuinely useful content.</p>

        <h2>4. Your Content Has No Point of View</h2>
        <p>Bland, comprehensive-but-forgettable content is the most common type being produced right now. It covers the topic, it answers the question, and it leaves no impression whatsoever. In a world where AI can produce competent generic content at scale, generic content has no future.</p>
        <p>Fix: Develop a genuine point of view and express it. Disagree with conventional wisdom when you actually disagree. Share real data from your own experience. Tell stories from your clients. Make predictions and explain your reasoning. Content with perspective builds audiences. Content without perspective builds nothing.</p>

        <h2>5. You're Not Building Authority on the Topics That Matter</h2>
        <p>Scattered content across dozens of loosely related topics tells Google and your readers nothing about what you specialise in. Authority is earned through depth, not breadth.</p>
        <p>Fix: Build topic clusters. Choose two or three core themes that matter most to your business, then build comprehensive coverage of those themes. A cornerstone guide supported by a dozen related pieces on narrower aspects of the same topic signals topical authority far more effectively than thirty unrelated posts.</p>

        <h2>6. You're Not Patient Enough</h2>
        <p>Content marketing is a 12-24 month game for most businesses, not a 90-day sprint. New content typically takes three to six months to rank in organic search. Building an audience that trusts you enough to buy takes even longer. Most businesses abandon their content program right before it starts to compound.</p>
        <p>Fix: Commit to content marketing for at least 12 months before judging results. Measure leading indicators (traffic growth, rankings improvement, email subscriber growth) rather than only looking at revenue in the first few months. Revenue follows trust, and trust takes time.</p>

        <p>If you want our team to audit your content strategy and identify what's holding it back, <Link href="/contact" className="text-[#E8192C] underline underline-offset-2">book a free strategy call</Link>.</p>
      </>
    ),
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://mayicreative.com.au/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://mayicreative.com.au/blog/${slug}`,
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  const relatedPosts = Object.values(posts)
    .filter((p) => p.slug !== slug)
    .slice(0, 3)

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-16" style={{ overflow: 'clip' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full bg-[#4B3A9B]/10 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-syne font-bold text-[#6E6E8A] hover:text-[#E8192C] transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span
              className="px-3 py-1 rounded-full text-xs font-syne font-bold uppercase tracking-wider"
              style={{
                backgroundColor: post.categoryColor + '15',
                color: post.categoryColor,
                border: `1px solid ${post.categoryColor}30`,
              }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#6E6E8A]">
              <Clock size={12} />
              {post.readTime}
            </span>
            <span className="text-xs text-[#6E6E8A]">{post.date}</span>
          </div>

          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-[#0D0D1A] leading-[1.1] mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-[#6E6E8A] leading-relaxed max-w-2xl">{post.excerpt}</p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-[#E2E2EE]" />
      </div>

      {/* Content */}
      <section className="py-16 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="
            [&_h2]:font-syne [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:text-[#0D0D1A] [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:leading-snug
            [&_p]:text-[#4A4A6A] [&_p]:leading-relaxed [&_p]:mb-5 [&_p]:text-lg
            [&_ul]:mb-6 [&_ul]:pl-6 [&_ul]:space-y-2
            [&_li]:text-[#4A4A6A] [&_li]:leading-relaxed [&_li]:text-lg [&_li]:list-disc
            [&_strong]:text-[#0D0D1A] [&_strong]:font-semibold
            [&_a]:text-[#E8192C] [&_a]:underline [&_a]:underline-offset-2
          ">
            {post.content}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D0D1A] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-syne font-bold text-[#E8192C] uppercase tracking-widest mb-4">Ready to grow?</p>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-white mb-6">
            Let&apos;s put this into practice for your business.
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-10">
            Book a free 30-minute strategy call with our team. No obligation, no hard sell.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8192C] hover:bg-[#FF3347] text-white font-syne font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,25,44,0.4)] group"
          >
            Book a Free Strategy Call
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-[#F5F5FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-syne font-bold text-2xl text-[#0D0D1A] mb-10">More from the blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group flex flex-col p-8 rounded-2xl border border-[#E2E2EE] bg-white hover:border-[#E8192C]/30 transition-all duration-300"
              >
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-syne font-bold uppercase tracking-wider mb-5 self-start"
                  style={{
                    backgroundColor: related.categoryColor + '15',
                    color: related.categoryColor,
                    border: `1px solid ${related.categoryColor}30`,
                  }}
                >
                  {related.category}
                </span>
                <h3 className="font-syne font-bold text-base text-[#0D0D1A] leading-snug mb-4 flex-1">
                  {related.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-[#E2E2EE]">
                  <span className="text-xs text-[#6E6E8A]">{related.readTime}</span>
                  <ArrowUpRight size={14} className="text-[#6E6E8A] group-hover:text-[#E8192C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
