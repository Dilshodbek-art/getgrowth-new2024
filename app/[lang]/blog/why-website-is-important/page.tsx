import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';

export default function BlogPost({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <article className="blog-post max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <Link 
          href={`/${params.lang}/blog`}
          className="text-purple-600 hover:text-purple-800 font-semibold mb-6 inline-block"
        >
          ← {translations.blog.backToBlog}
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          {translations.blog.post1.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>November 15, 2025</span>
          <span>•</span>
          <span>5 min read</span>
        </div>

        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          {translations.blog.post1.intro}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post1.section1.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post1.section1.content}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post1.section2.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post1.section2.content}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post1.section3.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post1.section3.content}{' '}
          <Link href={`/${params.lang}/services`} className="text-blue-600 underline hover:text-blue-800">
            {translations.nav.services.toLowerCase()}
          </Link>{' '}
          {translations.blog.post1.section3.or}{' '}
          <Link href={`/${params.lang}/portfolio`} className="text-blue-600 underline hover:text-blue-800">
            {translations.nav.portfolio.toLowerCase()}
          </Link>
          {translations.blog.post1.section3.end}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post1.section4.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post1.section4.content}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post1.section5.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post1.section5.content}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post1.conclusion.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post1.conclusion.content}
        </p>

        <div className="mt-10 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
          <p className="font-semibold text-gray-800">
            {translations.blog.post1.cta}{' '}
            <Link href={`/${params.lang}/contact`} className="text-blue-600 underline hover:text-blue-800">
              {translations.blog.post1.ctaLink}
            </Link>{' '}
            {translations.blog.post1.ctaEnd}
          </p>
        </div>
      </article>
    </div>
  );
}
