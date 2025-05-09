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
  assetPrefix: '/E_MYPROFILE/',
  trailingSlash: true,
}

module.exports = nextConfig 