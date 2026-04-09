"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const slides = [
  { src: "/images/hero/00.png", alt: "T-Family", brand: "T-FAMILY" },
  { src: "/images/hero/01.png", alt: "HERMÈS", brand: "HERMÈS" },
  { src: "/images/hero/02.png", alt: "GUCCI", brand: "GUCCI" },
  { src: "/images/hero/03.png", alt: "LOUIS VUITTON", brand: "LOUIS VUITTON" },
  { src: "/images/hero/04.png", alt: "FENDI", brand: "FENDI" },
  { src: "/images/hero/05.png", alt: "YSL", brand: "SAINT LAURENT" },
  { src: "/images/hero/06.png", alt: "PRADA", brand: "PRADA" },
  { src: "/images/hero/07.png", alt: "GOYARD", brand: "GOYARD" },
  { src: "/images/hero/08.png", alt: "BURBERRY", brand: "BURBERRY" },
  { src: "/images/hero/09.png", alt: "LOUIS VUITTON", brand: "LOUIS VUITTON" },
  { src: "/images/hero/10.jpg", alt: "TOKYO", brand: "TOKYO" },
  { src: "/images/hero/11.jpg", alt: "LUXURY", brand: "LUXURY" },
  { src: "/images/hero/12.png", alt: "GUCCI", brand: "GUCCI" },
];

const scrollBrands =
  "CHANEL · HERMÈS · LOUIS VUITTON · DIOR · PRADA · GUCCI · FENDI · YSL · GOYARD · BURBERRY · BVLGARI · CÉLINE · BALENCIAGA · MIU MIU · BOTTEGA VENETA";

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
    const delay = current === 0 ? 2000 : 1500;
    const timer = setTimeout(() => {
      goToSlide((current + 1) % slides.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [current, goToSlide]);

  return (
    <section className="relative h-[100vh] bg-[#111] overflow-hidden">
      {/* Flowing brand names in background - fills the dark space */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center opacity-[0.15] pointer-events-none select-none overflow-hidden">
        {[...Array(8)].map((_, row) => (
          <div
            key={row}
            className="whitespace-nowrap overflow-hidden"
            style={{ transform: `translateX(${row % 2 === 0 ? "0" : "-30"}%)` }}
          >
            <div
              className="inline-block animate-scroll-brands"
              style={{
                animationDuration: `${40 + row * 5}s`,
                animationDirection: row % 2 === 0 ? "normal" : "reverse",
              }}
            >
              <span className="text-[3vw] lg:text-[2.5vw] font-heading tracking-[0.15em] text-white">
                {scrollBrands} &nbsp;&nbsp; {scrollBrands} &nbsp;&nbsp;
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full image - object-contain so entire image is visible */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 z-[1] transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-contain object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Left gradient overlay for text readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:via-black/20" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/70 via-transparent to-black/30 lg:from-black/40" />

      {/* Text content - positioned in the left margin space */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-md lg:max-w-lg">
            {/* Eyebrow */}
            <p className="mb-6 text-[10px] tracking-[0.35em] text-gold/80 uppercase border border-gold/25 inline-block px-5 py-2">
              {t("eyebrow")}
            </p>

            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white">
              <span className="block">{t("h1_line1")}</span>
              <span className="block mt-2">
                <span className="text-gold">{t("h1_accent")}</span>
                {t("h1_line2")}
              </span>
            </h1>

            {/* Subcopy */}
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/50 tracking-wide max-w-sm">
              {t("subcopy")}
            </p>

            {/* Trust badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[10px] sm:text-xs tracking-wider text-gold border border-gold/30 px-3 py-1">
                {t("badge_auth")}
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider text-gold border border-gold/30 px-3 py-1">
                {t("badge_entrupy")}
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider text-gold border border-gold/30 px-3 py-1">
                {t("badge_refund")}
              </span>
            </div>

            {/* CTA Buttons - 4 actions */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="https://t-secondhands.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white px-6 py-3 text-sm tracking-[0.12em] text-dark font-medium transition-all hover:bg-gold hover:text-white text-center"
              >
                {t("cta_shop")}
              </a>
              <a
                href="https://wa.me/message/YLKX2G23XTTKM1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 text-sm tracking-[0.1em] text-white font-medium transition-all hover:opacity-90 text-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                WhatsApp
              </a>
              <a
                href="#store"
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm tracking-[0.1em] text-white/80 transition-all hover:border-gold hover:text-gold text-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                {t("cta_store")}
              </a>
              <a
                href="/liveseller/"
                className="inline-block border border-white/30 px-6 py-3 text-sm tracking-[0.1em] text-white/80 transition-all hover:border-gold hover:text-gold text-center"
              >
                {t("cta_live")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Brand name - bottom right */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
        <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase">
          {slides[current].brand}
        </p>
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
    </section>
  );
}
