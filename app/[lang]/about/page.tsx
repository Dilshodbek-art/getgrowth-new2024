import { getTranslations } from '@/lib/i18n';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { Metadata } from 'next';

const AnimatedSection = dynamic(() => import('@/components/AnimatedSection'), { ssr: false });

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'About GetGrowth - Your Digital Growth Partner',
    ru: 'О GetGrowth - Ваш Партнёр в Цифровом Росте',
    uz: 'GetGrowth Haqida - Sizning Raqamli O\'sish Hamkoringiz'
  };
  
  const descriptions = {
    en: 'Learn about GetGrowth, a digital agency helping small businesses grow online. We specialize in websites, Telegram bots, marketing, and design with affordable solutions.',
    ru: 'Узнайте о GetGrowth - цифровом агентстве, помогающем малому бизнесу расти онлайн. Мы специализируемся на сайтах, Telegram-ботах, маркетинге и дизайне.',
    uz: 'GetGrowth haqida - kichik bizneslarni onlayn o\'stirishga yordam beradigan raqamli agentlik. Veb-saytlar, Telegram botlar, marketing va dizayn bo\'yicha ixtisoslashganmiz.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/about`,
    },
  };
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 gradient-text">
            {translations.about.title}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-2xl p-12 shadow-xl mb-12">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              {translations.about.description}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="text-center bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">{translations.cta.title}</h2>
            <p className="text-white/90 mb-8 text-lg">{translations.cta.subtitle}</p>
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
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
