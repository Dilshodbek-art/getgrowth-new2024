import { getTranslations } from '@/lib/i18n';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { Metadata } from 'next';

const AnimatedSection = dynamic(() => import('@/components/AnimatedSection'), { ssr: false });
const ServiceCard = dynamic(() => import('@/components/ServiceCard'), { ssr: false });

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Our Services - Web Development, Marketing & Design | GetGrowth',
    ru: 'Наши Услуги - Веб-разработка, Маркетинг и Дизайн | GetGrowth',
    uz: 'Bizning Xizmatlar - Veb-ishlab chiqish, Marketing va Dizayn | GetGrowth'
  };
  
  const descriptions = {
    en: 'Professional IT & web solutions, digital marketing, and graphic design services. Custom websites, Telegram bots, SEO, and branding for small businesses.',
    ru: 'Профессиональные IT и веб-решения, цифровой маркетинг и графический дизайн. Индивидуальные сайты, Telegram-боты, SEO и брендинг для малого бизнеса.',
    uz: 'Professional IT va veb yechimlari, raqamli marketing va grafik dizayn xizmatlari. Maxsus veb-saytlar, Telegram botlar, SEO va brending kichik bizneslar uchun.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
  };
}

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);

  const itWebFeatures = [
    translations.services.itWeb.websites,
    translations.services.itWeb.orderBots,
    translations.services.itWeb.restaurantBots,
    translations.services.itWeb.automation,
  ];

  const marketingFeatures = [
    translations.services.marketing.seo,
    translations.services.marketing.socialMedia,
    translations.services.marketing.contentMarketing,
    translations.services.marketing.branding,
  ];

  const designFeatures = [
    translations.services.design.logos,
    translations.services.design.posters,
    translations.services.design.menus,
    translations.services.design.branding,
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 gradient-text">
            {translations.services.title}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            {translations.services.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-3 lg:col-span-1">
            <ServiceCard
              title={translations.services.itWeb.title}
              description={translations.services.itWeb.description}
              features={itWebFeatures}
              icon="💻"
              delay={0}
            />
          </div>
          <div className="md:col-span-3 lg:col-span-1">
            <ServiceCard
              title={translations.services.marketing.title}
              description={translations.services.marketing.description}
              features={marketingFeatures}
              icon="📈"
              delay={0.2}
            />
          </div>
          <div className="md:col-span-3 lg:col-span-1">
            <ServiceCard
              title={translations.services.design.title}
              description={translations.services.design.description}
              features={designFeatures}
              icon="🎨"
              delay={0.4}
            />
          </div>
        </div>

        <AnimatedSection delay={0.6}>
          <div className="text-center bg-white rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 gradient-text">{translations.cta.title}</h2>
            <p className="text-gray-600 mb-8">{translations.cta.subtitle}</p>
            <Link
              href={`/${params.lang}/contact`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {translations.cta.contact}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
