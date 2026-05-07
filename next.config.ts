import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Aicardpark",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
