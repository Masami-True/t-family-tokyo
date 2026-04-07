"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/tfamily.inc/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100085889922900",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/message/YLKX2G23XTTKM1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.14l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@T-Family-727",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/NextStory7",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Shop", href: "https://t-secondhands.jp/", external: true },
  { label: "Live Commerce", href: "/#live-seller" },
  { label: "Store", href: "/#store" },
];

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-dark py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-block mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="T-Family"
            width={200}
            height={80}
            className="h-20 w-auto mx-auto"
          />
        </a>

        {/* SNS Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-offwhite/50 hover:text-gold transition-colors"
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
                className="text-sm text-offwhite/50 hover:text-offwhite/80 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-offwhite/50 hover:text-offwhite/80 transition-colors"
              >
                {item.label}
              </a>
            )
          )}
          <Link
            href="/tokusyohou"
            className="text-sm text-offwhite/50 hover:text-offwhite/80 transition-colors"
          >
            特定商取引法に基づく表記
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-offwhite/30 mt-4">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
