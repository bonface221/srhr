/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
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
      {
        protocol: "https",
        hostname: "cms.srhralliance.or.ke",
      },
    ],
  },
};

export default nextConfig;
