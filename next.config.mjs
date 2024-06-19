/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "www.slashfilm.com", "i.imgflip.com"],
  },
};

export default nextConfig;
