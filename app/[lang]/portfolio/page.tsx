import { getTranslations } from '@/lib/i18n';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

const AnimatedSection = dynamic(() => import('@/components/AnimatedSection'), { ssr: false });

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Our Portfolio - Logo Designs & Posters | GetGrowth',
    ru: 'Наше Портфолио - Логотипы и Постеры | GetGrowth',
    uz: 'Bizning Portfolio - Logo Dizaynlari va Posterlar | GetGrowth'
  };
  
  const descriptions = {
    en: 'View our portfolio of logo designs, posters, and menu designs for restaurants, startups, and small businesses. See our creative work and get inspired.',
    ru: 'Посмотрите наше портфолио логотипов, постеров и дизайна меню для ресторанов, стартапов и малого бизнеса. Увидьте нашу креативную работу.',
    uz: 'Restoranlar, startaplar va kichik bizneslar uchun logo dizaynlari, posterlar va menyu dizaynlari portfoliomizni ko\'ring. Ijodiy ishlarimizni ko\'rib chiqing.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
  };
}

export default function PortfolioPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);

  const logoProjects = [
    {
      id: 1,
      title: 'Jarvis\'s Repairs',
      category: 'Logo Design — Luxury Repair Service',
      image: '/portfolio/jarvis-repairs.jpg',
    },
    {
      id: 2,
      title: 'Pacific Calm',
      category: 'Logo Design — Yoga & Wellness Brand',
      image: '/portfolio/pacific-calm.jpg',
    },
    {
      id: 3,
      title: 'Malluable',
      category: 'Logo Design — Life Coaching Brand',
      image: '/portfolio/malluable.jpg',
    },
    {
      id: 4,
      title: 'DLP',
      category: 'Logo Design — Business Cards',
      image: '/portfolio/dlp-logo.jpg',
    },
    {
      id: 5,
      title: 'RX Pharmacy',
      category: 'Logo Design — Medical & Pharmacy Brand',
      image: '/portfolio/logo-rx.jpg',
    },
  ];

  const posterProjects = [
    {
      id: 1,
      title: 'Super Delicious Food Menu',
      category: 'Restaurant Menu Design — Burger Special',
      image: '/portfolio/poster-burger.jpg',
    },
    {
      id: 2,
      title: 'The Weeknd',
      category: 'Promotional Poster Design',
      image: '/portfolio/poster-weeknd.jpg',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 gradient-text">
              {translations.portfolio.title}
            </h1>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              {translations.portfolio.subtitle}
            </p>
          </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
              {translations.portfolio.logos.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {logoProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
              {translations.portfolio.posters.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {posterProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative bg-gray-100 overflow-hidden flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="text-center bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">{translations.portfolio.cta.title}</h2>
            <p className="text-white/90 mb-8 text-lg">{translations.portfolio.cta.subtitle}</p>
            <a
              href={`/${params.lang}/contact`}
              className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {translations.portfolio.cta.button}
            </a>
          </div>
        </AnimatedSection>
        </div>
      </div>
  );
}
