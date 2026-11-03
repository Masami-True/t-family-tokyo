"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const LOCATION_ID = "34714545";
const WIDGET_UNIQ = "tvg2025";
const TA_PAGE_URL =
  "https://www.tripadvisor.jp/Attraction_Review-g1066444-d34714545-Reviews-T_Vintage-Chuo_Tokyo_Tokyo_Prefecture_Kanto.html";

// TripAdvisor owl icon (simplified)
function TaOwl() {
  return (
    <svg viewBox="0 0 60 60" className="w-8 h-8 inline-block mr-2 align-middle">
      <ellipse cx="30" cy="34" rx="22" ry="20" fill="#34E0A1" />
      <circle cx="21" cy="28" r="9" fill="white" />
      <circle cx="39" cy="28" r="9" fill="white" />
      <circle cx="21" cy="28" r="6" fill="#00AA6C" />
      <circle cx="39" cy="28" r="6" fill="#00AA6C" />
      <circle cx="21" cy="28" r="3" fill="white" />
      <circle cx="39" cy="28" r="3" fill="white" />
      <ellipse cx="30" cy="42" rx="6" ry="4" fill="#00AA6C" />
      <path d="M18 16 Q14 10 20 8 Q24 14 21 18Z" fill="#34E0A1" />
      <path d="M42 16 Q46 10 40 8 Q36 14 39 18Z" fill="#34E0A1" />
    </svg>
  );
}

export default function TripAdvisorReviews() {
  const t = useTranslations("reviews");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Remove any previous instance of the widget script
    const existingScript = document.getElementById("ta-reviews-script");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "ta-reviews-script";
    script.src = `https://www.jscache.com/wejs?wtype=selfservicereviews&uniq=${WIDGET_UNIQ}&locationId=${LOCATION_ID}&lang=ja&border=false&shadow=false&theme=light&display_version=2`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById("ta-reviews-script");
      if (s) s.remove();
    };
  }, []);

  // Fade-in on scroll
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
    <section ref={sectionRef} className="fade-in-section bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-center mb-8">
          <TaOwl />
          <span className="font-medium text-[#00AA6C]">Tripadvisor</span>
          <span className="font-heading text-text ml-2">
            {t("ta_headline_suffix")}
          </span>
        </h2>

        {/* TripAdvisor widget — auto-updates when new reviews are posted */}
        <div className="max-w-2xl mx-auto">
          <div
            id={`TA_selfservicereviews${WIDGET_UNIQ}`}
            className="TA_selfservicereviews"
          >
            <ul id={`SH_${WIDGET_UNIQ}`} className="session">
              <li id={`item_${LOCATION_ID}`}></li>
            </ul>
          </div>
        </div>

        {/* Link to all reviews */}
        <div className="text-center mt-8">
          <a
            href={TA_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#00AA6C] text-[#00AA6C] px-6 py-2.5 rounded text-sm font-medium hover:bg-[#00AA6C] hover:text-white transition-colors"
          >
            {t("ta_all_reviews")}
          </a>
        </div>
      </div>
    </section>
  );
}
