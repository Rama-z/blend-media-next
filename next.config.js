/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "cdn.eraspace.com"],
  },
};

module.exports = nextConfig;
