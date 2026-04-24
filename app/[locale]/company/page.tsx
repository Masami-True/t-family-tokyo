import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyInfo from "@/components/CompanyInfo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "会社概要",
    description:
      "T-Family株式会社の会社概要。代表取締役 富永朝樹。東京都港区西新橋の中古ブランドバッグ専門店。2020年設立、資本金3000万円。",
    alternates: {
      canonical: `https://t-family.tokyo/${locale}/company`,
      languages: {
        ja: "https://t-family.tokyo/ja/company",
        en: "https://t-family.tokyo/en/company",
        zh: "https://t-family.tokyo/zh/company",
        ko: "https://t-family.tokyo/ko/company",
        es: "https://t-family.tokyo/es/company",
        fr: "https://t-family.tokyo/fr/company",
        "x-default": "https://t-family.tokyo/ja/company",
      },
    },
    openGraph: {
      url: `https://t-family.tokyo/${locale}/company`,
      locale:
        ({ ja: "ja_JP", en: "en_US", zh: "zh_CN", ko: "ko_KR", es: "es_ES", fr: "fr_FR" } as Record<string, string>)[locale] ?? "ja_JP",
    },
  };
}

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <CompanyInfo />
      </main>
      <Footer />
    </>
  );
}
