import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Audit Services Perth | Technical SEO Audit Agency',
  description: 'Comprehensive SEO audits for Perth and Australian businesses. We uncover every ranking blocker, technical issue, and missed opportunity holding your site back from page one.',
  keywords: ['SEO audit Perth', 'technical SEO audit', 'website SEO audit Australia', 'SEO health check', 'Google audit agency Perth', 'site audit service', 'SEO analysis Perth', 'organic ranking audit', 'SEO consultant Perth'],
  alternates: { canonical: 'https://mayicreative.com.au/services/seo/seo-audit' },
  openGraph: {
    title: 'SEO Audit Services Perth | Technical SEO Audit Agency',
    description: 'Comprehensive SEO audits that uncover every ranking blocker and missed opportunity holding your site back from page one.',
    url: 'https://mayicreative.com.au/services/seo/seo-audit',
    type: 'website',
  },
}

export default function SEOAuditPage() {
  return (
    <ServicePageTemplate
      badge="SEO Audit"
      title="Find every reason"
      titleAccent="you're not ranking."
      description="Our SEO audits go far deeper than a crawl report. We analyse your site's technical health, content quality, backlink profile, competitor gaps, and keyword opportunities to produce a prioritised roadmap that gets you ranking faster."
      serviceUrl="/services/seo/seo-audit"
      offerings={[
        {
          title: 'Technical Health Audit',
          description: 'Full crawl analysis covering indexation issues, crawl budget waste, duplicate content, broken links, redirect chains, hreflang errors, and every technical fault Google holds against you.',
        },
        {
          title: 'Core Web Vitals Analysis',
          description: 'Page speed deep-dive across LCP, INP, and CLS. We identify exactly which assets, scripts, or layout shifts are costing you rankings and conversions.',
        },
        {
          title: 'On-Page Content Audit',
          description: 'We assess every page for keyword alignment, thin content, cannibalisation, heading structure, internal linking gaps, and meta data quality.',
        },
        {
          title: 'Backlink Profile Review',
          description: 'Full analysis of your referring domains, anchor text distribution, toxic links, and comparison against competitors to find link gap opportunities.',
        },
        {
          title: 'Competitor Gap Analysis',
          description: 'Side-by-side comparison of your rankings, content, and backlinks versus your top three competitors. We map exactly where they beat you and how to close the gap.',
        },
        {
          title: 'Keyword Opportunity Mapping',
          description: 'Identify high-intent keywords your site should be ranking for but isn\'t. We map existing content to ranking opportunities and flag where new content is needed.',
        },
        {
          title: 'Schema and Structured Data Review',
          description: 'Audit of your existing schema markup, rich snippet eligibility, and missed structured data opportunities across product, service, FAQ, and local business types.',
        },
        {
          title: 'Prioritised Action Roadmap',
          description: 'Every audit delivers a prioritised fix list with effort vs impact scoring so your team knows exactly what to action first for the fastest ranking gains.',
        },
      ]}
      whyUs={[
        {
          title: 'Not just a Screaming Frog export',
          description: 'We interpret data and deliver strategic insight. Every finding is given context, priority, and a clear fix. You get a roadmap, not a spreadsheet.',
        },
        {
          title: 'Audits tied to business outcomes',
          description: 'We tie every technical fix and content recommendation to revenue impact. If it won\'t move the needle, it won\'t be in the report.',
        },
        {
          title: 'Delivered by senior specialists',
          description: 'Your audit is conducted by experienced SEO specialists, not juniors or automated tools. Every recommendation is human-reviewed and commercially grounded.',
        },
        {
          title: 'Implementation support available',
          description: 'We can action the entire roadmap for you as part of an ongoing retainer, or hand it to your internal team with full documentation and developer briefs.',
        },
      ]}
      ctaText="Get Your SEO Audit"
    />
  )
}
