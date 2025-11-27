import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'About GetGrowth - Your Digital Growth Partner',
    ru: 'О GetGrowth - Ваш Партнёр в Цифровом Росте',
    uz: "GetGrowth Haqida - Sizning Raqamli O'sish Hamkoringiz"
  };
  
  const descriptions = {
    en: 'Learn about GetGrowth, a digital agency helping businesses grow online. We specialize in marketing, web development, and design with affordable solutions.',
    ru: 'Узнайте о GetGrowth - цифровом агентстве, помогающем бизнесу расти онлайн. Мы специализируемся на маркетинге, веб-разработке и дизайне.',
    uz: "GetGrowth haqida - bizneslarni onlayn o'stirishga yordam beradigan raqamli agentlik. Marketing, veb ishlab chiqish va dizayn bo'yicha ixtisoslashganmiz."
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
  const t = translations.aboutPage || {};

  const uniquePoints = [
    {
      title: t.unique1?.title || 'All-in-One Solution',
      description: t.unique1?.description || 'Marketing, web development, and design - all under one roof. No need to work with multiple agencies.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: t.unique2?.title || 'Affordable Pricing',
      description: t.unique2?.description || 'Professional quality at prices that work for growing businesses. Transparent pricing with no hidden fees.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t.unique3?.title || 'Personal Approach',
      description: t.unique3?.description || 'We treat every client like a partner. Direct communication, quick responses, and solutions tailored to your needs.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: t.unique4?.title || 'Results-Driven',
      description: t.unique4?.description || 'We focus on what matters - growing your business. Every project is designed to deliver measurable results.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
            {t.title || 'About GetGrowth'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle || 'We help businesses establish and grow their online presence with professional marketing, web development, and design services.'}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t.missionTitle || 'Our Mission'}
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              {t.missionText || 'To empower businesses of all sizes with affordable, high-quality digital solutions. We believe every business deserves a strong online presence, and we are here to make that happen.'}
            </p>
          </div>
        </div>
      </section>

      {/* Story/Background Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            {t.storyTitle || 'Our Story'}
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.storyPart1 || 'GetGrowth was founded with a simple idea: businesses should not have to choose between quality and affordability when it comes to their digital presence.'}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.storyPart2 || 'We saw too many businesses struggling to find reliable partners who could deliver professional results without breaking the bank. So we built GetGrowth to be different - a full-service digital agency that delivers enterprise-quality work at prices that work for growing businesses.'}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.storyPart3 || 'Today, we have helped dozens of businesses transform their online presence with stunning designs, effective marketing strategies, and powerful digital solutions. And we are just getting started.'}
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            {t.uniqueTitle || 'What Makes Us Different'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uniquePoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            {t.exploreTitle || 'Explore More'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href={`/${params.lang}/portfolio`}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                {t.portfolioLink || 'View Our Portfolio'}
              </h3>
              <p className="text-gray-600">
                {t.portfolioDescription || 'See examples of our work and the results we have achieved for our clients.'}
              </p>
            </Link>
            <Link
              href={`/${params.lang}/testimonials`}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                {t.testimonialsLink || 'Read Client Testimonials'}
              </h3>
              <p className="text-gray-600">
                {t.testimonialsDescription || 'Hear what our clients have to say about working with us.'}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.ctaTitle || 'Ready to Work Together?'}
          </h2>
          <p className="text-xl text-white/90 mb-10">
            {t.ctaDescription || "Let's discuss your project and see how we can help your business grow."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${params.lang}/contact`}
              className="px-10 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {t.ctaButton || 'Get in Touch'}
            </Link>
            <a
              href="https://t.me/GetGrowthSupport"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.057-.693-1.654-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.099.154.232.17.325.015.093.033.306.019.472z"/>
              </svg>
              {t.telegramButton || 'Chat on Telegram'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
