import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t-secondhands.jp",
      },
      {
        protocol: "https",
        hostname: "nextstory.jp",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
