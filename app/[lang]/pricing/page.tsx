'use client';

import { useState } from 'react';
import { getTranslations } from '@/lib/i18n';
import AnimatedSection from '@/components/AnimatedSection';
import PricingToggle from '@/components/PricingToggle';
import Link from 'next/link';

export default function PricingPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      name: translations.pricing.basic.name,
      description: translations.pricing.basic.description,
      monthlyPrice: '$40',
      annualPrice: '$400',
      features: translations.pricing.basic.features,
      cta: translations.pricing.basic.cta,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: translations.pricing.business.name,
      description: translations.pricing.business.description,
      monthlyPrice: '$65',
      annualPrice: '$650',
      features: translations.pricing.business.features,
      cta: translations.pricing.business.cta,
      gradient: 'from-purple-500 to-pink-500',
      featured: true,
    },
    {
      name: translations.pricing.pro.name,
      description: translations.pricing.pro.description,
      monthlyPrice: '$100',
      annualPrice: '$1000',
      features: translations.pricing.pro.features,
      cta: translations.pricing.pro.cta,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const services = [
    {
      title: translations.pricing.webDevelopment.title,
      basic: translations.pricing.webDevelopment.basic,
      business: translations.pricing.webDevelopment.business,
      pro: translations.pricing.webDevelopment.pro,
    },
    {
      title: translations.pricing.telegramBots.title,
      basic: translations.pricing.telegramBots.basic,
      business: translations.pricing.telegramBots.business,
      pro: translations.pricing.telegramBots.pro,
    },
    {
      title: translations.pricing.marketing.title,
      basic: translations.pricing.marketing.basic,
      business: translations.pricing.marketing.business,
      pro: translations.pricing.marketing.pro,
    },
    {
      title: translations.pricing.design.title,
      basic: translations.pricing.design.basic,
      business: translations.pricing.design.business,
      pro: translations.pricing.design.pro,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 gradient-text">
            {translations.pricing.title}
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            {translations.pricing.subtitle}
          </p>
        </AnimatedSection>

        {/* Pricing Toggle */}
        <AnimatedSection delay={0.2}>
          <PricingToggle
            monthlyLabel={translations.pricing.monthly}
            annualLabel={translations.pricing.annual}
            saveMessage={translations.pricing.saveMessage}
            onToggle={setIsAnnual}
          />
        </AnimatedSection>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, index) => (
            <AnimatedSection key={index} delay={index * 0.2 + 0.3}>
              <div
                className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  tier.featured ? 'ring-4 ring-purple-500 transform scale-105' : ''
                } h-full flex flex-col`}
              >
                {tier.featured && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full w-fit mb-4">
                    {translations.pricing.mostPopular}
                  </div>
                )}
                <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                      {isAnnual ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{isAnnual ? translations.pricing.year : translations.pricing.month}
                    </span>
                  </div>
                </div>
                
                {/* Plan Features */}
                <div className="mb-6 flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/${params.lang}/contact`}
                  className={`w-full py-4 rounded-lg font-semibold text-center block transition-all duration-300 hover:shadow-xl transform hover:scale-105 bg-gradient-to-r ${tier.gradient} text-white`}
                >
                  {tier.cta}
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Service Packages Details */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-8 gradient-text">{service.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-600">Basic</h4>
                    <ul className="space-y-2">
                      {service.basic.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-purple-600">Business</h4>
                    <ul className="space-y-2">
                      {service.business.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-orange-600">Professional</h4>
                    <ul className="space-y-2">
                      {service.pro.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={0.4}>
          <div className="mt-20 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your project and get a custom quote!
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
    </div>
  );
}
