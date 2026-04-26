"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Curated featured items from t-secondhands.jp — images served directly from Shopify CDN
// (t-secondhands.jp is whitelisted in next.config.ts images.remotePatterns)
const products = [
  {
    src: "https://t-secondhands.jp/cdn/shop/files/IMG-0868.jpg?v=1765858898&width=800",
    brand: "CHANEL",
    name: "Matelasse Diana Chain Shoulder Bag",
    link: "https://t-secondhands.jp/products/chanel-%E3%83%9E%E3%83%88%E3%83%A9%E3%83%83%E3%82%BB%E3%83%80%E3%82%A4%E3%82%A2%E3%83%8A-%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3-%E3%82%B7%E3%83%A7%E3%83%AB%E3%83%80%E3%83%BC%E3%83%90%E3%83%83%E3%82%B0-ch2038",
  },
  {
    src: "https://t-secondhands.jp/cdn/shop/files/2026-04-23_16_25_25_1.jpg?v=1776934860&width=800",
    brand: "HERMÈS",
    name: "Mini Constance Reversible H Belt",
    link: "https://t-secondhands.jp/products/hermes-leather-mini-constance-reversible-h-belt-black-red-gold-hardware-he450",
  },
  {
    src: "https://t-secondhands.jp/cdn/shop/files/2026-04-23_16_26_32_7.jpg?v=1776934949&width=800",
    brand: "LOUIS VUITTON",
    name: "Damier Graphite Daniel MM Messenger",
    link: "https://t-secondhands.jp/products/louis-vuitton-damier-graphite-daniel-mm-messenger-bag-black-silver-hardware-lo2367",
  },
  {
    src: "https://t-secondhands.jp/cdn/shop/files/2026-04-24_17_41_35_8.jpg?v=1777038239&width=800",
    brand: "PRADA",
    name: "Saffiano Leather Crossbody Shoulder Bag",
    link: "https://t-secondhands.jp/products/prada-saffiano-leather-flat-crossbody-shoulder-bag-black-gold-hardware-pr191",
  },
  {
    src: "https://t-secondhands.jp/cdn/shop/files/2026-04-24_17_39_04_9.jpg?v=1777032219&width=800",
    brand: "GUCCI",
    name: "Matelasse GG Marmont Small Camera Bag",
    link: "https://t-secondhands.jp/products/gucci-matelasse-gg-marmont-small-camera-bag-black-gold-hardware-gu584",
  },
  {
    src: "https://t-secondhands.jp/cdn/shop/files/2026-04-23_16_22_46.jpg?v=1776934748&width=800",
    brand: "FENDI",
    name: "Peekaboo Iconic Mini Handbag",
    link: "https://t-secondhands.jp/products/fendi-leather-peekaboo-iconic-mini-handbag-dove-grey-silver-hardware-fe369",
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
            {/* Image */}
            <div className="relative aspect-square">
              <Image
                src={product.src}
                alt={`${product.brand} ${product.name}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Brand name + product name */}
            <div className="p-4 text-center">
              <p className="text-sm sm:text-base tracking-[0.2em] font-medium text-text">
                {product.brand}
              </p>
              <p className="text-[11px] tracking-[0.05em] text-text/60 mt-1 line-clamp-1">
                {product.name}
              </p>
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
