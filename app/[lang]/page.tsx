import { getTranslations } from '@/lib/i18n';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { Metadata } from 'next';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const AnimatedSection = dynamic(() => import('@/components/AnimatedSection'), { ssr: false });

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'GetGrowth - Digital Agency for Small Businesses',
    ru: 'GetGrowth - Цифровое Агентство для Малого Бизнеса',
    uz: 'GetGrowth - Kichik Bizneslar Uchun Raqamli Agentlik'
  };
  
  const descriptions = {
    en: 'Professional websites, Telegram bots, digital marketing, and graphic design services for small businesses. See our BekBurger Telegram food ordering bot case study. Affordable solutions that help you grow online.',
    ru: 'Профессиональные веб-сайты, Telegram-боты, цифровой маркетинг и графический дизайн для малого бизнеса. Посмотрите наш кейс Telegram-бота для заказа еды BekBurger. Доступные решения для роста в интернете.',
    uz: 'Kichik bizneslar uchun professional veb-saytlar, Telegram botlar, raqamli marketing va grafik dizayn xizmatlari. BekBurger Telegram ovqat buyurtma boti misolini ko\'ring. Onlayn o\'sishga yordam beradigan arzon yechimlar.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}`,
    },
  };
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);

  const services = [
    {
      title: translations.services.itWeb.title,
      description: translations.services.itWeb.description,
      icon: '💻',
      features: [
        translations.services.itWeb.websites,
        translations.services.itWeb.orderBots,
        translations.services.itWeb.restaurantBots,
      ]
    },
    {
      title: translations.services.marketing.title,
      description: translations.services.marketing.description,
      icon: '📈',
      features: [
        translations.services.marketing.seo,
        translations.services.marketing.socialMedia,
        translations.services.marketing.contentMarketing,
      ]
    },
    {
      title: translations.services.design.title,
      description: translations.services.design.description,
      icon: '🎨',
      features: [
        translations.services.design.logos,
        translations.services.design.posters,
        translations.services.design.menus,
      ]
    },
  ];

  return (
    <>
      <Hero lang={params.lang} translations={translations} />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            {translations.services.title}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            {translations.services.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center gradient-text">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <Link
              href={`/${params.lang}/services`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {translations.services.cta}
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Choose GetGrowth Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
              {translations.whyChoose.title}
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              {translations.whyChoose.subtitle}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '💰', text: translations.whyChoose.affordable },
              { icon: '🎯', text: translations.whyChoose.allInOne },
              { icon: '⚡', text: translations.whyChoose.fastTurnaround },
              { icon: '🤝', text: translations.whyChoose.personalService },
              { icon: '🎨', text: translations.whyChoose.expertDesign },
              { icon: '📈', text: translations.whyChoose.provenMethods },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-lg transition-shadow">
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
                  <p className="text-gray-700 text-lg">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {translations.cta.title}
            </h2>
            <p className="text-xl text-white/90 mb-10">
              {translations.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${params.lang}/contact`}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {translations.cta.contact}
              </Link>
              <a
                href="https://t.me/GetGrowthSupport"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300"
              >
                {translations.hero.chatTelegram}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
