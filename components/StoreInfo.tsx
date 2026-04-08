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
              src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E8%A5%BF%E6%96%B0%E6%A9%8B1%E4%B8%81%E7%9B%AE18-11&output=embed"
              className="w-full aspect-video border-0 rounded"
              loading="lazy"
              allowFullScreen
            />

            <div className="mt-4">
              <Image
                src="/images/store.jpg"
                alt="T-Family Store"
                width={600}
                height={400}
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

            {/* Payment Methods */}
            <div className="mt-8 flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="text-[10px] tracking-wider text-subtext border border-border px-2 py-1"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
