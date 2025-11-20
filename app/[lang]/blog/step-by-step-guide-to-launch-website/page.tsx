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
          {translations.blog.post2.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>November 15, 2025</span>
          <span>•</span>
          <span>7 min read</span>
        </div>

        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          {translations.blog.post2.intro}{' '}
          <Link href={`/${params.lang}/blog/why-website-is-important`} className="text-blue-600 underline hover:text-blue-800">
            {translations.blog.post1.title}
          </Link>.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post2.step1.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post2.step1.content}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post2.step2.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post2.step2.content}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post2.step3.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post2.step3.content}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post2.step4.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post2.step4.content}{' '}
          <Link href={`/${params.lang}/portfolio`} className="text-blue-600 underline hover:text-blue-800">
            {translations.nav.portfolio.toLowerCase()}
          </Link>{' '}
          {translations.blog.post2.step4.end}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post2.step5.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post2.step5.content}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post2.step6.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post2.step6.content}
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800">
          {translations.blog.post2.step7.title}
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          {translations.blog.post2.step7.content}
        </p>

        <div className="mt-10 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
          <p className="font-semibold text-gray-800">
            {translations.blog.post2.cta}{' '}
            <Link href={`/${params.lang}/contact`} className="text-blue-600 underline hover:text-blue-800">
              {translations.blog.post2.ctaLink}
            </Link>{' '}
            {translations.blog.post2.ctaEnd}
          </p>
        </div>
      </article>
    </div>
  );
}
