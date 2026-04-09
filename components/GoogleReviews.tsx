"use client";

import { useEffect, useRef } from "react";
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
      {/* Google Reviews embed widget */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h2 className="text-xl font-medium mb-1">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
                <span className="text-text ml-2">{t("label")}</span>
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-medium text-text">4.7</span>
                <div className="flex gap-0.5 text-[#FBBC05] text-lg">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="text-sm text-subtext">(21)</span>
              </div>
            </div>
            <a
              href="https://g.page/r/CT5WXUVxa3XmEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 inline-block bg-[#4285F4] text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-[#3367D6] transition-colors"
            >
              {t("write_review")}
            </a>
          </div>

          {/* Google Maps Place embed - shows actual reviews */}
          <div className="w-full rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5!2d139.7515!3d35.668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5e4a3ed1f7%3A0xe675716b455d5e3e!2sT-Family%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE!5e0!3m2!1sja!2sjp!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            />
          </div>

          {/* Review request */}
          <div className="mt-6 text-center">
            <p className="text-sm text-subtext">
              {t("review_request")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
