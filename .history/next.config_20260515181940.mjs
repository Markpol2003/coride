/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Vercel deployment optimizations
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
  reactStrictMode: false,
}

export default nextConfig