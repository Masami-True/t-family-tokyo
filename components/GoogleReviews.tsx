"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const reviews = [
  { name: "M. Chen", rating: 5, text_key: "review1", country: "🇨🇳" },
  { name: "Sarah K.", rating: 5, text_key: "review2", country: "🇺🇸" },
  { name: "田中 様", rating: 5, text_key: "review3", country: "🇯🇵" },
  { name: "Kim J.", rating: 5, text_key: "review4", country: "🇰🇷" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-gold text-sm mb-2">
      {[...Array(count)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  t,
}: {
  review: (typeof reviews)[number];
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className="bg-white p-6 rounded border border-border min-w-[280px] md:min-w-[320px] shrink-0">
      <Stars count={review.rating} />
      <p className="text-sm text-subtext leading-relaxed mb-4 italic">
        &ldquo;{t(review.text_key)}&rdquo;
      </p>
      <div className="flex items-center gap-2">
        <span className="text-lg">{review.country}</span>
        <span className="text-xs font-medium text-text">{review.name}</span>
      </div>
    </div>
  );
}

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
      <p className="text-xs tracking-[0.2em] text-gold text-center mb-4">
        {t("label")}
      </p>
      <h2 className="font-heading text-3xl md:text-4xl text-center text-text mb-4">
        {t("headline")}
      </h2>

      {/* Rating summary */}
      <div className="flex items-center justify-center gap-2 mb-12">
        <div className="flex gap-0.5 text-gold text-lg">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <span className="text-sm text-subtext">{t("rating_text")}</span>
      </div>

      {/* Auto-scrolling review carousel */}
      <div className="overflow-hidden mb-12">
        <div className="flex gap-6 animate-scroll-brands" style={{ animationDuration: "30s" }}>
          {/* Double the reviews for seamless loop */}
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={`${review.text_key}-${i}`} review={review} t={t} />
          ))}
        </div>
      </div>

      {/* Google review request + link */}
      <div className="text-center space-y-4">
        <p className="text-sm text-subtext">
          {t("review_request")}
        </p>
        <a
          href="https://share.google/eJlVMlu8ie6p8b51v"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-dark transition-colors border border-gold/30 px-6 py-2.5 rounded"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
