/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/macobate/gestion",
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
