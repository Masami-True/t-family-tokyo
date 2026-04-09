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
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch min-h-[500px]">
        {/* Left: Photo with gradient fade */}
        <div className="md:w-[35%] relative min-h-[300px] md:min-h-0">
          <Image
            src="/images/ceo-portrait.png"
            alt={t("name")}
            fill
            className="object-cover object-top"
          />
          {/* Soft edge right - thin gradient only at the border */}
          <div
            className="absolute top-0 bottom-0 right-0 w-16 hidden md:block"
            style={{
              background: "linear-gradient(to right, transparent, #efe6d6)",
            }}
          />
        </div>

        {/* Right: Text content */}
        <div className="flex-1 py-12 md:py-20 px-6 md:px-12 lg:px-16 flex flex-col justify-center">
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
      </div>
    </section>
  );
}
