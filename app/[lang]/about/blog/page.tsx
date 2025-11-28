import { getTranslations } from '@/lib/i18n';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { Metadata } from 'next';

const AnimatedSection = dynamic(() => import('@/components/AnimatedSection'), { ssr: false });

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Blog - Digital Marketing & Website Tips | GetGrowth',
    ru: 'Блог - Советы по Цифровому Маркетингу и Веб-сайтам | GetGrowth',
    uz: 'Blog - Raqamli Marketing va Veb-sayt Bo\'yicha Maslahatlar | GetGrowth'
  };
  
  const descriptions = {
    en: 'Expert tips and guides on building websites, SEO, and digital marketing for small businesses. Learn how to grow your business online with GetGrowth.',
    ru: 'Экспертные советы и руководства по созданию сайтов, SEO и цифровому маркетингу для малого бизнеса. Узнайте, как развивать бизнес онлайн с GetGrowth.',
    uz: 'Kichik bizneslar uchun veb-saytlar yaratish, SEO va raqamli marketing bo\'yicha ekspert maslahatlari. GetGrowth bilan biznesingizni onlayn rivojlantirishni o\'rganing.'
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/about/blog`,
    },
  };
}

export default function BlogPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);

  const blogPosts = [
    {
      slug: 'why-telegram-order-bots-work',
      title: translations.blog.post3.title,
      excerpt: translations.blog.post3.excerpt,
      date: 'November 19, 2025',
      readTime: '6 min read',
    },
    {
      slug: 'why-website-is-important',
      title: translations.blog.post1.title,
      excerpt: translations.blog.post1.excerpt,
      date: 'November 15, 2025',
      readTime: '5 min read',
    },
    {
      slug: 'step-by-step-guide-to-launch-website',
      title: translations.blog.post2.title,
      excerpt: translations.blog.post2.excerpt,
      date: 'November 15, 2025',
      readTime: '7 min read',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 gradient-text">
            {translations.blog.title}
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            {translations.blog.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.2}>
              <Link href={`/${params.lang}/about/blog/${post.slug}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 gradient-text">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                    {translations.blog.readMore} →
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-20 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">{translations.blog.cta.title}</h2>
            <p className="text-xl text-white/90 mb-8">
              {translations.blog.cta.subtitle}
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
