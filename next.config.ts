import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname : "cdn.discordapp.com",
        pathname: "/**",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
