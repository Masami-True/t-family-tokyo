"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const cardData = [
  { icon: "✦", titleKey: "authentic_title", descKey: "authentic_desc" },
  { icon: "◈", titleKey: "curated_title", descKey: "curated_desc" },
  { icon: "◉", titleKey: "certified_title", descKey: "certified_desc" },
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
      className="fade-in-section relative py-32 px-6 overflow-hidden min-h-[600px] flex flex-col justify-center"
    >
      {/* Full background: Fuji + Sakura */}
      <Image
        src="/images/japan/fuji-sakura.jpg"
        alt="Mount Fuji with cherry blossoms"
        fill
        className="object-cover object-top"
        priority
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Headline */}
      <h2 className="relative z-10 font-heading text-4xl md:text-5xl text-center text-white mb-16">
        {t("headline")}
      </h2>

      {/* 3-column card grid - glass panels */}
      <div className="relative z-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cardData.map((card) => (
          <div
            key={card.titleKey}
            className="text-center p-8 bg-white/90 backdrop-blur-sm rounded"
          >
            <div className="text-gold text-2xl mb-4">{card.icon}</div>
            <h3 className="text-sm tracking-[0.2em] font-medium mb-3 text-text">
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
