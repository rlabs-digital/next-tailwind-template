const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');

/** @type {import('next').NextConfig} */
module.exports = {};

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })]], {
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
  trailingSlash: true,

  // Add custom webpack configurations if needed
  webpack(config, { isServer }) {
    if (isServer) {
      // Server-side webpack configuration
    } else {
      // Client-side webpack configuration
    }

    return config;
  },

  // Add your custom headers for enhanced security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
});

module.exports = config;
