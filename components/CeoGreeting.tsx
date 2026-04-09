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
      className="fade-in-section bg-gradient-to-br from-[#f0f0f0] to-[#e8e8e8] py-0 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Left: Text content */}
        <div className="flex-1 py-16 md:py-24 px-6 md:px-12 lg:px-16">
          <h2 className="font-heading text-2xl md:text-3xl text-text mb-8 border-l-4 border-gold pl-4">
            {t("headline")}
          </h2>

          <p className="text-subtext text-sm leading-[2] whitespace-pre-line mb-8">
            {t("message")}
          </p>

          <div className="text-right">
            <p className="text-sm text-subtext whitespace-pre-line">{t("title")}</p>
            <p className="font-heading text-xl text-text mt-1">{t("name")}</p>
          </div>
        </div>

        {/* Right: CEO Photo - large, natural crop */}
        <div className="md:w-[40%] relative min-h-[300px] md:min-h-0">
          <Image
            src="/images/ceo-portrait.jpg"
            alt={t("name")}
            fill
            className="object-cover object-top"
          />
          {/* Subtle gradient overlay from left for text blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f0f0f0] via-transparent to-transparent w-1/4 hidden md:block" />
        </div>
      </div>
    </section>
  );
}
