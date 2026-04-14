import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyInfo from "@/components/CompanyInfo";

export const metadata: Metadata = {
  title: "会社概要 | T-Family株式会社",
  description:
    "T-Family株式会社の会社概要。代表取締役 富永朝樹。東京都港区西新橋の中古ブランドバッグ専門店。2020年設立、資本金3000万円。",
  alternates: {
    canonical: "https://t-family.tokyo/ja/company",
  },
};

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
