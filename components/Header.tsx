"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  en: "EN",
  ja: "JA",
  zh: "\u4E2D\u6587",
  ko: "\uD55C\uAD6D\uC5B4",
  es: "ES",
  fr: "FR",
};

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Shop", href: "https://t-secondhands.jp/", external: true },
  { label: "Live", href: "/#live-seller" },
  { label: "Store", href: "/#store" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const switchLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[rgba(250,250,248,0.95)] backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="T-Family"
            width={120}
            height={36}
            style={{ height: "36px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[13px] uppercase tracking-[0.08em] text-text transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-[13px] uppercase tracking-[0.08em] text-text transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop Locale Switcher */}
        <div className="hidden items-center gap-1 text-[13px] md:flex">
          {routing.locales.map((loc, i) => (
            <span key={loc} className="flex items-center">
              {i > 0 && <span className="mx-1 text-border">|</span>}
              <button
                onClick={() => switchLocale(loc)}
                className={`transition-colors hover:text-gold ${
                  locale === loc ? "font-semibold text-gold" : "text-subtext"
                }`}
              >
                {localeLabels[loc]}
              </button>
            </span>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative z-60 flex flex-col gap-[5px] md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 bg-text transition-transform duration-300 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-text transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-text transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 z-50 bg-offwhite transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="font-body text-lg uppercase tracking-[0.08em] text-text transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-lg uppercase tracking-[0.08em] text-text transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            )
          )}

          {/* Mobile Locale Switcher */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
            {routing.locales.map((loc, i) => (
              <span key={loc} className="flex items-center">
                {i > 0 && <span className="mx-1 text-border">|</span>}
                <button
                  onClick={() => switchLocale(loc)}
                  className={`transition-colors hover:text-gold ${
                    locale === loc ? "font-semibold text-gold" : "text-subtext"
                  }`}
                >
                  {localeLabels[loc]}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
