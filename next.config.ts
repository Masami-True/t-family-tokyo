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
      "default-src 'self' https://*.elfsight.com https://elfsightcdn.com https://*.elfsightcdn.com",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://elfsightcdn.com https://*.elfsight.com https://*.elfsightcdn.com https://static.elfsight.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.elfsight.com https://*.elfsightcdn.com",
      "font-src 'self' https://fonts.gstatic.com https://*.elfsight.com https://*.elfsightcdn.com",
      "img-src 'self' data: blob: https: http:",
      "frame-src 'self' https://maps.google.com https://www.google.com https://*.elfsight.com https://*.elfsightcdn.com",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://*.elfsight.com https://*.elfsightcdn.com https://core.service.elfsight.com https://lh3.googleusercontent.com",
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
        // Apply strict security headers to everything EXCEPT /buyer01 (which proxies external content)
        source: "/((?!buyer01).*)",
        headers: securityHeaders,
      },
      {
        // Looser CSP for /buyer01/* to allow cdnjs, web3forms, Google Apps Script
        source: "/buyer01/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  // Rewrite /buyer01 to Netlify-hosted page WITHOUT changing the browser URL
  // (unlike redirect, rewrite proxies content so the URL stays https://t-family.tokyo/buyer01/)
  async rewrites() {
    return [
      {
        source: "/buyer01",
        destination: "https://t-family-buyer.netlify.app/buyer01/",
      },
      {
        source: "/buyer01/",
        destination: "https://t-family-buyer.netlify.app/buyer01/",
      },
      {
        source: "/buyer01/:path*",
        destination: "https://t-family-buyer.netlify.app/buyer01/:path*",
      },
    ];
  },
  // Prevent source map exposure in production
  productionBrowserSourceMaps: false,
};

export default withNextIntl(nextConfig);
