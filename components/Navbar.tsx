'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  lang: string;
  translations: any;
}

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Navbar({ lang, translations }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const t = translations.nav || {};

  const navItems: NavItem[] = [
    { label: t.home || 'Home', href: `/${lang}` },
    {
      label: t.services || 'Services',
      dropdown: [
        { label: t.marketing || 'Marketing', href: `/${lang}/services/marketing` },
        { label: t.webDev || 'Web Development & Solutions', href: `/${lang}/services/web-development` },
        { label: t.graphicDesign || 'Graphic Design', href: `/${lang}/services/graphic-design` },
      ],
    },
    {
      label: t.pricing || 'Pricing',
      dropdown: [
        { label: t.marketing || 'Marketing', href: `/${lang}/pricing/marketing` },
        { label: t.webDev || 'Web Development & Solutions', href: `/${lang}/pricing/web-development` },
        { label: t.graphicDesign || 'Graphic Design', href: `/${lang}/pricing/graphic-design` },
      ],
    },
    {
      label: t.about || 'About',
      dropdown: [
        { label: t.aboutUs || 'About Us', href: `/${lang}/about` },
        { label: t.portfolio || 'Portfolio', href: `/${lang}/portfolio` },
        { label: t.testimonials || 'Testimonials', href: `/${lang}/testimonials` },
      ],
    },
    { label: t.contact || 'Contact', href: `/${lang}/contact` },
  ];

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === label ? null : label);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${lang}`} className="text-2xl font-bold gradient-text">
            GetGrowth
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <LanguageSwitcher currentLang={lang} />
            
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition py-2">
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-fadeIn">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.label === (t.contact || 'Contact') ? (
                  <Link
                    href={item.href!}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-gray-700 hover:text-purple-600 transition"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher currentLang={lang} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-gray-100 mt-2 pt-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="w-full flex items-center justify-between text-gray-700 hover:text-purple-600 py-3 px-2"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileOpenDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {mobileOpenDropdown === item.label && (
                      <div className="pl-4 space-y-1 bg-gray-50 rounded-lg py-2 mb-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-600 hover:text-purple-600 py-2 px-2"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-2 ${
                      item.label === (t.contact || 'Contact')
                        ? 'text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold mt-4'
                        : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}
