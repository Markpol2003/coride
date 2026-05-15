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
  // Fix for multiple lockfiles warning
  turbopack: {
    root: '.',
  },
  output: {
    fileTracingRoot: '.',
  },
}

export default nextConfig