"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Authenticity() {
  const t = useTranslations("authenticity");
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

  return (
    <section
      id="authenticity"
      ref={sectionRef}
      className="fade-in-section bg-cream py-24 px-6"
    >
      <p className="text-xs tracking-[0.2em] text-gold text-center mb-4">
        {t("label")}
      </p>
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-center text-text mb-6">
        <span className="block sm:inline">{t("headline_line1")}</span>
        <span className="block sm:inline">{t("headline_line2")}</span>
      </h2>

      {/* Introduction text */}
      <p className="text-sm text-subtext leading-relaxed text-left max-w-2xl mx-auto mb-16">
        {t("intro")}
      </p>

      {/* 3 pillars */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {/* Entrupy */}
        <div className="bg-offwhite p-8 text-left rounded">
          <div className="w-12 h-12 mb-4 flex items-center justify-center text-gold text-2xl">
            ◉
          </div>
          <h3 className="text-sm tracking-[0.15em] font-medium mb-3">
            {t("entrupy_title")}
          </h3>
          <p className="text-subtext text-sm leading-relaxed">
            {t("entrupy_desc")}
          </p>
        </div>

        {/* Guarantee */}
        <div className="bg-offwhite p-8 text-left rounded">
          <div className="w-12 h-12 mb-4 flex items-center justify-center text-gold text-2xl">
            ✦
          </div>
          <h3 className="text-sm tracking-[0.15em] font-medium mb-3">
            {t("guarantee_title")}
          </h3>
          <p className="text-subtext text-sm leading-relaxed">
            {t("guarantee_desc")}
          </p>
        </div>

        {/* Expert Staff */}
        <div className="bg-offwhite p-8 text-left rounded">
          <div className="w-12 h-12 mb-4 flex items-center justify-center text-gold text-2xl">
            ◈
          </div>
          <h3 className="text-sm tracking-[0.15em] font-medium mb-3">
            {t("expert_title")}
          </h3>
          <p className="text-subtext text-sm leading-relaxed">
            {t("expert_desc")}
          </p>
        </div>
      </div>

      {/* Additional trust points */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        <div className="bg-offwhite p-8 text-left rounded">
          <div className="w-12 h-12 mb-4 flex items-center justify-center text-gold text-2xl">
            🏬
          </div>
          <h3 className="text-sm tracking-[0.15em] font-medium mb-3">
            {t("store_title")}
          </h3>
          <p className="text-subtext text-sm leading-relaxed">
            {t("store_desc")}
          </p>
        </div>
        <div className="bg-offwhite p-8 text-left rounded">
          <div className="w-12 h-12 mb-4 flex items-center justify-center text-gold text-2xl">
            🌐
          </div>
          <h3 className="text-sm tracking-[0.15em] font-medium mb-3">
            {t("online_title")}
          </h3>
          <p className="text-subtext text-sm leading-relaxed">
            {t("online_desc")}
          </p>
        </div>
        <div className="bg-offwhite p-8 text-left rounded">
          <div className="w-12 h-12 mb-4 flex items-center justify-center text-gold text-2xl">
            ✧
          </div>
          <h3 className="text-sm tracking-[0.15em] font-medium mb-3">
            {t("transparent_title")}
          </h3>
          <p className="text-subtext text-sm leading-relaxed">
            {t("transparent_desc")}
          </p>
        </div>
      </div>

      {/* Certificate info - prominent */}
      <div className="max-w-4xl mx-auto bg-offwhite p-10 md:p-16 rounded border border-gold/20">
        <h3 className="font-heading text-2xl md:text-3xl text-center mb-8 text-text">
          {t("cert_title")}
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0">
            <Image
              src="/images/entrupy.png"
              alt="Entrupy Certificate"
              width={320}
              height={320}
              className="w-64 md:w-80 h-auto object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-subtext text-base leading-relaxed mb-6">
              {t("cert_desc")}
            </p>
            <div className="inline-flex items-center gap-3 bg-gold/10 px-6 py-3 rounded">
              <span className="text-gold text-xl">✓</span>
              <span className="text-gold font-medium tracking-wider">
                {t("cert_badge")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* License info */}
      <div className="max-w-3xl mx-auto mt-8 text-center">
        <p className="text-xs text-subtext tracking-wider">
          {t("license")}
        </p>
      </div>
    </section>
  );
}
