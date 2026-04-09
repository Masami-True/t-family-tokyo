"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { useTranslations } from "next-intl";

export default function GoogleReviews() {
  const t = useTranslations("reviews");
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
      <div className="max-w-5xl mx-auto">
        {/* Elfsight Google Reviews Widget */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />
        <div
          className="elfsight-app-3740619c-f4fa-4380-861d-a953d8f0438c"
          data-elfsight-app-lazy
        />

        {/* Review request */}
        <div className="mt-8 text-center">
          <p className="text-sm text-subtext">
            {t("review_request")}
          </p>
        </div>
      </div>
    </section>
  );
}
