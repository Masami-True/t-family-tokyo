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
      <p className="text-xs tracking-[0.2em] text-gold text-center mb-4">
        {t("label")}
      </p>
      <h2 className="font-heading text-3xl md:text-4xl text-center text-offwhite mb-6">
        {t("headline")}
      </h2>
      <p className="text-center text-offwhite/50 text-sm max-w-2xl mx-auto mb-16">
        {t("subcopy")}
      </p>

      {/* Features grid */}
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

      {/* Brands handled */}
      <div className="max-w-4xl mx-auto mb-12">
        <h3 className="text-xs tracking-[0.2em] text-gold text-center mb-6">
          {t("brands_label")}
        </h3>
        <p className="text-center text-offwhite/40 text-sm tracking-[0.1em]">
          CHANEL / HERMÈS / LOUIS VUITTON / GUCCI / PRADA / FENDI / DIOR / YSL / GOYARD / BURBERRY / BVLGARI / CÉLINE / BALENCIAGA
        </p>
      </div>

      {/* Company info */}
      <div className="max-w-3xl mx-auto border border-offwhite/10 p-8 md:p-12 rounded">
        <h3 className="font-heading text-xl text-offwhite mb-6 text-center">
          {t("company_title")}
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-offwhite/40 mb-1">{t("info_company")}</p>
            <p className="text-offwhite">T-Family株式会社</p>
          </div>
          <div>
            <p className="text-offwhite/40 mb-1">{t("info_ceo")}</p>
            <p className="text-offwhite">富永 朝樹</p>
          </div>
          <div>
            <p className="text-offwhite/40 mb-1">{t("info_established")}</p>
            <p className="text-offwhite">2020.11.27</p>
          </div>
          <div>
            <p className="text-offwhite/40 mb-1">{t("info_capital")}</p>
            <p className="text-offwhite">3,000万円</p>
          </div>
          <div>
            <p className="text-offwhite/40 mb-1">{t("info_employees")}</p>
            <p className="text-offwhite">8名</p>
          </div>
          <div>
            <p className="text-offwhite/40 mb-1">{t("info_license")}</p>
            <p className="text-offwhite text-xs">第301132115776号</p>
          </div>
          <div className="col-span-2">
            <p className="text-offwhite/40 mb-1">{t("info_address")}</p>
            <p className="text-offwhite text-sm whitespace-pre-line">{t("info_address_value")}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="mailto:info@t-family.tokyo"
          className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-[0.2em] hover:bg-gold hover:text-dark transition-all"
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
