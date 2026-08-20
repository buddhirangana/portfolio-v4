import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  turbopack: {
    root: __dirname,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'next/dist/build/polyfills/polyfill-module': path.resolve(__dirname, 'src/lib/empty-polyfill.js'),
        'next/dist/build/polyfills/object-assign': path.resolve(__dirname, 'src/lib/empty-polyfill.js'),
      };
    }
    return config;
  },
};

export default nextConfig;
