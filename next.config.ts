import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // 禁用构建时的类型检查
    ignoreBuildErrors: true,
  },
  eslint: {
    // 禁用构建时的 ESLint 检查
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
