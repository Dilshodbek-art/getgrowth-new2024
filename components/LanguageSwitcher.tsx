'use client';

import { usePathname, useRouter } from 'next/navigation';

interface LanguageSwitcherProps {
  currentLang: string;
}

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'uz', label: 'UZ' },
];

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang: string) => {
    const segments = pathname.split('/').filter(Boolean);
    const basePath = segments.slice(1).join('/');
    const newPath = `/${newLang}${basePath ? '/' + basePath : ''}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-2 py-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition ${
            currentLang === lang.code
              ? 'bg-purple-600 text-white'
              : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
