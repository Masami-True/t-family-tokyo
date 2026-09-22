"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function StoreInfo() {
  const t = useTranslations("store");
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

  const paymentMethods = [
    "VISA",
    "MASTER",
    "JCB",
    "AMEX",
    "PayPay",
    "Alipay",
    "PayPal",
    "WISE",
    "Apple Pay",
    "Google Pay",
  ];

  return (
    <>
      <section
        id="store"
        ref={sectionRef}
        className="fade-in-section bg-offwhite py-24 px-6"
      >
        {/* Label */}
        <p className="text-xs tracking-[0.2em] text-gold text-center mb-12">
          {t("label")}
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left column — Map & Photos */}
          <div>
            <iframe
              src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%8A%80%E5%BA%A73-12-17+T-Family%E3%83%93%E3%83%AB&output=embed"
              className="w-full aspect-video border-0 rounded"
              loading="lazy"
              allowFullScreen
            />

            <div className="mt-4">
              <Image
                src="/images/store-cropped.jpg"
                alt="T-VINTAGE GINZA 店舗外観"
                width={1086}
                height={748}
                className="w-full aspect-[3/2] object-cover rounded"
              />
            </div>
          </div>

          {/* Right column — Info */}
          <div>
            <h3 className="font-heading text-2xl mb-4">{t("name")}</h3>
            <p className="text-subtext text-sm whitespace-pre-line mb-4">
              {t("address")}
            </p>
            <p className="text-sm mb-4">
              <span className="mr-2">●</span>
              {t("hours")}
            </p>

            {/* Access */}
            <div className="mb-6">
              <p className="text-sm text-subtext mb-1">{t("access1")}</p>
              <p className="text-sm text-subtext mb-1">{t("access2")}</p>
              <p className="text-sm text-subtext mb-1">{t("access3")}</p>
              <p className="text-sm text-subtext mb-1">{t("access4")}</p>
            </div>

            {/* Contact */}
            <p className="text-sm mb-1">TEL: {t("tel")}</p>
            <p className="text-sm mb-6">
              EMAIL:{" "}
              <a
                href={`mailto:${t("email")}`}
                className="text-gold hover:underline"
              >
                {t("email")}
              </a>
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/message/YLKX2G23XTTKM1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp text-white px-6 py-3 text-sm tracking-wider hover:opacity-90 transition-opacity"
              >
                WHATSAPP
              </a>
            </div>

            {/* Payment Methods - prominent */}
            <div className="mt-8">
              <p className="text-xs tracking-[0.15em] text-gold font-medium mb-3">PAYMENT METHODS</p>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="text-xs tracking-wider text-text bg-cream border border-border px-3 py-1.5 rounded font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>
              <p className="text-[10px] text-subtext mt-2">銀行振込（ゆうちょ銀行 / みずほ銀行）/ 現金 / 電子マネー</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
