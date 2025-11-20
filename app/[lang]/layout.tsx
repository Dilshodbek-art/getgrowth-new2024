import { getTranslations, supportedLanguages } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: 'uz' }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!supportedLanguages.includes(params.lang)) {
    notFound();
  }

  const translations = getTranslations(params.lang);

  return (
    <>
      <Navbar lang={params.lang} translations={translations} />
      <main className="min-h-screen">{children}</main>
      <Footer lang={params.lang} translations={translations} />
    </>
  );
}
