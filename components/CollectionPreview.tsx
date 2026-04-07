"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const products = [
  {
    src: "/images/products/01.jpg",
    brand: "CHANEL",
    link: "https://t-secondhands.jp/collections/chanel",
  },
  {
    src: "/images/products/02.jpg",
    brand: "HERMÈS",
    link: "https://t-secondhands.jp/collections/hermes",
  },
  {
    src: "/images/products/03.jpg",
    brand: "LOUIS VUITTON",
    link: "https://t-secondhands.jp/collections/louisvuitton",
  },
  {
    src: "/images/products/04.jpg",
    brand: "CHRISTIAN DIOR",
    link: "https://t-secondhands.jp/collections/christian-dior",
  },
  {
    src: "/images/products/05.jpg",
    brand: "GUCCI",
    link: "https://t-secondhands.jp/collections/gucci",
  },
  {
    src: "/images/products/06.jpg",
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
            {/* Image */}
            <div className="relative aspect-square">
              <Image
                src={product.src}
                alt={product.brand}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Brand name - large */}
            <div className="p-4 text-center">
              <p className="text-sm sm:text-base tracking-[0.2em] font-medium text-text">
                {product.brand}
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
