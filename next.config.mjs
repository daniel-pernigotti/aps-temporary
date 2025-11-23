/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aps-temporary', // The subdirectory path
  assetPrefix: '/aps-temporary/', // For assets like images and scripts
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig
