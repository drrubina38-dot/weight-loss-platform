/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TypeScript errors ko build roknay se rokay ga
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint errors ko build time par ignore karay ga
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
