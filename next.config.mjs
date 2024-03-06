/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "srhralliance.or.ke",
      },
      {
        protocol: "https",
        hostname: "www.srhralliance.or.ke",
      },
    ],
  },
};

export default nextConfig;
