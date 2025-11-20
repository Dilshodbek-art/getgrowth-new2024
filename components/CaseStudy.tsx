'use client';

import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

interface CaseStudyProps {
  lang: string;
  translations: any;
}

export default function CaseStudy({ lang, translations }: CaseStudyProps) {
  const features = [
    {
      icon: '🍔',
      text: translations.caseStudy.features.menu
    },
    {
      icon: '🛒',
      text: translations.caseStudy.features.cart
    },
    {
      icon: '💳',
      text: translations.caseStudy.features.payment
    },
    {
      icon: '📝',
      text: translations.caseStudy.features.customerForm
    },
    {
      icon: '📍',
      text: translations.caseStudy.features.location
    },
    {
      icon: '⚡',
      text: translations.caseStudy.features.autoOrder
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            {translations.caseStudy.title}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            {translations.caseStudy.subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-5xl">🍔</div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">
                  {translations.caseStudy.projectTitle}
                </h3>
                <p className="text-gray-600">{translations.caseStudy.clientName}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 mb-6">
              <p className="text-gray-700 italic leading-relaxed">
                "{translations.caseStudy.testimonial}"
              </p>
              <p className="text-sm text-gray-600 mt-4 font-semibold">
                — {translations.caseStudy.testimonialAuthor}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold mb-4 gradient-text">
                {translations.caseStudy.featuresTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50"
                  >
                    <div className="text-2xl flex-shrink-0">{feature.icon}</div>
                    <span className="text-gray-700 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/bekburger1_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {translations.caseStudy.tryDemo}
              </a>
              <Link
                href={`/${lang}/contact`}
                className="flex-1 text-center px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all duration-300"
              >
                {translations.caseStudy.ctaButton}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
