/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/E_MYPROFILE',
  assetPrefix: '/E_MYPROFILE/',
  trailingSlash: true,
  images: { unoptimized: true }
};

module.exports = nextConfig;