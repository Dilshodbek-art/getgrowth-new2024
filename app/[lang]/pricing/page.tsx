import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Pricing - Affordable Marketing, Web & Design Services | GetGrowth',
    ru: 'Цены - Доступные Услуги Маркетинга, Веба и Дизайна | GetGrowth',
    uz: 'Narxlar - Arzon Marketing, Veb va Dizayn Xizmatlari | GetGrowth'
  };
  
  const descriptions = {
    en: 'Transparent pricing for all our services. Website plans from $19/month, Telegram bots from $16/month. Custom quotes for marketing and design.',
    ru: 'Прозрачные цены на все наши услуги. Планы сайтов от $19/месяц, Telegram боты от $16/месяц. Индивидуальные расценки на маркетинг и дизайн.',
    uz: "Barcha xizmatlarimiz uchun shaffof narxlar. Veb-sayt rejalari $19/oydan, Telegram botlar $16/oydan. Marketing va dizayn uchun maxsus narxlar."
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/pricing`,
    },
  };
}

export default function PricingPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);
  const t = translations.pricingPage || {};

  const categories = [
    {
      title: t.webDev?.title || 'Web Development & Solutions',
      description: t.webDev?.description || 'Affordable monthly plans for websites and Telegram bots with full support.',
      startingPrice: '$19',
      priceLabel: t.perMonth || '/month',
      highlight: t.webDev?.highlight || 'Website plans starting from $19/month',
      features: t.webDev?.quickFeatures || ['Monthly website plans', 'Telegram bots', 'Web applications', 'Custom solutions'],
      href: `/${params.lang}/pricing/web-development`,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      title: t.marketing?.title || 'Marketing',
      description: t.marketing?.description || 'Custom marketing solutions tailored to your business goals and budget.',
      startingPrice: t.custom || 'Custom',
      priceLabel: t.pricing || 'pricing',
      highlight: t.marketing?.highlight || 'SEO, Social Media, Advertising & More',
      features: t.marketing?.quickFeatures || ['SEO optimization', 'Social media marketing', 'Paid advertising', 'Content creation'],
      href: `/${params.lang}/pricing/marketing`,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-orange-500 to-pink-500',
    },
    {
      title: t.design?.title || 'Graphic Design',
      description: t.design?.description || 'Professional design services custom-priced based on your project needs.',
      startingPrice: t.custom || 'Custom',
      priceLabel: t.pricing || 'pricing',
      highlight: t.design?.highlight || 'Logos, Branding, Animations & More',
      features: t.design?.quickFeatures || ['Logo design', 'Brand identity', 'Posters & print', 'Animations'],
      href: `/${params.lang}/pricing/graphic-design`,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
            {t.title || 'Pricing'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle || 'Transparent, affordable pricing for all our services. No hidden fees, no surprises.'}
          </p>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-gray-800">
                  {category.title}
                </h2>
                
                <div className="mb-4">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.startingPrice}
                  </span>
                  <span className="text-gray-500 ml-1">{category.priceLabel}</span>
                </div>
                
                <p className="text-sm text-purple-600 font-medium mb-4">
                  {category.highlight}
                </p>
                
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                
                <ul className="space-y-2 mb-8 flex-grow">
                  {category.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={category.href}
                  className={`w-full py-4 bg-gradient-to-r ${category.gradient} text-white rounded-full font-semibold text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 block`}
                >
                  {t.viewDetails || 'View Details'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            {t.quickCompare || 'Quick Pricing Overview'}
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-2 gap-px bg-gray-200">
              <div className="bg-purple-600 p-6 text-white font-bold text-lg">
                {t.service || 'Service'}
              </div>
              <div className="bg-purple-600 p-6 text-white font-bold text-lg text-center">
                {t.startingFrom || 'Starting From'}
              </div>
              
              <div className="bg-white p-6 text-gray-800">
                {t.websitePlans || 'Website Plans'}
              </div>
              <div className="bg-white p-6 text-center font-semibold text-purple-600">
                $19/{t.month || 'month'}
              </div>
              
              <div className="bg-gray-50 p-6 text-gray-800">
                {t.telegramBots || 'Telegram Bots & Web Apps'}
              </div>
              <div className="bg-gray-50 p-6 text-center font-semibold text-purple-600">
                $16/{t.month || 'month'}
              </div>
              
              <div className="bg-white p-6 text-gray-800">
                {t.marketingServices || 'Marketing Services'}
              </div>
              <div className="bg-white p-6 text-center font-semibold text-purple-600">
                {t.customQuote || 'Custom Quote'}
              </div>
              
              <div className="bg-gray-50 p-6 text-gray-800">
                {t.designServices || 'Graphic Design'}
              </div>
              <div className="bg-gray-50 p-6 text-center font-semibold text-purple-600">
                {t.customQuote || 'Custom Quote'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.ctaTitle || 'Need a Custom Solution?'}
          </h2>
          <p className="text-xl text-white/90 mb-10">
            {t.ctaDescription || "Every business is unique. Let's discuss your specific needs and create a package that works for you."}
          </p>
          <Link
            href={`/${params.lang}/contact`}
            className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {t.ctaButton || 'Get a Free Quote'}
          </Link>
        </div>
      </section>
    </div>
  );
}
