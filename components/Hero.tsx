"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const slides = [
  { src: "/images/hero/01.png", alt: "HERMÈS" },
  { src: "/images/hero/02.png", alt: "GUCCI" },
  { src: "/images/hero/03.png", alt: "LOUIS VUITTON" },
  { src: "/images/hero/04.png", alt: "FENDI" },
  { src: "/images/hero/05.png", alt: "YSL" },
  { src: "/images/hero/06.png", alt: "PRADA" },
  { src: "/images/hero/07.png", alt: "GOYARD" },
  { src: "/images/hero/08.png", alt: "BURBERRY" },
];

export default function Hero() {
  const t = useTranslations("hero");
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <p className="mb-4 text-[11px] tracking-[0.3em] text-gold/80 uppercase border border-gold/30 inline-block px-6 py-2">
          {t("eyebrow")}
        </p>

        {/* Heading */}
        <h1 className="mt-6 font-heading text-5xl leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block">{t("h1_line1")}</span>
          <span className="block mt-2">
            <span className="text-gold">{t("h1_accent")}</span>
            {t("h1_line2")}
          </span>
        </h1>

        {/* Subcopy */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 tracking-wide">
          {t("subcopy")}
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://t-secondhands.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white px-10 py-4 text-sm tracking-[0.15em] text-dark font-medium transition-all hover:bg-gold hover:text-white"
          >
            {t("cta_shop")}
          </a>
          <a
            href="#live-seller"
            className="inline-block border border-white/40 bg-transparent px-10 py-4 text-sm tracking-[0.15em] text-white transition-all hover:border-gold hover:text-gold"
          >
            {t("cta_live")}
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-[2px] transition-all duration-500 ${
              i === current
                ? "w-8 bg-gold"
                : "w-4 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Brand name indicator */}
      <div className="absolute bottom-8 right-8 z-10">
        <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
          {slides[current].alt}
        </p>
      </div>
    </section>
  );
}
