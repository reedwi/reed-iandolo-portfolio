/** @type {import('next').NextConfig} */
nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.notion.so",
            },
        ],
    },
  }

module.exports = nextConfig
