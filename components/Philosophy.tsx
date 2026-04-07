"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

// Sakura icon (cherry blossom) for Authentic
function SakuraIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto">
      <path d="M16 2C16 2 18 8 18 12C18 14 17 16 16 16C15 16 14 14 14 12C14 8 16 2 16 2Z" fill="#B8972A" opacity="0.8" />
      <path d="M16 2C16 2 18 8 18 12C18 14 17 16 16 16C15 16 14 14 14 12C14 8 16 2 16 2Z" fill="#B8972A" opacity="0.8" transform="rotate(72 16 16)" />
      <path d="M16 2C16 2 18 8 18 12C18 14 17 16 16 16C15 16 14 14 14 12C14 8 16 2 16 2Z" fill="#B8972A" opacity="0.8" transform="rotate(144 16 16)" />
      <path d="M16 2C16 2 18 8 18 12C18 14 17 16 16 16C15 16 14 14 14 12C14 8 16 2 16 2Z" fill="#B8972A" opacity="0.8" transform="rotate(216 16 16)" />
      <path d="M16 2C16 2 18 8 18 12C18 14 17 16 16 16C15 16 14 14 14 12C14 8 16 2 16 2Z" fill="#B8972A" opacity="0.8" transform="rotate(288 16 16)" />
      <circle cx="16" cy="16" r="3" fill="#F4B4C6" opacity="0.6" />
    </svg>
  );
}

// Torii gate icon for Curated
function ToriiIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto">
      <rect x="6" y="8" width="20" height="2.5" rx="1" fill="#B8972A" opacity="0.8" />
      <rect x="4" y="5" width="24" height="2" rx="1" fill="#B8972A" opacity="0.9" />
      <rect x="8" y="10" width="2" height="18" fill="#B8972A" opacity="0.7" />
      <rect x="22" y="10" width="2" height="18" fill="#B8972A" opacity="0.7" />
    </svg>
  );
}

// Fuji icon for Certified
function FujiIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto">
      <path d="M16 4L28 28H4L16 4Z" fill="#B8972A" opacity="0.7" />
      <path d="M13 10L16 4L19 10L17.5 11L16 8L14.5 11Z" fill="white" opacity="0.5" />
      <path d="M8 22C10 20 12 21 14 19C16 21 18 20 20 22" stroke="#F4B4C6" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}

const cardData = [
  { icon: <SakuraIcon />, titleKey: "authentic_title", descKey: "authentic_desc" },
  { icon: <ToriiIcon />, titleKey: "curated_title", descKey: "curated_desc" },
  { icon: <FujiIcon />, titleKey: "certified_title", descKey: "certified_desc" },
];

export default function Philosophy() {
  const t = useTranslations("philosophy");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="fade-in-section bg-offwhite py-24 px-6"
    >
      {/* Headline */}
      <h2 className="font-heading text-4xl md:text-5xl text-center text-text mb-16">
        {t("headline")}
      </h2>

      {/* 3-column card grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cardData.map((card) => (
          <div key={card.titleKey} className="text-center p-8">
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-sm tracking-[0.2em] font-medium mb-3">
              {t(card.titleKey)}
            </h3>
            <p className="text-subtext text-sm leading-relaxed">
              {t(card.descKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
