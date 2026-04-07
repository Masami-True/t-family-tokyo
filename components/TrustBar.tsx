"use client";

import { useTranslations } from "next-intl";

const brands = [
  "CHANEL",
  "LOUIS VUITTON",
  "HERMÈS",
  "CHRISTIAN DIOR",
  "PRADA",
  "GUCCI",
  "FENDI",
  "BVLGARI",
  "CÉLINE",
  "YSL",
  "BALENCIAGA",
  "MIU MIU",
];

export default function TrustBar() {
  const t = useTranslations();

  const brandList = brands.join(" · ");

  return (
    <section className="bg-cream py-4 overflow-hidden">
      <div className="flex items-center justify-between px-6">
        {/* Left label */}
        <span className="hidden md:block text-xs tracking-[0.2em] text-subtext font-medium whitespace-nowrap shrink-0">
          {t("trust.label")}
        </span>

        {/* Center scrolling brands */}
        <div className="flex-1 overflow-hidden mx-4">
          <div className="animate-scroll-brands flex whitespace-nowrap">
            <span className="text-sm tracking-widest text-subtext/70">
              {brandList}
            </span>
            <span className="text-sm tracking-widest text-subtext/70 ml-8">
              {brandList}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
