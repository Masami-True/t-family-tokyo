"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  en: "EN",
  ja: "JA",
  zh: "中文",
  ko: "한국어",
  es: "ES",
  fr: "FR",
};

const navItems = [
  { key: "about", href: "/#about" },
  { key: "shop", href: "https://t-secondhands.jp/", external: true },
  { key: "live", href: "/#live-seller" },
  { key: "store", href: "/#store" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(20,20,20,0.95)] backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="shrink-0"
        >
          <Image
            src="/images/logo.png"
            alt="T-Family"
            width={240}
            height={90}
            style={{ height: "90px", width: "auto" }}
            className="max-h-[40px] md:max-h-[90px] w-auto"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-[15px] uppercase tracking-[0.15em] text-white/90 transition-colors hover:text-gold"
              >
                {t(item.key)}
              </a>
            ) : (
              <a
                key={item.key}
                href={item.href}
                className="font-heading text-[15px] uppercase tracking-[0.15em] text-white/90 transition-colors hover:text-gold"
              >
                {t(item.key)}
              </a>
            )
          )}
        </nav>

        {/* Desktop Locale Switcher */}
        <div className="hidden items-center gap-1 text-[12px] md:flex">
          {routing.locales.map((loc, i) => (
            <span key={loc} className="flex items-center">
              {i > 0 && <span className="mx-1 text-white/20">|</span>}
              <button
                onClick={() => switchLocale(loc)}
                className={`transition-colors hover:text-gold ${
                  locale === loc ? "font-semibold text-gold" : "text-white/60"
                }`}
              >
                {localeLabels[loc]}
              </button>
            </span>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative z-[60] flex flex-col gap-[5px] md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 transition-all duration-300 ${
              mobileOpen ? "translate-y-[7px] rotate-45 bg-text" : "bg-white"
            }`}
          />
          <span
            className={`block h-[2px] w-6 transition-opacity duration-300 ${
              mobileOpen ? "opacity-0 bg-text" : "bg-white"
            }`}
          />
          <span
            className={`block h-[2px] w-6 transition-all duration-300 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45 bg-text" : "bg-white"
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
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium uppercase tracking-[0.1em] text-text transition-colors hover:text-gold"
              >
                {t(item.key)}
              </a>
            ) : (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium uppercase tracking-[0.1em] text-text transition-colors hover:text-gold"
              >
                {t(item.key)}
              </a>
            )
          )}

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
