import ServicePageTemplate from '@/components/ServicePageTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI SEO Agency Perth | Optimise for AI Search and LLMs',
  description: 'Future-proof your SEO for AI-powered search. We optimise your content for Google AI Overviews, ChatGPT, Perplexity, and the next generation of AI-driven discovery engines.',
  keywords: ['AI SEO', 'AI SEO agency Australia', 'Google AI Overviews optimisation', 'LLM SEO', 'ChatGPT SEO', 'Perplexity SEO', 'generative engine optimisation', 'GEO agency Perth', 'AI search optimisation Australia', 'future-proof SEO Perth'],
  alternates: { canonical: 'https://mayicreative.com.au/services/seo/ai-seo' },
  openGraph: {
    title: 'AI SEO Agency Perth | Optimise for AI Search and LLMs',
    description: 'Future-proof your SEO for Google AI Overviews, ChatGPT, Perplexity, and the next generation of AI-driven discovery engines.',
    url: 'https://mayicreative.com.au/services/seo/ai-seo',
    type: 'website',
  },
}

export default function AISEOPage() {
  return (
    <ServicePageTemplate
      badge="AI SEO"
      title="SEO built for"
      titleAccent="the AI search era."
      description="Search has fundamentally changed. Google AI Overviews, ChatGPT, Perplexity, and Gemini are reshaping how people discover brands. We build SEO strategies that win visibility in both traditional search results and the AI-powered answers that are replacing them."
      serviceUrl="/services/seo/ai-seo"
      offerings={[
        {
          title: 'Google AI Overviews Optimisation',
          description: 'We structure your content to be cited in Google\'s AI-generated answers at the top of search results. Being cited in AI Overviews puts your brand in front of users before any organic result.',
        },
        {
          title: 'Generative Engine Optimisation (GEO)',
          description: 'We optimise your content for citation by ChatGPT, Perplexity, Claude, and Gemini. When users ask AI assistants about your industry, your brand should appear in the answer.',
        },
        {
          title: 'E-E-A-T Authority Building',
          description: 'AI search engines prioritise Experience, Expertise, Authoritativeness, and Trustworthiness above all else. We build the signals, content, and entity associations that make your brand undeniably authoritative.',
        },
        {
          title: 'Structured Data for AI Comprehension',
          description: 'Rich schema markup helps AI systems understand and accurately represent your content. We implement comprehensive structured data across every content type on your site.',
        },
        {
          title: 'Entity and Knowledge Graph Optimisation',
          description: 'We build your brand\'s entity footprint across the web so Google and AI platforms can confidently associate your business with the topics and products that matter to your customers.',
        },
        {
          title: 'Conversational Content Strategy',
          description: 'AI search is question-led. We build content that answers the exact questions your customers are asking AI assistants, in formats that are easy for AI systems to extract and cite.',
        },
        {
          title: 'Zero-Click and Featured Snippet Capture',
          description: 'As AI absorbs more search real estate, capturing featured snippets, People Also Ask boxes, and knowledge panels is critical. We optimise for every zero-click format.',
        },
        {
          title: 'AI Search Visibility Monitoring',
          description: 'We track your brand\'s appearance in AI Overviews, Perplexity answers, and ChatGPT responses over time, so you can see your AI search share of voice growing.',
        },
      ]}
      whyUs={[
        {
          title: 'Ahead of the curve',
          description: 'Most agencies are still catching up with AI search. We\'ve been building AI-optimised content architectures since AI Overviews launched and understand what the major LLMs prioritise.',
        },
        {
          title: 'Traditional SEO foundations intact',
          description: 'AI SEO doesn\'t replace technical SEO. It layers on top of it. We build strategies that win in both traditional rankings and AI-generated results simultaneously.',
        },
        {
          title: 'Content quality at the core',
          description: 'AI systems reward genuine expertise. We produce content that actually demonstrates knowledge, not content that just looks like it does.',
        },
        {
          title: 'Full-funnel AI visibility',
          description: 'From discovery queries to purchase decisions, we map and optimise your content for every stage where AI search influences your customer\'s journey.',
        },
      ]}
      ctaText="Future-Proof Your SEO"
    />
  )
}
