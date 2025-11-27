import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Web Development & Solutions - GetGrowth Digital Agency',
    ru: 'Веб-разработка и Решения - GetGrowth',
    uz: 'Veb Ishlab Chiqish va Yechimlar - GetGrowth'
  };
  
  const descriptions = {
    en: 'Professional web development services including monthly website plans, Telegram bots, web apps, and custom solutions.',
    ru: 'Профессиональные услуги веб-разработки: месячные планы сайтов, Telegram боты, веб-приложения и индивидуальные решения.',
    uz: 'Professional veb ishlab chiqish xizmatlari: oylik veb-sayt rejalari, Telegram botlar, veb ilovalar va maxsus yechimlar.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/services/web-development`,
    },
  };
}

export default function WebDevelopmentServicesPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);
  const t = translations.servicesPage?.webDev || {};

  const services = [
    {
      title: t.websitePlans?.title || 'Monthly Website Plans',
      description: t.websitePlans?.description || 'Get a professional website with ongoing maintenance, updates, and support included in affordable monthly plans.',
      features: t.websitePlans?.features || ['Custom design', 'Mobile responsive', 'SEO optimized', 'Regular updates', 'Technical support'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t.telegramBots?.title || 'Telegram Bots',
      description: t.telegramBots?.description || 'Automate your business with custom Telegram bots for orders, bookings, customer support, and more.',
      features: t.telegramBots?.features || ['Order management', 'Customer notifications', 'Booking systems', 'Payment integration', 'Analytics dashboard'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: t.webApps?.title || 'Web Applications',
      description: t.webApps?.description || 'Build powerful web applications tailored to your business needs with modern technologies.',
      features: t.webApps?.features || ['Custom development', 'Database integration', 'API development', 'User authentication', 'Cloud deployment'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: t.customSolutions?.title || 'Custom Solutions',
      description: t.customSolutions?.description || 'Have a unique project in mind? We build custom digital solutions tailored to your specific requirements.',
      features: t.customSolutions?.features || ['Requirements analysis', 'Custom architecture', 'Scalable solutions', 'Full documentation', 'Ongoing support'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
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
              {t.title || 'Web Development & Solutions'}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.subtitle || 'Build your digital presence with professional websites, bots, and custom web solutions.'}
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
              href={`/${params.lang}/pricing/web-development`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.viewPricing || 'View Web Development Pricing'}
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
