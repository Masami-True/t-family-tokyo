"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CompanyInfo() {
  const t = useTranslations("b2b");

  const companyInfo = [
    { label: "info_company", value: "T-Family株式会社" },
    { label: "info_ceo", value: "富永 朝樹" },
    { label: "info_established", value: "2020.11.27" },
    { label: "info_capital", value: "3,000万円" },
    { label: "info_employees", value: "8名" },
    { label: "info_license", value: "第301132115776号" },
    { label: "info_tel", value: "03-6822-8487" },
    { label: "info_email", value: "info@t-family.tokyo" },
  ];

  return (
    <section className="bg-offwhite py-24 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl text-center text-text mb-2">
          {t("company_title")}
        </h1>
        <div className="w-12 h-[1px] bg-gold mx-auto mb-12" />

        <div className="flex justify-center mb-10">
          <Image
            src="/images/logo.png"
            alt="T-Family"
            width={120}
            height={60}
            className="h-14 w-auto object-contain"
          />
        </div>

        <div className="space-y-0">
          {companyInfo.map((item) => (
            <div
              key={item.label}
              className="flex border-b border-border py-4"
            >
              <span className="text-subtext text-xs tracking-[0.15em] w-36 shrink-0 pt-0.5">
                {t(item.label)}
              </span>
              <span className="text-text text-sm">
                {item.value}
              </span>
            </div>
          ))}
          <div className="flex border-b border-border py-4">
            <span className="text-subtext text-xs tracking-[0.15em] w-36 shrink-0 pt-0.5">
              {t("info_address")}
            </span>
            <span className="text-text text-sm whitespace-pre-line">
              {t("info_address_value")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
