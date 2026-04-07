"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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

  const companyInfo = [
    { label: "info_company", value: "T-Family株式会社" },
    { label: "info_ceo", value: "富永 朝樹" },
    { label: "info_established", value: "2020.11.27" },
    { label: "info_capital", value: "3,000万円" },
    { label: "info_employees", value: "8名" },
    { label: "info_license", value: "第301132115776号" },
  ];

  return (
    <section
      id="b2b"
      ref={sectionRef}
      className="fade-in-section bg-dark py-24 px-6"
    >
      {/* Partnership header */}
      <p className="text-xs tracking-[0.2em] text-gold text-center mb-4">
        {t("label")}
      </p>
      <h2 className="font-heading text-3xl md:text-4xl text-center text-offwhite mb-6">
        {t("headline")}
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

      {/* Brands */}
      <div className="max-w-4xl mx-auto mb-20">
        <h3 className="text-xs tracking-[0.2em] text-gold text-center mb-6">
          {t("brands_label")}
        </h3>
        <p className="text-center text-offwhite/40 text-sm tracking-[0.1em]">
          CHANEL / HERMÈS / LOUIS VUITTON / GUCCI / PRADA / FENDI / DIOR / YSL / GOYARD / BURBERRY / BVLGARI / CÉLINE / BALENCIAGA
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mb-24">
        <a
          href="https://t-family.tokyo/buyer01/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-[0.2em] hover:bg-gold hover:text-dark transition-all"
        >
          {t("cta")}
        </a>
      </div>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-offwhite/10 mb-20" />

      {/* Company info - elegant minimal style */}
      <div className="max-w-2xl mx-auto">
        <h3 className="font-heading text-2xl text-center text-offwhite mb-2">
          {t("company_title")}
        </h3>
        <div className="w-12 h-[1px] bg-gold mx-auto mb-12" />

        <div className="flex justify-center mb-10">
          <Image
            src="/images/logo.png"
            alt="T-Family"
            width={120}
            height={60}
            className="h-14 w-auto object-contain"
          />
        </div>

        <div className="space-y-0">
          {companyInfo.map((item) => (
            <div
              key={item.label}
              className="flex border-b border-offwhite/5 py-4"
            >
              <span className="text-offwhite/35 text-xs tracking-[0.15em] w-36 shrink-0 pt-0.5">
                {t(item.label)}
              </span>
              <span className="text-offwhite/80 text-sm">
                {item.value}
              </span>
            </div>
          ))}
          {/* Address row */}
          <div className="flex border-b border-offwhite/5 py-4">
            <span className="text-offwhite/35 text-xs tracking-[0.15em] w-36 shrink-0 pt-0.5">
              {t("info_address")}
            </span>
            <span className="text-offwhite/80 text-sm whitespace-pre-line">
              {t("info_address_value")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
