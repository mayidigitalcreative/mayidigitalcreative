/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  async redirects() {
    return [
      { source: '/pricing', destination: '/contact', permanent: true },
      { source: '/work', destination: '/contact', permanent: false },
      { source: '/work/:path*', destination: '/contact', permanent: false },
      { source: '/about/team', destination: '/about', permanent: false },
    ]
  },
}

module.exports = nextConfig
