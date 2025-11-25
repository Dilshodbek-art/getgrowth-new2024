import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

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
  const t = translations.home || {};

  const services = [
    {
      title: t.services?.branding?.title || 'Logo & Branding',
      description: t.services?.branding?.description || 'Create a memorable brand identity with professional logos and brand visuals.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: t.services?.animation?.title || 'Motion Graphics & Animation',
      description: t.services?.animation?.description || 'Engage your audience with animated logos, explainer videos, and social media animations.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t.services?.website?.title || 'Website Design',
      description: t.services?.website?.description || 'Modern, responsive, and SEO-friendly websites tailored to your business.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t.services?.social?.title || 'Social Media Content',
      description: t.services?.social?.description || 'Eye-catching posts, reels, and ads to boost your online presence.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
    },
  ];

  const pricingTeaser = [
    {
      service: t.pricing?.logo || 'Logo Design',
      price: '$50',
    },
    {
      service: t.pricing?.animation || 'Logo Animation',
      price: '$30',
    },
    {
      service: t.pricing?.website || 'Website Development',
      price: '$150',
    },
  ];

  const valueProps = [
    {
      title: t.value?.fast?.title || 'Fast Delivery',
      description: t.value?.fast?.description || 'We deliver high-quality results on time.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: t.value?.affordable?.title || 'Affordable Pricing',
      description: t.value?.affordable?.description || 'Professional services without breaking the bank.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t.value?.allInOne?.title || 'All-in-One',
      description: t.value?.allInOne?.description || 'Design, animation, web, and marketing handled in one place.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: t.value?.custom?.title || 'Custom Solutions',
      description: t.value?.custom?.description || 'Tailored strategies for your business needs.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
  ];

  const portfolioItems = [
    {
      image: '/portfolio/jarvis-repairs.jpg',
      title: t.portfolio?.item1?.title || 'Jarvis Repairs',
      category: t.portfolio?.item1?.category || 'Logo Design',
    },
    {
      image: '/portfolio/pacific-calm.jpg',
      title: t.portfolio?.item2?.title || 'Pacific Calm',
      category: t.portfolio?.item2?.category || 'Brand Identity',
    },
    {
      image: '/portfolio/poster-burger.jpg',
      title: t.portfolio?.item3?.title || 'Restaurant Poster',
      category: t.portfolio?.item3?.category || 'Marketing Design',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: t.process?.step1?.title || 'Contact',
      description: t.process?.step1?.description || 'Reach out and tell us about your project',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      step: '02',
      title: t.process?.step2?.title || 'Plan & Design',
      description: t.process?.step2?.description || 'We create a strategy and design concepts',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      step: '03',
      title: t.process?.step3?.title || 'Build & Deliver',
      description: t.process?.step3?.description || 'We bring your vision to life',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      step: '04',
      title: t.process?.step4?.title || 'Launch & Support',
      description: t.process?.step4?.description || 'Go live with ongoing assistance',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{t.hero?.title || 'We Help Businesses Grow Online'}</span>
            <br />
            <span className="text-gray-800">{t.hero?.subtitle || 'with Stunning Design & Marketing'}</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.hero?.description || 'Get professional branding, animations, websites, and social media content to attract customers and grow your business.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${params.lang}/services`}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              {t.hero?.cta1 || 'See Our Services'}
            </Link>
            <Link
              href={`/${params.lang}/contact`}
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300"
            >
              {t.hero?.cta2 || 'Contact Us'}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Key Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t.servicesSection?.title || 'What We Do'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.servicesSection?.subtitle || 'Everything you need to establish and grow your online presence'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${params.lang}/services`}
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all duration-300"
            >
              {t.servicesSection?.cta || 'Learn More About Our Services'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t.pricingTeaser?.title || 'Affordable Prices for Quality Work'}
            </h2>
            <p className="text-purple-200 text-lg">
              {t.pricingTeaser?.subtitle || 'Starting prices that fit your budget'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {pricingTeaser.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <p className="text-purple-200 text-lg mb-2">{item.service}</p>
                <p className="text-white text-4xl font-bold">{item.price}</p>
                <p className="text-purple-300 text-sm mt-2">{t.pricingTeaser?.startingFrom || 'starting from'}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-purple-200 mb-6">{t.pricingTeaser?.note || 'Contact us for full pricing and custom packages.'}</p>
            <Link
              href={`/${params.lang}/pricing`}
              className="inline-block px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.pricingTeaser?.cta || 'View Full Pricing'}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t.whyChoose?.title || 'Why Choose GetGrowth?'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.whyChoose?.subtitle || 'We\'re dedicated to helping your business succeed online'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white">
                  {prop.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{prop.title}</h3>
                  <p className="text-gray-600">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t.portfolioPreview?.title || 'Our Recent Work'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.portfolioPreview?.subtitle || 'Take a look at some of our latest projects'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-purple-300 text-sm mb-1">{item.category}</p>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${params.lang}/portfolio`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              {t.portfolioPreview?.cta || 'See Full Portfolio'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process / How We Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t.processSection?.title || 'How We Work'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.processSection?.subtitle || 'A simple process to bring your ideas to life'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-200 to-blue-200"></div>
                )}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-sm shadow-md border-2 border-purple-100">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t.bottomCta?.title || 'Ready to Grow Your Business?'}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {t.bottomCta?.subtitle || 'Let\'s create something amazing together. Get in touch and start your project today.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${params.lang}/contact`}
              className="px-10 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {t.bottomCta?.cta || 'Get in Touch'}
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
              {t.bottomCta?.telegram || 'Chat on Telegram'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
