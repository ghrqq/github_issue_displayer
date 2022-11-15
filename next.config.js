/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
    // domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
