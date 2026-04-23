const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'next-s3-public.s3.us-west-2.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
