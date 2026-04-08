"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export default function B2BSection() {
  const t = useTranslations("b2b");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("is-visible");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const features = [
    { key: "feature1", icon: "✦" },
    { key: "feature2", icon: "◈" },
    { key: "feature3", icon: "◉" },
    { key: "feature4", icon: "✧" },
  ];

  return (
    <section
      id="b2b"
      ref={sectionRef}
      className="fade-in-section bg-dark py-24 px-6"
    >
      {/* Header - label is the main heading now */}
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-center text-gold mb-6">
        {t("label")}
      </h2>
      <p className="text-center text-offwhite/50 text-sm max-w-2xl mx-auto mb-16">
        {t("subcopy")}
      </p>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        {features.map((f) => (
          <div
            key={f.key}
            className="border border-offwhite/10 p-8 rounded"
          >
            <span className="text-gold text-xl mb-3 block">{f.icon}</span>
            <h3 className="text-sm tracking-[0.15em] text-offwhite font-medium mb-2">
              {t(`${f.key}_title`)}
            </h3>
            <p className="text-offwhite/50 text-sm leading-relaxed">
              {t(`${f.key}_desc`)}
            </p>
          </div>
        ))}
      </div>

      {/* Target customers */}
      <div className="max-w-3xl mx-auto mb-16 border border-offwhite/10 p-8 rounded">
        <h3 className="text-sm tracking-[0.15em] text-gold font-medium mb-6 text-center">
          {t("target_title")}
        </h3>
        <div className="space-y-3">
          {(["target1", "target2", "target3", "target4"] as const).map((key) => (
            <p key={key} className="text-sm text-offwhite/70 flex items-start gap-2">
              <span className="text-gold shrink-0">✦</span>{t(key)}
            </p>
          ))}
        </div>
        <p className="text-xs text-offwhite/40 mt-6 text-center">
          {t("deal_info")}
        </p>
      </div>

      {/* Brands */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-xs tracking-[0.2em] text-gold text-center mb-6">
          {t("brands_label")}
        </h3>
        <p className="text-center text-offwhite/40 text-sm tracking-[0.1em]">
          CHANEL / HERMÈS / LOUIS VUITTON / GUCCI / PRADA / FENDI / DIOR / YSL / GOYARD / BURBERRY / BVLGARI / CÉLINE / BALENCIAGA
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="https://t-family.tokyo/buyer01/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-[0.2em] hover:bg-gold hover:text-dark transition-all"
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
