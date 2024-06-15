/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remote: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      }
    ]
  }
};

export default nextConfig;
