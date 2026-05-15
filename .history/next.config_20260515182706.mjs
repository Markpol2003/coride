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
  reactStrictMode: false,
}

export default nextConfig