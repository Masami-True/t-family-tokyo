"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const products = [
  {
    src: "/images/products/01.jpg",
    brand: "CHANEL",
    name: "Model wearing CHANEL Graffiti Bag",
    link: "https://t-secondhands.jp/collections/chanel",
  },
  {
    src: "/images/products/02.jpg",
    brand: "CHANEL",
    name: "Matelasse Collection — Black × Gold",
    link: "https://t-secondhands.jp/collections/chanel",
  },
  {
    src: "/images/products/03.png",
    brand: "CHRISTIAN DIOR",
    name: "Lady Dior — Special Edition",
    link: "https://t-secondhands.jp/collections/christian-dior%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC-1",
  },
  {
    src: "/images/products/04.jpg",
    brand: "CHANEL",
    name: "White Collection — Matelasse Series",
    link: "https://t-secondhands.jp/collections/chanel",
  },
  {
    src: "/images/products/05.jpg",
    brand: "CHANEL",
    name: "Duma Backpack — Tokyo Sakura",
    link: "https://t-secondhands.jp/collections/chanel",
  },
  {
    src: "/images/products/06.jpg",
    brand: "CHANEL",
    name: "Navy Caviar Shoulder Bag",
    link: "https://t-secondhands.jp/collections/chanel",
  },
];

const brandLinks = [
  { name: "CHANEL", href: "https://t-secondhands.jp/collections/chanel" },
  { name: "LOUIS VUITTON", href: "https://t-secondhands.jp/collections/louisvuitton" },
  { name: "HERMÈS", href: "https://t-secondhands.jp/collections/hermes" },
  { name: "GUCCI", href: "https://t-secondhands.jp/collections/gucci" },
  { name: "PRADA", href: "https://t-secondhands.jp/collections/prada" },
  { name: "FENDI", href: "https://t-secondhands.jp/collections/fendi" },
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
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="text-xs tracking-[0.15em] text-subtext">
                {product.brand}
              </p>
              <p className="text-sm mt-1 text-text">{product.name}</p>
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

      {/* Brand Links */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {brandLinks.map((brand) => (
          <a
            key={brand.name}
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wider text-subtext hover:text-gold transition-colors"
          >
            {brand.name}
          </a>
        ))}
      </div>
    </section>
  );
}
