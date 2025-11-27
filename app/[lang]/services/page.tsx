import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Our Services - Marketing, Web Development & Design | GetGrowth',
    ru: 'Наши Услуги - Маркетинг, Веб-разработка и Дизайн | GetGrowth',
    uz: 'Bizning Xizmatlar - Marketing, Veb-ishlab chiqish va Dizayn | GetGrowth'
  };
  
  const descriptions = {
    en: 'Professional marketing, web development, and graphic design services. SEO, social media, websites, Telegram bots, logos, and branding for businesses.',
    ru: 'Профессиональные услуги маркетинга, веб-разработки и графического дизайна. SEO, соцсети, сайты, Telegram-боты, логотипы и брендинг для бизнеса.',
    uz: 'Professional marketing, veb ishlab chiqish va grafik dizayn xizmatlari. SEO, ijtimoiy tarmoqlar, veb-saytlar, Telegram botlar, logolar va brending.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/services`,
    },
  };
}

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);
  const t = translations.servicesPage || {};

  const serviceCategories = [
    {
      title: t.marketing?.title || 'Marketing',
      description: t.marketing?.description || 'Grow your business with data-driven marketing strategies that deliver real results.',
      features: t.marketing?.features || ['SEO Optimization', 'Social Media Marketing', 'Paid Advertising', 'Content Creation', 'Brand Strategy'],
      href: `/${params.lang}/services/marketing`,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-orange-500 to-pink-500',
    },
    {
      title: t.webDev?.title || 'Web Development & Solutions',
      description: t.webDev?.description || 'Build your digital presence with professional websites, bots, and custom web solutions.',
      features: t.webDev?.features || ['Monthly Website Plans', 'Telegram Bots', 'Web Applications', 'Custom Solutions'],
      href: `/${params.lang}/services/web-development`,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      title: t.design?.title || 'Graphic Design',
      description: t.design?.description || 'Make your brand stand out with stunning visuals that capture attention.',
      features: t.design?.features || ['Logo Design', 'Branding', 'Posters & Print', 'Social Media Design', 'Animations'],
      href: `/${params.lang}/services/graphic-design`,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            {t.title || 'Our Services'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle || 'Everything you need to establish and grow your online presence. From marketing to web development to design, we have you covered.'}
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className={`flex-shrink-0 w-24 h-24 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {category.features.map((feature: string, featureIndex: number) => (
                        <span
                          key={featureIndex}
                          className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={category.href}
                      className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-4 transition-all duration-300"
                    >
                      {t.learnMore || 'Learn More'}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.ctaTitle || 'Not Sure Where to Start?'}
          </h2>
          <p className="text-xl text-white/90 mb-10">
            {t.ctaDescription || "Let's discuss your business goals and find the perfect solution for you."}
          </p>
          <Link
            href={`/${params.lang}/contact`}
            className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {t.ctaButton || 'Get Free Consultation'}
          </Link>
        </div>
      </section>
    </div>
  );
}
