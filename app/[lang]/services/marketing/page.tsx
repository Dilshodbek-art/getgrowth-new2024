import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Marketing Services - GetGrowth Digital Agency',
    ru: 'Маркетинговые Услуги - GetGrowth',
    uz: 'Marketing Xizmatlari - GetGrowth'
  };
  
  const descriptions = {
    en: 'Professional digital marketing services including SEO, social media marketing, advertising, content creation, and brand strategy.',
    ru: 'Профессиональные услуги цифрового маркетинга: SEO, SMM, реклама, создание контента и стратегия бренда.',
    uz: 'Professional raqamli marketing xizmatlari: SEO, SMM, reklama, kontent yaratish va brend strategiyasi.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/services/marketing`,
    },
  };
}

export default function MarketingServicesPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);
  const t = translations.servicesPage?.marketing || {};

  const services = [
    {
      title: t.seo?.title || 'SEO Optimization',
      description: t.seo?.description || 'Improve your search engine rankings with technical SEO, on-page optimization, and quality content strategies.',
      features: t.seo?.features || ['Technical SEO audit', 'On-page optimization', 'Content strategy', 'Link building'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: t.smm?.title || 'Social Media Marketing',
      description: t.smm?.description || 'Grow your brand presence across social platforms with engaging content and community management.',
      features: t.smm?.features || ['Content creation', 'Community management', 'Growth strategies', 'Analytics & reporting'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      title: t.advertising?.title || 'Paid Advertising',
      description: t.advertising?.description || 'Reach your target audience with strategic ad campaigns on Meta, TikTok, and Google platforms.',
      features: t.advertising?.features || ['Meta Ads (Facebook & Instagram)', 'TikTok Ads', 'Google Ads', 'Campaign optimization'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
    {
      title: t.content?.title || 'Content Creation',
      description: t.content?.description || 'Engage your audience with high-quality content that tells your brand story and drives conversions.',
      features: t.content?.features || ['Blog articles', 'Video content', 'Copywriting', 'Email marketing'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: t.brandStrategy?.title || 'Brand Strategy',
      description: t.brandStrategy?.description || 'Develop a powerful brand identity and positioning strategy that resonates with your target market.',
      features: t.brandStrategy?.features || ['Market research', 'Brand positioning', 'Messaging strategy', 'Competitive analysis'],
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
              href={`/${params.lang}/services`}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.backToServices || 'Back to Services'}
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
              {t.title || 'Marketing Services'}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.subtitle || 'Grow your business with data-driven marketing strategies that deliver real results.'}
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature: string, featureIndex: number) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href={`/${params.lang}/pricing/marketing`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.viewPricing || 'View Marketing Pricing'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
