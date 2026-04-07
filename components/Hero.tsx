"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const slides = [
  { src: "/images/hero/01.png", alt: "HERMÈS", brand: "HERMÈS" },
  { src: "/images/hero/02.png", alt: "GUCCI", brand: "GUCCI" },
  { src: "/images/hero/03.png", alt: "LOUIS VUITTON", brand: "LOUIS VUITTON" },
  { src: "/images/hero/04.png", alt: "FENDI", brand: "FENDI" },
  { src: "/images/hero/05.png", alt: "YSL", brand: "SAINT LAURENT" },
  { src: "/images/hero/06.png", alt: "PRADA", brand: "PRADA" },
  { src: "/images/hero/07.png", alt: "GOYARD", brand: "GOYARD" },
  { src: "/images/hero/08.png", alt: "BURBERRY", brand: "BURBERRY" },
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
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
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

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://t-secondhands.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white px-8 py-3.5 text-sm tracking-[0.15em] text-dark font-medium transition-all hover:bg-gold hover:text-white text-center"
              >
                {t("cta_shop")}
              </a>
              <a
                href="#live-seller"
                className="inline-block border border-white/30 px-8 py-3.5 text-sm tracking-[0.15em] text-white/80 transition-all hover:border-gold hover:text-gold text-center"
              >
                {t("cta_live")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mount Fuji silhouette - bottom right */}
      <div className="absolute bottom-0 right-0 z-[1] pointer-events-none hidden lg:block">
        <svg
          width="400"
          height="200"
          viewBox="0 0 400 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-[0.06]"
        >
          <path
            d="M400 200H0L120 120L160 60L180 30L200 10L220 30L240 60L280 120L400 200Z"
            fill="white"
          />
          <path
            d="M185 25L200 10L215 25L210 28L200 20L190 28Z"
            fill="#F4B4C6"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Sakura branch - top right corner */}
      <div className="absolute top-20 right-4 z-[3] pointer-events-none opacity-[0.08]">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M100 10C80 30 60 50 30 80" stroke="#F4B4C6" strokeWidth="1.5" fill="none" />
          <circle cx="85" cy="25" r="6" fill="#F4B4C6" opacity="0.6" />
          <circle cx="70" cy="40" r="5" fill="#F4B4C6" opacity="0.5" />
          <circle cx="55" cy="55" r="7" fill="#F4B4C6" opacity="0.4" />
          <circle cx="40" cy="70" r="4" fill="#F4B4C6" opacity="0.5" />
        </svg>
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
