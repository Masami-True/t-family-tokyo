"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const steps = [
  { numKey: "step1_num", titleKey: "step1_title", descKey: "step1_desc" },
  { numKey: "step2_num", titleKey: "step2_title", descKey: "step2_desc" },
  { numKey: "step3_num", titleKey: "step3_title", descKey: "step3_desc" },
];

const benefitKeys = [
  "benefit1",
  "benefit2",
  "benefit3",
  "benefit4",
  "benefit5",
  "benefit6",
];

export default function LiveCommerce() {
  const t = useTranslations("live");
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
      id="live-seller"
      ref={sectionRef}
      className="fade-in-section bg-dark text-offwhite py-24 px-6 relative overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/live-scene.jpg"
        alt=""
        fill
        className="object-cover opacity-10"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Big headline - prominent */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold mb-6">
            {t("label")}
          </h2>
          <p className="text-xl md:text-2xl text-offwhite/80 font-heading">
            {t("headline")}
          </p>
          <p className="text-offwhite/50 mt-4 text-sm">{t("subcopy")}</p>
        </div>

        {/* 3-step process */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {steps.map((step, i) => (
            <div
              key={step.numKey}
              className={`text-center ${
                i < steps.length - 1
                  ? "md:border-r md:border-offwhite/10"
                  : ""
              }`}
            >
              <p className="text-gold font-heading text-4xl mb-2">
                {t(step.numKey)}
              </p>
              <p className="text-sm tracking-[0.2em] font-medium mb-2">
                {t(step.titleKey)}
              </p>
              <p className="text-offwhite/60 text-sm">{t(step.descKey)}</p>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          {benefitKeys.map((key) => (
            <div key={key} className="flex items-start gap-2">
              <span className="text-gold shrink-0">✦</span>
              <p className="text-sm text-offwhite/80">{t(key)}</p>
            </div>
          ))}
        </div>

        {/* CTA - link to WhatsApp or email instead of form */}
        <div className="text-center">
          <a
            href="/liveseller/"
            className="inline-block bg-gold text-dark px-12 py-4 text-sm tracking-[0.2em] font-medium hover:bg-gold-dark transition-colors"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
