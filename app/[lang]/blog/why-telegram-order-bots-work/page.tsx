import { getTranslations } from '@/lib/i18n';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { Metadata } from 'next';

const AnimatedSection = dynamic(() => import('@/components/AnimatedSection'), { ssr: false });

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'How Telegram Food Ordering Bots Transform Small Restaurants | GetGrowth',
    ru: 'Как Telegram-боты для заказа еды меняют малые рестораны | GetGrowth',
    uz: 'Telegram ovqat buyurtma botlari kichik restoranlarni qanday o\'zgartiradi | GetGrowth'
  };
  
  const descriptions = {
    en: 'Learn why Telegram food ordering systems are the cheapest, fastest, and most effective solution for small restaurants that want to automate their business.',
    ru: 'Узнайте, почему Telegram-системы заказов — самое дешевое, быстрое и эффективное решение для малых ресторанов, желающих автоматизировать бизнес.',
    uz: 'Telegram buyurtma tizimlari biznesni avtomatlashtirmoqchi bo\'lgan kichik restoranlar uchun nima uchun eng arzon, tez va samarali yechim ekanligini bilib oling.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/blog/why-telegram-order-bots-work`,
    },
  };
}

export default function TelegramBotsArticle({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {translations.blog.post3.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <span>November 19, 2025</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </AnimatedSection>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {translations.blog.post3.intro}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="text-2xl font-bold gradient-text mb-4">
              {translations.blog.post3.section1.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              {translations.blog.post3.section1.content}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h2 className="text-2xl font-bold gradient-text mb-4">
              {translations.blog.post3.section2.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {translations.blog.post3.section2.content}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-4">
              <li>{translations.blog.post3.section2.point1}</li>
              <li>{translations.blog.post3.section2.point2}</li>
              <li>{translations.blog.post3.section2.point3}</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <h2 className="text-2xl font-bold gradient-text mb-4">
              {translations.blog.post3.section3.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {translations.blog.post3.section3.content}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-4">
              <li>{translations.blog.post3.section3.point1}</li>
              <li>{translations.blog.post3.section3.point2}</li>
              <li>{translations.blog.post3.section3.point3}</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <h2 className="text-2xl font-bold gradient-text mb-4">
              {translations.blog.post3.section4.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              {translations.blog.post3.section4.content}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <h2 className="text-2xl font-bold gradient-text mb-4">
              {translations.blog.post3.section5.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {translations.blog.post3.section5.content}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-4">
              <li>{translations.blog.post3.section5.point1}</li>
              <li>{translations.blog.post3.section5.point2}</li>
              <li>{translations.blog.post3.section5.point3}</li>
              <li>{translations.blog.post3.section5.point4}</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <h2 className="text-2xl font-bold gradient-text mb-4">
              {translations.blog.post3.section6.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              {translations.blog.post3.section6.content}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.9}>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-4">
                {translations.blog.post3.conclusion.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {translations.blog.post3.conclusion.content}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1.0}>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-center">
              <p className="text-white text-lg mb-6">
                {translations.blog.post3.cta}{' '}
                <Link href={`/${params.lang}/portfolio`} className="underline font-semibold">
                  {translations.blog.post3.ctaLink}
                </Link>{' '}
                {translations.blog.post3.ctaEnd}
              </p>
              <Link
                href={`/${params.lang}/contact`}
                className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {translations.cta.contact}
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={1.1}>
          <div className="mt-12">
            <Link
              href={`/${params.lang}/blog`}
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
            >
              ← {translations.blog.backToBlog}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
