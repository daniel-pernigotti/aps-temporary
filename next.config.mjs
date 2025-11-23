/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production'

const nextConfig = {
  output: 'export',
  // Only set basePath and assetPrefix in production (static export deploy).
  // This prevents the dev server from serving the app under a subpath and returning 404 at `/`.
  ...(isProd
    ? {
        basePath: '/aps-temporary', // The subdirectory path used for production/static export
        assetPrefix: '/aps-temporary/', // For assets like images and scripts in production
      }
    : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig
