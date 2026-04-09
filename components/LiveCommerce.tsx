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
  "benefit1", "benefit2", "benefit3",
  "benefit4", "benefit5", "benefit6",
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
      <Image
        src="/images/live-scene.jpg"
        alt=""
        fill
        className="object-cover opacity-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold mb-6">
            {t("label")}
          </h2>
          <p className="text-xl md:text-2xl text-offwhite/80 font-heading">
            {t("headline")}
          </p>
          <p className="text-offwhite/50 mt-4 text-sm max-w-xl mx-auto">
            <span className="block sm:inline">{t("subcopy_line1")}</span>
            <span className="block sm:inline">{t("subcopy_line2")}</span>
          </p>
        </div>

        {/* Worry section */}
        <div className="mb-20 border border-offwhite/10 rounded p-8 md:p-10">
          <h3 className="text-xl font-heading text-offwhite text-center mb-8">
            {t("worry_title")}
          </h3>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {(["worry1", "worry2", "worry3", "worry4"] as const).map((key) => (
              <p key={key} className="text-sm text-offwhite/60 flex items-center gap-3 bg-offwhite/5 px-5 py-3 rounded">
                <span className="text-offwhite/30">●</span>{t(key)}
              </p>
            ))}
          </div>
          <p className="text-gold text-center font-heading text-lg">
            <span className="block sm:inline">{t("worry_answer_line1")}</span>
            <span className="block sm:inline">{t("worry_answer_line2")}</span>
          </p>
        </div>

        {/* 3-step process */}
        <div className="grid md:grid-cols-3 gap-0 mb-20">
          {steps.map((step, i) => (
            <div
              key={step.numKey}
              className={`text-center py-8 px-6 ${
                i < steps.length - 1 ? "md:border-r md:border-offwhite/10" : ""
              }`}
            >
              <p className="text-gold font-heading text-5xl mb-3">
                {t(step.numKey)}
              </p>
              <p className="text-sm tracking-[0.2em] font-medium mb-3 text-offwhite">
                {t(step.titleKey)}
              </p>
              <p className="text-offwhite/50 text-sm leading-relaxed">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefitKeys.map((key) => (
              <div key={key} className="flex items-start gap-3 bg-offwhite/5 p-5 rounded">
                <span className="text-gold shrink-0 mt-0.5">✦</span>
                <p className="text-sm text-offwhite/80 leading-relaxed">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Official program */}
        <div className="mb-20 border-t border-b border-offwhite/10 py-12">
          <h3 className="text-xl font-heading text-gold mb-6 text-center sm:text-left">
            {t("official_title")}
          </h3>
          <p className="text-sm text-offwhite/60 leading-relaxed max-w-2xl text-left">
            {t("official_desc")}
          </p>
        </div>

        {/* Closing */}
        <div className="mb-12 text-center">
          <p className="text-offwhite/80 font-heading text-xl md:text-2xl italic leading-relaxed whitespace-pre-line">
            &ldquo;{t("closing")}&rdquo;
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/liveseller/"
            className="inline-block bg-gold text-dark px-14 py-5 text-sm tracking-[0.2em] font-medium hover:bg-gold-dark transition-colors"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
