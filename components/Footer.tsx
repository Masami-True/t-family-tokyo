"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { socialLinks, navItems } from "@/lib/social-links";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const localizedNavItems = navItems.map((item) =>
    item.href.includes("authentic-check.jp")
      ? { ...item, href: locale === "ja" ? "https://authentic-check.jp/" : "https://authentic-check.jp/en" }
      : item
  );

  return (
    <footer className="bg-dark py-8 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* SNS Icons — mobile: 5 per row (2 rows for 10 icons), desktop: single row */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mb-8 max-w-[195px] mx-auto sm:max-w-none sm:gap-x-5">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center gap-6 mb-8 flex-wrap">
          {localizedNavItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-offwhite/80 hover:text-offwhite/80 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-offwhite/80 hover:text-offwhite/80 transition-colors"
              >
                {item.label}
              </a>
            )
          )}
          <Link
            href="/company"
            className="text-sm text-offwhite/80 hover:text-offwhite/80 transition-colors"
          >
            {t("footer.company")}
          </Link>
          <Link
            href="/tokusyohou"
            className="text-sm text-offwhite/80 hover:text-offwhite/80 transition-colors"
          >
            {t("footer.tokusho")}
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-offwhite/80 hover:text-offwhite/80 transition-colors"
          >
            {t("footer.privacy")}
          </Link>

        </nav>

        {/* Copyright */}
        <p className="text-xs text-offwhite/60 mt-4">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
