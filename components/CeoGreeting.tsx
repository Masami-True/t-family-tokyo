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
      className="fade-in-section bg-offwhite py-24 px-6"
    >
      <p className="text-xs tracking-[0.2em] text-gold text-center mb-4">
        {t("label")}
      </p>
      <h2 className="font-heading text-3xl md:text-4xl text-center text-text mb-16">
        {t("headline")}
      </h2>

      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Logo */}
        <div className="shrink-0 flex items-center justify-center w-40 h-40">
          <Image
            src="/images/logo.png"
            alt="T-Family"
            width={140}
            height={140}
            className="w-36 h-auto object-contain"
          />
        </div>

        {/* Message */}
        <div>
          <p className="text-subtext text-sm leading-[2] whitespace-pre-line mb-6">
            {t("message")}
          </p>
          <p className="text-sm text-subtext whitespace-pre-line">{t("title")}</p>
          <p className="font-heading text-lg text-text mt-1">{t("name")}</p>
        </div>
      </div>
    </section>
  );
}
