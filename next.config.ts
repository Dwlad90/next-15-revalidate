import type { NextConfig } from "next";

const isProd = false;

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      // Enable logging of fetch urls and cache state
      // https://github.com/vercel/next.js/pull/55111
      fullUrl: true,
    },
  },
};

export default nextConfig;
