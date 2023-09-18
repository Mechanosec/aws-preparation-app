/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AWS_REGION: process.env.AWS_REGION || "",
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || "",
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
