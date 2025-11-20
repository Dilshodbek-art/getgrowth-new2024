import en from '@/locales/en.json';
import ru from '@/locales/ru.json';
import uz from '@/locales/uz.json';

const translations: { [key: string]: any } = {
  en,
  ru,
  uz,
};

export const supportedLanguages = ['en', 'ru', 'uz'];
export const defaultLanguage = 'en';

export function getTranslations(lang: string) {
  return translations[lang] || translations[defaultLanguage];
}
