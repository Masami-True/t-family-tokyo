"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Brand key visuals — sourced from the BRAND section of t-secondhands.jp
// Each visual captures the brand × Japan aesthetic (model + iconic Japanese location)
// (t-secondhands.jp is whitelisted in next.config.ts images.remotePatterns)
const products = [
  {
    src: "https://t-secondhands.jp/cdn/shop/collections/Luxury_Japan_1800x900_chanel-classic.png?v=1777214117&width=1200",
    brand: "CHANEL",
    link: "https://t-secondhands.jp/collections/chanel",
  },
  {
    src: "https://t-secondhands.jp/cdn/shop/collections/Gemini_Generated_Image_63buaw63buaw63bu.png?v=1777216311&width=1200",
    brand: "HERMÈS",
    link: "https://t-secondhands.jp/collections/hermes",
  },
  {
    src: "https://t-secondhands.jp/cdn/shop/collections/Luxury_Japan_Wide_vuitton-alma.png?v=1777214195&width=1200",
    brand: "LOUIS VUITTON",
    link: "https://t-secondhands.jp/collections/louisvuitton",
  },
  {
    src: "https://t-secondhands.jp/cdn/shop/collections/Luxury_Japan_Wide_prada-tote.png?v=1777214164&width=1200",
    brand: "PRADA",
    link: "https://t-secondhands.jp/collections/prada",
  },
  {
    src: "https://t-secondhands.jp/cdn/shop/collections/Luxury_Japan_2-1_gucci-wide.png?v=1777214234&width=1200",
    brand: "GUCCI",
    link: "https://t-secondhands.jp/collections/gucci",
  },
  {
    src: "https://t-secondhands.jp/cdn/shop/collections/Luxury_Japan_2-1_fendi-wide-zucca.png?v=1776776064&width=1200",
    brand: "FENDI",
    link: "https://t-secondhands.jp/collections/fendi",
  },
];

export default function CollectionPreview() {
  const t = useTranslations("collection");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="fade-in-section bg-offwhite py-24 px-6">
      {/* Label */}
      <p className="text-xs tracking-[0.2em] text-gold text-center mb-2">
        {t("label")}
      </p>

      {/* Headline */}
      <h2 className="font-heading text-4xl text-center mb-12">
        {t("headline")}
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[1.5px] bg-border max-w-5xl mx-auto">
        {products.map((product) => (
          <a
            key={product.src}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-offwhite relative overflow-hidden group"
          >
            {/* Image with brand name overlay at bottom */}
            <div className="relative aspect-square">
              <Image
                src={product.src}
                alt={`${product.brand} | T-Family 中古ブランドバッグ`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark gradient at bottom for text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
              {/* Brand name overlay */}
              <p className="absolute inset-x-0 bottom-5 text-center text-white text-base sm:text-lg tracking-[0.25em] font-medium drop-shadow-lg">
                {product.brand}
              </p>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="https://t-secondhands.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-gold text-gold px-8 py-3 text-sm tracking-[0.15em] hover:bg-gold hover:text-offwhite transition-all"
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
