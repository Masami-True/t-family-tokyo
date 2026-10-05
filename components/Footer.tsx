"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { socialLinks, navItems } from "@/lib/social-links";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-dark py-8 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* SNS Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-offwhite/80 hover:text-gold transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center gap-6 mb-8 flex-wrap">
          {navItems.map((item) =>
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
