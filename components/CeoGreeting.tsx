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
      className="fade-in-section overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f5f0e8 0%, #efe6d6 50%, #e8dcc8 100%)" }}
    >
      {/* Mobile layout */}
      <div className="md:hidden px-6 pt-12 pb-8">
        <h2 className="font-heading text-2xl text-text mb-6 border-l-4 border-gold pl-4">
          {t("headline")}
        </h2>

        <div className="flex gap-4 mb-6">
          <div className="shrink-0 w-24">
            <Image
              src="/images/ceo-portrait.png"
              alt={t("name")}
              width={96}
              height={128}
              className="w-24 h-auto object-contain rounded"
            />
          </div>
          <div className="text-right flex-1 flex flex-col justify-end">
            <p className="text-xs text-subtext whitespace-pre-line">{t("title")}</p>
            <p className="font-heading text-lg text-text mt-1">{t("name")}</p>
          </div>
        </div>

        <div className="text-subtext text-sm leading-[2] whitespace-pre-line">
          {t("message")}
        </div>
      </div>

      {/* Desktop layout - photo left with gradient fade, text right */}
      <div className="hidden md:flex max-w-6xl mx-auto items-stretch min-h-[500px]">
        <div className="w-[35%] relative">
          <Image
            src="/images/ceo-portrait.png"
            alt={t("name")}
            fill
            className="object-cover object-top"
          />
          <div
            className="absolute top-0 bottom-0 right-0 w-16"
            style={{ background: "linear-gradient(to right, transparent, #efe6d6)" }}
          />
        </div>

        <div className="flex-1 py-20 px-12 lg:px-16 flex flex-col justify-center">
          <h2 className="font-heading text-3xl text-text mb-8 border-l-4 border-gold pl-4">
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
      </div>
    </section>
  );
}
