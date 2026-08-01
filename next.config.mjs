/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TypeScript errors ko build time par ignore karega
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
