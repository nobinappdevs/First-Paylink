/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: ["qrcode.tec-it.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sakib.appdevs.team",
        pathname: "/**", // সব path allow
      },
      {
        protocol: "https",
        hostname: "api.qrserver.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
