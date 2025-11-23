import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Contact Us - GetGrowth',
    ru: 'Связаться с Нами - GetGrowth',
    uz: 'Biz bilan bog\'lanish - GetGrowth'
  };
  
  const descriptions = {
    en: 'Get in touch with GetGrowth for website development, Telegram bots, marketing, and design services. Contact us via WhatsApp, Telegram, or our contact form.',
    ru: 'Свяжитесь с GetGrowth для разработки сайтов, Telegram-ботов, маркетинга и дизайна. Напишите нам в WhatsApp, Telegram или через форму обратной связи.',
    uz: 'Veb-sayt ishlab chiqish, Telegram botlar, marketing va dizayn xizmatlari uchun GetGrowth bilan bog\'laning. WhatsApp, Telegram yoki aloqa formasi orqali murojaat qiling.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/contact`,
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
