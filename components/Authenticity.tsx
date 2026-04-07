"use client";

import { useEffect, useRef } from "react";
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
      <h2 className="font-heading text-3xl md:text-4xl text-center text-text mb-16">
        {t("headline")}
      </h2>

      {/* 3 pillars */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {/* Entrupy */}
        <div className="bg-offwhite p-8 text-center rounded">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-gold text-3xl">
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
        <div className="bg-offwhite p-8 text-center rounded">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-gold text-3xl">
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
        <div className="bg-offwhite p-8 text-center rounded">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-gold text-3xl">
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

      {/* Certificate info */}
      <div className="max-w-3xl mx-auto bg-offwhite p-8 md:p-12 rounded">
        <div className="text-center">
          <h3 className="font-heading text-xl mb-3">{t("cert_title")}</h3>
          <p className="text-subtext text-sm leading-relaxed mb-4">
            {t("cert_desc")}
          </p>
          <div className="flex items-center justify-center gap-2 text-gold">
            <span className="text-lg">✓</span>
            <span className="text-sm font-medium tracking-wider">
              {t("cert_badge")}
            </span>
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
