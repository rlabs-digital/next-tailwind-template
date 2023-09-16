/** @type {import('next').NextConfig} */
module.exports = {
  // Your Next.js configuration options go here

  // Enable trailing slashes for SEO-friendly URLs
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
};
