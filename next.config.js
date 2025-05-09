/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/E_MYPROFILE',
}

module.exports = nextConfig 