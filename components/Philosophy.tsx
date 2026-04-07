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
            <div className="text-gold text-2xl mb-4">{card.icon}</div>
            <h3 className="text-sm tracking-[0.2em] font-medium mb-3">
              {t(card.titleKey)}
            </h3>
            <p className="text-subtext text-sm leading-relaxed">
              {t(card.descKey)}
            </p>
          </div>
        ))}
      </div>

      {/* CEO Message */}
      <div className="mt-20 flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
        {/* CEO Image */}
        <div className="shrink-0">
          <Image
            src="/images/ceo.jpg"
            alt={t("ceo_name")}
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded-full"
          />
        </div>

        {/* CEO Quote */}
        <div>
          <p className="text-subtext italic text-lg leading-relaxed mb-6">
            &ldquo;{t("ceo_message")}&rdquo;
          </p>
          <p className="font-heading text-lg text-text">{t("ceo_name")}</p>
          <p className="text-sm text-subtext">{t("ceo_title")}</p>
        </div>
      </div>
    </section>
  );
}
