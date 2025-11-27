import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Graphic Design Pricing - GetGrowth Digital Agency',
    ru: 'Цены на Графический Дизайн - GetGrowth',
    uz: 'Grafik Dizayn Narxlari - GetGrowth'
  };
  
  const descriptions = {
    en: 'Custom graphic design services including logo design, branding, posters, social media design, and animations.',
    ru: 'Индивидуальные услуги графического дизайна: дизайн логотипов, брендинг, постеры, дизайн для соцсетей и анимация.',
    uz: 'Maxsus grafik dizayn xizmatlari: logo dizayni, brending, posterlar, ijtimoiy tarmoq dizayni va animatsiyalar.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/pricing/graphic-design`,
    },
  };
}

export default function GraphicDesignPricingPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);
  const t = translations.pricingPage?.design || {};

  const services = [
    {
      title: t.logoDesign?.title || 'Logo Design',
      description: t.logoDesign?.description || 'Create a unique and memorable logo that represents your brand.',
      includes: t.logoDesign?.includes || [
        '3+ initial concepts',
        'Unlimited revisions',
        'All file formats (AI, EPS, PNG, SVG, PDF)',
        'Black & white versions',
        'Social media optimized versions',
        'Full ownership rights'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: t.branding?.title || 'Branding Package',
      description: t.branding?.description || 'Complete brand identity system for your business.',
      includes: t.branding?.includes || [
        'Logo design with variations',
        'Color palette',
        'Typography selection',
        'Brand guidelines document',
        'Business card design',
        'Letterhead & envelope design',
        'Social media kit'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: t.posters?.title || 'Posters & Print Design',
      description: t.posters?.description || 'Eye-catching print materials for events and marketing.',
      includes: t.posters?.includes || [
        'Event posters',
        'Promotional flyers',
        'Brochures & catalogs',
        'Business cards',
        'Menu design',
        'Print-ready files'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t.socialMedia?.title || 'Social Media Design',
      description: t.socialMedia?.description || 'Professional graphics for your social media presence.',
      includes: t.socialMedia?.includes || [
        'Post templates',
        'Story templates',
        'Cover images',
        'Profile pictures',
        'Ad creatives',
        'Highlight covers'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
    },
    {
      title: t.animations?.title || 'Animations',
      description: t.animations?.description || 'Bring your brand to life with motion graphics.',
      includes: t.animations?.includes || [
        'Logo animations',
        'Social media animations',
        'Motion graphics',
        'Video intros/outros',
        'Explainer video elements',
        'GIFs & short videos'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              {t.title || 'Graphic Design Pricing'}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.subtitle || 'Professional design services tailored to your brand and budget.'}
            </p>
          </div>

          <div className="bg-purple-100 rounded-2xl p-6 mb-12 text-center">
            <p className="text-purple-800 font-medium">
              {t.customNote || 'All design services are custom-priced based on project scope and requirements.'}
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
                      {t.requestPrice || 'Request Price'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.ctaTitle || 'Ready to Create Something Amazing?'}
            </h2>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
              {t.ctaDescription || "Tell us about your project and we'll provide a custom quote tailored to your needs."}
            </p>
            <Link
              href={`/${params.lang}/contact`}
              className="inline-block px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.requestPrice || 'Request Price'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
