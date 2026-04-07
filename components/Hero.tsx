"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(250,250,248,0.12)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <p className="mb-6 text-[11px] tracking-[0.25em] text-gold">
          {t("eyebrow")}
        </p>

        {/* Heading */}
        <h1 className="font-heading text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">{t("h1_line1")}</span>
          <span className="block">{t("h1_line2")}</span>
        </h1>

        {/* Subcopy */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80">
          {t("subcopy")}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://t-secondhands.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold px-8 py-3 text-sm uppercase tracking-widest text-dark transition-opacity hover:opacity-90"
          >
            {t("cta_shop")}
          </a>
          <a
            href="#live-seller"
            className="inline-block border border-gold bg-transparent px-8 py-3 text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold/10"
          >
            {t("cta_live")}
          </a>
        </div>
      </div>
    </section>
  );
}
