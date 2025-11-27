import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Web Development Pricing - GetGrowth Digital Agency',
    ru: 'Цены на Веб-разработку - GetGrowth',
    uz: 'Veb Ishlab Chiqish Narxlari - GetGrowth'
  };
  
  const descriptions = {
    en: 'Affordable monthly website plans starting from $19/month. Telegram bots from $16/month. Custom solutions available.',
    ru: 'Доступные месячные планы сайтов от $19/месяц. Telegram боты от $16/месяц. Доступны индивидуальные решения.',
    uz: 'Arzon oylik veb-sayt rejalari $19/oydan. Telegram botlar $16/oydan. Maxsus yechimlar mavjud.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/pricing/web-development`,
    },
  };
}

export default function WebDevelopmentPricingPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);
  const t = translations.pricingPage?.webDev || {};

  const websitePlans = [
    {
      name: t.starter?.name || 'Starter',
      price: '$19',
      period: t.perMonth || '/month',
      description: t.starter?.description || 'Perfect for small businesses just getting started online.',
      features: t.starter?.features || [
        'Single page website',
        'Mobile responsive design',
        'Basic SEO setup',
        'Contact form',
        'Monthly updates (2 hrs)',
        'Email support'
      ],
      highlighted: false,
    },
    {
      name: t.standard?.name || 'Standard',
      price: '$39',
      period: t.perMonth || '/month',
      description: t.standard?.description || 'Great for growing businesses that need more features.',
      features: t.standard?.features || [
        'Up to 5 pages',
        'Mobile responsive design',
        'Advanced SEO optimization',
        'Contact form + Live chat',
        'Monthly updates (4 hrs)',
        'Priority email support',
        'Basic analytics setup',
        'Social media integration'
      ],
      highlighted: true,
    },
    {
      name: t.pro?.name || 'Pro',
      price: '$63',
      period: t.perMonth || '/month',
      description: t.pro?.description || 'For businesses that need a comprehensive online presence.',
      features: t.pro?.features || [
        'Up to 10 pages',
        'Mobile responsive design',
        'Full SEO package',
        'Contact form + Live chat + Booking',
        'Monthly updates (8 hrs)',
        'Priority phone & email support',
        'Advanced analytics',
        'Social media integration',
        'Blog setup',
        'E-commerce ready'
      ],
      highlighted: false,
    },
  ];

  const botPlans = [
    {
      name: t.botStarter?.name || 'Starter',
      price: '$16',
      period: t.perMonth || '/month',
      description: t.botStarter?.description || 'Simple bot for basic automation needs.',
      features: t.botStarter?.features || [
        'Basic order/booking system',
        'Customer notifications',
        'Up to 100 orders/month',
        'Email support'
      ],
    },
    {
      name: t.botStandard?.name || 'Standard',
      price: '$29',
      period: t.perMonth || '/month',
      description: t.botStandard?.description || 'Advanced bot with more features and capacity.',
      features: t.botStandard?.features || [
        'Advanced order management',
        'Customer notifications',
        'Up to 500 orders/month',
        'Menu/catalog management',
        'Priority support',
        'Basic analytics'
      ],
    },
    {
      name: t.botPro?.name || 'Pro',
      price: '$47',
      period: t.perMonth || '/month',
      description: t.botPro?.description || 'Full-featured bot for high-volume businesses.',
      features: t.botPro?.features || [
        'Complete order system',
        'Unlimited orders',
        'Payment integration',
        'Advanced analytics',
        'Multiple admin access',
        'API integrations',
        'Priority phone support',
        'Custom features'
      ],
    },
  ];

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
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
              {t.title || 'Web Development Pricing'}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.subtitle || 'Affordable monthly plans for websites and Telegram bots. No hidden fees.'}
            </p>
          </div>

          {/* Website Plans */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {t.websitePlansTitle || 'Website Plans'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {websitePlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl scale-105'
                      : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-semibold rounded-full">
                      {t.popular || 'Most Popular'}
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-800'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-purple-600'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.highlighted ? 'text-purple-200' : 'text-gray-500'}>{plan.period}</span>
                  </div>
                  <p className={`mb-6 ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-purple-200' : 'text-purple-600'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.highlighted ? 'text-white' : 'text-gray-600'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${params.lang}/contact`}
                    className={`block w-full py-3 rounded-full font-semibold text-center transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-white text-purple-600 hover:bg-purple-50'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {t.getStarted || 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bot Plans */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {t.botPlansTitle || 'Telegram Bots & Web Apps'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {botPlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="mb-6 text-gray-600">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${params.lang}/contact`}
                    className="block w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
                  >
                    {t.getStarted || 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.customTitle || 'Need a Custom Solution?'}
            </h2>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
              {t.customDescription || 'Have a unique project in mind? We build custom web applications and solutions tailored to your specific needs.'}
            </p>
            <Link
              href={`/${params.lang}/contact`}
              className="inline-block px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.contactUs || 'Contact Us for a Quote'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
