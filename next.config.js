/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
  devIndicators: {
    buildActivity: false,
  },
  async redirects() {
    return [
      {
        source: '/en/blog',
        destination: '/en/about/blog',
        permanent: true,
      },
      {
        source: '/ru/blog',
        destination: '/ru/about/blog',
        permanent: true,
      },
      {
        source: '/uz/blog',
        destination: '/uz/about/blog',
        permanent: true,
      },
      {
        source: '/en/blog/:slug',
        destination: '/en/about/blog/:slug',
        permanent: true,
      },
      {
        source: '/ru/blog/:slug',
        destination: '/ru/about/blog/:slug',
        permanent: true,
      },
      {
        source: '/uz/blog/:slug',
        destination: '/uz/about/blog/:slug',
        permanent: true,
      },
      {
        source: '/en/comments',
        destination: '/en/testimonials',
        permanent: true,
      },
      {
        source: '/ru/comments',
        destination: '/ru/testimonials',
        permanent: true,
      },
      {
        source: '/uz/comments',
        destination: '/uz/testimonials',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
