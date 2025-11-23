import { getTranslations } from '@/lib/i18n';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

const CommentsSection = dynamic(() => import('@/components/CommentsSection'), { ssr: false });

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Comments - GetGrowth',
    ru: 'Комментарии - GetGrowth',
    uz: 'Izohlar - GetGrowth'
  };
  
  const descriptions = {
    en: 'Share your thoughts and feedback with GetGrowth community.',
    ru: 'Поделитесь своими мыслями и отзывами с сообществом GetGrowth.',
    uz: 'GetGrowth jamoasi bilan fikr va sharhlaringizni baham ko\'ring.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/comments`,
    },
  };
}

export default function CommentsPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <CommentsSection translations={translations.comments} />
    </div>
  );
}
