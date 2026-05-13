/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 80],
  },
  allowedDevOrigins: ["192.168.1.120"],
};
module.exports = nextConfig;
