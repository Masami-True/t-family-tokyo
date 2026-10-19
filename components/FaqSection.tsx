"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

type FaqItem = { q: string; a: string };

function FaqItem({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gold/20">
      <button
        className="w-full text-left py-5 flex justify-between items-start gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-text leading-relaxed">{q}</span>
        <span className="shrink-0 text-gold text-lg mt-0.5">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="text-sm text-subtext leading-relaxed pb-5" data-speakable>
          {a}
        </p>
      )}
    </div>
  );
}

export default function FaqSection() {
  const t = useTranslations("faq");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("is-visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items: FaqItem[] = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="fade-in-section bg-offwhite py-20 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.2em] text-gold text-center mb-4">FAQ</p>
        <h2 className="font-heading text-2xl sm:text-3xl text-center text-text mb-12" data-speakable>
          {t("headline")}
        </h2>
        <div>
          {items.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
