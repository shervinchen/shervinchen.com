const { withPlaiceholder } = require('@plaiceholder/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s2.loli.net'],
  },
};

module.exports = withPlaiceholder(nextConfig);
