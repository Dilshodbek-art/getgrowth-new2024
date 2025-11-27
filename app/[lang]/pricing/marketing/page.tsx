import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Marketing Pricing - GetGrowth Digital Agency',
    ru: 'Цены на Маркетинг - GetGrowth',
    uz: 'Marketing Narxlari - GetGrowth'
  };
  
  const descriptions = {
    en: 'Custom marketing solutions including SEO, social media marketing, advertising, content creation, and brand strategy.',
    ru: 'Индивидуальные маркетинговые решения: SEO, SMM, реклама, создание контента и стратегия бренда.',
    uz: 'Maxsus marketing yechimlari: SEO, SMM, reklama, kontent yaratish va brend strategiyasi.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/pricing/marketing`,
    },
  };
}

export default function MarketingPricingPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);
  const t = translations.pricingPage?.marketing || {};

  const services = [
    {
      title: t.seo?.title || 'SEO Optimization',
      description: t.seo?.description || 'Improve your search engine rankings and drive organic traffic to your website.',
      includes: t.seo?.includes || [
        'Technical SEO audit & fixes',
        'On-page optimization',
        'Content strategy & creation',
        'Keyword research',
        'Link building',
        'Monthly reporting'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: t.smm?.title || 'Social Media Marketing',
      description: t.smm?.description || 'Build your brand presence and engage with your audience on social platforms.',
      includes: t.smm?.includes || [
        'Content calendar & strategy',
        'Post creation & scheduling',
        'Community management',
        'Engagement strategies',
        'Follower growth tactics',
        'Performance analytics'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      title: t.advertising?.title || 'Paid Advertising',
      description: t.advertising?.description || 'Reach your target audience with strategic ad campaigns across multiple platforms.',
      includes: t.advertising?.includes || [
        'Meta Ads (Facebook & Instagram)',
        'TikTok Ads',
        'Google Ads',
        'Campaign strategy & setup',
        'Ad creative design',
        'A/B testing & optimization',
        'ROI tracking & reporting'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
    {
      title: t.content?.title || 'Content Creation',
      description: t.content?.description || 'Engage your audience with high-quality content that drives conversions.',
      includes: t.content?.includes || [
        'Blog articles',
        'Video content',
        'Copywriting',
        'Email marketing campaigns',
        'Infographics',
        'Case studies'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: t.brandStrategy?.title || 'Brand Strategy',
      description: t.brandStrategy?.description || 'Develop a powerful brand identity that resonates with your target market.',
      includes: t.brandStrategy?.includes || [
        'Market research',
        'Competitive analysis',
        'Brand positioning',
        'Messaging strategy',
        'Brand guidelines',
        'Go-to-market strategy'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Link
              href={`/${params.lang}/pricing`}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.backToPricing || 'Back to Pricing'}
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
              {t.title || 'Marketing Pricing'}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.subtitle || 'Custom marketing solutions tailored to your business goals and budget.'}
            </p>
          </div>

          <div className="bg-purple-100 rounded-2xl p-6 mb-12 text-center">
            <p className="text-purple-800 font-medium">
              {t.customNote || 'All marketing services are custom-priced based on your specific needs and goals.'}
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">{t.whatsIncluded || "What's Included:"}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.includes.map((item: string, itemIndex: number) => (
                          <div key={itemIndex} className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col justify-center">
                    <p className="text-sm text-gray-500 mb-2 text-center">{t.customPricing || 'Custom Pricing'}</p>
                    <Link
                      href={`/${params.lang}/contact`}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
                    >
                      {t.getQuote || 'Get a Quote'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.ctaTitle || 'Ready to Grow Your Business?'}
            </h2>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
              {t.ctaDescription || "Let's discuss your marketing goals and create a custom strategy that fits your budget."}
            </p>
            <Link
              href={`/${params.lang}/contact`}
              className="inline-block px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.getQuote || 'Get a Quote'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
