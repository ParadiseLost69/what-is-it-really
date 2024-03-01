/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3t3ozftmdmh3i.cloudfront.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
