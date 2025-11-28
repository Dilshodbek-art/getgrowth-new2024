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
        source: '/:lang/blog',
        destination: '/:lang/about/blog',
        permanent: true,
      },
      {
        source: '/:lang/blog/:slug',
        destination: '/:lang/about/blog/:slug',
        permanent: true,
      },
      {
        source: '/:lang/comments',
        destination: '/:lang/testimonials',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
