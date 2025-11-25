'use client';

import Link from 'next/link';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  lang: string;
  translations: any;
}

export default function Navbar({ lang, translations }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${lang}`} className="text-2xl font-bold gradient-text">
            GetGrowth
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <LanguageSwitcher currentLang={lang} />
            <Link href={`/${lang}`} className="text-gray-700 hover:text-purple-600 transition">
              {translations.nav.home}
            </Link>
            <Link href={`/${lang}/services`} className="text-gray-700 hover:text-purple-600 transition">
              {translations.nav.services}
            </Link>
            <Link href={`/${lang}/portfolio`} className="text-gray-700 hover:text-purple-600 transition">
              {translations.nav.portfolio}
            </Link>
            <Link href={`/${lang}/comments`} className="text-gray-700 hover:text-purple-600 transition">
              {translations.nav.comments}
            </Link>
            <Link href={`/${lang}/pricing`} className="text-gray-700 hover:text-purple-600 transition">
              {translations.nav.pricing}
            </Link>
            <Link href={`/${lang}/blog`} className="text-gray-700 hover:text-purple-600 transition">
              {translations.nav.blog}
            </Link>
            <Link href={`/${lang}/about`} className="text-gray-700 hover:text-purple-600 transition">
              {translations.nav.about}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {translations.nav.contact}
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher currentLang={lang} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href={`/${lang}`} className="block text-gray-700 hover:text-purple-600 py-2">
              {translations.nav.home}
            </Link>
            <Link href={`/${lang}/services`} className="block text-gray-700 hover:text-purple-600 py-2">
              {translations.nav.services}
            </Link>
            <Link href={`/${lang}/portfolio`} className="block text-gray-700 hover:text-purple-600 py-2">
              {translations.nav.portfolio}
            </Link>
            <Link href={`/${lang}/comments`} className="block text-gray-700 hover:text-purple-600 py-2">
              {translations.nav.comments}
            </Link>
            <Link href={`/${lang}/pricing`} className="block text-gray-700 hover:text-purple-600 py-2">
              {translations.nav.pricing}
            </Link>
            <Link href={`/${lang}/blog`} className="block text-gray-700 hover:text-purple-600 py-2">
              {translations.nav.blog}
            </Link>
            <Link href={`/${lang}/about`} className="block text-gray-700 hover:text-purple-600 py-2">
              {translations.nav.about}
            </Link>
            <Link href={`/${lang}/contact`} className="block text-gray-700 hover:text-purple-600 py-2">
              {translations.nav.contact}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
