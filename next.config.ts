import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname : "cdn.discordapp.com",
        pathname: "/**",
        protocol: "https"
      },
      {
        protocol: "http",
        hostname: "10.10.2.76",
        port: "8000",
        pathname: "/**",
      },
    ]
  }
};

export default nextConfig;
