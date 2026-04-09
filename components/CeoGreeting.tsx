"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CeoGreeting() {
  const t = useTranslations("greeting");
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
      ref={sectionRef}
      className="fade-in-section py-24 px-6"
      style={{ background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 50%, #d8d8d8 100%)" }}
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Text area */}
        <div className="md:pr-[280px]">
          <h2 className="font-heading text-2xl md:text-3xl text-text mb-8 border-l-4 border-gold pl-4">
            {t("headline")}
          </h2>

          <div className="text-subtext text-sm leading-[2] whitespace-pre-line mb-8">
            {t("message")}
          </div>

          <div className="text-right">
            <p className="text-sm text-subtext whitespace-pre-line">{t("title")}</p>
            <p className="font-heading text-xl text-text mt-1">{t("name")}</p>
          </div>
        </div>

        {/* CEO Photo - positioned right, overlapping */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
          <Image
            src="/images/ceo-portrait.png"
            alt={t("name")}
            width={240}
            height={320}
            className="w-[240px] h-auto object-contain"
          />
        </div>

        {/* Mobile: photo centered below text */}
        <div className="md:hidden mt-8 flex justify-center">
          <Image
            src="/images/ceo-portrait.png"
            alt={t("name")}
            width={180}
            height={240}
            className="w-[180px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
