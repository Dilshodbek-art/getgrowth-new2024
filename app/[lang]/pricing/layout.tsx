import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Pricing Plans - Affordable Web & Marketing Services | GetGrowth',
    ru: 'Тарифные Планы - Доступные Веб-услуги и Маркетинг | GetGrowth',
    uz: 'Narxlar Rejalari - Arzon Veb va Marketing Xizmatlari | GetGrowth'
  };
  
  const descriptions = {
    en: 'Affordable pricing plans for websites, Telegram bots, marketing, and design services. Choose Basic, Business, or Pro plans starting from $39/month.',
    ru: 'Доступные тарифные планы для сайтов, Telegram-ботов, маркетинга и дизайна. Выберите планы Basic, Business или Pro от $39/месяц.',
    uz: 'Veb-saytlar, Telegram botlar, marketing va dizayn xizmatlari uchun arzon narxlar rejalari. $39/oydan boshlab Basic, Business yoki Pro rejalarni tanlang.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/pricing`,
    },
  };
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
