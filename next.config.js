/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'abrosh.pk',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig