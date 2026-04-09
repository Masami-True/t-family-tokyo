import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const securityHeaders = [
  // XSS Protection
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Prevent MIME type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "DENY" },
  // Referrer policy
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Permissions policy
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Strict Transport Security (HTTPS only)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://elfsightcdn.com https://*.elfsight.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.elfsight.com",
      "font-src 'self' https://fonts.gstatic.com https://*.elfsight.com",
      "img-src 'self' data: blob: https://t-secondhands.jp https://images.unsplash.com https://maps.google.com https://maps.gstatic.com https://*.googleapis.com https://*.googleusercontent.com https://*.elfsight.com",
      "frame-src 'self' https://maps.google.com https://www.google.com https://*.elfsight.com",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://*.elfsight.com https://core.service.elfsight.com",
    ].join("; "),
  },
];

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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  // Prevent source map exposure in production
  productionBrowserSourceMaps: false,
};

export default withNextIntl(nextConfig);
