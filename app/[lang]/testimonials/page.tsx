import { getTranslations } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';
import CommentsSection from '@/components/CommentsSection';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const titles = {
    en: 'Client Testimonials - GetGrowth Digital Agency',
    ru: 'Отзывы Клиентов - GetGrowth',
    uz: 'Mijozlar Fikrlari - GetGrowth'
  };
  
  const descriptions = {
    en: 'See what our clients say about working with GetGrowth. Real reviews from satisfied businesses.',
    ru: 'Узнайте, что говорят наши клиенты о работе с GetGrowth. Реальные отзывы довольных компаний.',
    uz: "GetGrowth bilan ishlash haqida mijozlarimiz nima deyishini ko'ring. Mamnun bizneslardan haqiqiy sharhlar."
  };

  return {
    title: titles[params.lang as keyof typeof titles] || titles.en,
    description: descriptions[params.lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://getgrowth.online/${params.lang}/testimonials`,
    },
  };
}

export default function TestimonialsPage({ params }: { params: { lang: string } }) {
  const translations = getTranslations(params.lang);
  const t = translations.testimonials || {};
  const commentsT = translations.comments || {};

  const testimonials = [
    {
      name: t.testimonial1?.name || 'Alex Johnson',
      role: t.testimonial1?.role || 'Restaurant Owner',
      company: t.testimonial1?.company || 'BekBurger',
      text: t.testimonial1?.text || 'GetGrowth built an amazing Telegram bot for our restaurant. Orders increased by 40% in the first month! The team was professional and delivered on time.',
      rating: 5,
    },
    {
      name: t.testimonial2?.name || 'Maria Santos',
      role: t.testimonial2?.role || 'Startup Founder',
      company: t.testimonial2?.company || 'TechFlow',
      text: t.testimonial2?.text || 'The branding package they created for us exceeded our expectations. Our new logo and brand identity helped us stand out in a crowded market.',
      rating: 5,
    },
    {
      name: t.testimonial3?.name || 'David Chen',
      role: t.testimonial3?.role || 'E-commerce Manager',
      company: t.testimonial3?.company || 'StyleHub',
      text: t.testimonial3?.text || 'Our website redesign by GetGrowth resulted in a 60% increase in conversions. They truly understand what makes a website work.',
      rating: 5,
    },
    {
      name: t.testimonial4?.name || 'Sarah Williams',
      role: t.testimonial4?.role || 'Marketing Director',
      company: t.testimonial4?.company || 'GreenLife Co',
      text: t.testimonial4?.text || 'The social media content they create for us is always on point. Our engagement has tripled since we started working with GetGrowth.',
      rating: 5,
    },
    {
      name: t.testimonial5?.name || 'Michael Brown',
      role: t.testimonial5?.role || 'Fitness Studio Owner',
      company: t.testimonial5?.company || 'FitZone',
      text: t.testimonial5?.text || 'From our website to our booking bot, GetGrowth has been instrumental in digitizing our business. Highly recommended!',
      rating: 5,
    },
    {
      name: t.testimonial6?.name || 'Emma Davis',
      role: t.testimonial6?.role || 'Boutique Owner',
      company: t.testimonial6?.company || 'Chic & Co',
      text: t.testimonial6?.text || 'The logo animation they created for us is stunning. It really brings our brand to life on social media.',
      rating: 5,
    },
  ];

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
              {t.title || 'Client Testimonials'}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.subtitle || "Don't just take our word for it. Here's what our clients have to say about working with us."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-purple-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.ctaTitle || 'Ready to Join Our Happy Clients?'}
            </h2>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
              {t.ctaDescription || "Let's create something amazing together. Get in touch and start your project today."}
            </p>
            <Link
              href={`/${params.lang}/contact`}
              className="inline-block px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {t.ctaButton || 'Start Your Project'}
            </Link>
          </div>
        </div>
      </section>

      <CommentsSection translations={commentsT} />
    </>
  );
}
