/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/buy-and-sell",
        destination: "https://colivingcait.com/buy-and-sell",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "househackingatl.com" }],
        destination: "https://www.househackingatl.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
